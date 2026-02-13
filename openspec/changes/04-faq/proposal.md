# Proposal 04: FAQ 常见问题页

## 意图（Intent）

构建 FAQ 页面 `/faq`，精准命中问题型关键词（KD 0），通过 FAQPage Schema 获取 Google 搜索结果富摘要（Rich Snippet）展示。问题型查询在 Seedance 关键词矩阵中占据大量长尾流量，FAQ 页面以极低竞争度获取精准用户。

## 范围（Scope）

### FAQ 问答列表

基于关键词数据构建问答列表，手风琴（Accordion）展开/折叠交互：

| 问题 | 月搜索量 |
|------|---------|
| Is Seedance free? | 10 |
| Is Seedance open source? | 20 |
| Does Seedance have audio? | 10 |
| How to use Seedance? | 30 |
| What is Seedance? | 10 |
| Is Seedance censored? | 10 |
| Do Seedance videos have audio? | — |
| Can I use Seedance for commercial projects? | — |
| What's the maximum video length? | — |
| Do I need a Chinese phone number? | — |

### FAQPage Schema 结构化数据

- JSON-LD 格式的 FAQPage Schema markup
- 每个问答对映射为 `Question` + `acceptedAnswer`
- 确保通过 Google Rich Results Test 验证

### 答案内链策略

- 每个答案中包含至少一个内链到相关页面
- 例：\"Is Seedance free?\" 答案内链到 `/pricing`
- 例：\"How to use Seedance?\" 答案内链到 `/guide`

### 搜索与筛选

- 问题搜索框，实时过滤匹配问题
- 分类筛选标签（通用、价格、技术、使用方法）

## 技术方案（Approach）

- SSG 静态生成，FAQ 数据以 TypeScript 常量或 JSON 文件维护
- Accordion 组件使用 `<details>/<summary>` 原生语义化标签增强
- JSON-LD FAQPage Schema 在 `<head>` 中注入
- 搜索/筛选为客户端交互，不影响 SSG 输出

## 阶段（Phase）

Phase 1（MVP）

## 目标关键词

- is seedance free（10/月, KD 0）
- is seedance open source（20/月, KD 0）
- does seedance have audio（10/月, KD 0）
- what is seedance（10/月, KD 0）
- is seedance censored（10/月, KD 0）

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
