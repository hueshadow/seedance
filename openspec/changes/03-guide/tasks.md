# 任务清单：完整指南页

## MDX 内容迁移

- [ ] 将 `how-to-use-seedance-complete-guide.md` 迁移为 MDX 格式（`src/content/guide.mdx`）
- [ ] 安装并配置 MDX 渲染依赖（`next-mdx-remote` 或 `@next/mdx`）
- [ ] 配置 remark 插件：`remark-gfm`（GFM 表格、任务列表支持）
- [ ] 配置 rehype 插件：`rehype-slug`（标题自动添加 id）、`rehype-autolink-headings`（标题锚点链接）
- [ ] 创建 MDX 自定义组件映射（图片用 `next/image`、链接用 `next/link`）

## 页面路由与布局

- [ ] 创建指南页面路由 `src/app/guide/page.tsx`
- [ ] 实现双栏布局：左侧 TOC + 右侧主内容
- [ ] 移动端布局：TOC 折叠为顶部下拉菜单 + 全宽内容

## TOC 目录导航

- [ ] 创建 TOC 组件 `src/components/guide/TableOfContents.tsx`
- [ ] 从 MDX 内容自动提取 h2/h3 标题生成目录树
- [ ] 实现 sticky 定位（桌面端左侧固定）
- [ ] 使用 Intersection Observer 监听各 section 可见性
- [ ] 实现当前可见段落对应目录项的自动高亮
- [ ] 点击目录项平滑滚动到对应段落
- [ ] 移动端：TOC 折叠为可展开的下拉菜单

## 内容分段与内部 CTA

- [ ] 内容按逻辑分段并添加语义化 section 标签
- [ ] "What Is Seedance" 段落末尾 CTA → `/versions`
- [ ] "Versions" 段落末尾 CTA → `/versions`
- [ ] "Access Methods" 段落末尾 CTA → `/register`
- [ ] "Phone Registration" 段落末尾 CTA → `/register`
- [ ] "Prompts" 段落末尾 CTA → `/prompts`
- [ ] "API" 段落末尾 CTA → `/api`
- [ ] CTA 样式统一：卡片式或按钮式，包含箭头图标

## 代码块增强

- [ ] 安装并配置 `rehype-pretty-code`（基于 Shiki 的语法高亮）
- [ ] 选择代码高亮主题（亮色 + 暗色各一套）
- [ ] 创建代码块复制按钮组件 `src/components/ui/CopyButton.tsx`
- [ ] 复制按钮点击后显示 "已复制" 反馈（2 秒后恢复）
- [ ] 支持 Python、JavaScript、cURL 等语言的语法高亮

## 阅读进度条

- [ ] 创建 ReadingProgress 组件 `src/components/guide/ReadingProgress.tsx`
- [ ] 监听页面滚动事件，计算阅读进度百分比
- [ ] 在页面顶部（Header 下方）显示固定进度条
- [ ] 进度条颜色与主题色一致
- [ ] 进度条动画平滑过渡

## Schema 结构化数据

- [ ] 添加 Article JSON-LD（headline, author, datePublished, dateModified, image）
- [ ] 添加 HowTo JSON-LD（name, step[] 对应各操作段落）
- [ ] 验证结构化数据通过 Google Rich Results Test

## SEO 元数据

- [ ] 配置页面 metadata：title "How to Use Seedance: Complete Guide (2025)"
- [ ] 配置 meta description（包含目标关键词，120-160 字符）
- [ ] 配置 Open Graph tags
- [ ] 配置 canonical URL：`https://seedance.free/guide`

## 广告位预留

- [ ] 在文章约 50% 位置插入广告位容器组件
- [ ] 在文章底部插入广告位容器组件
- [ ] 广告位容器设置最小高度，避免内容跳动
- [ ] 广告位在无广告时优雅隐藏

## 性能与优化

- [ ] MDX 内容 SSG 静态生成
- [ ] 图片使用 `next/image` 优化（含 width/height 防止 CLS）
- [ ] 代码高亮 CSS 按需加载
- [ ] Lighthouse Performance 评分目标 >= 90
