---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/card/md/api.md
---      

+++  zh_CN
## API

- <Code>公共属性</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |    
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| justify | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align | 指定列在垂直方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code> |
  
<Blockquote>
 这些组件都有上面这些公共属性 <Code>Header</Code>, <Code>Body</Code>, <Code>Row</Code>, <Code>Footer</Code>, <Code>OverlayTitle</Code>,
 <Code>CardImage</Code>。 <Code>Header</Code>此外还有一个<Code>hasBackground</Code>属性。
</Blockquote>

- <Code>Card</Code>的属性定义：    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | card |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| block | 将宽度设置为100%的行宽 | boolean | false |  |
| autoScale | 是否可以自动缩放 | boolean | false |  |
| rise | 是否显示突起的动画效果 | boolean | false | rise和autoScale只能选择一个设置为true  |
| hasBorder | 是否有边框 | boolean | false |  |
| hasBox | 是否显示阴影 | boolean | true |  |
| hasWidth | 是否有一个默认的宽度 | boolean | true |  |

- <Code>CardImage</Code>的剩余属性    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| hasBackground | 是否有背景 | false | - |  |
| autoScale | 是否可以自动缩放 | false | - |  |


- <Code>Image</Code>的属性定义：    
  Image对应于html中的<Code>&lt;img/&gt;</Code>，img可配置的属性都可应用在Image对象上

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | img |  |
| extraClassName | 额外添加的样式名称 | string | - |  |

- <Code>Curtain</Code>的属性定义：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | card-curtain |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 禁用Curtain | boolean | false |  |
| triggerBy | 触发方式 | string | click | 值可以是: <Code>click</Code>, <Code>hover</Code> |
| clickMaskToChange | 点击Mask是否触发切换 | boolean | false |  |
| darkMask | 是否显示黑色的背景层 | boolean | true | |
| defaultClose | 初始是否关闭窗帘 | boolean | false |  |
| close | 关闭窗帘 | boolean | - |  |
| onChange | 窗帘打开关闭触发的回调 | function(close, event) | - |  |
| closeContent | 窗帘关闭时显示的内容 | react node | - |  |


+++ en_US
## API

