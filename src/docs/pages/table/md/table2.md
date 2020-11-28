--- 
order: 2
type: sample
zh_CN: 使用JSON数据生成Table
en_US: Table
editUrl: $BASE/docs/pages/table/md/table2.md
---

+++ zh_CN
虽然在示例1中我们可以使用原生的html元素去构建一个Table，但这里还是建议优先选择JSON数据生成Table的方式，因为当有特定需求的时您可以自行调整更多参数设定。
 <Code>cells</Code>是一个数组属性主要用来定义一系列的表格列，数组中的cell格式为<Code>{head，showParam，format}</Code>。其中，<Code>head<、Code>表示表格的head列对应显示的内容，
 <Code>showParam</Code>表示这一列需要显示数据对象的某个字段，<Code>format</Code>则不是必须的，如果您需要根据值去显示不一样的内容，可以考虑提供此实现。loadData主要用来提供表格
 行数据，这里可以提供一个数组，也可以是一个返回数组对象的方法。但需要注意的是，您需要额外指定一个<Code>key</Code>属性，这个可以通常对应数据库中的ID，因为在渲染表格行时，
 react需要给数组的渲染对象指定一个key。

+++ en_US
Table2

+++ SampleCode
fileName: Table2
