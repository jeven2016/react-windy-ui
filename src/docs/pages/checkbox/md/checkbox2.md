--- 
order: 2
type: sample
zh_CN: 默认选中
en_US: Checked by default
editUrl: $BASE/docs/pages/checkbox/md/checkbox2.md
---

+++ zh_CN
设置defaultChecked属性值为true后，控件初始状态下显示选中状态。但不影响后续的勾选、去勾选。defaultChecked
    属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，控件将不能被自动勾选、去勾选，
    此时会触发onChange调用，您需要在onChange中决定是否切换选中状态。另外，checked与onChange方法需要同时提供，以便一起完成状态的切换过程。
 
+++ en_US
ck1

+++ SampleCode
fileName: Checkbox2
