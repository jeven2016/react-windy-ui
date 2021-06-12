---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/pagination/md/api.md
---      

+++  zh_CN
## API [editUrl]
- <Code>Pagination</Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | pagination |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| siblingCount | 当前选中页的前后各显示多少页 | number | 2 |  |
| pageCount | 共有多少页 | number | - |  |
| defaultPage | 初始选中的页 | number | 1 |  |
| page | 当前选中的页 | number | - |  |
| hasPrevButton | 是否显示上一页按钮 | boolean | true |  |
| hasNextButton | 是否显示下一页按钮 | boolean | true |  |
| hasPageRange | 是否可以选择每页显示的记录条数 | boolean | false |  |
| pageRanges | 可选的每页记录条数 | array(number) | []] |  |
| renderPageRanges | 自定义每页记录下拉框的内容 | function(pageRange)： react node| - | 根据pageRange返回需要在下拉框显示的内容  |
| defaultPageRange | 初始选中选项 | number | - |  |
| pageRange | 当前每页显示条数选项 | number | - |  |
| onChange | 切换页的回调函数 | function(nextPage, nextPageRange, e ) | - |  |
| onChangeRange | 切换每页显示条数下拉框的回调 | function(nextPageRange, e) | - |  |
| hasGo | 是否有‘跳至’按钮 | boolean | - |  |
| buttonProps | 按钮的props属性对象 | object | - |  |
| leftItems | 在左侧需要显示的内容 | array(react node) | [] |  |
| rightItems | 在右侧需要显示的内容 | array(react node) | [] |  |
| simple | 是否简化的分页 | boolean | false |  |
| compactMenu | 每页记录下拉框的Menu是否扁平显示 | boolean | true |  |
| renderPre | 自定义上一页按钮 | function() react node | - | 返回自定义的上一页对象  |
| renderNext | 自定义上一页下按钮 | function react node | - | 返回自定义的上一页对象 |
| selectProps | 每页显示条数下拉框的props属性对象 | object| - |  |




+++ en_US
## API [editUrl]     

