---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/card/md/api.md
---      

+++  zh_CN
## API

- 下列对象存在相同的属性定义：    
 <Code>Header</Code>, <Code>Body</Code>, <Code>Row</Code>, <Code>Footer</Code>, <Code>OverlayTitle</Code>,
 <Code>CardImage</Code>。

| 属性 | 名称 | 类型 | 默认值 | 描述 |    
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| justify | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align | 指定列在垂直方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code> |


- <Code>Image</Code>的属性定义：    
   Image对应于html中的<img/>对象，所有可配置的属性都可应用在Image对象中

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | img |  |
| extraClassName | 额外添加的样式名称 | string | - |  |

- <Code>Card</Code>的属性定义：    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | img |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| block |  | boolean | false |  |
| autoScale | 是否可以自动缩放 | boolean | false |  |
| hasBorder | 是否有边框 | boolean | false |  |
| hasBox | 是否显示阴影 | boolean | true |  |

+++ en_US
## API
