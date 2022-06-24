---
order: 3
type: sample
zh_CN: 单选/多选表格行
en_US: Table
editUrl: $BASE/pages/table/md/table3.md
---

+++ zh_CN
将<Code>checkable</Code>设置为<Code>true</Code>后，表格会增加一列显示勾选组件。设置<Code>checkType</Code>属性，可以启用 checkbox 或是 radio。当点击后会触发<Code>onCheckAll</Code>、<Code>onCheckChange</Code>回调。
如果需要一开始就选中某些行，则可以指定<Code>defaultCheckedRows</Code>属性。如果需要自行控制选中哪些行，可以只使用<Code>CheckedRows</Code>配合<Code>onCheckAll</Code>、<Code>onCheckChange</Code>方法，
去控制选中的行。

+++ en_US
Table3

+++ SampleCode
fileName: Table3
