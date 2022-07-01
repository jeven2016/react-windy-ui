---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/grid/md/api.md
---

+++ zh_CN

## API [editUrl]

- 依据 Bootstrap 的 Grid 设计，窗口从宽度上分为以下几例

|          | Extra small          | Small                | Medium               | Large                | Extra large          |
| -------- | -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| 窗口宽度 | <576px               | ≥576px               | ≥768px               | ≥992px               | ≥1200px              |
| 值的范围 | [0, 576)             | [576, 768)           | [768,992)            | [992,1200)           | [1200, ..]           |
| 对应样式 | <Code>.col-xs</Code> | <Code>.col-sm</Code> | <Code>.col-md</Code> | <Code>.col-lg</Code> | <Code>.col-xl</Code> |

- <Code>Row</Code>的属性如下所示：

| 属性           | 名称                         | 类型            | 默认值        | 描述                                                                                                                                |
| -------------- | ---------------------------- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ref            | Input Dom 对象的引用         | function \| ref | -             | 当需要获取 dom 对象时可设置此属性                                                                                                   |
| className      | 样式名称                     | string          | row           |                                                                                                                                     |
| extraClassName | 额外添加的样式名称           | string          | -             |                                                                                                                                     |
| justify        | 指定列在水平方向的排列方式   | string          | start         | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align          | 指定列在垂直方向的排列方式   | string          | start         | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>                                                                 |
| gutter         | 指定列在垂直、水平方向的间隔 | object          | {x: 0 ,y : 0} | x 指水平方向上的间隔(像素)，y 指垂直方向上的间隔(像素)                                                                              |

- <Code>Col</Code>的属性如下所示：

| 属性           | 名称                               | 类型            | 默认值 | 描述                                                                                                                                                        |
| -------------- | ---------------------------------- | --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref            | Input Dom 对象的引用               | function \| ref | -      | 当需要获取 dom 对象时可设置此属性                                                                                                                           |
| className      | 样式名称                           | string          | -      |                                                                                                                                                             |
| extraClassName | 额外添加的样式名称                 | string          | -      |                                                                                                                                                             |
| col            | 固定宽度下占据的列数               | number          | -      |                                                                                                                                                             |
| xs             | xs 尺寸下占据的列数                | number          | -      |                                                                                                                                                             |
| sm             | sm 尺寸下占据的列数                | number          | -      |                                                                                                                                                             |
| md             | md 尺寸下占据的列数                | number          | -      |                                                                                                                                                             |
| lg             | lg 尺寸下占据的列数                | number          | -      |                                                                                                                                                             |
| xl             | xl 尺寸下占据的列数                | number          | -      |                                                                                                                                                             |
| xsOffset       | xsOffset 尺寸下偏移的列数          | number          | -      |                                                                                                                                                             |
| smOffset       | smOffset 尺寸下偏移的列数          | number          | -      |                                                                                                                                                             |
| mdOffset       | mdOffset 尺寸下偏移的列数          | number          | -      |                                                                                                                                                             |
| lgOffset       | lgOffset 尺寸下偏移的列数          | number          | -      |                                                                                                                                                             |
| xlOffset       | xlOffset 尺寸下偏移的列数          | number          | -      |                                                                                                                                                             |
| order          | 顺序                               | number          | -      | 值越小排列越靠前                                                                                                                                            |
| gutter         | 指定列在垂直、水平方向的间隔       | object          | -      | x 指水平方向上的间隔(像素)，y 指垂直方向上的间隔(像素)。 可在 Row 上定义，Col 上的 gutter 配置会覆盖 Row 上配置的值                                         |
| flexCol        | 是否转化为 flex 布局的 Col         | boolean         | false  | 默认为 block, 设置为 flex 布局后，里面的内容会在水平和垂直方位上居中显示                                                                                    |
| justify        | 指定列下的元素在水平方向的排列方式 | string          | center | flexCol 为 true 时生效。值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align          | 指定列下的元素在垂直方向的排列方式 | string          | center | flexCol 为 true 时生效。值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>                                                                 |

+++ en_US

## API [editUrl]
