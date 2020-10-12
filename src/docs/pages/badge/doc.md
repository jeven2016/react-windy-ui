----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 标记 Badge
Badge一般在组件的右上角提示一段简短标记，可以是数字或状态类的标记

Badge组件主要提供以下功能：
- 在右上角显示小圆点或内部有提示的标记
- 作为单独的Tag使用时，而非在右上角显示

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API
Input的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | badge |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | Badge类型 | string | normal | 值可以是：normal, dot, tag |
| body | 标记的内容 | react node | - |  |
| color | 颜色 | string | error | 值可以是: info、ok、gray、warning、error、dark,也可以设置颜色对应的值如#334433, red，blue等 |
| active | 激活显示该Badge | boolean | true |  |
| shake | 是否定时显示抖动效果 | boolean | false |  |
| shakeDuration | 抖动持续事件(ms) | number | 1000 |  |
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Badge1_BEGIN_zh_CN]
### 示例1: 简单示例
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个简单的Badge的示例，在body中设置需要显示的标记。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Badge} from 'react-windy-ui';

export default function Badge1() {
  return <>
    <Badge body="8">
      <Button>Comments</Button>
    </Badge>
    <Badge color="info" body="999+" style={{marginLeft: '1rem'}}>
      <Button>Comments</Button>
    </Badge>
  </>;
}

```
[Badge1_END_zh_CN]

[Badge1_BEGIN_en_US]
[Badge1_END_en_US]
----------------------------------
[Badge2_BEGIN_zh_CN]
### 示例2: 不同颜色的Badge
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认有6中背景色的Badge可供使用，可设置color属性为： info, ok, gray, warning, error, dark其中的一种。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Badge, RadioGroup, Radio} from 'react-windy-ui';

export default function Badge2() {
  const [color, setColor] = useState('info');

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Color:</span>
      <RadioGroup defaultValue="info"
                  onChange={(val) => setColor(val)}>
        <Radio value="info">
          info
        </Radio>
        <Radio value="ok">
          ok
        </Radio>
        <Radio value="gray">
          gray
        </Radio>
        <Radio value="warning">
          warning
        </Radio>
        <Radio value="error">
          error
        </Radio>
        <Radio value="dark">
          dark
        </Radio>
      </RadioGroup>
    </div>
    <Badge body="8" color={color}>
      <Button>Comments</Button>
    </Badge>
  </>;

}
```
[Badge2_END_zh_CN]

[Badge2_BEGIN_en_US]
[Badge2_END_en_US]
----------------------------------

[Badge3_BEGIN_zh_CN]
### 示例3: 自定义背景色
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    如果默认的背景色无法满足需要，您还可以直接将color设置为其他颜色值，Badge将会应用这个颜色。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Badge, Button, Input} from 'react-windy-ui';

export default function Badge3() {
  const [color, setColor] = useState('#ff350e');

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Color:</span>
      <Input value={color} onChange={(e) => setColor(e.target.value)}/>
    </div>
    <Badge body="8" color={color}>
      <Button>Comments</Button>
    </Badge>
  </>;

}
```
[Badge3_END_zh_CN]

[Badge3_BEGIN_en_US]
[Badge3_END_en_US]
----------------------------------
[Badge4_BEGIN_zh_CN]
### 示例4: 显示文字类的标记
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置body属性，以便在Badge中显示文字类的标记。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Badge, Button} from 'react-windy-ui';

export default function Badge4() {

  return <>
    <Badge body="Mails">
      Mail Box
    </Badge>

    <Badge body="Hot!" style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}
```
[Badge4_END_zh_CN]

[Badge4_BEGIN_en_US]
[Badge4_END_en_US]
----------------------------------
[Badge5_BEGIN_zh_CN]
### 示例5: 显示标记
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当type为dot时，标记显示为一个小圆点。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Badge, Button} from 'react-windy-ui';

export default function Badge5() {

  return <>

    <Badge type="dot" style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
    <Badge type="dot" style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
    <Badge type="dot" style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}
```
[Badge5_END_zh_CN]

[Badge5_BEGIN_en_US]
[Badge5_END_en_US]
----------------------------------
[Badge6_BEGIN_zh_CN]
### 示例6: Tag标记
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当type设置为tag值时, Badge将作为单独的Tag使用。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Badge, Button} from 'react-windy-ui';

export default function Badge6() {

  return <>

    <Badge type="tag" color="info"
           style={{marginRight: '1rem'}}>
      Info
    </Badge>
    <Badge type="tag" color="ok"
           style={{marginRight: '1rem'}}>
      OK
    </Badge>
    <Badge type="tag" color="warning"
           style={{marginRight: '1rem'}}>
      Warning
    </Badge>
    <Badge type="tag" color="error"
           style={{marginRight: '1rem'}}>
      Danger
    </Badge>
    <Badge type="tag" color="dark">
      Dark
    </Badge>
  </>;

}
```
[Badge6_END_zh_CN]

[Badge6_BEGIN_en_US]
[Badge6_END_en_US]
----------------------------------
[Badge7_BEGIN_zh_CN]
### 示例7: 显示标记
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当active值为true时，Badge显示；当active值为false时，隐藏对应的Badge。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Badge, Button, Toggle} from 'react-windy-ui';

export default function Badge7() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} content={{on: 'Active', off: 'Active'}}
              onChange={(val) => setActive(val)}/>
    </div>
    <Badge type="tag" color="info" active={active}>
      Tag
    </Badge>

    <Badge body="Hot!" active={active} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>

    <Badge type="dot" active={active} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}
```
[Badge7_END_zh_CN]

[Badge7_BEGIN_en_US]
[Badge7_END_en_US]
----------------------------------
[Badge8_BEGIN_zh_CN]
### 示例7: 显示标记
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当shake属性为true时，Badge会默认每隔一段时间晃动提示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Badge, Button, Toggle} from 'react-windy-ui';

export default function Badge8() {
  const [shake, setShake] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={shake} content={{on: 'Shake', off: 'Shake'}}
              onChange={(val) => setShake(val)}/>
    </div>
    <Badge type="tag" color="info" shake={shake}>
      Tag
    </Badge>

    <Badge body="Hot!" shake={shake} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>

    <Badge type="dot" shake={shake} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}
```
[Badge8_END_zh_CN]

[Badge8_BEGIN_en_US]
[Badge8_END_en_US]
----------------------------------