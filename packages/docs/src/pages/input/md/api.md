---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/input/md/api.md
---      

+++  zh_CN
## API [editUrl]    
* <Code>Input</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到的dom对象时可设置此属性 |
| className | 样式名称 | string | input |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| size | Input的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| type | Input的类型 | string | - | 值可以是：text, textarea, password, file等html类型 |
| disabled | 禁用此Input | boolean | false |  |
| block | 将Input宽度设置为100%的行宽 | boolean | true |  |
| hasBox | 是否有阴影 | boolean | false |  |
| borderType | 边框类型 | string | - | 值可以为：ok, warning, error |
| readOnly | 是否只读 | boolean | - |  |
| canFocus | 是否有focus相关的效果 | boolean | false | <Code>true</Code>:不会有边框阴影且边框颜色不会变化 |
| errorType | 边框类型 | string | - | 值可以为：ok, warning, error |
| onChange/onXX | Input的各类回调函数 | function | - | 比如onChange, onBlur等 |


* <Code>IconInput</Code>   
  <br/>
当<Code>Input</Code>中设置了<Code>leftIcon</Code>或<Code>rightIcon</Code>，
  该<Code>Input</Code>即被视为<Code>IconInput</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到的dom对象时可设置此属性 |
| className | 样式名称 | string | icon-input |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| size | Input的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| block | 将Input宽度设置为100%的行宽 | boolean | true |  |
| hasBox | 是否有阴影 | boolean | false |  |
| icon | 在右侧显示的Icon | react node | - |  |
| leftIcon | Icon是否要在左侧显示 | boolean | false |  |
| iconProps | Icon的props属性对象 | object | - | 如果要修改icon的颜色时，可以设置为<Code>{style:{color: 'red'}}</Code>  |  
| rightIcons | 在右侧额外显示的Icon | array | - | 如果需要在右侧显示多个Icon获取文字类的补充信息时，可设置此属性  |  
| rootProps | root节点的props | object | - | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果修改<Code>span</Code>，可设置此属性  |
| rootRef | root节点的props | Ref | - | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果需要获取dom对象，可设置此属性  |
| placeholder | 提示信息 | string | - |   |
| errorType | 在Form中使用，用于提示输入有错 | string | - | 值可以为：ok, warning, error  |
| disabled | 禁用此Input | boolean | false |  |

* <Code>Password</Code>   
<br/>
 当<Code>Input</Code>中将<Code>type</Code>设置为<Code>password</Code>类型时，
  该<Code>Input</Code>即被视为<Code>Password</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| rootRef | root节点的props | Ref | - | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果需要获取dom对象，可设置此属性  |
| hasToggleIcon | 是否有显示和隐藏密码的icon | boolean | true |  |
| toggleIcons | 显示和隐藏密码对应的icon | array |  | 在数组中有且仅仅能设置两个icon， 第一个是显示密码的icon, 第二个是隐藏密码的icon |
| type | 原生的html类型 | string | password |   |
| leftIcon | Icon是否要在左侧显示 | boolean | false |  |

* <Code>InputGroup</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | input-group |  |
| extraClassName | 额外添加的样式名称 | string | - | |
| block | 将宽度设置为100%的行宽 | boolean | true |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| normal | 是否正常的InputGroup | boolean | true | 值为true时，Item和Label中的控件会处理border-radius边角；值为false时，不会处理。 |

* <Code>InputGroup.Label</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | label |  |
| extraClassName | 额外添加的样式名称 | string | - | |
| hasBackground | 是否有默认背景色 | boolean | true |  |
| compact | 在Form中是否以紧凑模式显示 | string | medium | <Code>true</Code>: 在Form组件中与下一行中间不添加间隔 |

* <Code>InputGroup.Item</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | item |  |
| extraClassName | 额外添加的样式名称 | string | - | |
| autoScale | 是否尽可能地占用剩余可用空间 | boolean | false |  |


+++ en_US
## API [editUrl]     

