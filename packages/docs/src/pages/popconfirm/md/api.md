---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/popconfirm/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>PopConfirm</Code>属性定义:

| 属性              | 名称                  | 类型            | 默认值       | 描述                                                                                                                                                                                                                                                                                    |
| ----------------- | --------------------- | --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref               | 根节点 Dom 对象的引用 | function \| ref | -            | 当需要获取 dom 对象时可设置此属性                                                                                                                                                                                                                                                       |
| className         | 样式名称              | string          | -            |                                                                                                                                                                                                                                                                                         |
| extraClassName    | 额外添加的样式名称    | string          | -            |                                                                                                                                                                                                                                                                                         |
| body              | 描述内容              | react node      | -            |                                                                                                                                                                                                                                                                                         |
| okText            | OK 按钮上的文字       | string          | OK           |                                                                                                                                                                                                                                                                                         |
| cancelText        | No 按钮上的文字       | string          | NO           |                                                                                                                                                                                                                                                                                         |
| okButtonProps     | OK 按钮的属性         | object          | -            |                                                                                                                                                                                                                                                                                         |
| cancelButtonProps | cancel 按钮的属性     | object          | -            |                                                                                                                                                                                                                                                                                         |
| onOk              | 点击 OK 按钮后的回调  | function        | -            |                                                                                                                                                                                                                                                                                         |
| onCancel          | 点击 No 按钮后的回调  | function        | -            |                                                                                                                                                                                                                                                                                         |
| icon              | 图标                  | react node      | IconWarning2 | -                                                                                                                                                                                                                                                                                       |
| justifyFooter     | 按钮的排列方式        | string          | end          | 值可以是： <Code>start</Code>，<Code>end</Code>, <Code>center</Code>, <Code>around</Code>, <Code>between</Code>, <Code>evenly</Code>                                                                                                                                                    |
| position          | 弹出框的位置          | string          | bottom       | 值可以是: <Code>topLeft</Code>、<Code>top</Code>、<Code>topRight</Code>、 <Code>bottomLeft</Code>、<Code>bottom</Code>、<Code>bottomRight</Code>、<Code>leftTop</Code>、<Code>left</Code>、<Code>leftBottom</Code>、<Code>rightTop</Code>、<Code>right</Code>、<Code>rightBottom</Code> |

+++ en_US

## API [editUrl]
