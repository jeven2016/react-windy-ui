---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/space/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Space</Code>

| 属性           | 名称                                   | 类型            | 默认值     | 描述                                                                                                                                |
| -------------- | -------------------------------------- | --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用                  | function \| Ref | -          | 当需要获取到 dom 对象时可设置此属性                                                                                                 |
| className      | 样式名称                               | string          | space-row  |                                                                                                                                     |
| extraClassName | 额外添加的样式名称                     | string          | -          |                                                                                                                                     |
| align          | 指定列在垂直方向的排列方式             | string          | start      | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>                                                                 |
| alignItem      | 指定 Item 中的内容在垂直方向的排列方式 | string          | start      | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>                                                                 |
| justifyItem    | 指定 Item 中的内容在水平方向的排列方式 | string          | start      | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| gutter         | 指定列在垂直、水平方向的间隔           | object          | -          | <Code>{x,y}</Code>, x 指水平方向上的间隔(像素)，y 指垂直方向上的间隔(像素)。                                                        |
| wrap           | 内容超出时，是否设置 flex-wrap 为 wrap | boolean         | false      |                                                                                                                                     |
| stepDirection  | 布局方向                               | string          | horizontal | 值可以是： <Code>horizontal（水平布局</Code>），<Code>vertical（垂直布局）</Code>                                                   |
| block          | 将宽度设置为 100%的行宽                | boolean         | false      |                                                                                                                                     |
| blockItem      | 每个 item 的宽度是否为 100%的行宽      | boolean         | false      |                                                                                                                                     |

+++ en_US

## API [editUrl]
