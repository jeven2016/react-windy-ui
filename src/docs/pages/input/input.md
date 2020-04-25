----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 输入框 Input   
在一个表单里，输入框也是最常使用的组件。Windy UI中的输入框组件主要有以下几种类型：

- 大、中、小三种尺寸的输入框
- 能够嵌入图标的输入框
- 可以将多个控件组合在一起显示的Input Group组件
[TITLE_END_zh_CN]

[TITLE_BEGIN_en_US]
[TITLE_END_en_US]
-----------------------------------



-----------------------------------
[SampleInput1_BEGIN_zh_CN]
### 示例1: 大、中、小三种输入框  

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    通过设置'size'属性，可以将输入框组件以不同的尺寸进行展示。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Input} from 'react-windy-ui';

export default function SampleInput1(props) {
  return <>
    <Input placeholder="default"/>
    <br/> <br/>
    <Input placeholder="large input" size='large'/>
    <br/> <br/>
    <Input placeholder="medium input" size='medium'/>
    <br/> <br/>
    <Input placeholder="small input" size='small'/>
  </>;
}
```
[SampleInput1_END_zh_CN]

[SampleInput1_BEGIN_en_US]
[SampleInput1_END_en_US]
-----------------------------------
[SampleInput2_BEGIN_zh_CN]
### 示例2: 在输入框中显示图标

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    使用IconInput组件，在Input中显示Icon。默认情况下Icon在右侧显示，如果需要据左显示
    则可以设置一个'leftIcon'属性即可。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Input, IconSearch} from 'react-windy-ui';

export default function SampleInput2(props) {
  return <>
    <div>
      <Input.IconInput>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="medium" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>

    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="large" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
  </>;
}
```

[SampleInput2_END_zh_CN]

[SampleInput2_BEGIN_en_US]
[SampleInput2_END_en_US]

-----------------------------------
[SampleInput3_BEGIN_zh_CN]
### 示例3: 不同的类型

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置不同的type，则将获得不同类型的Input。在这个例子中我们让Input显示成textarea，允许输入多行文字。
    另外跟textarea组件一样，你可以设置rows和cols属性，如果想占据整行显示，则可以只设置rows属性即可。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Input} from 'react-windy-ui';

export default function SampleInput3(props) {
  return <>
    <div>
      <Input block type="textarea" rows="5" cols="20" placeholder="type=textarea"/>
    </div>
    <div style={{marginTop: '1rem'}}>
      <Input type="number" placeholder="type=number"/>
    </div>
  </>;
}
```

[SampleInput3_END_zh_CN]

[SampleInput3_BEGIN_en_US]
[SampleInput3_END_en_US]


-----------------------------------
[SampleInput4_BEGIN_zh_CN]
### 示例4: Input Group
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Input Group组件中可以放置Button、Input、Dropdown、Label等组件，可在界面上同一水平线上排列。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Input, InputGroup} from 'react-windy-ui';

export default function SampleInput4(props) {
  return <>
    <div className="doc doc-row">
      <InputGroup size="small">
        <InputGroup.Label>$</InputGroup.Label>a
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup size="medium">
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup size="large">
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
  </>;
}
```

[SampleInput4_END_zh_CN]

[SampleInput4_BEGIN_en_US]
[SampleInput4_END_en_US]


