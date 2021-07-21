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
| direction | 布局方向 | string | vertical | 值可以是: <Code>vertical</Code>, <Code>horizontal</Code>, <Code>inline</Code> |
| nativeType | 当前表单的根节点类型 | string | form | 默认根节点是<Code>form</code> |
| labelCol | Label的布局设定 | object | - | 使用<Code>[Grid](http://super666.cn:3000/#/docs/grid)</Code>中的<Code>Col定义</Code>，定义不同窗口大小下的布局。结构可以是<Code>{col,xs,sm,md,lg,xg}</Code> |
| controlCol | 输入控件所处的列 | object | - | 使用<Code>[Grid](http://super666.cn:3000/#/docs/grid)</Code>中的<Code>Col定义</Code>，定义不同窗口大小下的布局。结构可以是<Code>{col,xs,sm,md,lg,xg}</Code> |
| onSubmit | 校验通过后的回调 | function(data, e) | - | |
| onError | 校验失败后的回调 | function(data, e) | - |  |

* <Code><strong>Form.Item</strong></Code>

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | form-item |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| direction | Item内覆盖全局的布局方向 | string | vertical | 值可以是: <Code>vertical</Code>, <Code>horizontal</Code>, <Code>inline</Code> |
| compact | 在Form中是否以紧凑模式显示 | boolean | false | 当值为true时， 不会添加一个空行，显示错误信息 |
| justify | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| justifyLabel | Label列在水平方向的排列方式  | string | start | 定义与justify属性相同 |
| labelCol | Label的布局设定，覆盖全局设定 | object | - | 使用<Code>[Grid](http://super666.cn:3000/#/docs/grid)</Code>中的<Code>Col定义</Code>，定义不同窗口大小下的布局。结构可以是<Code>{col,xs,sm,md,lg,xg}</Code> |
| controlCol | 输入控件所处的列，覆盖全局设定 | object | - | 使用<Code>[Grid](http://super666.cn:3000/#/docs/grid)</Code>中的<Code>Col定义</Code>，定义不同窗口大小下的布局。结构可以是<Code>{col,xs,sm,md,lg,xg}</Code> |
| name | 名称 | string | - |  |
| label | 显示的提示信息 | string | - |  |
| rules | 校验规则 | object | - | 格式请参阅<Code>[react-hook-form](https://react-hook-form.com/zh/api/#register)</Code>的API |
| required | 是否必须设置 | boolean | false | 当值为true时，会在label列额外显示一个<Code>*</Code> |
| hasRequiredIcon | 是否显示必须输入的图标<Code>*</Code> | boolean | true |  |
| iconPosition | <Code>*</Code>显示的位置 | string | left | 值可以是: left, right。默认在label的左侧显示<Code>*</Code> |

+++ en_US
## API [editUrl]     

