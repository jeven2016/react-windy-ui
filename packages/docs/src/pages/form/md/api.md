---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/drawer/md/api.md
---      

+++  zh_CN
## API [editUrl]    


<Blockquote>
当前Form的校验，主要基于<Code>[react-hook-form Version7](https://react-hook-form.com/api/useform)</Code>开源组件实现的。
建议您先了解一下官方的API文档，了解<Code>useForm</Code>等方法的使用。

<Hcode>
  const {form, watch, clearErrors, trigger, handleSubmit} = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: {
      firstName: 'name',
      city: 'ShangHai',
      accept: true,
    },
  });
</Hcode>  
对于useForm返回的一系列方法，想要了解如何使用，
请参考官方的<Code>[useForm Version7](https://react-hook-form.com/api/useform)</Code>章节。
</Blockquote>


- <Code><strong>Form</strong></Code>    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | form |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| direction | 布局方式 | string | vertical | 值可以是: <Code>vertical</Code>, <Code>horizontal</Code> |
| nativeType | 当前Form的根节点类型 | string | form | 默认根节点是<Code>form</code> |
| labelCol |  | string | form | 默认根节点是<Code>form</code> |
| controlCol |  | string | form | 默认根节点是<Code>form</code> |
| onSubmit |  | string | form | 默认根节点是<Code>form</code> |
| onError |  | string | form | 默认根节点是<Code>form</code> |

* <Code><strong>Form.Item</strong></Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | form |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| direction | Item内覆盖全局的布局方式 | string | vertical | 值可以是: <Code>vertical</Code>, <Code>horizontal</Code> |
| compact |  | string | form | 默认根节点是<Code>form</code> |
| justify |  | string | form | 默认根节点是<Code>form</code> |
| justifyLabel |  | string | form | 默认根节点是<Code>form</code> |
| labelCol |  | string | form | 默认根节点是<Code>form</code> |
| controlCol |  | string | form | 默认根节点是<Code>form</code> |
| name |  | string | form | 默认根节点是<Code>form</code> |
| label |  | string | form | 默认根节点是<Code>form</code> |
| rules |  | string | form | 默认根节点是<Code>form</code> |
| required |  | string | form | 默认根节点是<Code>form</code> |
| hasRequiredIcon |  | string | form | 默认根节点是<Code>form</code> |
| iconPosition |  | string | form | 默认根节点是<Code>form</code> |
| renderMessage |  | string | form | 默认根节点是<Code>form</code> |
| simple |  | string | form | 默认根节点是<Code>form</code> |

+++ en_US
## API [editUrl]     

