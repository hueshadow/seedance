# Proposal 12: 变现系统 — 任务清单

## AdSense 广告集成

### 广告基础设施
- [ ] 注册 Google AdSense 账户并获取 Publisher ID
- [ ] 创建 `AdSlot` 通用广告位组件（支持多种尺寸）
- [ ] 实现 AdSense 脚本异步加载（`adsbygoogle.js`）
- [ ] 实现 Intersection Observer 延迟加载策略
- [ ] 验证广告加载不影响 Core Web Vitals（LCP, CLS）

### 广告位部署
- [ ] 实现 Sidebar 广告位（300x250，桌面端博客详情页）
- [ ] 实现文章中间自适应广告位（文章 500 词后自动插入）
- [ ] 实现文章底部横幅广告位（728x90 / 移动端 320x100）
- [ ] 为所有广告位预留固定尺寸容器（防止 CLS）

### 广告屏蔽检测
- [ ] 实现 AdBlock 检测逻辑
- [ ] 创建友好提示组件（可选展示，非强制）

## Newsletter 订阅系统

### 订阅表单
- [ ] 创建 `NewsletterForm` 通用订阅组件
- [ ] 在 Footer 中集成全局订阅表单
- [ ] 在博客文章底部集成订阅表单
- [ ] 实现延迟弹窗订阅（首次访问 30 秒后触发）
- [ ] 实现弹窗关闭后 7 天内不再展示（localStorage）
- [ ] 表单验证：邮箱格式校验、防重复提交

### 邮件服务
- [ ] 选择并集成邮件服务（Resend 或 ConvertKit）
- [ ] 创建订阅 API 路由（Server Action 或 Route Handler）
- [ ] 实现邮箱双重确认（Double Opt-in）
- [ ] 设计并实现欢迎邮件模板
- [ ] 设计每周摘要邮件模板
- [ ] 配置每周自动发送逻辑（Cron Job 或邮件服务内置）

## 支付系统（Phase 4）

### Stripe 集成
- [ ] 创建 Stripe 账户并配置 API Keys
- [ ] 安装 `stripe` 和 `@stripe/stripe-js` 依赖
- [ ] 创建 Stripe Checkout Session API 路由
- [ ] 实现 Stripe Webhook 处理（支付成功、取消、退款）
- [ ] 配置 Webhook 签名验证

### 定价与结账
- [ ] 在 Stripe 中创建 Product 和 Price（Pro $9.99/月）
- [ ] 创建定价展示页面或组件（Free vs Pro 对比）
- [ ] 实现 Checkout 跳转流程
- [ ] 实现支付成功回调页面
- [ ] 实现支付取消回调页面

### 订阅管理
- [ ] 实现用户订阅状态查询
- [ ] 实现 Stripe Customer Portal 跳转（管理订阅、取消）
- [ ] 实现订阅到期处理逻辑

## 用户认证系统（Phase 4）

### 认证基础
- [ ] 安装并配置 NextAuth.js v5（或 Clerk）
- [ ] 配置 Google OAuth Provider
- [ ] 配置 GitHub OAuth Provider
- [ ] 实现 JWT Session 策略
- [ ] 创建用户数据库表（Supabase 或 PlanetScale）

### 用户界面
- [ ] 创建登录/注册页面
- [ ] 创建用户 Dashboard 页面
- [ ] 实现登录状态全局管理（SessionProvider）
- [ ] 实现受保护路由中间件

## 付费内容门控（Phase 4）

### Premium 内容
- [ ] 在 Prompt frontmatter 中添加 `premium: boolean` 字段
- [ ] 实现 Premium 标记 UI（锁定图标、Pro 徽章）
- [ ] 实现内容门控逻辑（未付费用户展示模糊预览 + 升级 CTA）
- [ ] 实现付费用户完整内容访问

## 用户生成内容（Phase 4）

### Prompt 提交
- [ ] 创建 Prompt 提交表单（标题、描述、Prompt 文本、分类、标签）
- [ ] 实现提交 API 路由（存储到数据库，状态为 pending）
- [ ] 创建管理员审核队列页面
- [ ] 实现审核操作（批准、拒绝、编辑后批准）
- [ ] 批准后自动发布到 /prompts 页面

### 评分与评论
- [ ] 创建评分组件（1-5 星）
- [ ] 创建评论组件（文本输入 + 提交）
- [ ] 实现评分/评论 API 路由
- [ ] 实现评论审核机制（可选）
- [ ] 在 Prompt 卡片上展示平均评分

## Affiliate 链接追踪

### 推荐链接
- [ ] 在 /register 页面嵌入虚拟号码服务推荐链接（含 UTM 参数）
- [ ] 在 /api 页面嵌入 API 平台推荐链接（含 UTM 参数）
- [ ] 创建 `AffiliateLink` 组件（统一管理追踪参数）

### 追踪与统计
- [ ] 实现 Affiliate 链接点击事件追踪（GA4 自定义事件）
- [ ] 创建 Affiliate 转化统计 Dashboard（可选，Phase 4+）
