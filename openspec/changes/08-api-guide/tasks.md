# 任务清单：API 集成指南

## Tab 切换组件

- [ ] 创建通用 Tab 切换组件 `src/components/ui/Tabs.tsx`（`'use client'`）
- [ ] Tab 切换支持键盘导航（左右箭头键、Tab 键）
- [ ] Tab 状态同步到 URL hash（如 `#fal-ai`、`#replicate`、`#volcano`）
- [ ] 通过 URL hash 直接访问时自动激活对应 Tab
- [ ] Tab 切换动画平滑过渡（无闪烁）

## 代码示例内容

### fal.ai 平台

- [ ] 编写 fal.ai 快速开始内容（安装 `@fal-ai/client`、设置 API Key）
- [ ] 编写 JavaScript 代码示例：text-to-video（`fal-ai/seedance/text-to-video`）
- [ ] 编写 JavaScript 代码示例：image-to-video（`fal-ai/seedance/image-to-video`）
- [ ] 编写 JavaScript 代码示例：seedance-lite（`fal-ai/seedance-lite`）
- [ ] 编写 Python 代码示例：text-to-video、image-to-video
- [ ] 编写 cURL 代码示例：text-to-video、image-to-video
- [ ] 创建 fal.ai 可用端点列表表格
- [ ] 创建 fal.ai 参数说明表（prompt, image_url, duration, aspect_ratio 等）
- [ ] 编写 fal.ai 响应格式说明（video URL, request_id, timing）
- [ ] 编写 fal.ai 常见错误排查（401 认证失败、429 限流、500 服务错误）

### Replicate 平台

- [ ] 编写 Replicate 快速开始内容（安装 `replicate`、设置 API Token）
- [ ] 编写 JavaScript 代码示例：`bytedance/seedance-v1-pro-i2v-480p`
- [ ] 编写 JavaScript 代码示例：`bytedance/seedance-v1-pro-i2v-1080p`
- [ ] 编写 JavaScript 代码示例：`bytedance/seedance-1-pro`、`bytedance/seedance-1-pro-fast`
- [ ] 编写 Python 代码示例：各模型调用
- [ ] 编写 cURL 代码示例：各模型调用
- [ ] 创建 Replicate 可用模型列表表格（模型名、版本、用途、价格）
- [ ] 创建 Replicate 参数说明表
- [ ] 编写 Replicate 响应格式说明（prediction object, status polling）
- [ ] 编写 Replicate 常见错误排查

### Volcano Engine 平台

- [ ] 编写 Volcano Engine 快速开始内容（REST API 认证、AK/SK 配置）
- [ ] 编写 JavaScript 代码示例：Seedance 2.0 REST API 调用
- [ ] 编写 Python 代码示例：Seedance 2.0 REST API 调用
- [ ] 编写 cURL 代码示例：Seedance 2.0 REST API 调用
- [ ] 创建 Volcano Engine 可用端点列表
- [ ] 创建 Volcano Engine 参数说明表（含 Seedance 2.0 完整参数集）
- [ ] 编写 Volcano Engine 响应格式说明
- [ ] 编写 Volcano Engine 常见错误排查

## 语法高亮与复制

- [ ] 集成 Shiki 语法高亮库
- [ ] 配置 Shiki 支持语言：javascript、python、bash（cURL）、json
- [ ] 创建代码块组件 `src/components/ui/CodeBlock.tsx`，包含语法高亮和复制按钮
- [ ] 代码块内嵌语言切换 Tab（JS / Python / cURL）
- [ ] 复制按钮使用 `navigator.clipboard.writeText()`，显示成功反馈
- [ ] 语法高亮在构建时完成（SSG 兼容）

## 参数说明表

- [ ] 创建参数表组件 `src/components/api/ParameterTable.tsx`
- [ ] 表格列：参数名（代码字体）、类型、是否必填（标记）、默认值、说明
- [ ] 必填参数使用红色星号或 "Required" 标签标记
- [ ] 表格支持响应式（移动端横向滚动或卡片堆叠）

## 错误排查

- [ ] 创建错误排查组件 `src/components/api/ErrorTroubleshooting.tsx`
- [ ] 每个错误项包含：错误码、错误描述、可能原因、解决方案
- [ ] 使用可折叠面板（Accordion）组织错误列表

## 工作流集成

- [ ] 编写 n8n 集成简介内容（HTTP Request 节点配置、Webhook 触发）
- [ ] 编写 ComfyUI 集成简介内容（自定义节点安装、工作流配置）
- [ ] 各集成简介包含外链到官方文档

## Schema 结构化数据

- [ ] 创建 Article + TechArticle JSON-LD 生成函数 `src/lib/schema/api-schema.ts`
- [ ] TechArticle schema 包含 `proficiencyLevel`、`dependencies` 属性
- [ ] 在页面 `<head>` 中注入 JSON-LD
- [ ] 验证 JSON-LD 通过 Google Rich Results Test

## 页面路由与布局

- [ ] 创建 API 指南页面路由 `src/app/api-guide/page.tsx`
- [ ] 页面结构：标题区 → 平台 Tab 切换 → 当前平台内容 → 工作流集成
- [ ] 页面内导航（锚点跳转到各平台和各章节）

## SEO 元数据

- [ ] 配置页面 metadata：title 包含 "Seedance API" 关键词
- [ ] 配置 meta description（包含 "api"、"integration"、"developer" 等目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags
- [ ] 配置 canonical URL：`https://seedance.free/api-guide`

## 响应式设计

- [ ] Tab 切换在移动端全宽显示，Tab 标签可横向滚动
- [ ] 代码块在移动端支持横向滚动，字体大小适配
- [ ] 参数表在移动端横向滚动或切换为卡片布局
- [ ] 所有可交互元素满足最小触摸目标尺寸（44x44px）

## 性能优化

- [ ] MDX 内容 SSG 静态生成
- [ ] Shiki 语法高亮构建时执行
- [ ] Tab 切换组件客户端渲染，内容预渲染
- [ ] Lighthouse Performance 评分目标 >= 90
