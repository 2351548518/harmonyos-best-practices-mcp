#!/usr/bin/env node
import * as fs from "node:fs";
import * as path from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  getStore, readDoc, resolveCodePath, readRepoReadme, readReadmeIntro,
  parseReadmeTree, type DocMeta, type CodeRef,
} from "./data.js";
import { search } from "./search.js";

const store = getStore();

const server = new McpServer({
  name: "harmonyos-best-practices",
  version: "0.1.0",
});

const SEP = " / ";

/* ------------------------------------------------------------------ *
 * Tool 1: search_best_practices
 * ------------------------------------------------------------------ */
server.tool(
  "search_best_practices",
  "检索鸿蒙最佳实践文档(Full-text search over 452 HarmonyOS best-practice docs). " +
    "输入要开发的功能/问题关键词(中英文均可,如 '长列表 组件复用 丢帧' 或 'AVPlayer 短视频'). " +
    "返回最相关的文档列表(含标题、主题、是否有配套代码、代码仓库名). " +
    "拿到 docId 后用 get_doc 读全文,用 get_code_example 取本地代码路径.",
  {
    query: z.string().describe("检索关键词,描述你要做的功能或遇到的问题"),
    limit: z.number().int().positive().max(30).default(8).describe("返回条数,默认 8"),
  },
  async ({ query, limit }) => {
    const hits = search(store, query, limit);
    if (hits.length === 0) {
      return text(`未找到与 "${query}" 相关的最佳实践。可尝试更换关键词,或用 list_by_topic 浏览主题分类。`);
    }
    const lines = hits.map((h, i) => {
      const code = h.hasCode ? `✅有代码 [${h.codeRepos.join(", ")}]` : "无代码";
      return `${i + 1}. ${h.docId} — ${h.title}\n   主题: ${h.topic} | ${code}\n   小标题: ${h.subtitle}`;
    });
    return text(
      `命中 ${hits.length} 篇(按相关度排序):\n\n${lines.join("\n\n")}\n\n` +
        `提示: 用 get_doc({name:"<docId>"}) 读全文; 若有代码用 get_code_example({docName:"<docId>"}) 取本地路径.`
    );
  }
);

/* ------------------------------------------------------------------ *
 * Tool 2: get_doc
 * ------------------------------------------------------------------ */
server.tool(
  "get_doc",
  "读取指定最佳实践文档的完整 Markdown 正文(Read full markdown of a best-practice doc by its docId/fileName). " +
    "docId 形如 bpta-component-reuse、multi-short-video-app.",
  {
    name: z.string().describe("文档标识 docId(即文件名,不含 .md)"),
  },
  async ({ name }) => {
    const body = readDoc(store.docsDir, name);
    if (body === null) {
      return text(`文档 "${name}" 不存在。请确认 docId,可通过 search_best_practices 或 list_by_topic 获取。`);
    }
    return text(body);
  }
);

/* ------------------------------------------------------------------ *
 * Tool 3: get_code_example
 * ------------------------------------------------------------------ */
server.tool(
  "get_code_example",
  "获取某篇最佳实践文档关联的参考代码(List reference code repos & entry files for a best-practice doc). " +
    "返回本地仓库绝对路径、远程 URL、以及入口 .ets/.ts 文件,便于直接读取真实代码.",
  {
    docName: z.string().describe("文档 docId"),
  },
  async ({ docName }) => {
    const meta = store.docs.get(docName);
    if (!meta) return text(`文档 "${docName}" 不存在。`);
    if (meta.codeRefs.length === 0) {
      return text(`文档 "${docName}" 未关联任何代码示例(纯理论/分析类文档)。`);
    }
    const blocks = meta.codeRefs.map((ref) => formatCodeRef(ref));
    return text(
      `文档 "${meta.title}" 关联代码 (${meta.codeRefs.length} 条):\n\n` +
        blocks.join("\n\n---\n\n")
    );
  }
);

function formatCodeRef(ref: CodeRef): string {
  const lines: string[] = [];
  lines.push(`• ${ref.label}`);
  lines.push(`  仓库: ${ref.repo}`);
  lines.push(`  状态: ${statusText(ref.status)}`);
  lines.push(`  远程: ${ref.remote}`);
  if (ref.status !== "cloned" || !ref.localPath) {
    return lines.join("\n");
  }
  if (!store.codeDir) {
    lines.push(`  本地: (未配置代码目录; 设置环境变量 BP_CODE_DIR 指向本地代码根目录即可读取真实代码)`);
    return lines.join("\n");
  }
  const abs = resolveCodePath(store.codeDir, ref.localPath);
  const exists = fs.existsSync(abs);
  lines.push(`  本地: ${abs}${exists ? "" : "  ⚠️ 路径在磁盘上不存在(检查 BP_CODE_DIR 或自行克隆该仓库)"}`);
  if (exists) {
    // README 简介 + 工程目录树(若有),帮助快速理解仓库用途与文件分工.
    const intro = readReadmeIntro(abs);
    if (intro) lines.push(`  简介: ${intro}`);
    const readme = readRepoReadme(abs);
    const tree = readme ? parseReadmeTree(readme) : new Map<string, string>();
    const entries = listEntryFiles(abs);
    if (entries.length) {
      lines.push(`  入口文件:`);
      for (const e of entries) {
        const base = path.basename(e);
        const purpose = tree.get(base);
        lines.push(purpose ? `    - ${e}  // ${purpose}` : `    - ${e}`);
      }
    }
  }
  return lines.join("\n");
}

function statusText(s: CodeRef["status"]): string {
  return s === "cloned" ? "✅ 已克隆" : s === "skipped" ? "⏭️ 核心仓跳过" : "❌ 缺失";
}

/**
 * Find up to 8 entry source files (.ets/.ts) in a repo.
 * Strategy: try a list of well-known source dirs (pages > view/components > ets),
 * each scanned recursively; if none yield files, walk the whole repo (skipping
 * noise dirs) so unusual module layouts (library/, features/, products/) still work.
 */
function listEntryFiles(repoAbs: string): string[] {
  const LIMIT = 8;
  // Ordered: prefer pages/, then view/components, then the ets root of each module.
  // Covers entry/, library/, features/<x>/, products/<phone>/ style layouts.
  const candidates = [
    "entry/src/main/ets/pages",
    "entry/src/main/ets/view",
    "entry/src/main/ets/views",
    "entry/src/main/ets/components",
    "entry/src/main/ets",
    "library/src/main/ets/pages",
    "library/src/main/ets",
  ];
  for (const c of candidates) {
    const dir = path.join(repoAbs, c);
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      const files = listDirFiles(dir, [".ets", ".ts"], LIMIT);
      if (files.length) return files;
    }
  }
  // Fallback: walk the whole repo, skipping noise. Deep enough for multi-module layouts.
  return walkSources(repoAbs, LIMIT, 8);
}

/** True for config/test/build noise files we don't want as "entry" examples. */
function isNoiseFile(name: string): boolean {
  const lower = name.toLowerCase();
  if (lower.startsWith("hvigorfile")) return true;
  if (lower.endsWith(".test.ts") || lower.endsWith(".test.ets")) return true;
  if (lower === "build-profile.ts") return true;
  if (lower === "oh-package.json5.ts") return true;
  return false;
}

/** Rank: pages/ > view/components > Index.ets > other .ets > .ts. Lower = better. */
function fileRank(fullPath: string): number {
  const norm = fullPath.replace(/\\/g, "/").toLowerCase();
  if (norm.includes("/pages/")) return 0;
  if (norm.includes("/view/") || norm.includes("/views/")) return 1;
  if (norm.includes("/components/")) return 2;
  if (norm.endsWith("/index.ets")) return 3;
  if (norm.endsWith(".ets")) return 4;
  return 5; // .ts
}

/** Recursively collect .ets/.ts source files under dir, skipping noise dirs/files. */
function listDirFiles(dir: string, exts: string[], limit: number): string[] {
  const out: string[] = [];
  const visit = (d: string) => {
    if (out.length >= 64) return; // collect a pool then rank+trim
    let ents: fs.Dirent[];
    try {
      ents = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of ents) {
      if (e.isDirectory()) {
        if (SKIP_DIRS.has(e.name)) continue;
        visit(path.join(d, e.name));
      } else if (e.isFile() && exts.some((x) => e.name.endsWith(x)) && !isNoiseFile(e.name)) {
        out.push(path.join(d, e.name));
      }
    }
  };
  visit(dir);
  out.sort((a, b) => fileRank(a) - fileRank(b) || a.localeCompare(b));
  return out.slice(0, limit);
}

const SKIP_DIRS = new Set([
  "resources", "build", "oh_modules", "node_modules", ".git", ".cxx",
  "cpp", "libs", "rawfile", "media", "drawable", "element",
  "test", "ohosTest", "testrunner", ".test", ".hvigor", ".idea",
  "commons", "hvigor", "scripts",
]);
function walkSources(dir: string, limit: number, maxDepth: number): string[] {
  const out: string[] = [];
  const visit = (d: string, depth: number) => {
    if (out.length >= 64 || depth > maxDepth) return;
    let ents: fs.Dirent[];
    try {
      ents = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of ents) {
      if (e.isDirectory()) {
        if (SKIP_DIRS.has(e.name)) continue;
        visit(path.join(d, e.name), depth + 1);
      } else if (e.isFile() && (e.name.endsWith(".ets") || e.name.endsWith(".ts")) && !isNoiseFile(e.name)) {
        out.push(path.join(d, e.name));
      }
    }
  };
  visit(dir, 0);
  out.sort((a, b) => fileRank(a) - fileRank(b) || a.localeCompare(b));
  return out.slice(0, limit);
}

/* ------------------------------------------------------------------ *
 * Tool 4: list_by_topic
 * ------------------------------------------------------------------ */
server.tool(
  "list_by_topic",
  "按主题分类浏览最佳实践文档(Browse best-practice docs by topic category). " +
    "不传 topic 时返回所有大类及文档数; 传入 topic 时返回该类下文档列表. " +
    "常见大类: 稳定性、性能、媒体、功耗、一次开发多端部署、应用框架、自由流转、布局与弹窗 等.",
  {
    topic: z
      .string()
      .optional()
      .describe("大类名称,如 '性能'、'稳定性'、'媒体'。省略则返回所有大类。"),
  },
  async ({ topic }) => {
    if (!topic) {
      const rows = [...store.topics.entries()]
        .map(([t, ids]) => ({ t, n: ids.length }))
        .sort((a, b) => b.n - a.n || a.t.localeCompare(b.t));
      return text(
        `共 ${store.topics.size} 个大类,${store.docs.size} 篇文档:\n\n` +
          rows.map((r) => `- ${r.t} (${r.n})`).join("\n") +
          `\n\n用 list_by_topic({topic:"<大类>"}) 查看该类下文档.`
      );
    }
    // Prefix match on full path: path === topic OR path startsWith "topic / ".
    // Supports multi-level drill-down, e.g. "媒体" or "媒体 / Audio".
    const prefix = topic.trim();
    const matched: DocMeta[] = [];
    for (const meta of store.docs.values()) {
      if (meta.path === prefix || meta.path.startsWith(prefix + SEP)) {
        matched.push(meta);
      }
    }
    if (matched.length === 0) {
      return text(
        `未找到路径 "${prefix}"。可用大类: ${[...store.topics.keys()].sort().join("、")}`
      );
    }
    matched.sort((a, b) => a.path.localeCompare(b.path) || a.docId.localeCompare(b.docId));
    const rows = matched.map(
      (m) => `- ${m.docId} — ${m.path}${m.hasCode ? " ✅有代码" : ""}`
    );
    return text(`路径 "${prefix}" 下 ${matched.length} 篇:\n\n${rows.join("\n")}`);
  }
);

/* ------------------------------------------------------------------ */
function text(content: string) {
  return { content: [{ type: "text" as const, text: content }] };
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Keep process alive; stdio transport handles lifecycle.
}

main().catch((err) => {
  console.error("[harmonyos-best-practices-mcp] fatal:", err);
  process.exit(1);
});
