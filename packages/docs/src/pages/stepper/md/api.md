---
order: 100
type: text
zh_CN: API
en_US: API
editUrl: $BASE/pages/container/md/api.md
---

+++ zh_CN

## API

- <Code><strong>Stepper</strong></Code>

| 属性              | 名称                               | 类型                   | 默认值       | 描述                                                          |
| ----------------- | ---------------------------------- | ---------------------- | ------------ | ------------------------------------------------------------- |
| ref               | Dom 对象的引用                     | function \| ref        | -            | 当需要获取 dom 对象时可设置此属性                             |
| className         | 样式名称                           | string                 | w-stepper    |                                                               |
| extraClassName    | 样式名称                           | string                 | -            |                                                               |
| activeStep        | 当前激活的 Step                    | number                 | -            | Step 的序号从 0 开始                                          |
| defaultActiveStep | 默认激活的 Step                    | number                 | -            |                                                               |
| borderedIcon      | 是否显示图标的边框                 | boolean                | true         |                                                               |
| direction         | Stepper 的排列方向                 | string                 | horizontal   | 值可以是：<Code>horizontal</Code>，<Code>vertical</Code>      |
| stepDirection     | Step 的文字排列方向                | string                 | horizontal   | 值可以是：<Code>horizontal</Code>，<Code>vertical</Code>      |
| dotIcon           | 是否圆心图标                       | boolean                | false        |                                                               |
| solidDot          | 是否实心圆图标                     | boolean                | false        |                                                               |
| grayDot           | 已处理的实心圆图标，颜色设置为灰色 | boolean                | false        |                                                               |
| reverse           | 是否以相反的顺序显示 Step          | boolean                | false        | 只有当<Code>direction</Code>设置为<Code>vertical</Code>时生效 |
| errorType         | 错误类型                           | string                 | -            | 值可以是: <Code>error</Code>, <Code>warning</Code>            |
| errorIcon         | error 错误类型对应的 Icon          | react node             | IconClear    |                                                               |
| warningIcon       | warning 错误类型对应的 Icon        | react node             | IconWarning2 |                                                               |
| showErrorIcon     | 是否显示对应的错误图标             | react node             | IconWarning2 |                                                               |
| showIcon          | 是否显示 Step 上的图标             | boolean                | true         |                                                               |
| onClick           | 点击导航 Step 的回调函数           | function(stepIndex, e) | -            | 当设置了 onClick 后，Stepper 就是一个可随意切换的导航栏       |
| hasRipple         | 是否有点击的水纹效果               | boolean                | true         | 当设置了 onClick 后，ripple 生效                              |
| rippleColor       | 水纹的颜色                         | string                 | \#ccc        | 颜色字符串值，例如<Code>'#333'</Code>                         |

- <Code><strong>Step</strong></Code>

| 属性           | 名称             | 类型            | 默认值 | 描述                                                                         |
| -------------- | ---------------- | --------------- | ------ | ---------------------------------------------------------------------------- |
| ref            | Dom 对象的引用   | function \| ref | -      | 当需要获取 dom 对象时可设置此属性                                            |
| className      | 样式名称         | string          | w-step |                                                                              |
| extraClassName | 样式名称         | string          | -      |                                                                              |
| title          | 标题内容         | react node      | -      |                                                                              |
| subtitle       | 子标题内容       | react node      | -      |                                                                              |
| icon           | 图标             | react node      | -      |                                                                              |
| errorType      | 错误类型         | string          | -      | 值可以是: <Code>error</Code>, <Code>warning</Code>                           |
| disabled       | 是否禁用         | boolean         | false  |                                                                              |
| status         | 当前 Step 的状态 | string          | -      | 值可以是： <Code>finished</Code>, <Code>processing</Code>, <Code>todo</Code> |

+++ en_US

## API

api
