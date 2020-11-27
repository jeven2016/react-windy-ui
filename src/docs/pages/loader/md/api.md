---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/loader/md/api.md
---      

+++  zh_CN
## API [editUrl]    
Loader的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | loader |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| text | 描述内容 | react node | - | 描述内容 |
| block | 是否占据整行显示 | boolean | false |  |
| color | 颜色 | string | blue | 当前可设置为: white, blue |
| active | 是否激活显示Loader | boolean | false | |
| type | 类型 | string | info | 值可以是：primary，secondary，third |
| size | Loader的大小 | string | medium | 值可以是：small，medium，large |
| hasMask | 是否有背景层 | boolean | true | |
| darkMask | 是否显示黑色的背景层 | boolean | true | |
| hasBackground | 是否有背景色 | boolean | true | |
| direction | Loader内容区域的排列方向 | string | vertical | 值可以设置为: horizontal, vertical |
| modalStyle | Loader对话框的样式对象 | object | - |  |
| global | 是否全局显示一个Loader  | boolean | - |  |
| onMaskClick | 点击背景层的回调  | function | - |  |
| hasDefaultWidth | Loader是否设置默认宽度  | boolean | true |  |


+++ en_US
## API [editUrl]     

