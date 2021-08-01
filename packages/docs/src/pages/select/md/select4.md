--- 
order: 4
type: sample
zh_CN: 自定义搜索
en_US: Select
editUrl: $BASE/pages/select/md/select4.md
---

+++ zh_CN
当<Code>searchable</Code>设置为<Code>true</Code>时，<Code>Select</Code>可以根据输入的值进行过滤显示。但如果需要自行实现<Code>search</Code>的逻辑时，
你可以提供一个<Code>onSearch</Code>方法。 当有搜索值时<Code>Select</Code>会调用<Code>onSelect</Code>方法，让用户自行决定如何搜索并更新列表。

+++ en_US
Select

+++ SampleCode
fileName: Select4
