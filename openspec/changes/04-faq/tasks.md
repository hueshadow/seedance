# 任务清单：FAQ 常见问题页

## FAQ 数据结构

- [ ] 定义 FAQ 数据类型接口（`FAQItem`：question, answer, category, internalLinks）
- [ ] 创建 FAQ 数据文件 `src/data/faq.ts`，包含全部 10 个问答对
- [ ] 定义分类枚举：通用（General）、价格（Pricing）、技术（Technical）、使用方法（Usage）
- [ ] 每个答案编写 2-4 句话，包含至少一个内链

## Accordion 组件

- [ ] 创建 Accordion 组件 `src/components/faq/Accordion.tsx`
- [ ] 使用 `<details>/<summary>` 原生 HTML 标签实现语义化
- [ ] 实现展开/折叠动画（CSS transition on `max-height` 或 `grid-template-rows`）
- [ ] 支持单个展开模式（展开一个时自动折叠其他）和多个同时展开模式
- [ ] 展开状态图标旋转动画（箭头/加号切换）
- [ ] 键盘导航支持：Enter/Space 切换展开状态，上下箭头在问题间移动

## FAQPage Schema JSON-LD

- [ ] 创建 FAQPage JSON-LD 生成函数 `src/lib/schema/faq-schema.ts`
- [ ] 从 FAQ 数据自动生成符合 schema.org/FAQPage 规范的 JSON-LD
- [ ] 每个问答对映射为 `Question` 类型 + `acceptedAnswer`（`Answer` 类型）
- [ ] 在页面 `<head>` 中通过 `<script type="application/ld+json">` 注入
- [ ] 验证 JSON-LD 通过 Google Rich Results Test

## 答案内链

- [ ] \"Is Seedance free?\" → 内链到 `/pricing`
- [ ] \"Is Seedance open source?\" → 内链到 `/guide`
- [ ] \"Does Seedance have audio?\" → 内链到 `/versions`
- [ ] \"How to use Seedance?\" → 内链到 `/guide`
- [ ] \"What is Seedance?\" → 内链到 `/guide`
- [ ] \"Is Seedance censored?\" → 内链到 `/guide`
- [ ] \"Do Seedance videos have audio?\" → 内链到 `/versions`
- [ ] \"Can I use Seedance for commercial projects?\" → 内链到 `/pricing`
- [ ] \"What's the maximum video length?\" → 内链到 `/versions`
- [ ] \"Do I need a Chinese phone number?\" → 内链到 `/register`

## 搜索与筛选功能

- [ ] 创建搜索框组件 `src/components/faq/FAQSearch.tsx`
- [ ] 实现实时搜索过滤（基于问题文本模糊匹配）
- [ ] 创建分类筛选标签组件 `src/components/faq/FAQFilter.tsx`
- [ ] 分类标签：全部 / 通用 / 价格 / 技术 / 使用方法
- [ ] 搜索和筛选可组合使用
- [ ] 无匹配结果时显示友好提示

## 页面路由与布局

- [ ] 创建 FAQ 页面路由 `src/app/faq/page.tsx`
- [ ] 页面标题区域：h1 标题 + 简短描述
- [ ] 搜索框置于标题下方
- [ ] 分类筛选标签置于搜索框下方
- [ ] FAQ 列表主体区域

## SEO 元数据

- [ ] 配置页面 metadata：title 包含 \"Seedance FAQ\" 关键词
- [ ] 配置 meta description（包含目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags（og:title, og:description）
- [ ] 配置 canonical URL：`https://seedance.free/faq`

## 响应式布局

- [ ] 桌面端：FAQ 列表居中，最大宽度限制
- [ ] 移动端：全宽布局，搜索框和筛选标签堆叠显示
- [ ] 触摸目标满足最小 44x44px 尺寸
- [ ] Accordion 展开区域在移动端有足够内边距

## 性能与可访问性

- [ ] FAQ 页面 SSG 静态生成
- [ ] 搜索/筛选为纯客户端交互，不阻塞首屏渲染
- [ ] Accordion 组件满足 ARIA 规范（`aria-expanded`, `aria-controls`）
- [ ] 键盘可完全操作（Tab 导航、Enter 展开）
- [ ] Lighthouse Performance 评分目标 >= 90
