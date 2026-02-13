# 规格说明：交互式工具集

> 变更类型：ADDED
> 领域：tools
> 提案：07-prompts-and-tools

---

## REQ-TOOL-001: Prompt Builder 表单流程

**描述**：Prompt Builder MUST 提供结构化的交互式表单，引导用户逐步构建 Prompt。

### 场景：表单字段展示

```
Given 用户访问 `/tools/prompt-builder` 页面
When 页面渲染完成
Then MUST 显示包含以下字段的交互式表单：
  - 场景类型（下拉选择）
  - 主体描述（文本输入框）
  - 动作（下拉选择 + 自定义输入）
  - 镜头运动（多选复选框）
  - 光线（下拉选择）
  - 风格（多选标签）
  And 每个字段 MUST 有清晰的标签和占位提示文本
  And 场景类型和主体描述 MUST 为必填字段
  And 其余字段 SHOULD 为可选字段，有合理的默认值
```

### 场景：表单选项数据

```
Given Prompt Builder 表单已渲染
When 用户展开下拉选项
Then 场景类型 MUST 包含至少以下选项：E-commerce、Short Film、Music Video、Social Media、Product Demo
  And 镜头运动 MUST 包含：Pan、Tilt、Zoom In、Zoom Out、Dolly、Tracking、Static
  And 光线 MUST 包含：Natural、Studio、Golden Hour、Neon、Dramatic、Soft
  And 风格 MUST 包含：Cinematic、Realistic、Anime、3D Render、Vintage、Minimalist
```

---

## REQ-TOOL-002: Prompt 实时预览

**描述**：Prompt Builder MUST 提供实时预览面板，随用户输入动态更新生成的 Prompt 文本。

### 场景：实时预览更新

```
Given 用户在 Prompt Builder 表单中输入或选择内容
When 任意字段值发生变化
Then 预览面板 MUST 在 200ms 内更新生成的 Prompt 文本
  And 预览文本 MUST 将所有字段值组合为一段连贯的英文 Prompt
  And 预览面板 MUST 始终可见（桌面端与表单并排，移动端在表单下方）
  And 空字段 MUST NOT 在预览中生成占位文本或空白段落
```

### 场景：预览面板布局

```
Given 用户在桌面端访问 Prompt Builder
When 页面渲染完成
Then 表单和预览面板 MUST 左右分栏显示
  And 预览面板 SHOULD 使用 sticky 定位，随页面滚动保持可见

Given 用户在移动端（视口宽度 < 768px）访问 Prompt Builder
When 页面渲染完成
Then 表单和预览面板 MUST 上下堆叠显示
  And 预览面板 SHOULD 位于表单下方
```

---

## REQ-TOOL-003: @Reference 语法生成

**描述**：Prompt Builder MUST 支持 @Reference 标签辅助功能，帮助用户生成引用语法。

### 场景：@Reference 辅助交互

```
Given 用户在 Prompt Builder 中使用 @Reference 功能
When 用户选择引用类型
Then MUST 提供引用类型选择：Image（图片引用）和 Video（视频引用）
  And 选择 Image 后 MUST 在 Prompt 中插入 `@Image1` 语法
  And 选择 Video 后 MUST 在 Prompt 中插入 `@Video1` 语法
  And 多次添加引用时 MUST 自动递增编号（`@Image1`、`@Image2`...）
  And 引用标签在预览中 MUST 以视觉高亮方式显示（区别于普通文本）
```

---

## REQ-TOOL-004: 复制生成的 Prompt

**描述**：Prompt Builder MUST 支持一键复制生成的完整 Prompt 文本。

### 场景：复制完整 Prompt

```
Given 用户已通过表单生成 Prompt 文本
When 用户点击预览面板的复制按钮
Then MUST 将完整的 Prompt 文本复制到系统剪贴板
  And 复制按钮 MUST 显示成功反馈
  And 成功反馈 SHOULD 在 2 秒后自动恢复
```

### 场景：生成历史保存

```
Given 用户成功复制了一条 Prompt
When 复制操作完成
Then SHOULD 将该 Prompt 保存到 localStorage 的生成历史中
  And 历史记录 SHOULD 保留最近 5 条
  And 用户 SHOULD 能够查看和重新加载历史记录
  And localStorage 读写 MUST 使用 try-catch 包裹（兼容隐私模式）
```

---

## REQ-TOOL-005: Credit Calculator 输入

**描述**：Credit Calculator MUST 提供完整的费用估算输入控件。

### 场景：计算器输入控件

```
Given 用户访问 `/tools/calculator` 页面
When 页面渲染完成
Then MUST 显示以下输入控件：
  - 视频数量：数字输入框（默认值 10，范围 1-1000）
  - 视频时长：滑块控件（范围 4-15 秒，步长 1 秒，默认 5 秒）
  - 分辨率：单选按钮组（480p / 720p / 1080p，默认 720p）
  - 平台选择：下拉框（即梦 / Dreamina / fal.ai / Replicate，默认 Dreamina）
  And 所有输入控件 MUST 有清晰的标签
  And 数字输入 SHOULD 在移动端触发数字键盘
  And 滑块控件 MUST 显示当前选中值
```

---

## REQ-TOOL-006: Credit Calculator 输出

**描述**：Credit Calculator MUST 实时展示费用估算结果。

### 场景：计算结果展示

```
Given 用户已设置计算器输入参数
When 任意输入值发生变化
Then MUST 实时更新以下输出：
  - 总信用点消耗
  - 预估费用（根据所选平台显示 USD 或 CNY）
  - 推荐套餐方案（基于用量匹配最优套餐）
  And 计算结果更新 MUST 无延迟感（< 100ms）
  And 费用显示 MUST 精确到小数点后 2 位
```

### 场景：竞品费用对比

```
Given 计算器已显示当前平台的费用估算
When 用户查看计算结果区域
Then SHOULD 同时显示同等用量下竞品的费用估算
  And 竞品 MUST 包含：Sora 2、Veo 3.1、Kling
  And 对比 SHOULD 以视觉方式突出 Seedance 的价格优势（如柱状图或高亮标注）
```

---

## REQ-TOOL-007: Model Comparison 选择与展示

**描述**：Model Comparison 工具 MUST 支持任意两个 AI 视频模型的并排对比。

### 场景：模型选择

```
Given 用户访问 `/tools/compare` 页面
When 页面渲染完成
Then MUST 显示两个模型选择下拉框（Model A 和 Model B）
  And 可选模型 MUST 包含：Seedance 2.0、Sora 2、Veo 3.1、Kling 2.0、Hailuo、Wan
  And 默认选择 MUST 为 Seedance 2.0 vs Sora 2
  And 两个下拉框 MUST NOT 允许选择相同的模型
```

### 场景：对比表展示

```
Given 用户已选择两个模型
When 对比表渲染完成
Then MUST 以并排表格形式展示以下对比维度：
  - 最大分辨率
  - 最大视频时长
  - 音频支持（是/否 + 详情）
  - 价格范围
  - 生成速度（预估）
  - 特色功能列表
  And 每个维度中占优的一方 SHOULD 以视觉高亮标记（绿色背景或勾选图标）
  And 对比数据 MUST 标注最后更新日期
```

### 场景：移动端对比

```
Given 用户在移动端（视口宽度 < 768px）访问 `/tools/compare`
When 页面渲染完成
Then 并排对比表 MUST 切换为上下堆叠的卡片布局
  Or 表格 MUST 支持横向滚动
  And 模型选择器 MUST 全宽显示
  And 所有可交互元素 MUST 满足最小触摸目标尺寸（44x44px）
```

---

## REQ-TOOL-008: 工具页面性能

**描述**：所有工具页面 MUST 保持良好的加载性能。

### 场景：动态加载

```
Given 用户访问任意工具页面
When 页面加载
Then 工具组件 SHOULD 使用 `next/dynamic` 动态导入
  And 动态导入 MUST 提供加载占位符（skeleton 或 spinner）
  And 首屏 LCP SHOULD 小于 2.5 秒
  And Lighthouse Performance 评分 MUST >= 90
```

### 场景：客户端状态管理

```
Given 工具页面使用客户端交互
When 组件渲染
Then MUST 使用 `'use client'` 指令标记客户端组件
  And 状态管理 MUST 使用 React useState/useReducer
  And MUST NOT 引入额外的状态管理库
  And localStorage 操作 MUST 在 useEffect 中执行（避免 SSR 错误）
```
