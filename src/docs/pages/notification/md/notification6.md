--- 
order: 6
type: sample
zh_CN: 全局设置
en_US: Notification
editUrl: $BASE/docs/pages/notification/md/notification6.md
---

+++ zh_CN
 默认情况下，页面上存放消息的容器会在四个角落以一定的间隔显示。比如对于leftRight位置，会在当前窗口top距离为'1.5rem',
    right距离为'1.5rem'的地方排列显示消息。如果需要更改这个间距，则可以修改全局配置，设置对应的rect属性。
    <ul>
    <li>当topLeft时，可只设置rect中的top、left属性</li>
    <li>当topRight时，可只设置rect中的top、right属性</li>
    <li>当bottomLeft时，可只设置rect中的bottom、left属性</li>
    <li>当bottomRight时，可只设置rect中的bottom、right属性</li>
    <li>当topCenter时，可只设置rect中的top属性, 因为在水平方向上始终是居中显示的</li>
    </ul>
    
    在这个示例中选择一个方位后，点击“Update the global Configuration”，并点击Message按钮，可以查看到消息在垂直方向
    上5rem、水平方向上2rem的位置显示。
    
    
+++ en_US
Notification6

+++ SampleCode
fileName: Notification6
