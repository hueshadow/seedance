# 任务清单：Prompt 库与交互式工具集

## Prompt 数据结构

- [ ] 定义 Prompt 数据类型接口（`PromptItem`：id, title, description, fullPrompt, category, tags[], version, isPremium）
- [ ] 定义 Prompt 分类枚举（`PromptCategory`：ecommerce, shortFilm, musicVideo, socialMedia, productDemo）
- [ ] 创建 Prompt 数据文件 `src/data/prompts.ts`，每个分类至少 5 条 Prompt
- [ ] 定义标签数据类型（`PromptTag`：name, slug, count）
- [ ] 创建版本兼容性标记（Seedance 1.0 / 2.0 / Lite）

## Prompt Library 页面

- [ ] 创建 Prompt 库页面路由 `src/app/prompts/page.tsx`
- [ ] 创建 Prompt 卡片组件 `src/components/prompts/PromptCard.tsx`
- [ ] 卡片包含：标题、预览描述（截断至 2 行）、分类标签、版本标签、复制按钮
- [ ] 创建分类筛选栏组件 `src/components/prompts/CategoryFilter.tsx`
- [ ] 创建搜索框组件 `src/components/prompts/PromptSearch.tsx`（前端模糊搜索）
- [ ] 创建标签筛选组件 `src/components/prompts/TagFilter.tsx`
- [ ] 实现复制到剪贴板功能（`navigator.clipboard.writeText()`），复制后显示成功反馈
- [ ] 高级 Prompt 卡片显示锁定状态 UI（半透明遮罩 + 锁图标 + "Coming Soon" 标签）
- [ ] 实现 URL 参数同步筛选状态（`?category=ecommerce&tag=product`）

## Prompt Builder 工具

- [ ] 创建 Prompt Builder 页面路由 `src/app/tools/prompt-builder/page.tsx`
- [ ] 创建表单步骤组件 `src/components/tools/PromptBuilderForm.tsx`
- [ ] 表单字段：场景类型（下拉）、主体描述（文本输入）、动作（下拉+自定义）、镜头运动（多选）、光线（下拉）、风格（多选标签）
- [ ] 定义各字段选项数据 `src/data/prompt-builder-options.ts`
- [ ] 实现实时 Prompt 预览面板 `src/components/tools/PromptPreview.tsx`
- [ ] 预览面板随表单输入实时更新生成的 Prompt 文本
- [ ] 创建 @Reference 标签辅助组件 `src/components/tools/ReferenceHelper.tsx`
- [ ] @Reference 支持选择引用类型（Image / Video），自动插入 `@Image1` / `@Video1` 语法
- [ ] 实现一键复制生成的完整 Prompt
- [ ] localStorage 保存最近 5 条生成历史

## Credit Calculator 工具

- [ ] 创建 Calculator 页面路由 `src/app/tools/calculator/page.tsx`
- [ ] 创建计算器组件 `src/components/tools/CreditCalculator.tsx`
- [ ] 输入控件：视频数量（数字输入）、时长滑块（4-15 秒）、分辨率选择（480p/720p/1080p）、平台选择（下拉）
- [ ] 定义各平台信用点消耗数据 `src/data/credit-rates.ts`
- [ ] 实现实时计算逻辑：信用点消耗 = 视频数量 × 单次消耗（基于时长+分辨率）
- [ ] 输出展示：总信用点消耗、预估费用（USD/CNY）、推荐套餐
- [ ] 创建竞品费用对比区域（同等用量下 Sora / Veo / Kling 的费用）
- [ ] 输入变化时实时更新所有输出

## Model Comparison 工具

- [ ] 创建 Model Comparison 页面路由 `src/app/tools/compare/page.tsx`
- [ ] 定义模型数据类型接口（`AIModel`：name, resolution, maxDuration, audioSupport, pricing, speed, features[]）
- [ ] 创建模型数据文件 `src/data/models.ts`，包含 6 个模型的完整数据
- [ ] 创建模型选择器组件 `src/components/tools/ModelSelector.tsx`（两个下拉框）
- [ ] 创建并排对比表组件 `src/components/tools/ComparisonTable.tsx`
- [ ] 对比维度：最大分辨率、最大时长、音频支持、价格范围、生成速度、特色功能
- [ ] 优势项视觉高亮（绿色标记或勾选图标）
- [ ] 默认对比：Seedance 2.0 vs Sora 2

## SEO 元数据

- [ ] `/prompts` 页面 metadata：title 包含 "Seedance Prompt Library"，description 包含 "prompt" 关键词
- [ ] `/tools/prompt-builder` 页面 metadata：title 包含 "Seedance Prompt Builder"
- [ ] `/tools/calculator` 页面 metadata：title 包含 "Seedance Credit Calculator"
- [ ] `/tools/compare` 页面 metadata：title 包含 "Seedance Model Comparison"
- [ ] 所有页面配置 canonical URL 和 Open Graph tags

## 响应式设计

- [ ] Prompt 卡片网格：桌面 3 列、平板 2 列、移动 1 列
- [ ] Prompt Builder：桌面端表单和预览左右分栏，移动端上下堆叠
- [ ] Calculator：移动端输入控件全宽，滑块触摸友好（44x44px 最小触摸目标）
- [ ] Model Comparison：移动端对比表切换为上下堆叠卡片

## 性能优化

- [ ] 工具页面组件使用 `next/dynamic` 动态导入
- [ ] Prompt 数据 SSG 静态生成，筛选逻辑客户端执行
- [ ] localStorage 读写使用 try-catch 防御（隐私模式兼容）
- [ ] Lighthouse Performance 评分目标 >= 90
