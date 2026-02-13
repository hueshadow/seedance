# Proposal 12: 变现系统

## 意图（Intent）

实施网站变现策略，从 AdSense 广告和 Newsletter 订阅起步，逐步引入付费内容和会员系统，构建可持续的收入模型。目标：Phase 3 实现广告收入和邮件列表增长，Phase 4 实现付费会员和用户生成内容生态。

## 范围（Scope）

### Phase 3 — AdSense 广告

- **广告位布局**：
  - Sidebar 广告位（300x250，桌面端博客详情页）
  - 文章中间自适应广告位（博客文章 500 词后插入）
  - 文章底部横幅广告位（728x90，移动端自适应 320x100）
- **广告加载策略**：延迟加载（Intersection Observer），不影响 Core Web Vitals
- **广告屏蔽检测**：检测 AdBlock，可选展示友好提示

### Phase 3 — Newsletter

- **订阅表单**：Footer 全局表单 + 博客文章底部表单 + 延迟弹窗（首次访问 30 秒后）
- **邮件服务集成**：Resend 或 ConvertKit API
- **欢迎邮件**：订阅后自动发送欢迎邮件（含热门内容推荐）
- **每周摘要**：每周 Seedance 更新和精选文章摘要

### Phase 4 — 付费内容

- **高级 Prompt 库**：/prompts 页面中标记 premium 的 Prompt 需解锁
- **会员等级**：
  - Free：基础 Prompt 访问、博客阅读、Newsletter
  - Pro（$9.99/月）：全部 Prompt 库、高级教程、优先支持
- **支付集成**：Stripe Checkout，支持信用卡和常见支付方式
- **用户认证**：NextAuth.js 或 Clerk，支持 Google/GitHub OAuth

### Phase 4 — 用户生成内容（UGC）

- **用户提交 Prompt**：提交表单，需管理员审核后发布
- **评分和评论系统**：用户对 Prompt 评分（1-5 星）和评论

### Affiliate 收入

- **虚拟号码服务推荐**：/register 页面嵌入推荐链接
- **API 平台推荐**：/api 页面嵌入推荐链接
- **链接追踪**：UTM 参数 + 点击事件追踪，统计转化

## 方法（Approach）

- AdSense：异步加载 `adsbygoogle.js`，封装 `AdSlot` 组件，Intersection Observer 延迟初始化
- Newsletter：Resend API 处理邮件发送，Server Action 处理订阅请求
- 支付：Stripe Checkout Session API，Webhook 处理支付回调
- 认证：NextAuth.js v5（App Router 兼容），JWT Session
- UGC：Server Action + 数据库（Supabase 或 PlanetScale）存储用户提交

## 阶段（Phase）

- Phase 3：AdSense 广告集成 + Newsletter 订阅系统
- Phase 4：Stripe 付费会员 + 用户认证 + UGC 系统
