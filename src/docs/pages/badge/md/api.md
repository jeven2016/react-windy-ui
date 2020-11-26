---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/badge/md/api.md
---      

+++  zh_CN
## API
Input的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | badge |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | Badge类型 | string | normal | 值可以是：normal, dot, tag |
| body | 标记的内容 | react node | - |  |
| color | 颜色 | string | error | 值可以是: info、ok、gray、warning、error、dark,也可以设置颜色对应的值如#334433, red，blue等 |
| active | 激活显示该Badge | boolean | true |  |
| shake | 是否定时显示抖动效果 | boolean | false |  |
| shakeDuration | 抖动持续事件(ms) | number | 1000 |  |

+++ en_US

## API
api
