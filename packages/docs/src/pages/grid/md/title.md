---   
  order: 0
  type: text
  zh_CN: 删格 Grid
  en_US: Grid
  editUrl: $BASE/pages/grid/md/title.md
---

+++ zh_CN

## 删格 Grid [editUrl]

Grid 系统在响应式布局中占有非常重要的地位，Windy-UI 遵循了 12 列的定义，将页面均等分为 12 个区域用于布局。凭借 flex-box 强大的布局功能，
我们可以将页面元素有序地归类，并在不同宽度的窗口下展现不同的部分。如果需要划分更小的列，例如 24 列，则需要修改 Wui 的变量去重新生成一份新的样式文件(css)。

Grid 主要有以下功能：

- 使用 Row 和 Col 进行布局，Row 表示水平方向的整行，Col 表示每个 Row 可以拆分的列
- 支持某列固定宽度其他列均分剩余空间
- 支持响应式布局，在窗口宽度变化时更改列的宽度
- 基于 Flex 布局，列中的子元素可以指定水平对齐方式：居左、居中、居右等
- 支持列中的子元素顶部对齐、垂直居中、底部对齐的方式

+++ en_US

## API [editUrl]
