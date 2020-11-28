---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/button/md/api.md
---      

+++  zh_CN

## API
按钮的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 按钮Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| type | 按钮的类型 | string | - | 值可以是：ok, primary, secondary, info, success, warning, error，danger |
| nativeType | 原生的按钮类型 | string | button | 值可以是： button, reset, submit, a |
| active | 激活并选中此按钮 | boolean | - |  |
| size | 按钮的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| outline | 是否显示成空心按钮 | boolean | false |  |
| circle | 是否显示成圆形按钮 | boolean | false |  |
| hasMinWidth | 是否设置最小宽度 | boolean | false |  |
| disabled | 是否禁用此按钮 | boolean | false |  |
| onClick | 点击按钮触发的回调 | function | - |  |
| block | 将按钮宽度设置为100%的行宽 | boolean | `false` |  |
| color | 按钮颜色 | boolean | `false` | color和type只需要选择其一即可。值可以是: black, blue,brown, cyan, dark, green, gray, gray-darker, light, light-gray, orange, pink, purple, red, yellow, teal, violet, white |

+++ en_US

## API
按钮的属性如下所示：

| Property | Name | Type | Default | Description |
| --- | --- | --- | --- | --- |
| ref | 按钮Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| type | 按钮的类型 | string | - | 值可以是：ok, primary, secondary, info, success, warning, error，danger |
| nativeType | 原生的按钮类型 | string | button | 值可以是： button, reset, submit, a |
| active | 激活并选中此按钮 | boolean | - |  |
| size | 按钮的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| outline | 是否显示成空心按钮 | boolean | false |  |
| circle | 是否显示成圆形按钮 | boolean | false |  |
| hasMinWidth | 是否设置最小宽度 | boolean | false |  |
| disabled | 是否禁用此按钮 | boolean | false |  |
| onClick | 点击按钮触发的回调 | function | - |  |
| block | 将按钮宽度设置为100%的行宽 | boolean | `false` |  |
| color | 按钮颜色 | boolean | `false` | color和type只需要选择其一即可。值可以是: black, blue,brown, cyan, dark, green, gray, gray-darker, light, light-gray, orange, pink, purple, red, yellow, teal, violet, white |


