# Proposal 05: 版本对比页

## 意图（Intent）

构建版本对比页面 `/versions`，承接 \"seedance 1.0\"（2,400/月）、\"seedance 1.0 pro\"（480/月）、\"seedance pro\"（390/月）等高流量关键词。版本相关查询是 Seedance 搜索量最大的关键词簇，用户需要清晰的版本差异对比来做出选择决策。

## 范围（Scope）

### 交互式对比表

覆盖全部 Seedance 版本的横向对比表：

| 版本 | 定位 |
|------|------|
| 1.0 Lite | 轻量入门版 |
| 1.0 Mini | 精简版 |
| 1.0 Pro | 专业版 |
| 1.0 Pro Fast | 快速专业版 |
| 1.5 Pro | 增强专业版 |
| 2.0 | 最新旗舰版 |

### 对比维度

- 分辨率（Resolution）
- 生成速度（Speed）
- 音频支持（Audio Support）
- 价格/信用点消耗（Price / Credits）
- 可用平台（Available Platforms）
- 最大视频时长（Max Duration）
- 参考输入支持（Reference Input：图片/视频）

### 版本详细卡片

- 每个版本可展开查看详细信息卡片
- 卡片包含：版本亮点、适用场景、示例输出链接

### 决策流程图

- \"Which version is right for you?\" 交互式决策引导
- 通过 2-3 个问题（用途、预算、质量要求）推荐最适合的版本

### 版本时间线

- 可视化展示 Seedance 各版本发布时间线
- 标注每个版本的关键改进点

### Schema 结构化数据

- Table schema markup

## 技术方案（Approach）

- 版本数据以 TypeScript 常量维护，SSG 静态生成
- 对比表使用响应式表格设计（桌面端横向表格，移动端卡片式堆叠）
- 决策流程图为客户端交互组件（状态机驱动）
- 时间线使用 CSS Grid/Flexbox 布局
- 版本卡片展开使用 Accordion 模式

## 阶段（Phase）

Phase 2

## 目标关键词

- seedance 1.0（2,400/月）
- seedance 1.0 pro（480/月）
- seedance pro（390/月）
- seedance lite
- seedance 2.0（Breakout）
- seedance 1.5

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
