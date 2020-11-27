---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/menu/md/api.md
---      

+++  zh_CN
## API [editUrl]    
几个需要注意的事项：  
 请给SubMenu、Item设置一个在Menu内唯一的id。这个id在菜单折叠展示或Item选中时需要用到。   
 请给SubMenu的配置一个header，这样子菜单才会显示对应的头部区域    
<br/>    

Menu   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| hasBox | 是否显示边框阴影 | boolean | - | - |
| hasBorderRadius | 是否边角有弧形 | boolean | - |  |
| hasArrow | 是否有折叠/展开的箭头 | boolean | - |  |
| collapsable | 是否能够折叠 | boolean | - |  |
| justify | 水平排列Item的方式 | string | start | 可设置为： start，end, center, around, between, evenly |
| direction | 菜单的布局方向 | string | vertical | 可设置为： horizontal（水平布局），vertical（垂直布局）   |
| type | 类型 | string | normal | 可设置为： normal, primary, dark   |
| popupSubMenu | 是否弹出子菜单 | boolean | false |   |
| children | 子节点 | react node | - |   |
| autoIndent | Menu是否自动缩进 | boolean | true  |   |
| indentUnit | 菜单缩进值的单位 | string | rem  |   |
| indentation | 默认的缩进量 | string | rem  |   |
| onSelect | 当有Item选中时的回调 | function | - |   |
| onClickItem | 当点击Item时的回调 | function | - |   |
| multiSelect | 是否可以选择多个Item | boolean | false |   |
| compact | 是否允许菜单压缩显示 | boolean | false |   |
| defaultActiveItems | 默认选中的Item其id组成的数组 | string[] \| number[] | - |   |
| activeItems | 当前选中的Item其id组成的数组 | string[] \| number[] | - |   |
| defaultOpenedMenus | 默认展开的Menu/SubMenu其id组成的数组 | string[] \| number[] | - |   |
| openedMenus | 当前展开的Menu/SubMenu其id组成的数组 | string[] \| number[] | - |   |
| onOpenedMenu | 但菜单展开或折叠所触发的回调 | function | - |   |
| selectable | 点击Item是否允许显示选中状态 | boolean | - |   |


SubMenu   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| id | SubMenu的ID | string \| number | - | 务必设置一个Menu内部唯一的值 |
| icon | 在Header左侧显示的Icon | react node | - |  |
| popupSubMenu | SubMenu是否弹出显示 | boolean | false |  |
| popupSubMenuPosition | SubMenu弹出显示的位置 | string | right | 可设置为： right, bottom  |
| hasBottomBar | 是否在Header下方显示选中状态下的横条 | boolean | false |  |


Group   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| header | 分组的抬头显示 | react node | - |  |



Item   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| id | SubMenu的ID | string \| number | - | 务必设置一个Menu内部唯一的值 |
| equitable | Item是否均匀瓜分剩余的空间 | boolean | - |  |
| hasBackground | 选中时是否添加背景色  | boolean | - |  |
| hasBottomBar | 是否在下方显示选中状态下的横条 | boolean | false |  |
| disabled | 是否禁用 | boolean | - |  |
| align | 对齐的方向 | string | - | 可设置为: left、center、right |
| icon | 在Item左侧显示的Icon | react node | - |  |
| onClick | 点击时的回调 |  | - |  |


+++ en_US
## API [editUrl]     

