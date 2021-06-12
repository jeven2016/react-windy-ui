---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/tree/md/api.md
---      

+++  zh_CN
## API [editUrl]       
   
* <Code type="normal">Tree</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tree |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| showLoading | 是否显示加载中状态 | boolean | true |  |
| loader | 默认的Loader组件 | react node | Loader |  |
| loadJsonData | 加载JSON数据的方法 | function | - |  |
| jsonData | 用于生成Tree的JSON数据 | object | - |  |
| autoCheckLeafs | 勾选父节点是否自动将所有子节点勾选 | boolean | true |  |
| multiSelect | 是否可以选中多个TreeItem | boolean | false |  |
| onlySelectLeaf | 是否只可以选中叶子节点 | boolean | true | 当true时，点击父节点只控制树的展开/折叠 |
| checkable | 是否可以勾选节点 | boolean | false |  |
| autoExpandParents | 点击子节点是否自动勾选父节点 | boolean | true |  |
| defaultExpandedItems | 默认展开的节点 | Array(string) | [] |  |
| expandedItems | 当前展开的节点 | Array(string) | - | 一旦设置必须通过onExpand方法去自行控制数组中的值 |
| defaultSelectedItems | 默认选中的节点 | Array(string) | [] |  |
| selectedItems | 当前选中的节点 | Array(string) | - | 一旦设置必须通过onSelect方法去自行控制数组中的值 |
| defaultCheckedItems | 默认勾选的节点 | Array(string) | [] |  |
| checkedItems | 当前勾选的节点 | Array(string) | - | 一旦设置必须通过onCheck方法去自行控制数组中的值 |
| highlightLine | 是否高亮显示整个TreeItem所在的行 | boolean | false |  |
| onSelect | 当点击选中某个TreeItem触发的回调函数 | function(id \| Array(id), e) | - | 当是单选时，返回单个id;多选时，返回数组 |
| onCheck | 当勾选中某个TreeItem触发的回调函数 | function(Array(id), e) | - |  |
| onExpand | 当展开某个TreeItem触发的回调函数 | function(Array(id), e) | - |  |

   
* <Code type="normal">TreeItem</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tree-item |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| label | TreeItem中显示的内容 | react node | - |  |
| icon | TreeItem中左侧显示的Icon | react node | - |  |
| moreElements | TreeItem中在右侧显示的Icon | Array(react node) | - |  |




+++ en_US
## API [editUrl]     

