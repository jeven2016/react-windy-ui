---   
order: 100 
type: text 
zh_CN: API 
en_US: API 
editUrl: $BASE/docs/pages/alert/md/api.md
---      

+++ zh_CN
## API

- <Code>Alert</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | alert |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | info | 值可以是：<Code>info</Code>, <Code>ok</Code>, <Code>warning</Code>, <Code>error</Code>, <Code>mini</Code>, <Code>simple</Code> |
| hasLeftBorder | 是否显示左边框 | boolean | false |  |
| duration | Alert持续显示的时间 | number | 5000 | 单位毫秒  |
| onClose | 关闭Alert的回调 | function | - | 当点击关闭图标，或者设置了延时关闭时会触发调用。如果设置了active属性，请务必提供此方法  |
| title | Alert标题 | react node | - |  |
| body | Alert内容 | react node | - |  |
| style | Alert的样式 | object | - |  |
| autoClose | 是否自动关闭 | boolean | false | 是否自动关闭。如果为false，则表示无法延时关闭，必须手动触发或由其他组件控制关闭。  |
| hasCloseIcon | 是否显示关闭图标 | boolean | true |  |
| icon | 左侧对应Alert类型的图标 | react node | - | 不同的类型默认提供不同的图标  |
| hasIcon | 是否显示Alert类型图标 | boolean | true | 不同的类型默认提供不同的图标  |
| iconStyle | Alert类型的图标样式 | object | - |  |
| closeStyle | 关闭图标的样式 | object | - |  |
| active | 激活显示 | boolean | - | 如果不需要自行控制Alert的显示和关闭，可以不用设置，默认情况下加载后就显示 |
| hasAnimation | 是否有动画效果 | boolean | true |  |

+++ en_US

## API

api
