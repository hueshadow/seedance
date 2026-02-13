# Proposal 06: 定价与免费使用方式页

## 意图（Intent）

构建定价页面 `/pricing`，承接 \"seedance 1.0 free\"（480/月, KD 14）、\"seedance price\"（110/月）、\"seedance pricing\"（40/月）、\"seedance free\"（170/月）等商业意图关键词。定价信息是用户决策链中的关键节点，通过汇总各平台价格和免费使用方式，降低用户获取信息的成本，提升页面停留时间和转化率。

## 范围（Scope）

### 各平台价格对比表

汇总 Seedance 在各平台的定价方案：

| 平台 | 价格 | 备注 |
|------|------|------|
| 即梦 Jimeng（中国） | ¥69/月起 | 中国大陆用户 |
| Dreamina International | $18 / $42 / $84/月 | 国际版三档套餐 |
| 小云雀 Xiaoyunque | ¥39/月 | 第三方平台 |
| 豆包 Doubao | 免费 10 次/天 | 免费额度 |
| fal.ai | 按量付费 API | 开发者 API |
| Replicate | 按量付费 API | 开发者 API |

### Free Methods 免费使用专区

- 突出展示各平台新用户免费额度汇总
- 免费使用步骤简要说明
- 视觉上优先级最高（页面顶部或醒目卡片）

### 信用点计算器

- 嵌入简易计算器或链接到 `/tools/calculator`
- 帮助用户估算不同用量下的月度费用

### 竞品价格对比

- Seedance vs 竞品价格横向对比：
  - Sora 2（$200/月 ChatGPT Pro）
  - Veo 3.1（$19.99/月 Google AI Pro）
  - Kling（$9.99/月起）
- 突出 Seedance 的性价比优势

### Schema 结构化数据

- Product + Offer JSON-LD Schema

## 技术方案（Approach）

- 价格数据以 TypeScript 常量维护，SSG 静态生成
- 价格对比表使用响应式表格组件
- Free Methods 专区使用醒目卡片设计
- 计算器为客户端交互组件
- JSON-LD Product/Offer Schema 在 `<head>` 中注入
- 货币显示支持 USD 和 CNY

## 阶段（Phase）

Phase 2

## 目标关键词

- seedance 1.0 free（480/月, KD 14）
- seedance free（170/月）
- seedance price（110/月）
- seedance pricing（40/月）
- seedance ai free
- seedance pro free

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
