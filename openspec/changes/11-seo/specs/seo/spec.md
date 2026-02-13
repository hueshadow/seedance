# SEO 策略实施需求规格

> 状态：ADDED
> 关联提案：Proposal 11 — SEO 策略实施

---

## 1. Sitemap 生成

### REQ-SEO-001: sitemap.xml 自动生成

系统 MUST 在每次构建时自动生成 `sitemap.xml`。

**场景：构建生成 sitemap**
- Given 项目执行 `next build` 构建命令
- When 构建完成
- Then 系统 MUST 在输出目录生成 `sitemap.xml` 文件
- And sitemap MUST 包含所有公开页面的 URL
- And sitemap MUST NOT 包含 API 路由（`/api/*`）
- And sitemap MUST NOT 包含管理页面或草稿页面
- And 每个 URL 条目 MUST 包含 `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`

**场景：动态页面收录**
- Given 博客系统中新增了一篇已发布文章
- When 项目重新构建
- Then 新文章的 URL MUST 出现在 sitemap.xml 中

---

## 2. Robots.txt

### REQ-SEO-002: robots.txt 配置

**场景：搜索引擎爬虫访问 robots.txt**
- Given 搜索引擎爬虫请求 `/robots.txt`
- When 服务器响应
- Then 响应 MUST 返回有效的 robots.txt 文件
- And 文件 MUST 包含 `Sitemap: https://seedance.free/sitemap.xml`
- And 文件 MUST 允许主要搜索引擎爬虫（Googlebot, Bingbot）抓取公开页面
- And 文件 MUST 禁止抓取 `/api/*` 路径
- And 文件 SHOULD 禁止抓取 `/_next/` 内部路径

---

## 3. Canonical URL

### REQ-SEO-003: 唯一 Canonical URL

**场景：每页设置 canonical**
- Given 任意公开页面
- When 页面渲染
- Then `<head>` 中 MUST 包含 `<link rel="canonical" href="...">` 标签
- And canonical URL MUST 使用 `https://seedance.free` 作为域名前缀
- And canonical URL MUST 不包含查询参数（分页参数除外）
- And canonical URL MUST 不包含尾部斜杠（trailing slash）

**场景：分页页面 canonical**
- Given 博客列表第 2 页
- When 页面渲染
- Then canonical URL SHOULD 指向当前分页 URL（如 `/blog?page=2`）
- And canonical MUST NOT 指向第 1 页

---

## 4. Open Graph & Twitter Card Meta

### REQ-SEO-004: Open Graph Meta Tags

**场景：社交平台分享页面**
- Given 用户在社交平台分享网站任意页面
- When 社交平台抓取页面 meta 信息
- Then 页面 MUST 包含以下 Open Graph tags：
  - `og:title` — 页面标题
  - `og:description` — 页面描述
  - `og:image` — 分享图片（最小 1200x630px）
  - `og:url` — canonical URL
  - `og:type` — 页面类型（website/article）
  - `og:site_name` — "Seedance"
- And 博客文章页 `og:type` MUST 为 `article`
- And 博客文章页 MUST 额外包含 `article:published_time` 和 `article:author`

### REQ-SEO-005: Twitter Card Meta Tags

**场景：Twitter/X 分享预览**
- Given 用户在 Twitter/X 分享网站页面
- When Twitter 抓取页面 meta 信息
- Then 页面 MUST 包含以下 Twitter Card tags：
  - `twitter:card` — `summary_large_image`
  - `twitter:title` — 页面标题
  - `twitter:description` — 页面描述
  - `twitter:image` — 分享图片

---

## 5. JSON-LD 结构化数据

### REQ-SEO-006: JSON-LD 输出验证

**场景：结构化数据注入**
- Given 任意包含 JSON-LD 的页面
- When 搜索引擎爬虫解析页面
- Then JSON-LD MUST 以 `<script type="application/ld+json">` 标签注入
- And JSON-LD 内容 MUST 是有效的 JSON
- And JSON-LD MUST 通过 Google Rich Results Test 验证无错误

**场景：Homepage Schema**
- Given 用户访问首页
- When 页面渲染
- Then 页面 MUST 包含 `WebSite` 类型 JSON-LD（含 name, url, description）
- And 页面 MUST 包含 `Organization` 类型 JSON-LD（含 name, url, logo）

**场景：FAQ 页面 Schema**
- Given 用户访问 /faq 页面
- When 页面渲染
- Then 页面 MUST 包含 `FAQPage` 类型 JSON-LD
- And 每个 FAQ 条目 MUST 包含 `Question` 和 `AcceptedAnswer`

---

## 6. Google Analytics 4

### REQ-SEO-007: GA4 集成

**场景：GA4 脚本加载**
- Given 用户在生产环境访问网站
- When 页面加载
- Then GA4 gtag.js MUST 异步加载
- And GA4 MUST NOT 在开发环境或预览环境加载
- And GA4 脚本 MUST NOT 阻塞页面首次渲染（使用 `async` 或 `defer`）

**场景：页面浏览追踪**
- Given GA4 已加载
- When 用户导航到新页面（包括客户端路由）
- Then 系统 MUST 发送 `page_view` 事件
- And 事件 MUST 包含正确的页面路径和标题

### REQ-SEO-008: 事件追踪

**场景：CTA 按钮点击追踪**
- Given 用户在任意页面
- When 用户点击 CTA 按钮（如 "Try Seedance Free"）
- Then 系统 MUST 发送自定义事件（event name: `cta_click`）
- And 事件 MUST 包含参数：button_text, page_path

**场景：Prompt 复制追踪**
- Given 用户在 /prompts 页面
- When 用户复制一个 Prompt
- Then 系统 MUST 发送自定义事件（event name: `prompt_copy`）
- And 事件 MUST 包含参数：prompt_id, prompt_category

---

## 7. Search Console

### REQ-SEO-009: Search Console 验证

**场景：站点所有权验证**
- Given 网站部署到生产环境
- When Google Search Console 验证站点
- Then 系统 MUST 支持至少一种验证方式（HTML meta tag 或 DNS TXT 记录）
- And 验证 meta tag（如使用）MUST 仅在生产环境注入

---

## 8. Title & Description 格式

### REQ-SEO-010: Title Tag 规范

**场景：页面 title 格式**
- Given 任意公开页面
- When 页面渲染
- Then `<title>` MUST 遵循模板：`{页面关键词} | Seedance - AI Video Generation`
- And title 长度 MUST NOT 超过 60 字符
- And title MUST 包含该页面的目标关键词
- And Homepage title SHOULD 为 `Seedance - Free AI Video Generation by ByteDance`

### REQ-SEO-011: Meta Description 规范

**场景：页面 description 格式**
- Given 任意公开页面
- When 页面渲染
- Then `<meta name="description">` MUST 存在且非空
- And description 长度 MUST 在 120-160 字符之间
- And description MUST 包含该页面的目标关键词
- And description SHOULD 包含行动号召（CTA）

---

## 9. Heading 层级

### REQ-SEO-012: Heading 层级规范

**场景：H1 唯一性**
- Given 任意公开页面
- When 页面渲染
- Then 页面 MUST 有且仅有一个 `<h1>` 标签
- And H1 MUST 包含该页面的核心目标关键词

**场景：H2/H3 关键词覆盖**
- Given 任意内容页面（非列表页）
- When 页面渲染
- Then H2 标签 SHOULD 覆盖该页面的次要关键词
- And heading 层级 MUST 严格递进（H1 > H2 > H3），不得跳级

---

## 10. 内链策略

### REQ-SEO-013: 内链密度

**场景：页面内链数量**
- Given 任意内容页面
- When 页面渲染
- Then 页面正文区域 SHOULD 包含至少 3 个指向站内其他页面的链接
- And 内链锚文本 SHOULD 包含目标页面的关键词
- And 内链 MUST NOT 使用 `nofollow` 属性

---

## 11. 面包屑 Schema

### REQ-SEO-014: BreadcrumbList 结构化数据

**场景：子页面面包屑**
- Given 用户访问任意非首页的子页面
- When 页面渲染
- Then 页面 MUST 包含 `BreadcrumbList` JSON-LD
- And 面包屑路径 MUST 从首页开始
- And 每个面包屑项 MUST 包含 `name` 和 `item`（URL）
- And 最后一项（当前页面）MAY 省略 `item` 属性

---

## 12. 图片 Alt 文本

### REQ-SEO-015: 图片 Alt 属性

**场景：图片可访问性和 SEO**
- Given 页面中包含 `<img>` 或 `<Image>` 元素
- When 页面渲染
- Then 每个图片 MUST 包含非空的 `alt` 属性
- And alt 文本 MUST 准确描述图片内容
- And alt 文本 SHOULD 自然地包含相关关键词（非堆砌）
- And 纯装饰性图片 MAY 使用空 alt（`alt=""`）

---

## 13. 404 页面

### REQ-SEO-016: 自定义 404 页面

**场景：访问不存在的页面**
- Given 用户访问一个不存在的 URL
- When 服务器返回 404 状态码
- Then 系统 MUST 展示品牌化的自定义 404 页面
- And 页面 MUST 包含返回首页的链接
- And 页面 SHOULD 包含热门页面推荐链接
- And 页面 SHOULD 包含搜索建议或站内搜索
- And 页面 `<meta name="robots">` MUST 设置为 `noindex`

---

## 14. 301 重定向

### REQ-SEO-017: 重定向规则

**场景：旧路径重定向**
- Given 用户或爬虫访问一个已配置重定向的旧路径
- When 服务器处理请求
- Then 服务器 MUST 返回 301 状态码
- And `Location` header MUST 指向正确的新路径
- And 重定向规则 MUST 在 `next.config.js` 中集中管理

---

## 15. Core Web Vitals

### REQ-SEO-018: 性能指标目标

**场景：Core Web Vitals 达标**
- Given 网站部署到生产环境
- When 使用 Lighthouse 或 PageSpeed Insights 测试任意页面
- Then LCP（Largest Contentful Paint）MUST 小于 2.5 秒
- And FID（First Input Delay）MUST 小于 100 毫秒
- And CLS（Cumulative Layout Shift）MUST 小于 0.1
- And Lighthouse Performance 评分 SHOULD 大于 90
