---
order: 2
type: sample
zh_CN: JSON数据
en_US: Table
editUrl: $BASE/pages/table/md/table2.md
---

+++ zh_CN
虽然我们可以使用原生的 html 元素去构建一个 Table，但还是建议优先选择 JSON 数据生成 Table 的方式，因为您可以自行调整更多参数。
<Code>cells</Code>是一个数组属性主要用来定义一系列的表格列，数组中的 cell 格式为<Code>{head，paramName，format}</Code>。其中，<Code>head</Code>表示表格的 head 列对应显示的内容，
<Code>paramName</Code>表示这一列对应显示数据对象的某个字段, 如果您需要根据值去显示不一样的内容，可以考虑提供<Code>format</Code>方法。 <Code>loadData</Code>主要用来提供表格
数据，可以提供一个数组。需要注意的是，您需要指定<Code>key</Code>属性，通常对应数据库中的 ID。

+++ en_US
Table2

+++ SampleCode
fileName: Table2
