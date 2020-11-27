---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/layout/md/api.md
---      

+++  zh_CN
## API [editUrl]    

- 下列对象存在相同的属性定义：    
 <Code>Header</Code>, <Code>Slider</Code>, <Code>Content</Code>, <Code>Split</Code>, <Code>Footer</Code>。

| 属性 | 名称 | 类型 | 默认值 | 描述 |  
| --- | --- | --- | --- | --- |  
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |  

- <Code>Header</Code>和<Code>Footer</Code>额外还有相同属性:  

| 属性 | 名称 | 类型 | 默认值 | 描述 |  
| --- | --- | --- | --- | --- |  
| fixed | 固定显示的位置 | string | - | 可以设置为: <Code>top</Code>, <Code>bottom</Code> |

- <Code>Slider</Code>额外属性定义:

| 属性 | 名称 | 类型 | 默认值 | 描述 |  
| --- | --- | --- | --- | --- |  

| hasBox | 是否有阴影 | boolean | - |  |
| collapse | 是否折叠 | boolean |  |  |
| width | 展开时的宽度(px) | string | <Code>240px</Code> |  |
| minWidth | 折叠后显示的最小宽度 | string | <Code>80px</Code>  |  |

- <Code>Layout</Code>额外属性定义:  

| 属性 | 名称 | 类型 | 默认值 | 描述 |  
| --- | --- | --- | --- | --- |  
| collapse | 是否折叠 | boolean |  |  |
| collapseAttribute | 折叠的参数设置 | object |  | 格式如：<Code>{attr, minValue, maxValue}</Code> |  
  
<Blockquote>

对于collapseAttribute属性，例如如下显示一段默认配置：    
  
<Hcode>
collapseAttribute = {
  attr: 'marginLeft',
  minValue: '80px',
  maxValue: '240px',
}
</Hcode>  
这里的参数指定了，当折叠时将<Code>'margin-left'</Code>设置为<Code>'80px'</Code>；当展开时，将<Code>'margin-left'</Code>
设置为<Code>'240px'</Code>。这里的参数值以<Code>‘px’</Code>为单位，请勿设置为其他单位。 

</Blockquote>


+++ en_US
## API [editUrl]     

