---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/navbar/md/api.md
---      

+++  zh_CN
## API [editUrl]    
   
* <Code type="normal">Navbar</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | navbar |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：<Code>primary</Code>, <Code>normal</Code> |
| fixed | 固定位置 | string | top | 值可以是：<Code>top</Code>, <Code>bottom</Code> |
| hasBox | 是否显示阴影 | bool | true |  |
| hasBorder | 是否有边框 | bool | false |  |
| autoHide | 是否自动折叠/展示List | bool | true | 当窗口宽度变窄时是否自动隐藏List |
| expand | 展开Navbar | bool | - | 当设置了此属性后，需要配合onExpand方法去修改这个属性值。 |
| defaultExpand | 是否初始展开Navbar | bool | false | 初始显示时是否展开List |
| onExpand | 展开/折叠List时的回调函数 | function(expand) | - | 当expand变化后触发。格式：<Code>onExpand(true|false})</Code> |
   
* <Code type="normal">Switch</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | button navbar-switch bg-transparent |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：<Code>primary</Code>, <Code>normal</Code> |
| onClick | 点击切换按钮的回调 | function(e) | - |  |
| circle | 是否时圆形按钮 | bool | true |  |  
    
* <Code type="normal">Title</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | title |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | li |  |
    
* <Code type="normal">List</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | list |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | ul |  |
| align | List里面的Item对齐方向 | string | left | 值可以是: <Code>left</Code>, <Code>center</Code>, <Code>right</Code> |
    
* <Code type="normal">Item</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | list |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | li |  |
| hasBackground | 激活后是否有背景色 | bool | true |  |
| hasBar | 激活后是否底部横条 | bool | false |  |
| active | 是否激活选中状态 | bool | false |  |
| alignRight | 是否靠右显示 | bool | false |  |
    

+++ en_US
## API [editUrl]     

