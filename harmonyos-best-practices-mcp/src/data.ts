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
  topic: string;       // 大类
  subtitle: string;    // 小标题
  codeRefs: CodeRef[];
  hasCode: boolean;    // any codeRef with status === "cloned"
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
    indexFile: process.env.BP_INDEX || path.join(dataDir, "index.md"),
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
        codeRefs: [],
        hasCode: false,
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

/** Parse _crawl_log.txt: status \t docId \t "大类 / 小标题" */
function parseCrawlLog(docsDir: string, docs: Map<string, DocMeta>) {
  const logFile = path.join(docsDir, "_crawl_log.txt");
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
    } else {
      // doc in log but not in index (e.g. 237 no-code docs) — create it.
      docs.set(docId, {
        docId,
        title: subtitle || docId,
        topic,
        subtitle,
        codeRefs: [],
        hasCode: false,
      });
    }
  }
}

let _store: DataStore | null = null;

export function getStore(): DataStore {
  if (_store) return _store;
  const { docsDir, codeDir, indexFile } = defaultPaths();
  if (!fs.existsSync(indexFile)) {
    throw new Error(
      `索引文件不存在: ${indexFile}\n` +
        `若从源码运行,请先执行 npm run prepack 拷贝数据到 data/;\n` +
        `或通过环境变量 BP_INDEX / BP_DOCS_DIR 指向资料目录。`
    );
  }
  const docs = parseIndex(indexFile);
  parseCrawlLog(docsDir, docs);

  const topics = new Map<string, string[]>();
  for (const meta of docs.values()) {
    if (!meta.topic) meta.topic = "未分类";
    const arr = topics.get(meta.topic) || [];
    arr.push(meta.docId);
    topics.set(meta.topic, arr);
  }

  _store = { docs, topics, docsDir, codeDir };
  return _store;
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
