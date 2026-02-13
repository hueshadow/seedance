# 任务清单：注册指南

## 教程内容编写

- [ ] 编写即梦 Jimeng 注册完整流程（Step 1-8，含每步操作说明）
- [ ] 编写豆包 Doubao 注册完整流程
- [ ] 编写 Dreamina 国际版注册流程（无需中国手机号的替代方案）
- [ ] 为每个步骤创建截图占位图（`placeholder-step-{n}.svg`），标注预期截图内容
- [ ] 编写方案 A 详细教程：使用虚拟中国手机号注册
- [ ] 编写方案 B 详细教程：使用国际平台替代（Dreamina / fal.ai / Replicate）
- [ ] 编写方案 C 说明：购买预注册账号（含明确风险提示和不推荐声明）

## 方案对比

- [ ] 创建三种注册方案对比组件 `src/components/register/MethodComparison.tsx`
- [ ] 对比维度：难度、费用、风险等级、推荐指数
- [ ] 方案 A 标注为 "推荐"，方案 C 标注为 "不推荐"
- [ ] 每个方案包含优缺点列表

## 平台注册流程对比表

- [ ] 创建平台对比表组件 `src/components/register/PlatformComparison.tsx`
- [ ] 对比平台：即梦 Jimeng、豆包 Doubao、小云雀 Xiaoyunque、Dreamina
- [ ] 对比维度：注册难度（星级）、是否需要中国手机号（是/否）、免费额度、支持的 Seedance 版本、注册链接
- [ ] 不需要中国手机号的平台视觉高亮

## 虚拟号码服务推荐

- [ ] 创建服务推荐卡片组件 `src/components/register/ServiceCard.tsx`
- [ ] 定义服务数据类型（`VirtualNumberService`：name, url, priceRange, successRate, features[], affiliateId）
- [ ] 创建服务数据文件 `src/data/virtual-number-services.ts`
- [ ] 卡片包含：服务名称、价格范围、成功率评级（星级或百分比）、特点列表、"前往" 按钮
- [ ] 所有外链 MUST 包含 `data-affiliate` 属性（预留 affiliate 追踪）
- [ ] 外链 MUST 包含 `target="_blank"` 和 `rel="noopener noreferrer sponsored"`

## 故障排除

- [ ] 编写故障排除内容：验证码收不到（等待时间、更换号码、检查号码状态）
- [ ] 编写故障排除内容：号码被拒绝（号码类型不支持、已被使用、地区限制）
- [ ] 编写故障排除内容：账号被封禁（原因分析、申诉流程、预防措施）
- [ ] 编写故障排除内容：IP 地区限制（VPN 建议、注意事项）
- [ ] 使用可折叠面板（Accordion）组织故障排除条目

## YouTube 视频嵌入

- [ ] 创建 YouTube 延迟加载组件 `src/components/ui/YouTubeEmbed.tsx`
- [ ] 首屏显示视频缩略图（从 YouTube 获取或使用占位图）
- [ ] 用户点击缩略图后加载 iframe
- [ ] iframe 加载时显示 loading 状态
- [ ] 预留视频 ID 配置位（待实际视频制作完成后替换）

## Schema 结构化数据

- [ ] 创建 HowTo JSON-LD 生成函数 `src/lib/schema/register-schema.ts`
- [ ] HowTo schema 包含 `name`、`description`、`step[]` 属性
- [ ] 每个 step 包含 `name`、`text`、`image`（截图 URL）属性
- [ ] HowTo SHOULD 包含 `totalTime` 属性（预估注册耗时）
- [ ] 在页面 `<head>` 中注入 JSON-LD
- [ ] 验证 JSON-LD 通过 Google Rich Results Test

## 页面路由与布局

- [ ] 创建注册指南页面路由 `src/app/register/page.tsx`
- [ ] 页面结构：标题区 → 方案对比概览 → Step-by-step 教程 → 平台对比表 → 虚拟号码推荐 → 故障排除 → YouTube 视频
- [ ] 页面内导航（锚点跳转到各章节）
- [ ] 页面顶部显示 "最后更新日期" 标记

## SEO 元数据

- [ ] 配置页面 metadata：title 包含 "How to Register Seedance" 和 "Sign Up" 关键词
- [ ] 配置 meta description（包含 "register"、"sign up"、"account"、"China phone" 等目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags
- [ ] 配置 canonical URL：`https://seedance.free/register`

## 响应式设计

- [ ] Step-by-step 教程在移动端单列全宽显示
- [ ] 截图在移动端自适应宽度，支持点击放大
- [ ] 方案对比在移动端切换为卡片堆叠
- [ ] 平台对比表在移动端横向滚动或卡片堆叠
- [ ] 虚拟号码推荐卡片：桌面 3 列、移动 1 列
- [ ] 所有可交互元素满足最小触摸目标尺寸（44x44px）

## 性能优化

- [ ] MDX 内容 SSG 静态生成
- [ ] 截图图片使用 `loading="lazy"` 懒加载
- [ ] YouTube embed 延迟加载（首屏不加载 iframe）
- [ ] 图片使用 Next.js `<Image>` 组件优化（WebP 格式、响应式尺寸）
- [ ] Lighthouse Performance 评分目标 >= 90
