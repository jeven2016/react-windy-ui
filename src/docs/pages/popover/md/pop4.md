--- 
order: 4
type: sample
zh_CN: Popover的显示和关闭
en_US: popover
editUrl: $BASE/docs/pages/popover/md/pop4.md
---

+++ zh_CN
在这个示例中，一旦Popover显示后，就只能通过点击Popover中的Close按钮去关闭。这里就是将active和onChange函数一起使用后达到的效果。
   Popover有defaultActive和active两个属性, 用来控制Popover显示和关闭。 defaultActive属性值为true后，控件初始状态下显示Popover。但不影响后续的关闭和显示。
   defaultActive属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，Popover将不能被自动显示、关闭， 
   此时会触发onChange调用，您需要在onChange中切换选中状态。另外，active与onChange方法需要同时提供，以便一起完成状态的切换过程。
   
   
   
+++ en_US
popover

+++ SampleCode
fileName: Pop34
