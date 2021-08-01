--- 
order: 5
type: sample
zh_CN: 全局设置
en_US: Notification
editUrl: $BASE/pages/notification/md/notification5.md
---

+++ zh_CN  
除了全局的config配置外，您还可以给每个消息添加自定义属性。比如设置<Code>duration</Code>、<Code>position</Code>后，可以让单条消息以
    在指定的位置显示，并且持续显示多久。由于Notification内部依靠Alert组件实现的，如果需要更改每个消息的属性，
    可以在<Code>alertProps</Code>中配置。具体的可配置项可以参阅Alert的API。这个例子中，会在右上角位置显示白字黑底的消息

    
+++ en_US  
Notification5

+++ SampleCode  
fileName: Notification5
