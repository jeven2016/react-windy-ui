--- 
order: 4
type: sample
zh_CN: Progress快捷使用
en_US: progress
editUrl: $BASE/docs/pages/progress/md/progress4.md
---

+++ zh_CN
Progress还提供了两个方法以程序调用方式去控制显示和关闭，这两个方法是: showTop()、closeTop()。
    当调用showTop后，进度条在页面顶端显示，并定时更新进度。当closeTop被调用时，进度条随后显示进度完成并从界面隐藏。
    initPercentValue指定了进度条初始百分百值，每次更新时进度值会在incrementStart和incrementEnd之间随机
    生成并递增一个新的进度值用于进度条的更新。

+++ en_US
progress

+++ SampleCode
fileName: Progress4
