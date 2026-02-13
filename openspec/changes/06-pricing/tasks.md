# 任务清单：定价与免费使用方式页

## 定价数据结构

- [ ] 定义平台定价数据类型接口（`PlatformPricing`：platform, plans[], freeQuota, currency, url, region）
- [ ] 定义套餐数据类型接口（`PricingPlan`：name, price, credits, features[]）
- [ ] 创建定价数据文件 `src/data/pricing.ts`，包含全部 6 个平台的定价数据
- [ ] 定义竞品定价数据类型接口（`CompetitorPricing`：name, price, features[], seedanceAdvantage）
- [ ] 创建竞品定价数据，包含 Sora 2、Veo 3.1、Kling 的价格信息

## 平台价格对比表

- [ ] 创建价格对比表组件 `src/components/pricing/PlatformTable.tsx`
- [ ] 表格列：平台名称、价格范围、免费额度、适用地区、链接
- [ ] 价格显示支持 USD（$）和 CNY（¥）两种货币
- [ ] 表格行按价格从低到高排序（免费优先）
- [ ] 每行包含 \"前往平台\" 外链按钮（`target="_blank"`, `rel="noopener noreferrer"`）

## Free Methods 免费使用专区

- [ ] 创建免费使用专区组件 `src/components/pricing/FreeMethods.tsx`
- [ ] 设计醒目卡片样式，视觉优先级高于付费方案
- [ ] 汇总各平台免费额度：豆包（10 次/天）、Dreamina（新用户赠送）、即梦（新用户赠送）
- [ ] 每个免费方式包含：平台名称、免费额度、获取步骤（1-2 步）、链接
- [ ] 页面位置：置于价格对比表上方或页面最顶部

## 竞品价格对比

- [ ] 创建竞品对比组件 `src/components/pricing/CompetitorComparison.tsx`
- [ ] 对比表格：Seedance vs Sora 2 vs Veo 3.1 vs Kling
- [ ] 对比维度：月费、免费额度、视频质量、最大时长
- [ ] 视觉上突出 Seedance 的性价比优势（高亮或标注）
- [ ] 数据来源标注和更新日期显示

## 信用点计算器

- [ ] 创建简易计算器组件 `src/components/pricing/CreditCalculator.tsx`
- [ ] 输入：每月预计生成视频数量、平均视频时长、选择版本
- [ ] 输出：预计月度信用点消耗、推荐套餐、月度费用
- [ ] 或：提供链接到 `/tools/calculator` 完整计算器页面
- [ ] 计算器为客户端交互组件

## Schema 结构化数据

- [ ] 创建 Product + Offer JSON-LD 生成函数 `src/lib/schema/pricing-schema.ts`
- [ ] Product schema 描述 Seedance 产品
- [ ] Offer schema 包含各平台的价格信息（`priceCurrency`, `price`, `url`）
- [ ] 在页面 `<head>` 中注入 JSON-LD
- [ ] 验证 JSON-LD 通过 Google Rich Results Test

## 页面路由与布局

- [ ] 创建定价页面路由 `src/app/pricing/page.tsx`
- [ ] 页面结构：标题区 → Free Methods 专区 → 平台价格对比表 → 信用点计算器 → 竞品对比
- [ ] 页面标题突出 \"Free\" 关键词（如 \"Seedance Pricing & Free Options\"）

## SEO 元数据

- [ ] 配置页面 metadata：title 包含 \"Seedance Pricing\" 和 \"Free\" 关键词
- [ ] 配置 meta description（包含 \"free\"、\"price\"、\"pricing\" 等目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags
- [ ] 配置 canonical URL：`https://seedance.free/pricing`

## 响应式设计

- [ ] 桌面端：表格横向展示，Free Methods 卡片网格布局
- [ ] 移动端：表格切换为卡片堆叠，Free Methods 单列排列
- [ ] 计算器在移动端全宽显示
- [ ] 所有可交互元素满足最小触摸目标尺寸（44x44px）

## 性能与优化

- [ ] 定价数据 SSG 静态生成
- [ ] 计算器组件客户端懒加载
- [ ] 外链按钮使用 `rel="noopener noreferrer"` 安全属性
- [ ] Lighthouse Performance 评分目标 >= 90
