// prepack: copy bundled docs (9MB) into harmonyos-best-practices-mcp/data/ so they ship in the npm package.
// Source: ../best_practices_docs  +  ../code_index.md  (+ index_log.txt)
// Target: ./data/docs/*.md + ./data/index_log.txt + ./data/code_list.md + ./data/INDEX.md
//
// Naming:
//   - index_log.txt : crawl log (status \t docId \t "大类 / 小标题"), machine-consumed for categorization.
//                     Lives at data/ root (sibling of code_list.md / INDEX.md).
//   - code_list.md  : docId -> code-repo mapping (best-practices only; this project ships code refs),
//                     machine-consumed. Renamed from index.md to disambiguate from INDEX.md.
//   - INDEX.md      : human-readable doc index, generated from index_log.txt (not consumed by code).
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(here, "..");
const projectRoot = path.resolve(pkgRoot, "..");

const srcDocs = path.join(projectRoot, "best_practices_docs");
const srcIndex = path.join(projectRoot, "code_index.md");
// index_log.txt lives at project root (not under docs).
const srcLogCandidates = [
  path.join(projectRoot, "index_log.txt"),
  path.join(srcDocs, "index_log.txt"),
];
// Domain synonym dictionary (hand-maintained, lives at project root).
const srcSynonyms = path.join(projectRoot, "synonyms.json");

const dataDir = path.join(pkgRoot, "data");
const dstDocs = path.join(dataDir, "docs");
const dstLog = path.join(dataDir, "index_log.txt");
const dstIndex = path.join(dataDir, "code_list.md");
const dstHumanIndex = path.join(dataDir, "INDEX.md");

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.name.endsWith(".md")) {
      fs.copyFileSync(s, d);
    }
    // log files are handled explicitly below (renamed to index_log.txt), skip here.
  }
}

function findSrcLog() {
  for (const c of srcLogCandidates) if (fs.existsSync(c)) return c;
  return null;
}

const SEP = " / ";

/** Generate human-readable INDEX.md from index_log.txt, grouped by top-level category. */
function genHumanIndex(logFile, outFile) {
  const lines = fs.readFileSync(logFile, "utf8").split(/\r?\n/).filter((l) => l.trim());
  const groups = new Map(); // topic -> [{docId, leaf}]
  let total = 0;
  for (const l of lines) {
    const p = l.split("\t");
    if (p.length < 3) continue;
    const docId = p[1].trim();
    const full = p.slice(2).join("\t").trim();
    const segs = full.split(SEP).map((s) => s.trim()).filter(Boolean);
    const topic = segs[0] || "未分类";
    const leaf = segs.length ? segs[segs.length - 1] : docId;
    if (!groups.has(topic)) groups.set(topic, []);
    groups.get(topic).push({ docId, leaf });
    total++;
  }
  const order = [...groups.entries()].sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
  );
  let md = "# 鸿蒙最佳实践文档索引 (best-practices)\n\n";
  md += `> 共 ${total} 篇，目录 \`best_practices_docs/\`。文件名即文档 slug（docId）。\n`;
  md += "> 本索引由 `index_log.txt` 生成，仅供浏览；MCP 工具按 `大类 / 小标题` 分类。\n\n";
  for (const [topic, items] of order) {
    md += `- **${topic}** (${items.length})\n`;
    for (const it of items) md += `  - \`${it.docId}.md\` — ${it.leaf}\n`;
  }
  fs.writeFileSync(outFile, md);
}

if (!fs.existsSync(srcDocs)) {
  // 数据源已删除(发布产物已在 data/ 内), 跳过拷贝, 保证 publish 不中断。
  if (fs.existsSync(dstDocs) && fs.existsSync(dstLog) && fs.existsSync(dstIndex)) {
    console.log(`[copy-data] 数据源不存在(${srcDocs}), 但 data/ 已有产物, 跳过拷贝。`);
    process.exit(0);
  }
  console.error(`[copy-data] 源文档目录不存在且 data/ 无产物: ${srcDocs}`);
  process.exit(1);
}

rmrf(dataDir);
fs.mkdirSync(dstDocs, { recursive: true });

copyDir(srcDocs, dstDocs);

const srcLog = findSrcLog();
if (srcLog) {
  fs.copyFileSync(srcLog, dstLog);
} else {
  console.error("[copy-data] 警告: 未找到 crawl 日志(index_log.txt), 分类将为'未分类'。");
}
fs.copyFileSync(srcIndex, dstIndex);

if (fs.existsSync(dstLog)) genHumanIndex(dstLog, dstHumanIndex);

// Synonym dictionary -> data/ (search reads it at runtime; not regenerated).
if (fs.existsSync(srcSynonyms)) {
  fs.copyFileSync(srcSynonyms, path.join(dataDir, "synonyms.json"));
}

const count = countFiles(dstDocs);
console.log(`[copy-data] 已拷贝 ${count} 个文件到 ${path.relative(projectRoot, dstDocs)}`);
console.log(`[copy-data] 日志 -> ${path.relative(projectRoot, dstLog)}`);
console.log(`[copy-data] 代码索引 -> ${path.relative(projectRoot, dstIndex)}`);
console.log(`[copy-data] 人类索引 -> ${path.relative(projectRoot, dstHumanIndex)}`);

function countFiles(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countFiles(path.join(dir, e.name));
    else n++;
  }
  return n;
}
