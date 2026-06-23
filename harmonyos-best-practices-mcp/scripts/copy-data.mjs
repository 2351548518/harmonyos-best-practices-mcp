// prepack: copy bundled docs (9MB) into harmonyos-best-practices-mcp/data/ so they ship in the npm package.
// Source: ../best_practices_docs  +  ../best_practices_docs_code_index.md
// Target: ./data/docs  +  ./data/index.md
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(here, "..");
const projectRoot = path.resolve(pkgRoot, "..");

const srcDocs = path.join(projectRoot, "best_practices_docs");
const srcIndex = path.join(projectRoot, "best_practices_docs_code_index.md");

const dstDocs = path.join(pkgRoot, "data", "docs");
const dstIndex = path.join(pkgRoot, "data", "index.md");

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.name.endsWith(".md") || entry.name === "_crawl_log.txt") {
      fs.copyFileSync(s, d);
    }
    // skip any non-md / non-log artifacts
  }
}

if (!fs.existsSync(srcDocs)) {
  // 数据源已删除(发布产物已在 data/ 内), 跳过拷贝, 保证 publish 不中断。
  const existing = path.join(pkgRoot, "data", "docs");
  if (fs.existsSync(existing) && fs.existsSync(path.join(pkgRoot, "data", "index.md"))) {
    console.log(`[copy-data] 数据源不存在(${srcDocs}), 但 data/ 已有产物, 跳过拷贝。`);
    process.exit(0);
  }
  console.error(`[copy-data] 源文档目录不存在且 data/ 无产物: ${srcDocs}`);
  process.exit(1);
}

rmrf(path.join(pkgRoot, "data"));
fs.mkdirSync(path.join(pkgRoot, "data"), { recursive: true });

copyDir(srcDocs, dstDocs);
fs.copyFileSync(srcIndex, dstIndex);

const count = countFiles(dstDocs);
console.log(`[copy-data] 已拷贝 ${count} 个文件到 ${path.relative(projectRoot, dstDocs)}`);
console.log(`[copy-data] 索引 -> ${path.relative(projectRoot, dstIndex)}`);

function countFiles(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countFiles(path.join(dir, e.name));
    else n++;
  }
  return n;
}
