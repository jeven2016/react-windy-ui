----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 下拉菜单 Dropdown
Dropdown组件。通常情况下，对于增删改查之类的操作，一般在界面上使用按钮进行布局即可。
但当操作比较多且使用Button会导致布局凌乱时，可以考虑使用Dropdown组件，将多个操作组合到Dropdown中。
<br/><br/>
Dropdown主要提供以下功能：   

- 提供一个可供点击的弹出菜单，可将一系列的操作在此控件中组合
- 如果需要选择菜单的某一项，请使用Select组件
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Dp1_BEGIN_zh_CN]
### 示例1: 简单示例
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个简单的示例，点击文本、Button后可以弹出菜单。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp1() {

  const title = <span
      style={{color: '#0ca0ff', cursor: 'pointer'}}>
    Text
  </span>;

  return <>
    <Dropdown title={title}>
      <Dropdown.Menu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown title={<Button style={{marginLeft: '2rem'}}
                             color="primary">Button</Button>}>
      <Dropdown.Menu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}
```
[Dp1_END_zh_CN]

[Dp1_BEGIN_en_US]
[Dp1_END_en_US]
----------------------------------
[Dp2_BEGIN_zh_CN]
### 示例2: 激活弹出菜单
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置activeBy属性可以选择Dropdown的菜单弹出的方式，activeBy可以设置成'hover'或'click'。这里示例了当鼠标
    悬停在Button上时，激活弹出菜单。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp2() {

  return <>
    <Dropdown title={<Button>Dropdown</Button>} activeBy="hover">
      <Dropdown.Menu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown title={<Button color="purple" circle>W</Button>}
              activeBy="hover">
      <Dropdown.Menu type="primary">
        <Dropdown.Item onClick={() => console.log('click item1')}>
          Menu Item1
        </Dropdown.Item>
        <Dropdown.Item>
          Menu Item2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('click item3')}>
          Menu Item3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}
```
[Dp2_END_zh_CN]

[Dp2_BEGIN_en_US]
[Dp2_END_en_US]
----------------------------------

[Dp3_BEGIN_zh_CN]
### 示例3: 与ButtonGroup组合使用
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Dropdown可以与ButtonGroup一起组合使用。
  </div>
</fieldset>

```jsx
import React from 'react';
import {ButtonGroup, Button, Dropdown, IconArrowDown} from 'react-windy-ui';

export default function Dp3() {

  return <>
    <ButtonGroup>
      <Button color="green" outline>Button</Button>
      <Dropdown
          position="bottomRight"
          title={<Button color="green"
                         hasMinWidth={false}><IconArrowDown/></Button>}
          activeBy="click">
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{marginLeft: '2rem'}}>
      <Button color="green">Button</Button>
      <Dropdown
          position="bottomRight"
          title={<Button color="green"
                         hasMinWidth={false}><IconArrowDown/></Button>}
          activeBy="click">
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </>;

}
```
[Dp3_END_zh_CN]

[Dp3_BEGIN_en_US]
[Dp3_END_en_US]
----------------------------------
[Dp4_BEGIN_zh_CN]
### 示例4: 点击菜单选项
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Dropdown有两种方式处理弹出菜单的点击事件。
    <ul>
    <li> 第一种方式也是最直接的方式，在各个Item上设置onClick属性，当点击对应的Item
    时触发。
    </li>
    <li> 第二种方式，首先需要在各个Item上设置一个id, 然后在Menu上提供一个onSelect方法，一旦点击了某个Item，将通过onSelect
    方法回调
    </li>
    <li>如果需要在点击Item不关闭弹出菜单时，可以使用第一种方式，在onClick方法中添加'e.stopPropagation()'去阻止事件冒泡。</li>
    </ul>
    <br/>
    
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp4() {

  return <>
    <Dropdown title={<Button>Dropdown1</Button>} activeBy="hover">
      <Dropdown.Menu type="primary" popupSubMenu>
        <Dropdown.Item onClick={() => console.log('click item1')}>
          Menu Item1
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => {
          console.log('click item2');
          e.stopPropagation();
        }}>
          Won't close
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('click item3')}>
          Menu Item3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown title={<Button>Dropdown2</Button>} activeBy="hover"
              onSelect={(id, e) => console.log(`${id} is selected`)}>
      <Dropdown.Menu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}
```
[Dp4_END_zh_CN]

[Dp4_BEGIN_en_US]
[Dp4_END_en_US]
----------------------------------

[Dp5_BEGIN_zh_CN]
### 示例5: 菜单的显示位置
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
import {Button, Dropdown} from 'react-windy-ui';

const createDropdown = (text, position, activeBy) => {
  const title = <Button circle hasMinWidth={false} color="primary" outline
                        style={{margin: '1rem'}}>{text}</Button>;
  return <Dropdown position={position}
                   title={title}
                   activeBy={activeBy}>
    <Dropdown.Menu type="primary">
      <Dropdown.Item onClick={() => console.log('click item1')}>
        Menu Item1
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => console.log('click item2')}>
        Menu Item2
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => console.log('click item3')}>
        Menu Item3
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>;
};

export default function Dp5() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createDropdown('TL', 'topLeft', 'hover')}
            {createDropdown('T', 'top', 'hover')}
            {createDropdown('TR', 'topRight', 'hover')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createDropdown('LT', 'leftTop', 'hover')}
              {createDropdown('L', 'left', 'hover')}
              {createDropdown('LB', 'leftBottom', 'hover')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createDropdown('RT', 'rightTop', 'hover')}
              {createDropdown('R', 'right', 'hover')}
              {createDropdown('RB', 'rightBottom', 'hover')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createDropdown('BL', 'bottomLeft', 'hover')}
            {createDropdown('B', 'bottom', 'hover')}
            {createDropdown('BR', 'bottomRight', 'hover')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}
```
[Dp5_END_zh_CN]

[Dp5_BEGIN_en_US]
[Dp5_END_en_US]
----------------------------------