---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/toggle/md/api.md
---

+++ zh_CN

## API [editUrl]

Toggle 的属性如下所示

| 属性           | 名称                    | 类型            | 默认值           | 描述                                                                                                 |
| -------------- | ----------------------- | --------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用   | function \| ref | -                | 当需要获取到根节点的 dom 对象时可设置此属性                                                          |
| className      | 样式名称                | string          | toggle-container |                                                                                                      |
| extraClassName | 额外添加的样式名称      | string          | -                |                                                                                                      |
| type           | Toggle 类型             | string          | -                | 值可以是：<Code>normal</Code>, <Code>primary</Code>, <Code>secondary</Code>, 默认<Code>normal</Code> |
| defaultActive  | 初始是否激活选中        | boolean         | false            |                                                                                                      |
| active         | 是否激活选中            | boolean         | false            |                                                                                                      |
| block          | 将宽度设置为 100%的行宽 | boolean         | `false`          |                                                                                                      |
| disabled       | 是否禁用                | boolean         | false            |                                                                                                      |
| onChange       | 状态变化触发的回调      | function        | -                | 参数格式为： <Code>function(active, e)</Code>                                                        |
| label          | label 内容              | string          | -                | 当是 Object 类型时，格式为<Code>{on, off, showInbar}</Code>                                          |

+++ en_US

## API [editUrl]
