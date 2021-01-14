---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/tooltip/md/api.md
---      

+++  zh_CN
## API [editUrl]       

- <Code>Tooltip</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| Ref | - | 当需要获取到dom对象时可设置此属性 |
| className | 样式名称 | string | popover |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| body | 显示的内容 | react node | - |  |
| position | 弹出菜单的显示位置 | react node | - | 值可以是: <Code>top</Code>、<Code>bottom</Code>、<Code>left</Code>、<Code>right</Code>  |
| disabled | 禁用Dropdown | boolean | false |  |
| popupInstanceRef | 弹出菜单组件的Ref | Ref | - | 该ref指向了Popup组件的实例， 允许你通过程序的方式去显示或关闭菜单。而且您无效设置active属性  |
| defaultActive | 是否初始激活弹出菜单 | boolean | false |   |
| active | 激活弹出菜单  | boolean | - |   |
| hasArrow | 是否显示箭头  | boolean | - |   |
| onChange | 激活状态改变时的回调函数 | function(active, e) | - |   |
| background | 背景色 | string | - |  以设置为颜色的字符串值<Code>（rgba, rgb或#333格式）</Code>， 也可以设置成颜色对应的样式名，比如<Code>[blue, red, purple](#/docs/colors)</Code>等  |
| tooltipStyle | Tooltip的样式对象 | object | - |   |


- <Code>公共属性</Code>   
  Dropdown内部使用了<Code>Popup</Code>组件，因此您还可以设置如下属性。


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| zIndex | 弹出菜单的z-index值 | number | 2000 | 当弹出菜单需要在其他控件之上时可以设置此值 |
| popupExtraClassName | 弹出框体需要额外添加的样式 | string | - |  |
| popupStyle | 弹出框体的样式 | object | - |  |
| popupBodyStyle | 弹出框体内部存放Menu区域的样式 | object | - |  |
| offset | 弹出框体偏离控制组件的距离 | number | 5 | 控制组件是指接受点击的文字或按钮，点击后会弹出菜单 |
| delayClose | 延迟显示弹出菜单的时间 | number | 100ms |  |
| hidePopup | 是否隐藏弹出菜单 | boolean | false |  |


+++ en_US
## API [editUrl]     

