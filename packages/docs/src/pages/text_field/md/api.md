---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/table/md/api.md
---      

+++  zh_CN
## API [editUrl]       

- <Code>TextField</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| rootRef | 根节点Dom对象的引用 | function \| Ref | - | 当需要获取到dom对象时可设置此属性 |
| ref | input控件的引用 | function \| Ref | - | 当需要获取到input对象时可设置此属性 |
| className | 文本框的样式名称 | string | text-field |  |
| extraClassName | 文本框额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是: <Code>outline</Code>, <Code>underline</Code> |
| required | 是否必须设置 | boolean | false |  |
| label | 标签内容 | string | - |  |
| labelFixed | 标签是否固定显示 | boolean | false  |  |
| placeholder | 输入提示 | string | -  |  |
| disabled | 禁用文本框 | boolean | false  |  |
| nativeType | input对应的原生类型 | string | text  |  |
| hasBottomBar | 是否有下边框 | boolean | true  | 当type是underline时生效  |
| leftItems | 在文本框左侧显示的内容 | array | -  |   |
| rightItems | 在文本框右侧显示的内容 | array | -  |   |
| block | 是否占据整行显示 | boolean | false  |   |
| select | 是否是选择框控件 | boolean | false  |   |
| selectProps | 当是选择框控件时，设置给Select的属性 | object | -  | 当select为true时，通过此属性给Select传递属性值  |
| size | 文本框的尺寸 | boolean | false  | 值可以是: large, medium, small或者不设置  |
| errorType | 对应的错误类型 | string | -  | 值可以是: error, ok, warning或者不设置  |
| hasBox | 是否有阴影 | boolean | true  |  |


+++ en_US
## API [editUrl]     

