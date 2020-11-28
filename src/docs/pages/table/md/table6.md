--- 
order: 6
type: sample
zh_CN: 异步排序以及显示加载中状态
en_US: Table
editUrl: $BASE/docs/pages/table/md/table6.md
---

+++ zh_CN
要使表格列支持过滤功能，需要将<Code>filterable</Code>属性设置为<Code>true</Code>,同时需要提供一个<Code>filterConfig</Code>对象。
   其中<Code>filterItems</Code>属性提供可供过滤的选项，而<Code>onFilter</Code>
   用来判断选中值是否符合标准。另外过滤弹出框提供了<Code>reset</Code>和<Code>ok</Code>按钮，您可以设置对应的显示文字。


+++ en_US
Table6

+++ SampleCode
fileName: Table6
