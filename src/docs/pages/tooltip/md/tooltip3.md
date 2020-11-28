--- 
order: 3
type: sample
zh_CN: 显示的位置
en_US: tooltip
editUrl: $BASE/docs/pages/tooltip/md/tooltip3.md
---

+++ zh_CN
在这个示例中，一旦Lock开关打开后Tooltip将无法自动关闭或打开。这里就是将active和onChange函数一起使用后达到的效果。
Tooltip也有defaultActive和active两个属性, 用来控制显示和关闭。 defaultActive属性值为true后，控件初始状态下显示Tooltip。但不影响后续的关闭和显示。
defaultActive属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，Tooltip将不能被自动显示、关闭， 
此时会触发onChange调用，您需要在onChange中切换选中状态。另外，active与onChange方法需要同时提供，以便一起完成状态的切换过程。
 

+++ en_US
tooltip

+++ SampleCode
fileName: Tooltip3
