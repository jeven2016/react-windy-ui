---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/collapse/md/api.md
---      

+++  zh_CN
## API [editUrl]    

Collapse的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | checkbox |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| defaultActive | 初始展开的面板所对应的值数组 | string[] \| number[] | - |  |
| active | 展开的面板所对应的值数组 | string[] \| number[] | - |  |
| onChange | 面板折叠状态切换触发的回调 | function | - |  |
| accordion | 显示手风琴类型的折叠框 | boolean | false |  |
| hasBorder | 是否有边框 | boolean | false |  |
| hasBox | 是否有边框阴影 | boolean | true |  |
| hasCollapseIcon | 是否显折叠图标 | boolean | true |  |
| collapseIcon | 折叠图标 | react node | - |  |
| children | 子节点对象 | react node | - |  |
| iconPosition | 折叠图标显示的位置 | string | left | 可以设置成'left'或'right' |


Panel的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | collapse-panel |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| collapse | 是否折叠状态 | boolean | - |  |
| children | 子节点对象 | react node | - |  |
| style | 根节点的样式对象 | object | - |  |
| innerStyle | 根节点的子节点样式对象 | object | - |  |
| height | 高度的像素值 | number | - |  |
| autoScaleHeight | 是否自动调整高度 | boolean | - |  |
| heightIncrement | 在原高度像基础上需要额外增加的高度值 | number | - |  |

Item的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| children | 子节点对象 | react node | - |  |
| header | Item对应的Header节点 | react node | - |  |
| value | Panel对应的值 | string \| number | - |  |
| disabled | 是否禁用该Item | boolean \| number | - |  |
| hasBackground | 是否有背景 | boolean \| number | - |  |
| moreItems | 在右侧显示的组件数组 | react node[] | - |  |


+++ en_US
## API [editUrl]     

