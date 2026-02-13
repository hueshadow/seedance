# 规格说明：首页

> 变更类型：ADDED
> 领域：homepage
> 提案：02-homepage

---

## REQ-HOME-001: Hero 区域

**描述**：首页 MUST 包含 Hero 区域，清晰传达网站价值主张。

### 场景：Hero 区域显示

```
Given 用户访问首页 `/`
When 页面渲染完成
Then MUST 显示主标题（`<h1>`）："The Complete Seedance Resource for Creators & Developers"
  And MUST 显示副标题描述文案
  And MUST 显示主 CTA 按钮 "Start Using Seedance →"
  And MUST 显示次 CTA 按钮 "Read the Guide"
  And 主 CTA 按钮 MUST 链接到即梦平台外部地址
  And 次 CTA 按钮 MUST 链接到 `/guide`
```

### 场景：Hero 区域可访问性

```
Given Hero 区域已渲染
When 用户使用键盘导航
Then 两个 CTA 按钮 MUST 可通过 Tab 键聚焦
  And 按钮 MUST 具有清晰的焦点指示器
  And 外部链接 SHOULD 包含视觉提示或 `aria-label` 说明将打开新窗口
```

---

## REQ-HOME-002: 快速导航卡片

**描述**：首页 MUST 提供快速导航卡片，引导用户进入核心功能页面。

### 场景：导航卡片显示与链接

```
Given 用户访问首页
When 导航卡片区域可见
Then MUST 显示 4 张功能卡片：Guide, Tools, API, Register
  And 每张卡片 MUST 包含图标、标题和简短描述
  And Guide 卡片 MUST 链接到 `/guide`
  And Tools 卡片 MUST 链接到 `/tools`
  And API 卡片 MUST 链接到 `/api`
  And Register 卡片 MUST 链接到 `/register`
```

### 场景：导航卡片响应式布局

```
Given 用户在移动端（视口宽度 < 768px）访问
When 导航卡片区域渲染
Then 卡片 MUST 以单列垂直排列

Given 用户在桌面端（视口宽度 >= 1024px）访问
When 导航卡片区域渲染
Then 卡片 MUST 以 2x2 网格布局排列
```

### 场景：卡片交互状态

```
Given 导航卡片已渲染
When 用户将鼠标悬停在卡片上
Then 卡片 SHOULD 显示 hover 视觉反馈（如阴影变化或边框高亮）
When 用户通过键盘聚焦卡片
Then 卡片 MUST 显示清晰的焦点指示器
```

---

## REQ-HOME-003: 版本状态指示器

**描述**：首页 SHOULD 显示 Seedance 最新版本状态。

### 场景：版本信息显示

```
Given 用户访问首页
When 版本状态指示器可见
Then MUST 显示当前最新版本号 "Seedance 2.0"
  And MUST 显示可用性状态 "Available on Jimeng"
  And 指示器 MUST 链接到 `/versions` 页面
  And 状态标签 SHOULD 使用视觉徽章样式（如绿色表示可用）
```

---

## REQ-HOME-004: 竞品对比摘要表

**描述**：首页 MUST 包含 AI 视频生成模型对比摘要表。

### 场景：对比表格内容

```
Given 用户访问首页
When 对比表格区域可见
Then MUST 显示以下模型的对比数据：Seedance 2.0, Sora 2, Veo 3.1, Kling 2.0
  And 对比维度 MUST 包含：最大视频时长、输出分辨率、价格区间、可用性状态
  And 数据 MUST 准确反映各模型的最新公开信息
  And SHOULD 提供 "查看详细对比" 链接
```

### 场景：对比表格响应式

```
Given 用户在移动端访问
When 对比表格渲染
Then 表格 MUST 支持水平滚动
  Or 表格 MAY 转换为卡片式布局
  And 表格内容 MUST 保持可读性
```

### 场景：对比表格可访问性

```
Given 对比表格已渲染
When 屏幕阅读器读取表格
Then 表格 MUST 使用语义化 `<table>` 标签
  And MUST 包含 `<caption>` 或 `aria-label` 描述表格用途
  And 表头 MUST 使用 `<th>` 标签并设置 `scope` 属性
```

---

## REQ-HOME-005: 最新博客文章

**描述**：首页 SHOULD 展示最新博客文章列表。

### 场景：博客文章列表显示

```
Given 用户访问首页
  And 博客中存在已发布的文章
When 最新文章区域可见
Then MUST 显示最新 3 篇博客文章
  And 每篇文章 MUST 显示标题、摘要和发布日期
  And 文章标题 MUST 链接到对应的博客文章页面
  And MUST 显示 "查看全部文章 →" 链接到 `/blog`
```

### 场景：无博客文章时的处理

```
Given 用户访问首页
  And 博客中暂无已发布的文章
When 最新文章区域渲染
Then 该区域 MAY 隐藏
  Or MAY 显示占位内容
```

---

## REQ-HOME-006: Schema 结构化数据

**描述**：首页 MUST 包含 Organization 和 WebSite 结构化数据。

### 场景：Organization Schema

```
Given 搜索引擎爬虫访问首页
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 Organization schema
  And Organization MUST 包含 `name`、`url`、`logo` 属性
  And Organization SHOULD 包含 `sameAs` 属性（社交媒体链接）
  And JSON-LD MUST 通过 Google Rich Results Test 验证
```

### 场景：WebSite Schema 含 SearchAction

```
Given 搜索引擎爬虫访问首页
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 WebSite schema
  And WebSite MUST 包含 `name`、`url` 属性
  And WebSite SHOULD 包含 `potentialAction` 类型为 `SearchAction`
  And SearchAction MUST 定义 `query-input` 参数
```

---

## REQ-HOME-007: 首页 SEO 元数据

**描述**：首页 MUST 配置完整的 SEO 元数据。

### 场景：首页 meta tags

```
Given 搜索引擎爬虫访问首页 `/`
When 解析页面 `<head>`
Then title MUST 为 "Seedance - The Complete AI Video Generation Resource"
  And meta description MUST 包含目标关键词 "seedance" 和 "ai video generation"
  And meta description 长度 MUST 在 120-160 字符之间
  And MUST 包含 og:title、og:description、og:image、og:url
  And MUST 包含 twitter:card（值为 "summary_large_image"）
  And canonical URL MUST 为 `https://seedance.free/`
```

---

## REQ-HOME-008: 首页性能

**描述**：首页 MUST 满足 Core Web Vitals 性能指标。

### 场景：Core Web Vitals 达标

```
Given 首页在 Lighthouse 中进行性能测试
When 测试完成
Then LCP（Largest Contentful Paint）MUST < 2.5 秒
  And FID（First Input Delay）MUST < 100 毫秒
  And CLS（Cumulative Layout Shift）MUST < 0.1
  And Lighthouse Performance 评分 SHOULD >= 90
```

### 场景：图片优化

```
Given 首页包含图片资源
When 图片渲染
Then 所有图片 MUST 使用 `next/image` 组件
  And 首屏图片 MUST 设置 `priority` 属性
  And 非首屏图片 MUST 启用懒加载
  And 图片 MUST 提供 `alt` 属性描述
```
