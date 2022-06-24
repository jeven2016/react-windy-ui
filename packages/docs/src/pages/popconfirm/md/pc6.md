---
order: 6
type: sample
zh_CN: 自定义弹出框和按钮
en_US: PopConfirm
editUrl: $BASE/pages/popconfirm/md/pc6.md
---

+++ zh_CN
由于<Code>PopConfirm</Code>内部使用了<Code>Popover</Code>组件，你可以直接将<Code>Popover</Code>的<Code>props</Code>属性直接设置在<Code>PopConfirm 上</Code>。比如这里的
<Code>position</Code>、<Code>offset</Code>、<Code>hasBorder</Code>、<Code>hasArrow</Code>、<Code>hasBox</Code>都是<Code>Popover</Code>上的属性。如果需要设置两个按钮的<Code>props</Code>属性，
则可以配置<Code>okButtonProps</Code>、<Code>cancelButtonProps</Code>。

+++ en_US
popconfirm

+++ SampleCode
fileName: Pc6
