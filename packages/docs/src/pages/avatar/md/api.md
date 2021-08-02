---   
order: 100 
type: text 
zh_CN: API 
en_US: API 
editUrl: $BASE/pages/avatar/md/api.md
---      

+++ zh_CN
## API

- <Code>Avatar</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | avatar |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small,默认为medium |
| shape | 形状 | string | - | 可以设置为<Code>circle</Code>, <Code>square</Code>, <Code>round</Code>  |
| src | 图片资源的URL  | react node \| string | - | 图片资源对象或图片的远程访问URL  |
| alt | 图片的提示信息  | string | - |   |
| imgProps | 图片的props属性对象  | object | - |   |
| hasBox | 是否有阴影  | boolean | true |   |
| accessory | 显示的Avatar徽章  | react node | - | 显示一个额外的Avatar组件作为徽章   |
| accessoryStyle | Avatar徽章的样式  | object | - |   |

- <Code>Avatar.Group</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | avatar |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| max | 允许显示的头像数 | number | - |  |
| extraAvatarStyle | 缩略图标的样式 | number | - |  |
| extraAvatarProps | 缩略图标对应的Avatar组件props对象 | object | - |  |


+++ en_US

## API

api
