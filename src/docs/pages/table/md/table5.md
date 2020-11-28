--- 
order: 5
type: sample
zh_CN: 异步排序以及显示加载中状态
en_US: Table
editUrl: $BASE/docs/pages/table/md/table5.md
---

+++ zh_CN
使用了<Code>sortOder</Code>属性即意味着您需要自行控制排序逻辑，此时需要提供一个<Code>onSort</Code>方法去更新排序结果，而且Table内部将不再自动切换排序规则。
   在Table之上包裹一层<Code>Loader</Code>，则可以显示加载中的状态。

+++ en_US
Table5

+++ SampleCode
fileName: Table5
