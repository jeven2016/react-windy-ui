---
order: 6
type: sample
zh_CN: 固定左侧的Slider
en_US: Slider
editUrl: $BASE/pages/layout/md/layout6.md
---

+++ zh_CN
这里通过设置<Code>Slider</Code>的<Code>style</Code>属性将 Slider 固定在左边显示，同时与 Content 区域一样在内容高度超出时，允许各自滚动展示。
在需要折叠 Slider 时，可以设置 Slider、右侧 Layout 的<Code>collapse</Code>属性，将其折叠或展开。另外，Slider 默认在折叠状态时宽度为<Code>80px</Code>, 如果需要设置为<Code>0</Code>时，
则需要将 Slider 的<Code>minWidth</Code>设置为<Code>‘0px'</Code>即可。当 Slider 展开时，右侧 Layout 默认<Code>margin-left</Code>的值为<Code>240px</Code>,
如果需要修改，则需要提供一个<Code>collapseAttribute</Code>配置对象进行调整。

+++ en_US
Layout6

+++ SampleCode
fileName: Layout6
