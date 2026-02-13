# 规格说明：定价与免费使用方式页

> 变更类型：ADDED
> 领域：pricing
> 提案：06-pricing

---

## REQ-PRICE-001: 平台价格对比表

**描述**：定价页 MUST 提供各平台的 Seedance 定价方案对比表。

### 场景：价格对比表展示

```
Given 用户访问 `/pricing` 页面
When 页面渲染完成
Then MUST 显示包含全部平台的价格对比表
  And 对比表 MUST 包含以下平台：即梦 Jimeng、Dreamina International、小云雀 Xiaoyunque、豆包 Doubao、fal.ai、Replicate
  And 每个平台 MUST 显示：平台名称、价格范围、免费额度（如有）、适用地区
  And 每个平台 MUST 包含 \"前往平台\" 外链按钮
```

### 场景：货币显示

```
Given 价格对比表已渲染
When 显示各平台价格
Then 中国平台（即梦、小云雀）的价格 MUST 以人民币（¥）显示
  And 国际平台（Dreamina、fal.ai、Replicate）的价格 MUST 以美元（$）显示
  And 货币符号 MUST 紧贴数字前方，无空格
  And 按量付费平台 MUST 标注计费单位（如 \"每秒\" 或 \"每次生成\"）
```

### 场景：外链安全

```
Given 价格对比表中包含外部链接
When 渲染外链按钮
Then 所有外部链接 MUST 包含 `target="_blank"` 属性
  And 所有外部链接 MUST 包含 `rel="noopener noreferrer"` 属性
  And 外部链接 SHOULD 包含外链图标提示用户将离开本站
```

---

## REQ-PRICE-002: Free Methods 免费使用专区

**描述**：定价页 MUST 突出展示免费使用 Seedance 的方式，作为页面核心内容区域。

### 场景：免费专区展示

```
Given 用户访问 `/pricing` 页面
When 页面渲染完成
Then MUST 在页面醒目位置（价格对比表上方或页面顶部）显示 Free Methods 专区
  And 专区 MUST 使用视觉上突出的卡片设计（区别于普通内容区域）
  And 专区 MUST 汇总所有提供免费额度的平台
```

### 场景：免费方式详情

```
Given Free Methods 专区已渲染
When 用户查看免费方式列表
Then 每个免费方式 MUST 包含：平台名称、免费额度描述、获取步骤
  And 获取步骤 MUST 简洁（1-2 步即可）
  And 每个免费方式 MUST 包含跳转到对应平台的链接
  And 免费额度描述 MUST 具体明确（如 \"每天免费 10 次\" 而非 \"有免费额度\"）
```

---

## REQ-PRICE-003: 竞品价格对比

**描述**：定价页 SHOULD 提供 Seedance 与竞品的价格横向对比。

### 场景：竞品对比表展示

```
Given 用户访问 `/pricing` 页面
When 滚动到竞品对比区域
Then MUST 显示 Seedance 与竞品的价格对比表
  And 竞品 MUST 包含：Sora 2（$200/月）、Veo 3.1（$19.99/月）、Kling（$9.99/月起）
  And 对比维度 MUST 包含：月费、免费额度、视频质量等级
  And Seedance 的性价比优势 SHOULD 通过视觉手段突出（高亮、标注、图标）
```

### 场景：竞品数据标注

```
Given 竞品对比表已渲染
When 显示竞品价格数据
Then MUST 标注数据来源或更新日期
  And 价格数据 MUST 注明对应的套餐名称（如 \"ChatGPT Pro\" 对应 Sora 2）
  And 数据 SHOULD 定期更新以保持准确性
```

---

## REQ-PRICE-004: 信用点计算器

**描述**：定价页 SHOULD 提供信用点计算器，帮助用户估算费用。

### 场景：计算器交互

```
Given 用户访问 `/pricing` 页面的计算器区域
When 计算器组件渲染完成
Then MUST 提供以下输入项：每月预计生成视频数量、平均视频时长、选择版本
  And 输入项 MUST 有合理的默认值
  And 用户修改输入后 MUST 实时更新计算结果
```

### 场景：计算结果展示

```
Given 用户已输入计算参数
When 计算完成
Then MUST 显示预计月度信用点消耗总量
  And MUST 推荐最适合的套餐方案
  And MUST 显示对应的月度费用估算
  And 计算结果 SHOULD 包含 \"前往购买\" 链接
```

### 场景：计算器替代方案

```
Given 页面未嵌入完整计算器
When 用户需要计算费用
Then MUST 提供醒目的链接跳转到 `/tools/calculator` 完整计算器页面
  And 链接 MUST 包含简短的功能描述
```

---

## REQ-PRICE-005: Schema 结构化数据

**描述**：定价页 MUST 包含 Product + Offer 结构化数据。

### 场景：Product + Offer JSON-LD

```
Given 搜索引擎爬虫访问 `/pricing`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 Product schema
  And Product MUST 包含 `name`（\"Seedance\"）、`description`、`brand` 属性
  And Product MUST 包含 `offers` 数组
  And 每个 Offer MUST 包含 `priceCurrency`、`price`、`url`、`availability` 属性
  And Offer 的 `priceCurrency` MUST 为有效的 ISO 4217 货币代码（\"USD\" 或 \"CNY\"）
  And JSON-LD MUST 通过 Google Rich Results Test 验证无错误
```

---

## REQ-PRICE-006: SEO 元数据

**描述**：定价页 MUST 配置针对定价和免费关键词优化的 SEO 元数据。

### 场景：定价页 meta tags

```
Given 搜索引擎爬虫访问 `/pricing`
When 解析页面 `<head>`
Then title MUST 包含 \"Seedance\" 和 \"Pricing\" 关键词
  And title SHOULD 包含 \"Free\" 关键词
  And meta description MUST 包含 \"free\"、\"price\"、\"pricing\" 等目标关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/pricing`
  And MUST 包含 og:title、og:description
```

---

## REQ-PRICE-007: 移动端响应式

**描述**：定价页 MUST 在移动端提供良好的浏览和交互体验。

### 场景：移动端价格表

```
Given 用户在移动端（视口宽度 < 768px）访问 `/pricing`
When 页面渲染完成
Then 平台价格对比表 MUST 切换为卡片式堆叠布局（每个平台一张卡片）
  Or 表格 MUST 支持横向滚动且首列固定
  And Free Methods 专区 MUST 以单列卡片排列
  And 竞品对比表 MUST 适配移动端显示
```

### 场景：移动端计算器

```
Given 用户在移动端使用信用点计算器
When 计算器渲染完成
Then 计算器 MUST 全宽显示
  And 输入控件 MUST 满足最小触摸目标尺寸（44x44px）
  And 数字输入 SHOULD 触发数字键盘
```

---

## REQ-PRICE-008: 价格数据准确性

**描述**：定价页中的所有价格数据 MUST 准确反映各平台的实际定价。

### 场景：价格数据维护

```
Given 定价数据已定义
When 页面渲染价格信息
Then 所有价格 MUST 与对应平台官方公布的价格一致
  And 页面 SHOULD 显示价格数据的最后更新日期
  And 价格变动时 MUST 及时更新数据文件
  And 免费额度信息 MUST 与平台实际提供的额度一致
```
