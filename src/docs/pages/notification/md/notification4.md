--- 
order: 4
type: sample
zh_CN: 全局设置
en_US: Notification
editUrl: $BASE/docs/pages/notification/md/notification4.md
---

+++ zh_CN
当一系列显示消息要遵循统一的规则去展示时，您可以使用Notification.config()方法去配置一个全局的config对象。
    Notification中的消息队列将在每个消息体上应用配置的全局设定。需要注意的是，修改后，这个全局对象对这个页面的其他示例也有影响。
    在这个示例中一旦修改了hasCloseIcon、duration、position属性，会在useEffect中调用Notification.config()方法去配置一个全局的对象。
    而且这个方法会将传入的参数与已有的全局对象里面的参数进行合并操作。也就是说如果只修改了position属性，您可以只设置一个
    {position: 'topCenter'}对象，在Notification内部会负责与其他参数的合并组装，您无需担心其他属性是否会被丢弃掉的问题。
    这个示例展示了您可以告诉Notification是否要显示关闭的Icon, 消息持续显示多久以及显示的位置。
    
+++ en_US
Notification4

+++ SampleCode
fileName: Notification4
