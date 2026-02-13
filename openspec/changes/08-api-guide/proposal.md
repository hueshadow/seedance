# Proposal 08: API 集成指南

## 意图（Intent）

构建 API 集成指南页面，承接 "seedance api"（170/月, KD 9, CPC $2.58）和 "bytedance/seedance-v1-pro-i2v-480p"（1,600/月, KD 11）等高价值开发者关键词。开发者是 Seedance 生态中高 LTV 用户群体，API 文档是其决策链中的关键参考页面，通过提供结构化的多平台集成指南，降低开发者接入门槛，提升页面权威性和外链潜力。

## 范围（Scope）

### 分平台 Tab 切换

三个主要平台以 Tab 形式组织：fal.ai / Replicate / Volcano Engine

### 每个平台包含

- 快速开始（安装 SDK + 认证配置）
- 代码示例（JavaScript / Python / cURL）带语法高亮和复制按钮
- 可用端点/模型列表
- 参数说明表（参数名、类型、是否必填、默认值、说明）
- 响应格式说明
- 常见错误排查（错误码 + 解决方案）

### 代码示例数据

- fal.ai: `fal-ai/seedance/text-to-video`, `fal-ai/seedance/image-to-video`, `fal-ai/seedance-lite`
- Replicate: `bytedance/seedance-v1-pro-i2v-480p`, `bytedance/seedance-v1-pro-i2v-1080p`, `bytedance/seedance-1-pro`, `bytedance/seedance-1-pro-fast`
- Volcano Engine: REST API，Seedance 2.0 完整功能集

### 工作流集成

- n8n 集成简介（节点配置示意）
- ComfyUI 集成简介（工作流节点说明）

### Schema 结构化数据

- Article + TechArticle JSON-LD Schema

## 技术方案（Approach）

- MDX 内容管理，代码示例内联于 MDX 文件
- 客户端 Tab 切换组件（`'use client'`），Tab 状态同步到 URL hash
- Shiki 语法高亮（支持 JavaScript、Python、bash/cURL）
- SSG 静态生成，代码高亮在构建时完成
- 复制按钮使用 `navigator.clipboard.writeText()` API

## 阶段（Phase）

Phase 3

## 目标关键词

- seedance api（170/月, KD 9, CPC $2.58）
- bytedance/seedance-v1-pro-i2v-480p（1,600/月, KD 11）
- seedance 1.0 api
- fal ai seedance
- replicate seedance

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
