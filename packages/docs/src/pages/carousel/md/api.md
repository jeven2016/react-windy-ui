---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/carousel/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Carousel</Code>

| 属性           | 名称                     | 类型               | 默认值   | 描述                                                                                |
| -------------- | ------------------------ | ------------------ | -------- | ----------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用    | function \| ref    | -        | 当需要获取到根节点的 dom 对象时可设置此属性                                         |
| className      | 样式名称                 | string             | carousel |                                                                                     |
| extraClassName | 额外添加的样式名称       | string             | -        |                                                                                     |
| interval       | 切换的时间间隔           | number             | 3000(ms) |                                                                                     |
| disabled       | 是否禁用                 | boolean            | false    |                                                                                     |
| defaultActive  | 初始激活的选项对应的序号 | number             | 0        | 默认选中第一个选项显示                                                              |
| active         | 激活对应的选项序号       | number             | -        |                                                                                     |
| onChange       | 切换选项时的回调         | function(index, e) | -        |                                                                                     |
| position       | 指示器所处的位置         | string             | bottom   | 值可以是: <Code>left</Code>,<Code>right</Code>,<Code>top</Code>,<Code>bottom</Code> |
| hasIndicators  | 是否显示指示器           | boolean            | true     |                                                                                     |
| indicatorType  | 指示器类型               | string             | bar      | 值可以是: <Code>circle</Code>,<Code>bar</Code>                                      |

<Blockquote>
另外，Carousel基于<Code>react-swipeable-views</Code>组件实现，您还可以参考<Code>[react-swipeable-views](https://react-swipeable-views.com/api/api/)</Code>的API文档，通过props设置更多属性值。
</Blockquote>
+++ en_US
## API [editUrl]
