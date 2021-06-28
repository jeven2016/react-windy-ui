--- 
order: 4
type: sample
zh_CN: 全局显示的Loader
en_US: Global Loader
editUrl: $BASE/docs/pages/loader/md/loader4.md
---

+++ zh_CN
 Loader可以跟Modal相似，全局弹出显示。此时你需要将<Code>global</Code>属性设置为<Code>true</Code>,同时将hasMask设置为<Code>true</Code>可以显示黑色背景。
如果Loader需要设置一个背景色，可以将<Code>hasBackground</Code>设置为<Code>true</Code>。点击黑色背景需要关闭Loader时，需要实现onMaskClick
方法。另外Loader的颜色，当前可以设置成<Code>white</Code>或<Code>blue</Code>两种颜色，需要其他颜色时可以覆盖对应的样式class。

+++ en_US
Loader4

+++ SampleCode
fileName: Loader4
