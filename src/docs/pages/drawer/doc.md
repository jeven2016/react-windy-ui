----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 抽屉 Drawer
Drawer组件，从屏幕边缘向中间滑出的弹出窗体，可常用来在操作时额外展示一部分内容。

- 可用来额外展示协议内容、条款确认等内容
- 点击窗台背景即可关闭

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Drawer的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | drawer |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| active | 显示Drawer | boolean | - |  |
| onChange | Drawer显示或关闭触发的回调 | function | - |  |
| hasMask | 是否显示黑色背景 | boolean | true |  |
| hasAnchor | 是否显示打开Drawer的快捷图标 | boolean | false |  |
| autoClose | 点击背景是否触发自动关闭 | boolean | true |  |
| position | 显示的位置 | string | left | 可以设置为: left、top、right、bottom  |
| header | header节点 | react node | - |   |
| footer | footer节点 | react node | - |   |
| style | 样式 | object | - | 可在其中指定Drawer的高度和宽度  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Drawer1_BEGIN_zh_CN]
### 示例1: 两种风格的Drawer
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认的Drawer组件会有一个黑色的背景, 点击黑色背景时会关闭窗体。当hasMask设置为false时，Drawer则不会有黑色背景，
    但不影响点击背景以关闭弹出窗体。另外要显示或关闭Drawer时，可以设置active属性值为true或false。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Drawer} from 'react-windy-ui';

export default function Drawer1() {
  const [active, setActive] = useState(false);
  const [drawer2Active, setDrawer2Active] = useState(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Drawer</Button>
    <Button type="primary"
            onClick={() => setDrawer2Active(true)}>Drawer2</Button>

    <Drawer active={active}
            style={{width: '40%'}}
            onChange={(e, show) => setActive(show)}>
    </Drawer>

    <Drawer active={drawer2Active}
            hasMask={false}
            style={{width: '40%'}}
            onChange={(e, show) => setDrawer2Active(show)}>
    </Drawer>
  </>;
}
```
[Drawer1_END_zh_CN]

[Drawer1_BEGIN_en_US]
[Drawer1_END_en_US]
----------------------------------
[Drawer2_BEGIN_zh_CN]
### 示例2: 显示位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Drawer可以在上下左右四个方位显示，您需要将position属性相应地设置为top、bottom、left、right。另外您还需要给Drawer设置一个style属性，
    以便更改Drawer的宽度或高度。
    如果position是在上下方位时，需要在style中设定一个高度height。如果如果position是在左右方位时，需要在style中设定一个宽度width。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Drawer, RadioGroup, Radio} from 'react-windy-ui';

export default function Drawer2() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState('left');

  //for left & right, you need to specify a width, on the contrary the height is needed
  //for top & bottom
  const style = position === 'left' || position === 'right'
      ? {width: '40%'}
      : {height: '40%'};

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <RadioGroup defaultValue={position} onChange={(val) => setPosition(val)}>
        <Radio value="left">left</Radio>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
      </RadioGroup>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Active</Button>
    <Drawer active={active}
            position={position}
            style={style}
            onChange={(e, show) => setActive(show)}>
    </Drawer>
  </>;
}
```
[Drawer2_END_zh_CN]

[Drawer2_BEGIN_en_US]
[Drawer2_END_en_US]
----------------------------------
[Drawer3_BEGIN_zh_CN]
### 示例3: 显示Drawer的快捷图标
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当Drawer关闭时，可以在界面上显示一个Drawer的快捷图标。可以通过点击这个快捷图标，打开Drawer。要显示一个快捷图标，只需要将hasAnchor属性
    设置为true即可。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Drawer, Radio, RadioGroup, Toggle} from 'react-windy-ui';

export default function Drawer3() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState('left');
  const [hasAnchor, enableAnchor] = useState(false);

  //for left & right, you need to specify a width, on the contrary the height is needed
  //for top & bottom
  const style = position === 'left' || position === 'right'
      ? {width: '40%'}
      : {height: '40%'};

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <RadioGroup defaultValue={position} onChange={(val) => setPosition(val)}>
        <Radio value="left">left</Radio>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasAnchor} onChange={val => enableAnchor(val)}
              content={{on: 'Show anchor', off: 'Show anchor'}}/>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Active</Button>
    <Drawer active={active}
            position={position}
            hasAnchor={hasAnchor}
            style={style}
            onChange={(e, show) => setActive(show)}>
    </Drawer>
  </>;
}
```
[Drawer3_END_zh_CN]

[Drawer3_BEGIN_en_US]
[Drawer3_END_en_US]
----------------------------------
[Drawer4_BEGIN_zh_CN]
### 示例4: 显示Header和Footer
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    您可以给Drawer添加header和footer, 通常在一些使用到表单的场景下用到，相应地设置一个header和footer属性即可。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Drawer} from 'react-windy-ui';

export default function Drawer4() {
  const [active, setActive] = useState(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Drawer</Button>
    <Drawer active={active} header={'Header'}
            footer={<div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button type="primary"
                      onClick={() => setActive(false)}>OK</Button>
            </div>}
            style={{width: '40%'}}
            onChange={(e, show) => setActive(show)}>
    </Drawer>
  </>;
}
```
[Drawer4_END_zh_CN]

[Drawer4_BEGIN_en_US]
[Drawer4_END_en_US]
----------------------------------