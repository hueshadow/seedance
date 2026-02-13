# 博客系统需求规格

> 状态：ADDED
> 关联提案：Proposal 10 — 博客系统

---

## 1. MDX 渲染

### REQ-BLOG-001: MDX 文件解析与渲染

系统 MUST 支持从 `content/blog/` 目录读取 `.mdx` 文件并渲染为 HTML 页面。

**场景：正常渲染 MDX 文章**
- Given 一篇包含有效 frontmatter 和 MDX 内容的 `.mdx` 文件存在于 `content/blog/` 目录
- When 用户访问 `/blog/[slug]` 页面
- Then 系统 MUST 正确解析 frontmatter 元数据
- And 系统 MUST 将 MDX 内容渲染为格式化的 HTML
- And 自定义组件（CodeBlock, Callout, ComparisonTable, VideoEmbed）MUST 正确渲染

**场景：frontmatter 缺失必填字段**
- Given 一篇 MDX 文件缺少必填 frontmatter 字段（title 或 date）
- When 构建系统尝试解析该文件
- Then 系统 MUST 在构建时抛出明确的错误信息
- And 该文章 SHALL NOT 被包含在博客列表中

### REQ-BLOG-002: Frontmatter Schema

每篇 MDX 文章的 frontmatter MUST 包含以下字段：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | MUST | 文章标题 |
| slug | string | MUST | URL 路径标识 |
| date | string (ISO 8601) | MUST | 发布日期 |
| updated | string (ISO 8601) | MAY | 更新日期 |
| author | string | MUST | 作者名称 |
| category | enum | MUST | 分类（Comparison/Tutorial/News/Tips/API） |
| tags | string[] | SHOULD | 标签数组 |
| excerpt | string | MUST | 摘要（≤160 字符） |
| coverImage | string | SHOULD | 封面图路径 |
| draft | boolean | MAY | 草稿标记，默认 false |

**场景：草稿文章过滤**
- Given 一篇 MDX 文件的 frontmatter 中 `draft: true`
- When 系统构建博客列表
- Then 该文章 MUST NOT 出现在生产环境的博客列表中
- And 该文章 MAY 在开发环境中可见

---

## 2. 博客列表与分页

### REQ-BLOG-003: 博客列表页

**场景：访问博客列表页**
- Given 系统中存在多篇已发布的博客文章
- When 用户访问 `/blog` 页面
- Then 系统 MUST 展示文章卡片列表
- And 每张卡片 MUST 包含：封面图（或默认占位图）、标题、摘要、分类标签、发布日期、预估阅读时间
- And 文章 MUST 按发布日期降序排列

### REQ-BLOG-004: 分页

**场景：文章数量超过单页限制**
- Given 系统中存在超过 12 篇已发布文章
- When 用户访问 `/blog` 页面
- Then 系统 MUST 每页展示最多 12 篇文章
- And 页面底部 MUST 展示分页导航
- And 每个分页页面 MUST 通过 SSG 预渲染

**场景：访问特定分页**
- Given 用户在博客列表页
- When 用户点击第 2 页
- Then URL SHOULD 更新为 `/blog?page=2` 或 `/blog/page/2`
- And 系统 MUST 展示第 13-24 篇文章

---

## 3. 分类与标签筛选

### REQ-BLOG-005: 分类筛选

**场景：按分类筛选文章**
- Given 用户在博客列表页
- When 用户选择 "Comparison" 分类
- Then 系统 MUST 仅展示 category 为 "Comparison" 的文章
- And URL SHOULD 反映当前筛选状态
- And 分页 MUST 基于筛选后的结果重新计算

### REQ-BLOG-006: 标签筛选

**场景：按标签筛选文章**
- Given 用户在博客列表页或文章详情页
- When 用户点击某个标签（如 "seedance-2.0"）
- Then 系统 MUST 导航到标签聚合页 `/blog/tag/[tag]`
- And 该页面 MUST 展示所有包含该标签的文章

---

## 4. 博客详情页

### REQ-BLOG-007: 目录生成（TOC）

**场景：文章包含多个标题**
- Given 一篇 MDX 文章包含 H2 和 H3 级别的标题
- When 用户访问该文章详情页
- Then 系统 MUST 在侧边栏（桌面端）或可折叠区域（移动端）展示自动生成的目录
- And 目录项 MUST 支持点击锚点跳转
- And 当前阅读位置对应的目录项 SHOULD 高亮显示

### REQ-BLOG-008: 阅读时间估算

**场景：展示阅读时间**
- Given 一篇 MDX 文章的正文内容
- When 系统计算阅读时间
- Then 系统 MUST 基于英文 200 词/分钟的速率估算
- And 阅读时间 MUST 在文章顶部元信息区域展示
- And 格式 SHOULD 为 "X min read"

---

## 5. 相关文章推荐

### REQ-BLOG-009: 相关文章算法

**场景：展示相关文章**
- Given 用户正在阅读一篇博客文章
- When 系统计算相关文章
- Then 系统 MUST 基于标签匹配度排序，选取最多 3 篇相关文章
- And 相关文章 MUST NOT 包含当前文章本身
- And 若匹配文章不足 3 篇，系统 SHOULD 用同分类的最新文章补充

---

## 6. 社交分享

### REQ-BLOG-010: 社交分享按钮

**场景：用户分享文章**
- Given 用户在博客详情页
- When 用户点击 Twitter/X 分享按钮
- Then 系统 MUST 打开新窗口，预填充文章标题和 URL
- And 分享 URL MUST 使用 canonical URL

**场景：复制链接**
- Given 用户在博客详情页
- When 用户点击"复制链接"按钮
- Then 系统 MUST 将文章 canonical URL 复制到剪贴板
- And 系统 MUST 展示成功提示（toast）

---

## 7. 广告位

### REQ-BLOG-011: 广告位预留

**场景：文章中间广告位**
- Given 一篇博客文章内容长度超过 500 词
- When 系统渲染文章内容
- Then 系统 SHOULD 在文章中间位置插入一个自适应广告位占位组件
- And 广告位 MUST NOT 在广告未加载时影响页面布局（CLS < 0.1）

**场景：文章底部广告位**
- Given 用户在博客详情页
- When 页面渲染完成
- Then 系统 MUST 在文章底部、相关文章上方展示一个 728x90 广告位占位
- And 移动端 SHOULD 自适应为 320x100

---

## 8. Schema Markup

### REQ-BLOG-012: Article 结构化数据

**场景：搜索引擎抓取文章页**
- Given 搜索引擎爬虫访问博客详情页
- When 爬虫解析页面
- Then 页面 MUST 包含 `Article` 类型的 JSON-LD 结构化数据
- And JSON-LD MUST 包含：headline, datePublished, dateModified, author.name, description, image
- And JSON-LD MUST 通过 Google Rich Results Test 验证

### REQ-BLOG-013: BreadcrumbList 结构化数据

**场景：面包屑导航 Schema**
- Given 用户在博客详情页
- When 页面渲染
- Then 页面 MUST 包含 `BreadcrumbList` JSON-LD
- And 路径 MUST 为：首页 > Blog > [文章标题]

---

## 9. RSS Feed

### REQ-BLOG-014: RSS Feed 生成

**场景：RSS 订阅**
- Given 用户或 RSS 阅读器访问 `/feed.xml`
- When 系统处理请求
- Then 系统 MUST 返回有效的 RSS 2.0 或 Atom XML
- And Feed MUST 包含最新 20 篇已发布文章
- And 每篇文章 MUST 包含：title, link, description, pubDate
- And `<head>` 中 MUST 包含 RSS 自动发现 `<link>` 标签

---

## 10. SEO Meta

### REQ-BLOG-015: 博客页面 SEO Meta

**场景：博客详情页 meta tags**
- Given 一篇博客文章的 frontmatter 数据
- When 系统生成页面 `<head>`
- Then `<title>` MUST 格式为 `{文章标题} | Seedance Blog`
- And `<meta name="description">` MUST 使用 frontmatter 中的 excerpt
- And `<link rel="canonical">` MUST 指向 `https://seedance.free/blog/{slug}`
- And Open Graph tags（og:title, og:description, og:image, og:type=article）MUST 存在
- And Twitter Card tags（twitter:card=summary_large_image）MUST 存在
