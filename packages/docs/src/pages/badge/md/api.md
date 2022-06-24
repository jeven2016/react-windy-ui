---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/badge/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Badge</Code>

| 属性           | 名称                  | 类型            | 默认值 | 描述                                                                                                                                                                                                     |
| -------------- | --------------------- | --------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -      | 当需要获取到根节点的 dom 对象时可设置此属性                                                                                                                                                              |
| className      | 样式名称              | string          | badge  |                                                                                                                                                                                                          |
| extraClassName | 额外添加的样式名称    | string          | -      |                                                                                                                                                                                                          |
| type           | Badge 类型            | string          | normal | 值可以是：<Code>normal</Code>, <Code>dot</Code>, <Code>tag</Code>                                                                                                                                        |
| body           | 标记的内容            | react node      | -      |                                                                                                                                                                                                          |
| color          | 颜色                  | string          | error  | 值可以是: <Code>info</Code>, <Code>ok</Code>, <Code>gray</Code>, <Code>warning</Code>, <Code>error</Code>, <Code>dark</Code>,也可以设置颜色对应的值如<Code>\#334433</Code>, <Code>rgb(22,22,22)</Code>等 |
| active         | 激活显示该 Badge      | boolean         | true   |                                                                                                                                                                                                          |
| shake          | 是否定时显示抖动效果  | boolean         | false  |                                                                                                                                                                                                          |
| shakeDuration  | 抖动持续时间(ms)      | number          | 1000   |                                                                                                                                                                                                          |

+++ en_US

## API

api
