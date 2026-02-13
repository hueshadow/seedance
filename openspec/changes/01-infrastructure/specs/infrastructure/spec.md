# 规格说明：基础架构

> 变更类型：ADDED
> 领域：infrastructure
> 提案：01-infrastructure

---

## REQ-INFRA-001: 项目构建系统

**描述**：项目 MUST 使用 Next.js 15 App Router 架构，TypeScript 严格模式，pnpm 作为包管理器。

### 场景：项目成功构建

```
Given 项目已完成初始化
When 执行 `pnpm build` 命令
Then 构建过程 MUST 成功完成，无 TypeScript 类型错误
  And 构建产物 MUST 生成于 `.next/` 目录
  And 构建过程 SHOULD 在 60 秒内完成
```

### 场景：TypeScript 严格模式生效

```
Given tsconfig.json 中 `strict` 设置为 `true`
When 代码中存在隐式 `any` 类型
Then 编译器 MUST 报告类型错误
  And 构建 MUST 失败
```

### 场景：代码规范检查

```
Given ESLint 和 Prettier 已配置
When 执行 `pnpm lint` 命令
Then MUST 检查所有 `.ts` 和 `.tsx` 文件
  And MUST 应用 Next.js 推荐规则
  And MUST 与 Prettier 格式化规则无冲突
```

---

## REQ-INFRA-002: 全局布局结构

**描述**：网站 MUST 具备统一的全局布局，包含 Header、主内容区和 Footer。

### 场景：页面加载时显示全局布局

```
Given 用户访问网站任意页面
When 页面完成加载
Then Header MUST 显示在页面顶部
  And Footer MUST 显示在页面底部
  And 主内容区 MUST 位于 Header 和 Footer 之间
  And 布局 MUST 在所有页面保持一致
```

---

## REQ-INFRA-003: Header 导航

**描述**：Header MUST 包含 Logo、主导航、搜索入口和 CTA 按钮。

### 场景：桌面端 Header 显示

```
Given 用户在桌面端（视口宽度 >= 1024px）访问网站
When Header 渲染完成
Then MUST 显示网站 Logo（链接到首页 `/`）
  And MUST 显示主导航链接：Guide, Tools, API, Pricing, Blog
  And MUST 显示搜索图标按钮
  And MUST 显示 CTA 按钮 "Start Using Seedance"
  And 导航链接 SHOULD 高亮当前活跃页面
```

### 场景：移动端 Header 显示

```
Given 用户在移动端（视口宽度 < 768px）访问网站
When Header 渲染完成
Then MUST 显示网站 Logo
  And MUST 显示汉堡菜单按钮（替代展开的导航链接）
  And 导航链接 MUST 隐藏在汉堡菜单中
When 用户点击汉堡菜单按钮
Then 导航菜单 MUST 展开显示所有导航链接
  And 菜单 SHOULD 以动画形式展开
```

---

## REQ-INFRA-004: Footer

**描述**：Footer MUST 包含站点地图链接、社交媒体链接和 Newsletter 订阅。

### 场景：Footer 内容显示

```
Given 用户滚动到页面底部
When Footer 可见
Then MUST 显示站点地图链接，按分组排列（Product / Resources / Company）
  And MUST 显示社交媒体链接图标（Twitter/X, GitHub, YouTube）
  And 社交媒体链接 MUST 在新标签页中打开（`target="_blank"`）
  And 社交媒体链接 MUST 包含 `rel="noopener noreferrer"`
  And MUST 显示版权信息，包含当前年份
```

### 场景：Newsletter 订阅

```
Given Footer 中的 Newsletter 订阅表单可见
When 用户输入有效邮箱地址并提交
Then 表单 SHOULD 显示提交成功反馈
  And 邮箱输入框 MUST 具有 `type="email"` 属性
  And 提交按钮 MUST 可通过键盘访问
```

---

## REQ-INFRA-005: Sidebar 组件

**描述**：Sidebar SHOULD 在内容页面中提供 TOC 导航、相关文章和广告位。

### 场景：TOC 目录导航

```
Given 用户访问包含 Sidebar 的内容页面
When 页面内容包含多个标题（h2, h3）
Then Sidebar MUST 显示基于标题生成的目录导航
  And 目录 MUST 为 sticky 定位，随页面滚动固定
  And 当前可见段落对应的目录项 SHOULD 高亮显示
```

### 场景：广告位预留

```
Given Sidebar 组件渲染完成
When 广告位 slot 存在
Then MUST 预留指定尺寸的广告位容器
  And 广告位 MAY 在无广告内容时隐藏
```

---

## REQ-INFRA-006: 面包屑导航

**描述**：Breadcrumbs MUST 在非首页页面显示，并输出结构化数据。

### 场景：面包屑显示

```
Given 用户访问非首页页面（如 `/guide`）
When 页面渲染完成
Then MUST 显示面包屑导航（如：Home > Guide）
  And 每个面包屑项 MUST 为可点击链接（最后一项除外）
  And MUST 在页面 `<head>` 中输出 JSON-LD BreadcrumbList 结构化数据
```

### 场景：首页不显示面包屑

```
Given 用户访问首页 `/`
When 页面渲染完成
Then 面包屑导航 MUST NOT 显示
```

---

## REQ-INFRA-007: Dark Mode

**描述**：网站 MUST 支持亮色/暗色主题切换。

### 场景：系统偏好自动检测

```
Given 用户首次访问网站
  And 用户未手动设置过主题偏好
When 页面加载
Then 网站 MUST 检测用户操作系统的颜色偏好（`prefers-color-scheme`）
  And MUST 应用对应的主题
  And 页面 MUST NOT 出现主题闪烁（FOUC）
```

### 场景：手动切换主题

```
Given 用户点击主题切换按钮
When 主题从亮色切换到暗色（或反之）
Then 页面 MUST 立即应用新主题
  And 主题偏好 MUST 持久化到 localStorage
  And 下次访问时 MUST 恢复用户选择的主题
```

---

## REQ-INFRA-008: 响应式设计

**描述**：网站 MUST 采用移动端优先的响应式设计。

### 场景：移动端布局

```
Given 用户在移动设备（视口宽度 < 768px）上访问
When 页面渲染完成
Then 内容 MUST 以单列布局显示
  And Sidebar MUST 隐藏或折叠
  And 所有交互元素 MUST 满足最小触摸目标尺寸（44x44px）
  And 文字 MUST 无需缩放即可阅读
```

### 场景：桌面端布局

```
Given 用户在桌面设备（视口宽度 >= 1024px）上访问
When 页面渲染完成
Then 内容页面 SHOULD 显示为主内容区 + Sidebar 双栏布局
  And 最大内容宽度 SHOULD NOT 超过 1280px
```

---

## REQ-INFRA-009: 字体加载

**描述**：网站 MUST 使用 `next/font` 加载字体，确保性能优化。

### 场景：字体正确加载

```
Given 页面开始加载
When 字体资源请求完成
Then 标题 MUST 使用 Inter 字体
  And 正文 MUST 使用系统字体栈
  And 字体加载 MUST NOT 导致布局偏移（CLS = 0）
  And 字体文件 MUST 通过 `next/font` 自托管（非外部 CDN）
```

---

## REQ-INFRA-010: 基础 SEO 元数据

**描述**：网站 MUST 在根布局中配置默认 SEO 元数据。

### 场景：默认 meta tags

```
Given 任意页面未单独配置 metadata
When 搜索引擎爬虫访问该页面
Then 页面 MUST 包含 title（格式：`页面标题 | Seedance.free`）
  And MUST 包含 meta description
  And MUST 包含 Open Graph tags（og:title, og:description, og:image, og:url）
  And MUST 包含 Twitter Card tags（twitter:card, twitter:title, twitter:description）
  And SHOULD 包含 canonical URL
```

### 场景：robots.txt 可访问

```
Given 搜索引擎爬虫请求 `/robots.txt`
When 服务器响应
Then MUST 返回有效的 robots.txt 文件
  And MUST 包含 `Sitemap:` 指令指向 sitemap.xml
  And MUST 允许所有爬虫访问（`User-agent: *`, `Allow: /`）
```

### 场景：sitemap.xml 可访问

```
Given 搜索引擎爬虫请求 `/sitemap.xml`
When 服务器响应
Then MUST 返回有效的 XML sitemap
  And MUST 包含网站所有公开页面的 URL
  And 每个 URL SHOULD 包含 `lastmod` 日期
```
