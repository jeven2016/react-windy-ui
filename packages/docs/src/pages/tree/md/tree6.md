---
order: 6
type: sample
zh_CN: 异步读取JSON数据生成Tree
en_US: Sample
onlyVisible: false
editUrl: $BASE/pages/tree/md/tree6.md
---

+++ zh_CN
可以通过<Code>jsonData</Code>属性，使用 JSON 数据生成一颗完整的树。如果需要异步读取这段 JSON 数据，则可以提供一个<Code>loadJsonData</Code>
方法，然后从远程读取数据，并返回一个 Promise 对象。 这里需要注意的是，需要在<Code>TreeItem</Code>的 JSON 数据中设置一个<Code>isLeaf</Code>属性。
如果<Code>isLeaf</Code>为<Code>false</Code>时，点击该节点会继续触发异步加载。

+++ en_US
Tree

+++ SampleCode
fileName: Tree6
