---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/tabs/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Tabs</Code>的属性如下所示：

| 属性           | 名称                        | 类型            | 默认值                     | 描述                                                         |
| -------------- | --------------------------- | --------------- | -------------------------- | ------------------------------------------------------------ |
| ref            | Dom 对象的引用              | function \| ref | -                          | 当需要获取 dom 对象时可设置此属性                            |
| className      | 样式名称                    | string          | tab                        |                                                              |
| extraClassName | 额外添加的样式名称          | string          | -                          |                                                              |
| hasRipple      | 是否有点击的水纹效果        | boolean         | true                       |                                                              |
| rippleColor    | 水纹的颜色                  | string          | #ccc                       | 颜色字符串值，例如<Code>'#333'</Code>                        |
| type           | 类型                        | string          | normal                     | 值可以是：normal, card, secondaryCard                        |
| defaultActive  | 默认激活选中的 Item         | string\|number  | -                          | 对应 TabItem 的 value                                        |
| active         | 当前激活选中的 Item         | string\|number  | -                          | 当此属性设置后 onChange 回调会被调用，以便切换选中的 TabItem |
| onChange       | 当切换 TabItem 时的回调     | function        | -                          |                                                              |
| onRemove       | 当删除某个 TabItem 时的回调 | function(value) | -                          |                                                              |
| removable      | 是否允许删除某个 Tab        | boolean         | -                          |                                                              |
| equalWidth     | 是否每个 TabItem 等宽显示   | boolean         | false                      |                                                              |
| position       | TabItem 的显示位置          | string          | top                        | 值可以是： top, bottom, left right                           |
| hasBorder      | 是否有边框                  | boolean         | true                       |                                                              |
| cardBorder     | TabItem 显示为卡片时的边框  | string          | 值可以是： none, one, full |                                                              |
| scrollable     | 是否允许内容超出时滚动显示  | boolean         | true                       |                                                              |

- <Code>TabItem</Code>的属性如下所示：

| 属性           | 名称                  | 类型            | 默认值   | 描述                              |
| -------------- | --------------------- | --------------- | -------- | --------------------------------- |
| ref            | Input Dom 对象的引用  | function \| ref | -        | 当需要获取 dom 对象时可设置此属性 |
| className      | 样式名称              | string          | tab-item |                                   |
| extraClassName | 额外添加的样式名称    | string          | -        |                                   |
| disabled       | 是否禁用              | boolean         | -        |                                   |
| value          | TabItem 的值          | string\|number  | -        |                                   |
| removable      | 是否允许删除单个 Item | boolean         | -        |                                   |
| hasRipple      | 是否有点击的水纹效果  | boolean         | true     |                                   |

- <Code>TabPanel</Code>的属性如下所示：

| 属性           | 名称               | 类型            | 默认值 | 描述                              |
| -------------- | ------------------ | --------------- | ------ | --------------------------------- |
| ref            | Dom 对象的引用     | function \| ref | -      | 当需要获取 dom 对象时可设置此属性 |
| className      | 样式名称           | string          | -      |                                   |
| extraClassName | 额外添加的样式名称 | string          | -      |                                   |
| itemValue      | 对应的 TabItem 值  | string          | -      | 与 TabItem 的 value 一一对应      |

- <Code>Tab.Panels</Code>、<Code>Tab.Items</Code>不生成对应的 DOM 节点，因此没有对应的 API

+++ en_US

## API [editUrl]
