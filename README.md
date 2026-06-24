# HarmonyOS 最佳实践 MCP 知识库

把华为鸿蒙(HarmonyOS)应用开发最佳实践资料封装成 MCP 检索服务,供 Claude Code / Cursor / Cline 等 AI 编程客户端在开发时调用——**动手写代码前先检索官方推荐做法与参考代码,避免凭空编造 ArkTS/ArkUI API**。

## 这是什么

| 组成 | 内容 | 体积 | 分发方式 |
|------|------|------|---------|
| **① MCP 服务器** | 检索引擎,4 个工具:文档全文检索 / 读文档 / 取代码路径 / 按主题浏览 | 9MB 文档随包 | npm 包(`npx` 即用) |
| **② 薄 Skill** | 引导 AI"动手前先检索"的流程说明 | 一篇 md | 复制到 skills 目录 |
| **③ 参考代码包** | 示例仓库源码,供 MCP 读取真实 `.ets` | 97MB 压缩包 | GitHub Release 附件 |

三者关系:**MCP 是骨干,Skill 是触发器,代码包是可选增强**。只装 MCP+Skill 即可获得文档检索能力;加上代码包后,AI 能直接读取官方示例源码。

与姊妹项目分工互补:

| | 本项目(best-practices) | guides | api-references | ui-design-guides |
|---|---|---|---|---|
| 查什么 | **场景最佳实践 + 参考代码** | **API 用法、调用流程** | **接口精确定义**(参数/枚举) | **设计怎么做**(视觉/交互/控件设计规范) |
| 数据 | 452 篇 + 186 代码仓库 | 5489 篇指南 | 4495 篇 API 参考 | 166 篇设计指南 |
| 适用 | "长列表丢帧优化""组件复用范例" | "AVPlayer 怎么初始化" | "AudioCapturer 方法签名" | "底部页签设计规范""暗色模式色彩" |

四者并列:best-practices 给场景实践与参考代码、guides 讲 API 用法、api-references 查精确签名、ui-design-guides 定设计规范。

## 四者并列使用(opencode 示例)

```json
{
  "mcp": {
    "harmonyos-best-practices": {
      "type": "local",
      "command": ["npx", "-y", "harmonyos-best-practices-mcp"]
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

搭配各自的 Skill(`harmonyos-best-practices` / `harmonyos-guides` / `harmonyos-api-references` / `harmonyos-ui-design-guides`),AI 可据需求选用:guides 查 API 用法、best-practices 查场景实践与参考代码、api-references 查精确签名、ui-design-guides 查设计规范。

## 快速开始(最终用户)

### 1. 装 MCP 服务器

无需 clone 本仓库。客户端配置(以 Claude Code `.mcp.json` 为例):

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

> 包名以实际发布为准。Cursor / Cline / Continue 等任何支持 stdio 的 MCP 客户端同样配置。

### 2. 装 Skill

将 `skills/harmonyos-best-practices/SKILL.md` 复制到 Claude Code 的 skills 目录(如 `~/.claude/skills/`)。这让 AI 在做鸿蒙开发时自动走"先检索后编码"的流程。

### 3. 下载代码包,启用本地代码读取

从 GitHub Release 下载 `harmonyos-best-practices-code.tar.gz`(97MB),解压后配置:

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

配置后,`get_code_example` 会返回本地仓库路径与入口 `.ets` 文件,AI 可直接读取真实代码。

## 更新

文档和 MCP 服务器会持续更新。更新方式:

**更新 MCP 服务器**(npm 包):

```bash
# npx 方式:加 -y 会自动拉最新版,无需手动操作
# 若用全局安装,手动更新:
npm update -g harmonyos-best-practices-mcp
# 或指定版本:
npm install -g harmonyos-best-practices-mcp@latest
```

更新后**重启 AI 客户端**(Claude Code / Cursor 等)让新进程加载新版 MCP。

**更新文档/代码包**(随 npm 包发布,无需单独操作):
- 文档随 MCP 包内置,更新包即更新文档。
- 代码包(97MB)在 GitHub Release,有新版本时重新下载解压覆盖即可。

**查看当前版本**:`npm view harmonyos-best-practices-mcp version`(最新发布版)或看客户端 MCP 面板里服务器的 version 字段。

## 四个 MCP 工具

| 工具 | 作用 |
|------|------|
| `search_best_practices({query, limit?})` | 全文检索文档(中文友好),返回相关度排序的文档列表(含主题、是否有代码、代码仓库名) |
| `get_doc({name})` | 读取指定文档(docId)的完整 Markdown 正文 |
| `get_code_example({docName})` | 返回文档关联的参考代码:本地仓库路径、远程 URL、入口 `.ets/.ts` 文件 |
| `list_by_topic({topic?})` | 按大类浏览(稳定性/性能/媒体/功耗/一多…);省略参数返回所有大类及文档数 |

数据规模:452 篇文档,29 个大类(稳定性 76、性能 64、媒体 49、功耗 47、一多 47…);215 篇关联了示例代码,191 个唯一仓库(186 已克隆 + 5 核心仓跳过)。

## 工作流程(开发时)

```
用户:"帮我写一个鸿蒙长列表"
   │
   ▼  Skill 触发
search_best_practices("长列表 组件复用 丢帧")
   │  → 命中 bpta-component-reuse / bpta-best-practices-long-list 等(标注✅有代码)
   ▼
get_doc("bpta-component-reuse")           ← 读官方推荐做法
   │
   ▼
get_code_example("bpta-component-reuse")  ← 取本地仓库路径 + 入口 .ets
   │  → Read 真实代码, 看官方怎么写
   ▼
依据检索到的实践编写代码(不凭空编造 API)
```

## 目录结构

```
Best_Practices_MCP/
├── best_practices_docs/                 # 452 篇文档(数据源,非发布物)
├── best_practices_code/                 # 186 示例仓库(数据源;已瘦身)
├── best_practices_docs_code_index.md    # 文档↔代码双向映射索引(数据源)
│
├── harmonyos-best-practices-mcp/         # ① MCP 服务器(npm 包)
│   ├── src/                             # TS 源码
│   ├── data/                            # 文档+索引(prepack 拷入,随包)
│   ├── dist/                            # 编译产物
│   ├── scripts/
│   │   ├── copy-data.mjs                # prepack 拷数据
│   │   ├── trim-code.mjs                # 代码瘦身第一刀
│   │   ├── trim-code-extra.mjs          # 代码瘦身第二刀
│   │   └── selfcheck.mjs                # 自检
│   └── README.md                        # MCP 详细文档
│
├── skills/harmonyos-best-practices/     # ② 薄 Skill
│   └── SKILL.md
│
└── release/                             # ③ 发布产物
    ├── harmonyos-best-practices-code.tar.gz   # 97MB 瘦身代码包
    └── RELEASE_NOTES.md
```

## 维护者:开发与发布

详见 [`harmonyos-best-practices-mcp/README.md`](harmonyos-best-practices-mcp/README.md)。要点:

```bash
cd harmonyos-best-practices-mcp
npm install
npm run build        # 编译
npm run prepack      # 拷数据到 data/ + 编译(发布前自动)
npm run selfcheck    # 自检四个工具
npm publish          # 发布到 npm
```

代码包瘦身(从完整 15GB 生成 97MB 压缩包):

```bash
node harmonyos-best-practices-mcp/scripts/trim-code.mjs best_practices_code/        # 删 .git + 媒体
node harmonyos-best-practices-mcp/scripts/trim-code-extra.mjs best_practices_code/  # 删依赖 + 测试数据
tar -czf release/harmonyos-best-practices-code.tar.gz best_practices_code
```

## 设计说明

- **为什么 MCP 而非纯 Skill**:452 篇文档 + 186 仓库(9.5MB+8GB)远超可静态塞入 Skill 的阈值。Skill 强在固定流程,MCP 强在按需检索——这里体量决定了检索是骨干。
- **文档随包、代码不随包**:9MB 文档压缩后 2.3MB,适合随 npm 包;8GB 代码不行,故做成独立 Release 包,按需下载。瘦身后 97MB,AI 读源码完全够用。
- **代码瘦身取舍**:删除 `.git`/媒体/依赖/测试数据后,部分示例工程**不可直接编译**(需补依赖),但作为"AI 阅读参考代码"用途无损。18724 个 `.ets` 源码文件完整保留。

## 许可

文档与示例代码源自华为 HarmonyOS 官方最佳实践,版权归华为所有,此处仅作学习与开发辅助检索用途。MCP 服务器代码(MIT)见 `harmonyos-best-practices-mcp/package.json`。
