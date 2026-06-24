# Best Practices 文档 ↔ 关联代码 映射表

> 生成自 `best_practices_docs`（452 篇文档）与 `best_practices_code`（本地克隆仓库）的交叉匹配。
> 
> - 关联了代码的文档：**215 / 452** 篇
> - 唯一关联仓库：**191** 个（已克隆 186，跳过核心仓 5，缺失 0）
> - 文档目录：`best_practices_docs/`
> - 代码目录：`best_practices_code/<owner>__<repo>/`

状态标记：`✅ 已克隆` ｜ `⏭️ 核心仓跳过`（openharmony 基础设施，体积过大）｜ `❌ 缺失`

## 一、文档 → 关联代码

按文档名排序。每篇列出其引用的 gitcode 仓库（链接文本、本地路径、远程 URL）。

### `bpta-2in1-window-shape` — PC/2in1异形窗口

- ✅ 已克隆 **实现PC/2in1异形窗口**
  - 仓库：`harmonyos_samples/special-window-shape` ｜ 本地：`best_practices_code/harmonyos_samples__special-window-shape/`
  - 远程：<https://gitcode.com/harmonyos_samples/special-window-shape>

### `bpta-abckitts-implements-instrumentation` — 基于AbcKitTS实现字节码插桩

- ✅ 已克隆 **基于AbcKitTS实现字节码插桩**
  - 仓库：`HarmonyOS_Samples/abckit-ts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__abckit-ts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/abckit-ts>
- ⏭️ 核心仓跳过 **libabckit**
  - 仓库：`openharmony/arkcompiler_runtime_core` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/arkcompiler_runtime_core/tree/master/libabckit>

### `bpta-add-watermark` — 水印添加

- ✅ 已克隆 **实现添加水印功能**
  - 仓库：`harmonyos_samples/watermark` ｜ 本地：`best_practices_code/harmonyos_samples__watermark/`
  - 远程：<https://gitcode.com/harmonyos_samples/watermark>

### `bpta-always-on-market-watch` — 全链路盯盘开发实践

- ✅ 已克隆 **实现全链路盯盘**
  - 仓库：`HarmonyOS_Samples/AlwaysOnMarketWatch` ｜ 本地：`best_practices_code/HarmonyOS_Samples__AlwaysOnMarketWatch/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/AlwaysOnMarketWatch>

### `bpta-analysis-of-image-blurring` — 图像模糊卡顿问题分析

- ✅ 已克隆 **背景模糊示例**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/BackgroundBlur>

### `bpta-antipeep-protection` — 防窥保护

- ✅ 已克隆 **基于防窥保护能力实现敏感信息防窥功能**
  - 仓库：`HarmonyOS_Samples/AntiPeep` ｜ 本地：`best_practices_code/HarmonyOS_Samples__AntiPeep/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/AntiPeep>

### `bpta-app-architecture-overview` — 架构概览

- ✅ 已克隆 **HMOS世界**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld>

### `bpta-app-code-ob` — 应用代码混淆

- ✅ 已克隆 **应用安全示例代码**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/Privacy>

### `bpta-app-concurrency-design` — 应用并发设计

- ✅ 已克隆 **基于Sendable实现多线程功能**
  - 仓库：`harmonyos_samples/UseSendable` ｜ 本地：`best_practices_code/harmonyos_samples__UseSendable/`
  - 远程：<https://gitcode.com/harmonyos_samples/UseSendable>

### `bpta-app-data-security` — 应用数据安全

- ✅ 已克隆 **应用数据安全**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/AppDataSecurity>

### `bpta-app-privacy-protection` — 应用隐私保护

- ✅ 已克隆 **应用隐私保护实现**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/AppPrivacyProtection>
- ✅ 已克隆 **“HMOS世界”**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld>
- ✅ 已克隆 **SafePage.ets**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld/blob/master/HMOSWorld/Application/products/phone/src/main/ets/pages/SafePage.ets>

### `bpta-application-cold-start-optimization` — 应用冷启动时延优化

- ✅ 已克隆 **基于DataCache提升应用冷启动速度**
  - 仓库：`harmonyos_samples/DataCache` ｜ 本地：`best_practices_code/harmonyos_samples__DataCache/`
  - 远程：<https://gitcode.com/harmonyos_samples/DataCache>

### `bpta-application-continue-progess` — 常见接续最佳实践

- ✅ 已克隆 **实现浏览进度接续功能**
  - 仓库：`harmonyos_samples/continue-progress` ｜ 本地：`best_practices_code/harmonyos_samples__continue-progress/`
  - 远程：<https://gitcode.com/harmonyos_samples/continue-progress>

### `bpta-application-gesture-share` — 隔空传送快速分享

- ✅ 已克隆 **基于Share Kit实现隔空传送分享文件和链接**
  - 仓库：`harmonyos_samples/GesturesShare` ｜ 本地：`best_practices_code/harmonyos_samples__GesturesShare/`
  - 远程：<https://gitcode.com/harmonyos_samples/GesturesShare>

### `bpta-application-knock-file-share` — 碰一碰文件分享

- ✅ 已克隆 **基于Share Kit实现碰一碰文件分享**
  - 仓库：`harmonyos_samples/KnockFileShare` ｜ 本地：`best_practices_code/harmonyos_samples__KnockFileShare/`
  - 远程：<https://gitcode.com/harmonyos_samples/KnockFileShare>

### `bpta-application-knock-video-share` — 碰一碰链接分享

- ✅ 已克隆 **基于Share Kit实现碰一碰视频快速分享**
  - 仓库：`harmonyos_samples/knock-share` ｜ 本地：`best_practices_code/harmonyos_samples__knock-share/`
  - 远程：<https://gitcode.com/harmonyos_samples/knock-share>

### `bpta-application-track-practice` — 应用埋点

- ✅ 已克隆 **基于UIObserver能力的应用埋点**
  - 仓库：`harmonyos_samples/application-track` ｜ 本地：`best_practices_code/harmonyos_samples__application-track/`
  - 远程：<https://gitcode.com/harmonyos_samples/application-track>

### `bpta-arkts-high-performance` — ArkTS高性能编程

- ✅ 已克隆 **ArkTS高性能编程代码片段**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ArkTS_high_performance_segment>

### `bpta-arkweb_rendering_framework` — ArkWeb渲染框架适配

- ✅ 已克隆 **基于Web组件实现随机抽奖功能**
  - 仓库：`HarmonyOS_Codelabs/WebComponent` ｜ 本地：`best_practices_code/HarmonyOS_Codelabs__WebComponent/`
  - 远程：<https://gitcode.com/HarmonyOS_Codelabs/WebComponent>
- ✅ 已克隆 **基于ArkWeb实现系统原生组件渲染至H5页面上**
  - 仓库：`harmonyos_samples/arkweb-same-level-rendering` ｜ 本地：`best_practices_code/harmonyos_samples__arkweb-same-level-rendering/`
  - 远程：<https://gitcode.com/harmonyos_samples/arkweb-same-level-rendering>

### `bpta-aspect-implements-aop` — 基于Aspect插件库实现切面编程

- ✅ 已克隆 **装饰器使用指南**
  - 仓库：`CPF-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/CPF-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/CPF-ApplicationTPC/aspect/blob/master/docs/AnnotationGuide.md>
- ✅ 已克隆 **常见问题**
  - 仓库：`CPF-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/CPF-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/CPF-ApplicationTPC/aspect/blob/master/docs/FAQ.md>
- ✅ 已克隆 **获取切入点上下文信息**
  - 仓库：`CPF-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/CPF-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/CPF-ApplicationTPC/aspect/blob/master/docs/JoinPointGuide.md>
- ✅ 已克隆 **从源码构建插件**
  - 仓库：`CPF-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/CPF-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/CPF-ApplicationTPC/aspect/blob/master/docs/BuildFromSource_win.md>
- ✅ 已克隆 **基于Aspect插件库实现切面编程**
  - 仓库：`HarmonyOS_Samples/aspect` ｜ 本地：`best_practices_code/HarmonyOS_Samples__aspect/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/aspect/tree/master>
- ✅ 已克隆 **Aspect**
  - 仓库：`OpenHarmony-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/OpenHarmony-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/OpenHarmony-ApplicationTPC/aspect>
- ✅ 已克隆 **Aspect快速开始**
  - 仓库：`OpenHarmony-ApplicationTPC/aspect` ｜ 本地：`best_practices_code/OpenHarmony-ApplicationTPC__aspect/`
  - 远程：<https://gitcode.com/OpenHarmony-ApplicationTPC/aspect/blob/master/README.md>
- ⏭️ 核心仓跳过 **AbcKit方舟字节码工具库**
  - 仓库：`openharmony/arkcompiler_runtime_core` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/arkcompiler_runtime_core/blob/master/libabckit/README_zh.md>

### `bpta-audio-cast` — 音频投播

- ✅ 已克隆 **实现音频投播功能**
  - 仓库：`harmonyos_samples/AudioCast` ｜ 本地：`best_practices_code/harmonyos_samples__AudioCast/`
  - 远程：<https://gitcode.com/harmonyos_samples/AudioCast>

### `bpta-audio-focus-management` — 音频焦点管理解决方案

- ✅ 已克隆 **实现音频焦点管理功能**
  - 仓库：`harmonyos_samples/audio-focus` ｜ 本地：`best_practices_code/harmonyos_samples__audio-focus/`
  - 远程：<https://gitcode.com/harmonyos_samples/audio-focus>

### `bpta-audio-in-ear-monitor` — 基于Audio能力实现音频耳返

- ✅ 已克隆 **实现音频耳返**
  - 仓库：`HarmonyOS_Samples/audio-in-ear-monitor` ｜ 本地：`best_practices_code/HarmonyOS_Samples__audio-in-ear-monitor/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/audio-in-ear-monitor>

### `bpta-audio-record-base-on-audiocapturer` — 基于AudioCapturer录制PCM音频（ArkTS）

- ✅ 已克隆 **基于AudioCapturer录制音频(ArkTS)**
  - 仓库：`HarmonyOS_Samples/audio-capturer-record-pcm` ｜ 本地：`best_practices_code/HarmonyOS_Samples__audio-capturer-record-pcm/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/audio-capturer-record-pcm>

### `bpta-audio-record-base-on-avrecorder` — 基于AVRecorder录制格式化音频（C++）

- ✅ 已克隆 **基于AVRecorder录制音频（C++）**
  - 仓库：`HarmonyOS_Samples/avrecorder-record-formatted-audio-cpp` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avrecorder-record-formatted-audio-cpp/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avrecorder-record-formatted-audio-cpp>

### `bpta-audio-record-base-on-avrecorder-arkts` — 基于AVRecorder录制格式化音频（ArkTS）

- ✅ 已克隆 **基于AVRecorder录制音频（ArkTS）**
  - 仓库：`HarmonyOS_Samples/avrecorder-record-formatted-audio-arkts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avrecorder-record-formatted-audio-arkts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avrecorder-record-formatted-audio-arkts>

### `bpta-audio-record-base-on-avscreencapture` — 基于AVScreenCapture录制音频

- ✅ 已克隆 **基于AVScreenCapture录制音频（C++）**
  - 仓库：`HarmonyOS_Samples/avscreen-capture-record-system-audio-arkts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avscreen-capture-record-system-audio-arkts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avscreen-capture-record-system-audio-arkts>

### `bpta-audio-record-base-on-ohaudio` — 基于OHAudio录制PCM音频（C++）

- ✅ 已克隆 **基于AudioCapturer录制音频(C++)**
  - 仓库：`HarmonyOS_Samples/audio-native` ｜ 本地：`best_practices_code/HarmonyOS_Samples__audio-native/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/audio-native>

### `bpta-audio-ripple-animation` — 基于AudioRenderer和AudioCapturer实现音频波形动画

- ✅ 已克隆 **实现音频动画**
  - 仓库：`harmonyos_samples/audio-ripple-animation` ｜ 本地：`best_practices_code/harmonyos_samples__audio-ripple-animation/`
  - 远程：<https://gitcode.com/harmonyos_samples/audio-ripple-animation>

### `bpta-audio-video-synchronization` — 音画同步

- ✅ 已克隆 **实现音画同步播放效果**
  - 仓库：`harmonyos_samples/AudioToVideoSync` ｜ 本地：`best_practices_code/harmonyos_samples__AudioToVideoSync/`
  - 远程：<https://gitcode.com/harmonyos_samples/AudioToVideoSync>

### `bpta-automated-testing-frameworks` — 自动化测试框架开发实践

- ✅ 已克隆 **基于自动化测试框架实现单元测试和UI测试**
  - 仓库：`HarmonyOS_Samples/ArkTSComponentsTest` ｜ 本地：`best_practices_code/HarmonyOS_Samples__ArkTSComponentsTest/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/ArkTSComponentsTest>

### `bpta-avplayer-basic-control` — 基于AVPlayer基础播控实践

- ✅ 已克隆 **基于AVPlayer实现视频基础播控功能**
  - 仓库：`harmonyos_samples/avplayer-basic-control` ｜ 本地：`best_practices_code/harmonyos_samples__avplayer-basic-control/`
  - 远程：<https://gitcode.com/harmonyos_samples/avplayer-basic-control>

### `bpta-avplayer-embeded-network-video` — 基于AVPlayer播放网络视频实践

- ✅ 已克隆 **基于AVPlayer播放网络视频实践**
  - 仓库：`harmonyos_samples/avplayer-online-video` ｜ 本地：`best_practices_code/harmonyos_samples__avplayer-online-video/`
  - 远程：<https://gitcode.com/harmonyos_samples/avplayer-online-video>

### `bpta-avplayer-embeded-short-video` — 基于AVPlayer播放嵌入式短视频实践

- ✅ 已克隆 **基于AVPlayer实现嵌入式短视频播放**
  - 仓库：`harmonyos_samples/avplayer-embeded-short-video` ｜ 本地：`best_practices_code/harmonyos_samples__avplayer-embeded-short-video/`
  - 远程：<https://gitcode.com/harmonyos_samples/avplayer-embeded-short-video/tree/master/>

### `bpta-avplayer-long-video` — 基于AVPlayer播放长视频实践

- ✅ 已克隆 **基于AVPlayer实现长视频播放**
  - 仓库：`harmonyos_samples/avplayer-long-video` ｜ 本地：`best_practices_code/harmonyos_samples__avplayer-long-video/`
  - 远程：<https://gitcode.com/harmonyos_samples/avplayer-long-video>

### `bpta-avplayer-short-video` — 基于AVPlayer播放短视频实践

- ✅ 已克隆 **基于AVPlayer实现短视频播放**
  - 仓库：`harmonyos_samples/avplayer-short-video` ｜ 本地：`best_practices_code/harmonyos_samples__avplayer-short-video/`
  - 远程：<https://gitcode.com/harmonyos_samples/avplayer-short-video>

### `bpta-avscreencapture-for-screen-recording` — 基于AVScreenCapture实现屏幕录制

- ✅ 已克隆 **基于AVScreenCapture实现录屏功能**
  - 仓库：`HarmonyOS_Samples/avscreen-capture-screen-record` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avscreen-capture-screen-record/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avscreen-capture-screen-record/tree/master>

### `bpta-back-task-implement` — 应用后台运行

- ✅ 已克隆 **基于后台任务实现应用流畅体验**
  - 仓库：`harmonyos_samples/BackTaskImplement` ｜ 本地：`best_practices_code/harmonyos_samples__BackTaskImplement/`
  - 远程：<https://gitcode.com/harmonyos_samples/BackTaskImplement>

### `bpta-background-blur` — 图像模糊高效使用

- ✅ 已克隆 **高效使用背景模糊开发实践**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/BackgroundBlur>

### `bpta-best-practices-long-list` — 长列表加载丢帧优化

- ✅ 已克隆 **“HMOS世界”**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld>
- ✅ 已克隆 **基于ForEach和LazyForEach实现长列表**
  - 仓库：`harmonyos_samples/list-optimization` ｜ 本地：`best_practices_code/harmonyos_samples__list-optimization/`
  - 远程：<https://gitcode.com/harmonyos_samples/list-optimization>

### `bpta-bluetooth-low-energy` — 低功耗蓝牙基础使用

- ✅ 已克隆 **基于低功耗蓝牙实现设备间连接通信的能力**
  - 仓库：`HarmonyOS_Samples/BluetoothLowEnergy` ｜ 本地：`best_practices_code/HarmonyOS_Samples__BluetoothLowEnergy/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/BluetoothLowEnergy>

### `bpta-buffer-mode-transcoding` — 基于Buffer模式进行视频转码

- ✅ 已克隆 **基于Buffer模式进行视频转码**
  - 仓库：`harmonyos_samples/avcodec-buffer-mode` ｜ 本地：`best_practices_code/harmonyos_samples__avcodec-buffer-mode/`
  - 远程：<https://gitcode.com/harmonyos_samples/avcodec-buffer-mode>

### `bpta-camera-shot2see` — 相机分段式拍照性能优化

- ✅ 已克隆 **实现相机分段式拍照功能**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/SegmentedPhotograph>

### `bpta-card-update-and-data-interaction` — 卡片更新与数据交互

- ✅ 已克隆 **实现卡片更新与数据交互功能**
  - 仓库：`harmonyos_samples/CardInfoRefresh` ｜ 本地：`best_practices_code/harmonyos_samples__CardInfoRefresh/`
  - 远程：<https://gitcode.com/harmonyos_samples/CardInfoRefresh>
- ✅ 已克隆 **实现卡片更新与数据交互功能**
  - 仓库：`harmonyos_samples/CardInfoRefresh` ｜ 本地：`best_practices_code/harmonyos_samples__CardInfoRefresh/`
  - 远程：<https://gitcode.com/harmonyos_samples/CardInfoRefresh>

### `bpta-carousel-graphic-works` — 使用Swiper组件实现轮播图

- ✅ 已克隆 **使用Swiper组件实现轮播布局**
  - 仓库：`harmonyos_samples/MultipleImage` ｜ 本地：`best_practices_code/harmonyos_samples__MultipleImage/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultipleImage>

### `bpta-click-to-complete-delay-analysis` — 点击完成时延分析

- ✅ 已克隆 **“HMOS世界”**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld>

### `bpta-collaboration-office` — 办公编辑全场景协同最佳实践

- ✅ 已克隆 **基于ArkWeb和自由流转实现办公编辑协同**
  - 仓库：`HarmonyOS_Samples/OnlineEditorCollaboration` ｜ 本地：`best_practices_code/HarmonyOS_Samples__OnlineEditorCollaboration/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/OnlineEditorCollaboration>

### `bpta-comment-reply-pop-up-window` — 评论回复弹窗

- ✅ 已克隆 **实现评论回复弹窗模块**
  - 仓库：`harmonyos_samples/CommentReply` ｜ 本地：`best_practices_code/harmonyos_samples__CommentReply/`
  - 远程：<https://gitcode.com/harmonyos_samples/CommentReply>
- ✅ 已克隆 **发布图片评论**
  - 仓库：`harmonyos_samples/image-comment` ｜ 本地：`best_practices_code/harmonyos_samples__image-comment/`
  - 远程：<https://gitcode.com/harmonyos_samples/image-comment>
- ✅ 已克隆 **选择并查看文档和媒体文件**
  - 仓库：`harmonyos_samples/picker` ｜ 本地：`best_practices_code/harmonyos_samples__picker/`
  - 远程：<https://gitcode.com/harmonyos_samples/picker>

### `bpta-common-list-flows` — 常见列表流

- ✅ 已克隆 **基于List组件实现常见列表流场景**
  - 仓库：`harmonyos_samples/CommonListFlows` ｜ 本地：`best_practices_code/harmonyos_samples__CommonListFlows/`
  - 远程：<https://gitcode.com/harmonyos_samples/CommonListFlows>

### `bpta-common-list-operations` — 常见列表操作

- ✅ 已克隆 **实现简单聊天列表功能**
  - 仓库：`harmonyos_samples/simple-chat-list` ｜ 本地：`best_practices_code/harmonyos_samples__simple-chat-list/`
  - 远程：<https://gitcode.com/harmonyos_samples/simple-chat-list>

### `bpta-common-network-query` — 网络信息查询与连接管理

- ✅ 已克隆 **实现常见网络信息查询**
  - 仓库：`harmonyos_samples/network-query` ｜ 本地：`best_practices_code/harmonyos_samples__network-query/`
  - 远程：<https://gitcode.com/harmonyos_samples/network-query>

### `bpta-comparative_practice_of_taskpool_and_worker` — TaskPool和Worker对比

- ✅ 已克隆 **基于Worker实现图片编辑功能**
  - 仓库：`harmonyos_codelabs/ImageEdit` ｜ 本地：`best_practices_code/harmonyos_codelabs__ImageEdit/`
  - 远程：<https://gitcode.com/harmonyos_codelabs/ImageEdit>
- ✅ 已克隆 **基于TaskPool实现图片编辑功能**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ImageEditTaskPool>

### `bpta-complex-type-pass` — 跨语言调用复杂参数传递

- ✅ 已克隆 **实现复杂参数的跨语言交互功能**
  - 仓库：`harmonyos_samples/ComplexTypePass` ｜ 本地：`best_practices_code/harmonyos_samples__ComplexTypePass/`
  - 远程：<https://gitcode.com/harmonyos_samples/ComplexTypePass>

### `bpta-component-nesting-optimization` — 组件嵌套优化

- ✅ 已克隆 **不同场景下组件嵌套的性能优化策略**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ArkUI/Component_Nesting_Optimization>

### `bpta-component-reuse` — 组件复用

- ✅ 已克隆 **实现组件复用**
  - 仓库：`harmonyos_samples/component-reuse` ｜ 本地：`best_practices_code/harmonyos_samples__component-reuse/`
  - 远程：<https://gitcode.com/harmonyos_samples/component-reuse/>

### `bpta-component-reuse-issue-diagnosis-and-analysis` — 组件复用问题诊断分析

- ✅ 已克隆 **正反例代码**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ComponentReuse>

### `bpta-content-creation` — AI辅助图文内容编创

- ✅ 已克隆 **基于AI能力实现图文内容高效编创**
  - 仓库：`HarmonyOS_Samples/graphic-creation` ｜ 本地：`best_practices_code/HarmonyOS_Samples__graphic-creation/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/graphic-creation>

### `bpta-continue` — 社交通讯全场景协同最佳实践

- ✅ 已克隆 **基于自由流转实现社交通讯协同**
  - 仓库：`harmonyos_samples/ContinuePublish` ｜ 本地：`best_practices_code/harmonyos_samples__ContinuePublish/`
  - 远程：<https://gitcode.com/harmonyos_samples/ContinuePublish>

### `bpta-cross-domain-solutions-for-web-pages` — Web页面跨域解决方案

- ✅ 已克隆 **基于ArkWeb拦截器和Cookies管理能力实现Web页面跨域**
  - 仓库：`harmonyos_samples/WebCrossDomain` ｜ 本地：`best_practices_code/harmonyos_samples__WebCrossDomain/`
  - 远程：<https://gitcode.com/harmonyos_samples/WebCrossDomain>

### `bpta-cross-module-reference` — Native侧跨HAR/HSP模块接口调用

- ✅ 已克隆 **Native侧跨HAR/HSP模块调用**
  - 仓库：`harmonyos_samples/CrossModuleReference` ｜ 本地：`best_practices_code/harmonyos_samples__CrossModuleReference/`
  - 远程：<https://gitcode.com/harmonyos_samples/CrossModuleReference>

### `bpta-cross-platform-compatibility` — 加解密跨平台数据兼容性

- ✅ 已克隆 **基于cryptoFramework实现加解密功能**
  - 仓库：`harmonyos_samples/crypto-collection` ｜ 本地：`best_practices_code/harmonyos_samples__crypto-collection/`
  - 远程：<https://gitcode.com/harmonyos_samples/crypto-collection>

### `bpta-custom-camera-photo` — 自定义相机拍照

- ✅ 已克隆 **实现自定义相机功能**
  - 仓库：`harmonyos_samples/CustomCamera` ｜ 本地：`best_practices_code/harmonyos_samples__CustomCamera/`
  - 远程：<https://gitcode.com/harmonyos_samples/CustomCamera>

### `bpta-custom-camera-preview` — 自定义相机预览

- ✅ 已克隆 **实现自定义相机功能**
  - 仓库：`harmonyos_samples/CustomCamera` ｜ 本地：`best_practices_code/harmonyos_samples__CustomCamera/`
  - 远程：<https://gitcode.com/harmonyos_samples/CustomCamera>

### `bpta-custom-camera-video` — 自定义相机录像

- ✅ 已克隆 **实现自定义相机功能**
  - 仓库：`harmonyos_samples/CustomCamera` ｜ 本地：`best_practices_code/harmonyos_samples__CustomCamera/`
  - 远程：<https://gitcode.com/harmonyos_samples/CustomCamera>

### `bpta-custom-font-settings` — 自定义字体设置

- ✅ 已克隆 **实现字体设置功能**
  - 仓库：`harmonyos_samples/text-display-font` ｜ 本地：`best_practices_code/harmonyos_samples__text-display-font/`
  - 远程：<https://gitcode.com/harmonyos_samples/text-display-font>

### `bpta-custom-keyboard` — 自定义键盘

- ✅ 已克隆 **实现自定义键盘功能**
  - 仓库：`harmonyos_samples/CustomizeKeyboard` ｜ 本地：`best_practices_code/harmonyos_samples__CustomizeKeyboard/`
  - 远程：<https://gitcode.com/harmonyos_samples/CustomizeKeyboard>

### `bpta-customdialog-selection-and-development` — 自定义弹窗选型与开发

- ✅ 已克隆 **自定义弹窗选型与开发**
  - 仓库：`harmonyos_samples/custom-dialog-selection-and-development` ｜ 本地：`best_practices_code/harmonyos_samples__custom-dialog-selection-and-development/`
  - 远程：<https://gitcode.com/harmonyos_samples/custom-dialog-selection-and-development>

### `bpta-dark-mode-adaptation` — 深色模式适配

- ✅ 已克隆 **实现深色模式功能**
  - 仓库：`harmonyos_samples/fit-for-dark-mode` ｜ 本地：`best_practices_code/harmonyos_samples__fit-for-dark-mode/`
  - 远程：<https://gitcode.com/harmonyos_samples/fit-for-dark-mode>

### `bpta-deal-stride-solution` — 相机预览花屏解决方案

- ✅ 已克隆 **处理stride解决相机预览流花屏问题**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/DealStrideSolution>

### `bpta-desktop-shortcuts` — 桌面快捷方式

- ✅ 已克隆 **通过module.json5文件配置应用快捷打开方式入口**
  - 仓库：`harmonyos_samples/DesktopShortcut` ｜ 本地：`best_practices_code/harmonyos_samples__DesktopShortcut/`
  - 远程：<https://gitcode.com/harmonyos_samples/DesktopShortcut>

### `bpta-development-scenarios-for-tabs` — Tabs选项卡常见开发场景

- ✅ 已克隆 **Tabs组件应用场景**
  - 仓库：`harmonyos_samples/PureTabs` ｜ 本地：`best_practices_code/harmonyos_samples__PureTabs/`
  - 远程：<https://gitcode.com/harmonyos_samples/PureTabs>

### `bpta-dialog-encapsulation` — 弹窗组件封装

- ✅ 已克隆 **实现组件的封装**
  - 仓库：`harmonyos_samples/ComponentEncapsulation` ｜ 本地：`best_practices_code/harmonyos_samples__ComponentEncapsulation/`
  - 远程：<https://gitcode.com/harmonyos_samples/ComponentEncapsulation>

### `bpta-dispose-highly-loaded-component-render` — 高负载场景分帧渲染

- ✅ 已克隆 **基于分帧渲染实现应用界面优化**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/FramedRendering>

### `bpta-distributed-pasteboard` — 跨设备剪贴板常见场景

- ✅ 已克隆 **实现剪贴板复制粘贴的功能**
  - 仓库：`harmonyos_samples/pasteboard` ｜ 本地：`best_practices_code/harmonyos_samples__pasteboard/`
  - 远程：<https://gitcode.com/harmonyos_samples/pasteboard>

### `bpta-drawing-capability-improve-performance` — Drawing自绘制性能提升

- ✅ 已克隆 **Drawing自绘制性能提升**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/NdkDrawing>

### `bpta-dynamic-link-library` — 三方动态链接库集成

- ✅ 已克隆 **实现动态链接库（.so）的引用**
  - 仓库：`harmonyos_samples/NativeSoIntegration` ｜ 本地：`best_practices_code/harmonyos_samples__NativeSoIntegration/`
  - 远程：<https://gitcode.com/harmonyos_samples/NativeSoIntegration>

### `bpta-easygo-parallel` — 平行视界

- ✅ 已克隆 **平行视界**
  - 仓库：`HarmonyOS_Samples/easygo-parallel-shopping` ｜ 本地：`best_practices_code/HarmonyOS_Samples__easygo-parallel-shopping/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/easygo-parallel-shopping>

### `bpta-file-transmission-based-on-sfft` — 基于SFFT的大文件高速并发传输

- ✅ 已克隆 **SuperFastFileTrans**
  - 仓库：`harmonyos_samples/SuperFastFileTrans` ｜ 本地：`best_practices_code/harmonyos_samples__SuperFastFileTrans/`
  - 远程：<https://gitcode.com/harmonyos_samples/SuperFastFileTrans>
- ✅ 已克隆 **SuperFastFileTrans**
  - 仓库：`harmonyos_samples/SuperFastFileTrans` ｜ 本地：`best_practices_code/harmonyos_samples__SuperFastFileTrans/`
  - 远程：<https://gitcode.com/harmonyos_samples/SuperFastFileTrans>
- ✅ 已克隆 **SuperFastFileTrans**
  - 仓库：`harmonyos_samples/SuperFastFileTrans` ｜ 本地：`best_practices_code/harmonyos_samples__SuperFastFileTrans/`
  - 远程：<https://gitcode.com/harmonyos_samples/SuperFastFileTrans>
- ✅ 已克隆 **SuperFastFileTrans**
  - 仓库：`harmonyos_samples/SuperFastFileTrans` ｜ 本地：`best_practices_code/harmonyos_samples__SuperFastFileTrans/`
  - 远程：<https://gitcode.com/harmonyos_samples/SuperFastFileTrans>

### `bpta-file-upload-and-download-performance` — 文件上传下载优化

- ✅ 已克隆 **多文件下载监听**
  - 仓库：`harmonyos_samples/multi-file-download` ｜ 本地：`best_practices_code/harmonyos_samples__multi-file-download/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-file-download>
- ✅ 已克隆 **实现上传和下载功能**
  - 仓库：`harmonyos_samples/upload-and-down-load` ｜ 本地：`best_practices_code/harmonyos_samples__upload-and-down-load/`
  - 远程：<https://gitcode.com/harmonyos_samples/upload-and-down-load>
- ✅ 已克隆 **实现上传和下载功能**
  - 仓库：`harmonyos_samples/upload-and-down-load` ｜ 本地：`best_practices_code/harmonyos_samples__upload-and-down-load/`
  - 远程：<https://gitcode.com/harmonyos_samples/upload-and-down-load>

### `bpta-folded-hover` — 折叠屏悬停态

- ✅ 已克隆 **实现折叠屏悬停态**
  - 仓库：`harmonyos_samples/FoldedHover` ｜ 本地：`best_practices_code/harmonyos_samples__FoldedHover/`
  - 远程：<https://gitcode.com/harmonyos_samples/FoldedHover>

### `bpta-fuzzy-scene-performance-optimization` — 图像模糊动效优化

- ✅ 已克隆 **图像模糊动效优化**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/FuzzySceneOptimization>

### `bpta-game-prelaunch-practice` — 游戏预启动开发实践

- ✅ 已克隆 **基于游戏启动加速服务实现游戏预启动功能**
  - 仓库：`HarmonyOS_Samples/GraphicsAccelerateKitGamePrelaunchArkts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__GraphicsAccelerateKitGamePrelaunchArkts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/GraphicsAccelerateKitGamePrelaunchArkts/tree/master>

### `bpta-gestures-practice` — 手势事件冲突解决方案

- ✅ 已克隆 **手势事件冲突解决方案**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/GesturesConfictPractice>

### `bpta-global-state-management-state-store` — 基于StateStore的全局状态管理

- ✅ 已克隆 **基于StateStore实现全局状态管理最佳实践**
  - 仓库：`harmonyos_samples/StateStore` ｜ 本地：`best_practices_code/harmonyos_samples__StateStore/`
  - 远程：<https://gitcode.com/harmonyos_samples/StateStore>
- ✅ 已克隆 **StateStore**
  - 仓库：`openharmony-sig/state_store` ｜ 本地：`best_practices_code/openharmony-sig__state_store/`
  - 远程：<https://gitcode.com/openharmony-sig/state_store>

### `bpta-grid-based-on-scrollcomponents` — 基于ScrollComponents实现网格

- ✅ 已克隆 **基于ScrollComponents实现网格**
  - 仓库：`HarmonyOS_Samples/GridScrollComponent` ｜ 本地：`best_practices_code/HarmonyOS_Samples__GridScrollComponent/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/GridScrollComponent>
- ✅ 已克隆 **ScrollComponents使用说明**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **ScrollComponents使用说明**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **基于NodeAdapter为视图管理器提供懒加载能力**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/docs/Reference.md#lazynodeadapter-类>

### `bpta-grid-drag-swap` — Grid网格元素拖拽交换

- ✅ 已克隆 **实现Grid网格元素拖拽交换排序能力**
  - 仓库：`harmonyos_samples/grid-drag-sort` ｜ 本地：`best_practices_code/harmonyos_samples__grid-drag-sort/`
  - 远程：<https://gitcode.com/harmonyos_samples/grid-drag-sort>
- ⏭️ 核心仓跳过 **源码**
  - 仓库：`openharmony/arkui_ace_engine` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/arkui_ace_engine/blob/master/advanced_ui_component/gridobjectsortcomponent/source/GridObjectSortComponent.ets>

### `bpta-hadss_dialoghub` — 基于DialogHub的通用弹窗

- ✅ 已克隆 **基于DialogHub实现通用弹窗库案例**
  - 仓库：`harmonyos_samples/DialogHub` ｜ 本地：`best_practices_code/harmonyos_samples__DialogHub/`
  - 远程：<https://gitcode.com/harmonyos_samples/DialogHub>
- ✅ 已克隆 **DialogHub简介**
  - 仓库：`openharmony-sig/dialoghub` ｜ 本地：`best_practices_code/openharmony-sig__dialoghub/`
  - 远程：<https://gitcode.com/openharmony-sig/dialoghub/blob/master/README.md>
- ✅ 已克隆 **弹窗模式**
  - 仓库：`openharmony-sig/dialoghub` ｜ 本地：`best_practices_code/openharmony-sig__dialoghub/`
  - 远程：<https://gitcode.com/openharmony-sig/dialoghub/blob/master/docs/Reference.md#dialogmode枚举说明>

### `bpta-harmony-application-security` — 应用安全编码实践

- ⏭️ 核心仓跳过 **https://gitcode.com/openharmony/arkcompiler_ets_frontend**
  - 仓库：`openharmony/arkcompiler_ets_frontend` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/arkcompiler_ets_frontend>

### `bpta-hdrtosdr` — HDR Vivid视频转码SDR视频开发实践

- ✅ 已克隆 **实现HDR视频转码SDR视频功能**
  - 仓库：`harmonyos_samples/hdr2sdr` ｜ 本地：`best_practices_code/harmonyos_samples__hdr2sdr/`
  - 远程：<https://gitcode.com/harmonyos_samples/hdr2sdr/tree/master/>

### `bpta-hdrvivid` — HDR Vivid视频播放与录制开发实践

- ✅ 已克隆 **实现HDR视频转码SDR视频功能**
  - 仓库：`harmonyos_samples/hdr2sdr` ｜ 本地：`best_practices_code/harmonyos_samples__hdr2sdr/`
  - 远程：<https://gitcode.com/harmonyos_samples/hdr2sdr/tree/master/>

### `bpta-high-performance-json-parsing` — 高性能JSON解析

- ✅ 已克隆 **基于TurboTransJSON实现高性能JSON解析**
  - 仓库：`HarmonyOS_Samples/TurboTransJSON` ｜ 本地：`best_practices_code/HarmonyOS_Samples__TurboTransJSON/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/TurboTransJSON>
- ✅ 已克隆 **TurboTransJSON**
  - 仓库：`openharmony-sig/turbo_trans` ｜ 本地：`best_practices_code/openharmony-sig__turbo_trans/`
  - 远程：<https://gitcode.com/openharmony-sig/turbo_trans>
- ✅ 已克隆 **class-transformer**
  - 仓库：`openharmony-tpc/openharmony_tpc_samples` ｜ 本地：`best_practices_code/openharmony-tpc__openharmony_tpc_samples/`
  - 远程：<https://gitcode.com/openharmony-tpc/openharmony_tpc_samples/tree/master/class-transformer>

### `bpta-high-performance-protobuf-parsing` — 高性能Protobuf解析

- ✅ 已克隆 **基于TurboTransProtobuf实现高性能Protobuf解析**
  - 仓库：`HarmonyOS_Samples/turbo-trans-protobuf` ｜ 本地：`best_practices_code/HarmonyOS_Samples__turbo-trans-protobuf/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/turbo-trans-protobuf/tree/master>
- ✅ 已克隆 **TurboTransProtobuf**
  - 仓库：`openharmony-sig/turbo_trans` ｜ 本地：`best_practices_code/openharmony-sig__turbo_trans/`
  - 远程：<https://gitcode.com/openharmony-sig/turbo_trans/tree/turbo_trans_protobuf>

### `bpta-hmos-live-stream-audio-call` — 基于媒体能力实现直播连麦功能

- ✅ 已克隆 **基于媒体能力实现直播连麦功能**
  - 仓库：`HarmonyOS_Samples/HMOS_LiveAudioCall` ｜ 本地：`best_practices_code/HarmonyOS_Samples__HMOS_LiveAudioCall/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/HMOS_LiveAudioCall>

### `bpta-hmos-live-stream-solution` — 基于媒体能力实现直播单播功能

- ✅ 已克隆 **基于HarmonyOS媒体子系统实现媒体直播功能**
  - 仓库：`harmonyos_samples/HMOS_LiveStream` ｜ 本地：`best_practices_code/harmonyos_samples__HMOS_LiveStream/`
  - 远程：<https://gitcode.com/harmonyos_samples/HMOS_LiveStream>

### `bpta-hmrouter` — 基于HMRouter的页面跳转

- ✅ 已克隆 **HMRouter**
  - 仓库：`harmonyos_samples/HMRouter` ｜ 本地：`best_practices_code/harmonyos_samples__HMRouter/`
  - 远程：<https://gitcode.com/harmonyos_samples/HMRouter>

### `bpta-image-to-video-synthesis` — 图片合成视频开发实践

- ✅ 已克隆 **实现图片合成视频功能**
  - 仓库：`harmonyos_samples/ImageToVideo` ｜ 本地：`best_practices_code/harmonyos_samples__ImageToVideo/`
  - 远程：<https://gitcode.com/harmonyos_samples/ImageToVideo/tree/master>

### `bpta-image-white-lump-solution` — Image白块解决方案

- ✅ 已克隆 **Image白块解决指导**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/PreHttpRequestUseFiles>

### `bpta-image_get_and_save` — 图片获取与保存实践

- ✅ 已克隆 **实现图片获取与保存功能**
  - 仓库：`harmonyos_samples/ImageGetAndSave` ｜ 本地：`best_practices_code/harmonyos_samples__ImageGetAndSave/`
  - 远程：<https://gitcode.com/harmonyos_samples/ImageGetAndSave>

### `bpta-implement-timeline-based-on-canvas` — 基于Canvas实现录像回放时间轴

- ✅ 已克隆 **核心组件TimeBarView**
  - 仓库：`harmonyos_samples/timebar` ｜ 本地：`best_practices_code/harmonyos_samples__timebar/`
  - 远程：<https://gitcode.com/harmonyos_samples/timebar/blob/master/time_bar/src/main/ets/components/TimeBarView.ets>
- ✅ 已克隆 **实现可缩放时间轴功能**
  - 仓库：`harmonyos_samples/timebar` ｜ 本地：`best_practices_code/harmonyos_samples__timebar/`
  - 远程：<https://gitcode.com/harmonyos_samples/timebar>

### `bpta-implementing-image-filters` — 基于colorFilter实现图片滤镜效果

- ✅ 已克隆 **基于colorFilter实现图片滤镜效果**
  - 仓库：`HarmonyOS_Samples/image-filter` ｜ 本地：`best_practices_code/HarmonyOS_Samples__image-filter/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/image-filter>

### `bpta-implementing-image-resizable` — 基于resizable实现图片拉伸效果

- ✅ 已克隆 **基于resizable实现图片拉伸效果**
  - 仓库：`harmonyos_samples/resizable-image` ｜ 本地：`best_practices_code/harmonyos_samples__resizable-image/`
  - 远程：<https://gitcode.com/harmonyos_samples/resizable-image>

### `bpta-intent-recommend-practice` — 意图框架习惯推荐场景

- ✅ 已克隆 **意图框架服务**
  - 仓库：`HarmonyOS_Samples/intents-kit-samplecode-clientdemo-arkts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__intents-kit-samplecode-clientdemo-arkts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/intents-kit-samplecode-clientdemo-arkts>

### `bpta-js-leak-watcher` — JsLeakWatcher开发实践

- ✅ 已克隆 **性能分析工具**
  - 仓库：`HarmonyOS_Samples/guide-snippets` ｜ 本地：`best_practices_code/HarmonyOS_Samples__guide-snippets/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/master/PerformanceAnalysisKit/HiDebugTool/README_zh.md>

### `bpta-keyboard-layout-adapt` — 软键盘布局适配

- ✅ 已克隆 **Keyboard**
  - 仓库：`harmonyos_samples/keyboard` ｜ 本地：`best_practices_code/harmonyos_samples__keyboard/`
  - 远程：<https://gitcode.com/harmonyos_samples/keyboard>
- ✅ 已克隆 **实现软键盘弹出功能**
  - 仓库：`harmonyos_samples/keyboard` ｜ 本地：`best_practices_code/harmonyos_samples__keyboard/`
  - 远程：<https://gitcode.com/harmonyos_samples/keyboard>

### `bpta-landscape-and-portrait-development` — 视频类应用横竖屏切换

- ✅ 已克隆 **实现视频横竖屏切换功能**
  - 仓库：`HarmonyOS_Samples/LandscapePortraitToggle` ｜ 本地：`best_practices_code/HarmonyOS_Samples__LandscapePortraitToggle/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/LandscapePortraitToggle>

### `bpta-lazyforeach-optimization` — 懒加载优化性能

- ✅ 已克隆 **布局优化指导**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ArkUI/Lazy_Loading_Optimizes_Performance>

### `bpta-list-based-on-scrollcomponents` — 基于ScrollComponents实现长列表

- ✅ 已克隆 **基于ScrollComponents实现长列表**
  - 仓库：`harmonyos_samples/ListScrollComponent` ｜ 本地：`best_practices_code/harmonyos_samples__ListScrollComponent/`
  - 远程：<https://gitcode.com/harmonyos_samples/ListScrollComponent>
- ✅ 已克隆 **ScrollComponents使用说明**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **ScrollComponents使用说明-快速开始**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **基于NodeAdapter为视图管理器提供懒加载能力**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/docs/Reference.md#lazynodeadapter-类>
- ✅ 已克隆 **组件复用-列表项子组件可拆分**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#列表项内子组件可拆分>

### `bpta-lite-wearable-guide` — 轻量级智能穿戴应用开发

- ✅ 已克隆 **轻量级智能穿戴应用开发**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/LiteWearable>

### `bpta-live-form-development-practice` — 互动卡片开发实践

- ✅ 已克隆 **互动卡片**
  - 仓库：`HarmonyOS_Samples/LiveCard` ｜ 本地：`best_practices_code/HarmonyOS_Samples__LiveCard/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/LiveCard>

### `bpta-live-streaming-optimization` — 弱网直播优化

- ✅ 已克隆 **ijkplayer**
  - 仓库：`openharmony-sig/ohos_ijkplayer` ｜ 本地：`best_practices_code/openharmony-sig__ohos_ijkplayer/`
  - 远程：<https://gitcode.com/openharmony-sig/ohos_ijkplayer>
- ✅ 已克隆 **setOption**
  - 仓库：`openharmony-sig/ohos_ijkplayer` ｜ 本地：`best_practices_code/openharmony-sig__ohos_ijkplayer/`
  - 远程：<https://gitcode.com/openharmony-sig/ohos_ijkplayer/blob/master/README_zh.md>

### `bpta-local-file-and-data-multithreaded-io` — 多线程操作密集型关系型数据库和文件读写

- ✅ 已克隆 **基于Taskpool和@Sendable的关系型数据库和文件读写**
  - 仓库：`harmonyos_samples/MultiThreadIO` ｜ 本地：`best_practices_code/harmonyos_samples__MultiThreadIO/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiThreadIO/tree/master>

### `bpta-lock-screen-immersive-live-window` — 锁屏沉浸实况窗

- ✅ 已克隆 **实现锁屏沉浸实况窗**
  - 仓库：`harmonyos_samples/LiveViewLockScreen` ｜ 本地：`best_practices_code/harmonyos_samples__LiveViewLockScreen/`
  - 远程：<https://gitcode.com/harmonyos_samples/LiveViewLockScreen>

### `bpta-long-snapshot-practice` — 长截图

- ✅ 已克隆 **实现长截图功能**
  - 仓库：`harmonyos_samples/LongSnapshotPractice` ｜ 本地：`best_practices_code/harmonyos_samples__LongSnapshotPractice/`
  - 远程：<https://gitcode.com/harmonyos_samples/LongSnapshotPractice>

### `bpta-ltpo-description` — 基于LTPO的低功耗设计

- ✅ 已克隆 **实现流畅刷文章功能**
  - 仓库：`harmonyos_samples/fluent-blog` ｜ 本地：`best_practices_code/harmonyos_samples__fluent-blog/`
  - 远程：<https://gitcode.com/harmonyos_samples/fluent-blog>

### `bpta-malloc-dispatch-table` — 内存泄漏定制能力开放使用指导

- ✅ 已克隆 **性能分析工具**
  - 仓库：`HarmonyOS_Samples/guide-snippets` ｜ 本地：`best_practices_code/HarmonyOS_Samples__guide-snippets/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/master/PerformanceAnalysisKit/HiDebugTool/README_zh.md>

### `bpta-managing-audio-input-devices` — 管理音频输入设备开发实践

- ✅ 已克隆 **实现音频输入设备管理功能**
  - 仓库：`HarmonyOS_Samples/managing-audio-input-devices` ｜ 本地：`best_practices_code/HarmonyOS_Samples__managing-audio-input-devices/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/managing-audio-input-devices>

### `bpta-managing-audio-output-devices` — 管理音频输出设备开发实践

- ✅ 已克隆 **实现音频输出设备管理功能**
  - 仓库：`HarmonyOS_Samples/manage-audio-output-devices` ｜ 本地：`best_practices_code/HarmonyOS_Samples__manage-audio-output-devices/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/manage-audio-output-devices>

### `bpta-multi-device-camera` — 相机硬件差异

- ✅ 已克隆 **基于相机开放能力和一多能力实现多设备相机**
  - 仓库：`harmonyos_samples/MultiDeviceCamera` ｜ 本地：`best_practices_code/harmonyos_samples__MultiDeviceCamera/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiDeviceCamera>

### `bpta-multi-device-component-layout` — 组件布局场景

- ✅ 已克隆 **基于一多能力实现响应式布局**
  - 仓库：`harmonyos_samples/ResponsiveLayout` ｜ 本地：`best_practices_code/harmonyos_samples__ResponsiveLayout/`
  - 远程：<https://gitcode.com/harmonyos_samples/ResponsiveLayout>

### `bpta-multi-device-page-layout` — 页面布局场景

- ✅ 已克隆 **基于一多能力实现响应式布局**
  - 仓库：`harmonyos_samples/ResponsiveLayout` ｜ 本地：`best_practices_code/harmonyos_samples__ResponsiveLayout/`
  - 远程：<https://gitcode.com/harmonyos_samples/ResponsiveLayout>

### `bpta-multi-device-start` — 从一个例子开始

- ✅ 已克隆 **一多天气**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/Weather>

### `bpta-multi-device-window-direction` — 窗口方向

- ✅ 已克隆 **窗口方向**
  - 仓库：`HarmonyOS_Samples/WindowOrientation` ｜ 本地：`best_practices_code/HarmonyOS_Samples__WindowOrientation/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/WindowOrientation>

### `bpta-multi-device-window-immersive` — 窗口沉浸式

- ✅ 已克隆 **沉浸式页面开发**
  - 仓库：`harmonyos_samples/Immersive` ｜ 本地：`best_practices_code/harmonyos_samples__Immersive/`
  - 远程：<https://gitcode.com/harmonyos_samples/Immersive>

### `bpta-multi-device-window-mode` — 窗口模式

- ✅ 已克隆 **多HAP构建功能**
  - 仓库：`harmonyos_samples/multi-hap` ｜ 本地：`best_practices_code/harmonyos_samples__multi-hap/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-hap>
- ⏭️ 核心仓跳过 **module.json5配置文件**
  - 仓库：`openharmony/docs` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/quick-start/module-configuration-file.md>
- ⏭️ 核心仓跳过 **abilities标签**
  - 仓库：`openharmony/docs` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/quick-start/module-configuration-file.md#abilities标签>

### `bpta-multi-interaction` — 多设备交互

- ✅ 已克隆 **实现多设备交互功能**
  - 仓库：`harmonyos_samples/multi-device-interaction` ｜ 本地：`best_practices_code/harmonyos_samples__multi-device-interaction/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-device-interaction>

### `bpta-multi-mobile-payment` — 多设备移动支付界面

- ✅ 已克隆 **多设备移动支付界面**
  - 仓库：`HarmonyOS_Samples/multi-mobile-payment` ｜ 本地：`best_practices_code/HarmonyOS_Samples__multi-mobile-payment/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/multi-mobile-payment>

### `bpta-multi-music-app-overview` — 多设备音乐界面

- ✅ 已克隆 **module.json5**
  - 仓库：`HarmonyOS_Samples/MusicHome` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MusicHome/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MusicHome/blob/master/products/default/src/main/module.json5>
- ✅ 已克隆 **多设备音乐界面**
  - 仓库：`HarmonyOS_Samples/MusicHome` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MusicHome/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MusicHome>

### `bpta-multi-settings-application-page` — 多设备设置界面

- ✅ 已克隆 **多设备设置界面**
  - 仓库：`HarmonyOS_Samples/NavigationSettings` ｜ 本地：`best_practices_code/HarmonyOS_Samples__NavigationSettings/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/NavigationSettings>

### `bpta-multi-tab-practice` — 常见导航样式案例

- ✅ 已克隆 **基于Tabs组件实现常见导航样式**
  - 仓库：`harmonyos_samples/multi-tab-navigation` ｜ 本地：`best_practices_code/harmonyos_samples__multi-tab-navigation/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-tab-navigation>

### `bpta-multi-target` — 多目标产物构建

- ✅ 已克隆 **构建多目标产物工程**
  - 仓库：`harmonyos_samples/MultiTarget` ｜ 本地：`best_practices_code/harmonyos_samples__MultiTarget/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiTarget>

### `bpta-multi_game` — 多设备游戏界面

- ✅ 已克隆 **多设备游戏界面**
  - 仓库：`harmonyos_samples/ndk-opengl` ｜ 本地：`best_practices_code/harmonyos_samples__ndk-opengl/`
  - 远程：<https://gitcode.com/harmonyos_samples/ndk-opengl>

### `bpta-music-card` — 音乐服务卡片

- ✅ 已克隆 **音乐服务卡片**
  - 仓库：`harmonyos_samples/MusicCard` ｜ 本地：`best_practices_code/harmonyos_samples__MusicCard/`
  - 远程：<https://gitcode.com/harmonyos_samples/MusicCard>
- ✅ 已克隆 **基于Form Kit实现音乐服务卡片**
  - 仓库：`harmonyos_samples/MusicCard` ｜ 本地：`best_practices_code/harmonyos_samples__MusicCard/`
  - 远程：<https://gitcode.com/harmonyos_samples/MusicCard>

### `bpta-native-sub-main-comm` — Native侧子线程与UI主线程通信

- ✅ 已克隆 **实现Native侧子线程与UI主线程通信**
  - 仓库：`harmonyos_samples/NativeSubMainThreadCommunication` ｜ 本地：`best_practices_code/harmonyos_samples__NativeSubMainThreadCommunication/`
  - 远程：<https://gitcode.com/harmonyos_samples/NativeSubMainThreadCommunication>

### `bpta-network-reconnection` — 应用网络重连

- ✅ 已克隆 **实现应用网络重连功能**
  - 仓库：`harmonyos_samples/NetworkReconnection` ｜ 本地：`best_practices_code/harmonyos_samples__NetworkReconnection/`
  - 远程：<https://gitcode.com/harmonyos_samples/NetworkReconnection>

### `bpta-news_homepage` — 首页信息流体验优化

- ✅ 已克隆 **基于原生组件实现新闻类首页流畅体验**
  - 仓库：`harmonyos_samples/fluent-news-homepage` ｜ 本地：`best_practices_code/harmonyos_samples__fluent-news-homepage/`
  - 远程：<https://gitcode.com/harmonyos_samples/fluent-news-homepage>

### `bpta-one-shot-to-the-end` — 一镜到底动效

- ✅ 已克隆 **实现转场动效功能合集**
  - 仓库：`harmonyos_samples/transitions-collection` ｜ 本地：`best_practices_code/harmonyos_samples__transitions-collection/`
  - 远程：<https://gitcode.com/harmonyos_samples/transitions-collection>

### `bpta-online-video-playback-lags-practice` — 在线视频播放卡顿优化

- ✅ 已克隆 **网络视频流自适应码率调节**
  - 仓库：`harmonyos_samples/NetAdaptiveVideoStream` ｜ 本地：`best_practices_code/harmonyos_samples__NetAdaptiveVideoStream/`
  - 远程：<https://gitcode.com/harmonyos_samples/NetAdaptiveVideoStream>

### `bpta-optimization-overview` — 性能分析简介

- ✅ 已克隆 **SmartPerf**
  - 仓库：`openharmony-sig/smartperf` ｜ 本地：`best_practices_code/openharmony-sig__smartperf/`
  - 远程：<https://gitcode.com/openharmony-sig/smartperf>

### `bpta-page-brightness-settings` — 页面亮度设置

- ✅ 已克隆 **实现页面亮度调节的功能**
  - 仓库：`harmonyos_samples/AdjustBrightness` ｜ 本地：`best_practices_code/harmonyos_samples__AdjustBrightness/`
  - 远程：<https://gitcode.com/harmonyos_samples/AdjustBrightness>

### `bpta-page-transition` — 页面间转场

- ✅ 已克隆 **实现转场动效功能合集**
  - 仓库：`harmonyos_samples/transitions-collection` ｜ 本地：`best_practices_code/harmonyos_samples__transitions-collection/`
  - 远程：<https://gitcode.com/harmonyos_samples/transitions-collection>

### `bpta-permission-application` — 应用权限申请

- ✅ 已克隆 **实现权限申请功能**
  - 仓库：`harmonyos_samples/PermissionApplication` ｜ 本地：`best_practices_code/harmonyos_samples__PermissionApplication/`
  - 远程：<https://gitcode.com/harmonyos_samples/PermissionApplication>

### `bpta-picture-preview` — 图片预览器

- ✅ 已克隆 **基于ArkUI实现图片预览功能**
  - 仓库：`harmonyos_samples/PicturePreview` ｜ 本地：`best_practices_code/harmonyos_samples__PicturePreview/`
  - 远程：<https://gitcode.com/harmonyos_samples/PicturePreview>

### `bpta-playing-formatted-audio-based-avplayer-arkts` — 基于AVPlayer播放格式化音频（ArkTS）

- ✅ 已克隆 **基于AVPlayer播放格式化音频（ArkTS）**
  - 仓库：`HarmonyOS_Samples/avplayer-play-formatted-audio-arkts` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avplayer-play-formatted-audio-arkts/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avplayer-play-formatted-audio-arkts>

### `bpta-playing-formatted-audio-based-avplayer-cpp` — 基于AVPlayer播放格式化音频（C++）

- ✅ 已克隆 **基于AVPlayer播放格式化音频（C++）**
  - 仓库：`HarmonyOS_Samples/avplayer-play-formatted-audio-cpp` ｜ 本地：`best_practices_code/HarmonyOS_Samples__avplayer-play-formatted-audio-cpp/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/avplayer-play-formatted-audio-cpp>

### `bpta-playing-pcm-audio-based-audiorenderer` — 基于AudioRenderer播放PCM音频

- ✅ 已克隆 **基于AudioRenderer播放PCM音频**
  - 仓库：`HarmonyOS_Samples/audio-renderer-play-pcm` ｜ 本地：`best_practices_code/HarmonyOS_Samples__audio-renderer-play-pcm/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/audio-renderer-play-pcm>

### `bpta-playing-pcm-audio-based-ohaudio` — 基于OHAudio播放PCM音频

- ✅ 已克隆 **基于OHAudio播放PCM音频**
  - 仓库：`HarmonyOS_Samples/ohaudio-play-pcm` ｜ 本地：`best_practices_code/HarmonyOS_Samples__ohaudio-play-pcm/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/ohaudio-play-pcm>

### `bpta-playing-short-audio-based-soundpool` — 基于SoundPool播放短音频

- ✅ 已克隆 **基于SoundPool播放短音频**
  - 仓库：`HarmonyOS_Samples/soundpool-play-short-audio` ｜ 本地：`best_practices_code/HarmonyOS_Samples__soundpool-play-short-audio/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/soundpool-play-short-audio>

### `bpta-positioning` — 位置定位

- ✅ 已克隆 **基于位置服务获取设备定位信息**
  - 仓库：`harmonyos_samples/location-service` ｜ 本地：`best_practices_code/harmonyos_samples__location-service/`
  - 远程：<https://gitcode.com/harmonyos_samples/location-service>

### `bpta-pre-connect` — 冷启网络预建链最佳实践

- ✅ 已克隆 **网络预建链**
  - 仓库：`HarmonyOS_Samples/RcpPreconnect` ｜ 本地：`best_practices_code/HarmonyOS_Samples__RcpPreconnect/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/RcpPreconnect>

### `bpta-quality-overview` — 应用质量概览

- ✅ 已克隆 **SmartPerf(性能功耗调优工具)**
  - 仓库：`openharmony-sig/smartperf` ｜ 本地：`best_practices_code/openharmony-sig__smartperf/`
  - 远程：<https://gitcode.com/openharmony-sig/smartperf>

### `bpta-reader-page-flip` — 阅读器翻页

- ✅ 已克隆 **实现阅读器翻页效果**
  - 仓库：`harmonyos_samples/PageFlip` ｜ 本地：`best_practices_code/harmonyos_samples__PageFlip/`
  - 远程：<https://gitcode.com/harmonyos_samples/PageFlip>

### `bpta-recommended-use-of-device-id` — 设备标识使用推荐

- ✅ 已克隆 **实现获取设备标识功能**
  - 仓库：`harmonyos_samples/ObtainingDeviceID` ｜ 本地：`best_practices_code/harmonyos_samples__ObtainingDeviceID/`
  - 远程：<https://gitcode.com/harmonyos_samples/ObtainingDeviceID>

### `bpta-render-web-using-same-layer-render` — 同层渲染原生组件

- ✅ 已克隆 **基于ArkWeb实现系统原生组件渲染至H5页面上**
  - 仓库：`harmonyos_samples/arkweb-same-level-rendering` ｜ 本地：`best_practices_code/harmonyos_samples__arkweb-same-level-rendering/`
  - 远程：<https://gitcode.com/harmonyos_samples/arkweb-same-level-rendering>

### `bpta-rich-text-display` — 富文本显示的选型与开发

- ✅ 已克隆 **实现富文本信息的显示**
  - 仓库：`harmonyos_samples/styledtext` ｜ 本地：`best_practices_code/harmonyos_samples__styledtext/`
  - 远程：<https://gitcode.com/harmonyos_samples/styledtext>

### `bpta-rich-text-editor` — 实现富文本编辑器

- ✅ 已克隆 **基于ArkUI实现内容发布器功能**
  - 仓库：`harmonyos_samples/content-publisher` ｜ 本地：`best_practices_code/harmonyos_samples__content-publisher/`
  - 远程：<https://gitcode.com/harmonyos_samples/content-publisher>

### `bpta-scenario-stability-leak` — 资源泄漏类问题案例

- ✅ 已克隆 **Smartperf**
  - 仓库：`openharmony-sig/smartperf` ｜ 本地：`best_practices_code/openharmony-sig__smartperf/`
  - 远程：<https://gitcode.com/openharmony-sig/smartperf>
- ⏭️ 核心仓跳过 **setMemoryNameSync**
  - 仓库：`openharmony/docs` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/docs/blob/c897489afd3a7403adfff79f20b8596ca05f7bcf/zh-cn/application-dev/reference/apis-image-kit/js-apis-image.md#setmemorynamesync13>

### `bpta-screen-flicker-solution` — 应用闪屏解决方案

- ✅ 已克隆 **解决应用动效闪屏的方案**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ScreenFlickerSolution>

### `bpta-shared-bicycle` — 快捷骑行体验

- ✅ 已克隆 **基于实况窗和扫码功能实现快捷触达的骑行场景**
  - 仓库：`HarmonyOS_Samples/bicycle-sharing` ｜ 本地：`best_practices_code/HarmonyOS_Samples__bicycle-sharing/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/bicycle-sharing>

### `bpta-short-video-base-adaptivevideo` — 基于adaptive_video的短视频适配

- ✅ 已克隆 **实现短视频沉浸和旋转播放功能**
  - 仓库：`harmonyos_samples/AdaptiveVideo` ｜ 本地：`best_practices_code/harmonyos_samples__AdaptiveVideo/`
  - 远程：<https://gitcode.com/harmonyos_samples/AdaptiveVideo>
- ✅ 已克隆 **adaptive_video使用说明**
  - 仓库：`openharmony-sig/hadss_adaptive` ｜ 本地：`best_practices_code/openharmony-sig__hadss_adaptive/`
  - 远程：<https://gitcode.com/openharmony-sig/hadss_adaptive/tree/master/adaptive_video>
- ✅ 已克隆 **adaptive_video使用说明**
  - 仓库：`openharmony-sig/hadss_adaptive` ｜ 本地：`best_practices_code/openharmony-sig__hadss_adaptive/`
  - 远程：<https://gitcode.com/openharmony-sig/hadss_adaptive/tree/master/adaptive_video>
- ✅ 已克隆 **adaptive_video使用说明**
  - 仓库：`openharmony-sig/hadss_adaptive` ｜ 本地：`best_practices_code/openharmony-sig__hadss_adaptive/`
  - 远程：<https://gitcode.com/openharmony-sig/hadss_adaptive/tree/master/adaptive_video>

### `bpta-smart-reach` — 智感握姿

- ✅ 已克隆 **智感握姿**
  - 仓库：`HarmonyOS_Samples/SmartReach` ｜ 本地：`best_practices_code/HarmonyOS_Samples__SmartReach/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/SmartReach/tree/master>

### `bpta-smartwatch` — 智能穿戴应用开发

- ✅ 已克隆 **轻量级智能穿戴应用开发**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/LiteWearable>
- ✅ 已克隆 **实现手机手表互联通信与手表心率监听**
  - 仓库：`harmonyos_samples/Phone_Connection` ｜ 本地：`best_practices_code/harmonyos_samples__Phone_Connection/`
  - 远程：<https://gitcode.com/harmonyos_samples/Phone_Connection>

### `bpta-smartwatchnavigation` — 智能穿戴导航协同

- ✅ 已克隆 **基于WearEngine实现协同导航应用**
  - 仓库：`harmonyos_samples/SmartWatchMapNavigation` ｜ 本地：`best_practices_code/harmonyos_samples__SmartWatchMapNavigation/`
  - 远程：<https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation>

### `bpta-smooth-switching` — 在线短视频流畅切换

- ✅ 已克隆 **实现流畅切换短视频**
  - 仓库：`harmonyos_samples/SmoothSwitchShortVideos` ｜ 本地：`best_practices_code/harmonyos_samples__SmoothSwitchShortVideos/`
  - 远程：<https://gitcode.com/harmonyos_samples/SmoothSwitchShortVideos>

### `bpta-social-share` — 社交分享跳转

- ✅ 已克隆 **基于App Linking实现社交分享跳转**
  - 仓库：`harmonyos_samples/SocialShareJump` ｜ 本地：`best_practices_code/harmonyos_samples__SocialShareJump/`
  - 远程：<https://gitcode.com/harmonyos_samples/SocialShareJump>

### `bpta-sound-quality-switching` — 音质切换开发实践

- ✅ 已克隆 **实现音质切换**
  - 仓库：`harmonyos_samples/audio-format-switch` ｜ 本地：`best_practices_code/harmonyos_samples__audio-format-switch/`
  - 远程：<https://gitcode.com/harmonyos_samples/audio-format-switch>

### `bpta-spatiality-immersive` — 沉浸光感

- ✅ 已克隆 **沉浸光感开发案例**
  - 仓库：`HarmonyOS_Samples/Spatialization` ｜ 本地：`best_practices_code/HarmonyOS_Samples__Spatialization/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/Spatialization>

### `bpta-special-text-recognition` — 特殊文本识别跳转

- ✅ 已克隆 **基于enableDataDetector属性实现特殊文本识别的能力**
  - 仓库：`harmonyos_samples/CommonLinksSkip` ｜ 本地：`best_practices_code/harmonyos_samples__CommonLinksSkip/`
  - 远程：<https://gitcode.com/harmonyos_samples/CommonLinksSkip>

### `bpta-stability-address-sanitizer-principle` — 地址越界检测工具原理

- ⏭️ 核心仓跳过 **GuardedPoolAllocator**
  - 仓库：`openharmony/third_party_llvm-project` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/third_party_llvm-project/blob/master/compiler-rt/lib/gwp_asan/guarded_pool_allocator.cpp>

### `bpta-stability-asan-detection` — 使用ASan检测内存错误

- ⏭️ 核心仓跳过 **asan_flags**
  - 仓库：`openharmony/third_party_llvm-project` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/third_party_llvm-project/blob/master/compiler-rt/lib/asan/asan_flags.inc>

### `bpta-stability-coding-standard-api` — 易错API的使用规范

- ✅ 已克隆 **易错API的使用规范**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ApiUsingStandards>

### `bpta-stability-coding-standard-libuv` — libuv使用规范及案例

- ✅ 已克隆 **libuv使用规范及案例**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/LibuvDevelopment>

### `bpta-stability-coding-standard-node` — Node-API开发规范

- ✅ 已克隆 **Node-API开发规范**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/NodeAPIDevelopment>

### `bpta-stability-hwasan-detection` — 使用HWASan检测内存错误

- ⏭️ 核心仓跳过 **hwasan_flags**
  - 仓库：`openharmony/third_party_llvm-project` ｜ 本地：—
  - 远程：<https://gitcode.com/openharmony/third_party_llvm-project/blob/master/compiler-rt/lib/hwasan/hwasan_flags.inc>

### `bpta-stability-leak-way` — 资源泄漏类问题分析方法

- ✅ 已克隆 **Smartperf**
  - 仓库：`openharmony-sig/smartperf` ｜ 本地：`best_practices_code/openharmony-sig__smartperf/`
  - 远程：<https://gitcode.com/openharmony-sig/smartperf>
- ✅ 已克隆 **Smartperf**
  - 仓库：`openharmony-sig/smartperf` ｜ 本地：`best_practices_code/openharmony-sig__smartperf/`
  - 远程：<https://gitcode.com/openharmony-sig/smartperf>

### `bpta-status-management` — 状态管理最佳实践

- ✅ 已克隆 **HMOS世界App**
  - 仓库：`harmonyos_samples/hmosworld` ｜ 本地：`best_practices_code/harmonyos_samples__hmosworld/`
  - 远程：<https://gitcode.com/harmonyos_samples/hmosworld>

### `bpta-surface-encoder` — 基于Surface模式进行视频编码

- ✅ 已克隆 **基于AVCodec能力的视频编解码**
  - 仓库：`harmonyos_samples/AVCodecVideo` ｜ 本地：`best_practices_code/harmonyos_samples__AVCodecVideo/`
  - 远程：<https://gitcode.com/harmonyos_samples/AVCodecVideo>
- ✅ 已克隆 **基于AVScreenCapture实现录屏功能**
  - 仓库：`harmonyos_samples/avscreen-capture-screen-record` ｜ 本地：`best_practices_code/harmonyos_samples__avscreen-capture-screen-record/`
  - 远程：<https://gitcode.com/harmonyos_samples/avscreen-capture-screen-record>

### `bpta-swiper_high_performance_development_guide` — Swiper组件加载丢帧优化

- ✅ 已克隆 **实现Swiper组件加载慢丢帧优化**
  - 仓库：`harmonyos_samples/SwiperPerformance` ｜ 本地：`best_practices_code/harmonyos_samples__SwiperPerformance/`
  - 远程：<https://gitcode.com/harmonyos_samples/SwiperPerformance>

### `bpta-taskpool_usage_specifications_and_faqs` — TaskPool使用规范

- ✅ 已克隆 **TaskPool使用规范样例代码工程**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/TaskPoolPractice>

### `bpta-text-expand-collapse` — 文本展开折叠

- ✅ 已克隆 **实现富文本收起展开功能**
  - 仓库：`harmonyos_samples/TextExpand` ｜ 本地：`best_practices_code/harmonyos_samples__TextExpand/`
  - 远程：<https://gitcode.com/harmonyos_samples/TextExpand>

### `bpta-thread-priority-setting` — 高负载场景线程优先级设置

- ✅ 已克隆 **基于QoS设置线程优先级**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/NdkQoS>

### `bpta-time-optimization-of-the-main-thread` — 主线程耗时操作优化

- ✅ 已克隆 **主线程耗时操作优化指导**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/AvoidTimeComsume>

### `bpta-ui-component-encapsulation` — 组件封装

- ✅ 已克隆 **实现组件的封装**
  - 仓库：`harmonyos_samples/ComponentEncapsulation` ｜ 本地：`best_practices_code/harmonyos_samples__ComponentEncapsulation/`
  - 远程：<https://gitcode.com/harmonyos_samples/ComponentEncapsulation>

### `bpta-ui-component-performance-optimization` — UI组件性能优化

- ✅ 已克隆 **UI组件性能优化同源示例代码**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/ArkUI/UI_Component_Performance_Optimization>

### `bpta-ui-dynamic-operations` — 组件动态创建

- ✅ 已克隆 **实现组件的动态创建功能**
  - 仓库：`harmonyos_samples/DynamicComponent` ｜ 本地：`best_practices_code/harmonyos_samples__DynamicComponent/`
  - 远程：<https://gitcode.com/harmonyos_samples/DynamicComponent>

### `bpta-unified-drag-and-drop` — 统一拖拽

- ✅ 已克隆 **实现组件的自定义拖拽功能**
  - 仓库：`harmonyos_samples/DragFramework` ｜ 本地：`best_practices_code/harmonyos_samples__DragFramework/`
  - 远程：<https://gitcode.com/harmonyos_samples/DragFramework>

### `bpta-utilize-hwc-efficiently` — 高效利用HWC的低功耗设计

- ✅ 已克隆 **高效利用HWC的低功耗设计**
  - 仓库：`harmonyos_samples/UtilizeHWCEfficiently` ｜ 本地：`best_practices_code/harmonyos_samples__UtilizeHWCEfficiently/`
  - 远程：<https://gitcode.com/harmonyos_samples/UtilizeHWCEfficiently>

### `bpta-vdeocast` — 视频投播

- ✅ 已克隆 **实现视频投播功能**
  - 仓库：`harmonyos_samples/VideoCast` ｜ 本地：`best_practices_code/harmonyos_samples__VideoCast/`
  - 远程：<https://gitcode.com/harmonyos_samples/VideoCast>

### `bpta-video-adaptation-based-web` — Web页面视频适配

- ✅ 已克隆 **基于Web的视频处理**
  - 仓库：`harmonyos_samples/BestPracticeSnippets` ｜ 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
  - 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets/tree/master/VideoProcessBaseWeb>

### `bpta-video-barrage` — 视频场景弹幕绘制低功耗规则

- ✅ 已克隆 **基于XComponent组件实现OpenGL图形绘制及YUV图像渲染功能**
  - 仓库：`harmonyos_samples/ndk-xcomponent` ｜ 本地：`best_practices_code/harmonyos_samples__ndk-xcomponent/`
  - 远程：<https://gitcode.com/harmonyos_samples/ndk-xcomponent>

### `bpta-video-component-long-video` — 基于Video组件播放长视频

- ✅ 已克隆 **基于Video组件播放长视频**
  - 仓库：`HarmonyOS_Samples/video-show` ｜ 本地：`best_practices_code/HarmonyOS_Samples__video-show/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/video-show>

### `bpta-video-component-short-video` — 基于Video组件播放短视频

- ✅ 已克隆 **基于Video组件播放短视频**
  - 仓库：`HarmonyOS_Samples/PlayShortVideosBasedOnVideoComponent` ｜ 本地：`best_practices_code/HarmonyOS_Samples__PlayShortVideosBasedOnVideoComponent/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/PlayShortVideosBasedOnVideoComponent>

### `bpta-video-render` — 渲染视频画面

- ✅ 已克隆 **渲染视频数据**
  - 仓库：`harmonyos_samples/video-render` ｜ 本地：`best_practices_code/harmonyos_samples__video-render/`
  - 远程：<https://gitcode.com/harmonyos_samples/video-render>

### `bpta-video-thumbnail` — 基于系统能力获取视频缩略图

- ✅ 已克隆 **基于系统能力获取视频缩略图**
  - 仓库：`harmonyos_samples/VideoThumbnail` ｜ 本地：`best_practices_code/harmonyos_samples__VideoThumbnail/`
  - 远程：<https://gitcode.com/harmonyos_samples/VideoThumbnail>

### `bpta-vsync-power-optimization` — Vsync低功耗优化

- ✅ 已克隆 **react-native-harmony 0.72.70**
  - 仓库：`openharmony-sig/ohos_react_native` ｜ 本地：`best_practices_code/openharmony-sig__ohos_react_native/`
  - 远程：<https://gitcode.com/openharmony-sig/ohos_react_native/blob/5.1.0.404SP1-0.72.70/docs/zh-cn/release-notes/react-native-harmony-v5.1.0.404SP1.md>

### `bpta-waterflow-based-on-scrollcomponents` — 基于ScrollComponents实现瀑布流

- ✅ 已克隆 **基于ScrollComponents实现瀑布流**
  - 仓库：`harmonyos_samples/WaterFlowScrollComponent` ｜ 本地：`best_practices_code/harmonyos_samples__WaterFlowScrollComponent/`
  - 远程：<https://gitcode.com/harmonyos_samples/WaterFlowScrollComponent>
- ✅ 已克隆 **ScrollComponents使用说明**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **ScrollComponents使用说明-快速开始**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#快速开始>
- ✅ 已克隆 **基于NodeAdapter为视图管理器提供懒加载能力**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/docs/Reference.md#lazynodeadapter-类>
- ✅ 已克隆 **组件复用-列表项子组件可拆分**
  - 仓库：`openharmony-sig/scroll_components` ｜ 本地：`best_practices_code/openharmony-sig__scroll_components/`
  - 远程：<https://gitcode.com/openharmony-sig/scroll_components/blob/master/README.md#列表项内子组件可拆分>

### `bpta-waterflow-operations` — 常见瀑布流操作

- ✅ 已克隆 **实现WaterFlow瀑布流布局功能**
  - 仓库：`harmonyos_samples/water-flow` ｜ 本地：`best_practices_code/harmonyos_samples__water-flow/`
  - 远程：<https://gitcode.com/harmonyos_samples/water-flow>

### `bpta-waterflow-performance-optimization` — 瀑布流加载丢帧优化

- ✅ 已克隆 **优化瀑布流加载慢丢帧问题**
  - 仓库：`harmonyos_samples/PageSlip` ｜ 本地：`best_practices_code/harmonyos_samples__PageSlip/`
  - 远程：<https://gitcode.com/harmonyos_samples/PageSlip>

### `bpta-wavewheel-for-image-editor` — 实现修图软件的波轮菜单功能

- ✅ 已克隆 **oh-package.json5**
  - 仓库：`HarmonyOS_Samples/ImageEditWithWavewheel` ｜ 本地：`best_practices_code/HarmonyOS_Samples__ImageEditWithWavewheel/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/ImageEditWithWavewheel/blob/master/entry/oh-package.json5>
- ✅ 已克隆 **实现修图软件的波轮菜单功能**
  - 仓库：`HarmonyOS_Samples/ImageEditWithWavewheel` ｜ 本地：`best_practices_code/HarmonyOS_Samples__ImageEditWithWavewheel/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/ImageEditWithWavewheel/>

### `bpta-web-adaptation` — Web响应式布局

- ✅ 已克隆 **基于Web响应式能力实现一多布局**
  - 仓库：`harmonyos_samples/MultiWeb` ｜ 本地：`best_practices_code/harmonyos_samples__MultiWeb/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiWeb>

### `bpta-web-app-jump-and-pull-up` — Web和应用的跳转与拉起

- ✅ 已克隆 **基于应用拉起相关能力实现Web跳转功能**
  - 仓库：`harmonyos_samples/web-application-jump` ｜ 本地：`best_practices_code/harmonyos_samples__web-application-jump/`
  - 远程：<https://gitcode.com/harmonyos_samples/web-application-jump>

### `bpta-web-interceptor` — Web组件拦截能力的使用

- ✅ 已克隆 **实现基于Web组件的请求拦截功能**
  - 仓库：`harmonyos_samples/web-interceptor` ｜ 本地：`best_practices_code/harmonyos_samples__web-interceptor/`
  - 远程：<https://gitcode.com/harmonyos_samples/web-interceptor>

### `low-power-consumption-suggestions` — 不可见组件低功耗建议

- ✅ 已克隆 **APNG**
  - 仓库：`openharmony-sig/ohos_apng` ｜ 本地：`best_practices_code/openharmony-sig__ohos_apng/`
  - 远程：<https://gitcode.com/openharmony-sig/ohos_apng>
- ✅ 已克隆 **lottie**
  - 仓库：`openharmony-tpc/lottieArkTS` ｜ 本地：`best_practices_code/openharmony-tpc__lottieArkTS/`
  - 远程：<https://gitcode.com/openharmony-tpc/lottieArkTS>

### `multi-business-office` — 多设备商务办公界面

- ✅ 已克隆 **多设备商务办公界面**
  - 仓库：`harmonyos_samples/MultiBusinessOffice` ｜ 本地：`best_practices_code/harmonyos_samples__MultiBusinessOffice/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiBusinessOffice>

### `multi-communication-app` — 多设备即时通讯界面

- ✅ 已克隆 **多设备即时通讯界面**
  - 仓库：`HarmonyOS_Samples/MultiDeviceCommunication` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MultiDeviceCommunication/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MultiDeviceCommunication>

### `multi-community-app` — 多设备社区评论界面

- ✅ 已克隆 **多设备社区评论界面**
  - 仓库：`HarmonyOS_Samples/MultiCommunityApplication` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MultiCommunityApplication/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MultiCommunityApplication>

### `multi-convenient-life` — 多设备便捷生活界面

- ✅ 已克隆 **多设备便捷生活界面**
  - 仓库：`harmonyos_samples/multi-convenient-life` ｜ 本地：`best_practices_code/harmonyos_samples__multi-convenient-life/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-convenient-life>

### `multi-financial-app` — 多设备银行理财界面

- ✅ 已克隆 **多设备银行理财界面**
  - 仓库：`HarmonyOS_Samples/MultiFinancialManagement` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MultiFinancialManagement/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MultiFinancialManagement>

### `multi-news-read` — 多设备新闻阅读界面

- ✅ 已克隆 **多设备新闻阅读界面**
  - 仓库：`harmonyos_samples/multi-news-read` ｜ 本地：`best_practices_code/harmonyos_samples__multi-news-read/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-news-read>

### `multi-picture-app` — 多设备图片美化界面

- ✅ 已克隆 **多设备图片美化界面**
  - 仓库：`HarmonyOS_Samples/MultiPictureBeautification` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MultiPictureBeautification/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MultiPictureBeautification>

### `multi-shopping-price-comparison` — 多设备购物比价界面

- ✅ 已克隆 **多设备购物比价界面**
  - 仓库：`HarmonyOS_Samples/MultiShoppingPriceComparison` ｜ 本地：`best_practices_code/HarmonyOS_Samples__MultiShoppingPriceComparison/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/MultiShoppingPriceComparison>

### `multi-short-video-app` — 多设备短视频界面

- ✅ 已克隆 **多设备短视频界面**
  - 仓库：`HarmonyOS_Samples/multi-short-video` ｜ 本地：`best_practices_code/HarmonyOS_Samples__multi-short-video/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/multi-short-video>
- ✅ 已克隆 **adaptive_video**
  - 仓库：`openharmony-sig/hadss_adaptive` ｜ 本地：`best_practices_code/openharmony-sig__hadss_adaptive/`
  - 远程：<https://gitcode.com/openharmony-sig/hadss_adaptive/tree/master/adaptive_video>

### `multi-ticket-class` — 多设备股票类界面

- ✅ 已克隆 **多设备股票类界面**
  - 仓库：`harmonyos_samples/multi-ticket-class` ｜ 本地：`best_practices_code/harmonyos_samples__multi-ticket-class/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-ticket-class>
- ✅ 已克隆 **多设备股票类界面**
  - 仓库：`harmonyos_samples/multi-ticket-class` ｜ 本地：`best_practices_code/harmonyos_samples__multi-ticket-class/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-ticket-class>

### `multi-travel-accommodation` — 多设备旅行订票界面

- ✅ 已克隆 **多设备旅行订票界面**
  - 仓库：`harmonyos_samples/multi-travel-accommodation` ｜ 本地：`best_practices_code/harmonyos_samples__multi-travel-accommodation/`
  - 远程：<https://gitcode.com/harmonyos_samples/multi-travel-accommodation>

### `multi-travel-navigation` — 多设备地图导航界面

- ✅ 已克隆 **多设备地图导航界面**
  - 仓库：`HarmonyOS_Samples/multi-travel-navigation` ｜ 本地：`best_practices_code/HarmonyOS_Samples__multi-travel-navigation/`
  - 远程：<https://gitcode.com/HarmonyOS_Samples/multi-travel-navigation>

### `multi-video-app` — 多设备长视频界面

- ✅ 已克隆 **多设备长视频界面**
  - 仓库：`harmonyos_samples/MultiVideoApplication` ｜ 本地：`best_practices_code/harmonyos_samples__MultiVideoApplication/`
  - 远程：<https://gitcode.com/harmonyos_samples/MultiVideoApplication>

## 二、关联代码 → 引用它的文档

按仓库排序。可用于反向查找某个代码示例被哪些文档引用。

### ✅ `CPF-ApplicationTPC/aspect`  (1 篇)

- 本地：`best_practices_code/CPF-ApplicationTPC__aspect/`
- 远程：<https://gitcode.com/CPF-ApplicationTPC/aspect>
- 引用文档：
  - `bpta-aspect-implements-aop` — 基于Aspect插件库实现切面编程

### ✅ `HarmonyOS_Codelabs/WebComponent`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Codelabs__WebComponent/`
- 远程：<https://gitcode.com/HarmonyOS_Codelabs/WebComponent>
- 引用文档：
  - `bpta-arkweb_rendering_framework` — ArkWeb渲染框架适配

### ✅ `HarmonyOS_Samples/AlwaysOnMarketWatch`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__AlwaysOnMarketWatch/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/AlwaysOnMarketWatch>
- 引用文档：
  - `bpta-always-on-market-watch` — 全链路盯盘开发实践

### ✅ `HarmonyOS_Samples/AntiPeep`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__AntiPeep/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/AntiPeep>
- 引用文档：
  - `bpta-antipeep-protection` — 防窥保护

### ✅ `HarmonyOS_Samples/ArkTSComponentsTest`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__ArkTSComponentsTest/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/ArkTSComponentsTest>
- 引用文档：
  - `bpta-automated-testing-frameworks` — 自动化测试框架开发实践

### ✅ `HarmonyOS_Samples/BluetoothLowEnergy`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__BluetoothLowEnergy/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/BluetoothLowEnergy>
- 引用文档：
  - `bpta-bluetooth-low-energy` — 低功耗蓝牙基础使用

### ✅ `HarmonyOS_Samples/GraphicsAccelerateKitGamePrelaunchArkts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__GraphicsAccelerateKitGamePrelaunchArkts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/GraphicsAccelerateKitGamePrelaunchArkts>
- 引用文档：
  - `bpta-game-prelaunch-practice` — 游戏预启动开发实践

### ✅ `HarmonyOS_Samples/GridScrollComponent`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__GridScrollComponent/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/GridScrollComponent>
- 引用文档：
  - `bpta-grid-based-on-scrollcomponents` — 基于ScrollComponents实现网格

### ✅ `HarmonyOS_Samples/HMOS_LiveAudioCall`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__HMOS_LiveAudioCall/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/HMOS_LiveAudioCall>
- 引用文档：
  - `bpta-hmos-live-stream-audio-call` — 基于媒体能力实现直播连麦功能

### ✅ `HarmonyOS_Samples/ImageEditWithWavewheel`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__ImageEditWithWavewheel/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/ImageEditWithWavewheel>
- 引用文档：
  - `bpta-wavewheel-for-image-editor` — 实现修图软件的波轮菜单功能

### ✅ `HarmonyOS_Samples/LandscapePortraitToggle`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__LandscapePortraitToggle/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/LandscapePortraitToggle>
- 引用文档：
  - `bpta-landscape-and-portrait-development` — 视频类应用横竖屏切换

### ✅ `HarmonyOS_Samples/LiveCard`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__LiveCard/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/LiveCard>
- 引用文档：
  - `bpta-live-form-development-practice` — 互动卡片开发实践

### ✅ `HarmonyOS_Samples/MultiCommunityApplication`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MultiCommunityApplication/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MultiCommunityApplication>
- 引用文档：
  - `multi-community-app` — 多设备社区评论界面

### ✅ `HarmonyOS_Samples/MultiDeviceCommunication`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MultiDeviceCommunication/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MultiDeviceCommunication>
- 引用文档：
  - `multi-communication-app` — 多设备即时通讯界面

### ✅ `HarmonyOS_Samples/MultiFinancialManagement`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MultiFinancialManagement/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MultiFinancialManagement>
- 引用文档：
  - `multi-financial-app` — 多设备银行理财界面

### ✅ `HarmonyOS_Samples/MultiPictureBeautification`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MultiPictureBeautification/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MultiPictureBeautification>
- 引用文档：
  - `multi-picture-app` — 多设备图片美化界面

### ✅ `HarmonyOS_Samples/MultiShoppingPriceComparison`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MultiShoppingPriceComparison/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MultiShoppingPriceComparison>
- 引用文档：
  - `multi-shopping-price-comparison` — 多设备购物比价界面

### ✅ `HarmonyOS_Samples/MusicHome`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__MusicHome/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/MusicHome>
- 引用文档：
  - `bpta-multi-music-app-overview` — 多设备音乐界面

### ✅ `HarmonyOS_Samples/NavigationSettings`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__NavigationSettings/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/NavigationSettings>
- 引用文档：
  - `bpta-multi-settings-application-page` — 多设备设置界面

### ✅ `HarmonyOS_Samples/OnlineEditorCollaboration`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__OnlineEditorCollaboration/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/OnlineEditorCollaboration>
- 引用文档：
  - `bpta-collaboration-office` — 办公编辑全场景协同最佳实践

### ✅ `HarmonyOS_Samples/PlayShortVideosBasedOnVideoComponent`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__PlayShortVideosBasedOnVideoComponent/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/PlayShortVideosBasedOnVideoComponent>
- 引用文档：
  - `bpta-video-component-short-video` — 基于Video组件播放短视频

### ✅ `HarmonyOS_Samples/RcpPreconnect`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__RcpPreconnect/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/RcpPreconnect>
- 引用文档：
  - `bpta-pre-connect` — 冷启网络预建链最佳实践

### ✅ `HarmonyOS_Samples/SmartReach`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__SmartReach/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/SmartReach>
- 引用文档：
  - `bpta-smart-reach` — 智感握姿

### ✅ `HarmonyOS_Samples/Spatialization`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__Spatialization/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/Spatialization>
- 引用文档：
  - `bpta-spatiality-immersive` — 沉浸光感

### ✅ `HarmonyOS_Samples/TurboTransJSON`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__TurboTransJSON/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/TurboTransJSON>
- 引用文档：
  - `bpta-high-performance-json-parsing` — 高性能JSON解析

### ✅ `HarmonyOS_Samples/WindowOrientation`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__WindowOrientation/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/WindowOrientation>
- 引用文档：
  - `bpta-multi-device-window-direction` — 窗口方向

### ✅ `HarmonyOS_Samples/abckit-ts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__abckit-ts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/abckit-ts>
- 引用文档：
  - `bpta-abckitts-implements-instrumentation` — 基于AbcKitTS实现字节码插桩

### ✅ `HarmonyOS_Samples/aspect`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__aspect/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/aspect>
- 引用文档：
  - `bpta-aspect-implements-aop` — 基于Aspect插件库实现切面编程

### ✅ `HarmonyOS_Samples/audio-capturer-record-pcm`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__audio-capturer-record-pcm/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/audio-capturer-record-pcm>
- 引用文档：
  - `bpta-audio-record-base-on-audiocapturer` — 基于AudioCapturer录制PCM音频（ArkTS）

### ✅ `HarmonyOS_Samples/audio-in-ear-monitor`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__audio-in-ear-monitor/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/audio-in-ear-monitor>
- 引用文档：
  - `bpta-audio-in-ear-monitor` — 基于Audio能力实现音频耳返

### ✅ `HarmonyOS_Samples/audio-native`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__audio-native/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/audio-native>
- 引用文档：
  - `bpta-audio-record-base-on-ohaudio` — 基于OHAudio录制PCM音频（C++）

### ✅ `HarmonyOS_Samples/audio-renderer-play-pcm`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__audio-renderer-play-pcm/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/audio-renderer-play-pcm>
- 引用文档：
  - `bpta-playing-pcm-audio-based-audiorenderer` — 基于AudioRenderer播放PCM音频

### ✅ `HarmonyOS_Samples/avplayer-play-formatted-audio-arkts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avplayer-play-formatted-audio-arkts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avplayer-play-formatted-audio-arkts>
- 引用文档：
  - `bpta-playing-formatted-audio-based-avplayer-arkts` — 基于AVPlayer播放格式化音频（ArkTS）

### ✅ `HarmonyOS_Samples/avplayer-play-formatted-audio-cpp`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avplayer-play-formatted-audio-cpp/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avplayer-play-formatted-audio-cpp>
- 引用文档：
  - `bpta-playing-formatted-audio-based-avplayer-cpp` — 基于AVPlayer播放格式化音频（C++）

### ✅ `HarmonyOS_Samples/avrecorder-record-formatted-audio-arkts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avrecorder-record-formatted-audio-arkts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avrecorder-record-formatted-audio-arkts>
- 引用文档：
  - `bpta-audio-record-base-on-avrecorder-arkts` — 基于AVRecorder录制格式化音频（ArkTS）

### ✅ `HarmonyOS_Samples/avrecorder-record-formatted-audio-cpp`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avrecorder-record-formatted-audio-cpp/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avrecorder-record-formatted-audio-cpp>
- 引用文档：
  - `bpta-audio-record-base-on-avrecorder` — 基于AVRecorder录制格式化音频（C++）

### ✅ `HarmonyOS_Samples/avscreen-capture-record-system-audio-arkts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avscreen-capture-record-system-audio-arkts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avscreen-capture-record-system-audio-arkts>
- 引用文档：
  - `bpta-audio-record-base-on-avscreencapture` — 基于AVScreenCapture录制音频

### ✅ `HarmonyOS_Samples/avscreen-capture-screen-record`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__avscreen-capture-screen-record/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/avscreen-capture-screen-record>
- 引用文档：
  - `bpta-avscreencapture-for-screen-recording` — 基于AVScreenCapture实现屏幕录制

### ✅ `HarmonyOS_Samples/bicycle-sharing`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__bicycle-sharing/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/bicycle-sharing>
- 引用文档：
  - `bpta-shared-bicycle` — 快捷骑行体验

### ✅ `HarmonyOS_Samples/easygo-parallel-shopping`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__easygo-parallel-shopping/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/easygo-parallel-shopping>
- 引用文档：
  - `bpta-easygo-parallel` — 平行视界

### ✅ `HarmonyOS_Samples/graphic-creation`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__graphic-creation/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/graphic-creation>
- 引用文档：
  - `bpta-content-creation` — AI辅助图文内容编创

### ✅ `HarmonyOS_Samples/guide-snippets`  (2 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__guide-snippets/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/guide-snippets>
- 引用文档：
  - `bpta-js-leak-watcher` — JsLeakWatcher开发实践
  - `bpta-malloc-dispatch-table` — 内存泄漏定制能力开放使用指导

### ✅ `HarmonyOS_Samples/image-filter`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__image-filter/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/image-filter>
- 引用文档：
  - `bpta-implementing-image-filters` — 基于colorFilter实现图片滤镜效果

### ✅ `HarmonyOS_Samples/intents-kit-samplecode-clientdemo-arkts`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__intents-kit-samplecode-clientdemo-arkts/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/intents-kit-samplecode-clientdemo-arkts>
- 引用文档：
  - `bpta-intent-recommend-practice` — 意图框架习惯推荐场景

### ✅ `HarmonyOS_Samples/manage-audio-output-devices`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__manage-audio-output-devices/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/manage-audio-output-devices>
- 引用文档：
  - `bpta-managing-audio-output-devices` — 管理音频输出设备开发实践

### ✅ `HarmonyOS_Samples/managing-audio-input-devices`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__managing-audio-input-devices/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/managing-audio-input-devices>
- 引用文档：
  - `bpta-managing-audio-input-devices` — 管理音频输入设备开发实践

### ✅ `HarmonyOS_Samples/multi-mobile-payment`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__multi-mobile-payment/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/multi-mobile-payment>
- 引用文档：
  - `bpta-multi-mobile-payment` — 多设备移动支付界面

### ✅ `HarmonyOS_Samples/multi-short-video`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__multi-short-video/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/multi-short-video>
- 引用文档：
  - `multi-short-video-app` — 多设备短视频界面

### ✅ `HarmonyOS_Samples/multi-travel-navigation`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__multi-travel-navigation/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/multi-travel-navigation>
- 引用文档：
  - `multi-travel-navigation` — 多设备地图导航界面

### ✅ `HarmonyOS_Samples/ohaudio-play-pcm`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__ohaudio-play-pcm/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/ohaudio-play-pcm>
- 引用文档：
  - `bpta-playing-pcm-audio-based-ohaudio` — 基于OHAudio播放PCM音频

### ✅ `HarmonyOS_Samples/soundpool-play-short-audio`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__soundpool-play-short-audio/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/soundpool-play-short-audio>
- 引用文档：
  - `bpta-playing-short-audio-based-soundpool` — 基于SoundPool播放短音频

### ✅ `HarmonyOS_Samples/turbo-trans-protobuf`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__turbo-trans-protobuf/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/turbo-trans-protobuf>
- 引用文档：
  - `bpta-high-performance-protobuf-parsing` — 高性能Protobuf解析

### ✅ `HarmonyOS_Samples/video-show`  (1 篇)

- 本地：`best_practices_code/HarmonyOS_Samples__video-show/`
- 远程：<https://gitcode.com/HarmonyOS_Samples/video-show>
- 引用文档：
  - `bpta-video-component-long-video` — 基于Video组件播放长视频

### ✅ `OpenHarmony-ApplicationTPC/aspect`  (1 篇)

- 本地：`best_practices_code/OpenHarmony-ApplicationTPC__aspect/`
- 远程：<https://gitcode.com/OpenHarmony-ApplicationTPC/aspect>
- 引用文档：
  - `bpta-aspect-implements-aop` — 基于Aspect插件库实现切面编程

### ✅ `harmonyos_codelabs/ImageEdit`  (1 篇)

- 本地：`best_practices_code/harmonyos_codelabs__ImageEdit/`
- 远程：<https://gitcode.com/harmonyos_codelabs/ImageEdit>
- 引用文档：
  - `bpta-comparative_practice_of_taskpool_and_worker` — TaskPool和Worker对比

### ✅ `harmonyos_samples/AVCodecVideo`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__AVCodecVideo/`
- 远程：<https://gitcode.com/harmonyos_samples/AVCodecVideo>
- 引用文档：
  - `bpta-surface-encoder` — 基于Surface模式进行视频编码

### ✅ `harmonyos_samples/AdaptiveVideo`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__AdaptiveVideo/`
- 远程：<https://gitcode.com/harmonyos_samples/AdaptiveVideo>
- 引用文档：
  - `bpta-short-video-base-adaptivevideo` — 基于adaptive_video的短视频适配

### ✅ `harmonyos_samples/AdjustBrightness`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__AdjustBrightness/`
- 远程：<https://gitcode.com/harmonyos_samples/AdjustBrightness>
- 引用文档：
  - `bpta-page-brightness-settings` — 页面亮度设置

### ✅ `harmonyos_samples/AudioCast`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__AudioCast/`
- 远程：<https://gitcode.com/harmonyos_samples/AudioCast>
- 引用文档：
  - `bpta-audio-cast` — 音频投播

### ✅ `harmonyos_samples/AudioToVideoSync`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__AudioToVideoSync/`
- 远程：<https://gitcode.com/harmonyos_samples/AudioToVideoSync>
- 引用文档：
  - `bpta-audio-video-synchronization` — 音画同步

### ✅ `harmonyos_samples/BackTaskImplement`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__BackTaskImplement/`
- 远程：<https://gitcode.com/harmonyos_samples/BackTaskImplement>
- 引用文档：
  - `bpta-back-task-implement` — 应用后台运行

### ✅ `harmonyos_samples/BestPracticeSnippets`  (29 篇)

- 本地：`best_practices_code/harmonyos_samples__BestPracticeSnippets/`
- 远程：<https://gitcode.com/harmonyos_samples/BestPracticeSnippets>
- 引用文档：
  - `bpta-analysis-of-image-blurring` — 图像模糊卡顿问题分析
  - `bpta-app-code-ob` — 应用代码混淆
  - `bpta-app-data-security` — 应用数据安全
  - `bpta-app-privacy-protection` — 应用隐私保护
  - `bpta-arkts-high-performance` — ArkTS高性能编程
  - `bpta-background-blur` — 图像模糊高效使用
  - `bpta-camera-shot2see` — 相机分段式拍照性能优化
  - `bpta-comparative_practice_of_taskpool_and_worker` — TaskPool和Worker对比
  - `bpta-component-nesting-optimization` — 组件嵌套优化
  - `bpta-component-reuse-issue-diagnosis-and-analysis` — 组件复用问题诊断分析
  - `bpta-deal-stride-solution` — 相机预览花屏解决方案
  - `bpta-dispose-highly-loaded-component-render` — 高负载场景分帧渲染
  - `bpta-drawing-capability-improve-performance` — Drawing自绘制性能提升
  - `bpta-fuzzy-scene-performance-optimization` — 图像模糊动效优化
  - `bpta-gestures-practice` — 手势事件冲突解决方案
  - `bpta-image-white-lump-solution` — Image白块解决方案
  - `bpta-lazyforeach-optimization` — 懒加载优化性能
  - `bpta-lite-wearable-guide` — 轻量级智能穿戴应用开发
  - `bpta-multi-device-start` — 从一个例子开始
  - `bpta-screen-flicker-solution` — 应用闪屏解决方案
  - `bpta-smartwatch` — 智能穿戴应用开发
  - `bpta-stability-coding-standard-api` — 易错API的使用规范
  - `bpta-stability-coding-standard-libuv` — libuv使用规范及案例
  - `bpta-stability-coding-standard-node` — Node-API开发规范
  - `bpta-taskpool_usage_specifications_and_faqs` — TaskPool使用规范
  - `bpta-thread-priority-setting` — 高负载场景线程优先级设置
  - `bpta-time-optimization-of-the-main-thread` — 主线程耗时操作优化
  - `bpta-ui-component-performance-optimization` — UI组件性能优化
  - `bpta-video-adaptation-based-web` — Web页面视频适配

### ✅ `harmonyos_samples/CardInfoRefresh`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CardInfoRefresh/`
- 远程：<https://gitcode.com/harmonyos_samples/CardInfoRefresh>
- 引用文档：
  - `bpta-card-update-and-data-interaction` — 卡片更新与数据交互

### ✅ `harmonyos_samples/CommentReply`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CommentReply/`
- 远程：<https://gitcode.com/harmonyos_samples/CommentReply>
- 引用文档：
  - `bpta-comment-reply-pop-up-window` — 评论回复弹窗

### ✅ `harmonyos_samples/CommonLinksSkip`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CommonLinksSkip/`
- 远程：<https://gitcode.com/harmonyos_samples/CommonLinksSkip>
- 引用文档：
  - `bpta-special-text-recognition` — 特殊文本识别跳转

### ✅ `harmonyos_samples/CommonListFlows`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CommonListFlows/`
- 远程：<https://gitcode.com/harmonyos_samples/CommonListFlows>
- 引用文档：
  - `bpta-common-list-flows` — 常见列表流

### ✅ `harmonyos_samples/ComplexTypePass`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ComplexTypePass/`
- 远程：<https://gitcode.com/harmonyos_samples/ComplexTypePass>
- 引用文档：
  - `bpta-complex-type-pass` — 跨语言调用复杂参数传递

### ✅ `harmonyos_samples/ComponentEncapsulation`  (2 篇)

- 本地：`best_practices_code/harmonyos_samples__ComponentEncapsulation/`
- 远程：<https://gitcode.com/harmonyos_samples/ComponentEncapsulation>
- 引用文档：
  - `bpta-dialog-encapsulation` — 弹窗组件封装
  - `bpta-ui-component-encapsulation` — 组件封装

### ✅ `harmonyos_samples/ContinuePublish`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ContinuePublish/`
- 远程：<https://gitcode.com/harmonyos_samples/ContinuePublish>
- 引用文档：
  - `bpta-continue` — 社交通讯全场景协同最佳实践

### ✅ `harmonyos_samples/CrossModuleReference`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CrossModuleReference/`
- 远程：<https://gitcode.com/harmonyos_samples/CrossModuleReference>
- 引用文档：
  - `bpta-cross-module-reference` — Native侧跨HAR/HSP模块接口调用

### ✅ `harmonyos_samples/CustomCamera`  (3 篇)

- 本地：`best_practices_code/harmonyos_samples__CustomCamera/`
- 远程：<https://gitcode.com/harmonyos_samples/CustomCamera>
- 引用文档：
  - `bpta-custom-camera-photo` — 自定义相机拍照
  - `bpta-custom-camera-preview` — 自定义相机预览
  - `bpta-custom-camera-video` — 自定义相机录像

### ✅ `harmonyos_samples/CustomizeKeyboard`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__CustomizeKeyboard/`
- 远程：<https://gitcode.com/harmonyos_samples/CustomizeKeyboard>
- 引用文档：
  - `bpta-custom-keyboard` — 自定义键盘

### ✅ `harmonyos_samples/DataCache`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__DataCache/`
- 远程：<https://gitcode.com/harmonyos_samples/DataCache>
- 引用文档：
  - `bpta-application-cold-start-optimization` — 应用冷启动时延优化

### ✅ `harmonyos_samples/DesktopShortcut`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__DesktopShortcut/`
- 远程：<https://gitcode.com/harmonyos_samples/DesktopShortcut>
- 引用文档：
  - `bpta-desktop-shortcuts` — 桌面快捷方式

### ✅ `harmonyos_samples/DialogHub`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__DialogHub/`
- 远程：<https://gitcode.com/harmonyos_samples/DialogHub>
- 引用文档：
  - `bpta-hadss_dialoghub` — 基于DialogHub的通用弹窗

### ✅ `harmonyos_samples/DragFramework`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__DragFramework/`
- 远程：<https://gitcode.com/harmonyos_samples/DragFramework>
- 引用文档：
  - `bpta-unified-drag-and-drop` — 统一拖拽

### ✅ `harmonyos_samples/DynamicComponent`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__DynamicComponent/`
- 远程：<https://gitcode.com/harmonyos_samples/DynamicComponent>
- 引用文档：
  - `bpta-ui-dynamic-operations` — 组件动态创建

### ✅ `harmonyos_samples/FoldedHover`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__FoldedHover/`
- 远程：<https://gitcode.com/harmonyos_samples/FoldedHover>
- 引用文档：
  - `bpta-folded-hover` — 折叠屏悬停态

### ✅ `harmonyos_samples/GesturesShare`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__GesturesShare/`
- 远程：<https://gitcode.com/harmonyos_samples/GesturesShare>
- 引用文档：
  - `bpta-application-gesture-share` — 隔空传送快速分享

### ✅ `harmonyos_samples/HMOS_LiveStream`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__HMOS_LiveStream/`
- 远程：<https://gitcode.com/harmonyos_samples/HMOS_LiveStream>
- 引用文档：
  - `bpta-hmos-live-stream-solution` — 基于媒体能力实现直播单播功能

### ✅ `harmonyos_samples/HMRouter`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__HMRouter/`
- 远程：<https://gitcode.com/harmonyos_samples/HMRouter>
- 引用文档：
  - `bpta-hmrouter` — 基于HMRouter的页面跳转

### ✅ `harmonyos_samples/ImageGetAndSave`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ImageGetAndSave/`
- 远程：<https://gitcode.com/harmonyos_samples/ImageGetAndSave>
- 引用文档：
  - `bpta-image_get_and_save` — 图片获取与保存实践

### ✅ `harmonyos_samples/ImageToVideo`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ImageToVideo/`
- 远程：<https://gitcode.com/harmonyos_samples/ImageToVideo>
- 引用文档：
  - `bpta-image-to-video-synthesis` — 图片合成视频开发实践

### ✅ `harmonyos_samples/Immersive`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__Immersive/`
- 远程：<https://gitcode.com/harmonyos_samples/Immersive>
- 引用文档：
  - `bpta-multi-device-window-immersive` — 窗口沉浸式

### ✅ `harmonyos_samples/KnockFileShare`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__KnockFileShare/`
- 远程：<https://gitcode.com/harmonyos_samples/KnockFileShare>
- 引用文档：
  - `bpta-application-knock-file-share` — 碰一碰文件分享

### ✅ `harmonyos_samples/ListScrollComponent`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ListScrollComponent/`
- 远程：<https://gitcode.com/harmonyos_samples/ListScrollComponent>
- 引用文档：
  - `bpta-list-based-on-scrollcomponents` — 基于ScrollComponents实现长列表

### ✅ `harmonyos_samples/LiveViewLockScreen`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__LiveViewLockScreen/`
- 远程：<https://gitcode.com/harmonyos_samples/LiveViewLockScreen>
- 引用文档：
  - `bpta-lock-screen-immersive-live-window` — 锁屏沉浸实况窗

### ✅ `harmonyos_samples/LongSnapshotPractice`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__LongSnapshotPractice/`
- 远程：<https://gitcode.com/harmonyos_samples/LongSnapshotPractice>
- 引用文档：
  - `bpta-long-snapshot-practice` — 长截图

### ✅ `harmonyos_samples/MultiBusinessOffice`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiBusinessOffice/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiBusinessOffice>
- 引用文档：
  - `multi-business-office` — 多设备商务办公界面

### ✅ `harmonyos_samples/MultiDeviceCamera`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiDeviceCamera/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiDeviceCamera>
- 引用文档：
  - `bpta-multi-device-camera` — 相机硬件差异

### ✅ `harmonyos_samples/MultiTarget`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiTarget/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiTarget>
- 引用文档：
  - `bpta-multi-target` — 多目标产物构建

### ✅ `harmonyos_samples/MultiThreadIO`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiThreadIO/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiThreadIO>
- 引用文档：
  - `bpta-local-file-and-data-multithreaded-io` — 多线程操作密集型关系型数据库和文件读写

### ✅ `harmonyos_samples/MultiVideoApplication`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiVideoApplication/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiVideoApplication>
- 引用文档：
  - `multi-video-app` — 多设备长视频界面

### ✅ `harmonyos_samples/MultiWeb`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultiWeb/`
- 远程：<https://gitcode.com/harmonyos_samples/MultiWeb>
- 引用文档：
  - `bpta-web-adaptation` — Web响应式布局

### ✅ `harmonyos_samples/MultipleImage`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MultipleImage/`
- 远程：<https://gitcode.com/harmonyos_samples/MultipleImage>
- 引用文档：
  - `bpta-carousel-graphic-works` — 使用Swiper组件实现轮播图

### ✅ `harmonyos_samples/MusicCard`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__MusicCard/`
- 远程：<https://gitcode.com/harmonyos_samples/MusicCard>
- 引用文档：
  - `bpta-music-card` — 音乐服务卡片

### ✅ `harmonyos_samples/NativeSoIntegration`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__NativeSoIntegration/`
- 远程：<https://gitcode.com/harmonyos_samples/NativeSoIntegration>
- 引用文档：
  - `bpta-dynamic-link-library` — 三方动态链接库集成

### ✅ `harmonyos_samples/NativeSubMainThreadCommunication`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__NativeSubMainThreadCommunication/`
- 远程：<https://gitcode.com/harmonyos_samples/NativeSubMainThreadCommunication>
- 引用文档：
  - `bpta-native-sub-main-comm` — Native侧子线程与UI主线程通信

### ✅ `harmonyos_samples/NetAdaptiveVideoStream`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__NetAdaptiveVideoStream/`
- 远程：<https://gitcode.com/harmonyos_samples/NetAdaptiveVideoStream>
- 引用文档：
  - `bpta-online-video-playback-lags-practice` — 在线视频播放卡顿优化

### ✅ `harmonyos_samples/NetworkReconnection`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__NetworkReconnection/`
- 远程：<https://gitcode.com/harmonyos_samples/NetworkReconnection>
- 引用文档：
  - `bpta-network-reconnection` — 应用网络重连

### ✅ `harmonyos_samples/ObtainingDeviceID`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ObtainingDeviceID/`
- 远程：<https://gitcode.com/harmonyos_samples/ObtainingDeviceID>
- 引用文档：
  - `bpta-recommended-use-of-device-id` — 设备标识使用推荐

### ✅ `harmonyos_samples/PageFlip`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__PageFlip/`
- 远程：<https://gitcode.com/harmonyos_samples/PageFlip>
- 引用文档：
  - `bpta-reader-page-flip` — 阅读器翻页

### ✅ `harmonyos_samples/PageSlip`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__PageSlip/`
- 远程：<https://gitcode.com/harmonyos_samples/PageSlip>
- 引用文档：
  - `bpta-waterflow-performance-optimization` — 瀑布流加载丢帧优化

### ✅ `harmonyos_samples/PermissionApplication`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__PermissionApplication/`
- 远程：<https://gitcode.com/harmonyos_samples/PermissionApplication>
- 引用文档：
  - `bpta-permission-application` — 应用权限申请

### ✅ `harmonyos_samples/Phone_Connection`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__Phone_Connection/`
- 远程：<https://gitcode.com/harmonyos_samples/Phone_Connection>
- 引用文档：
  - `bpta-smartwatch` — 智能穿戴应用开发

### ✅ `harmonyos_samples/PicturePreview`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__PicturePreview/`
- 远程：<https://gitcode.com/harmonyos_samples/PicturePreview>
- 引用文档：
  - `bpta-picture-preview` — 图片预览器

### ✅ `harmonyos_samples/PureTabs`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__PureTabs/`
- 远程：<https://gitcode.com/harmonyos_samples/PureTabs>
- 引用文档：
  - `bpta-development-scenarios-for-tabs` — Tabs选项卡常见开发场景

### ✅ `harmonyos_samples/ResponsiveLayout`  (2 篇)

- 本地：`best_practices_code/harmonyos_samples__ResponsiveLayout/`
- 远程：<https://gitcode.com/harmonyos_samples/ResponsiveLayout>
- 引用文档：
  - `bpta-multi-device-component-layout` — 组件布局场景
  - `bpta-multi-device-page-layout` — 页面布局场景

### ✅ `harmonyos_samples/SmartWatchMapNavigation`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__SmartWatchMapNavigation/`
- 远程：<https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation>
- 引用文档：
  - `bpta-smartwatchnavigation` — 智能穿戴导航协同

### ✅ `harmonyos_samples/SmoothSwitchShortVideos`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__SmoothSwitchShortVideos/`
- 远程：<https://gitcode.com/harmonyos_samples/SmoothSwitchShortVideos>
- 引用文档：
  - `bpta-smooth-switching` — 在线短视频流畅切换

### ✅ `harmonyos_samples/SocialShareJump`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__SocialShareJump/`
- 远程：<https://gitcode.com/harmonyos_samples/SocialShareJump>
- 引用文档：
  - `bpta-social-share` — 社交分享跳转

### ✅ `harmonyos_samples/StateStore`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__StateStore/`
- 远程：<https://gitcode.com/harmonyos_samples/StateStore>
- 引用文档：
  - `bpta-global-state-management-state-store` — 基于StateStore的全局状态管理

### ✅ `harmonyos_samples/SuperFastFileTrans`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__SuperFastFileTrans/`
- 远程：<https://gitcode.com/harmonyos_samples/SuperFastFileTrans>
- 引用文档：
  - `bpta-file-transmission-based-on-sfft` — 基于SFFT的大文件高速并发传输

### ✅ `harmonyos_samples/SwiperPerformance`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__SwiperPerformance/`
- 远程：<https://gitcode.com/harmonyos_samples/SwiperPerformance>
- 引用文档：
  - `bpta-swiper_high_performance_development_guide` — Swiper组件加载丢帧优化

### ✅ `harmonyos_samples/TextExpand`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__TextExpand/`
- 远程：<https://gitcode.com/harmonyos_samples/TextExpand>
- 引用文档：
  - `bpta-text-expand-collapse` — 文本展开折叠

### ✅ `harmonyos_samples/UseSendable`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__UseSendable/`
- 远程：<https://gitcode.com/harmonyos_samples/UseSendable>
- 引用文档：
  - `bpta-app-concurrency-design` — 应用并发设计

### ✅ `harmonyos_samples/UtilizeHWCEfficiently`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__UtilizeHWCEfficiently/`
- 远程：<https://gitcode.com/harmonyos_samples/UtilizeHWCEfficiently>
- 引用文档：
  - `bpta-utilize-hwc-efficiently` — 高效利用HWC的低功耗设计

### ✅ `harmonyos_samples/VideoCast`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__VideoCast/`
- 远程：<https://gitcode.com/harmonyos_samples/VideoCast>
- 引用文档：
  - `bpta-vdeocast` — 视频投播

### ✅ `harmonyos_samples/VideoThumbnail`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__VideoThumbnail/`
- 远程：<https://gitcode.com/harmonyos_samples/VideoThumbnail>
- 引用文档：
  - `bpta-video-thumbnail` — 基于系统能力获取视频缩略图

### ✅ `harmonyos_samples/WaterFlowScrollComponent`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__WaterFlowScrollComponent/`
- 远程：<https://gitcode.com/harmonyos_samples/WaterFlowScrollComponent>
- 引用文档：
  - `bpta-waterflow-based-on-scrollcomponents` — 基于ScrollComponents实现瀑布流

### ✅ `harmonyos_samples/WebCrossDomain`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__WebCrossDomain/`
- 远程：<https://gitcode.com/harmonyos_samples/WebCrossDomain>
- 引用文档：
  - `bpta-cross-domain-solutions-for-web-pages` — Web页面跨域解决方案

### ✅ `harmonyos_samples/application-track`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__application-track/`
- 远程：<https://gitcode.com/harmonyos_samples/application-track>
- 引用文档：
  - `bpta-application-track-practice` — 应用埋点

### ✅ `harmonyos_samples/arkweb-same-level-rendering`  (2 篇)

- 本地：`best_practices_code/harmonyos_samples__arkweb-same-level-rendering/`
- 远程：<https://gitcode.com/harmonyos_samples/arkweb-same-level-rendering>
- 引用文档：
  - `bpta-arkweb_rendering_framework` — ArkWeb渲染框架适配
  - `bpta-render-web-using-same-layer-render` — 同层渲染原生组件

### ✅ `harmonyos_samples/audio-focus`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__audio-focus/`
- 远程：<https://gitcode.com/harmonyos_samples/audio-focus>
- 引用文档：
  - `bpta-audio-focus-management` — 音频焦点管理解决方案

### ✅ `harmonyos_samples/audio-format-switch`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__audio-format-switch/`
- 远程：<https://gitcode.com/harmonyos_samples/audio-format-switch>
- 引用文档：
  - `bpta-sound-quality-switching` — 音质切换开发实践

### ✅ `harmonyos_samples/audio-ripple-animation`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__audio-ripple-animation/`
- 远程：<https://gitcode.com/harmonyos_samples/audio-ripple-animation>
- 引用文档：
  - `bpta-audio-ripple-animation` — 基于AudioRenderer和AudioCapturer实现音频波形动画

### ✅ `harmonyos_samples/avcodec-buffer-mode`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avcodec-buffer-mode/`
- 远程：<https://gitcode.com/harmonyos_samples/avcodec-buffer-mode>
- 引用文档：
  - `bpta-buffer-mode-transcoding` — 基于Buffer模式进行视频转码

### ✅ `harmonyos_samples/avplayer-basic-control`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avplayer-basic-control/`
- 远程：<https://gitcode.com/harmonyos_samples/avplayer-basic-control>
- 引用文档：
  - `bpta-avplayer-basic-control` — 基于AVPlayer基础播控实践

### ✅ `harmonyos_samples/avplayer-embeded-short-video`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avplayer-embeded-short-video/`
- 远程：<https://gitcode.com/harmonyos_samples/avplayer-embeded-short-video>
- 引用文档：
  - `bpta-avplayer-embeded-short-video` — 基于AVPlayer播放嵌入式短视频实践

### ✅ `harmonyos_samples/avplayer-long-video`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avplayer-long-video/`
- 远程：<https://gitcode.com/harmonyos_samples/avplayer-long-video>
- 引用文档：
  - `bpta-avplayer-long-video` — 基于AVPlayer播放长视频实践

### ✅ `harmonyos_samples/avplayer-online-video`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avplayer-online-video/`
- 远程：<https://gitcode.com/harmonyos_samples/avplayer-online-video>
- 引用文档：
  - `bpta-avplayer-embeded-network-video` — 基于AVPlayer播放网络视频实践

### ✅ `harmonyos_samples/avplayer-short-video`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avplayer-short-video/`
- 远程：<https://gitcode.com/harmonyos_samples/avplayer-short-video>
- 引用文档：
  - `bpta-avplayer-short-video` — 基于AVPlayer播放短视频实践

### ✅ `harmonyos_samples/avscreen-capture-screen-record`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__avscreen-capture-screen-record/`
- 远程：<https://gitcode.com/harmonyos_samples/avscreen-capture-screen-record>
- 引用文档：
  - `bpta-surface-encoder` — 基于Surface模式进行视频编码

### ✅ `harmonyos_samples/component-reuse`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__component-reuse/`
- 远程：<https://gitcode.com/harmonyos_samples/component-reuse>
- 引用文档：
  - `bpta-component-reuse` — 组件复用

### ✅ `harmonyos_samples/content-publisher`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__content-publisher/`
- 远程：<https://gitcode.com/harmonyos_samples/content-publisher>
- 引用文档：
  - `bpta-rich-text-editor` — 实现富文本编辑器

### ✅ `harmonyos_samples/continue-progress`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__continue-progress/`
- 远程：<https://gitcode.com/harmonyos_samples/continue-progress>
- 引用文档：
  - `bpta-application-continue-progess` — 常见接续最佳实践

### ✅ `harmonyos_samples/crypto-collection`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__crypto-collection/`
- 远程：<https://gitcode.com/harmonyos_samples/crypto-collection>
- 引用文档：
  - `bpta-cross-platform-compatibility` — 加解密跨平台数据兼容性

### ✅ `harmonyos_samples/custom-dialog-selection-and-development`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__custom-dialog-selection-and-development/`
- 远程：<https://gitcode.com/harmonyos_samples/custom-dialog-selection-and-development>
- 引用文档：
  - `bpta-customdialog-selection-and-development` — 自定义弹窗选型与开发

### ✅ `harmonyos_samples/fit-for-dark-mode`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__fit-for-dark-mode/`
- 远程：<https://gitcode.com/harmonyos_samples/fit-for-dark-mode>
- 引用文档：
  - `bpta-dark-mode-adaptation` — 深色模式适配

### ✅ `harmonyos_samples/fluent-blog`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__fluent-blog/`
- 远程：<https://gitcode.com/harmonyos_samples/fluent-blog>
- 引用文档：
  - `bpta-ltpo-description` — 基于LTPO的低功耗设计

### ✅ `harmonyos_samples/fluent-news-homepage`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__fluent-news-homepage/`
- 远程：<https://gitcode.com/harmonyos_samples/fluent-news-homepage>
- 引用文档：
  - `bpta-news_homepage` — 首页信息流体验优化

### ✅ `harmonyos_samples/grid-drag-sort`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__grid-drag-sort/`
- 远程：<https://gitcode.com/harmonyos_samples/grid-drag-sort>
- 引用文档：
  - `bpta-grid-drag-swap` — Grid网格元素拖拽交换

### ✅ `harmonyos_samples/hdr2sdr`  (2 篇)

- 本地：`best_practices_code/harmonyos_samples__hdr2sdr/`
- 远程：<https://gitcode.com/harmonyos_samples/hdr2sdr>
- 引用文档：
  - `bpta-hdrtosdr` — HDR Vivid视频转码SDR视频开发实践
  - `bpta-hdrvivid` — HDR Vivid视频播放与录制开发实践

### ✅ `harmonyos_samples/hmosworld`  (5 篇)

- 本地：`best_practices_code/harmonyos_samples__hmosworld/`
- 远程：<https://gitcode.com/harmonyos_samples/hmosworld>
- 引用文档：
  - `bpta-app-architecture-overview` — 架构概览
  - `bpta-app-privacy-protection` — 应用隐私保护
  - `bpta-best-practices-long-list` — 长列表加载丢帧优化
  - `bpta-click-to-complete-delay-analysis` — 点击完成时延分析
  - `bpta-status-management` — 状态管理最佳实践

### ✅ `harmonyos_samples/image-comment`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__image-comment/`
- 远程：<https://gitcode.com/harmonyos_samples/image-comment>
- 引用文档：
  - `bpta-comment-reply-pop-up-window` — 评论回复弹窗

### ✅ `harmonyos_samples/keyboard`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__keyboard/`
- 远程：<https://gitcode.com/harmonyos_samples/keyboard>
- 引用文档：
  - `bpta-keyboard-layout-adapt` — 软键盘布局适配

### ✅ `harmonyos_samples/knock-share`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__knock-share/`
- 远程：<https://gitcode.com/harmonyos_samples/knock-share>
- 引用文档：
  - `bpta-application-knock-video-share` — 碰一碰链接分享

### ✅ `harmonyos_samples/list-optimization`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__list-optimization/`
- 远程：<https://gitcode.com/harmonyos_samples/list-optimization>
- 引用文档：
  - `bpta-best-practices-long-list` — 长列表加载丢帧优化

### ✅ `harmonyos_samples/location-service`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__location-service/`
- 远程：<https://gitcode.com/harmonyos_samples/location-service>
- 引用文档：
  - `bpta-positioning` — 位置定位

### ✅ `harmonyos_samples/multi-convenient-life`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-convenient-life/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-convenient-life>
- 引用文档：
  - `multi-convenient-life` — 多设备便捷生活界面

### ✅ `harmonyos_samples/multi-device-interaction`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-device-interaction/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-device-interaction>
- 引用文档：
  - `bpta-multi-interaction` — 多设备交互

### ✅ `harmonyos_samples/multi-file-download`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-file-download/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-file-download>
- 引用文档：
  - `bpta-file-upload-and-download-performance` — 文件上传下载优化

### ✅ `harmonyos_samples/multi-hap`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-hap/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-hap>
- 引用文档：
  - `bpta-multi-device-window-mode` — 窗口模式

### ✅ `harmonyos_samples/multi-news-read`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-news-read/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-news-read>
- 引用文档：
  - `multi-news-read` — 多设备新闻阅读界面

### ✅ `harmonyos_samples/multi-tab-navigation`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-tab-navigation/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-tab-navigation>
- 引用文档：
  - `bpta-multi-tab-practice` — 常见导航样式案例

### ✅ `harmonyos_samples/multi-ticket-class`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-ticket-class/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-ticket-class>
- 引用文档：
  - `multi-ticket-class` — 多设备股票类界面

### ✅ `harmonyos_samples/multi-travel-accommodation`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__multi-travel-accommodation/`
- 远程：<https://gitcode.com/harmonyos_samples/multi-travel-accommodation>
- 引用文档：
  - `multi-travel-accommodation` — 多设备旅行订票界面

### ✅ `harmonyos_samples/ndk-opengl`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ndk-opengl/`
- 远程：<https://gitcode.com/harmonyos_samples/ndk-opengl>
- 引用文档：
  - `bpta-multi_game` — 多设备游戏界面

### ✅ `harmonyos_samples/ndk-xcomponent`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__ndk-xcomponent/`
- 远程：<https://gitcode.com/harmonyos_samples/ndk-xcomponent>
- 引用文档：
  - `bpta-video-barrage` — 视频场景弹幕绘制低功耗规则

### ✅ `harmonyos_samples/network-query`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__network-query/`
- 远程：<https://gitcode.com/harmonyos_samples/network-query>
- 引用文档：
  - `bpta-common-network-query` — 网络信息查询与连接管理

### ✅ `harmonyos_samples/pasteboard`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__pasteboard/`
- 远程：<https://gitcode.com/harmonyos_samples/pasteboard>
- 引用文档：
  - `bpta-distributed-pasteboard` — 跨设备剪贴板常见场景

### ✅ `harmonyos_samples/picker`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__picker/`
- 远程：<https://gitcode.com/harmonyos_samples/picker>
- 引用文档：
  - `bpta-comment-reply-pop-up-window` — 评论回复弹窗

### ✅ `harmonyos_samples/resizable-image`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__resizable-image/`
- 远程：<https://gitcode.com/harmonyos_samples/resizable-image>
- 引用文档：
  - `bpta-implementing-image-resizable` — 基于resizable实现图片拉伸效果

### ✅ `harmonyos_samples/simple-chat-list`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__simple-chat-list/`
- 远程：<https://gitcode.com/harmonyos_samples/simple-chat-list>
- 引用文档：
  - `bpta-common-list-operations` — 常见列表操作

### ✅ `harmonyos_samples/special-window-shape`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__special-window-shape/`
- 远程：<https://gitcode.com/harmonyos_samples/special-window-shape>
- 引用文档：
  - `bpta-2in1-window-shape` — PC/2in1异形窗口

### ✅ `harmonyos_samples/styledtext`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__styledtext/`
- 远程：<https://gitcode.com/harmonyos_samples/styledtext>
- 引用文档：
  - `bpta-rich-text-display` — 富文本显示的选型与开发

### ✅ `harmonyos_samples/text-display-font`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__text-display-font/`
- 远程：<https://gitcode.com/harmonyos_samples/text-display-font>
- 引用文档：
  - `bpta-custom-font-settings` — 自定义字体设置

### ✅ `harmonyos_samples/timebar`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__timebar/`
- 远程：<https://gitcode.com/harmonyos_samples/timebar>
- 引用文档：
  - `bpta-implement-timeline-based-on-canvas` — 基于Canvas实现录像回放时间轴

### ✅ `harmonyos_samples/transitions-collection`  (2 篇)

- 本地：`best_practices_code/harmonyos_samples__transitions-collection/`
- 远程：<https://gitcode.com/harmonyos_samples/transitions-collection>
- 引用文档：
  - `bpta-one-shot-to-the-end` — 一镜到底动效
  - `bpta-page-transition` — 页面间转场

### ✅ `harmonyos_samples/upload-and-down-load`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__upload-and-down-load/`
- 远程：<https://gitcode.com/harmonyos_samples/upload-and-down-load>
- 引用文档：
  - `bpta-file-upload-and-download-performance` — 文件上传下载优化

### ✅ `harmonyos_samples/video-render`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__video-render/`
- 远程：<https://gitcode.com/harmonyos_samples/video-render>
- 引用文档：
  - `bpta-video-render` — 渲染视频画面

### ✅ `harmonyos_samples/water-flow`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__water-flow/`
- 远程：<https://gitcode.com/harmonyos_samples/water-flow>
- 引用文档：
  - `bpta-waterflow-operations` — 常见瀑布流操作

### ✅ `harmonyos_samples/watermark`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__watermark/`
- 远程：<https://gitcode.com/harmonyos_samples/watermark>
- 引用文档：
  - `bpta-add-watermark` — 水印添加

### ✅ `harmonyos_samples/web-application-jump`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__web-application-jump/`
- 远程：<https://gitcode.com/harmonyos_samples/web-application-jump>
- 引用文档：
  - `bpta-web-app-jump-and-pull-up` — Web和应用的跳转与拉起

### ✅ `harmonyos_samples/web-interceptor`  (1 篇)

- 本地：`best_practices_code/harmonyos_samples__web-interceptor/`
- 远程：<https://gitcode.com/harmonyos_samples/web-interceptor>
- 引用文档：
  - `bpta-web-interceptor` — Web组件拦截能力的使用

### ✅ `openharmony-sig/dialoghub`  (1 篇)

- 本地：`best_practices_code/openharmony-sig__dialoghub/`
- 远程：<https://gitcode.com/openharmony-sig/dialoghub>
- 引用文档：
  - `bpta-hadss_dialoghub` — 基于DialogHub的通用弹窗

### ✅ `openharmony-sig/hadss_adaptive`  (2 篇)

- 本地：`best_practices_code/openharmony-sig__hadss_adaptive/`
- 远程：<https://gitcode.com/openharmony-sig/hadss_adaptive>
- 引用文档：
  - `bpta-short-video-base-adaptivevideo` — 基于adaptive_video的短视频适配
  - `multi-short-video-app` — 多设备短视频界面

### ✅ `openharmony-sig/ohos_apng`  (1 篇)

- 本地：`best_practices_code/openharmony-sig__ohos_apng/`
- 远程：<https://gitcode.com/openharmony-sig/ohos_apng>
- 引用文档：
  - `low-power-consumption-suggestions` — 不可见组件低功耗建议

### ✅ `openharmony-sig/ohos_ijkplayer`  (1 篇)

- 本地：`best_practices_code/openharmony-sig__ohos_ijkplayer/`
- 远程：<https://gitcode.com/openharmony-sig/ohos_ijkplayer>
- 引用文档：
  - `bpta-live-streaming-optimization` — 弱网直播优化

### ✅ `openharmony-sig/ohos_react_native`  (1 篇)

- 本地：`best_practices_code/openharmony-sig__ohos_react_native/`
- 远程：<https://gitcode.com/openharmony-sig/ohos_react_native>
- 引用文档：
  - `bpta-vsync-power-optimization` — Vsync低功耗优化

### ✅ `openharmony-sig/scroll_components`  (3 篇)

- 本地：`best_practices_code/openharmony-sig__scroll_components/`
- 远程：<https://gitcode.com/openharmony-sig/scroll_components>
- 引用文档：
  - `bpta-grid-based-on-scrollcomponents` — 基于ScrollComponents实现网格
  - `bpta-list-based-on-scrollcomponents` — 基于ScrollComponents实现长列表
  - `bpta-waterflow-based-on-scrollcomponents` — 基于ScrollComponents实现瀑布流

### ✅ `openharmony-sig/smartperf`  (4 篇)

- 本地：`best_practices_code/openharmony-sig__smartperf/`
- 远程：<https://gitcode.com/openharmony-sig/smartperf>
- 引用文档：
  - `bpta-optimization-overview` — 性能分析简介
  - `bpta-quality-overview` — 应用质量概览
  - `bpta-scenario-stability-leak` — 资源泄漏类问题案例
  - `bpta-stability-leak-way` — 资源泄漏类问题分析方法

### ✅ `openharmony-sig/state_store`  (1 篇)

- 本地：`best_practices_code/openharmony-sig__state_store/`
- 远程：<https://gitcode.com/openharmony-sig/state_store>
- 引用文档：
  - `bpta-global-state-management-state-store` — 基于StateStore的全局状态管理

### ✅ `openharmony-sig/turbo_trans`  (2 篇)

- 本地：`best_practices_code/openharmony-sig__turbo_trans/`
- 远程：<https://gitcode.com/openharmony-sig/turbo_trans>
- 引用文档：
  - `bpta-high-performance-json-parsing` — 高性能JSON解析
  - `bpta-high-performance-protobuf-parsing` — 高性能Protobuf解析

### ✅ `openharmony-tpc/lottieArkTS`  (1 篇)

- 本地：`best_practices_code/openharmony-tpc__lottieArkTS/`
- 远程：<https://gitcode.com/openharmony-tpc/lottieArkTS>
- 引用文档：
  - `low-power-consumption-suggestions` — 不可见组件低功耗建议

### ✅ `openharmony-tpc/openharmony_tpc_samples`  (1 篇)

- 本地：`best_practices_code/openharmony-tpc__openharmony_tpc_samples/`
- 远程：<https://gitcode.com/openharmony-tpc/openharmony_tpc_samples>
- 引用文档：
  - `bpta-high-performance-json-parsing` — 高性能JSON解析

### ⏭️ `openharmony/arkcompiler_ets_frontend`  (1 篇)

- 本地：—（未克隆）
- 远程：<https://gitcode.com/openharmony/arkcompiler_ets_frontend>
- 引用文档：
  - `bpta-harmony-application-security` — 应用安全编码实践

### ⏭️ `openharmony/arkcompiler_runtime_core`  (2 篇)

- 本地：—（未克隆）
- 远程：<https://gitcode.com/openharmony/arkcompiler_runtime_core>
- 引用文档：
  - `bpta-abckitts-implements-instrumentation` — 基于AbcKitTS实现字节码插桩
  - `bpta-aspect-implements-aop` — 基于Aspect插件库实现切面编程

### ⏭️ `openharmony/arkui_ace_engine`  (1 篇)

- 本地：—（未克隆）
- 远程：<https://gitcode.com/openharmony/arkui_ace_engine>
- 引用文档：
  - `bpta-grid-drag-swap` — Grid网格元素拖拽交换

### ⏭️ `openharmony/docs`  (2 篇)

- 本地：—（未克隆）
- 远程：<https://gitcode.com/openharmony/docs>
- 引用文档：
  - `bpta-multi-device-window-mode` — 窗口模式
  - `bpta-scenario-stability-leak` — 资源泄漏类问题案例

### ⏭️ `openharmony/third_party_llvm-project`  (3 篇)

- 本地：—（未克隆）
- 远程：<https://gitcode.com/openharmony/third_party_llvm-project>
- 引用文档：
  - `bpta-stability-address-sanitizer-principle` — 地址越界检测工具原理
  - `bpta-stability-asan-detection` — 使用ASan检测内存错误
  - `bpta-stability-hwasan-detection` — 使用HWASan检测内存错误

## 三、统计与异常清单

- 文档总数：452
- 关联了 gitcode 代码的文档：215
- 未关联任何 gitcode 代码的文档：237
- 唯一关联仓库数：191
  - 已克隆：186
  - 核心仓跳过：5
  - 缺失（未克隆）：0

### ⏭️ 跳过的核心仓（仅正文源码引用，非示例代码）

- `openharmony/arkcompiler_ets_frontend` — 被 1 篇引用：<https://gitcode.com/openharmony/arkcompiler_ets_frontend>
- `openharmony/arkcompiler_runtime_core` — 被 2 篇引用：<https://gitcode.com/openharmony/arkcompiler_runtime_core>
- `openharmony/arkui_ace_engine` — 被 1 篇引用：<https://gitcode.com/openharmony/arkui_ace_engine>
- `openharmony/docs` — 被 2 篇引用：<https://gitcode.com/openharmony/docs>
- `openharmony/third_party_llvm-project` — 被 3 篇引用：<https://gitcode.com/openharmony/third_party_llvm-project>

