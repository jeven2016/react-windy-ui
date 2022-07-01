---
order: 100
type: text
zh_CN: API
en_US: API
editUrl: $BASE/pages/affix/md/api.md
---

+++ zh_CN

## API

- <Code>Alert</Code>

| 属性           | 名称                           | 类型                | 默认值 | 描述                                       |
| -------------- | ------------------------------ | ------------------- | ------ | ------------------------------------------ |
| ref            | Dom 对象的引用                 | function \| ref     | -      | 当需要获取 dom 对象时可设置此属性          |
| className      | 样式名称                       | string              | affix  |                                            |
| extraClassName | 额外添加的样式名称             | string              | -      |                                            |
| top            | 距离顶部位置（px）             | number              | -      |                                            |
| bottom         | 距离底部位置（px）             | number              | -      |                                            |
| disabled       | 禁用 Affix                     | boolean             | false  |                                            |
| block          | 当生效后，是否宽度占据整行显示 | boolean             | false  | 生效后，会添加 block 样式以使宽度变为 100% |
| onChange       | Affix 发生状态切换时的回调     | function(isAffixed) | -      |                                            |

+++ en_US

## API

api
