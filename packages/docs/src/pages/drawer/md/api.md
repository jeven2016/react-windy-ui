---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/drawer/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Drawer</Code>

| 属性           | 名称                           | 类型                | 默认值       | 描述                                                                                     |
| -------------- | ------------------------------ | ------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| ref            | 根节点 Dom 对象的引用          | function \| ref     | -            | 当需要获取到根节点的 dom 对象时可设置此属性                                              |
| className      | 样式名称                       | string              | drawer       |                                                                                          |
| extraClassName | 额外添加的样式名称             | string              | -            |                                                                                          |
| active         | 显示 Drawer                    | boolean             | false        |                                                                                          |
| onChange       | Drawer 显示或关闭触发的回调    | function(active, e) | -            |                                                                                          |
| hasMask        | 是否显示黑色背景               | boolean             | true         |                                                                                          |
| hasAnchor      | 是否显示打开 Drawer 的快捷图标 | boolean             | false        |                                                                                          |
| anchor         | 显示的 Anchor 内容             | react node          | <IconList\/> |                                                                                          |
| autoClose      | 点击背景是否触发自动关闭       | boolean             | true         |                                                                                          |
| position       | 显示的位置                     | string              | left         | 可以设置为: <Code>left</Code>, <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code> |
| header         | header 节点                    | react node          | -            |                                                                                          |
| footer         | footer 节点                    | react node          | -            |                                                                                          |
| style          | 样式                           | object              | -            | 可在其中指定 Drawer 的高度和宽度                                                         |

+++ en_US

## API [editUrl]
