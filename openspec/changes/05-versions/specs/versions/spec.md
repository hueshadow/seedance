# 规格说明：版本对比页

> 变更类型：ADDED
> 领域：versions
> 提案：05-versions

---

## REQ-VER-001: 对比表展示与交互

**描述**：版本对比页 MUST 提供交互式对比表，清晰展示各版本差异。

### 场景：对比表默认展示

```
Given 用户访问 `/versions` 页面
When 页面渲染完成
Then MUST 显示包含全部 6 个版本的对比表
  And 对比表 MUST 包含以下版本列：1.0 Lite、1.0 Mini、1.0 Pro、1.0 Pro Fast、1.5 Pro、2.0
  And 对比表 MUST 包含以下维度行：分辨率、生成速度、音频支持、信用点消耗、可用平台、最大视频时长、参考输入支持
  And 每个单元格 MUST 显示对应版本在该维度的具体数值或状态
```

### 场景：对比表列高亮

```
Given 对比表已渲染
When 用户鼠标悬停在某个版本列上
Then 该列 MUST 整列高亮显示（背景色变化）
  And 高亮 SHOULD 有平滑过渡效果
  And 同一时间 MUST 只有一列处于高亮状态
```

### 场景：布尔值维度展示

```
Given 对比表中存在布尔值维度（如音频支持、参考输入支持）
When 渲染该维度的单元格
Then 支持的状态 MUST 使用肯定图标（如 ✓）展示
  And 不支持的状态 MUST 使用否定图标（如 ✗）展示
  And 图标 MUST 包含 `aria-label` 描述其含义（如 \"支持\" / \"不支持\"）
```

---

## REQ-VER-002: 版本详细卡片

**描述**：每个版本 SHOULD 提供可展开的详细信息卡片。

### 场景：版本卡片展示

```
Given 用户访问 `/versions` 页面
When 滚动到版本卡片区域
Then 每个版本 MUST 显示一张摘要卡片
  And 卡片 MUST 包含版本名称和核心参数摘要
  And 卡片 SHOULD 包含推荐标签（如 \"最受欢迎\"）
  And 卡片 MUST 支持点击展开查看完整详情
```

### 场景：卡片展开详情

```
Given 某个版本卡片处于折叠状态
When 用户点击展开
Then MUST 显示该版本的完整信息：亮点列表、适用场景描述
  And MUST 包含至少一个 CTA 按钮链接到可使用该版本的平台
  And 展开过程 SHOULD 有平滑动画
```

---

## REQ-VER-003: 决策流程图

**描述**：版本对比页 SHOULD 提供交互式决策引导，帮助用户选择最适合的版本。

### 场景：决策流程启动

```
Given 用户访问 `/versions` 页面
When 用户滚动到 \"Which version is right for you?\" 区域
Then MUST 显示决策流程的第一个问题
  And 问题 MUST 提供 2-3 个可选答案
  And 每个答案 MUST 为可点击的选项卡片或按钮
```

### 场景：决策流程推进

```
Given 用户正在进行决策流程
When 用户选择某个答案
Then MUST 自动进入下一个问题
  And 进度指示器 MUST 显示当前步骤（如 \"第 2 步 / 共 3 步\"）
  And 用户 MUST 能返回上一步修改选择
```

### 场景：决策结果展示

```
Given 用户完成所有决策问题
When 最后一个问题回答完毕
Then MUST 显示推荐的 1-2 个版本
  And 推荐结果 MUST 包含版本名称和推荐理由
  And 推荐结果 MUST 包含使用链接（跳转到对应平台）
  And MUST 提供 \"重新选择\" 按钮回到第一步
```

---

## REQ-VER-004: 版本时间线

**描述**：版本对比页 SHOULD 包含版本发布时间线可视化。

### 场景：时间线展示

```
Given 用户访问 `/versions` 页面
When 滚动到时间线区域
Then MUST 显示 Seedance 各版本的发布时间线
  And 每个时间节点 MUST 标注版本名称和发布日期
  And 每个时间节点 SHOULD 标注该版本的关键改进点
  And 时间线 MUST 按时间顺序从早到晚排列
```

### 场景：时间线响应式

```
Given 用户在不同设备上查看时间线
When 视口宽度 >= 768px
Then 时间线 SHOULD 以水平布局展示
When 视口宽度 < 768px
Then 时间线 MUST 切换为垂直布局
```

---

## REQ-VER-005: Schema 结构化数据

**描述**：版本对比页 MUST 包含结构化数据标记。

### 场景：结构化数据输出

```
Given 搜索引擎爬虫访问 `/versions`
When 解析页面 HTML
Then MUST 包含 JSON-LD 格式的结构化数据
  And 结构化数据 MUST 准确反映页面中的版本对比信息
  And JSON-LD MUST 通过 Google Rich Results Test 验证无错误
```

---

## REQ-VER-006: 数据准确性

**描述**：版本对比页中的所有数据 MUST 准确反映各版本的实际参数。

### 场景：版本数据一致性

```
Given 版本数据已定义
When 页面渲染对比表和卡片
Then 对比表中的数据 MUST 与版本卡片中的数据完全一致
  And 数据 MUST 与 Seedance 官方发布的版本参数一致
  And 数据更新时 MUST 同步更新对比表和卡片中的所有引用
```

---

## REQ-VER-007: 移动端响应式

**描述**：版本对比页 MUST 在移动端提供可用的浏览体验。

### 场景：移动端对比表

```
Given 用户在移动端（视口宽度 < 768px）访问 `/versions`
When 页面渲染完成
Then 对比表 MUST 切换为卡片式堆叠布局（每个版本一张卡片）
  Or 对比表 MUST 支持横向滚动且首列（维度名称）固定
  And 卡片 SHOULD 支持左右滑动切换版本
  And 所有可交互元素 MUST 满足最小触摸目标尺寸（44x44px）
```

### 场景：移动端决策流程

```
Given 用户在移动端使用决策流程
When 决策问题显示
Then 选项按钮 MUST 垂直堆叠排列
  And 按钮 MUST 满足最小触摸目标尺寸
  And 步骤间切换 SHOULD 有滑动过渡动画
```

---

## REQ-VER-008: SEO 元数据

**描述**：版本对比页 MUST 配置针对版本关键词优化的 SEO 元数据。

### 场景：版本页 meta tags

```
Given 搜索引擎爬虫访问 `/versions`
When 解析页面 `<head>`
Then title MUST 包含 \"Seedance\" 和 \"Versions\" 关键词
  And title SHOULD 包含 \"1.0 Pro\" 或 \"2.0\" 等高流量版本关键词
  And meta description MUST 包含 \"seedance\"、\"version\"、\"comparison\" 等关键词
  And meta description 长度 MUST 在 120-160 字符之间
  And canonical URL MUST 为 `https://seedance.free/versions`
  And MUST 包含 og:title、og:description
```
