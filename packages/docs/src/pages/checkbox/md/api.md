---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/checkbox/md/api.md
---      

+++  zh_CN
## API [editUrl]     
Checkbox的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | checkbox |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| checked | 是否勾选状态 | boolean | false |  |
| defaultChecked | 初始勾选状态 | boolean | false |  |
| onChange | 状态变化触发的回调 | function | - | 参数格式为： <Code>function(active, event)</Code> |
| label | 显示的提示信息 | string | - |  |
| children | 子节点对象 | react node | - |  |
| checkedColor | 对应选中时的颜色 | string | - | 可选的颜色参见颜色列表定义 |
| uncheckedColor | 对应去选中时的颜色 | string | - | 可选的颜色参见颜色列表定义 |
| checkedIcon | 对应去选中时的图标 | string | - |  |
| uncheckedIcon | 对应去选中时的图标 | string | - |  |
| showIndeterminateState | 是否显示成中间状态 | boolean | - |  |
| iconIndeterminate | 中间状态时显示的图标 | node | - |  |
| iconIndeterminateStyle | 中间状态时添加的样式对象 | object | - | 格式如： <Code>{color: '#ccc', fontSize: '1.5rem}</Code>  |

+++ en_US
## API [editUrl]     

