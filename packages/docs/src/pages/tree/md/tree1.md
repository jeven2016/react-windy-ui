---
order: 1
type: sample
zh_CN: 简单示例
en_US: Sample
onlyVisible: false
editUrl: $BASE/pages/tree/md/tree1.md
---

+++ zh_CN
一个简单的 Tree 示例，定义<Code>Tree</Code>为根节点，并且由一系列具有层级关系的<Code>Item</Code>组成。
默认情况下，只允许选中一个叶子节点，您可以实现<Code>onSelect</Code>回调函数去处理选中事件。需要提醒的是，
您需要给每个<Code>TreeItem</Code>指定一个<Code>id</Code>， 并且这个<Code>id</Code>在整个 Tree 中保证唯一。

+++ en_US
Tree

+++ SampleCode
fileName: Tree1
