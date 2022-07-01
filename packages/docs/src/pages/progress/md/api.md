---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/progress/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Progress</Code>

| 属性           | 名称                        | 类型            | 默认值    | 描述                                                                                     |
| -------------- | --------------------------- | --------------- | --------- | ---------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用       | function \| ref | -         | 当需要获取到根节点的 dom 对象时可设置此属性                                              |
| className      | 样式名称                    | string          | progress  |                                                                                          |
| extraClassName | 额外添加的样式名称          | string          | -         |                                                                                          |
| active         | 是否激活显示                | boolean         | false     |                                                                                          |
| percentValue   | 当前百分百进度值            | number          | 0         | 值的范围是<Code>\[0, 100\]</Code>                                                        |
| type           | 类型                        | string          | info      | 可以设置为: <Code>info</Code>、<Code>warning</Code>、<Code>ok</Code>、<Code>error</Code> |
| hasStripe      | 是否显示条纹效果            | boolean         | false     |                                                                                          |
| hasAnimation   | 是否显示动画效果            | boolean         | false     |                                                                                          |
| top            | 是否固定在窗口顶部显示      | boolean         | false     |                                                                                          |
| hasContent     | 是否在右侧显示进度值        | boolean         | false     |                                                                                          |
| showLoading    | 是否在进度条下方显示 Loader | boolean         | false     |                                                                                          |
| loaderType     | Loader 的类型               | string          | secondary | 当 top 为 true 时，在右侧可显示对应的 Loader                                             |
| loaderSize     | Loader 的大小               | string          | small     |                                                                                          |
| style          | progress 的样式             | object          | -         |                                                                                          |
| barStyle       | progress 当前进度横条的样式 | object          | -         |                                                                                          |
| config         | 对应不同进度下的显示配置    | Array({...})    | -         | 格式如：<br/><Code>\[ {percentValue: 30, type: 'error', content: (p) => 'OK'} \]</Code>  |

<br/>
<br/>

Progress 全局方法：

| 方法     | 名称          | 参数   | 返回值 | 描述                                                                     |
| -------- | ------------- | ------ | ------ | ------------------------------------------------------------------------ |
| showTop  | 显示 Progress | object | -      | 参数格式：{style, type, showLoading,...} ,其他参数可参见 Progress 的 API |
| closeTop | 关闭 Progress | -      | -      |                                                                          |

+++ en_US

## API [editUrl]
