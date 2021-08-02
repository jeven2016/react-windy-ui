--- 
order: 3
type: sample
zh_CN: 显示的位置
en_US: tooltip
editUrl: $BASE/pages/tooltip/md/tooltip3.md
---

+++ zh_CN
在这个示例中，一旦Lock开关打开后Active按钮上面的Tooltip将无法自动关闭或打开。这里就是将<Code>active</Code>和<Code>onChange</Code>函数一起使用后达到的效果。
Tooltip也有<Code>defaultActive</Code>和<Code>active</Code>两个属性, 用来控制显示和关闭。 <Code>defaultActive</Code>属性值为<Code>true</Code>后，控件初始状态下显示Tooltip。但不影响后续的关闭和显示。
<Code>defaultActive</Code>属性设置的是初始状态，可以后续被改变。但<Code>active</Code>属性与之则不同，当设置<Code>active</Code>属性后，Tooltip将不能被自动显示、关闭， 
此时会触发<Code>onChange</Code>调用，您需要在<Code>onChange</Code>中切换选中状态。需要注意的是，<Code>active</Code>与<Code>onChange</Code>方法需要同时提供，以便一起完成状态的切换过程。
 

+++ en_US
tooltip

+++ SampleCode
fileName: Tooltip3
