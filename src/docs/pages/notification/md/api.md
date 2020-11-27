---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/notification/md/api.md
---      

+++  zh_CN
## API [editUrl]    

Notification的全局配置属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| hasCloseIcon | 是否显示关闭消息的Icon | boolean | true |  |
| onClose | 关闭某个消息的回调 | function | - | 当消息被关闭时触发，同时会将消息对应的配置传入该方法。 |
| rect | 上下左右四个方位的距离 | object | 所有默认值全部为1.5rem |  当topLeft时，可只设置rect中的top、left属性。当topRight时，可只设置rect中的top、right属性。当bottomLeft时，可只设置rect中的bottom、left属性。当bottomRight时，可只设置rect中的bottom、right属性。|

您可以使用调用Notification的config方法去设置: Notification.config({...})。

<br/>
每个消息可自定义设置的属性有  

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| title | Alert消息标题 | react node | - |  |
| body | Alert消息内容 | react node | - | |
| icon | Alert显示的图标 | react node | - |  |
| onClose | 关闭消息的回调 | function | - | 当消息被关闭时触发 |
| alertProps | Alert消息的配置对象 | object | - | 对应Alert组件的API属性，可参阅Alert的API |
上面这些参数在显示各个消息时设置，比如Notification.info({duration: 3000, title: 'title' .....})。



+++ en_US
## API [editUrl]     

