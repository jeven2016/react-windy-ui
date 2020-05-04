
----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 按钮 Button  

按钮，作为网页上最常使用的控件，Windy UI提供了如下几种按钮

- 默认的灰色按钮
- 主色调的按钮
- 次色调的按钮
- 只显示边框的按钮

从色调上区分，提供了如下几种
- Primary
- Secondary
- Info
- Warning
- Error
- Red/Blue/Green......等各类颜色

另外提供了大、中、小三种尺寸以供使用。
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
## Button  
Button as the most common used widget in web, Windy UI currently provides the following kinds of buttons

- 默认的灰色按钮
- 主色调的按钮
- 次色调的按钮
- 只显示边框的按钮

从色调上区分，提供了如下几种
- Primary
- Secondary
- Info
- Warning
- Error
- Red/Blue/Green......等各类颜色

另外提供了大、中、小三种尺寸以供使用。
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
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


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]
----------------------------------

------------- Samples ---------------------
[SampleBtn1_BEGIN_zh_CN]
### 示例1: 普通按钮  

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    常规使用的话，除了默认按钮以外，还提供了"primary"、"secondary"两种类型的按钮。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn1 = () => {
  return <>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </>;
};
```
[SampleBtn1_END_zh_CN]

[SampleBtn1_BEGIN_en_US]
[SampleBtn1_END_en_US]
----------------------------------
[SampleBtn2_BEGIN_zh_CN]
### 示例2: 对应不同Error级别的按钮  

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    同样，这里可以设置type属性，呈现不同Error级别的按钮。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn2 = () => {
  return <>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
  </>;
};

export default SampleBtn2;
```
[SampleBtn2_END_zh_CN]


[SampleBtn2_BEGIN_en_US]
[SampleBtn2_END_en_US]
----------------------------------
[SampleBtn3_BEGIN_zh_CN]
### 示例3: 不同类型的按钮    

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    如果按钮是一个<a/>链接，或者是对应的reset、submit按钮时，可以设置nativeType属性，这样就可以在页面上展示出你所期望的按钮。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn3 = () => {
  return <>
    <Button nativeType='a' href="#">link</Button>
    <Button nativeType='reset' type="primary">reset</Button>
    <Button nativeType='submit' type="secondary">submit</Button>
  </>;
};

export default SampleBtn3;
```
[SampleBtn3_END_zh_CN]


[SampleBtn3_BEGIN_en_US]
[SampleBtn3_END_en_US]
----------------------------------
[SampleBtn4_BEGIN_zh_CN]
### 示例4: 设置最小宽度    

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当设置了'hasMinWindth'属性后，按钮的宽度将会默认添加一个最小值为'5rem'的限制。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn4 = () => {
  return <>
    <Button hasMinWidth>A</Button>
    <Button hasMinWidth>BB</Button>
    <Button hasMinWidth>CCC</Button>
    <Button hasMinWidth>More Details</Button>
  </>;
};

export default SampleBtn4;
```
[SampleBtn4_END_zh_CN]


[SampleBtn4_BEGIN_en_US]
[SampleBtn4_END_en_US]
----------------------------------

[SampleBtn5_BEGIN_zh_CN]
### 示例5: 按钮大小    

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认提供了三种大小的按钮， 大（large）、中（medium）、小（small）。如果需要自定义定义高度和宽度的话，可以设置'lineHeight'、'padding'属性。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn5 = () => {
  return <>
    <Button>default</Button>
    <Button style={{lineHeight: '1rem', padding: '0.3rem'}}>
      Custom
    </Button>
    <br/>
      <Button size="large">large</Button>
      <Button size="medium">medium</Button>
      <Button size="small">small</Button>

  </>;
};

export default SampleBtn5;
```
[SampleBtn5_END_zh_CN]


[SampleBtn5_BEGIN_en_US]
[SampleBtn5_END_en_US]
----------------------------------
[SampleBtn6_BEGIN_zh_CN]
### 示例6: 圆形按钮    

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    将circle属性设置为true后，将展示成圆形按钮。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn6 = () => {
  return <>
    <Button circle>G</Button>
    <Button type="info" circle>OK</Button>
    <Button type="success" circle>NO</Button>
  </>;
};

export default SampleBtn6;
```
[SampleBtn6_END_zh_CN]


[SampleBtn6_BEGIN_en_US]
[SampleBtn6_END_en_US]
----------------------------------
[SampleBtn7_BEGIN_zh_CN]
### 示例7: 不同色彩    

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置'color'属性，可以获得色彩不同的按钮。想了解更多可设置的参数值，请参阅API文档。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn7 = () => {
  return <>

    <Button color="black" hasMinWidth>black</Button>
    <Button color="brown" hasMinWidth>brown</Button>
    <Button color="pink" hasMinWidth>pink</Button>
    <Button color="purple" hasMinWidth>purple</Button>
    <Button color="violet" hasMinWidth>violet</Button>

    <br/>

    <Button color="blue" hasMinWidth>blue</Button>
    <Button color="teal" hasMinWidth>teal</Button>
    <Button color="green" hasMinWidth>green</Button>
    <Button color="yellow" hasMinWidth>yellow</Button>
    <Button color="orange" hasMinWidth>orange</Button>
    <Button color="red" hasMinWidth>red</Button>
  </>;
};

export default SampleBtn7;
```
[SampleBtn7_END_zh_CN]


[SampleBtn7_BEGIN_en_US]
[SampleBtn7_END_en_US]
----------------------------------
[SampleBtn8_BEGIN_zh_CN]
### 示例8: 默认只显示边框的按钮   

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    将outline属性设置为true后，将展示成默认只显示边框的按钮。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn8 = () => {
  return <>

    <Button color="black" outline hasMinWidth>black</Button>
    <Button color="brown" outline hasMinWidth>brown</Button>
    <Button color="pink" outline hasMinWidth>pink</Button>
    <Button color="purple" outline hasMinWidth>purple</Button>
    <Button color="violet" outline hasMinWidth>violet</Button>

    <br/>

    <Button color="blue" outline hasMinWidth>blue</Button>
    <Button color="teal" outline hasMinWidth>teal</Button>
    <Button color="green" outline hasMinWidth>green</Button>
    <Button color="yellow" outline hasMinWidth>yellow</Button>
    <Button color="orange" outline hasMinWidth>orange</Button>
    <Button color="red" outline hasMinWidth>red</Button>
  </>;
};

export default SampleBtn8;
```
[SampleBtn8_END_zh_CN]


[SampleBtn8_BEGIN_en_US]
[SampleBtn8_END_en_US]
----------------------------------
[SampleBtn9_BEGIN_zh_CN]
### 示例9: 占据整行显示   

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
       将block属性设置为true后，按钮的宽度将变成100%并占据整行。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn9 = () => {
  return <>
    <Button color="brown" block>brown</Button>
    <Button color="pink" block>pink</Button>
    <Button color="purple" block>purple</Button>
    <Button color="violet" block>violet</Button>

  </>;
};

export default SampleBtn9;
```
[SampleBtn9_END_zh_CN]


[SampleBtn9_BEGIN_en_US]
[SampleBtn9_END_en_US]
----------------------------------
[SampleBtn10_BEGIN_zh_CN]
### 示例10: 禁用按钮   
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   将disabled设置为true后，将禁用对应的Button。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';
import {Button, Toggle, Loader} from 'react-windy-ui';

const SampleBtn10 = () => {
  const [disabled, setDisabled] = useState(false);
  return <>
    <Toggle onChange={(value) => setDisabled(value)}/>
    <br/>
    <Button color="purple" disabled={disabled} onClick={() => alert('click')}>purple</Button>

    <Button color="blue" disabled={disabled} onClick={() => alert('click')}>
      <span>{disabled ? 'saving' : 'save'}</span>
      {
        disabled && <Loader type="third" size="small" color="white"
                            active={disabled}/>
      }

    </Button>

  </>;
};

export default SampleBtn10;
```
[SampleBtn10_END_zh_CN]


[SampleBtn10_BEGIN_en_US]
[SampleBtn10_END_en_US]
----------------------------------
[SampleBtn11_BEGIN_zh_CN]
### 示例11: 按钮组   

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    按钮组是由一系列按钮组合而成的一个整体，一般可用于导航切换。按钮组可以通过设置'block'属性值，使内部的按钮按比例占据整行进行显示。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, ButtonGroup} from 'react-windy-ui';

const SampleBtn11 = () => {
  return <>
    <ButtonGroup>
      <Button color="brown">brown</Button>
      <Button color="pink">pink</Button>
      <Button color="purple">purple</Button>
      <Button color="violet">violet</Button>
    </ButtonGroup>
    <br/><br/>
    <ButtonGroup block>
      <Button outline color="blue">blue</Button>
      <Button outline color="green">green</Button>
      <Button outline color="orange">orange</Button>
    </ButtonGroup>
  </>;
};

export default SampleBtn11;
```
[SampleBtn11_END_zh_CN]


[SampleBtn11_BEGIN_en_US]
[SampleBtn11_END_en_US]
----------------------------------
[SampleBtn12_BEGIN_zh_CN]
### 示例12: 显示图标  

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    你可以按需在按钮中放置图标，这里使用了'fontawesome'的图标库进行示例。当然你也可以使用其他第三方图标库。而且即便不想引入图标库的话，
    也可以嵌入对应的svg代码，但记得给其添加对应的样式'svg icon'，否则你就得自行设定字体、间距、颜色等css属性了。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, IconList} from 'react-windy-ui';

const SampleBtn12 = () => {
  return <>
    <Button>
      <span>Menu</span>
      <IconList/>
    </Button>

    <Button type="primary">
      {/*please add the className 'svg icon' for your custom icon*/}
      <svg aria-hidden="true" focusable="false" data-prefix="fas"
           data-icon="plane" className="icon svg"
           role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor"
              d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
      </svg>

      <span>Flight</span>
    </Button>
  </>;
};

export default SampleBtn12;
```
[SampleBtn12_END_zh_CN]


[SampleBtn12_BEGIN_en_US]
[SampleBtn12_END_en_US]
----------------------------------
[SampleBtn13_BEGIN_zh_CN]
### 示例13: 自定义按钮和extraClassName属性 

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    这里需要介绍一下extraClassName属性，extraClassName是用于给组件根节点额外添加class的入口。正常情况下，组件都会默认设置一个class，
    如果需要添加其他css属性值时，你将不得不覆盖style中的属性。但有了extraClassName后，你可以在组件根节点已有class的情况下，再额外添加你所需要
    的class。比如在这个例子中，额外使用了'clear-border'样式去强制将边框去除以便达到我们所需要的效果。
  </div>
</fieldset>

```jsx
import React from 'react';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconList,
  NavBar,
  IconCalendar,
} from 'react-windy-ui';

const SampleBtn13 = () => {
  return <>
    <Button outline type="info" extraClassName="clear-border">OK</Button>
    <Button outline type="success" extraClassName="clear-border">NO</Button>

    <NavBar type="primary" style={{marginTop: '2rem', background: '#000'}}>
      <NavBar.Title>
        My Site
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          <Button outline circle color="green" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowLeft/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline color="blue" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconList/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline circle color="red" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowRight/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline color="blue" extraClassName="clear-border">
            <IconCalendar/>
          </Button>
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;
};

export default SampleBtn13;
```
[SampleBtn13_END_zh_CN]

[SampleBtn13_BEGIN_en_US]
[SampleBtn13_END_en_US]

----------------------------------
[SampleBtn14_BEGIN_zh_CN]
### 示例14: 按钮Focus  

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    给按钮设置一个Ref对象后，便可触发按钮的focus事件。你可以在class的componentDidMount方法中调用focus方法，或者在react hook中
    的useEffect()方法中触发focus。
  </div>
</fieldset>

```jsx
import React, {useEffect, useRef} from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn14 = () => {
  const ctrlRef = useRef(null);
  useEffect(() => {
    //focus on the button while it is mounted
    ctrlRef.current.focus();
  }, []);

  const click = () => ctrlRef.current.focus();
  return <>
    <Button type="info" onClick={click}>Click</Button>
    <Button type="red">Focus on me</Button>
  </>;
};

export default SampleBtn14;
```
[SampleBtn14_END_zh_CN]

[SampleBtn14_BEGIN_en_US]
[SampleBtn14_END_en_US]

----------------------------------

