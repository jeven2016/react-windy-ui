---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/popover/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Popover</Code>

| 属性             | 名称                     | 类型                | 默认值  | 描述                                                                                                                                                                                                                                                                                    |
| ---------------- | ------------------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref              | 根节点 Dom 对象的引用    | function \| Ref     | -       | 当需要获取到 dom 对象时可设置此属性                                                                                                                                                                                                                                                     |
| className        | 样式名称                 | string              | popover |                                                                                                                                                                                                                                                                                         |
| extraClassName   | 额外添加的样式名称       | string              | -       |                                                                                                                                                                                                                                                                                         |
| header           | 显示的标题               | react node          | -       |                                                                                                                                                                                                                                                                                         |
| body             | 显示的内容               | react node          | -       |                                                                                                                                                                                                                                                                                         |
| position         | 弹出菜单的显示位置       | react node          | -       | 值可以是: <Code>topLeft</Code>、<Code>top</Code>、<Code>topRight</Code>、 <Code>bottomLeft</Code>、<Code>bottom</Code>、<Code>bottomRight</Code>、<Code>leftTop</Code>、<Code>left</Code>、<Code>leftBottom</Code>、<Code>rightTop</Code>、<Code>right</Code>、<Code>rightBottom</Code> |
| activeBy         | 显示菜单的触发方式       | string              | click   | 值可以是: <Code>click</Code>, <Code>hover</Code>                                                                                                                                                                                                                                        |
| disabled         | 禁用 Dropdown            | boolean             | false   |                                                                                                                                                                                                                                                                                         |
| popupInstanceRef | 弹出菜单组件的 Ref       | Ref                 | -       | 该 ref 指向了 Popup 组件的实例， 允许你通过程序的方式去显示或关闭菜单。而且您无效设置 active 属性                                                                                                                                                                                       |
| defaultActive    | 是否初始激活弹出菜单     | boolean             | false   |                                                                                                                                                                                                                                                                                         |
| active           | 激活弹出菜单             | boolean             | -       |                                                                                                                                                                                                                                                                                         |
| onChange         | 激活状态改变时的回调函数 | function(active, e) | -       |                                                                                                                                                                                                                                                                                         |
| autoWidth        | false                    | boolean             | -       | 值为 true 时，将视内容的宽度自动调整                                                                                                                                                                                                                                                    |

- <Code>公共属性</Code>  
  Dropdown 内部使用了<Code>Popup</Code>组件，因此您还可以设置如下属性。

| 属性                | 名称                             | 类型    | 默认值  | 描述                                               |
| ------------------- | -------------------------------- | ------- | ------- | -------------------------------------------------- |
| zIndex              | 弹出菜单的 z-index 值            | number  | 1200    | 当弹出菜单需要在其他控件之上时可以设置此值         |
| hasBox              | 是否有阴影                       | boolean | false   |                                                    |
| hasBorderRadius     | 是否边角有弧度                   | boolean | true    |                                                    |
| hasBorder           | 是否有边框                       | number  | boolean | false                                              |
| popupExtraClassName | 弹出框体需要额外添加的样式       | string  | -       |                                                    |
| popupStyle          | 弹出框体的样式                   | object  | -       |                                                    |
| popupBodyStyle      | 弹出框体内部存放 Menu 区域的样式 | object  | -       |                                                    |
| offset              | 弹出框体偏离控制组件的距离       | number  | 15      | 控制组件是指接受点击的文字或按钮，点击后会弹出菜单 |
| delayClose          | 延迟显示弹出菜单的时间           | number  | 100ms   |                                                    |
| hidePopup           | 是否隐藏弹出菜单                 | boolean | false   |                                                    |

+++ en_US

## API [editUrl]
