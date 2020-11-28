---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/input/md/api.md
---      

+++  zh_CN
## API [editUrl]    
* Input的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| borderType | 边框类型 | string | - | 值可以为：ok, warning, error |
| type | Input的类型 | string | - | 值可以是：text, textarea, password, file等html中关于input可设置的类型 |
| block | 将Input宽度设置为100%的行宽 | boolean | `false` |  |
| size | Input的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| disabled | 是否禁用此Input | boolean | false |  |
| onClick/onXX | Input的各类回调函数 | function | - | 比如onFocus, onBlur等 |


* IconInput的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| block | 将宽度设置为100%的行宽 | boolean | `false` |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| disabled | 是否禁用此Input | boolean | false |  |


* InputGroup的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| block | 将宽度设置为100%的行宽 | boolean | `false` |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |


+++ en_US
## API [editUrl]     

