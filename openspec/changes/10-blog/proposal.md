# Proposal 10: 博客系统

## 意图（Intent）

构建 MDX 驱动的博客系统，作为持续 SEO 内容引擎，承接竞品对比词（seedance vs sora、seedance vs veo 3）和长尾关键词流量。博客是网站内容矩阵的核心增长模块，通过高质量技术文章建立领域权威性。

## 范围（Scope）

### MDX 博客基础设施
- MDX 文件驱动的博客系统，支持 frontmatter 元数据
- 基于 `next-mdx-remote` 或 `contentlayer` 的 MDX 解析与渲染管线

### 博客列表页（/blog）
- 文章卡片展示（封面图、标题、摘要、分类、发布日期、阅读时间）
- 分页功能（每页 12 篇）
- 分类筛选（Categories）和标签筛选（Tags）

### 博客详情页（/blog/[slug]）
- MDX 内容渲染（支持自定义组件：代码块、提示框、视频嵌入）
- 自动生成目录（TOC，基于 H2/H3 标题）
- 作者信息卡片
- 发布日期与阅读时间估算
- 上一篇/下一篇导航

### 分类与标签系统
- Categories：Comparison、Tutorial、News、Tips、API
- Tags：自由标签，frontmatter 中定义

### 相关文章推荐
- 基于标签匹配算法，展示 3 篇相关文章
- 位于文章底部

### 社交分享
- 分享按钮：Twitter/X、LinkedIn、Reddit
- 复制链接按钮

### 广告位预留
- 文章中间插入位（AdSense 自适应广告）
- 文章底部横幅位（728x90）

### Schema Markup
- Article 结构化数据（JSON-LD）
- BreadcrumbList 结构化数据

### 首批文章模板
创建 5 篇 MDX 模板文件（含 frontmatter，正文为占位内容）：
1. `seedance-vs-sora.mdx` — "Seedance 2.0 vs Sora 2: Which AI Video Generator Wins?"
2. `seedance-vs-veo3.mdx` — "Seedance 2.0 vs Veo 3: Head-to-Head Comparison"
3. `seedance-prompts-ecommerce.mdx` — "10 Best Seedance Prompts for E-commerce Videos"
4. `seedance-outside-china.mdx` — "How to Access Seedance 2.0 Outside China"
5. `seedance-api-tutorial.mdx` — "Seedance API Tutorial: Generate Videos with Code"

### RSS Feed
- `/feed.xml` 自动生成
- 包含最新 20 篇文章

## 方法（Approach）

- 使用 `next-mdx-remote` 处理 MDX 渲染，配合 gray-matter 解析 frontmatter
- 所有博客页面采用 SSG（静态生成），构建时预渲染
- MDX 文件存放于 `content/blog/` 目录
- 自定义 MDX 组件库（代码高亮、提示框、对比表格、视频嵌入）
- 阅读时间基于中英文字数估算（英文 200 wpm）

## 阶段（Phase）

- Phase 2：博客基础框架、列表页、详情页、分类标签系统
- Phase 3：首批文章内容填充、RSS Feed、社交分享优化
