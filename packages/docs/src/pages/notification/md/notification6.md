---
order: 6
type: sample
zh_CN: 全局设置
en_US: Notification
editUrl: $BASE/pages/notification/md/notification6.md
---

+++ zh_CN  
 默认情况下，页面上存放消息的容器会在四个角落以一定的间隔显示。比如对于<Code>topRight</Code>位置，会在当前窗口 top 距离为<Code>1.5rem</Code>,
right 距离为<Code>1.5rem</Code>的地方排列显示消息。如果需要更改这个间距，则可以修改全局配置，设置对应的<Code>rect</Code>属性。
当 topLeft 时，可只设置 rect 中的<Code>top</Code>、<Code>left</Code>属性。
当 topRight 时，可只设置 rect 中的<Code>top</Code>、<Code>right</Code>属性。
当 bottomLeft 时，可只设置 rect 中的<Code>bottom</Code>、<Code>left</Code>属性。
当 bottomRight 时，可只设置 rect 中的<Code>bottom</Code>、<Code>right</Code>属性。
当 topCenter 时，可只设置 rect 中的<Code>top</Code>属性, 因为在水平方向上始终是居中显示的。

在这个示例中选择一个方位后，点击“Update the global Configuration”，并点击 Message 按钮，可以查看到消息在垂直方向
上 5rem、水平方向上 2rem 的位置显示。

+++ en_US  
Notification6

+++ SampleCode  
fileName: Notification6
