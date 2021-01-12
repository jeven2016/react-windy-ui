---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/select/md/api.md
---      

+++  zh_CN    
## API [editUrl]       

- <Code>Select</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| Ref | - | 当需要获取到dom对象时可设置此属性 |
| className | 弹出菜单的样式名称 | string | select-menu popup |  |
| extraClassName | 弹出菜单额外添加的样式名称 | string | - |  |
| name | html name | string | - |  |
| placeholder | 提示信息 | string | - |   |
| errorType | 边框类型 | string | - | 值可以为：ok, warning, error |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| disabled | 禁用Select | boolean | false |  |
| searchable | 是否可以搜索 | boolean | false |  |
| autoWidth | 是否自动调整菜单的宽度 | boolean | true |  |
| multiSelect | 是否多选 | boolean | false |  |
| activeBy | 显示菜单的触发方式 | string | click | 值可以是: <Code>click</Code>, <Code>hover</Code> |
| position | 弹出菜单的显示位置 | react node | - | 值可以是: <Code>topLeft</Code>、<Code>top</Code>、<Code>topRight</Code>、 <Code>bottomLeft</Code>、<Code>bottom</Code>、<Code>bottomRight</Code>、<Code>leftTop</Code>、<Code>left</Code>、<Code>leftBottom</Code>、<Code>rightTop</Code>、<Code>right</Code>、<Code>rightBottom</Code>  |
| block | 将Select宽度设置为100%的行宽 | boolean | true |  |
| defaultValue | 初始选中的Option其对应的value | number \| string \| Array(string \| number) | - | 单选时，为单个值；多选时，为多个值的数组 |
| value | 选中的Option其对应的value | number \| string \| Array(string \| number) | - | 单选时，为单个值；多选时，为多个值的数组  |
| onSelect | 当选中Option时的回调 | function(number \| string \| Array(string \| number), e)| - | 单选时，第一个参数为对应的值；多选时返回的是值的数组 |
| onSearch | 输入并搜索的回调 | function(value, e)| - |  |
| searchDelay | 延时搜索的时间 | number| 300(ms) |  |
| noDataText | 没有符合搜索条件时的显示内容 | react node| 'Not Found' |  |
| searchInputWidth | 搜索框的默认宽度 | number| 16(px) |  |
| hasArrow | 是否有折叠\/展开的箭头 | boolean | true |  |
| arrowIcon | 折叠中的箭头图标 | react node | IconArrowDown |  |
| activeArrowIcon | 展开中的箭头图标 | react node | IconArrowUp | |
| defaultActive | 初始显示弹出菜单 | boolean | false |  |
| active | 是否显示弹出菜单 | boolean | false |  |
| onActiveChange | 显示或关闭弹出菜单时的回调 | function(nextActive, e) | - |  |
| onRemove | 多选Select下，删除已选Option的回调 | function(optionValue, e) | - |  |
| menuProps | 弹出菜单的props对象 | object | - | Select的弹出菜单使用了Menu组件，可通过此属性设置Menu的props属性 |
| removable | 搜索框的输入值是否可以清除 | boolean | true |  |
| loading | 是否搜索中状态 | boolean | false |  |
| loaderType | Loader组件的类型 | string | primary | 对应Loader组件的类型： primary, secondary, third |

- <Code>公共属性</Code>
  Select内部使用了<Code>Popup</Code>组件，因此您还可以设置如下属性。


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| zIndex | 弹出菜单的z-index值 | number | 1200 | 当弹出菜单需要在其他控件之上时可以设置此值 |
| hasBox | 是否有阴影 | boolean | false |  |
| hasBorderRadius | 是否边角有弧度 | boolean | true |  |
| hasBorder | 是否有边框 | number | boolean | false |
| popupExtraClassName | 弹出框体需要额外添加的样式 | string | - |  |
| popupStyle | 弹出框体的样式 | object | - |  |
| popupBodyStyle | 弹出框体内部存放Menu区域的样式 | object | - |  |
| offset | 弹出框体偏离控制组件的距离 | number | 10 | 控制组件是指接受点击的文字或按钮，点击后会弹出菜单 |
| delayClose | 延迟显示弹出菜单的时间 | number | 100ms |  |

- <Code>Option</Code>


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| value | Option对应的值 | number \| string\| boolean | - |  |
| text | 选中时在Select上显示内容 | react node | - | text，render二者选其一设置。如果都不设置，在Select中显示Option的children内容 |
| render | 获取选中时在Select上显示内容 | react node | - |  |

Option使用了Menu的Item组件，Item其他的一些属性也可参阅[Item的API](/#/docs/menu)



+++ en_US
## API [editUrl]     

