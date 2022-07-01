---
order: 2
type: sample
zh_CN: 默认选中
en_US: Checked by default
editUrl: $BASE/pages/checkbox/md/checkbox2.md
---

+++ zh_CN
设置<Code>defaultChecked</Code>属性值为<Code>true</Code>后，控件初始状态下显示选中状态。但不影响后续的勾选、去勾选。<Code>defaultChecked</Code>
属性设置的是初始状态，可以后续被改变。但<Code>checked</Code>性与之则不同，当设置<Code>checked</Code>属性后，控件将不能被自动勾选、去勾选，
此时会触发<Code>onChange</Code>调用，您需要在<Code>onChange</Code>中决定是否切换选中状态。另外，<Code>checked</Code>与<Code>onChange</Code>方法需要同时提供，以便一起完成状态的切换过程。

+++ en_US
ck1

+++ SampleCode
fileName: Checkbox2
