---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/radio/md/api.md
---      

+++  zh_CN
## API [editUrl]       
Radio的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | radio |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| checked | 是否选中状态 | boolean | false | 当此属性设置后，需要在onChange中切换该属性值 |
| defaultChecked | 初始勾选状态 | boolean | false |  |
| value | Radio对应的值 | any | - |  |
| onChange | 状态变化触发的回调 | function | - | 参数格式为： <Code>function(active, e)</Code> |
| label | 显示的标签信息 | string | - |  |
| alignLabel | 标签信息的显示位置 | string | - | 值可以是： <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>, <Code>right</Code> |
| checkedColor | 选中时的颜色 | string | - | 可选的颜色参见颜色列表定义, 也可以设置成颜色对应的字符串值，比如: '#333',rgb或rgba颜色。 |
| uncheckedColor | 未选中时的颜色 | string | - | 可选的颜色参见颜色列表定义 |
| checkedIcon | 选中时的图标 | react node | - |  |
| uncheckedIcon | 未选中时的图标 | react node | - |  |
| errorType | Form中对应的错误类型 | string | - | 值可以为：<Code>ok</Code>, <Code>warning</Code>, <Code>error</Code> |

<br/>
RadioGroup的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | radio |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| defaultValue | 初始选中的Radio对应的值 | any |  |  |
| value | 初始勾选状态 | boolean | any |  |
| onChange | 状态变化触发的回调 | function | - | 当设置了value时，需要在onChange中设置value属性值 |
| disabled | 是否禁用 | boolean | false |  |
| errorType | Form中对应的错误类型 | string | - | 值可以为：<Code>ok</Code>, <Code>warning</Code>, <Code>error</Code> |
| button | 是否显示成按钮形态 | boolean | false | 当值为true时， 在Radio上设置的属性都会透传到对应的Button上;相应的在RadioGroup上设置的属性，实际上会在ButtonGroup上应用 |

+++ en_US
## API [editUrl]     

