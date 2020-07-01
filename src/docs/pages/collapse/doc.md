----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 折叠框 Collapse
Collapse组件可用来折叠隐藏或显示一段内容。

Collapse组件主要提供以下功能：   

- 折叠框
- 手风琴类型的折叠框，只允许一个面板展开
- 可以通过Panel对象自定义实现折叠框控件

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Collapse的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | checkbox |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| defaultActive | 初始展开的面板所对应的值数组 | string[] \| number[] | - |  |
| active | 展开的面板所对应的值数组 | string[] \| number[] | - |  |
| onChange | 面板折叠状态切换触发的回调 | function | - |  |
| accordion | 显示手风琴类型的折叠框 | boolean | false |  |
| hasBorder | 是否有边框 | boolean | false |  |
| hasBox | 是否有边框阴影 | boolean | true |  |
| hasCollapseIcon | 是否显折叠图标 | boolean | true |  |
| collapseIcon | 折叠图标 | react node | - |  |
| children | 子节点对象 | react node | - |  |
| iconPosition | 折叠图标显示的位置 | string | left | 可以设置成'left'或'right' |


Panel的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | collapse-panel |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| collapse | 是否折叠状态 | boolean | - |  |
| children | 子节点对象 | react node | - |  |
| style | 根节点的样式对象 | object | - |  |
| innerStyle | 根节点的子节点样式对象 | object | - |  |
| height | 高度的像素值 | number | - |  |
| autoScaleHeight | 是否自动调整高度 | boolean | - |  |
| heightIncrement | 在原高度像基础上需要额外增加的高度值 | number | - |  |

Item的属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| children | 子节点对象 | react node | - |  |
| header | Item对应的Header节点 | react node | - |  |
| value | Panel对应的值 | string \| number | - |  |
| disabled | 是否禁用该Item | boolean \| number | - |  |
| hasBackground | 是否有背景 | boolean \| number | - |  |
| moreItems | 在右侧显示的组件数组 | react node[] | - |  |


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Collapse1_BEGIN_zh_CN]
### 示例1: 可折叠的Panel
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Collapse组件以Collapse Panel为基石，进行内容的隐藏和展示。Panel对象可以单独使用，而且你可以用它自定义
    实现折叠。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Collapse, Card} from 'react-windy-ui';

export default function Collapse1() {
  const [collapse, setCollapse] = useState(false);
  return <>
    <Button type="primary"
            style={{marginBottom: '1rem'}}
            onClick={() => setCollapse(col => !col)}>
      Toggle
    </Button>
    <Collapse.Panel collapse={collapse}>
      <Card>
        <Card.Body>
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
          Card Body...
        </Card.Body>
      </Card>
    </Collapse.Panel>
  </>;
}
```
[Collapse1_END_zh_CN]

[Collapse1_BEGIN_en_US]
[Collapse1_END_en_US]
----------------------------------

[Collapse2_BEGIN_zh_CN]
### 示例2: 普通Collapse
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下Collapse全部显示折叠中状态，设置defaultActive可以指定首次展开的面板。这里初始展开第一个面板。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Collapse} from 'react-windy-ui';

export default function Collapse2() {
  const comp = <>
    <Collapse defaultActive={[1]}>
      <Collapse.Item header="Header1" hasBackground value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return comp;
}
```
[Collapse2_END_zh_CN]

[Collapse2_BEGIN_en_US]
[Collapse2_END_en_US]
----------------------------------
[Collapse3_BEGIN_zh_CN]
### 示例3: 手风琴
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置accordion属性可以设置成手风琴效果的折叠框, 即只允许一个面板展开。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Collapse} from 'react-windy-ui';

export default function Collapse3() {
  return <>
    <Collapse accordion={true}>
      <Collapse.Item header="Header1" hasBackground value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}
```
[Collapse3_END_zh_CN]

[Collapse3_BEGIN_en_US]
[Collapse3_END_en_US]


----------------------------------

[Collapse4_BEGIN_zh_CN]
### 示例4: 设置更多属性
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    您可以设置更多属性，这里示例了将accordion、hasBox、hasBorder、iconPosition几个属性组合使用的效果。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Collapse, Toggle} from 'react-windy-ui';

export default function Collapse4() {
  const [accordion, setAccordion] = useState(true);
  const [bg, setBg] = useState(true);
  const [box, setBox] = useState(false);
  const [border, setBorder] = useState(false);
  const [leftIcon, setLeftIcon] = useState('left');

  const comp = <>
    <div className="doc doc-row">
      <Toggle defaultActive onChange={active => setAccordion(active)}
              content={{on: 'Accordion', off: 'Accordion'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive onChange={active => setBg(active)}
              content={{on: 'Background', off: 'Background'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setBox(active)}
              content={{on: 'Box Shadow', off: 'Box Shadow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setBorder(active)}
              content={{on: 'Border', off: 'Border'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setLeftIcon(active ? 'right' : 'left')}
              content={{on: 'Right Icon', off: 'Left Icon'}}/>
    </div>

    <Collapse accordion={accordion} hasBox={box} hasBorder={border}
              iconPosition={leftIcon}>
      <Collapse.Item header="Header1" hasBackground={bg} value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground={bg} value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground={bg} value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return comp;
}

```
[Collapse4_END_zh_CN]

[Collapse4_BEGIN_en_US]
[Collapse4_END_en_US]

----------------------------------

[Collapse5_BEGIN_zh_CN]
### 示例5: 在左侧或右侧显示Icon
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Collapse中的Icon可以左侧、右侧显示，相应地需要将iconPosition设置成'left'或'right'。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Collapse, Divider, Toggle} from 'react-windy-ui';

export default function Collapse5() {
  const [leftIcon, setLeftIcon] = useState('left');

  return <>
    <div className="doc doc-row">
      <Toggle onChange={active => setLeftIcon(active ? 'right' : 'left')}
              content={{on: 'Right Icon', off: 'Left Icon'}}/>
    </div>

    <Collapse hasBox={false} hasBorder={false} accordion={true}
              iconPosition={leftIcon}>
      <Divider/>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
    </Collapse>
  </>;
}
```
[Collapse5_END_zh_CN]

[Collapse5_BEGIN_en_US]
[Collapse5_END_en_US]

----------------------------------

[Collapse6_BEGIN_zh_CN]
### 示例6: 在右侧显示自定义的内容
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Collapse头部的右侧不仅可以显示Icon，还可以显示自定义添加组件。这里展示了可以在右侧添加文字、图标、按钮等内容。
    在<code>moreItems</code>中添加你所需要的组件，对于按钮这类控件，如果希望在点击后不触发自动折叠，
    记得添加<code>e.stopPropagation</code>代码
    阻止事件冒泡。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Collapse, IconList, IconSearch} from 'react-windy-ui';

export default function Collapse6() {

  return <>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2}
                     moreItems={[
                       <span onClick={(e) => {
                         alert('Add');
                         e.stopPropagation();
                       }}>Add</span>,
                       <span>Update</span>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3}
                     moreItems={[
                       <Button size="small" outline type="primary">Add</Button>,
                       <Button size="small" outline color="red">Delete</Button>,
                     ]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}
```
[Collapse6_END_zh_CN]

[Collapse6_BEGIN_en_US]
[Collapse6_END_en_US]
----------------------------------


[Collapse7_BEGIN_zh_CN]
### 示例7: 禁用Collapse
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在每个Collapse.Item上设置disabled属性以便禁用整个Collapse。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Collapse, Button, Toggle, IconSearch, IconList} from 'react-windy-ui';

export default function Collapse7() {
  const [disabled, setDisabled] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle onChange={val => setDisabled(val)}
              content={{on: 'Disabled', off: 'Enabled'}}/>
    </div>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     disabled={disabled}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2} disabled={disabled}
                     moreItems={[
                       <span>Add</span>,
                       <span>Update</span>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3} disabled={disabled}
                     moreItems={[
                       <Button size="small" outline type="primary"
                               disabled={disabled}>Add</Button>,
                       <Button size="small" outline color="red"
                               disabled={disabled}>Delete</Button>,
                     ]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}
```
[Collapse7_END_zh_CN]

[Collapse7_BEGIN_en_US]
[Collapse7_END_en_US]

----------------------------------




----------------------------------