--- 
order: 7
type: sample
zh_CN: 构建复杂的Select
en_US: Select
editUrl: $BASE/docs/pages/select/md/select7.md
---

+++ zh_CN
在这个示例中，利用active和onChange来控制弹出菜单的显示。当active为true时，菜单会弹出显示，并切会调用onChange控制打开或关闭，你可以
    在onChange回调函数中自行决定。另外需要注意的是，当点击的是背景而非弹出菜单且需要关闭这个菜单时，此时需要在useEffect或者onComponentDidMout
    中添加对window的click事件的监听，对于点击弹出菜单外部的情况需要将状态设置为关闭即可。

+++ en_US
Select

+++ SampleCode
fileName: Select7
