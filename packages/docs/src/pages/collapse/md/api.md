---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/collapse/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Collapse</Code>

| 属性            | 名称                       | 类型                                    | 默认值                  | 描述                                                 |
| --------------- | -------------------------- | --------------------------------------- | ----------------------- | ---------------------------------------------------- |
| ref             | 根节点 Dom 对象的引用      | function \| ref                         | -                       | 当需要获取到根节点的 dom 对象时可设置此属性          |
| className       | 样式名称                   | string                                  | collapse                |                                                      |
| extraClassName  | 额外添加的样式名称         | string                                  | -                       |
| defaultActive   | 初始展开的面板所对应的值   | string \| string[] \| number \|number[] | -                       |                                                      |
| active          | 展开的面板所对应的值数组   | string \| string[] \| number \|number[] | -                       |                                                      |
| onChange        | 面板折叠状态切换触发的回调 | function                                | -                       | 格式<Code>function(value, isCollapsed, event)</Code> |
| accordion       | 显示手风琴类型的折叠框     | boolean                                 | false                   |                                                      |
| hasBorder       | 是否有边框                 | boolean                                 | false                   |                                                      |
| hasBox          | 是否有 box 阴影            | boolean                                 | true                    |                                                      |
| hasCollapseIcon | 是否有折叠图标             | boolean                                 | true                    |                                                      |
| collapseIcon    | 折叠图标                   | react node                              | &lt;IconArrowRight/&gt; |                                                      |
| iconPosition    | 折叠图标显示的位置         | string                                  | left                    | 可以设置成<Code>left</Code>,<Code>right</Code>       |
| hasRipple       | 是否有点击的水纹效果       | boolean                                 | false                   |                                                      |
| disabled        | 禁用 Collapse              | boolean                                 | false                   |                                                      |

- <Code>Collapse.Panel</Code

| 属性            | 名称                                            | 类型            | 默认值         | 描述                                        |
| --------------- | ----------------------------------------------- | --------------- | -------------- | ------------------------------------------- |
| ref             | 根节点 Dom 对象的引用                           | function \| ref | -              | 当需要获取到根节点的 dom 对象时可设置此属性 |
| className       | 样式名称                                        | string          | collapse-panel |                                             |
| extraClassName  | 额外添加的样式名称                              | string          | -              |
| collapse        | 是否折叠状态                                    | boolean         | -              |                                             |
| style           | 根节点的样式对象                                | object          | -              |                                             |
| innerStyle      | 子节点样式对象                                  | object          | -              |                                             |
| height          | Panel 的高度（单位 px）                         | number          | -              |                                             |
| heightIncrement | 在原高度像基础上需要额外增加的高度值（单位 px） | number          | -              |                                             |
| autoScaleHeight | 是否自动调整高度                                | boolean         | true           |                                             |

- <Code>Item</Code>

| 属性          | 名称                  | 类型              | 默认值 | 描述                                        |
| ------------- | --------------------- | ----------------- | ------ | ------------------------------------------- |
| ref           | 根节点 Dom 对象的引用 | function \| ref   | -      | 当需要获取到根节点的 dom 对象时可设置此属性 |
| header        | Header 内容           | react node        | -      |                                             |
| value         | Panel 对应的值        | string \| number  | -      |                                             |
| disabled      | 禁用该 Item           | boolean \| number | false  |                                             |
| hasBackground | 是否有背景色          | boolean           | false  |                                             |
| moreItems     | 在右侧显示的组件数组  | Array(react node) | -      |                                             |

+++ en_US

## API [editUrl]
