---
order: 100
type: text
zh_CN: API
en_US: API
editUrl: $BASE/pages/menu/md/api.md
---

+++ zh_CN

## API [editUrl]

<br/>

<Blockquote type="primary">
**几个需要注意的事项**：

- 请给 SubMenu、Item 设置一个在 Menu 内不重复的**id**。这个 id 在菜单折叠展示或 Item 选中时需要用到。
- 请给 SubMenu 的配置一个 header，这样子菜单才会显示对应的头部区域
</Blockquote>

- <Code>Menu</Code>

| 属性               | 名称                                     | 类型                               | 默认值                                             | 描述                                                                                                                                 |
| ------------------ | ---------------------------------------- | ---------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ref                | 根节点 Dom 对象的引用                    | function \| ref                    | -                                                  | 当需要获取到根节点的 dom 对象时可设置此属性                                                                                          |
| className          | 样式名称                                 | string                             | menu                                               |                                                                                                                                      |
| extraClassName     | 额外添加的样式名称                       | string                             | -                                                  |                                                                                                                                      |
| hasBox             | 是否显示阴影                             | boolean                            | true                                               | -                                                                                                                                    |
| hasBorderRadius    | 是否边角有弧度                           | boolean                            | true                                               |                                                                                                                                      |
| hasArrow           | 是否有折叠\/展开的箭头                   | boolean                            | true                                               |                                                                                                                                      |
| collapsable        | 是否支持折叠                             | boolean                            | true                                               |                                                                                                                                      |
| justify            | 水平排列 Item 的方式                     | string                             | start                                              | 值可以是： <Code>start</Code>，<Code>end</Code>, <Code>center</Code>, <Code>around</Code>, <Code>between</Code>, <Code>evenly</Code> |
| stepDirection      | 菜单的布局方向                           | string                             | vertical                                           | 值可以是： <Code>horizontal（水平布局</Code>），<Code>vertical（垂直布局）</Code>                                                    |
| type               | 类型                                     | string                             | normal                                             | 可设置为： <Code>normal</Code>, <Code>primary</Code>, <Code>dark</Code>                                                              |
| popupSubMenu       | 是否弹出子菜单                           | boolean                            | false                                              |                                                                                                                                      |
| autoIndent         | Menu 是否自动缩进                        | boolean                            | true                                               | 值为<Code>true</Code>时菜单选项会自动添加<Code>padding-left</Code>属性                                                               |
| initIndent         | Item 和 Header 的初始缩进的值            | number                             | 1.5                                                | Item 和 Header 一开始的<Code>padding-left</Code>值                                                                                   |
| indentUnit         | 缩进值的单位                             | string                             | rem                                                | <Code>padding-left</Code>的单位，可以设置成<Code>px, rem , em </Code>等                                                              |
| indentation        | 缩进值                                   | number                             | 2                                                  | 随着嵌套层级(n)加深，padding-left 值以此公式计算:<Code>initIndent+(n \* indentation)</Code>                                          |
| groupInitIndent    | Group 初始缩进的值                       | number                             | 1                                                  |                                                                                                                                      |
| groupIndentation   | Group 的缩进值                           | number                             | 1.25                                               | 随着嵌套层级(n)加深，padding-left 值以此公式计算:<Code>groupInitIndent+(n \* groupIndentation)</Code>                                |
| onSelect           | 当有 Item 选中时的回调                   | function(ids, e)                   | -                                                  | 当时多选时, ids 是一个数组；当是单选时，ids 时一个参数值                                                                             |
| onClickItem        | 当点击 Item 时的回调                     | function(id, e)                    | -                                                  |                                                                                                                                      |
| multiSelect        | 是否可以选择多个 Item                    | boolean                            | false                                              |                                                                                                                                      |
| compact            | 是否允许菜单压缩显示                     | boolean                            | false                                              |                                                                                                                                      |
| defaultActiveItems | 默认选中的 Item 其 id 组成的数组         | string，string[]，number, number[] | -                                                  | 值可以是单个字符串或数字，也可以是多个 id 的数组                                                                                     |
| activeItems        | 当前选中的 Item 其 id 组成的数组         | string，string[]，number, number[] | -                                                  |                                                                                                                                      |
| defaultOpenedMenus | 默认展开的 Menu/SubMenu 其 id 组成的数组 | string，string[]，number, number[] | -                                                  |                                                                                                                                      |
| openedMenus        | 当前展开的 Menu/SubMenu 其 id 组成的数组 | string，string[]，number, number[] | -                                                  |                                                                                                                                      |
| onOpenedMenu       | 但菜单展开或折叠所触发的回调             | function(Array, e)                 | -                                                  |                                                                                                                                      |
| primaryBarPosition | primary 类型出现的 bar 所处的位置        | string                             | -                                                  | 值可以是： <Code>left</Code>, <Code>right</Code>。默认时 right                                                                       |
| selectable         | 点击 Item 是否允许显示选中状态           | boolean                            | true                                               |                                                                                                                                      |
| hasRipple          | 是否有点击的水纹效果                     | boolean                            | true                                               |                                                                                                                                      |
| rippleColor        | 水纹的颜色                               | object                             | <Code>{ dark: '#fff', defaultColor: '#ccc'}</Code> | 格式为: <Code>{dark : '#000', defaultColor : '#333}</Code>                                                                           |

- <Code>SubMenu</Code>

| 属性           | 名称                                   | 类型             | 默认值    | 描述                                        |
| -------------- | -------------------------------------- | ---------------- | --------- | ------------------------------------------- |
| ref            | 根节点 Dom 对象的引用                  | function \| ref  | -         | 当需要获取到根节点的 dom 对象时可设置此属性 |
| className      | 样式名称                               | string           | base-menu |                                             |
| extraClassName | 额外添加的样式名称                     | string           | -         |                                             |
| id             | SubMenu 的 ID                          | string \| number | -         | 务必设置一个 Menu 内部唯一的值              |
| hasBottomBar   | 是否在 Header 下方显示选中状态下的横条 | boolean          | false     |                                             |
| header         | 子菜单的 Header                        | react node       |           |                                             |
| icon           | 在 Header 左侧显示的 Icon              | react node       | -         |                                             |
| disabled       | 禁用该子菜单                           | boolean          | false     |                                             |

- <Code>Group</Code>

| 属性           | 名称                  | 类型            | 默认值     | 描述                                        |
| -------------- | --------------------- | --------------- | ---------- | ------------------------------------------- |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -          | 当需要获取到根节点的 dom 对象时可设置此属性 |
| className      | 样式名称              | string          | menu-group |                                             |
| extraClassName | 额外添加的样式名称    | string          | -          |                                             |
| header         | 分组的抬头显示        | react node      | -          |                                             |

- <Code>Item</Code>

| 属性           | 名称                           | 类型             | 默认值    | 描述                                          |
| -------------- | ------------------------------ | ---------------- | --------- | --------------------------------------------- |
| ref            | 根节点 Dom 对象的引用          | function \| ref  | -         | 当需要获取到根节点的 dom 对象时可设置此属性   |
| className      | 样式名称                       | string           | base-menu |                                               |
| extraClassName | 额外添加的样式名称             | string           | -         |                                               |
| disabled       | 是否禁用                       | boolean          | false     |                                               |
| id             | Item 的 ID                     | string \| number | -         | <Code>务必设置一个 Menu 内部不重复的值</Code> |
| equitable      | Item 是否均匀瓜分剩余的空间    | boolean          | false     |                                               |
| align          | 对齐的方向                     | string           | -         | 可设置为: left、center、right                 |
| hasBackground  | 选中时是否添加背景色           | boolean          | -         |                                               |
| hasBottomBar   | 是否在下方显示选中状态下的横条 | boolean          | false     |                                               |
| icon           | 在 Item 左侧显示的 Icon        | react node       | -         |                                               |
| onClick        | 点击时的回调                   | function(id, e)  | -         |                                               |

+++ en_US

## API [editUrl]
