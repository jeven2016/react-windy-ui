----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 弹出框 Popover
Popover通常用于弹出展示一段说明性的文字，例如向导、指南性的说明。**但有一点需要注意的是，Popover的children只能有一个子节点对象**。   
- 你可以在Popover中放置一段文字，也可以在其中放入一系列的控件
- 如果以Popover为基础，你可以构建出更强大易用的组件。

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Pop1_BEGIN_zh_CN]  
### 示例1: 最简单的Popover
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个最简单的Popover示例，Popover默认情况下在下方显示。在body中放置需要显示的内容，如果需要显示标题，可以设置一个header。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop1() {
  const body = <>
    <div>This is a sample</div>
    <div>This is a sample</div>
  </>;
  return <>
    <Popover body={body}>
      <Button outline={true} color="blue">Popover</Button>
    </Popover>

    <Popover header="Header" body={body}>
      Popover
    </Popover>
  </>;

}
```
[Pop1_END_zh_CN]

[Pop1_BEGIN_en_US]
[Pop1_END_en_US]
----------------------------------

[Pop2_BEGIN_zh_CN]  
### 示例2: 激活弹出菜单
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置activeBy属性可以选择Popover的弹出方式，activeBy可以设置成'hover'或'click'。这里示例了当鼠标 悬停在Button上时，激活弹出菜单。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop2() {
  const body = <>
    <div>This is a sample</div>
    <div>This is a sample</div>
  </>;
  return <>
    <Popover body={body} activeBy="hover">
      <Button outline={true} color="blue">Hover</Button>
    </Popover>

    <Popover header="Hover" body={body} activeBy="hover">
      Hover
    </Popover>
  </>;

}
```
[Pop2_END_zh_CN]

[Pop2_BEGIN_en_US]
[Pop2_END_en_US]
----------------------------------

[Pop3_BEGIN_zh_CN]  
### 示例5: 显示位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   Dropdown可在十二个方位显示，可相应地设置position属性为以下值：
   Top方位： 'topLeft'、'top'、'topRight'；
   Bottom方位: 'bottomLeft'、'bottom'、'bottomRight'；
   Left方位: 'leftTop'、'left'、'leftBottom'；
   Right方位: 'rightTop'、'right'、'rightBottom'。
   </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Popover} from 'react-windy-ui';

const createPopover = (text, position, activeBy) => {
  const body = <span>
    I wanna show you what the popover component looks like and then you
    can consider if you can rely on it to represent a good page for your customers.
  </span>;
  return <Popover body={body}
                  activeBy={'hover'}
                  position={position}
                  hasBorder={true}
                  hasBox={false}>
    <Button hasMinWidth={false} color="primary" outline
            style={{margin: '1rem'}}>
      {text}
    </Button>
  </Popover>;
};

export default function Pop3() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createPopover('TL', 'topLeft', 'hover')}
            {createPopover('T', 'top', 'hover')}
            {createPopover('TR', 'topRight', 'hover')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createPopover('LT', 'leftTop', 'hover')}
              {createPopover('L', 'left', 'hover')}
              {createPopover('LB', 'leftBottom', 'hover')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createPopover('RT', 'rightTop', 'hover')}
              {createPopover('R', 'right', 'hover')}
              {createPopover('RB', 'rightBottom', 'hover')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createPopover('BL', 'bottomLeft', 'hover')}
            {createPopover('B', 'bottom', 'hover')}
            {createPopover('BR', 'bottomRight', 'hover')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}
```
[Pop3_END_zh_CN]

[Pop3_BEGIN_en_US]
[Pop3_END_en_US]
----------------------------------

[Pop4_BEGIN_zh_CN]  
### 示例4: Popover的显示和关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  在这个示例中，一旦Popover显示后，就只能通过点击Popover中的Close按钮去关闭。这里就是将active和onChange函数一起使用后达到的效果。
   Popover有defaultActive和active两个属性, 用来控制Popover显示和关闭。 defaultActive属性值为true后，控件初始状态下显示Popover。但不影响后续的关闭和显示。
   defaultActive属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，Popover将不能被自动显示、关闭， 
   此时会触发onChange调用，您需要在onChange中切换选中状态。另外，active与onChange方法需要同时提供，以便一起完成状态的切换过程。
   </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop4() {
  const [active, setActive] = useState(false);

  const change = (nextState) => {
    if (!active && nextState) {
      setActive(nextState);
    }
  };

  const close = () => setActive(false);

  const body = <>
    <div>......</div>
    <div>......</div>
    <div>......</div>
    <div style={{textAlign: 'center'}}>
      <Button color="blue" size="small" onClick={close}>Close</Button></div>
  </>;
  return <>
    <Popover body={body} activeBy="hover" header="Are you sure to close?"
             active={active}
             onChange={change}>
      <Button outline={true} color="blue">Hover</Button>
    </Popover>
  </>;

}
```
[Pop4_END_zh_CN]

[Pop4_BEGIN_en_US]
[Pop4_END_en_US]