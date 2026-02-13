# 规格说明：完整指南页

> 变更类型：ADDED
> 领域：guide
> 提案：03-guide

---

## REQ-GUIDE-001: MDX 内容渲染

**描述**：指南页 MUST 基于 MDX 格式内容进行渲染，支持富文本和自定义组件。

### 场景：MDX 内容正确渲染

```
Given 用户访问 `/guide` 页面
When 页面渲染完成
Then MUST 正确渲染 MDX 内容中的所有 Markdown 元素（标题、段落、列表、表格、代码块）
  And 图片 MUST 通过 `next/image` 组件渲染（非原生 `<img>` 标签）
  And 内部链接 MUST 通过 `next/link` 组件渲染
  And GFM 表格 MUST 正确渲染为 HTML `<table>` 结构
  And 标题（h2, h3）MUST 自动生成 `id` 属性用于锚点定位
```

### 场景：MDX 静态生成

```
Given 项目执行构建命令
When MDX 内容编译完成
Then 指南页 MUST 以 SSG 方式静态生成
  And 构建产物 MUST 包含完整的 HTML 内容（非客户端渲染）
  And 页面 MUST 无需 JavaScript 即可显示主要内容
```

---

## REQ-GUIDE-002: TOC 目录导航

**描述**：指南页 MUST 提供目录导航，支持自动高亮和平滑滚动。

### 场景：桌面端 TOC 显示

```
Given 用户在桌面端（视口宽度 >= 1024px）访问 `/guide`
When 页面渲染完成
Then MUST 在内容左侧显示 TOC 目录导航
  And TOC MUST 为 sticky 定位，随页面滚动保持可见
  And TOC MUST 列出所有 h2 和 h3 级别的标题
  And h3 标题 MUST 以缩进形式显示在对应 h2 下方
```

### 场景：TOC 自动高亮

```
Given 用户正在阅读指南页内容
When 用户滚动页面使某个段落进入视口
Then TOC 中对应的目录项 MUST 自动高亮
  And 高亮 MUST 使用 Intersection Observer API 实现
  And 同一时间 MUST 只有一个目录项处于高亮状态
  And 高亮切换 SHOULD 有平滑过渡效果
```

### 场景：TOC 点击导航

```
Given TOC 目录导航可见
When 用户点击某个目录项
Then 页面 MUST 平滑滚动到对应的内容段落
  And URL hash SHOULD 更新为对应标题的 id
  And 滚动后目标段落 MUST 位于视口顶部（考虑 Header 高度偏移）
```

### 场景：移动端 TOC

```
Given 用户在移动端（视口宽度 < 768px）访问 `/guide`
When 页面渲染完成
Then 左侧 TOC 栏 MUST 隐藏
  And MUST 提供可展开的 TOC 下拉菜单（位于内容顶部）
When 用户点击 TOC 下拉触发器
Then 目录列表 MUST 展开显示
  And 点击目录项后 MUST 滚动到对应段落并收起菜单
```

---

## REQ-GUIDE-003: 内容分段与内部 CTA

**描述**：指南内容 MUST 按逻辑分段，每段末尾 SHOULD 包含跳转到详情页的 CTA。

### 场景：内容分段结构

```
Given 用户访问 `/guide`
When 页面内容渲染完成
Then 内容 MUST 包含以下逻辑段落（按顺序）：
  - What Is Seedance
  - Versions（版本介绍）
  - Access Methods（访问方式）
  - Phone Registration（手机注册）
  - Prompts（提示词技巧）
  - API（API 使用）
  And 每个段落 MUST 使用语义化 `<section>` 标签包裹
```

### 场景：段落末尾 CTA

```
Given 用户阅读到某个内容段落的末尾
When CTA 区域可见
Then CTA MUST 包含引导文案和链接
  And "Versions" 段落 CTA MUST 链接到 `/versions`
  And "Access Methods" 段落 CTA MUST 链接到 `/register`
  And "Phone Registration" 段落 CTA MUST 链接到 `/register`
  And "Prompts" 段落 CTA MUST 链接到 `/prompts`
  And "API" 段落 CTA MUST 链接到 `/api`
  And CTA 样式 MUST 与正文内容有视觉区分
```

---

## REQ-GUIDE-004: 代码块语法高亮

**描述**：指南页中的代码块 MUST 支持语法高亮和复制功能。

### 场景：语法高亮显示

```
Given 指南内容中包含代码块
When 代码块渲染完成
Then 代码 MUST 根据指定语言进行语法高亮着色
  And MUST 支持 Python、JavaScript、cURL 语言的高亮
  And 亮色主题和暗色主题 MUST 各有对应的高亮配色方案
  And 代码块 MUST 显示语言标识标签
```

### 场景：代码复制功能

```
Given 代码块已渲染
When 用户点击代码块右上角的复制按钮
Then 代码内容 MUST 复制到用户剪贴板
  And 按钮 MUST 显示 "已复制" 反馈状态
  And 反馈状态 SHOULD 在 2 秒后恢复为默认图标
  And 复制操作 MUST 使用 Clipboard API（`navigator.clipboard.writeText`）
```

### 场景：代码块可访问性

```
Given 代码块已渲染
When 屏幕阅读器读取代码块
Then 代码块 MUST 使用 `<pre><code>` 语义化标签
  And 复制按钮 MUST 包含 `aria-label` 描述其功能
  And 代码块 SHOULD 可通过键盘 Tab 聚焦
```

---

## REQ-GUIDE-005: 阅读进度条

**描述**：指南页 SHOULD 在页面顶部显示阅读进度条。

### 场景：进度条显示与更新

```
Given 用户访问 `/guide` 页面
When 用户开始滚动页面
Then 页面顶部（Header 下方）MUST 显示水平进度条
  And 进度条宽度 MUST 反映当前阅读进度百分比（0% - 100%）
  And 进度条 MUST 随滚动实时更新
  And 进度条动画 SHOULD 平滑过渡
```

### 场景：进度条在页面顶部时隐藏

```
Given 用户位于页面顶部（未开始滚动）
When 进度为 0%
Then 进度条 MAY 隐藏或显示为空状态
```

---

## REQ-GUIDE-006: Schema 结构化数据

**描述**：指南页 MUST 包含 Article 和 HowTo 结构化数据。

### 场景：Article Schema

```
Given 搜索引擎爬虫访问 `/guide`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 Article schema
  And Article MUST 包含 `headline`、`author`、`datePublished`、`dateModified` 属性
  And Article SHOULD 包含 `image` 属性
  And `datePublished` 和 `dateModified` MUST 为 ISO 8601 格式
```

### 场景：HowTo Schema

```
Given 搜索引擎爬虫访问 `/guide`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 HowTo schema
  And HowTo MUST 包含 `name` 属性
  And HowTo MUST 包含 `step` 数组，每个 step 对应一个操作段落
  And 每个 step MUST 包含 `name` 和 `text` 属性
  And JSON-LD MUST 通过 Google Rich Results Test 验证
```

---

## REQ-GUIDE-007: 广告位预留

**描述**：指南页 SHOULD 预留 AdSense 广告位。

### 场景：广告位容器

```
Given 指南页内容渲染完成
When 广告位区域可见
Then MUST 在文章约 50% 位置预留一个广告位容器
  And MUST 在文章底部预留一个广告位容器
  And 广告位容器 MUST 设置最小高度（避免广告加载时内容跳动）
  And 广告位 MUST 使用 `<aside>` 标签并标注 `role="complementary"`
```

### 场景：无广告时的处理

```
Given 广告位容器已渲染
  And 当前无广告内容填充
When 页面显示
Then 广告位容器 SHOULD 优雅折叠（高度归零）
  And MUST NOT 显示空白占位区域影响阅读体验
```

---

## REQ-GUIDE-008: 指南页 SEO 元数据

**描述**：指南页 MUST 配置针对目标关键词优化的 SEO 元数据。

### 场景：指南页 meta tags

```
Given 搜索引擎爬虫访问 `/guide`
When 解析页面 `<head>`
Then title MUST 包含 "How to Use Seedance" 关键词
  And meta description MUST 包含 "seedance"、"video generator" 等目标关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/guide`
  And MUST 包含 og:title、og:description、og:image
```

---

## REQ-GUIDE-009: 移动端响应式

**描述**：指南页 MUST 在移动端提供良好的阅读体验。

### 场景：移动端布局适配

```
Given 用户在移动端（视口宽度 < 768px）访问 `/guide`
When 页面渲染完成
Then 内容 MUST 以全宽单列布局显示
  And 左侧 TOC 栏 MUST 隐藏（转为顶部下拉菜单）
  And 代码块 MUST 支持水平滚动（不溢出视口）
  And 表格 MUST 支持水平滚动
  And 图片 MUST 自适应容器宽度
  And 段落文字 MUST 无需缩放即可阅读（最小字号 16px）
```

### 场景：移动端 CTA 可点击性

```
Given 用户在移动端阅读指南
When 段落末尾 CTA 可见
Then CTA 按钮/链接 MUST 满足最小触摸目标尺寸（44x44px）
  And CTA MUST 与周围内容有足够间距
```
