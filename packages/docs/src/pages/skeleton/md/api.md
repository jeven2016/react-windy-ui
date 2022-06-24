---
order: 100
type: text
zh_CN: API
en_US: API
editUrl: $BASE/pages/skeleton/md/api.md
---

+++ zh_CN

## API

- <Code><strong>Skeleton</strong></Code>

| 属性      | 名称           | 类型            | 默认值   | 描述                              |
| --------- | -------------- | --------------- | -------- | --------------------------------- |
| ref       | Dom 对象的引用 | function \| ref | -        | 当需要获取 dom 对象时可设置此属性 |
| className | 样式名称       | string          | skeleton |                                   |

- <Code><strong>Skeleton.Item</strong></Code>

| 属性           | 名称               | 类型            | 默认值        | 描述                                                                   |
| -------------- | ------------------ | --------------- | ------------- | ---------------------------------------------------------------------- |
| ref            | Dom 对象的引用     | function \| ref | -             | 当需要获取 dom 对象时可设置此属性                                      |
| className      | 样式名称           | string          | skeleton-item |                                                                        |
| extraClassName | 额外添加的样式名称 | string          | -             |                                                                        |
| type           | 类型               | string          | square        | 值可以是：<Code>square</Code>, <Code>circle</Code>                     |
| width          | Item 的宽度        | string          | -             | CSS 中的默认值： square 类型时，值为 100%， circle 类型时，值为 2.5rem |
| height         | Item 的高度        | string          | -             | CSS 中的默认值： square 类型时，值为 1rem， circle 类型时，值为 2.5rem |

+++ en_US

## API

api
