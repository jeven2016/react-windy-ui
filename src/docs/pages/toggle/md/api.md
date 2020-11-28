---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/toggle/md/api.md
---      

+++  zh_CN
## API [editUrl]       

Toggle的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | toggle-button |   |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| active | 是否激活中 | boolean | false |  |
| defaultActive | 初始是否激活中 | boolean | false |  |
| onChange | 状态变化触发的回调 | function | - |  |
| block | 将宽度设置为100%的行宽 | boolean | `false` |  |
| type | Input的类型 | string | - | 值可以是：text, textarea, password, file等html中关于input可设置的类型 |
| content | 显示内容 | object | - | content格式： {on: 'On': off: 'Off', showInbar: true}， on、off可以是文字或其他react组件对象 |

+++ en_US
## API [editUrl]     

