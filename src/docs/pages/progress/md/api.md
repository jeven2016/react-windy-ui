---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/progress/md/api.md
---      

+++  zh_CN
## API [editUrl]    
Progress的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | progress |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| active | 是否激活显示 | boolean | false |  |
| percentValue | 当前百分百进度值 | number | 0 | 值的范围是\[0, 100\]  |
| type | 类型 | string | info | 可以设置为: info、warning、ok、error  |
| hasStripe | 是否显示条纹效果 | boolean | false |  |
| hasAnimation | 是否显示动画效果 | boolean | false |  |
| top | 是否居顶显示 | boolean | false |  |
| hasContent | 是否在右侧显示进度值 | boolean | false |  |
| showLoading | 是否在进度条下方显示Loader | boolean | false |  |
| loaderType | Loader的类型 | string | secondary |  |
| loaderSize | Loader的大小 | string | small |  |
| style | progress的样式 | object | - |  |
| barStyle | progress当前进度横条的样式 | object | - |  |
| config | 对应不同进度下的显示配置 | Array({...}) | - | 格式如：<br/>\[{percentValue: 30, type: 'error', content: (p) => 'OK'}\] |

<br/>
<br/>

Progress全局方法：

| 方法 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| showTop | 显示Progress | object | - | 参数格式：{style, type, showLoading,...} ,其他参数可参见Progress的API |
| closeTop | 关闭Progress | - | - |  |



+++ en_US
## API [editUrl]     

