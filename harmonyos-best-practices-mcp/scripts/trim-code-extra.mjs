#!/usr/bin/env node
// trim-code-extra: 第二刀, 砍掉非源码测试数据/依赖/二进制 (2GB -> ~100-600MB)。
// 在 trim-code.mjs(删 .git + 媒体)之后运行。对 AI 读 .ets/.ts 源码逻辑零影响。
// 用法: node trim-code-extra.mjs <代码根目录>
//
// 删除:
//   - 依赖/构建目录: oh_modules, oh_modules5, node_modules, build, .cxx, .test, .hvigor, .idea
//   - 非源码二进制扩展名: pcm ms sym db tif rar glb riv pdf bin dat raw apk hap arsc wmv flv
//     (保留 so/a —— NDK 示例可能引用, 且仅 30MB)
//   - rawfile 下载测试数据中 >5MB 的 .json
import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";

const codeRoot = process.argv[2];
if (!codeRoot || !fs.existsSync(codeRoot)) {
  console.error("用法: node trim-code-extra.mjs <代码根目录>");
  process.exit(1);
}

const DROP_DIRS = new Set([
  "oh_modules", "oh_modules5", "node_modules", "build", ".cxx",
  ".test", ".hvigor", ".idea", "testResults", "cppbuild",
]);

const DROP_EXT = new Set([
  ".pcm", ".ms", ".sym", ".db", ".tif", ".rar", ".glb", ".riv",
  ".pdf", ".bin", ".dat", ".raw", ".apk", ".hap", ".arsc",
  ".wmv", ".flv", ".m4v", ".iso", ".jar", ".class",
]);

let dirCount = 0, fileCount = 0, bigJsonCount = 0;
const before = du(codeRoot);

function walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (DROP_DIRS.has(e.name)) {
        fs.rmSync(full, { recursive: true, force: true });
        dirCount++;
        continue;
      }
      walk(full);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (DROP_EXT.has(ext)) {
        fs.unlinkSync(full);
        fileCount++;
        continue;
      }
      // large test json under rawfile
      if (ext === ".json" && full.includes("rawfile")) {
        try {
          if (fs.statSync(full).size > 5 * 1024 * 1024) {
            fs.unlinkSync(full);
            bigJsonCount++;
          }
        } catch {}
      }
    }
  }
}

function du(dir) {
  try { return execSync(`du -sh "${dir}"`, { encoding: "utf8" }).split(/\s+/)[0]; }
  catch { return "?"; }
}

console.log(`扫描 ${codeRoot} ...`);
walk(codeRoot);
const after = du(codeRoot);
console.log(`删除依赖/构建目录: ${dirCount} 个`);
console.log(`删除非源码二进制文件: ${fileCount} 个`);
console.log(`删除 rawfile 大测试 JSON: ${bigJsonCount} 个`);
console.log(`瘦身后体积: ${after} (本刀前 ${before}) ✓`);
