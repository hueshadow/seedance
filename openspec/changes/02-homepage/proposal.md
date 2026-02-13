# Proposal 02: 首页

## 意图（Intent）

构建 seedance.free 网站首页，作为全站流量入口和导航枢纽。首页承接核心关键词 "seedance"（4,400 次/月）和 "seedance ai"（1,300 次/月），需要在第一屏清晰传达网站价值主张，并引导用户进入各功能页面。

## 范围（Scope）

### Hero 区域
- 主标题："The Complete Seedance Resource for Creators & Developers"
- 副标题：简要说明网站提供的内容（指南、工具、API 文档、注册教程）
- 主 CTA 按钮："Start Using Seedance →"
- 次 CTA 按钮："Read the Guide"

### 快速导航卡片
- 四张功能卡片：Guide / Tools / API / Register
- 每张卡片包含图标、标题、简短描述和链接
- 卡片布局：移动端单列，桌面端 2x2 网格

### 最新版本状态指示器
- 显示当前最新版本：Seedance 2.0
- 状态标签：Available on Jimeng
- 链接到 `/versions` 页面

### 竞品对比摘要表
- 对比模型：Seedance 2.0 vs Sora 2 vs Veo 3.1 vs Kling 2.0
- 对比维度：最大时长、分辨率、价格区间、可用性
- 链接到详细对比页面

### 最新博客文章
- 展示最新 3 篇博客文章卡片
- 包含标题、摘要、发布日期
- "查看全部文章" 链接

### Schema 结构化数据
- Organization schema
- WebSite schema（含 SearchAction）

## 技术方案（Approach）

- SSG 静态生成（`generateStaticParams` 不需要，首页为固定页面）
- 使用 `next/image` 优化所有图片资源
- JSON-LD 结构化数据通过 `<script type="application/ld+json">` 注入
- 对比表格数据从本地 JSON/TS 文件读取，便于后续更新
- 所有组件为 Server Components，无需客户端 JavaScript

## 阶段（Phase）

Phase 1（MVP）

## 目标关键词

- seedance（4,400 次/月）
- seedance ai（1,300 次/月）
- seedance official website

## 依赖

- Proposal 01: 基础架构（全局布局、Header/Footer、主题系统）
