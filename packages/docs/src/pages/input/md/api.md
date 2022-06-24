---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/input/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Input</Code>

| 属性           | 名称                           | 类型            | 默认值 | 描述                                                  |
| -------------- | ------------------------------ | --------------- | ------ | ----------------------------------------------------- |
| ref            | Input Dom 对象的引用           | function \| ref | -      | 当需要获取到的 dom 对象时可设置此属性                 |
| className      | 样式名称                       | string          | input  |                                                       |
| extraClassName | 额外添加的样式名称             | string          | -      |                                                       |
| size           | Input 的尺寸                   | string          | medium | 值可以是: large, medium, small 或者不设置             |
| type           | Input 的类型                   | string          | -      | 值可以是：text, textarea, password, file 等 html 类型 |
| disabled       | 禁用此 Input                   | boolean         | false  |                                                       |
| block          | 将 Input 宽度设置为 100%的行宽 | boolean         | true   |                                                       |
| hasBox         | 是否有阴影                     | boolean         | false  |                                                       |
| borderType     | 边框类型                       | string          | -      | 值可以为：ok, warning, error                          |
| readOnly       | 是否只读                       | boolean         | -      |                                                       |
| canFocus       | 是否有 focus 相关的效果        | boolean         | false  | <Code>true</Code>:不会有边框阴影且边框颜色不会变化    |
| errorType      | 边框类型                       | string          | -      | 值可以为：ok, warning, error                          |
| onChange/onXX  | Input 的各类回调函数           | function        | -      | 比如 onChange, onBlur 等                              |

- <Code>IconInput</Code>  
   <br/>
  当<Code>Input</Code>中设置了<Code>leftIcon</Code>或<Code>rightIcon</Code>，
  该<Code>Input</Code>即被视为<Code>IconInput</Code>

| 属性           | 名称                             | 类型            | 默认值     | 描述                                                                                             |
| -------------- | -------------------------------- | --------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| ref            | Input Dom 对象的引用             | function \| ref | -          | 当需要获取到的 dom 对象时可设置此属性                                                            |
| className      | 样式名称                         | string          | icon-input |                                                                                                  |
| extraClassName | 额外添加的样式名称               | string          | -          |                                                                                                  |
| size           | Input 的尺寸                     | string          | medium     | 值可以是: large, medium, small 或者不设置                                                        |
| block          | 将 Input 宽度设置为 100%的行宽   | boolean         | true       |                                                                                                  |
| hasBox         | 是否有阴影                       | boolean         | false      |                                                                                                  |
| icon           | 在右侧显示的 Icon                | react node      | -          |                                                                                                  |
| leftIcon       | Icon 是否要在左侧显示            | boolean         | false      |                                                                                                  |
| iconProps      | Icon 的 props 属性对象           | object          | -          | 如果要修改 icon 的颜色时，可以设置为<Code>{style:{color: 'red'}}</Code>                          |
| rightIcons     | 在右侧额外显示的 Icon            | array           | -          | 如果需要在右侧显示多个 Icon 获取文字类的补充信息时，可设置此属性                                 |
| rootProps      | root 节点的 props                | object          | -          | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果修改<Code>span</Code>，可设置此属性 |
| rootRef        | root 节点的 props                | Ref             | -          | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果需要获取 dom 对象，可设置此属性     |
| placeholder    | 提示信息                         | string          | -          |                                                                                                  |
| errorType      | 在 Form 中使用，用于提示输入有错 | string          | -          | 值可以为：ok, warning, error                                                                     |
| disabled       | 禁用此 Input                     | boolean         | false      |                                                                                                  |

- <Code>Password</Code>  
  <br/>
  当<Code>Input</Code>中将<Code>type</Code>设置为<Code>password</Code>类型时，
  该<Code>Input</Code>即被视为<Code>Password</Code>

| 属性          | 名称                        | 类型    | 默认值   | 描述                                                                                         |
| ------------- | --------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------- |
| rootRef       | root 节点的 props           | Ref     | -        | <Code>IconInput</Code>最外层使用了<Code>span</Code>包裹，如果需要获取 dom 对象，可设置此属性 |
| hasToggleIcon | 是否有显示和隐藏密码的 icon | boolean | true     |                                                                                              |
| toggleIcons   | 显示和隐藏密码对应的 icon   | array   |          | 在数组中有且仅仅能设置两个 icon， 第一个是显示密码的 icon, 第二个是隐藏密码的 icon           |
| type          | 原生的 html 类型            | string  | password |                                                                                              |
| leftIcon      | Icon 是否要在左侧显示       | boolean | false    |                                                                                              |

- <Code>InputGroup</Code>

| 属性           | 名称                    | 类型            | 默认值      | 描述                                                                                     |
| -------------- | ----------------------- | --------------- | ----------- | ---------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用   | function \| ref | -           | 当需要获取到根节点的 dom 对象时可设置此属性                                              |
| className      | 样式名称                | string          | input-group |                                                                                          |
| extraClassName | 额外添加的样式名称      | string          | -           |                                                                                          |
| block          | 将宽度设置为 100%的行宽 | boolean         | true        |                                                                                          |
| size           | 尺寸                    | string          | medium      | 值可以是: large, medium, small 或者不设置                                                |
| normal         | 是否正常的 InputGroup   | boolean         | true        | 值为 true 时，Item 和 Label 中的控件会处理 border-radius 边角；值为 false 时，不会处理。 |

- <Code>InputGroup.Label</Code>

| 属性           | 名称                         | 类型            | 默认值 | 描述                                                    |
| -------------- | ---------------------------- | --------------- | ------ | ------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用        | function \| ref | -      | 当需要获取到根节点的 dom 对象时可设置此属性             |
| className      | 样式名称                     | string          | label  |                                                         |
| extraClassName | 额外添加的样式名称           | string          | -      |                                                         |
| hasBackground  | 是否有默认背景色             | boolean         | true   |                                                         |
| compact        | 在 Form 中是否以紧凑模式显示 | string          | medium | <Code>true</Code>: 在 Form 组件中与下一行中间不添加间隔 |

- <Code>InputGroup.Item</Code>

| 属性           | 名称                         | 类型            | 默认值 | 描述                                        |
| -------------- | ---------------------------- | --------------- | ------ | ------------------------------------------- |
| ref            | 根节点 Dom 对象的引用        | function \| ref | -      | 当需要获取到根节点的 dom 对象时可设置此属性 |
| className      | 样式名称                     | string          | item   |                                             |
| extraClassName | 额外添加的样式名称           | string          | -      |                                             |
| autoScale      | 是否尽可能地占用剩余可用空间 | boolean         | false  |                                             |

+++ en_US

## API [editUrl]
