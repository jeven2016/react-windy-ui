----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 图钉 Affix
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API
Alert的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | alert |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | info | 值可以是：info, ok, warning, error, mini, simple |
| active | 激活显示 | boolean | - | 如果不需要自行控制Alert的显示和关闭，可以不用设置，默认情况下加载后就显示 |
| duration | Alert持续显示的时间 | number | - | 单位毫秒  |
| onClose | 关闭Alert的回调 | function | - | 当点击关闭图标，或者设置了延时关闭时会触发调用。如果设置了active属性，请务必提供此方法  |
| title | Alert标题 | react node | - |  |
| body | Alert内容 | react node | - |  |
| autoClose | 是否自动关闭 | boolean | - | 是否自动关闭。如果为false，则表示无法延时关闭，必须手动触发或由其他组件控制关闭。  |
| hasCloseIcon | 是否显示关闭图标 | boolean | true |  |
| icon | 左侧对应Alert类型的图标 | react node | - | 不同的类型默认提供不同的图标  |
| hasIcon | 是否显示Alert类型图标 | boolean | true | 不同的类型默认提供不同的图标  |
| style | Alert的样式 | object | - |  |
| iconStyle | Alert类型的图标样式 | object | - |  |
| closeStyle | 关闭图标的样式 | object | - |  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Alert1_BEGIN_zh_CN]
### 示例1: 简单示例
<DemoDesc title="提示">
 有五种类型的Alert可供使用，对应的type可以设置为： info、ok、warning、error、mini、simple。
</DemoDesc>

```jsx
import React from 'react';
import {Alert} from 'react-windy-ui';

export default function Alert1() {
  return <>
    <Alert type="info" body="A info alert"/>
    <Alert type="ok" body="ok alert"/>
    <Alert type="warning" body="A warning alert"/>
    <Alert type="error" body="A error alert"/>
    <Alert type="mini" body="A mini alert"/>
    <Alert type="simple" title="Simple Title" body="A simple alert"/>
  </>;
}

```
[Alert1_END_zh_CN]

[Alert1_BEGIN_en_US]
[Alert1_END_en_US]
----------------------------------

[Alert2_BEGIN_zh_CN]
### 示例2: title和body
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    可以给Alert添加title和body, 相应地设置title和body属性。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Alert, IconHome} from 'react-windy-ui';

export default function Alert2() {
  return <>
    <Alert title="OK" type="ok" body="ok alert"/>
    <Alert title="INFO" type="info" body="A info alert"/>
    <Alert title="WARNING" type="warning" body="A warning alert"/>
    <Alert title="ERROR" type="error" body="A error alert"/>
    <Alert title="Customized" type="ok" body="This is my home."
           icon={<IconHome/>}/>
  </>;
}
```
[Alert2_END_zh_CN]

[Alert2_BEGIN_en_US]
[Alert2_END_en_US]
----------------------------------

[Alert3_BEGIN_zh_CN]
### 示例3: 自定义Alert
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    您可通过指定icon属性来自定义icon图标，也可以给Alert设置style样式。如果需要修改左侧图标或关闭图标的的样式，则相应地设置
    iconStyle, closeStyle属性。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Alert, IconHome} from 'react-windy-ui';

export default function Alert3() {
  return <>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: 'rgba(20,163,24)',
             borderWidth: '0',
             borderRadius: '0.25rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="ok"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: '#0ca0ff',
             borderWidth: '0',
             borderRadius: '0.25rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="info"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: 'rgb(236, 187, 33)',
             borderWidth: '0',
             borderRadius: '0.25rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="warning"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: '#d82b3a',
             borderWidth: '0',
             borderRadius: '0.25rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="error"
           body="This is my body."
           icon={<IconHome/>}/>
  </>;
}
```
[Alert3_END_zh_CN]

[Alert3_BEGIN_en_US]
[Alert3_END_en_US]
----------------------------------
[Alert4_BEGIN_zh_CN]
### 示例4: 图标的显示和关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    如果不需要左侧图标或关闭的图标，则可以将hasIcon、hasCloseIcon设置成false。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Alert, Toggle} from 'react-windy-ui';

export default function Alert4() {
  const [closeIcon, setCloseIcon] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={closeIcon} onChange={val => setCloseIcon(val)}
              content={{on: 'Close Icon', off: 'Close Icon'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={showIcon} onChange={val => setShowIcon(val)}
              content={{on: 'Icon', off: 'Icon'}}/>
    </div>
    <Alert type="info" body="A info alert" hasCloseIcon={closeIcon}
           hasIcon={showIcon}/>
  </>;
}
```
[Alert4_END_zh_CN]

[Alert4_BEGIN_en_US]
[Alert4_END_en_US]
----------------------------------

[Alert5_BEGIN_zh_CN]
### 示例5: 延时关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当autoClose设置为true后，默认情况下Alert会在5秒后关闭。设置不同的duration值，可以控制延时关闭的时间。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Alert, Checkbox, Tooltip} from 'react-windy-ui';

export default function Alert5() {
  const [autoClose, setAutoClose] = useState(false);
  return <>
    <div className="doc doc-row">
      <Tooltip body="Close in 3 seconds">
        <Checkbox label={autoClose ? 'Closing' : 'Auto close'}
                  onChange={() => setAutoClose(true)}/>
      </Tooltip>
    </div>
    <Alert type="info" body="A info alert" autoClose={autoClose}
           duration={3000}/>
  </>;
}
```
[Alert5_END_zh_CN]

[Alert5_BEGIN_en_US]
[Alert5_END_en_US]
----------------------------------

[Alert6_BEGIN_zh_CN]
### 示例6: Alert的显示和关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当设置active属性后，Alert将不会自动关闭，此时会触发onClose调用，您需要在onClose中切换显示状态。
    这里，active与onClose方法需要同时提供，以便一起完成状态的切换过程。当前只有当点击关闭图标，或者设置了延时关闭时才会
    调用onClose。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Alert, Checkbox} from 'react-windy-ui';

export default function Alert6() {
  const [active, setActive] = useState(true);
  const [activeAuto, setActiveAuto] = useState(true);
  return <>
    <div className="doc doc-row">
      <Checkbox label="Active" checked={active}
                onChange={(enable) => {
                  setActive(enable);
                  setActiveAuto(enable);
                }}/>
    </div>
    <Alert type="info" body="A info alert" active={active}
           onClose={() => setActive(false)}/>

    <Alert type="ok" body="close in 3 seconds" active={activeAuto} autoClose={true}
           duration={3000} onClose={() => setActiveAuto(false)}/>

  </>;
}
```
[Alert6_END_zh_CN]

[Alert6_BEGIN_en_US]
[Alert6_END_en_US]
----------------------------------