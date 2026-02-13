# Proposal 01: 基础架构

## 意图（Intent）

搭建 seedance.free 项目的技术基础架构，包括 Next.js 15 项目初始化、全局布局组件体系、主题系统及基础 SEO 框架。本提案为所有后续页面开发提供统一的技术底座和设计规范。

## 范围（Scope）

### 项目脚手架
- Next.js 15 App Router 项目初始化（TypeScript 严格模式）
- pnpm 包管理器
- ESLint + Prettier 代码规范配置
- Tailwind CSS v4 CSS-first 配置方式

### 全局布局组件
- **Header**：Logo + 主导航（Guide / Tools / API / Pricing / Blog）+ 搜索入口 + CTA 按钮
- **Footer**：站点地图链接 + 社交媒体链接（Twitter/X, GitHub, YouTube）+ Newsletter 订阅表单
- **Sidebar**：目录导航（TOC）+ 相关文章推荐 + 广告位预留
- **Breadcrumbs**：面包屑导航组件，支持 JSON-LD BreadcrumbList

### 主题与样式
- Dark Mode 支持：系统偏好自动检测 + localStorage 持久化 + 手动切换
- 响应式移动端优先设计（断点：sm/md/lg/xl）
- 系统字体栈 + Inter 字体（标题用）
- Tailwind CSS v4 自定义主题变量

### 基础 SEO
- layout.tsx 中的默认 meta tags（title template, description, OG tags）
- robots.txt 配置
- sitemap.xml 自动生成配置

## 技术方案（Approach）

- 使用 Next.js 15 App Router 架构，充分利用 Server Components 和流式渲染
- Tailwind CSS v4 采用 CSS-first 配置（`@theme` 指令），不再使用 `tailwind.config.js`
- 组件化开发，所有布局组件放置于 `src/components/layout/` 目录
- Dark Mode 通过 React Context + `next-themes` 实现
- 字体通过 `next/font` 加载，确保零布局偏移

## 阶段（Phase）

Phase 1（MVP）

## 依赖

无（首个提案）
