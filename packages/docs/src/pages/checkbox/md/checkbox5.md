---
order: 5
type: sample
zh_CN: Checkbox的中间状态
en_US: Indeterminate state
editUrl: $BASE/pages/checkbox/md/checkbox5.md
---

+++ zh_CN
Checkbox 除了勾选、去勾选两种状态外，还有一种状态称为不确定状态。设置<Code>showIndeterminateState</Code>属性后，即可将控件转换成此状态。
同时通过设置<Code>iconIndeterminateStyle</Code>样式，进行颜色的更改。
需要注意的是，当控件处于这种状态时，不会自动切换其他状态。如果需要从中间状态切换成其他状态时，需要将<Code>showIndeterminateState<、Code>
设置成<Code>false</Code>，同时结合<Code>checked</Code>和<Code>onChange</Code>方法更改状态。
比如在 Tree 控件中，如果子节点未全部勾选，则父节点会使用这个中间状态进行显示。

+++ en_US
ck5

+++ SampleCode
fileName: Checkbox5
