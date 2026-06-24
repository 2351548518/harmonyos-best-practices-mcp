---
name: harmonyos-best-practices
description: 查 HarmonyOS 场景化最佳实践与参考代码时触发(如 "长列表丢帧怎么优化""组件复用怎么写""冷启动时延优化""内存泄漏稳定性""音视频播放实践""一多适配实践")。对应 harmonyos-best-practices-mcp 的 search_best_practices / get_doc / get_code_example / list_by_topic 工具,检索 452 篇最佳实践文档 + 186 个示例代码仓库。注意:这是查"场景最佳实践 + 参考代码"(怎么做最好),若查 API 用法请用 harmonyos-guides,查接口定义用 harmonyos-api-references,查设计规范用 harmonyos-ui-design-guides。
---

# 鸿蒙最佳实践 检索指引

本地有一套鸿蒙(HarmonyOS)应用开发最佳实践资料:452 篇官方文档 + 186 个示例代码仓库,通过 `harmonyos-best-practices` MCP 服务器的工具检索。**在为用户编写或修改鸿蒙代码前,务必先检索相关实践并阅读配套代码**,不要凭记忆编造 ArkTS/ArkUI 系统接口。

## 何时触发

用户要做以下任何一类事时,先走检索流程:
- 用 ArkTS/ArkUI 开发界面(列表、网格、瀑布流、弹窗、转场、手势、Swiper/Tabs 等)
- 媒体相关(音视频播放/录制/编解码/投播/音画同步/HDR)
- 一多(一次开发多端部署)、跨端迁移/分享/多端协同
- 性能/功耗/稳定性优化(丢帧、内存泄漏、ASan、冷启动、主线程耗时)
- 并发(TaskPool/Worker/Sendable)、网络、安全(隐私/数据安全/加解密)、NDK、卡片

## 何时用本 Skill(而非 guides/api-references/ui-design-guides)

- ✅ 用本实践:查**场景最佳实践 + 参考代码**——长列表/网格/瀑布流丢帧优化、组件复用、冷启动时延、内存泄漏/稳定性、功耗优化、音视频播放实践、一多适配实践等,带官方示例代码可参照。例:"长列表丢帧怎么优化""组件复用怎么写""冷启动慢"。
- ❌ 用 guides:查 **API 怎么用**(代码层面调用、调用流程)。
- ❌ 用 api-references:查**接口精确定义**(参数/枚举/错误码)。
- ❌ 用 ui-design-guides:查**设计怎么做**(视觉/交互/控件设计规范)。
- 配合:先本实践看场景怎么做最好 + 参考代码,再用 guides/api-references 查涉及 API 的精确用法,用 ui-design-guides 定 UI 设计规范。

## 检索流程

1. **检索**:调用 MCP 工具 `search_best_practices`,用描述用户需求的关键词(中英文均可,如 `长列表 组件复用 丢帧`、`AVPlayer 短视频`)。返回按相关度排序的文档列表,标注 `✅有代码` / `无代码`。

2. **读全文**:对最相关的 1–3 条命中,调用 `get_doc({name:"<docId>"})` 读取完整 Markdown 正文,理解官方推荐做法、正反例、关键 API。

3. **读真实代码**:若命中标注 `✅有代码`,调用 `get_code_example({docName:"<docId>"})` 获取本地仓库绝对路径与入口 `.ets/.ts` 文件。返回里含**仓库 README 简介**和入口文件的**用途注释**——先看简介判断该仓库是否贴合需求,再用 Read 工具读入口文件,看官方示例到底怎么写。

4. **遵循实践落地**:依据检索到的官方做法编写代码。优先复用示例中的结构、API 调用顺序与参数;不确定的接口以示例代码为准,而非凭记忆。

## 辅助

- 主题浏览:不知道从哪查起时,用 `list_by_topic()` 看所有大类(稳定性/性能/媒体/功耗/一次开发多端部署…),再 `list_by_topic({topic:"性能"})` 看该类文档。
- **237 篇文档无配套代码**,多为分析/理论/检测指导类(如各类 `bpta-stability-*`、`bpta-performance-*`),这类要靠正文理解,无现成示例可直接抄。
- 检索返回的 `codeRepos` 是仓库 `owner/repo` 名;`get_code_example` 给出的本地路径可直接 Read。

## 反模式(避免)

- ❌ 不检索就直接写鸿蒙代码,凭印象编造 `@ohos.*` 接口名/参数。
- ❌ 只读文档摘要不读正文/代码就动手——摘要常省略关键约束。
- ❌ 把无代码的理论文档当成有示例可抄。
