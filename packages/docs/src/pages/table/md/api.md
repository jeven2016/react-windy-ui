---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/table/md/api.md
---      

+++  zh_CN
## API [editUrl]       

- <Code>Table</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| Ref | - | 当需要获取到dom对象时可设置此属性 |
| className | 弹出菜单的样式名称 | string | table |  |
| extraClassName | 弹出菜单额外添加的样式名称 | string | - |  |
| instanceRef | Table实例对象的Ref | Ref | - | 可以调用的内部方法有：clearSort， clearFilter， clearAll   |
| type | Table类型 | string | normal | 值可以是: <Code>normal</Code>, <Code>striped</Code>, <Code>simple</Code>  |
| hover | 获取光标时是否有背景色 | boolean | false |   |
| hasBorder | 是否有边框| boolean | true |   |
| loadData | 加载的表格数据 | function() \| array | - | 可以是一个可以返回数组对象的方法，或一个数组对象  |
| cells | 表格单元列的参数 | array(object) | - | 详细的配置项目请参考下面的cells说明  |
| hasBox | 是否有阴影 | boolean | false |   |
| checkable | 是否运行选择 | boolean | - |   |
| checkType | 选择的组件类型 | string | checkbox | 值可以是: <Code>checkbox</Code>, <Code>radio</Code>   |
| canCheckAll | 是否可以选择所有行| boolean | - | 当是checkbox类型时，值为true   |
| onCheckChange | 当选择某一行时的回调 | function(row, checked, e) | - |   |
| onCheckAll | 当选择所有行时的回调 | function(checked, e)| - |   |
| defaultCheckedRows | 默认选中行的key数组 | array | - |   |
| checkedRows | 选中行的key数组 | array | - |   |
| highlightCheckedRow | 是否高亮选中的行 | boolean| - |   |
| defaultSortComparator | 默认的排序方法 | function(a, b) | - | 该方法可以返回-1或1用于升序或降序  |
| defaultSortOrder | 默认的排序方式 | string | desc | 值可以是: desc, asc   |
| onSort | 当触发排序时的回调 | function(cell) | - |   |
| sortOrder | 排序方式 | string | - |   |
| defaultOkText | 过滤弹出框的按钮显示文字 | string | OK |   |
| defaultResetText | 过滤弹出框重置按钮的显示文字| string | Reset |   |
| defaultFilterComparator | 默认的过滤方法 | function(values, rowData, cell)| - |   |
| onFilter | 触发过滤时的回调 | function(values, rowData) | - |   |
| scrollY | 是否可以垂直滚动 | boolean | false |   |
| bodyHeight | Body的高度 | number | - |   |
| scrollX | 是否可以水平滚动 | boolean | - |   |
| bodyWidth | Body的宽度| number | - |   |

- <Code>cells</Code>

定义了各个表格列的具体属性

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | 表格列的key | string | - |  |
| head | 表格头显示的内容 | react node |  |  |
| paramName | 在表格单元格中显示的对象字段值 | string | - |  |
| autoEllipsis | 内容超出时是否省略显示 | boolean | false |    |
| fixed | 表格单元列固定的方位 | string | - | 值可以是: <Code>left</Code>, <Code>right</Code>  |
| sortable | 是否可以排序 | boolean | false |   |
| width | 表格列的宽度 | number | - |   |
| filterable | 是否可以过滤 | boolean | false |   |
| filterConfig | 过滤的配置选项, 用于在过滤弹出框中显示可以过滤的选项 | object| - | 格式为： <Code>{filterItems: [ { text: 'filter item1', value: 'item1'}]}</Code>   |
| format | 转换列的显示内容 | function(text, row, tableIndex) | - |   |


+++ en_US
## API [editUrl]     

