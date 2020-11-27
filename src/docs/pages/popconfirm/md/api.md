---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/popconfirm/md/api.md
---      

+++  zh_CN
## API [editUrl]    

- <Code>PopConfirm</Code>属性定义:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| body | 描述内容 | react node | - |  |
| okText | OK按钮上的文字 | string | Ok |  |
| cancelText | No按钮上的文字 | string | No |  |
| okButtonProps | OK按钮的属性 | object |   |  |
| cancelButtonProps | cancel按钮的属性 | object |   |  |
| onOk | 点击OK按钮后的回调 | function |   |  |
| onCancel | 点击No按钮后的回调 | function |   |  |
| icon | 图标 | react node |  IconWarning2 |  |
| justifyFooter | 按钮的排列方式 | string |   |  |
| position | 弹出框的位置 | string | 参见下面详细描述  |  |

<Blockquote>
    
对于<Code>justifyFooter</Code>属性，可以配置以下值： 
          
<Hcode>start, end, center, around, between, evenly</Hcode>  

对于<Code>position</Code>属性，可以配置以下值：     
      
<Hcode>top, topLeft, topRight, bottom, bottomLeft, bottomRight,
left, leftTop, leftBottom, right, rightTop, rightBottom</Hcode>  
   
</Blockquote>


+++ en_US
## API [editUrl]     

