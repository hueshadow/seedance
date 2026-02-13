# Proposal 03: 完整指南页

## 意图（Intent）

构建网站主力 SEO 页面 `/guide`，基于已有的 `how-to-use-seedance-complete-guide.md` 内容进行渲染。该页面承接 "how to use seedance"（30 次/月, KD 0）、"seedance 2.0"（Breakout 趋势）等长尾关键词，是网站获取自然搜索流量的核心内容页。

## 范围（Scope）

### MDX 内容渲染
- 基于已有 `how-to-use-seedance-complete-guide.md` 内容迁移为 MDX 格式
- 使用 `@next/mdx` 或 `next-mdx-remote` 渲染
- rehype/remark 插件支持（自动链接标题、GFM 表格等）

### TOC 目录导航
- 左侧 sticky TOC 导航栏
- 自动从 MDX 内容提取 h2/h3 标题生成目录
- Intersection Observer 实现滚动时自动高亮当前段落
- 移动端 TOC 折叠为顶部下拉菜单

### 内容分段与内部 CTA
- 内容按逻辑分段：What Is Seedance → Versions → Access Methods → Phone Registration → Prompts → API
- 每个段落末尾设置 CTA 链接跳转到对应详情页（`/versions`, `/register`, `/prompts`, `/api`）

### 代码块增强
- 语法高亮（使用 Shiki 或 Prism）
- 代码块右上角复制按钮
- 支持多语言代码块（Python, JavaScript, cURL）

### 阅读进度条
- 页面顶部固定进度条，显示当前阅读进度百分比

### Schema 结构化数据
- Article schema（author, datePublished, dateModified）
- HowTo schema（steps 对应各操作段落）

### 广告位预留
- 文章中间（约 50% 位置）预留 AdSense 广告位
- 文章底部预留 AdSense 广告位

## 技术方案（Approach）

- MDX 渲染使用 `next-mdx-remote` 或 `@next/mdx`，配合 rehype/remark 插件链
- TOC 高亮通过 Intersection Observer API 实现，监听各 section 的可见性
- 代码高亮使用 `rehype-pretty-code`（基于 Shiki）
- 阅读进度条通过监听 `scroll` 事件计算页面滚动百分比
- SSG 静态生成，构建时渲染 MDX 内容
- 图片通过 `next/image` 优化，MDX 中的图片使用自定义组件替换

## 阶段（Phase）

Phase 1（MVP）

## 目标关键词

- how to use seedance（30 次/月, KD 0）
- seedance video generator
- seedance 2.0（Breakout）
- what is seedance

## 依赖

- Proposal 01: 基础架构（全局布局、Sidebar/TOC 组件、主题系统）
