--- 
order: 4
type: sample
zh_CN: 排序
en_US: Table
editUrl: $BASE/docs/pages/table/md/table4.md
---

+++ zh_CN
要使列支持排序时，可以在<Code>cells</Code>数组中针对某列设置<Code>sortable</Code>属性。当值设置为<Code>true</Code>后，该列就支持排序功能。
   将<Code>defaultSortOrder</Code>设置为<Code>asc</Code>或<Code>desc</Code>时，可以指定默认首次排序时是升序还是降序。
   如果需要自行决定排序规则，则可以提供一个<Code>sortComparator</Code>方法，在触发排序时被调用。


+++ en_US
Table4

+++ SampleCode
fileName: Table4
