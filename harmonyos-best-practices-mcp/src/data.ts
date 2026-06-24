import * as fs from "node:fs";
import * as path from "node:path";

/** A single code-reference line under a doc in the index. */
export interface CodeRef {
  label: string;
  repo: string;        // "owner/repo"
  localPath: string;   // relative to project root, "" if not cloned
  remote: string;      // url
  status: "cloned" | "skipped" | "missing";
}

export interface DocMeta {
  docId: string;
  title: string;
  topic: string;       // 大类(路径首段)
  subtitle: string;    // 小标题(路径首段之后的剩余,可多级)
  path: string;        // 完整分类路径: "大类 / 小标题..."(用于 list_by_topic 多级下钻)
  codeRefs: CodeRef[];
  hasCode: boolean;    // any codeRef with status === "cloned"
  readmeDigest: string; // concatenated README intros of cloned repos (for search scoring)
  headings: string;    // all markdown heading texts joined (for search scoring)
}

const SEP = " / ";

/** Build full category path from topic + subtitle. */
function buildPath(topic: string, subtitle: string): string {
  return subtitle ? `${topic}${SEP}${subtitle}` : topic;
}

export interface DataStore {
  docs: Map<string, DocMeta>;
  topics: Map<string, string[]>; // 大类 -> docId[]
  docsDir: string;
  codeDir: string;
}

/**
 * Resolve package root: directory containing dist/ (where this file compiles to).
 * Bundled docs live under <pkgroot>/data/. When running from source (src/),
 * pkgroot is the harmonyos-best-practices-mcp dir and data/ is populated by the prepack script.
 */
function pkgRoot(): string {
  const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\//, ""));
  // dist/data.js -> pkgroot; src/data.ts (dev) -> harmonyos-best-practices-mcp dir.
  return path.resolve(here, "..");
}

function defaultPaths() {
  const root = pkgRoot();
  const dataDir = path.join(root, "data");
  return {
    // Bundled docs (shipped in the npm package under data/docs).
    docsDir: process.env.BP_DOCS_DIR || path.join(dataDir, "docs"),
    // Code dir is NOT bundled (8GB). User points to their local clone via env.
    // Empty string means "no local code" -> get_code_example returns gitcode URLs only.
    codeDir: process.env.BP_CODE_DIR || "",
    // Code-repo index (docId -> repo mapping), machine-consumed. Renamed from
    // index.md to code_list.md to disambiguate from the human-readable INDEX.md.
    indexFile: process.env.BP_INDEX || path.join(dataDir, "code_list.md"),
    // Crawler log (status \t docId \t "大类 / 小标题"), drives categorization.
    // Lives at data/ root (sibling of code_list.md / INDEX.md), not under docs/.
    logFile: process.env.BP_LOG || path.join(dataDir, "index_log.txt"),
  };
}

function parseStatus(line: string): CodeRef["status"] | null {
  if (line.includes("✅")) return "cloned";
  if (line.includes("⏭️")) return "skipped";
  if (line.includes("❌")) return "missing";
  return null;
}

/** Parse section "一、文档 → 关联代码" of the index file. */
function parseIndex(indexFile: string): Map<string, DocMeta> {
  const text = fs.readFileSync(indexFile, "utf8");
  const lines = text.split(/\r?\n/);

  const docs = new Map<string, DocMeta>();
  let current: DocMeta | null = null;

  // Heading line: ### `docId` — title
  const headingRe = /^###\s+`([^`]+)`\s*[—-]\s*(.+?)\s*$/;
  // Bullet line: - ✅ 已克隆 **label**
  const bulletRe = /^-\s+(.+?)\s+\*\*(.+?)\*\*\s*$/;
  // sub lines
  const repoRe = /仓库：`([^`]+)`/;
  const localRe = /本地：`([^`]*)`|本地：—/;
  const remoteRe = /远程：<([^>]+)>/;

  const flush = () => {
    if (current) {
      current.hasCode = current.codeRefs.some((c) => c.status === "cloned");
      docs.set(current.docId, current);
      current = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Stop at section "二" (reverse index).
    if (/^##\s+二/.test(line)) break;

    const h = line.match(headingRe);
    if (h) {
      flush();
      current = {
        docId: h[1],
        title: h[2].trim(),
        topic: "",
        subtitle: "",
        path: "",
        codeRefs: [],
        hasCode: false,
        readmeDigest: "",
        headings: "",
      };
      continue;
    }

    if (!current) continue;

    const status = parseStatus(line);
    const b = line.match(bulletRe);
    if (status && b) {
      current.codeRefs.push({
        label: b[2].trim(),
        repo: "",
        localPath: "",
        remote: "",
        status,
      });
      continue;
    }

    // sub-line indented: 仓库 / 本地 / 远程
    const last = current.codeRefs[current.codeRefs.length - 1];
    if (!last) continue;

    const rm = line.match(repoRe);
    if (rm) last.repo = rm[1];
    const lm = line.match(localRe);
    if (lm) last.localPath = lm[1] ?? "";
    if (/本地：—/.test(line)) last.localPath = "";
    const rm2 = line.match(remoteRe);
    if (rm2) last.remote = rm2[1];
  }
  flush();
  return docs;
}

/** Parse index_log.txt: status \t docId \t "大类 / 小标题" */
function parseCrawlLog(logFile: string, docs: Map<string, DocMeta>) {
  if (!fs.existsSync(logFile)) return;
  const text = fs.readFileSync(logFile, "utf8");
  for (const raw of text.split(/\r?\n/)) {
    if (!raw.trim()) continue;
    const parts = raw.split("\t");
    if (parts.length < 3) continue;
    const docId = parts[1].trim();
    const cat = parts.slice(2).join("\t").trim();
    const slashIdx = cat.indexOf(" / ");
    const topic = slashIdx >= 0 ? cat.slice(0, slashIdx).trim() : cat.trim();
    const subtitle = slashIdx >= 0 ? cat.slice(slashIdx + 3).trim() : "";
    const meta = docs.get(docId);
    if (meta) {
      meta.topic = topic;
      meta.subtitle = subtitle;
      meta.path = buildPath(topic, subtitle);
    } else {
      // doc in log but not in index (e.g. 237 no-code docs) — create it.
      docs.set(docId, {
        docId,
        title: subtitle || docId,
        topic,
        subtitle,
        path: buildPath(topic, subtitle),
        codeRefs: [],
        hasCode: false,
        readmeDigest: "",
        headings: "",
      });
    }
  }
}

let _store: DataStore | null = null;

export function getStore(): DataStore {
  if (_store) return _store;
  const { docsDir, codeDir, indexFile, logFile } = defaultPaths();
  if (!fs.existsSync(indexFile)) {
    throw new Error(
      `索引文件不存在: ${indexFile}\n` +
        `若从源码运行,请先执行 npm run prepack 拷贝数据到 data/;\n` +
        `或通过环境变量 BP_INDEX / BP_DOCS_DIR 指向资料目录。`
    );
  }
  if (!fs.existsSync(logFile)) {
    throw new Error(
      `分类日志不存在: ${logFile}\n` +
        `该文件驱动文档分类,缺失会导致全部文档落入"未分类"。\n` +
        `若从源码运行,请先执行 npm run prepack 拷贝数据到 data/;\n` +
        `或通过环境变量 BP_LOG 指向 index_log.txt。`
    );
  }
  const docs = parseIndex(indexFile);
  parseCrawlLog(logFile, docs);

  const topics = new Map<string, string[]>();
  for (const meta of docs.values()) {
    if (!meta.topic) {
      meta.topic = "未分类";
      if (!meta.path) meta.path = "未分类";
    }
    const arr = topics.get(meta.topic) || [];
    arr.push(meta.docId);
    topics.set(meta.topic, arr);
  }

  // Preload a short README digest for each cloned repo, used for search scoring.
  // Only read when codeDir is configured; otherwise leave empty (search still works on doc text).
  if (codeDir) {
    for (const meta of docs.values()) {
      if (!meta.hasCode) continue;
      const digests: string[] = [];
      for (const ref of meta.codeRefs) {
        if (ref.status !== "cloned" || !ref.localPath) continue;
        const repoAbs = resolveCodePath(codeDir, ref.localPath);
        const intro = readReadmeIntro(repoAbs);
        if (intro) digests.push(intro);
      }
      meta.readmeDigest = digests.join(" \n ");
    }
  }

  // Preload all markdown headings for each doc — rich section-level signal for search.
  for (const meta of docs.values()) {
    meta.headings = extractHeadings(docsDir, meta.docId);
  }

  _store = { docs, topics, docsDir, codeDir };
  return _store;
}

/** Extract all markdown heading texts from a doc, joined by space. Light & full-text. */
export function extractHeadings(docsDir: string, docId: string): string {
  const file = path.join(docsDir, `${docId}.md`);
  let text: string;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    return "";
  }
  const heads: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (m) {
      // strip inline markdown noise (**bold**, `code`, links)
      const clean = m[1]
        .replace(/\*\*/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .trim();
      if (clean) heads.push(clean);
    }
  }
  return heads.join("  ");
}

/** Read the intro section (project overview) of a repo's README.md, ~300 chars. */
export function readReadmeIntro(repoAbs: string): string {
  const file = path.join(repoAbs, "README.md");
  let text: string;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    return "";
  }
  // Try to isolate the "项目简介/Overview/简介" section: from that heading up to the
  // next section (效果预览/使用说明/How to Use/Effect/工程目录...).
  const startMatch = text.match(/(?:^|\n)#+\s*(项目简介|简介|Overview|Project Overview|介绍)\s*\n/i);
  let body: string;
  if (startMatch) {
    const after = text.slice((startMatch.index ?? 0) + startMatch[0].length);
    const endMatch = after.match(/\n#+\s*(效果预览|使用说明|工程目录|Project Directory|How to Use|Effect|具体实现|相关概念|目录结构)/i);
    body = endMatch ? after.slice(0, endMatch.index) : after;
  } else {
    // No intro heading: take everything before the first ## section after the title.
    const lines = text.split(/\r?\n/);
    body = lines.slice(1, 40).join("\n");
  }
  const cleaned = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, 300);
}

/** Read a repo's README.md full text (for get_code_example). Null if missing. */
export function readRepoReadme(repoAbs: string): string | null {
  const file = path.join(repoAbs, "README.md");
  if (!fs.existsSync(file)) return null;
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

/**
 * Parse the "工程目录 / Project Directory" tree from a README, returning a map of
 * basename -> purpose comment (e.g. "VideoList.ets" -> "视频列表组件").
 * Returns empty map if no tree found.
 */
export function parseReadmeTree(readme: string): Map<string, string> {
  const out = new Map<string, string>();
  if (!readme) return out;
  // Find the directory-tree code block: usually after "工程目录"/"Project Directory"/"目录结构".
  const marker = readme.match(/(工程目录|Project Directory|目录结构|目录说明)[^\n]*\n/i);
  let start = marker ? marker.index! + marker[0].length : -1;
  let block = "";
  if (start >= 0) {
    // Take the fenced ``` ... ``` block that follows, or indented tree lines.
    const after = readme.slice(start);
    const fence = after.match(/```[\s\S]*?```/);
    if (fence) {
      block = fence[0].replace(/```/g, "");
    } else {
      // fallback: lines that look like tree (contain ├── or │ or //)
      const lines = after.split(/\r?\n/).filter((l) => /^[│├└\s]*[─-]/.test(l) || l.includes("//"));
      block = lines.join("\n");
    }
  }
  if (!block) return out;
  // Each tree line: optional tree chars, a path/file, optional "// purpose"
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/([A-Za-z0-9_\-./]+\.(?:ets|ts))\s*\/\/\s*(.+?)\s*$/);
    if (m) {
      const base = m[1].split("/").pop()!.trim();
      out.set(base, m[2].trim());
    }
  }
  return out;
}

/** Read a doc's full markdown body. Returns null if missing. */
export function readDoc(docsDir: string, docId: string): string | null {
  const file = path.join(docsDir, `${docId}.md`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

/** Resolve a codeRef.localPath (relative to project root) to an absolute fs path. */
export function resolveCodePath(codeDir: string, localPath: string): string {
  if (!localPath) return "";
  // localPath like "best_practices_code/harmonyos_samples__component-reuse/"
  // Take the repo dir name and join with codeDir (== <root>/best_practices_code).
  const norm = localPath.replace(/\\/g, "/").replace(/\/+$/, "");
  const repoDir = norm.split("/").pop() || "";
  return path.join(codeDir, repoDir);
}
