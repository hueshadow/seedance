# 规格说明：注册指南

> 变更类型：ADDED
> 领域：register
> 提案：09-register

---

## REQ-REG-001: Step-by-step 教程展示

**描述**：注册指南页面 MUST 提供带编号步骤的详细注册教程。

### 场景：步骤展示

```
Given 用户访问 `/register` 页面
When 页面渲染完成
Then MUST 显示带编号的注册步骤列表
  And 每个步骤 MUST 包含：步骤编号、步骤标题、详细操作说明
  And 每个步骤 MUST 包含截图占位区域（后续替换为实际截图）
  And 步骤编号 MUST 使用醒目的视觉设计（圆形编号或大号数字）
  And 步骤之间 SHOULD 有视觉连接线或分隔符
```

### 场景：截图展示

```
Given 步骤中包含截图
When 截图渲染完成
Then 截图 MUST 使用 `loading="lazy"` 懒加载
  And 截图 MUST 使用 Next.js `<Image>` 组件（WebP 格式、响应式尺寸）
  And 截图 SHOULD 支持点击放大查看
  And 截图 MUST 包含 alt 文本描述
  And 在截图未就绪时 MUST 显示占位图（标注预期截图内容）
```

---

## REQ-REG-002: 注册方案对比

**描述**：注册指南 MUST 提供三种注册方案的对比，帮助用户选择最适合的方式。

### 场景：方案对比展示

```
Given 用户查看注册方案对比区域
When 对比组件渲染完成
Then MUST 展示三种方案：
  - 方案 A: 虚拟中国手机号（标注为 "推荐"）
  - 方案 B: 使用国际平台替代
  - 方案 C: 购买预注册账号（标注为 "不推荐"）
  And 每个方案 MUST 包含：方案名称、简要描述、优点列表、缺点列表
  And 对比维度 MUST 包含：难度、费用、风险等级、推荐指数
  And 方案 C MUST 包含明确的风险警告（账号安全、封号风险、法律风险）
```

### 场景：方案推荐标记

```
Given 方案对比已渲染
When 用户查看各方案
Then 方案 A MUST 使用绿色或正面视觉标记（如 "推荐" 徽章）
  And 方案 C MUST 使用红色或警告视觉标记（如 "高风险" 徽章）
  And 方案 B SHOULD 使用中性视觉标记（如 "替代方案" 徽章）
```

---

## REQ-REG-003: Affiliate 链接预留

**描述**：虚拟号码服务推荐卡片 MUST 预留 affiliate 链接追踪接口。

### 场景：服务推荐卡片

```
Given 用户查看虚拟号码服务推荐区域
When 推荐卡片渲染完成
Then MUST 展示至少 3 个虚拟号码服务（SMS-Activate, 5SIM, MobileSMS.io）
  And 每张卡片 MUST 包含：服务名称、价格范围、成功率评级、特点列表、"前往" 按钮
  And 所有外链 MUST 包含 `data-affiliate` 属性（预留 affiliate ID）
  And 外链 MUST 包含 `target="_blank"` 属性
  And 外链 MUST 包含 `rel="noopener noreferrer sponsored"` 属性
```

### 场景：Affiliate 链接合规

```
Given 页面包含 affiliate 链接
When 页面渲染完成
Then 页面 SHOULD 在适当位置包含 affiliate 披露声明
  And affiliate 链接 MUST 使用 `rel="sponsored"` 标记
  And affiliate 链接 MUST NOT 影响页面的 SEO 权重传递（nofollow 或 sponsored）
```

---

## REQ-REG-004: 平台注册流程对比表

**描述**：注册指南 MUST 提供各平台注册流程的横向对比。

### 场景：平台对比表展示

```
Given 用户查看平台注册流程对比区域
When 对比表渲染完成
Then MUST 以表格形式展示以下平台的对比：即梦 Jimeng、豆包 Doubao、小云雀 Xiaoyunque、Dreamina
  And 对比维度 MUST 包含：注册难度（星级评分）、是否需要中国手机号、免费额度、支持的 Seedance 版本
  And 每个平台 MUST 包含注册链接
  And 不需要中国手机号的平台 MUST 以视觉高亮方式标记（绿色背景或勾选图标）
```

### 场景：对比表响应式

```
Given 用户在移动端（视口宽度 < 768px）查看平台对比表
When 对比表渲染完成
Then 对比表 MUST 支持横向滚动
  Or 对比表 MUST 切换为卡片式堆叠布局
  And 平台名称列 SHOULD 在横向滚动时保持固定
```

---

## REQ-REG-005: 故障排除

**描述**：注册指南 MUST 提供常见问题的故障排除指南。

### 场景：故障排除展示

```
Given 用户查看故障排除章节
When 章节渲染完成
Then MUST 以可折叠面板（Accordion）形式展示故障排除条目
  And MUST 覆盖以下问题：
  - 验证码收不到（等待时间、更换号码、检查号码状态）
  - 号码被拒绝（号码类型不支持、已被使用、地区限制）
  - 账号被封禁（原因分析、申诉流程、预防措施）
  - IP 地区限制（VPN 建议、注意事项）
  And 每个条目 MUST 包含：问题描述、可能原因、解决步骤
  And 解决步骤 MUST 具体可操作
```

### 场景：Accordion 交互

```
Given 故障排除 Accordion 已渲染
When 用户点击某个条目标题
Then 该条目 MUST 展开显示详细内容
  And 其他已展开的条目 MAY 保持展开（非互斥模式）
  And 展开/收起 MUST 有平滑的过渡动画
  And Accordion MUST 支持键盘操作（Enter/Space 展开收起）
```

---

## REQ-REG-006: YouTube 视频嵌入

**描述**：注册指南 SHOULD 嵌入 YouTube 视频教程，且 MUST 使用延迟加载。

### 场景：视频延迟加载

```
Given 页面包含 YouTube 视频嵌入位
When 页面首次渲染
Then MUST NOT 加载 YouTube iframe（延迟加载）
  And MUST 显示视频缩略图作为占位
  And 缩略图上 MUST 显示播放按钮图标
  And 用户点击缩略图后 MUST 加载并自动播放 YouTube iframe
  And iframe 加载过程中 SHOULD 显示 loading 状态
```

### 场景：视频占位

```
Given YouTube 视频尚未制作完成
When 页面渲染视频区域
Then MUST 显示占位区域（标注 "视频教程即将上线" 或类似文案）
  And 占位区域 SHOULD 保持与实际视频相同的宽高比（16:9）
```

---

## REQ-REG-007: HowTo Schema 结构化数据

**描述**：注册指南页面 MUST 包含 HowTo 结构化数据，以获取搜索引擎富文本展示。

### 场景：HowTo JSON-LD

```
Given 搜索引擎爬虫访问 `/register`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的 HowTo schema
  And HowTo MUST 包含 `name`（如 "How to Register for Seedance"）属性
  And HowTo MUST 包含 `description` 属性
  And HowTo MUST 包含 `step` 数组，每个 step 包含 `name`、`text` 属性
  And 每个 step SHOULD 包含 `image` 属性（截图 URL）
  And HowTo SHOULD 包含 `totalTime` 属性（ISO 8601 格式，如 "PT10M"）
  And HowTo SHOULD 包含 `tool` 或 `supply` 属性（如 "虚拟手机号"、"VPN"）
  And JSON-LD MUST 通过 Google Rich Results Test 验证无错误
```

---

## REQ-REG-008: SEO 元数据

**描述**：注册指南页面 MUST 配置针对注册关键词优化的 SEO 元数据。

### 场景：注册指南 meta tags

```
Given 搜索引擎爬虫访问 `/register`
When 解析页面 `<head>`
Then title MUST 包含 "Seedance" 和 "Register" 或 "Sign Up" 关键词
  And meta description MUST 包含 "register"、"sign up"、"account" 等目标关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/register`
  And MUST 包含 og:title、og:description
```

---

## REQ-REG-009: 移动端响应式

**描述**：注册指南 MUST 在移动端提供良好的阅读体验，因为大量用户通过手机搜索注册教程。

### 场景：移动端教程布局

```
Given 用户在移动端（视口宽度 < 768px）访问 `/register`
When 页面渲染完成
Then Step-by-step 教程 MUST 单列全宽显示
  And 截图 MUST 自适应宽度（最大 100%）
  And 方案对比 MUST 切换为卡片堆叠布局
  And 虚拟号码推荐卡片 MUST 单列排列
  And 所有可交互元素 MUST 满足最小触摸目标尺寸（44x44px）
  And 页面 SHOULD 提供 "返回顶部" 按钮（长页面导航辅助）
```

---

## REQ-REG-010: 内容时效性

**描述**：注册指南 MUST 标注内容的时效性信息，因为平台注册流程可能随时变化。

### 场景：更新日期标注

```
Given 用户访问 `/register` 页面
When 页面渲染完成
Then 页面顶部 MUST 显示 "最后更新日期"（如 "Last updated: January 2026"）
  And 更新日期 MUST 反映内容的实际最后审核时间
  And 页面 SHOULD 包含免责声明（平台政策可能变化，建议以官方为准）
```
