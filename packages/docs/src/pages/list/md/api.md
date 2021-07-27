---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/list/md/api.md
---      

+++  zh_CN
## API [editUrl]    

- <Code><strong>List</strong></Code>    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | common-list |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| header | Header区域 | react node | - |  |
| footer | Footer区域 | react node | - |  |

* <Code><strong>List.Item</strong></Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | list-item |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| icon | Icon图标 | react node | - |  |
| title | 标题信息 | react node | - |  |
| type | 类型 | string | line | 值可以是：<Code>line</Code>, <Code>simple</Code>, <Code>panel</Code> |
| description | 描述 | react node | - |  |
| actions | 显示的操作列表 | react node \| Array(react node) | - |  |
| vertical | 垂直显示 | boolean | false |  |
| moreElements | 显示更多内容 | react node \| Array(react node) | - |  |
| hasRipple | 是否有点击的水纹效果 | boolean | false |  |
| rippleColor | 水纹的颜色 | string | #333 |  |
| compact | 是否紧凑显示 | boolean | false |  |
| justifyActions | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |


+++ en_US
## API [editUrl]     

