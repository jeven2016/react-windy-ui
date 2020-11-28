--- 
order: 5
type: sample
zh_CN: Checkbox的中间状态
en_US: Indeterminate state
editUrl: $BASE/docs/pages/checkbox/md/checkbox5.md
---

+++ zh_CN
Checkbox除了勾选、去勾选两种状态外，还有一种状态称为中间状态。设置showIndeterminateState属性后，即可将控件转换成此状态。
   同时通过设置iconIndeterminateStyle样式，进行颜色的更改。
   需要注意的是，当控件处于这种状态时，不会自动切换其他状态。如果需要从中间状态切换成其他状态时，需要将showIndeterminateState
   设置成false，同时结合checked和onChange方法更改状态。
   比如在Tree控件中，如果子节点未全部勾选，则父节点会使用这个中间状态进行显示。

+++ en_US
ck5

+++ SampleCode
fileName: Checkbox5
