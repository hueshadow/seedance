# 规格说明：FAQ 常见问题页

> 变更类型：ADDED
> 领域：faq
> 提案：04-faq

---

## REQ-FAQ-001: Accordion 手风琴交互

**描述**：FAQ 页面 MUST 以手风琴（Accordion）形式展示问答列表，支持展开/折叠交互。

### 场景：Accordion 默认状态

```
Given 用户访问 `/faq` 页面
When 页面渲染完成
Then 所有 FAQ 问题 MUST 以折叠状态显示
  And 每个问题 MUST 显示完整问题文本
  And 每个问题 MUST 包含展开/折叠状态指示图标（箭头或加号）
  And 问题列表 MUST 按预定义顺序排列
```

### 场景：展开单个问题

```
Given FAQ 列表已渲染且所有问题处于折叠状态
When 用户点击某个问题
Then 该问题 MUST 展开显示对应答案内容
  And 展开/折叠图标 MUST 切换为展开状态（旋转或变形）
  And 展开过程 SHOULD 有平滑动画过渡
  And 答案内容 MUST 支持富文本（链接、加粗等）
```

### 场景：折叠已展开的问题

```
Given 某个 FAQ 问题处于展开状态
When 用户再次点击该问题
Then 该问题 MUST 折叠隐藏答案内容
  And 图标 MUST 恢复为折叠状态
  And 折叠过程 SHOULD 有平滑动画过渡
```

### 场景：键盘导航

```
Given FAQ 列表已渲染
When 用户使用键盘操作
Then 用户 MUST 能通过 Tab 键在问题间导航
  And 按 Enter 或 Space 键 MUST 切换当前聚焦问题的展开/折叠状态
  And 每个问题触发器 MUST 包含 `aria-expanded` 属性反映当前状态
  And 每个问题触发器 MUST 包含 `aria-controls` 指向对应答案面板的 id
  And 答案面板 MUST 包含 `role="region"` 和 `aria-labelledby` 指向问题的 id
```

---

## REQ-FAQ-002: FAQPage Schema 结构化数据

**描述**：FAQ 页面 MUST 包含 FAQPage Schema 结构化数据，以获取 Google 搜索富摘要展示。

### 场景：FAQPage JSON-LD 输出

```
Given 搜索引擎爬虫访问 `/faq`
When 解析页面 HTML
Then MUST 包含 `<script type="application/ld+json">` 标签
  And JSON-LD 的 `@type` MUST 为 `FAQPage`
  And `mainEntity` MUST 为数组，包含所有 FAQ 问答对
  And 每个问答对的 `@type` MUST 为 `Question`
  And 每个 `Question` MUST 包含 `name`（问题文本）和 `acceptedAnswer` 属性
  And `acceptedAnswer` 的 `@type` MUST 为 `Answer`
  And `acceptedAnswer` MUST 包含 `text`（答案纯文本）属性
```

### 场景：Schema 数据与页面内容一致

```
Given FAQ 页面已渲染
When 对比 JSON-LD 数据与页面可见内容
Then JSON-LD 中的问题文本 MUST 与页面显示的问题文本完全一致
  And JSON-LD 中的答案文本 MUST 与页面显示的答案内容语义一致
  And JSON-LD MUST 通过 Google Rich Results Test 验证无错误
```

---

## REQ-FAQ-003: 答案内链

**描述**：每个 FAQ 答案 MUST 包含至少一个指向站内相关页面的内部链接。

### 场景：答案中的内部链接

```
Given 用户展开某个 FAQ 问题查看答案
When 答案内容渲染完成
Then 答案中 MUST 包含至少一个内部链接（`<a>` 标签指向站内页面）
  And 内部链接 MUST 使用 `next/link` 组件渲染
  And 链接文本 MUST 具有描述性（非 \"点击这里\" 等泛化文案）
  And 链接 MUST 在视觉上与普通文本有明显区分（颜色、下划线）
```

### 场景：内链目标页面映射

```
Given FAQ 数据已定义
When 渲染答案内容
Then \"Is Seedance free?\" 的答案 MUST 包含指向 `/pricing` 的链接
  And \"How to use Seedance?\" 的答案 MUST 包含指向 `/guide` 的链接
  And \"Does Seedance have audio?\" 的答案 MUST 包含指向 `/versions` 的链接
  And \"What's the maximum video length?\" 的答案 MUST 包含指向 `/versions` 的链接
  And \"Do I need a Chinese phone number?\" 的答案 MUST 包含指向 `/register` 的链接
  And \"Can I use Seedance for commercial projects?\" 的答案 MUST 包含指向 `/pricing` 的链接
```

---

## REQ-FAQ-004: 搜索与筛选功能

**描述**：FAQ 页面 SHOULD 提供搜索和分类筛选功能，帮助用户快速定位问题。

### 场景：搜索过滤

```
Given FAQ 页面已渲染且搜索框可见
When 用户在搜索框中输入关键词
Then FAQ 列表 MUST 实时过滤，仅显示问题文本包含关键词的条目
  And 过滤 MUST 为大小写不敏感匹配
  And 过滤 SHOULD 支持模糊匹配（部分词匹配）
  And 过滤结果更新 MUST 无需页面刷新（客户端实时过滤）
  And 搜索框 MUST 包含清除按钮
```

### 场景：分类筛选

```
Given FAQ 页面已渲染且分类筛选标签可见
When 用户点击某个分类标签
Then FAQ 列表 MUST 仅显示属于该分类的问题
  And 当前选中的分类标签 MUST 有视觉高亮状态
  And MUST 提供 \"全部\" 标签用于重置筛选
  And 分类标签 MUST 包含：全部、通用、价格、技术、使用方法
```

### 场景：搜索与筛选组合

```
Given 用户已选择某个分类筛选
When 用户同时在搜索框中输入关键词
Then 列表 MUST 同时满足分类筛选和搜索关键词两个条件
  And 结果为两个条件的交集
```

### 场景：无匹配结果

```
Given 用户输入了搜索关键词或选择了分类
When 没有任何 FAQ 条目匹配
Then MUST 显示友好的无结果提示信息
  And 提示信息 SHOULD 建议用户调整搜索词或重置筛选
```

---

## REQ-FAQ-005: SEO 元数据

**描述**：FAQ 页面 MUST 配置针对问题型关键词优化的 SEO 元数据。

### 场景：FAQ 页面 meta tags

```
Given 搜索引擎爬虫访问 `/faq`
When 解析页面 `<head>`
Then title MUST 包含 \"Seedance FAQ\" 或 \"Seedance Frequently Asked Questions\"
  And meta description MUST 包含 \"seedance\" 关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/faq`
  And MUST 包含 og:title、og:description
```

---

## REQ-FAQ-006: 响应式布局

**描述**：FAQ 页面 MUST 在各设备尺寸下提供良好的浏览体验。

### 场景：桌面端布局

```
Given 用户在桌面端（视口宽度 >= 1024px）访问 `/faq`
When 页面渲染完成
Then FAQ 列表 MUST 居中显示，最大宽度不超过 768px
  And 搜索框 MUST 位于页面标题下方
  And 分类筛选标签 MUST 水平排列于搜索框下方
```

### 场景：移动端布局

```
Given 用户在移动端（视口宽度 < 768px）访问 `/faq`
When 页面渲染完成
Then FAQ 列表 MUST 全宽显示
  And 搜索框和筛选标签 MUST 堆叠显示（垂直排列）
  And 问题触发区域 MUST 满足最小触摸目标尺寸（44x44px）
  And 展开的答案内容 MUST 有足够内边距保证可读性
```
