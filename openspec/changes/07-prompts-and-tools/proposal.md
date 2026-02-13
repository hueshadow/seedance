# Proposal 07: Prompt 库与交互式工具集

## 意图（Intent）

构建 Prompt 库和交互式工具集，提供实用价值吸引用户留存和回访。Prompt 库承接 "seedance prompt"（40/月, KD 0）等关键词，工具集（Prompt Builder、Credit Calculator、Model Comparison）通过交互式功能提升用户参与度和页面停留时间，同时为 Phase 4 变现（高级 Prompt 付费解锁）预留接口。

## 范围（Scope）

### Prompt Library（`/prompts`）

- 分类浏览：E-commerce / Short Film / Music Video / Social Media / Product Demo
- 每个 Prompt 卡片：标题 + 预览描述 + 复制按钮 + 标签
- 搜索和筛选功能（按类别、标签、版本兼容性）
- 部分高级 Prompt 需付费解锁（Phase 4 变现点，先预留 UI 锁定状态）

### Prompt Builder（`/tools/prompt-builder`）

- 交互式表单：场景类型 → 主体 → 动作 → 镜头运动 → 光线 → 风格
- 实时预览生成的 Prompt 文本
- 一键复制到剪贴板
- @Reference 标签辅助（选择引用类型，自动生成 `@Image1` / `@Video1` 语法）
- 纯前端实现，无需 API

### Credit Calculator（`/tools/calculator`）

- 输入：视频数量、时长（4-15 秒）、分辨率、平台选择
- 输出：预估费用、推荐套餐、与竞品费用对比
- 纯前端实现

### Model Comparison（`/tools/compare`）

- 并排对比任意两个 AI 视频模型
- 可选模型：Seedance 2.0, Sora 2, Veo 3.1, Kling 2.0, Hailuo, Wan
- 对比维度：分辨率、时长、音频支持、价格、生成速度、特色功能

## 技术方案（Approach）

- 客户端渲染（`'use client'`），React state 管理交互逻辑
- localStorage 保存用户偏好（最近使用的 Prompt、Builder 历史、对比选择）
- Prompt 数据以 TypeScript 常量维护，支持后续迁移至 CMS
- 复制功能使用 `navigator.clipboard.writeText()` API
- 工具页面使用动态导入（`next/dynamic`）减少首屏加载体积

## 阶段（Phase）

- Prompt Library: Phase 2
- Tools（Builder / Calculator / Compare）: Phase 3

## 目标关键词

- seedance prompt（40/月, KD 0）
- seedance prompt guide
- ai video prompt builder
- seedance pricing calculator
- seedance vs sora / seedance vs kling

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
- Proposal 06: 定价页（Calculator 数据复用）
