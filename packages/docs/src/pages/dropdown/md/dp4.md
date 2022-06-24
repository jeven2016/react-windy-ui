---
order: 4
type: sample
zh_CN: 处理Item的点击事件
en_US: Handle click event
editUrl: $BASE/pages/dropdown/md/dp4.md
---

+++ zh_CN
Dropdown 有两种方式处理菜单的点击事件。
第一种方式，在各个 Item 上设置<Code>onClick</Code>属性，当点击对应的 Item 时触发。
第二种方式，在每个 Item 上设置一个<Code>id</Code>, 然后在 Menu 上提供一个<Code>onSelect</Code>方法，一旦点击了某个 Item，将通过<Code>onSelect</Code>
方法触发回调。

+++ en_US
Dp4

+++ SampleCode
fileName: Dp4
