# Proposal 09: 注册指南

## 意图（Intent）

构建核心差异化页面——中国手机号注册指南。这是国际用户访问 Seedance 2.0 的最大痛点，也是竞品网站几乎未覆盖的内容空白。通过提供详尽的注册教程和替代方案，解决用户的实际问题，建立网站在 "how to register seedance" 等关键词上的权威性，同时为 affiliate 变现预留接口。

## 范围（Scope）

### Step-by-step 图文教程

- 带编号步骤的详细注册流程
- 每个步骤配截图占位（后续替换为实际截图）
- 覆盖从访问官网到完成注册的完整流程

### 三种注册方案对比

- 方案 A: 虚拟中国手机号（SMS-Activate, 5SIM, MobileSMS.io）
- 方案 B: 使用国际平台替代（Dreamina, fal.ai, Replicate）
- 方案 C: 购买预注册账号（含风险提示）

### 各平台注册流程对比表

- 对比平台：即梦 Jimeng / 豆包 Doubao / 小云雀 Xiaoyunque / Dreamina
- 对比维度：注册难度、是否需要中国手机号、免费额度、Seedance 版本支持

### 虚拟号码服务推荐卡片

- 推荐服务：SMS-Activate, 5SIM, MobileSMS.io
- 每张卡片：服务名称、价格范围、成功率评级、链接
- 预留 affiliate 链接位（`data-affiliate` 属性）

### 常见问题和故障排除

- 验证码收不到
- 号码被拒绝
- 账号被封禁
- IP 地区限制

### 多媒体嵌入

- YouTube 视频教程嵌入位
- Schema markup: HowTo

## 技术方案（Approach）

- MDX 内容管理，图文混排
- SSG 静态生成
- 图片懒加载（`loading="lazy"`）
- YouTube embed 延迟加载（点击后加载 iframe，首屏显示缩略图）
- HowTo Schema JSON-LD 在 `<head>` 中注入

## 阶段（Phase）

Phase 2

## 目标关键词

- how to register seedance
- seedance sign up
- seedance login
- seedance account
- seedance china phone number

## 依赖

- Proposal 01: 基础架构（全局布局、主题系统）
