---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/navbar/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code type="normal">Navbar</Code>

| 属性              | 名称                           | 类型                | 默认值                         | 描述                                                                                                 |
| ----------------- | ------------------------------ | ------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| ref               | 根节点 Dom 对象的引用          | function \| ref     | -                              | 当需要获取 dom 对象时可设置此属性                                                                    |
| className         | 样式名称                       | string              | navbar                         |                                                                                                      |
| extraClassName    | 额外添加的样式名称             | string              | -                              |                                                                                                      |
| type              | 类型                           | string              | normal                         | 值可以是：<Code>primary</Code>, <Code>normal</Code>                                                  |
| fixed             | 固定位置                       | string              | top                            | 值可以是：<Code>top</Code>, <Code>bottom</Code>                                                      |
| hideOnScroll      | 向下滚动一段距离是否自动隐藏   | boolean             | false                          |                                                                                                      |
| hasBox            | 是否显示阴影                   | boolean             | true                           |                                                                                                      |
| hasBorder         | 是否有边框                     | boolean             | false                          |                                                                                                      |
| hasBar            | 是否在 Item 下方显示一个状态条 | boolean             | false                          |                                                                                                      |
| autoHideList      | 是否自动折叠/展示 List         | boolean             | true                           | 当窗口宽度变窄时是否自动隐藏 List                                                                    |
| expand            | 展开 Navbar                    | bool                | -                              | 当设置了此属性后，需要配合 onExpand 方法去修改这个属性值。                                           |
| defaultExpand     | 是否初始展开 Navbar            | boolean             | false                          | 初始显示时是否展开 List                                                                              |
| onExpand          | 展开/折叠 List 时的回调函数    | function(expand, e) | -                              |                                                                                                      |
| hasItemBackground | Item 是否有背景色              | boolean             | false                          |                                                                                                      |
| mediaQuery        | 窗口变化时的 media query 语句  | string              | <Code>Responsive.sm.max</Code> | 您可以设置 Responsive 中定义的属性，也可以设置这种 media query 字符串<Code>(max-width: 768px)</Code> |
| mediaQueryWindow  | mediaQuery 触发的窗口对象      | object              | window                         | 默认监控当前所处的 window 对象                                                                       |

- <Code type="normal">Switch</Code>

| 属性           | 名称                                 | 类型            | 默认值               | 描述                              |
| -------------- | ------------------------------------ | --------------- | -------------------- | --------------------------------- |
| ref            | Button 对象的引用                    | function \| ref | -                    | 当需要获取 dom 对象时可设置此属性 |
| className      | 样式名称                             | string          | button navbar-switch |                                   |
| extraClassName | 额外添加的样式名称                   | string          | -                    |                                   |
| onClick        | 点击按钮的回调                       | function(e)     | -                    |                                   |
| circle         | 是否是圆形按钮                       | boolean         | true                 |                                   |
| rippleColor    | 点击按钮的波纹颜色                   | string          | #fff                 |                                   |
| autoSwitch     | 点击后是否自动切换 List 的显示和隐藏 | boolean         | true                 |                                   |

- <Code type="normal">Title</Code>

| 属性           | 名称                  | 类型            | 默认值 | 描述                              |
| -------------- | --------------------- | --------------- | ------ | --------------------------------- |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -      | 当需要获取 dom 对象时可设置此属性 |
| className      | 样式名称              | string          | title  |                                   |
| extraClassName | 额外添加的样式名称    | string          | -      |                                   |

- <Code type="normal">List</Code>

| 属性           | 名称                  | 类型            | 默认值 | 描述                                                                                                                                 |
| -------------- | --------------------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -      | 当需要获取 dom 对象时可设置此属性                                                                                                    |
| className      | 样式名称              | string          | list   |                                                                                                                                      |
| extraClassName | 额外添加的样式名称    | string          | -      |                                                                                                                                      |
| justify        | 水平排列 Item 的方式  | string          | end    | 值可以是： <Code>start</Code>，<Code>end</Code>, <Code>center</Code>, <Code>around</Code>, <Code>between</Code>, <Code>evenly</Code> |

- <Code type="normal">Item</Code>

| 属性           | 名称                  | 类型            | 默认值      | 描述                                                       |
| -------------- | --------------------- | --------------- | ----------- | ---------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用 | function \| ref | -           | 当需要获取 dom 对象时可设置此属性                          |
| className      | 样式名称              | string          | navbar-item |                                                            |
| extraClassName | 额外添加的样式名称    | string          | -           |                                                            |
| hasBackground  | 激活后是否有背景色    | bool            | true        |                                                            |
| hasBar         | 激活后是否底部横条    | bool            | false       |                                                            |
| active         | 是否激活中            | bool            | false       |                                                            |
| compact        | 是否紧凑显示          | bool            | false       | 值为 true 时，Item 将紧凑显示，不会添加额外的 padding 属性 |

+++ en_US

## API [editUrl]
