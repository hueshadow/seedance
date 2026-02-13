# Proposal 10: 博客系统 — 任务清单

## MDX 博客基础设施
- [ ] 安装并配置 `next-mdx-remote` 和 `gray-matter` 依赖
- [ ] 创建 `content/blog/` 目录结构
- [ ] 定义 frontmatter Schema（title, slug, date, author, category, tags, excerpt, coverImage, readingTime）
- [ ] 实现 MDX 文件读取和解析工具函数（`lib/mdx.ts`）
- [ ] 创建自定义 MDX 组件库（CodeBlock, Callout, ComparisonTable, VideoEmbed）
- [ ] 配置 MDX 代码高亮（rehype-pretty-code 或 shiki）

## 博客列表页（/blog）
- [ ] 创建 `/app/blog/page.tsx` 列表页
- [ ] 实现文章卡片组件（BlogCard）：封面图、标题、摘要、分类、日期、阅读时间
- [ ] 实现分页逻辑（每页 12 篇，SSG 预渲染分页）
- [ ] 实现分类筛选功能（URL 参数驱动）
- [ ] 实现标签筛选功能
- [ ] 列表页 SEO meta tags 配置

## 博客详情页（/blog/[slug]）
- [ ] 创建 `/app/blog/[slug]/page.tsx` 详情页
- [ ] 实现 MDX 内容渲染管线
- [ ] 实现自动目录生成（TOC 组件，基于 H2/H3）
- [ ] 实现作者信息卡片组件
- [ ] 实现发布日期和阅读时间显示
- [ ] 实现上一篇/下一篇文章导航
- [ ] 详情页 SEO meta tags（动态生成）
- [ ] 实现 `generateStaticParams` 预渲染所有文章

## 分类与标签系统
- [ ] 定义分类枚举：Comparison, Tutorial, News, Tips, API
- [ ] 创建分类页面 `/app/blog/category/[category]/page.tsx`
- [ ] 创建标签页面 `/app/blog/tag/[tag]/page.tsx`
- [ ] 实现分类和标签的文章聚合逻辑

## 相关文章推荐
- [ ] 实现基于标签匹配的相关文章算法
- [ ] 创建 RelatedPosts 组件（展示 3 篇）
- [ ] 集成到文章详情页底部

## 社交分享
- [ ] 创建 SocialShare 组件
- [ ] 实现 Twitter/X 分享（预填充文本 + URL）
- [ ] 实现 LinkedIn 分享
- [ ] 实现 Reddit 分享
- [ ] 实现复制链接功能（带 toast 提示）

## 广告位预留
- [ ] 创建 AdSlot 占位组件（文章中间位）
- [ ] 创建 AdSlot 占位组件（文章底部横幅位）
- [ ] 预留 AdSense 脚本注入点

## Schema Markup
- [ ] 实现 Article JSON-LD 结构化数据组件
- [ ] 实现 BreadcrumbList JSON-LD（首页 > Blog > 文章标题）
- [ ] 在详情页注入 Schema 数据

## RSS Feed
- [ ] 实现 RSS XML 生成逻辑（`app/feed.xml/route.ts`）
- [ ] 包含最新 20 篇文章的标题、摘要、链接、日期
- [ ] 在 `<head>` 中添加 RSS 自动发现链接

## 首批文章模板
- [ ] 创建 `seedance-vs-sora.mdx` 模板（含完整 frontmatter）
- [ ] 创建 `seedance-vs-veo3.mdx` 模板
- [ ] 创建 `seedance-prompts-ecommerce.mdx` 模板
- [ ] 创建 `seedance-outside-china.mdx` 模板
- [ ] 创建 `seedance-api-tutorial.mdx` 模板

## 响应式设计
- [ ] 博客列表页移动端适配（单列卡片）
- [ ] 博客详情页移动端适配（TOC 折叠为下拉）
- [ ] 社交分享按钮移动端布局
