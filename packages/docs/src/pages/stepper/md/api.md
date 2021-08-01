---   
order: 100 
type: text 
zh_CN: API 
en_US: API 
editUrl: $BASE/docs/pages/container/md/api.md
---      

+++ zh_CN
## API  

- <Code><strong>Stepper</strong></Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | w-stepper |  |
| extraClassName | 样式名称 | string | - |  |
| activeStep | 当前激活的Step | number | - | Step的序号从0开始 |
| defaultActiveStep | 默认激活的Step | number | - | |
| borderedIcon | 是否显示图标的边框 | boolean | true | |
| direction | Stepper的排列方向 | string | horizontal | 值可以是：<Code>horizontal</Code>，<Code>vertical</Code>|
| stepDirection | Step的文字排列方向 | string | horizontal | 值可以是：<Code>horizontal</Code>，<Code>vertical</Code>|
| dotIcon | 是否圆心图标 | boolean | false | |
| solidDot | 是否实心圆图标 | boolean | false | |
| grayDot | 已处理的实心圆图标，颜色设置为灰色 | boolean | false | |
| reverse | 是否以相反的顺序显示Step | boolean | false | 只有当<Code>direction</Code>设置为<Code>vertical</Code>时生效 |
| errorType | 错误类型 | string | - | 值可以是: <Code>error</Code>, <Code>warning</Code> |
| errorIcon | error错误类型对应的Icon | react node | IconClear |  |
| warningIcon | warning错误类型对应的Icon | react node | IconWarning2 |  |
| showErrorIcon | 是否显示对应的错误图标 | react node | IconWarning2 |  |
| showIcon | 是否显示Step上的图标 | boolean | true |  |
| onClick | 点击导航Step的回调函数 | function(stepIndex, e) | - | 当设置了onClick后，Stepper就是一个可随意切换的导航栏 |
| hasRipple | 是否有点击的水纹效果 | boolean | true | 当设置了onClick后，ripple生效  |
| rippleColor | 水纹的颜色 | string | \#ccc | 颜色字符串值，例如<Code>'#333'</Code> |



+++ en_US

## API

api
