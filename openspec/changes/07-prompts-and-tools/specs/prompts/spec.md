# 规格说明：Prompt 库

> 变更类型：ADDED
> 领域：prompts
> 提案：07-prompts-and-tools

---

## REQ-PROMPT-001: Prompt 卡片展示

**描述**：Prompt 库页面 MUST 以卡片形式展示所有可用的 Prompt 模板。

### 场景：卡片内容展示

```
Given 用户访问 `/prompts` 页面
When 页面渲染完成
Then MUST 以网格布局展示 Prompt 卡片列表
  And 每张卡片 MUST 包含：标题、预览描述（截断至 2 行）、分类标签、版本兼容标签
  And 每张卡片 MUST 包含复制按钮
  And 卡片 SHOULD 显示该 Prompt 所属的标签（如 "cinematic"、"product shot"）
```

### 场景：高级 Prompt 锁定状态

```
Given Prompt 库中存在标记为 premium 的 Prompt
When 页面渲染该 Prompt 卡片
Then 高级 Prompt 卡片 MUST 显示锁定状态 UI（半透明遮罩 + 锁图标）
  And 锁定卡片 MUST 显示 "Coming Soon" 或类似标签
  And 锁定卡片的复制按钮 MUST 处于禁用状态
  And 锁定卡片 MAY 显示 Prompt 标题但 MUST NOT 显示完整 Prompt 内容
```

---

## REQ-PROMPT-002: 复制功能

**描述**：用户 MUST 能够一键复制 Prompt 文本到剪贴板。

### 场景：复制 Prompt 到剪贴板

```
Given 用户查看一张非锁定的 Prompt 卡片
When 用户点击复制按钮
Then MUST 将该 Prompt 的完整文本复制到系统剪贴板
  And 复制按钮 MUST 显示成功反馈（如图标变为勾选、文字变为 "Copied!"）
  And 成功反馈 SHOULD 在 2 秒后自动恢复为默认状态
  And 复制功能 MUST 使用 `navigator.clipboard.writeText()` API
```

### 场景：复制失败降级

```
Given 浏览器不支持 Clipboard API 或权限被拒绝
When 用户点击复制按钮
Then SHOULD 提供降级方案（如选中文本并提示用户手动复制）
  And MUST NOT 静默失败，MUST 向用户反馈操作结果
```

---

## REQ-PROMPT-003: 分类筛选

**描述**：Prompt 库 MUST 支持按分类浏览和筛选 Prompt。

### 场景：分类筛选交互

```
Given 用户访问 `/prompts` 页面
When 页面渲染完成
Then MUST 显示分类筛选栏，包含以下分类：E-commerce、Short Film、Music Video、Social Media、Product Demo
  And 默认显示全部分类（"All" 选中状态）
  And 用户点击某个分类后 MUST 仅显示该分类下的 Prompt 卡片
  And 筛选切换 MUST 无页面刷新（客户端过滤）
```

### 场景：筛选状态 URL 同步

```
Given 用户选择了某个分类筛选
When 筛选生效
Then 当前筛选状态 SHOULD 同步到 URL 参数（如 `?category=ecommerce`）
  And 用户通过 URL 参数直接访问时 MUST 自动应用对应筛选
  And 浏览器前进/后退 SHOULD 正确恢复筛选状态
```

---

## REQ-PROMPT-004: 搜索功能

**描述**：Prompt 库 MUST 提供搜索功能，支持按关键词查找 Prompt。

### 场景：关键词搜索

```
Given 用户在搜索框中输入关键词
When 输入内容变化
Then MUST 实时过滤 Prompt 列表，匹配标题和描述中包含关键词的 Prompt
  And 搜索 MUST 为前端模糊匹配，无需后端 API
  And 搜索结果为空时 MUST 显示 "未找到匹配的 Prompt" 提示
  And 搜索 SHOULD 支持与分类筛选组合使用
```

---

## REQ-PROMPT-005: 标签系统

**描述**：Prompt 库 SHOULD 支持标签系统，提供更细粒度的筛选维度。

### 场景：标签筛选

```
Given Prompt 卡片上显示标签
When 用户点击某个标签
Then MUST 筛选出所有包含该标签的 Prompt
  And 标签筛选 SHOULD 支持多选（AND 逻辑或 OR 逻辑）
  And 已选标签 MUST 有视觉上的选中状态
  And 标签 SHOULD 显示该标签下的 Prompt 数量
```

---

## REQ-PROMPT-006: 版本兼容性标记

**描述**：每个 Prompt MUST 标注其兼容的 Seedance 版本。

### 场景：版本标签展示

```
Given Prompt 卡片已渲染
When 用户查看卡片信息
Then 每张卡片 MUST 显示版本兼容标签（如 "1.0"、"2.0"、"Lite"）
  And 版本标签 MUST 使用不同颜色或样式区分
  And 用户 SHOULD 能够按版本筛选 Prompt
```

---

## REQ-PROMPT-007: SEO 元数据

**描述**：Prompt 库页面 MUST 配置针对 Prompt 关键词优化的 SEO 元数据。

### 场景：Prompt 库 meta tags

```
Given 搜索引擎爬虫访问 `/prompts`
When 解析页面 `<head>`
Then title MUST 包含 "Seedance" 和 "Prompt" 关键词
  And meta description MUST 包含 "prompt"、"library"、"template" 等目标关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/prompts`
  And MUST 包含 og:title、og:description
```

---

## REQ-PROMPT-008: 响应式布局

**描述**：Prompt 库 MUST 在不同设备上提供良好的浏览体验。

### 场景：多设备适配

```
Given 用户在不同设备上访问 `/prompts`
When 页面渲染完成
Then 桌面端（>= 1024px）MUST 以 3 列网格展示卡片
  And 平板端（768px - 1023px）MUST 以 2 列网格展示卡片
  And 移动端（< 768px）MUST 以单列展示卡片
  And 搜索框和筛选栏在移动端 MUST 全宽显示
  And 所有可交互元素 MUST 满足最小触摸目标尺寸（44x44px）
```
