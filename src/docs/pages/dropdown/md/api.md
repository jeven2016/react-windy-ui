---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/dropdown/md/api.md
---      

+++  zh_CN
## API [editUrl]    

- <Code>Dropdown</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| Ref | - | 当需要获取到dom对象时可设置此属性 |
| className | 样式名称 | string | dropdown-menu popup |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| title | 在Dropdown中显示的title | react node | - |  |
| position | 弹出菜单的显示位置 | react node | - | 值可以是: <Code>topLeft</Code>、<Code>top</Code>、<Code>topRight</Code>、 <Code>bottomLeft</Code>、<Code>bottom</Code>、<Code>bottomRight</Code>、<Code>leftTop</Code>、<Code>left</Code>、<Code>leftBottom</Code>、<Code>rightTop</Code>、<Code>right</Code>、<Code>rightBottom</Code>  |
| activeBy | 显示菜单的触发方式 | string | click | 值可以是: <Code>click</Code>, <Code>hover</Code> |
| disabled | 禁用Dropdown | boolean | false |  |
| onSelect | 在Dropdown中显示的title | react node | - |  |
| popupInstanceRef | 弹出菜单组件的Ref | Ref | - | 该ref指向了Popup组件的实例， 允许你通过程序的方式去显示或关闭菜单。而且您无效设置active属性  |
| defaultActive | 是否初始激活弹出菜单 | boolean | false |   |
| active | 激活弹出菜单  | boolean | - |   |
| onChange | 激活状态改变时的回调函数 | function(active, e) | - |   |

<Blockquote type="primary">
对于<Code>popupInstanceRef</Code>属性，比如您需要在某个方法内显示地关闭/显示弹出菜单时可以这样考虑使用它, 而且您无需通过<Code>active</Code>属性去提供自行控制的代码逻辑。  

<Hcode>
 function test(){
   //if the menu is popped up
   if(popupInstanceRef.current.isActive()){
       //then close the menu
       popupInstanceRef.current.setActive(false);
   }
 }
</Hcode>
</Blockquote>

- <Code>Dropdown.Item</Code>   
  Dropdown的菜单使用了<Code>Menu<Code>组件，对于<Code>Dropdown.Item</Code>的属性定义请参阅<Code>[Menu.Item](/#/docs/menu)</Code>的API定义

- <Code>公共属性</Code>
Dropdown内部使用了<Code>Popup</Code>组件，因此您还可以设置如下属性。


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| zIndex | 弹出菜单的z-index值 | number | 1200 | 当弹出菜单需要在其他控件之上时可以设置此值 |
| hasBox | 是否有box阴影边框 | boolean | false |  |
| hasBorderRadius | 是否边角有弧度 | boolean | true |  |
| hasBorder | 是否有边框 | number | boolean | false |
| popupExtraClassName | 弹出框体需要额外添加的样式 | string | - |  |
| popupStyle | 弹出框体的样式 | object | - |  |
| popupBodyStyle | 弹出框体内部存放Menu区域的样式 | object | - |  |
| offset | 弹出框体偏离控制组件的距离 | number | 10 | 控制组件是指接受点击的文字或按钮，点击后会弹出菜单 |
| delayClose | 延迟显示弹出菜单的时间 | number | 100ms |  |


+++ en_US
## API [editUrl]     

