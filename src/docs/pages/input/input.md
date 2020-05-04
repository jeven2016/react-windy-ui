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

----------- Footer ------------
[FOOTER_BEGIN_zh_CN]
## API
Input的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取到按钮的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| borderType | 边框类型 | string | - | 值可以为：ok, warning, error |
| type | Input的类型 | string | - | 值可以是：text, textarea, password, file等html中关于input可设置的类型 |
| block | 将Input宽度设置为100%的行宽 | boolean | `false` |  |
| size | Input的尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| disabled | 是否禁用此Input | boolean | false |  |
| onClick/onXX | Input的各类回调函数 | function | - | 比如onFocus, onBlur等 |


IconInput的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| block | 将宽度设置为100%的行宽 | boolean | `false` |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |
| disabled | 是否禁用此Input | boolean | false |  |


InputGroup的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | button |  |
| extraClassName | 额外添加的样式名称 | string | - | 比如设置为’aClass bClass', 按钮的实际样式是'aClass bClass button' |
| block | 将宽度设置为100%的行宽 | boolean | `false` |  |
| size | 尺寸 | string | medium | 值可以是: large, medium, small或者不设置 |


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

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
    您也可以设置为其他诸如password、file等类型。
    另外对于textarea类型的Input,您也可以设置rows和cols属性，如果想占据整行显示，则可以只设置rows属性即可。
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
    Input Group组件中可以放置Button、Input、Dropdown、Label等组件，并在界面上同一水平线上排列。
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
-----------------------------------
[SampleInput5_BEGIN_zh_CN]
### 示例5: Input Group整行显示
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Input、IconInput、Input Group都可设置block属性，使控件占据整行显示。
    这里演示了如何在InputGroup中，组合放置Button、Input、Dropdown、Label等组件。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Input} from 'react-windy-ui';
import {IconSearch, InputGroup, Checkbox,Button, Loader} from 'react-windy-ui';

export default function SampleInput5(props) {
  return <>
    <div className="doc doc-row">
      <Input block placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block>
        <Input placeholder="Searching"/>
        <i className="svg icon">
          <Loader size="small" active={true}/>
        </i>

      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox/>
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <Button color="green">Search</Button>
        <Input placeholder="place......"/>
        <Input placeholder="next......"/>
        <Button color="blue">Go</Button>
        <InputGroup.Label>
          ---
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <Input.IconInput leftIcon>
          <Input placeholder="This is a input"/>
          <IconSearch/>
        </Input.IconInput>
        <Button color="green">Search</Button>
        <Input placeholder="next......"/>
      </InputGroup>
    </div>
  </>;
}
```

[SampleInput5_END_zh_CN]

[SampleInput5_BEGIN_en_US]
[SampleInput5_END_en_US]
-----------------------------------

[SampleInput6_BEGIN_zh_CN]
### 示例5: 禁用输入框
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在Input、IconInput上设置disabled属性为true后，可以将控件禁用。但对于Input Group，由于可能是由不同的组件组合而成的，您需要单独设置各个子控件的disabled属性。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Checkbox, Input, InputGroup, Loader} from 'react-windy-ui';

export default function SampleInput6(props) {
  return <>
    <div className="doc doc-row">
      <Input disabled placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block disabled>
        <Input placeholder="Searching"/>
        <i className="svg icon">
          <Loader size="small" active={true}/>
        </i>

      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>$</InputGroup.Label>
        <Input disabled placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox disabled value={true}/>
        </InputGroup.Label>
      </InputGroup>
    </div>
  </>;
}
```
[SampleInput6_END_zh_CN]

[SampleInput6_BEGIN_en_US]
[SampleInput6_END_en_US]
-----------------------------------


