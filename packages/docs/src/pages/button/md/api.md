---
order: 100
type: text
zh_CN: API
en_US: API
editUrl: $BASE/pages/button/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>Button</Code>

| 属性                 | 名称                        | 类型            | 默认值      | 描述                                                                                                                                                                           |
| -------------------- | --------------------------- | --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ref                  | Dom 对象的引用              | function \| Ref | -           | 当需要获取到按钮的 dom 对象时可设置此属性                                                                                                                                      |
| className            | 样式名称                    | string          | button      |                                                                                                                                                                                |
| extraClassName       | 额外添加的样式名称          | string          | -           | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button'                                                                                                              |
| type                 | 按钮的类型                  | string          | -           | 值可以是：ok, primary, secondary, info, success, warning, error，danger                                                                                                        |
| nativeType           | 原生的按钮类型              | string          | button      | 值可以是： button, reset, submit, a, textarea 之类                                                                                                                             |
| active               | 激活按钮                    | boolean         | -           |                                                                                                                                                                                |
| block                | 将按钮宽度设置为 100%的行宽 | boolean         | `false`     |                                                                                                                                                                                |
| color                | 按钮颜色                    | boolean         | `false`     | color 和 type 只需要选择其一即可。值可以是: black, blue,brown, cyan, dark, green, gray, gray-darker, light, light-gray, orange, pink, purple, red, yellow, teal, violet, white |
| size                 | 按钮的尺寸                  | string          | medium      | 值可以是: large, medium, small,默认为 medium                                                                                                                                   |
| outline              | 是否显示成只有边框的按钮    | boolean         | false       |                                                                                                                                                                                |
| circle               | 是否圆形按钮                | boolean         | false       | 值设置为 true 时，与<Code>shape='circle'</Code>效果相同                                                                                                                        |
| hasMinWidth          | 是否设置最小宽度            | boolean         | false       | 最小宽度为<Code>5rem</Code>                                                                                                                                                    |
| shape                | 按钮的形状                  | string          | -           | 可以设置为<Code>circle</Code>或<Code>round</Code>                                                                                                                              |
| inverted             | 是否显示按钮的反转形态      | boolean         | false       |                                                                                                                                                                                |
| hasOutlineBackground | 边框按钮是否有初始背景色    | boolean         | false       | 只在 outline 设置为 true 时有用                                                                                                                                                |
| initOutlineColor     | 边框按钮是否有初始颜色      | boolean         | false       | 只在 outline 设置为 true 时有用                                                                                                                                                |
| hasBox               | 是否有阴影                  | boolean         | true        | 对非 outline 类型的按钮生效                                                                                                                                                    |
| hasBorder            | 是否有边框                  | boolean         | true        | 对非 outline 类型的按钮生效                                                                                                                                                    |
| invertedOutline      | outline 按钮的反转形态      | boolean         | false       |                                                                                                                                                                                |
| hasRipple            | 是否有点击的水纹效果        | boolean         | false       |                                                                                                                                                                                |
| rippleColor          | 水纹的颜色                  | string          | -           | 颜色字符串值，例如<Code>'#333'</Code>                                                                                                                                          |
| onClick              | 点击按钮触发的回调          | function        | -           |                                                                                                                                                                                |
| disabled             | 禁用按钮                    | boolean         | false       |                                                                                                                                                                                |
| leftIcon             | 在左侧显示的 Icon           | react node      | -           | 当按钮中只有 Icon 时，设置 leftIcon 或 rightIcon 效果相同                                                                                                                      |
| rightIcon            | 在右侧显示的 Icon           | react node      | -           |                                                                                                                                                                                |
| loading              | 显示加载中状态              | boolean         | -           |                                                                                                                                                                                |
| leftLoader           | Loader 在左侧显示           | boolean         | true        | 值 false 则表示 Loader 在右侧显示                                                                                                                                              |
| loader               | 默认的加载中组件            | boolean         | Loader 组件 |                                                                                                                                                                                |

- <Code>ButtonGroup</Code>

| 属性           | 名称                    | 类型            | 默认值       | 描述                                                                                 |
| -------------- | ----------------------- | --------------- | ------------ | ------------------------------------------------------------------------------------ |
| ref            | Dom 对象的引用          | function \| Ref | -            | 当需要获取到按 dom 对象时可设置此属性                                                |
| className      | 样式名称                | string          | button-group |                                                                                      |
| extraClassName | 额外添加的样式名称      | string          | -            |                                                                                      |
| stepDirection  | 排列方向                | string          | horizontal   | 值可以是：<Code>horizontal</Code>, <Code>vertical</Code>                             |
| block          | 将宽度设置为 100%的行宽 | boolean         | `false`      |                                                                                      |
| size           | 按钮的尺寸              | string          | medium       | 值可以是: <Code>large</Code>, <Code>medium</Code>, <Code>small</Code>, 默认为 medium |

+++ en_US

## API
