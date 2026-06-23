# 鸿蒙最佳实践参考代码包

## 文件

- `harmonyos-best-practices-code.tar.gz` — **97 MB**
- SHA-256: `8ada577e09d544087eca13f040ad42aa7ade79bed66e44bb24fc44de4b6deb25`

## 内容

186 个 HarmonyOS 最佳实践示例仓库的**源码**(已瘦身),配合 `harmonyos-best-practices-mcp` 使用,让 MCP 的 `get_code_example` 工具能直接读取真实 `.ets`/`.ts` 代码。

### 瘦身说明(原始 15 GB → 97 MB 压缩包 / 505 MB 解压)

为保证体积可分发,删除了对"AI 阅读源码逻辑"无影响的内容:

| 删除项 | 说明 |
|--------|------|
| `.git` 历史 | 185 个仓库的版本历史(无法再 `git pull` 更新;需更新请重新克隆) |
| 媒体资源 | png/jpg/gif/mp4 等(共 13606 个) |
| 依赖/构建目录 | oh_modules、node_modules、build、.cxx 等(21 个) |
| 测试数据/二进制 | pcm 音频样本、MindSpore `.ms` 模型、`.sym` 符号表、`.db`、大测试 JSON 等(297 个) |

**保留**:全部 `.ets`/`.ts`/`.js`/`.cpp`/`.h` 源码、`module.json5`/`oh-package.json5` 配置、`.md` 说明、小型资源 —— 共 18724 个 `.ets` 文件完整保留。

> 注意:删除 `.so`/依赖/媒体后,部分示例工程**无法直接编译运行**(需重新 `ohpm install` 并补回资源)。本包专为"阅读参考代码"用途,非"可编译工程"。

## 使用

```bash
# 1. 下载并解压
tar -xzf harmonyos-best-practices-code.tar.gz
# 得到 best_practices_code/ 目录

# 2. 配置 MCP 指向它(Claude Code .mcp.json)
{
  "mcpServers": {
    "harmonyos-best-practices": {
      "command": "npx",
      "args": ["-y", "harmonyos-best-practices-mcp"],
      "env": { "BP_CODE_DIR": "/abs/path/to/best_practices_code" }
    }
  }
}
```

配置后,`get_code_example` 会返回本地仓库绝对路径与入口 `.ets` 文件,AI 可直接读取真实代码。

## 若需自行生成

```bash
node harmonyos-best-practices-mcp/scripts/trim-code.mjs best_practices_code/        # 删 .git + 媒体
node harmonyos-best-practices-mcp/scripts/trim-code-extra.mjs best_practices_code/  # 删依赖 + 测试数据
tar -czf harmonyos-best-practices-code.tar.gz best_practices_code
```
