# 变现系统需求规格

> 状态：ADDED
> 关联提案：Proposal 12 — 变现系统

---

## 1. 广告位布局与加载

### REQ-MON-001: 广告位放置

系统 MUST 在指定位置展示广告位占位容器。

**场景：Sidebar 广告位（桌面端）**
- Given 用户在桌面端浏览器访问博客详情页
- When 页面渲染完成
- Then 页面右侧边栏 MUST 展示一个 300x250 的广告位容器
- And 广告位容器 MUST 在广告未加载时保持固定尺寸（防止 CLS）
- And 该广告位 MUST NOT 在移动端展示

**场景：文章中间广告位**
- Given 一篇博客文章正文超过 500 词
- When 系统渲染文章内容
- Then 系统 SHOULD 在约 500 词位置插入一个自适应广告位
- And 广告位 MUST 与文章内容有明确的视觉分隔
- And 文章正文不足 500 词时，系统 MUST NOT 插入中间广告位

**场景：文章底部广告位**
- Given 用户在博客详情页
- When 页面渲染完成
- Then 文章底部（相关文章推荐上方）MUST 展示一个横幅广告位
- And 桌面端尺寸 SHOULD 为 728x90
- And 移动端尺寸 SHOULD 自适应为 320x100

### REQ-MON-002: 广告延迟加载

**场景：广告不影响首屏性能**
- Given 页面包含广告位
- When 页面首次加载
- Then AdSense 脚本 MUST 异步加载（`async` 属性）
- And 非首屏广告位 MUST 使用 Intersection Observer 延迟初始化
- And 广告加载 MUST NOT 导致 LCP 增加超过 200ms
- And 广告加载 MUST NOT 导致 CLS 超过 0.1

### REQ-MON-003: 广告屏蔽检测

**场景：用户启用了广告屏蔽插件**
- Given 用户浏览器安装了 AdBlock 类插件
- When 系统检测到广告加载失败
- Then 系统 MAY 展示一条友好提示信息
- And 提示 MUST NOT 阻塞页面内容访问
- And 提示 SHOULD 可被用户关闭
- And 系统 MUST NOT 强制用户禁用广告屏蔽

---

## 2. Newsletter 订阅流程

### REQ-MON-004: 订阅表单

**场景：Footer 全局订阅**
- Given 用户在网站任意页面
- When 用户滚动到 Footer 区域
- Then Footer MUST 包含一个邮件订阅表单
- And 表单 MUST 包含邮箱输入框和提交按钮
- And 表单 MUST 对邮箱格式进行客户端验证

**场景：博客文章底部订阅**
- Given 用户在博客详情页
- When 用户阅读到文章底部
- Then 文章底部 SHOULD 展示一个订阅表单（含订阅价值说明）

**场景：延迟弹窗订阅**
- Given 用户首次访问网站
- When 用户停留超过 30 秒
- Then 系统 SHOULD 展示订阅弹窗
- And 弹窗 MUST 包含关闭按钮
- And 用户关闭弹窗后，系统 MUST NOT 在 7 天内再次展示（基于 localStorage）
- And 已订阅用户 MUST NOT 看到弹窗

### REQ-MON-005: 订阅处理

**场景：用户提交订阅**
- Given 用户在订阅表单中输入有效邮箱
- When 用户点击提交
- Then 系统 MUST 将邮箱发送到邮件服务 API（Resend 或 ConvertKit）
- And 系统 MUST 展示成功提示信息
- And 系统 SHOULD 实施 Double Opt-in（发送确认邮件）
- And 系统 MUST 防止同一邮箱重复订阅

**场景：订阅后欢迎邮件**
- Given 用户完成邮箱订阅确认
- When 订阅生效
- Then 系统 MUST 自动发送欢迎邮件
- And 欢迎邮件 MUST 包含热门内容推荐链接
- And 欢迎邮件 MUST 包含退订链接

---

## 3. 支付处理

### REQ-MON-006: Stripe Checkout 流程

**场景：用户购买 Pro 会员**
- Given 已登录用户在定价页面
- When 用户点击 "升级到 Pro" 按钮
- Then 系统 MUST 创建 Stripe Checkout Session
- And 系统 MUST 将用户重定向到 Stripe Checkout 页面
- And Checkout 页面 MUST 展示正确的价格（$9.99/月）
- And 支付成功后 MUST 重定向回网站成功页面
- And 支付取消后 MUST 重定向回网站取消页面

**场景：Stripe Webhook 处理**
- Given Stripe 发送支付事件 Webhook
- When 系统接收到 Webhook 请求
- Then 系统 MUST 验证 Webhook 签名
- And 系统 MUST 处理 `checkout.session.completed` 事件（激活会员）
- And 系统 MUST 处理 `customer.subscription.deleted` 事件（取消会员）
- And 系统 MUST 处理 `invoice.payment_failed` 事件（标记支付失败）

---

## 4. 用户认证

### REQ-MON-007: 认证系统

**场景：用户登录**
- Given 未登录用户
- When 用户点击登录按钮
- Then 系统 MUST 展示登录页面
- And 登录页面 MUST 支持 Google OAuth 登录
- And 登录页面 SHOULD 支持 GitHub OAuth 登录
- And 登录成功后 MUST 重定向回之前的页面

**场景：受保护路由**
- Given 未登录用户
- When 用户尝试访问需要认证的页面（如用户 Dashboard）
- Then 系统 MUST 重定向到登录页面
- And 登录后 MUST 重定向回原始请求页面

---

## 5. 付费内容访问控制

### REQ-MON-008: Premium 内容门控

**场景：免费用户访问 Premium Prompt**
- Given 未付费用户（Free 等级）
- When 用户在 /prompts 页面查看标记为 premium 的 Prompt
- Then 系统 MUST 展示 Prompt 标题和部分描述
- And Prompt 完整内容 MUST 被模糊化或隐藏
- And 系统 MUST 展示 "升级到 Pro" 的 CTA 按钮
- And 系统 MUST 展示 Pro 会员的价值说明

**场景：Pro 用户访问 Premium Prompt**
- Given 已付费 Pro 用户
- When 用户在 /prompts 页面查看标记为 premium 的 Prompt
- Then 系统 MUST 展示完整的 Prompt 内容
- And 用户 MUST 能够复制 Prompt 文本

---

## 6. 用户提交工作流

### REQ-MON-009: Prompt 提交

**场景：用户提交新 Prompt**
- Given 已登录用户
- When 用户填写 Prompt 提交表单并提交
- Then 系统 MUST 验证表单数据（标题、Prompt 文本为必填）
- And 系统 MUST 将提交存储到数据库，状态为 `pending`
- And 系统 MUST 展示提交成功提示
- And 提交的 Prompt MUST NOT 立即公开展示

**场景：管理员审核 Prompt**
- Given 管理员访问审核队列
- When 管理员查看待审核的 Prompt
- Then 系统 MUST 展示 Prompt 完整内容和提交者信息
- And 管理员 MUST 能够执行：批准、拒绝、编辑后批准
- And 批准后的 Prompt MUST 自动出现在 /prompts 页面
- And 系统 SHOULD 通知提交者审核结果

---

## 7. Affiliate 链接追踪

### REQ-MON-010: Affiliate 链接管理

**场景：Affiliate 链接点击**
- Given 页面中包含 Affiliate 推荐链接
- When 用户点击 Affiliate 链接
- Then 系统 MUST 发送 GA4 自定义事件（event name: `affiliate_click`）
- And 事件 MUST 包含参数：link_name, link_url, page_path
- And 链接 MUST 在新窗口打开（`target="_blank"`）
- And 链接 MUST 包含 `rel="noopener noreferrer sponsored"` 属性

**场景：Affiliate 链接 UTM 参数**
- Given Affiliate 链接配置
- When 系统渲染 Affiliate 链接
- Then 链接 URL MUST 包含 UTM 参数：`utm_source=seedance_free`, `utm_medium=referral`, `utm_campaign={campaign_name}`

---

## 8. 收入分析

### REQ-MON-011: 变现指标追踪

**场景：广告收入追踪**
- Given AdSense 广告已部署
- When 管理员查看分析数据
- Then 系统 SHOULD 通过 GA4 追踪广告展示次数
- And 系统 SHOULD 追踪广告点击事件

**场景：订阅转化追踪**
- Given Newsletter 订阅表单已部署
- When 用户完成订阅
- Then 系统 MUST 发送 GA4 转化事件（event name: `newsletter_subscribe`）
- And 事件 MUST 包含参数：form_location（footer/article/popup）

**场景：付费转化追踪**
- Given 用户完成 Pro 会员购买
- When Stripe Webhook 确认支付成功
- Then 系统 MUST 发送 GA4 转化事件（event name: `purchase`）
- And 事件 MUST 包含参数：value（9.99）, currency（USD）, item_name（Pro Membership）
