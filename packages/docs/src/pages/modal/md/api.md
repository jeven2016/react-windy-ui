---   
order: 100
type: text
zh_CN: API
en_US: API 
editUrl: $BASE/docs/pages/modal/md/api.md
---      

+++ zh_CN

## API [editUrl]

- <Code>Modal</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Modal Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | modal |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | info | 值可以是：primary，secondary，simple, fullWindow |
| hasMask | 是否显示黑色遮罩层 | boolean | true |  |
| onCancel | 关闭时的回调函数 | function | - | 点击右上角的关闭图标或黑色遮罩层时会在内部自动调用  |
| active | 激活显示 | boolean | - |  |
| center | 是否居中显示 | boolean | true | 如果设置成false时，会在距离顶部某处显示 |
| autoOverflow | 是否允许内容区域垂直滚动 | boolean | true |  |
| hasDefaultWidth | 是否设置一个默认的宽度 | boolean | true |  |

- <Code>Mode.method()</Code>对应的方法

| 方法名 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| info | 显示info类型的Modal | object | modal | 参数可用属性：<Code>{type, header, title, body, okText, cancelText, onOk, onCancel, icon, okButtonProps, cancelButtonProps}</Code> |
| warning | 显示warning类型的Modal | object | modal | 同上  |
| error | 显示error类型的Modal | object | modal |  同上  |
| success | 显示success类型的Modal | object | modal | 同上  |
| confirm | 显示confirm类型的Modal | object | modal |  同上  |
| compact | 显示简洁类型的Modal | object | modal | 同上  |
| closeAll | 关闭所有的Modal | - | - |  |

- 通过上面<Code>Modal.method()</Code>方法返回的modal对象，其提供的方法如下所示：

| 方法名 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| close |  关闭当前的Modal   |  -   | -  |   |
| update |  更新Modal的内容   | object | - | 可更新的内容：{header，title，body，okText，cancelText}  |

+++ en_US

## API [editUrl]     

