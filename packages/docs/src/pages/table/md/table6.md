---
order: 6
type: sample
zh_CN: 清除过滤和排序
en_US: Table
editUrl: $BASE/pages/table/md/table6.md
---

+++ zh_CN
要使表格列支持过滤功能，需要将<Code>filterable</Code>属性设置为<Code>true</Code>,同时需要提供一个<Code>filterConfig</Code>对象。
其中<Code>filterItems</Code>属性提供可供过滤的选项，而<Code>onFilter</Code>
用来判断选中值是否符合标准。当需要清除已有的过滤和排序条件时，可用通过<Code>instanceRef</Code>去调用 Table 的 clear 方法。

+++ en_US
Table6

+++ SampleCode
fileName: Table6
