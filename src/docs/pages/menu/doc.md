----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 菜单  Menu
在网站布局中，通常需要在水平或垂直方向展示一系列的条目，此时使用Menu是一个不错的选择。

Menu主要有以下功能
* 提供了primary、normal、dark三种类型的菜单
* Menu可以水平或垂直排列
* Menu可以在下方或右侧弹出子菜单

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    
几个需要注意的事项：
* 请给SubMenu、Item设置一个在Menu内唯一的id。这个id在菜单折叠展示或Item选中时需要用到。   
* 请给SubMenu的配置一个header，这样子菜单才会显示对应的头部区域    
<br/>    

Menu   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| hasBox | 是否显示边框阴影 | boolean | - | - |
| hasBorderRadius | 是否边角有弧形 | boolean | - |  |
| hasArrow | 是否有折叠/展开的箭头 | boolean | - |  |
| collapsable | 是否能够折叠 | boolean | - |  |
| justify | 水平排列Item的方式 | string | start | 可设置为： start，end, center, around, between, evenly |
| direction | 菜单的布局方向 | string | vertical | 可设置为： horizontal（水平布局），vertical（垂直布局）   |
| type | 类型 | string | normal | 可设置为： normal, primary, dark   |
| popupSubMenu | 是否弹出子菜单 | boolean | false |   |
| children | 子节点 | react node | - |   |
| autoIndent | Menu是否自动缩进 | boolean | true  |   |
| indentUnit | 菜单缩进值的单位 | string | rem  |   |
| indentation | 默认的缩进量 | string | rem  |   |
| onSelect | 当有Item选中时的回调 | function | - |   |
| onClickItem | 当点击Item时的回调 | function | - |   |
| multiSelect | 是否可以选择多个Item | boolean | false |   |
| compact | 是否允许菜单压缩显示 | boolean | false |   |
| defaultActiveItems | 默认选中的Item其id组成的数组 | string[] \| number[] | - |   |
| activeItems | 当前选中的Item其id组成的数组 | string[] \| number[] | - |   |
| defaultOpenedMenus | 默认展开的Menu/SubMenu其id组成的数组 | string[] \| number[] | - |   |
| openedMenus | 当前展开的Menu/SubMenu其id组成的数组 | string[] \| number[] | - |   |
| onOpenedMenu | 但菜单展开或折叠所触发的回调 | function | - |   |
| selectable | 点击Item是否允许显示选中状态 | boolean | - |   |


SubMenu   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| id | SubMenu的ID | string \| number | - | 务必设置一个Menu内部唯一的值 |
| icon | 在Header左侧显示的Icon | react node | - |  |
| popupSubMenu | SubMenu是否弹出显示 | boolean | false |  |
| popupSubMenuPosition | SubMenu弹出显示的位置 | string | right | 可设置为： right, bottom  |
| hasBottomBar | 是否在Header下方显示选中状态下的横条 | boolean | false |  |


Group   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| header | 分组的抬头显示 | react node | - |  |



Item   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | base-menu |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| id | SubMenu的ID | string \| number | - | 务必设置一个Menu内部唯一的值 |
| equitable | Item是否均匀瓜分剩余的空间 | boolean | - |  |
| hasBackground | 选中时是否添加背景色  | boolean | - |  |
| hasBottomBar | 是否在下方显示选中状态下的横条 | boolean | false |  |
| disabled | 是否禁用 | boolean | - |  |
| align | 对齐的方向 | string | - | 可设置为: left、center、right |
| icon | 在Item左侧显示的Icon | react node | - |  |
| onClick | 点击时的回调 |  | - |  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Menu1_BEGIN_zh_CN]
### 示例1: 最简单的Menu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个最简单的Menu示例，Menu默认情况下在垂直方向上排列。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu1() {

  return <Menu style={{width: '20rem'}}
               defaultActiveItems={'item1'}
               onSelect={(itemInfo, e) => {
                 console.log(itemInfo);
               }}>
    <Menu.Item id="item1">Menu Item1</Menu.Item>
    <Menu.Item id="item2">Menu Item2</Menu.Item>
    <Menu.Item id="item3">Menu Item3</Menu.Item>
    <Menu.Item id="item4">Menu Item4</Menu.Item>
  </Menu>;

}
```
[Menu1_END_zh_CN]

[Menu1_BEGIN_en_US]
[Menu1_END_en_US]
----------------------------------
[Menu2_BEGIN_zh_CN]
### 示例2: 切换不同类型的Menu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    有三种Menu类型： primary、normal、dark。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Menu, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu2() {
  const [type, setType] = useState('normal');
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <Menu type={type}
          style={{width: "20rem"}}
          defaultActiveItems={['item1']}
          onSelect={(itemInfo, e) => {
            console.log(itemInfo);
          }}>
      <Menu.Item id="item1">Menu Item1</Menu.Item>
      <Menu.Item id="item2">Menu Item2</Menu.Item>
      <Menu.Item id="item3">Menu Item3</Menu.Item>
      <Menu.Item id="item4">Menu Item4</Menu.Item>
    </Menu>
  </>;

}
```
[Menu2_END_zh_CN]

[Menu2_BEGIN_en_US]
[Menu2_END_en_US]
----------------------------------
[Menu3_BEGIN_zh_CN]
### 示例3: 切换不同类型的Menu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下Menu在垂直方向上排列，要在水平方向上排列的话，则需要将direction属性设置为'horizontal'。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';
import {Menu, Toggle} from 'react-windy-ui';

export default function Menu3() {
  const [vertical, setVertical] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={vertical} onChange={active => setVertical(active)}
              content={{on: 'Veritical', off: 'Horizontal'}}/>
    </div>
    <Menu defaultActiveItems={['item1']}
          direction={vertical ? 'vertical' : 'horizontal'}>
      <Menu.Item id="item1">Menu Item1</Menu.Item>
      <Menu.Item id="item2">Menu Item2</Menu.Item>
      <Menu.Item id="item3">Menu Item3</Menu.Item>
      <Menu.Item id="item4">Menu Item4</Menu.Item>
    </Menu>
  </>;

}
```

[Menu3_END_zh_CN]

[Menu3_BEGIN_en_US]
[Menu3_END_en_US]
----------------------------------
[Menu4_BEGIN_zh_CN]
### 示例4: 在水平方向排列各个Item
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    通过设置justify属性，你可以针对水平展示的Menu，指定其下各个Item的排放位置。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';
import {Menu, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu4() {
  const [justify, setJustify] = useState(null);
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={justify}
                  onChange={(val) => setJustify(val)}>
        <Radio value="start"> start</Radio>
        <Radio value="end"> end</Radio>
        <Radio value="center">center </Radio>
        <Radio value="around">around </Radio>
        <Radio value="between">between </Radio>
        <Radio value="evenly">evenly </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal"
            justify={justify}>
        <Menu.Item id="item1">Menu Item1</Menu.Item>
        <Menu.Item id="item2">Menu Item2</Menu.Item>
        <Menu.Item id="item3">Menu Item3</Menu.Item>
      </Menu>
    </div>
  </>;

}
```
[Menu4_END_zh_CN]

[Menu4_BEGIN_en_US]
[Menu4_END_en_US]
----------------------------------
[Menu5_BEGIN_zh_CN]
### 示例5: 在Item左侧或右侧占据剩余空间
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在最左侧的Item上设置align="left"属性后，将尽可能占据左侧空间；在最右侧的Item上设置align="right"属性后，将尽可能占据右侧空间
  </div>
</fieldset>


```jsx
import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu5() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1" align="left">
          Left Menu
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3">
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>

    <div className="doc doc-row">
      <Menu defaultActiveItems={['item3']}
            direction="horizontal">
        <Menu.Item id="item1">
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" align="right">
          Right Menu
        </Menu.Item>
      </Menu>
    </div>
  </>;

}
```

[Menu5_END_zh_CN]

[Menu5_BEGIN_en_US]
[Menu5_END_en_US]
----------------------------------
[Menu6_BEGIN_zh_CN]
### 示例6: 给Item设置背景色和下边框
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在Item上设置hasBottomBar属性，Item将会在下方显示一个横条；在Item上设置hasBackground属性，Item将会获得一个背景色；
  </div>
</fieldset>


```jsx
import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu6() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']} type="normal"
            style={{marginBottom: '1rem'}}
            direction="horizontal">
        <Menu.Item id="item1" hasBottomBar>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" hasBottomBar>
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" hasBottomBar>
          Menu Item3
        </Menu.Item>
      </Menu>

      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1" hasBackground>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" hasBackground>
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" hasBackground>
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>
  </>;

}
```

[Menu6_END_zh_CN]

[Menu6_BEGIN_en_US]
[Menu6_END_en_US]
----------------------------------
[Menu7_BEGIN_zh_CN]
### 示例7: 自定义Menu的高度
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    修改Item的style属性，将line-height设置为一个具体的高度值后，则可使整个Menu的高度得到改变。
  </div>
</fieldset>


```jsx
import React from 'react';
import {Menu} from 'react-windy-ui';

const ItemStyle = {
  lineHeight: '3.2rem',
};

export default function Menu7() {
  return <>
    <Menu type="dark"
          direction="horizontal">
      <Menu.Item id="item1" style={ItemStyle}>
        Menu Item1
      </Menu.Item>
      <Menu.Item id="item2" style={ItemStyle}>
        Menu Item2
      </Menu.Item>
      <Menu.Item id="item3" style={ItemStyle}>
        Menu Item3
      </Menu.Item>
    </Menu>
  </>;

}
```

[Menu7_END_zh_CN]

[Menu7_BEGIN_en_US]
[Menu7_END_en_US]
----------------------------------

[Menu8_BEGIN_zh_CN]
### 示例8: 子菜单SubMenu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在Menu中添加子菜单SubMenu, 将整个Menu展示成具备层级关系的菜单。每个菜单只能有一个Menu根节点，并且SubMenu只能在Menu下嵌套添加。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Menu, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu8() {
  const [type, setType] = useState('normal');
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            type={type}
            style={{width: '250px'}}>
        <Menu.Item id="item1">
          Menu item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu item2
        </Menu.Item>
        <Menu.SubMenu header="SubMenu 1" id="sub1">
          <Menu.Item id="item5">
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6">
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7">
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8">
            Menu item8
          </Menu.Item>
          <Menu.SubMenu header="SubMenu 2" id="sub2">
            <Menu.Item id="item9">
              Menu item9
            </Menu.Item>
            <Menu.Item id="item10">
              Menu item10
            </Menu.Item>
            <Menu.Item id="item11">
              Menu item11
            </Menu.Item>
            <Menu.Item id="item12">
              Menu item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 3" id="sub3">
          <Menu.Item id="item13">
            Menu item13
          </Menu.Item>
          <Menu.Item id="item14">
            Menu item14
          </Menu.Item>
          <Menu.Item id="item15">
            Menu item15
          </Menu.Item>
          <Menu.Item id="item16">
            Menu item16
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  </>;

}
```

[Menu8_END_zh_CN]

[Menu8_BEGIN_en_US]
[Menu8_END_en_US]
----------------------------------
[Menu9_BEGIN_zh_CN]
### 示例9: 切换成折叠模式
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   设置compact属性，可将菜单折叠或展开。当Menu折叠后将只显示SubMenu或Item的图标，所以您需要给对应的Item和SubMenu指定一个Icon对象。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {IconList, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';
import {IconInfo, IconQuestion} from '../../../../components/src';

export default function Menu9() {
  const [type, setType] = useState('normal');
  const [compact, setCompact] = useState(false);
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={compact} onChange={active => setCompact(active)}
              content={{on: 'Compact', off: 'Compact'}}/>
    </div>
    <div className="doc doc-row" style={{width: '20rem'}}>
      <Menu defaultActiveItems={['item7']}
            direction="vertical"
            compact={compact}
            onOpenedMenu={(data) => console.log(`open==${data}`)}
            onSelect={(data, e) => console.log(`select=${data.id}`)}
            type={type}>
        <Menu.Item id="item1" icon={<IconQuestion/>}>
          Menu item1
        </Menu.Item>
        <Menu.Item id="item2" icon={<IconInfo/>}>
          Menu item2
        </Menu.Item>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}>
          <Menu.Item id="item3">
            Menu item3
          </Menu.Item>
          <Menu.Item id="item4">
            Menu item4
          </Menu.Item>
          <Menu.Item id="item5">
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6">
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7">
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8">
            Menu item8
          </Menu.Item>
          <Menu.SubMenu header="SubMenu 2" id="sub2">
            <Menu.Item id="item9">
              Menu item9
            </Menu.Item>
            <Menu.Item id="item10">
              Menu item10
            </Menu.Item>
            <Menu.Item id="item11">
              Menu item11
            </Menu.Item>
            <Menu.Item id="item12">
              Menu item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 3" id="sub3" icon={<IconList/>}>
          <Menu.Item id="item13">
            Menu item13
          </Menu.Item>
          <Menu.Item id="item14">
            Menu item14
          </Menu.Item>
          <Menu.Item id="item15">
            Menu item15
          </Menu.Item>
          <Menu.Item id="item16">
            Menu item16
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}
```

[Menu9_END_zh_CN]

[Menu9_BEGIN_en_US]
[Menu9_END_en_US]
----------------------------------
[Menu10_BEGIN_zh_CN]
### 示例10: 弹出式的SubMenu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Menu还有一个属性可以让SubMenu弹出显示，将popupSubMenu设置为true后，SubMenu将被弹出显示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {IconHome, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';

export default function Menu10() {
  const [hasArrow, setHasArrow] = useState(true);
  const [hasBox, setHasBox] = useState(true);
  const [horizontal, setHorizontal] = useState(false);
  const [type, setType] = useState('normal');
  const [popupSubMenu, setPopupSubMenu] = useState(false);

  return <div style={{width: horizontal ? '100%' : '50%'}}>
    <div className="doc doc-row">
      <Toggle active={hasArrow} onChange={active => setHasArrow(active)}
              content={{on: 'Arrow', off: 'Arrow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={horizontal} onChange={active => setHorizontal(active)}
              content={{on: 'Horizontal', off: 'Horizontal'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem'}}>type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={popupSubMenu} onChange={active => setPopupSubMenu(active)}
              content={{on: 'Popup SubMenu', off: 'Popup SubMenu'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={active => setHasBox(active)}
              content={{on: 'Box Shadow', off: 'Box Shadow'}}/>
    </div>

    <div className="doc doc-row">
      <div>
        <Menu direction={horizontal ? 'horizontal' : 'vertical'}
              popupSubMenu={popupSubMenu}
              type={type}
              hasBox={hasBox}
              onOpenedMenu={(data) => console.log(`==${data}`)}
              hasArrow={hasArrow} icon={<IconHome/>}>
          <Menu.SubMenu header="Navigation One" id="sub1"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Group header="Group1">
              <Menu.Item id="item1">
                Item1
              </Menu.Item>
              <Menu.Item id="item2">
                Item2
              </Menu.Item>
            </Menu.Group>
            <Menu.Group header="Group2">
              <Menu.Item id="item3">
                Item3
              </Menu.Item>
              <Menu.Item id="item4">
                Item4
              </Menu.Item>
            </Menu.Group>
          </Menu.SubMenu>
          <Menu.SubMenu header="Navigation Two" id="sub2"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item id="item5">
              Item5
            </Menu.Item>
            <Menu.Item id="item6">
              Item6
            </Menu.Item>
            <Menu.Item id="item7">
              Item7
            </Menu.Item>
            <Menu.Item id="item8">
              Item8
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu header="Navigation Three" id="sub3"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item>
              Item9
            </Menu.Item>
            <Menu.Item>
              Item10
            </Menu.Item>
            <Menu.Item>
              Item11
            </Menu.Item>
            <Menu.Item>
              Item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  </div>;
}
```

[Menu10_END_zh_CN]

[Menu10_BEGIN_en_US]
[Menu10_END_en_US]
----------------------------------


----------------------------------
[Menu11_BEGIN_zh_CN]
### 示例11: 分组Group
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    可以使用一个Group将多个Item组合。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu11() {

  return <div style={{width: '50%'}}>
    <div className="doc doc-row">
      <div>
        <Menu type="primary">
          <Menu.Group header="Group1">
            <Menu.Item id="item1">
              Item1
            </Menu.Item>
            <Menu.Item id="item2">
              Item2
            </Menu.Item>
          </Menu.Group>
          <Menu.Group header="Group2">
            <Menu.Item id="item3">
              Item3
            </Menu.Item>
            <Menu.Item id="item4">
              Item4
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </div>
    </div>
  </div>;
}
```

[Menu11_END_zh_CN]

[Menu11_BEGIN_en_US]
[Menu11_END_en_US]
----------------------------------
[Menu12_BEGIN_zh_CN]
### 示例12: 多选Menu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    可多选的Menu。当Item是未选中状态时，点击Item会显示选中状态；当Item是已选中状态时，再次点击Item会取消选中。想要在点击时获取
    当前选中的Item时，可以实现onSelect方法。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {IconList, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';

export default function Menu12() {
  const [type, setType] = useState('primary');
  const [multiSelect, setMultiSelect] = useState(true);
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={multiSelect} onChange={active => setMultiSelect(active)}
              content={{on: 'Multi-Select', off: 'Multi-Select'}}/>
    </div>

    <div className="doc doc-row" style={{width: '20rem'}}>
      <Menu defaultActiveItems={['item1', 'item2']}
            multiSelect={multiSelect}
            onOpenedMenu={(data) => console.log(`open==${data}`)}
            onSelect={(data, e) => console.log(`select=${data}`)}
            type={type}>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}>
          <Menu.Item id="item1">
            Menu item1
          </Menu.Item>
          <Menu.Item id="item2">
            Menu item2
          </Menu.Item>
          <Menu.Item id="item3">
            Menu item3
          </Menu.Item>
          <Menu.Item id="item4">
            Menu item4
          </Menu.Item>
          <Menu.Item id="item5">
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6">
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7">
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8">
            Menu item8
          </Menu.Item>
          <Menu.SubMenu header="SubMenu 2" id="sub2">
            <Menu.Item id="item9">
              Menu item9
            </Menu.Item>
            <Menu.Item id="item10">
              Menu item10
            </Menu.Item>
            <Menu.Item id="item11">
              Menu item11
            </Menu.Item>
            <Menu.Item id="item12">
              Menu item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 3" id="sub3" icon={<IconList/>}>
          <Menu.Item id="item13">
            Menu item13
          </Menu.Item>
          <Menu.Item id="item14">
            Menu item14
          </Menu.Item>
          <Menu.Item id="item15">
            Menu item15
          </Menu.Item>
          <Menu.Item id="item16">
            Menu item16
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}
```

[Menu12_END_zh_CN]

[Menu12_BEGIN_en_US]
[Menu12_END_en_US]
----------------------------------
[Menu13_BEGIN_zh_CN]
### 示例13: 多选Menu
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    这里示例了如下几个配置项: 是否在菜单上显示折叠箭头图标、是否Menu具有边框阴影、是否在底部显示一个变化的横条。
    对于SubMenu，设置了hasBottomBar属性后，将会在Header下方显示。如果是Item的话，则需要在每个Item上设置这个属性后方可显示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {IconList, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';

export default function Menu13() {
  const [type, setType] = useState('normal');
  const [hasBox, setHasBox] = useState(true);
  const [hasArrow, setHasArrow] = useState(true);
  const [bottomBar, setBottomBar] = useState(true);
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasArrow} onChange={active => setHasArrow(active)}
              content={{on: 'Arrow', off: 'Arrow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={active => setHasBox(active)}
              content={{on: 'Box Shadow', off: 'Box Shadow'}}/>
    </div>


    <div className="doc doc-row">
      <Toggle active={bottomBar} onChange={active => setBottomBar(active)}
              content={{on: 'Bottom Bar', off: 'Bottom Bar'}}/>
    </div>
    <div className="doc doc-row" style={{width: '50%'}}>
      <Menu hasBox={hasBox} hasArrow={hasArrow}
            type={type}>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}
                      hasBottomBar={bottomBar}>
          <Menu.Item id="item3" hasBottomBar={bottomBar}>
            Menu item3
          </Menu.Item>
          <Menu.Item id="item4" hasBottomBar={bottomBar}>
            Menu item4
          </Menu.Item>
          <Menu.Item id="item5" hasBottomBar={bottomBar}>
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6" hasBottomBar={bottomBar}>
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7" hasBottomBar={bottomBar}>
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8" hasBottomBar={bottomBar}>
            Menu item8
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 2" id="sub2" hasBottomBar={bottomBar}>
          <Menu.Item id="item9" hasBottomBar={bottomBar}>
            Menu item9
          </Menu.Item>
          <Menu.Item id="item10" hasBottomBar={bottomBar}>
            Menu item10
          </Menu.Item>
          <Menu.Item id="item11" hasBottomBar={bottomBar}>
            Menu item11
          </Menu.Item>
          <Menu.Item id="item12" hasBottomBar={bottomBar}>
            Menu item12
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}
```

[Menu13_END_zh_CN]

[Menu13_BEGIN_en_US]
[Menu13_END_en_US]
----------------------------------

[Menu14_BEGIN_zh_CN]
### 示例14: 利用SubMenu显示层级菜单
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    对于通常使用的层级菜单，推荐使用SubMenu将对应的Item组合在一起，而且可以面板可以折叠展开。
  </div>
</fieldset>

```jsx
import React from 'react';
import {IconList, Menu} from 'react-windy-ui';

export default function Menu14() {
 
  return <>
    <div className="doc doc-row" style={{width: '50%'}}>
      <Menu>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}>
          <Menu.Item id="item3" >
            Menu item3
          </Menu.Item>
          <Menu.Item id="item4" >
            Menu item4
          </Menu.Item>
          <Menu.Item id="item5" >
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6" >
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7" >
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8" >
            Menu item8
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 2" id="sub2" >
          <Menu.Item id="item9" >
            Menu item9
          </Menu.Item>
          <Menu.Item id="item10" >
            Menu item10
          </Menu.Item>
          <Menu.Item id="item11" >
            Menu item11
          </Menu.Item>
          <Menu.Item id="item12" >
            Menu item12
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}
```

[Menu14_END_zh_CN]

[Menu14_BEGIN_en_US]
[Menu14_END_en_US]
----------------------------------
