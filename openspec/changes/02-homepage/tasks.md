# 任务清单：首页

## Hero 区域

- [ ] 创建 Hero 组件 `src/components/home/Hero.tsx`
- [ ] 实现主标题 "The Complete Seedance Resource for Creators & Developers"（`<h1>` 标签）
- [ ] 实现副标题描述文案
- [ ] 实现主 CTA 按钮 "Start Using Seedance →"（链接到即梦平台）
- [ ] 实现次 CTA 按钮 "Read the Guide"（链接到 `/guide`）
- [ ] Hero 区域响应式布局（移动端文字居中，桌面端左对齐）

## 快速导航卡片

- [ ] 创建 NavigationCards 组件 `src/components/home/NavigationCards.tsx`
- [ ] 实现 Guide 卡片（图标 + 标题 + 描述，链接到 `/guide`）
- [ ] 实现 Tools 卡片（链接到 `/tools`）
- [ ] 实现 API 卡片（链接到 `/api`）
- [ ] 实现 Register 卡片（链接到 `/register`）
- [ ] 卡片 hover 效果和焦点状态
- [ ] 响应式网格布局（移动端 1 列，平板 2 列，桌面 2x2）

## 版本状态指示器

- [ ] 创建 VersionBadge 组件 `src/components/home/VersionBadge.tsx`
- [ ] 显示 "Seedance 2.0" 版本号
- [ ] 显示 "Available on Jimeng" 状态标签
- [ ] 链接到 `/versions` 页面

## 竞品对比摘要表

- [ ] 创建对比数据文件 `src/data/comparison.ts`
- [ ] 创建 ComparisonTable 组件 `src/components/home/ComparisonTable.tsx`
- [ ] 实现对比表格：Seedance 2.0 vs Sora 2 vs Veo 3.1 vs Kling 2.0
- [ ] 对比维度：最大时长、分辨率、价格区间、可用性
- [ ] 表格响应式处理（移动端水平滚动或卡片式布局）
- [ ] "查看详细对比" 链接

## 最新博客文章

- [ ] 创建 LatestPosts 组件 `src/components/home/LatestPosts.tsx`
- [ ] 展示最新 3 篇文章卡片（标题、摘要、日期）
- [ ] "查看全部文章 →" 链接到 `/blog`
- [ ] 文章卡片响应式布局

## Schema 结构化数据

- [ ] 在首页添加 Organization JSON-LD（name, url, logo, sameAs）
- [ ] 在首页添加 WebSite JSON-LD（含 SearchAction）
- [ ] 验证结构化数据通过 Google Rich Results Test

## SEO 元数据

- [ ] 配置首页 metadata：title "Seedance - The Complete AI Video Generation Resource"
- [ ] 配置 meta description（包含目标关键词）
- [ ] 配置 Open Graph tags（og:title, og:description, og:image）
- [ ] 配置 Twitter Card tags

## 性能优化

- [ ] 所有图片使用 `next/image` 组件
- [ ] Hero 区域图片设置 `priority` 属性
- [ ] Lighthouse Performance 评分目标 >= 90
- [ ] LCP（Largest Contentful Paint）目标 < 2.5s
