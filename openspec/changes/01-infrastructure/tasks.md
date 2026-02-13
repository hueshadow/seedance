# 任务清单：基础架构

## 项目初始化

- [ ] 使用 `pnpm create next-app@latest` 初始化 Next.js 15 项目（App Router, TypeScript, ESLint, Tailwind CSS）
- [ ] 配置 TypeScript 严格模式（`strict: true`, `noUncheckedIndexedAccess: true`）
- [ ] 配置 ESLint 规则（`@next/eslint-plugin-next`, `eslint-config-prettier`）
- [ ] 配置 Prettier（`.prettierrc`：singleQuote, semi, trailingComma, printWidth）
- [ ] 配置 Tailwind CSS v4 CSS-first 方式（`app/globals.css` 中使用 `@theme` 指令定义设计令牌）
- [ ] 设置项目目录结构：`src/app/`, `src/components/`, `src/lib/`, `src/types/`

## 全局布局

- [ ] 创建根布局 `src/app/layout.tsx`（HTML lang="en", 字体加载, 主题 Provider, 默认 meta tags）
- [ ] 创建 Header 组件 `src/components/layout/Header.tsx`
  - [ ] Logo（链接到首页）
  - [ ] 主导航菜单（Guide / Tools / API / Pricing / Blog）
  - [ ] 搜索入口图标按钮
  - [ ] CTA 按钮 "Start Using Seedance"
  - [ ] 移动端汉堡菜单
- [ ] 创建 Footer 组件 `src/components/layout/Footer.tsx`
  - [ ] 站点地图链接分组（Product / Resources / Company）
  - [ ] 社交媒体链接（Twitter/X, GitHub, YouTube）
  - [ ] Newsletter 邮箱订阅表单
  - [ ] 版权信息
- [ ] 创建 Sidebar 组件 `src/components/layout/Sidebar.tsx`
  - [ ] TOC 目录导航（接收 headings 数据）
  - [ ] 相关文章推荐区域
  - [ ] 广告位 slot 预留
- [ ] 创建 Breadcrumbs 组件 `src/components/layout/Breadcrumbs.tsx`
  - [ ] 基于路由自动生成面包屑
  - [ ] 输出 JSON-LD BreadcrumbList 结构化数据

## 主题与样式

- [ ] 安装并配置 `next-themes`
- [ ] 创建 ThemeProvider 包裹根布局
- [ ] 实现 Dark Mode 切换按钮组件 `src/components/ui/ThemeToggle.tsx`
- [ ] 在 Tailwind CSS v4 `@theme` 中定义亮色/暗色设计令牌
- [ ] 配置响应式断点（sm: 640px, md: 768px, lg: 1024px, xl: 1280px）
- [ ] 通过 `next/font` 加载 Inter 字体（标题用）+ 系统字体栈（正文用）

## 基础 SEO

- [ ] 在 `layout.tsx` 中配置默认 metadata（title template: `%s | Seedance.free`, description, OG image）
- [ ] 创建 `public/robots.txt`（允许所有爬虫, 指向 sitemap）
- [ ] 配置 `next-sitemap` 或 Next.js 内置 sitemap 生成（`src/app/sitemap.ts`）
- [ ] 添加 favicon 和 apple-touch-icon 到 `src/app/` 目录
