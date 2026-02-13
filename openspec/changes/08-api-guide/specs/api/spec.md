# 规格说明：API 集成指南

> 变更类型：ADDED
> 领域：api
> 提案：08-api-guide

---

## REQ-API-001: 平台 Tab 切换

**描述**：API 指南页面 MUST 以 Tab 形式组织多平台内容，支持快速切换。

### 场景：Tab 展示与切换

```
Given 用户访问 `/api-guide` 页面
When 页面渲染完成
Then MUST 显示平台 Tab 切换栏，包含以下 Tab：fal.ai、Replicate、Volcano Engine
  And 默认激活第一个 Tab（fal.ai）
  And 用户点击 Tab 后 MUST 切换显示对应平台的内容
  And Tab 切换 MUST 无页面刷新，内容平滑过渡
  And 当前激活的 Tab MUST 有明确的视觉选中状态
```

### 场景：Tab 状态与 URL 同步

```
Given 用户切换了平台 Tab
When Tab 切换完成
Then 当前 Tab 状态 MUST 同步到 URL hash（如 `#fal-ai`、`#replicate`、`#volcano`）
  And 用户通过 URL hash 直接访问时 MUST 自动激活对应 Tab
  And 浏览器前进/后退 MUST 正确恢复 Tab 状态
```

### 场景：Tab 键盘可访问性

```
Given Tab 切换栏获得焦点
When 用户使用键盘操作
Then 左右箭头键 MUST 在 Tab 之间移动焦点
  And Enter 或 Space 键 MUST 激活当前焦点所在的 Tab
  And Tab 栏 MUST 使用正确的 ARIA 角色（`role="tablist"`、`role="tab"`、`role="tabpanel"`）
```

---

## REQ-API-002: 代码示例准确性

**描述**：所有代码示例 MUST 准确反映各平台的实际 API 调用方式。

### 场景：fal.ai 代码示例

```
Given 用户查看 fal.ai Tab 下的代码示例
When 代码示例渲染完成
Then MUST 提供以下端点的代码示例：
  - `fal-ai/seedance/text-to-video`
  - `fal-ai/seedance/image-to-video`
  - `fal-ai/seedance-lite`
  And 每个端点 MUST 提供 JavaScript、Python、cURL 三种语言的示例
  And 代码示例 MUST 包含完整的可运行代码（导入、认证、调用、结果处理）
  And API Key 占位符 MUST 使用 `YOUR_API_KEY` 或环境变量形式
```

### 场景：Replicate 代码示例

```
Given 用户查看 Replicate Tab 下的代码示例
When 代码示例渲染完成
Then MUST 提供以下模型的代码示例：
  - `bytedance/seedance-v1-pro-i2v-480p`
  - `bytedance/seedance-v1-pro-i2v-1080p`
  - `bytedance/seedance-1-pro`
  - `bytedance/seedance-1-pro-fast`
  And 每个模型 MUST 提供 JavaScript、Python、cURL 三种语言的示例
  And 代码 MUST 包含异步轮询逻辑（Replicate 的 prediction 状态查询）
```

### 场景：Volcano Engine 代码示例

```
Given 用户查看 Volcano Engine Tab 下的代码示例
When 代码示例渲染完成
Then MUST 提供 Seedance 2.0 REST API 的代码示例
  And MUST 提供 JavaScript、Python、cURL 三种语言的示例
  And 代码 MUST 包含 AK/SK 认证签名逻辑
  And 代码 MUST 覆盖 Seedance 2.0 的完整功能集
```

---

## REQ-API-003: 语法高亮

**描述**：所有代码示例 MUST 使用语法高亮渲染，提升可读性。

### 场景：语法高亮展示

```
Given 代码示例已渲染
When 用户查看代码块
Then 代码 MUST 使用 Shiki 进行语法高亮
  And MUST 支持以下语言的高亮：JavaScript、Python、bash（cURL）、JSON
  And 语法高亮 MUST 在构建时完成（SSG 兼容，不依赖客户端 JS）
  And 代码块 MUST 使用等宽字体
  And 代码块 SHOULD 显示语言标签（如 "JavaScript"、"Python"、"cURL"）
```

### 场景：代码块内语言切换

```
Given 代码示例区域已渲染
When 用户需要查看不同语言的示例
Then 每个代码示例区域 MUST 提供语言切换 Tab（JS / Python / cURL）
  And 语言切换 MUST 无页面刷新
  And 用户选择的语言偏好 SHOULD 在同一页面内保持一致（切换一处，全部同步）
```

---

## REQ-API-004: 复制功能

**描述**：所有代码块 MUST 提供一键复制功能。

### 场景：代码复制

```
Given 代码块已渲染
When 用户点击代码块的复制按钮
Then MUST 将当前显示的代码文本复制到系统剪贴板
  And 复制按钮 MUST 位于代码块右上角
  And 复制后 MUST 显示成功反馈（图标变化或文字提示）
  And 成功反馈 SHOULD 在 2 秒后自动恢复
  And 复制的内容 MUST 为纯文本（不含 HTML 标签或高亮标记）
```

---

## REQ-API-005: 参数说明表

**描述**：每个平台 MUST 提供完整的 API 参数说明表。

### 场景：参数表内容

```
Given 用户查看某平台的参数说明
When 参数表渲染完成
Then 参数表 MUST 包含以下列：参数名、类型、是否必填、默认值、说明
  And 参数名 MUST 使用代码字体（monospace）显示
  And 必填参数 MUST 使用醒目标记（红色星号或 "Required" 标签）
  And 参数类型 MUST 使用准确的数据类型描述（string、number、boolean、enum 等）
  And 枚举类型参数 MUST 列出所有可选值
```

### 场景：参数表响应式

```
Given 用户在移动端查看参数说明表
When 视口宽度 < 768px
Then 参数表 MUST 支持横向滚动
  Or 参数表 MUST 切换为卡片式堆叠布局
  And 参数名列 SHOULD 在横向滚动时保持固定
```

---

## REQ-API-006: 错误排查文档

**描述**：每个平台 MUST 提供常见错误的排查指南。

### 场景：错误排查展示

```
Given 用户查看某平台的错误排查章节
When 章节渲染完成
Then MUST 以可折叠面板（Accordion）形式展示错误列表
  And 每个错误项 MUST 包含：错误码、错误描述、可能原因、解决方案
  And 错误码 MUST 使用代码字体显示
  And 解决方案 MUST 包含具体的操作步骤
  And MUST 覆盖以下常见错误类型：认证失败（401/403）、限流（429）、参数错误（400）、服务错误（500）
```

---

## REQ-API-007: Schema 结构化数据

**描述**：API 指南页面 MUST 包含 Article + TechArticle 结构化数据。

### 场景：TechArticle JSON-LD

```
Given 搜索引擎爬虫访问 `/api-guide`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 TechArticle schema
  And TechArticle MUST 包含 `headline`、`description`、`author`、`datePublished` 属性
  And TechArticle MUST 包含 `proficiencyLevel` 属性（值为 "Beginner" 或 "Intermediate"）
  And TechArticle SHOULD 包含 `dependencies` 属性（列出所需 SDK）
  And JSON-LD MUST 通过 Google Rich Results Test 验证无错误
```

---

## REQ-API-008: SEO 元数据

**描述**：API 指南页面 MUST 配置针对开发者关键词优化的 SEO 元数据。

### 场景：API 指南 meta tags

```
Given 搜索引擎爬虫访问 `/api-guide`
When 解析页面 `<head>`
Then title MUST 包含 "Seedance" 和 "API" 关键词
  And title SHOULD 包含平台名称（如 "fal.ai, Replicate"）
  And meta description MUST 包含 "api"、"integration"、"developer" 等目标关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/api-guide`
  And MUST 包含 og:title、og:description
```

---

## REQ-API-009: 响应式设计

**描述**：API 指南页面 MUST 在移动端提供良好的阅读和交互体验。

### 场景：移动端代码块

```
Given 用户在移动端（视口宽度 < 768px）查看代码示例
When 代码块渲染完成
Then 代码块 MUST 支持横向滚动
  And 代码块字体大小 SHOULD 不小于 13px
  And 复制按钮 MUST 满足最小触摸目标尺寸（44x44px）
  And 语言切换 Tab MUST 可横向滚动（如 Tab 数量超出屏幕宽度）
```

### 场景：移动端 Tab 切换

```
Given 用户在移动端查看平台 Tab
When Tab 栏渲染完成
Then Tab 栏 MUST 全宽显示
  And 如 Tab 标签超出屏幕宽度，MUST 支持横向滚动
  And 当前激活 Tab SHOULD 自动滚动到可视区域
```
