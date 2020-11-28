--- 
order: 4
type: sample
zh_CN: 自定义搜索逻辑的Select
en_US: Select
editUrl: $BASE/docs/pages/select/md/select4.md
---

+++ zh_CN
当searchable设置为true时，Select可以根据输入的值进行过滤显示。但如果需要自行实现search的逻辑时，你可以提供一个onSearch方法。
    当有搜索值时Select会调用onSelect方法，让用户自行决定如何搜索并更新列表。

+++ en_US
Select

+++ SampleCode
fileName: Select4
