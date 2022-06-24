---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/blockquote/md/api.md
---

+++ zh_CN

## API

- <Code type="normal">Blockquote</Code>的属性如下所示:

| 属性            | 名称                  | 类型            | 默认值     | 描述                                                                         |
| --------------- | --------------------- | --------------- | ---------- | ---------------------------------------------------------------------------- |
| ref             | 根节点 Dom 对象的引用 | function \| ref | -          | 当需要获取到根节点的 dom 对象时可设置此属性                                  |
| className       | 样式名称              | string          | blockquote |                                                                              |
| extraClassName  | 额外添加的样式名称    | string          | -          |                                                                              |
| type            | 类型                  | string          | normal     | 值可以是：<Code>normal</Code>、<Code>primary</Code>、 <Code>secondary</Code> |
| hasBox          | 是否有阴影            | bool            | false      |                                                                              |
| hasBorder       | 是否有边框            | bool            | false      |                                                                              |
| hasBackground   | 是否有背景色          | bool            | false      |                                                                              |
| hasBorderRadius | 边框是否有弧度        | bool            | true       |                                                                              |

- <Code type="normal">Header</Code>的属性如下所示:

| 属性           | 名称                  | 类型            | 默认值 | 描述                                        |
| -------------- | --------------------- | --------------- | ------ | ------------------------------------------- |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -      | 当需要获取到根节点的 dom 对象时可设置此属性 |
| className      | 样式名称              | string          | header |                                             |
| extraClassName | 额外添加的样式名称    | string          | -      |                                             |

- <Code type="normal">Footer</Code>的属性如下所示:

| 属性           | 名称                       | 类型            | 默认值 | 描述                                                                                                                                |
| -------------- | -------------------------- | --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用      | function \| ref | -      | 当需要获取到根节点的 dom 对象时可设置此属性                                                                                         |
| className      | 样式名称                   | string          | footer |                                                                                                                                     |
| extraClassName | 额外添加的样式名称         | string          | -      |                                                                                                                                     |
| justify        | 指定列在水平方向的排列方式 | string          | start  | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |

+++ en_US

## API

api
