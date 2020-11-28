---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/drawer/md/api.md
---      

+++  zh_CN
## API [editUrl]    

Drawer的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | drawer |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| active | 显示Drawer | boolean | - |  |
| onChange | Drawer显示或关闭触发的回调 | function | - |  |
| hasMask | 是否显示黑色背景 | boolean | true |  |
| hasAnchor | 是否显示打开Drawer的快捷图标 | boolean | false |  |
| autoClose | 点击背景是否触发自动关闭 | boolean | true |  |
| position | 显示的位置 | string | left | 可以设置为: left、top、right、bottom  |
| header | header节点 | react node | - |   |
| footer | footer节点 | react node | - |   |
| style | 样式 | object | - | 可在其中指定Drawer的高度和宽度  |

+++ en_US
## API [editUrl]     

