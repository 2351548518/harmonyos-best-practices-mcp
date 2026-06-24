# HarmonyOS 最佳实践 MCP 服务器

把鸿蒙应用开发最佳实践资料通过 MCP 暴露为检索工具,供 Claude Code / Cursor / Cline 等 MCP 客户端在开发时动态调用。

**文档(9MB)随包发布,装包即用、零配置。** 代码(8GB)不随包,按需配置本地路径(见下)。

与姊妹项目分工互补:

| | 本项目(best-practices) | guides | api-references | ui-design-guides |
|---|---|---|---|---|
| 查什么 | **场景最佳实践 + 参考代码** | **API 用法、调用流程** | **接口精确定义**(参数/枚举) | **设计怎么做**(视觉/交互/控件设计规范) |
| 数据 | 452 篇 + 186 代码仓库 | 5489 篇指南 | 4495 篇 API 参考 | 166 篇设计指南 |
| 适用 | "长列表丢帧优化""组件复用范例" | "AVPlayer 怎么初始化" | "AudioCapturer 方法签名" | "底部页签设计规范" |

四者并列:best-practices 给场景实践与参考代码、guides 讲 API 用法、api-references 查精确签名、ui-design-guides 定设计规范。

## 提供的工具

| 工具 | 作用 |
|------|------|
| `search_best_practices({query, limit?})` | 全文检索文档(中文友好),返回相关度排序的文档列表(含主题、是否有代码、代码仓库名) |
| `get_doc({name})` | 读取指定文档(docId)的完整 Markdown 正文 |
| `get_code_example({docName})` | 返回文档关联的参考代码:本地仓库绝对路径、远程 URL、README 简介、入口 `.ets/.ts` 文件(带用途注释) |
| `list_by_topic({topic?})` | 按大类浏览(稳定性/性能/媒体/功耗/一多…);省略参数返回所有大类及文档数 |

## 四者并列使用

### OpenCode 示例

```json
{
  "mcp": {
    "harmonyos-best-practices": {
      "type": "local",
      "command": ["npx", "-y", "harmonyos-best-practices-mcp"],
      "environment": { "BP_CODE_DIR": "/abs/path/to/best_practices_code" }
    },
    "harmonyos-guides": {
      "type": "local",
      "command": ["npx", "-y", "harmonyos-guides-mcp"]
    },
    "harmonyos-api-references": {
      "type": "local",
      "command": ["npx", "-y", "harmonyos-api-references-mcp"]
    },
    "harmonyos-ui-design-guides": {
      "type": "local",
      "command": ["npx", "-y", "harmonyos-ui-design-guides-mcp"]
    }
  }
}
```

### Claude Code 示例

```json
{
  "mcpServers": {
    "harmonyos-best-practices": {
      "command": "npx",
      "args": ["-y", "harmonyos-best-practices-mcp"],
      "env": { "BP_CODE_DIR": "/abs/path/to/best_practices_code" }
    },
    "harmonyos-guides": {
      "command": "npx",
      "args": ["-y", "harmonyos-guides-mcp"]
    },
    "harmonyos-api-references": {
      "command": "npx",
      "args": ["-y", "harmonyos-api-references-mcp"]
    },
    "harmonyos-ui-design-guides": {
      "command": "npx",
      "args": ["-y", "harmonyos-ui-design-guides-mcp"]
    }
  }
}
```

### BP_CODE_DIR 设置

> **`BP_CODE_DIR`(仅 best-practices 可选)**:指向本地 `best_practices_code/` 目录(从 GitHub Release 下载 `harmonyos-best-practices-code.tar.gz` 解压得到)。配置后 `get_code_example` 会返回本地仓库路径与入口 `.ets` 文件,AI 可直接读取真实官方示例代码;**不配则只返回 gitcode 远程 URL**。Windows 路径用正斜杠更稳(如 `C:/path/to/best_practices_code`)。其余三个 MCP 是纯文档,无需此变量。

搭配各自的 Skill(`harmonyos-best-practices` / `harmonyos-guides` / `harmonyos-api-references` / `harmonyos-ui-design-guides`),AI 可据需求选用:guides 查 API 用法、best-practices 查场景实践与参考代码、api-references 查精确签名、ui-design-guides 查设计规范。

## 安装

无需 clone 本仓库。直接用 npx 或全局安装:

```bash
# 方式一:一次性运行(推荐,每次自动拉最新版)
npx -y harmonyos-best-practices-mcp

# 方式二:全局安装(需手动更新)
npm install -g harmonyos-best-practices-mcp
```

### 配置客户端

**Claude Code**(`.mcp.json`):

```json
{
  "mcpServers": {
    "harmonyos-best-practices": {
      "command": "npx",
      "args": ["-y", "harmonyos-best-practices-mcp"]
    }
  }
}
```

**Cursor / Cline / 其他 stdio 客户端**:同上,指向 `npx -y harmonyos-best-practices-mcp`。

### (可选)启用本地代码读取

默认 `get_code_example` 只返回 gitcode 远程 URL。若想直接读取真实 `.ets` 源码,获取代码并指向它:

**方式 A:直接下载瘦身后的代码包(推荐,97MB)**

从本项目 GitHub Release 下载 `harmonyos-best-practices-code.tar.gz`,解压得到 `best_practices_code/`。

**方式 B:自行克隆并瘦身(原始 15GB → 505MB 解压)**

```bash
# 1. 克隆示例代码(约 15GB)
git clone <各仓库> best_practices_code/

# 2. 瘦身两刀(脚本随 npm 包附带,用 npx 拉取后通过包内路径运行)
npx -y harmonyos-best-practices-mcp@latest node_modules/harmonyos-best-practices-mcp/scripts/trim-code.mjs best_practices_code/
# 或先全局安装: npm i -g harmonyos-best-practices-mcp
# 再跑: harmonyos-best-practices-mcp-trim-code best_practices_code/   (见下方 bin 说明)
```

> 瘦身脚本也提供为可执行 bin:`harmonyos-best-practices-mcp-trim-code` 与 `-trim-code-extra`,全局安装后可直接调用。

> 注:`trim-code` 会删除 `.git` 历史,瘦身后无法 `git pull` 更新。建议先 `--dry-run` 预览。

**方式 C:用完整代码(15GB,可编译)** —— 仅当你需要可编译工程时。

Claude Code 配置加 env:

```json
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

### 环境变量

| 变量 | 默认 | 说明 |
|------|------|------|
| `BP_DOCS_DIR` | 包内 `data/docs` | 文档目录(一般无需改) |
| `BP_INDEX` | 包内 `data/index.md` | 索引文件(一般无需改) |
| `BP_CODE_DIR` | 空 | 本地代码根目录;为空时 `get_code_example` 只给 URL |

## 更新

文档和服务器会持续更新(版本号见 `package.json`)。

**更新服务器**:

```bash
# npx -y 方式:无需手动操作,每次启动自动拉最新版
# 全局安装方式:手动更新
npm update -g harmonyos-best-practices-mcp
# 或锁定最新版
npm install -g harmonyos-best-practices-mcp@latest
```

更新后**重启 AI 客户端**(Claude Code / Cursor / Cline 等),让新进程加载新版 MCP。

**更新文档**:文档随包内置(`data/docs/`),更新 npm 包即同步更新 452 篇文档,无需单独操作。

**更新代码包**(仅当启用了本地代码读取):GitHub Release 有新版 `harmonyos-best-practices-code.tar.gz` 时,重新下载解压覆盖 `BP_CODE_DIR` 指向的目录即可。

**查看版本**:
```bash
npm view harmonyos-best-practices-mcp version   # 最新发布版
npm ls -g harmonyos-best-practices-mcp          # 本地已装版本
```
或看客户端 MCP 面板里服务器的 `version` 字段。

## 开发与发布(维护者)

```bash
cd harmonyos-best-practices-mcp
npm install
npm run build          # 编译 TS
npm run prepack        # 拷贝文档到 data/ + 编译(发布前自动跑)
npm run selfcheck      # 自检四个工具
```

发布到 npm:

```bash
npm login
npm publish            # 自动触发 prepack 拷数据
```

包内含:`dist/` + `data/`(9MB 文档+索引) + `scripts/trim-code.mjs` + README。源码 `src/` 不随包。

## 验证

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## 配套 Skill

`skills/harmonyos-best-practices/SKILL.md` 是薄 Skill,引导 AI"动手前先检索"。复制到 Claude Code 的 skills 目录即可启用。

