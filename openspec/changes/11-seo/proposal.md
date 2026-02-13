# Proposal 11: SEO 策略实施

## 意图（Intent）

实施全站 SEO 技术基础设施和策略，确保所有页面符合搜索引擎优化最佳实践。目标：4 周内核心关键词（seedance, seedance ai）进入 Google 搜索结果前 10 位。SEO 是网站获取免费有机流量的核心能力，需要从技术层面和内容层面同步推进。

## 范围（Scope）

### 技术 SEO

- **sitemap.xml**：使用 `next-sitemap` 自动生成，包含所有公开页面，构建时更新
- **robots.txt**：配置爬虫规则，允许主要搜索引擎抓取，屏蔽管理页面和 API 路由
- **Canonical URL**：每个页面设置唯一 canonical URL，防止重复内容
- **Open Graph meta tags**：每页定制 og:title, og:description, og:image, og:url, og:type
- **Twitter Card meta tags**：每页配置 twitter:card, twitter:title, twitter:description, twitter:image
- **JSON-LD 结构化数据框架**：统一的 JSON-LD 注入组件，支持 WebSite, Organization, Article, FAQ, HowTo, BreadcrumbList, Product 等类型
- **Core Web Vitals 优化**：LCP < 2.5s, FID < 100ms, CLS < 0.1
- **自定义 404 页面**：品牌化 404 页面，含搜索建议和热门链接
- **301 重定向规则**：旧路径到新路径的映射配置

### 分析与监控

- **Google Analytics 4**：集成 GA4 gtag.js，配置页面浏览和事件追踪
- **Google Search Console**：站点验证、sitemap 提交、索引监控
- **事件追踪**：CTA 按钮点击、工具使用、Prompt 复制、外链点击

### On-Page SEO 规范

- **Title Tag 模板**：每页定制，格式 `{页面关键词} | Seedance - AI Video Generation`
- **Meta Description 模板**：每页定制，120-160 字符，含核心关键词和 CTA
- **Heading 层级规范**：每页 H1 唯一，H2/H3 覆盖目标关键词
- **内链策略**：Guide 页面作为 Hub，子页面交叉链接，每页至少 3 个内链
- **面包屑导航 Schema**：BreadcrumbList JSON-LD，所有子页面
- **图片 alt 文本规范**：所有图片 MUST 包含描述性 alt 文本，含关键词

### 关键词-页面映射

| 关键词 | 月搜索量 | 目标页面 |
|--------|---------|---------|
| seedance | 4,400 | Homepage |
| seedance ai | 1,300 | Homepage |
| seedance 1.0 | 2,400 | /versions |
| seedance 2.0 | Breakout | /guide |
| how to use seedance | 30 (KD 0) | /guide |
| seedance 1.0 free | 480 | /pricing |
| seedance api | 170 | /api |
| seedance pro | 390 | /versions |
| seedance price/pricing | 150 | /pricing |
| seedance prompt | 40 (KD 0) | /prompts |
| is seedance free | 10 (KD 0) | /faq |
| bytedance/seedance-v1-pro-i2v-480p | 1,600 | /api |

## 方法（Approach）

- `next-sitemap` 生成 sitemap.xml 和 robots.txt
- Next.js 15 Metadata API（`generateMetadata`）管理每页 meta tags
- 封装 `JsonLd` 通用组件，按页面类型注入不同 Schema
- GA4 通过 `gtag.js` 异步加载，封装 `analytics.ts` 工具函数
- Search Console 通过 HTML meta tag 或 DNS TXT 记录验证
- 内链通过组件化 `InternalLink` 实现，便于统一管理

## 阶段（Phase）

- Phase 1：sitemap、robots.txt、canonical URL、基础 meta tags、JSON-LD 框架、404 页面
- Phase 3：GA4 集成、Search Console、事件追踪、Core Web Vitals 深度优化、内链策略执行
