#!/usr/bin/env node
// trim-code: 瘦身本地鸿蒙示例代码仓库(8GB -> ~300MB 纯源码)。
// 用法: node trim-code.mjs <代码根目录> [--dry-run]
//   默认删除: .git 目录 + 图片/视频等二进制媒体资源。
//   保留: .ets/.ts/.js/.cpp/.h/.c/.json/.json5/.md/.txt 等源码与配置。
// AI 读代码只需源码,删媒体对 MCP 的 get_code_example 读取能力零影响。
import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";

const codeRoot = process.argv[2];
const dryRun = process.argv.includes("--dry-run");

if (!codeRoot) {
  console.error("用法: node trim-code.mjs <代码根目录> [--dry-run]");
  console.error("  代码根目录 = best_practices_code 所在路径(含 harmonyos_samples__* 等)");
  process.exit(1);
}
if (!fs.existsSync(codeRoot) || !fs.statSync(codeRoot).isDirectory()) {
  console.error(`目录不存在: ${codeRoot}`);
  process.exit(1);
}

const MEDIA_EXT = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp", ".ico",
  ".mp4", ".mp3", ".aac", ".wav", ".m4a", ".flac", ".ogg",
  ".mov", ".avi", ".mkv", ".webm",
  ".ttf", ".otf", ".woff", ".woff2",
]);

let gitBytes = 0, gitCount = 0;
let mediaBytes = 0, mediaCount = 0;

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.name === ".git") {
      gitCount++;
      // Only stat size during dry-run; skip on real run (faster).
      if (dryRun) gitBytes += dirSize(full);
      else fs.rmSync(full, { recursive: true, force: true });
      continue;
    }
    if (e.isDirectory()) {
      walk(full);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (MEDIA_EXT.has(ext)) {
        mediaCount++;
        // Only stat size during dry-run; skip on real run (faster).
        if (dryRun) mediaBytes += fs.statSync(full).size;
        else fs.unlinkSync(full);
      }
    }
  }
}

function dirSize(dir) {
  let total = 0;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return 0;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) total += dirSize(full);
    else if (e.isFile()) {
      try { total += fs.statSync(full).size; } catch {}
    }
  }
  return total;
}

const mode = dryRun ? "[dry-run] " : "";
console.log(`${mode}扫描 ${codeRoot} ...`);
const before = dryRun ? 0 : duGB(codeRoot);
walk(codeRoot);

const fmt = (b) => (b / 1024 / 1024 / 1024).toFixed(2) + " GB";
if (dryRun) {
  console.log(`${mode}.git 目录: 将删 ${gitCount} 个, 释放 ${fmt(gitBytes)}`);
  console.log(`${mode}媒体资源: 将删 ${mediaCount} 个, 释放 ${fmt(mediaBytes)}`);
  console.log(`${mode}合计将释放: ${fmt(gitBytes + mediaBytes)} (未实际删除, 去 --dry-run 执行)`);
} else {
  const after = duGB(codeRoot);
  console.log(`.git 目录: 删除 ${gitCount} 个`);
  console.log(`媒体资源: 删除 ${mediaCount} 个`);
  console.log(`瘦身后体积: ${after} (原 ${before}) ✓`);
}

function duGB(dir) {
  try {
    const out = execSync(`du -sh "${dir}"`, { encoding: "utf8" });
    return out.split(/\s+/)[0];
  } catch {
    return "?";
  }
}
