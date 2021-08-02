---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/notification/md/api.md
---      

+++  zh_CN
## API [editUrl]    

- <Code>Notification</Code>的全局配置属性    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| hasCloseIcon | 是否显示关闭消息的Icon | boolean | true |  |
| onClose | 关闭某个消息的回调 | function | - | 当消息被关闭时触发，同时会将消息对应的配置传入该方法。 |
| rect | 显示位置 | object | 所有默认值全部为1.5rem |  当topLeft时，可只设置rect中的<Code>top</Code>、<Code>left</Code>属性。 当topRight时，可只设置rect中的<Code>top</Code>、<Code>right</Code>属性。 当bottomLeft时，可只设置rect中的<Code>bottom</Code>、<Code>left</Code>属性。 当bottomRight时，可只设置rect中的<Code>bottom</Code>、<Code>right</Code>属性。 当topCenter时，可只设置rect中的<Code>top</Code>属性, 因为在水平方向上始终是居中显示的。 |

<Hcode>
您可以使用Notification的config方法去设置: Notification.config({...})，
通过Notification.getConfig()去获取现有的配置。
</Hcode>

<br/>
- 每个消息可自定义设置的属性有  

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| title | Alert消息标题 | react node | - |  |
| body | Alert消息内容 | react node | - | |
| icon | Alert显示的图标 | react node | - |  |
| onClose | 关闭消息的回调 | function | - | 当消息被关闭时触发 |
| alertProps | Alert消息的配置对象 | object | - | 对应Alert组件的API属性，可参阅Alert的API |

<Hcode>
上面这些参数在显示各个消息时设置，比如Notification.info({duration: 3000, title: 'title' .....})。
另外，除了alertProps其他的属性本身也是属于Alert的属性，也就是说针对Alert属性您可以通过alertProps去设置，也可以直接在config上设置。
</Hcode>


+++ en_US
## API [editUrl]     

