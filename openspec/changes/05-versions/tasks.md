# 任务清单：版本对比页

## 版本数据结构

- [ ] 定义版本数据类型接口（`SeedanceVersion`：name, codename, resolution, speed, audioSupport, credits, platforms, maxDuration, referenceInput, releaseDate, highlights, useCases）
- [ ] 创建版本数据文件 `src/data/versions.ts`，包含全部 6 个版本数据
- [ ] 定义对比维度枚举和显示配置
- [ ] 数据中标注每个版本的推荐标签（如 \"最受欢迎\"、\"性价比最高\"）

## 对比表组件

- [ ] 创建对比表组件 `src/components/versions/ComparisonTable.tsx`
- [ ] 桌面端：横向表格布局，版本为列，维度为行
- [ ] 表头固定（sticky header），横向滚动时版本名称始终可见
- [ ] 支持列高亮：鼠标悬停某列时整列高亮
- [ ] 对比维度行交替背景色提升可读性
- [ ] 布尔值维度（如音频支持）使用图标（✓/✗）展示

## 版本详细卡片

- [ ] 创建版本卡片组件 `src/components/versions/VersionCard.tsx`
- [ ] 每个版本卡片包含：版本名称、核心参数摘要、亮点列表、适用场景
- [ ] 卡片支持展开/折叠查看完整详情
- [ ] 卡片内包含 CTA 按钮（\"在 XX 平台使用\" 链接到对应平台）

## 决策流程图

- [ ] 创建决策流程组件 `src/components/versions/VersionPicker.tsx`
- [ ] 设计决策问题流程（3 步）：
  - 第 1 步：你的主要用途？（创意探索 / 商业制作 / API 集成）
  - 第 2 步：你的预算范围？（免费 / 低成本 / 不限）
  - 第 3 步：你对质量的要求？（够用就好 / 高质量 / 最高质量）
- [ ] 基于用户选择推荐 1-2 个最适合的版本
- [ ] 推荐结果包含版本名称、推荐理由、使用链接
- [ ] 支持 \"重新选择\" 回到第一步

## 版本时间线

- [ ] 创建时间线组件 `src/components/versions/VersionTimeline.tsx`
- [ ] 可视化展示各版本发布时间（水平或垂直时间线）
- [ ] 每个时间节点标注版本名称和关键改进
- [ ] 时间线支持响应式：桌面端水平，移动端垂直

## Schema 结构化数据

- [ ] 添加 Table 相关的结构化数据标记
- [ ] 在页面 `<head>` 中注入 JSON-LD
- [ ] 验证结构化数据通过 Google Rich Results Test

## 页面路由与布局

- [ ] 创建版本对比页面路由 `src/app/versions/page.tsx`
- [ ] 页面结构：标题区 → 对比表 → 版本卡片 → 决策流程图 → 时间线
- [ ] 页面内导航锚点（跳转到对比表/决策工具/时间线）

## SEO 元数据

- [ ] 配置页面 metadata：title 包含 \"Seedance Versions\" 和 \"1.0 Pro\" 等关键词
- [ ] 配置 meta description（包含目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags
- [ ] 配置 canonical URL：`https://seedance.free/versions`

## 响应式表格设计

- [ ] 桌面端（>= 1024px）：标准横向对比表格
- [ ] 平板端（768px - 1023px）：表格支持横向滚动，固定首列
- [ ] 移动端（< 768px）：切换为卡片式堆叠布局，每个版本一张卡片
- [ ] 移动端卡片支持左右滑动切换版本

## 性能与优化

- [ ] 版本数据 SSG 静态生成
- [ ] 决策流程图为客户端交互组件，懒加载
- [ ] 时间线组件视口内才加载动画
- [ ] Lighthouse Performance 评分目标 >= 90
