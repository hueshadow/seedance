# Proposal 11: SEO 策略实施 — 任务清单

## 技术 SEO 基础

### Sitemap & Robots
- [ ] 安装并配置 `next-sitemap` 依赖
- [ ] 创建 `next-sitemap.config.js` 配置文件
- [ ] 配置 sitemap 包含所有公开页面（排除 API 路由、管理页面）
- [ ] 配置 `robots.txt` 规则（Allow/Disallow）
- [ ] 验证构建后 sitemap.xml 和 robots.txt 正确生成

### Canonical URL
- [ ] 在全局 Layout 或 Metadata API 中设置 canonical URL 基础逻辑
- [ ] 为每个页面配置唯一 canonical URL
- [ ] 验证动态路由页面（/blog/[slug]、/prompts/[id]）的 canonical 正确性

### Meta Tags
- [ ] 创建全局 metadata 默认配置（`app/layout.tsx`）
- [ ] 为 Homepage 配置定制 title + description + OG + Twitter Card
- [ ] 为 /guide 页面配置定制 meta tags
- [ ] 为 /versions 页面配置定制 meta tags
- [ ] 为 /pricing 页面配置定制 meta tags
- [ ] 为 /api 页面配置定制 meta tags
- [ ] 为 /prompts 页面配置定制 meta tags
- [ ] 为 /faq 页面配置定制 meta tags
- [ ] 为 /blog 列表页和详情页配置动态 meta tags
- [ ] 验证所有页面 OG image 正确设置（默认 OG image + 页面定制）

### JSON-LD 结构化数据
- [ ] 创建通用 `JsonLd` 组件（`components/seo/JsonLd.tsx`）
- [ ] 实现 WebSite Schema（Homepage）
- [ ] 实现 Organization Schema（Homepage）
- [ ] 实现 Article Schema（博客详情页）
- [ ] 实现 FAQPage Schema（/faq）
- [ ] 实现 HowTo Schema（/guide）
- [ ] 实现 BreadcrumbList Schema（所有子页面）
- [ ] 实现 Product Schema（/pricing，如适用）
- [ ] 使用 Google Rich Results Test 验证所有 Schema

### Core Web Vitals
- [ ] 审计当前 LCP 指标，优化关键渲染路径
- [ ] 图片优化：使用 `next/image`，配置 sizes 和 priority
- [ ] 字体优化：使用 `next/font`，预加载关键字体
- [ ] JavaScript 优化：代码分割、动态导入非关键组件
- [ ] CSS 优化：Tailwind CSS purge 配置验证
- [ ] CLS 优化：为图片和广告位预留尺寸
- [ ] 使用 Lighthouse CI 建立性能基线

### 404 页面
- [ ] 创建自定义 `app/not-found.tsx` 页面
- [ ] 设计品牌化 404 界面（含搜索建议、热门页面链接）
- [ ] 配置 404 页面 meta tags（noindex）

### 301 重定向
- [ ] 创建重定向规则配置文件（`next.config.js` redirects）
- [ ] 配置已知旧路径到新路径的映射
- [ ] 验证重定向状态码为 301

## 分析与监控

### Google Analytics 4
- [ ] 创建 GA4 属性并获取 Measurement ID
- [ ] 实现 GA4 gtag.js 异步加载组件
- [ ] 封装 `lib/analytics.ts` 事件追踪工具函数
- [ ] 配置页面浏览自动追踪
- [ ] 实现 CTA 按钮点击事件追踪
- [ ] 实现 Prompt 复制事件追踪
- [ ] 实现外链点击事件追踪
- [ ] 实现工具使用事件追踪
- [ ] 配置环境变量管理 GA4 ID（仅生产环境加载）

### Google Search Console
- [ ] 选择验证方式（HTML meta tag 或 DNS TXT）
- [ ] 实施站点验证
- [ ] 提交 sitemap.xml
- [ ] 配置索引请求（核心页面优先）

## On-Page SEO 规范

### Title & Description
- [ ] 制定 Title Tag 模板规范文档
- [ ] 制定 Meta Description 模板规范文档
- [ ] 审计所有页面 title 长度（≤60 字符）
- [ ] 审计所有页面 description 长度（120-160 字符）

### Heading 层级
- [ ] 审计所有页面 H1 唯一性
- [ ] 审计 H2/H3 关键词覆盖情况
- [ ] 修复不符合规范的 heading 层级

### 内链策略
- [ ] 创建 `InternalLink` 组件（统一管理内链）
- [ ] 在 /guide 页面添加到 /versions、/pricing、/api、/prompts 的内链
- [ ] 在 /pricing 页面添加到 /guide、/versions 的内链
- [ ] 在 /api 页面添加到 /guide、/prompts 的内链
- [ ] 确保每个页面至少 3 个内链
- [ ] 在 Footer 中添加全站导航链接

### 图片 Alt 文本
- [ ] 审计所有页面图片 alt 属性
- [ ] 为缺失 alt 的图片添加描述性文本
- [ ] 确保 alt 文本包含相关关键词（自然语言，非堆砌）
