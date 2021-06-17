---   
order: 6 
type: sample  
zh_CN: Alert的显示和关闭
en_US: Dispaly and close
editUrl: $BASE/docs/pages/alert/md/alert6.md
---      

+++ zh_CN   
 当设置<Code>active</Code>属性后，Alert将不会自动关闭，此时会触发<Code>onClose</Code>调用，您需要在<Code>onClose</Code>中切换显示状态。
    这里，<Code>active</Code>与<Code>onClose</Code>方法需要同时提供，以便一起完成状态的切换过程。当前只有当点击关闭图标，或者设置了延时关闭时才会
    调用<Code>onClose</Code>。

+++ en_US   
Alert

+++ SampleCode  
fileName: Alert6
