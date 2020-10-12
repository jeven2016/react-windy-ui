----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 提示 Tooltip
Tooltip通常用于弹出展示一段提示文字。与Popover不同的是，它常用于显示一段较短的文字。   
你可以在Tooltip的body中放置一段文字，当然也可以在其中放入一系列的控件。**但有一点需要注意的是，Tooltip的children只能有一个子节点对象**。
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Tooltip1_BEGIN_zh_CN]
### 示例1: 最简单的Tooltip
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个最简单的Tooltip示例，Tooltip默认情况下在上方显示。可在body中放置需要显示的内容, 然后确保Tooltip包裹一个其他的控件即可。
  </div>
</fieldset>


```jsx
import React from 'react';
import {Tooltip, Button} from 'react-windy-ui';

export default function Tooltip1() {

  return <><Tooltip header="Header"
                    body={<span>This is a tooltip</span>}>
    <Button outline={true} color="blue"
            style={{marginLeft: '1rem'}}>Top</Button>
  </Tooltip>

    <Tooltip header="Header" body={<span>A tooltip</span>}>
      <span style={{textDecoration: 'underline'}}>Info</span>
    </Tooltip>
  </>;
}
```

[Tooltip1_END_zh_CN]

[Tooltip1_BEGIN_en_US]
[Tooltip1_END_en_US]
----------------------------------

[Tooltip2_BEGIN_zh_CN]
### 示例2: 显示的位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Dropdown可在十二个方位显示，可相应地设置position属性为以下值： Top方位： 'topLeft'、'top'、'topRight'； 
    Bottom方位: 'bottomLeft'、'bottom'、'bottomRight'； Left方位: 'leftTop'、'left'、'leftBottom'；
    Right方位: 'rightTop'、'right'、'rightBottom'。
  </div>
</fieldset>


```jsx
import React from 'react';
import {Button, Tooltip} from 'react-windy-ui';

const createTooltip = (text, position) => {
  const body = <div style={{display: 'flex', width: '250px'}}>
    I wanna show you what the tooltip component looks like and then you
    can consider if you can rely on it to represent a good page for your
    customers.
  </div>;
  return <Tooltip body={body} position={position}>
    <Button hasMinWidth={false} color="primary" outline
            style={{margin: '1rem'}}>
      {text}
    </Button>
  </Tooltip>;
};

export default function Tooltip2() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createTooltip('TL', 'topLeft')}
            {createTooltip('T', 'top')}
            {createTooltip('TR', 'topRight')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('LT', 'leftTop')}
              {createTooltip('L', 'left')}
              {createTooltip('LB', 'leftBottom')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('RT', 'rightTop')}
              {createTooltip('R', 'right')}
              {createTooltip('RB', 'rightBottom')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createTooltip('BL', 'bottomLeft')}
            {createTooltip('B', 'bottom')}
            {createTooltip('BR', 'bottomRight')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}
```

[Tooltip2_END_zh_CN]

[Tooltip2_BEGIN_en_US]
[Tooltip2_END_en_US]
----------------------------------

[Tooltip3_BEGIN_zh_CN]
### 示例3: 显示的位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在这个示例中，一旦Lock开关打开后Tooltip将无法自动关闭或打开。这里就是将active和onChange函数一起使用后达到的效果。
    Tooltip也有defaultActive和active两个属性, 用来控制显示和关闭。 defaultActive属性值为true后，控件初始状态下显示Tooltip。但不影响后续的关闭和显示。
    defaultActive属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，Tooltip将不能被自动显示、关闭， 
    此时会触发onChange调用，您需要在onChange中切换选中状态。另外，active与onChange方法需要同时提供，以便一起完成状态的切换过程。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';
import {Tooltip, Button, Toggle} from 'react-windy-ui';

export default function Tooltip3() {
  const [active, setActive] = useState(true);
  const [locked, setLocked] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={locked} onChange={val => {
        setActive(true);
        setLocked(val);
      }} content={{on: 'Lock', off: 'Lock'}}/>

      <Tooltip position="top" header="Header" defaultActive={true}
               body={<span>This is a tooltip</span>}>
        <Button outline={true} color="blue"
                style={{marginLeft: '1rem'}}>Default Active</Button>
      </Tooltip>

      <Tooltip position="top" header="Header"
               active={active}
               onChange={(val) => {
                 console.log(`Please change active state to ${val}`);
                 !locked && setActive(val);
               }}
               body={<span>A tooltip</span>}>
        <span style={{
          textDecoration: 'underline',
          marginLeft: '2rem',
        }}>
          Info
        </span>
      </Tooltip>
    </div>
  </>;
}
```

[Tooltip3_END_zh_CN]

[Tooltip3_BEGIN_en_US]
[Tooltip3_END_en_US]