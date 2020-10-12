----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 导航条 NavBar
可将一系列操作放置在导航条，或是当前窗口相关的内容。可用于展示标题、品牌、导航选项等。  
    
- 提供了两种类型的NavBar
- 支持自定义背景色
- NavBar可以在顶部或底部固定位置显示
- 支持响应式布局，可自动隐藏或显示NavBar中的List

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API   
   
* <Code type="normal">Navbar</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | navbar |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：<Code>primary</Code>, <Code>normal</Code> |
| fixed | 固定位置 | string | top | 值可以是：<Code>top</Code>, <Code>bottom</Code> |
| hasBox | 是否显示阴影 | bool | true |  |
| hasBorder | 是否有边框 | bool | false |  |
| autoHide | 是否自动折叠/展示List | bool | true | 当窗口宽度变窄时是否自动隐藏List |
| expand | 展开Navbar | bool | - | 当设置了此属性后，需要配合onExpand方法去修改这个属性值。 |
| defaultExpand | 是否初始展开Navbar | bool | false | 初始显示时是否展开List |
| onExpand | 展开/折叠List时的回调函数 | function(expand) | - | 当expand变化后触发。格式：<Code>onExpand(true|false})</Code> |
   
* <Code type="normal">Switch</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | button navbar-switch bg-transparent |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：<Code>primary</Code>, <Code>normal</Code> |
| onClick | 点击切换按钮的回调 | function(e) | - |  |
| circle | 是否时圆形按钮 | bool | true |  |  
    
* <Code type="normal">Title</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | title |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | li |  |
    
* <Code type="normal">List</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | list |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | ul |  |
| align | List里面的Item对齐方向 | string | left | 值可以是: <Code>left</Code>, <Code>center</Code>, <Code>right</Code> |
    
* <Code type="normal">Item</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | list |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| nativeType | html标签类型 | string | li |  |
| hasBackground | 激活后是否有背景色 | bool | true |  |
| hasBar | 激活后是否底部横条 | bool | false |  |
| active | 是否激活选中状态 | bool | false |  |
| alignRight | 是否靠右显示 | bool | false |  |
    
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Navbar1_BEGIN_zh_CN]
### 示例1 简单示例
<DemoDesc title="提示">
   默认的Navbar, 有灰色背景，还可以选择是否有border、box-shadow。您可以在Navbar上对应设置<Code>hasBorder</Code>， <Code>hasBox</Code>属性。
   对于每个Item，如果需要选中后有背景色可以设置<Code>hasBackground</Code>属性。将<Code>active</Code>设置为true后，将显示选中的效果。
</DemoDesc>

```jsx
import React from 'react';
import {NavBar, Menu} from 'react-windy-ui';

export default function Navbar1() {
  return <>

    <NavBar hasBorder={false}>
      <NavBar.Title>
        Navbar
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          User
        </NavBar.Item>
        <NavBar.Item active={true}>
          Role
        </NavBar.Item>
        <NavBar.Item>
          Privileges
        </NavBar.Item>
        <NavBar.Item>
          Security
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar style={{marginTop: '2rem'}} hasBox={false}>
      <NavBar.Title>
        Navbar
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          User
        </NavBar.Item>
        <NavBar.Item hasBackground={true} active={true}>
          Role
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          Privileges
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          Security
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;
}
```
[Navbar1_END_zh_CN]

[Navbar1_BEGIN_en_US]
[Navbar1_END_en_US]
----------------------------------
[Navbar2_BEGIN_zh_CN]
### 示例2 Primary类型
<DemoDesc title="提示">
   除了默认类型外，还提供了<Code>primary</Code>类型的具有蓝色背景的Navbar，只需要设置<Code>type='primary'</Code>即可。
   另外这个示例中，还展示了如何让Navbar中的Item显示选中的背景色以及绿色的下边条，这里可以设置<Code>hasBackground</Code>和
   <Code>hasBox</Code>两个属性。如果需要将List中的某个Item靠右显示，则可以设置<Code>alignRight</Code>属性为<Code>true</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Dropdown, Navbar, Toggle} from 'react-windy-ui';

export default function Navbar2() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
    </div>

    <Navbar type="primary" hasBorder={false}>
      <Navbar.Title>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          Security
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar} alignRight={true}>
          <Dropdown activeBy="hover" title={<span>Dropdown</span>}>
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}
```
[Navbar2_END_zh_CN]

[Navbar2_BEGIN_en_US]
[Navbar2_END_en_US]
----------------------------------

[Navbar3_BEGIN_zh_CN]
### 示例3 靠右侧排列的Item
<DemoDesc title="提示">
   Navbar的List可以设置<Code>align</Code>属性，设置为<Code>left</Code>时将居左显示，这也是默认的排列方式；设置
   为<Code>right</Code>时将居右显示。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Navbar, Toggle} from 'react-windy-ui';

export default function Navbar3() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
    </div>

    <Navbar type="primary" hasBorder={false}>
      <Navbar.Title>
        <span>Web</span>
      </Navbar.Title>
      <Navbar.List align="right">
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          Security
        </Navbar.Item>
      </Navbar.List>

    </Navbar>
  </>;
}
```
[Navbar3_END_zh_CN]

[Navbar3_BEGIN_en_US]
[Navbar3_END_en_US]
----------------------------------

[Navbar4_BEGIN_zh_CN]
### 示例4 小窗口下折叠隐藏List
<DemoDesc title="提示">
   当窗口宽度小于layout中的<Code>md</Code>定义的宽度时（768px），Navbar的List将会被隐藏，同时显示一个切换显示的按钮。
   点击这个按钮后，会再次展开List。这里注意需要在<Code>&lt;Title/&gt;</Code>中添加一个<Code>&lt;Navbar.Switch/&gt;</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {IconCalendar, Navbar, Toggle} from 'react-windy-ui';

export default function Navbar4() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
    </div>

    <Navbar type="primary" hasBorder={false}>
      <Navbar.Title>
        <Navbar.Switch autoHide={false}>
          <IconCalendar/>
        </Navbar.Switch>
        <span>Web</span>
      </Navbar.Title>
      <Navbar.List align="right">
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          Security
        </Navbar.Item>
      </Navbar.List>

    </Navbar>
  </>;
}
```
[Navbar4_END_zh_CN]

[Navbar4_BEGIN_en_US]
[Navbar4_END_en_US]
----------------------------------

[Navbar5_BEGIN_zh_CN]
### 示例5 小窗口下在右侧显示折叠按钮
<DemoDesc title="提示">
   当窗口宽度小于layout中的<Code>md</Code>定义的宽度时（768px），Navbar的List将会被隐藏，同时显示一个切换显示的按钮。
   如果需要按钮在Navbar右侧显示时，可参照此例设置<Code>&lt;Navbar.Title/&gt;</Code>
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {IconList, Navbar, Toggle} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Navbar5() {
  const [smallWindow, setSmallWindow] = useState(false);

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={smallWindow}
                content={{on: 'Small Window', off: 'Small Window'}}
                onChange={(val) => setSmallWindow(val)}/>
      </div>
    </div>

    <DocFrame width={width} height='270px'>
      <Navbar type="primary" hasBorder={false}>
        <Navbar.Title style={{width: '100%'}}>
          <span style={{flex: '1 1 auto'}}>Web</span>
          <Navbar.Switch>
            <IconList/>
          </Navbar.Switch>
        </Navbar.Title>
        <Navbar.List align="right">
          <Navbar.Item hasBackground={true}>
            User
          </Navbar.Item>
          <Navbar.Item active={true} hasBackground={true}>
            Role
          </Navbar.Item>
          <Navbar.Item hasBackground={true}>
            Security
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </DocFrame>
  </>;
}
```
[Navbar5_END_zh_CN]

[Navbar5_BEGIN_en_US]
[Navbar5_END_en_US]
----------------------------------

[Navbar6_BEGIN_zh_CN]
### 示例6 小窗口下始终显示List
<DemoDesc title="提示">
  某些情况下，不需要在窗口变化的情况下自动显示或隐藏List，可以将Navbar的<Code>autoHide</Code>属性设置为<Code>false</Code>。
  此时无论窗口宽度如何变化，List都一直显示。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Button, IconHome, IconSearch, Navbar, Toggle} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Navbar6() {
  const [smallWindow, setSmallWindow] = useState(false);

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={smallWindow}
                content={{on: 'Small Window', off: 'Small Window'}}
                onChange={(val) => setSmallWindow(val)}/>
      </div>
    </div>

    <DocFrame width={width} height='150px'>
      <Navbar type="primary" hasBorder={false} autoHide={false}>
        <Navbar.Title style={{width: '100%'}}>
          <span style={{flex: '1 1 auto'}}>Web</span>
        </Navbar.Title>
        <Navbar.List align="right">
          <Navbar.Item style={{minWidth: '2rem', padding: '0 .5rem'}}>
            <Button circle outline color="green"
                    extraClassName="clear-border"
                    style={{color: '#fff'}}>
              <IconSearch/>
            </Button>
          </Navbar.Item>
          <Navbar.Item style={{minWidth: '2rem', padding: '0 .5rem'}}>
            <Button circle outline color="green"
                    extraClassName="clear-border"
                    style={{color: '#fff'}}>
              <IconHome/>
            </Button>
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </DocFrame>
  </>;
}
```
[Navbar6_END_zh_CN]

[Navbar6_BEGIN_en_US]
[Navbar6_END_en_US]
----------------------------------

[Navbar7_BEGIN_zh_CN]
### 示例7 在Navbar中放置其他组件
<DemoDesc title="提示">
  您可以在Navbar中放置其他诸如<Code>Button</Code>、<Code>Dropdown</Code>、<Code>Input</Code>等组件。
</DemoDesc>

```jsx
import React from 'react';
import {Button, Dropdown, IconSearch, Input, Navbar} from 'react-windy-ui';

export default function Navbar7() {
  return <>

    <Navbar hasBorder={false} type="primary">
      <Navbar.Title>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item>
          <Button color="green">Button</Button>
        </Navbar.Item>
        <Navbar.Item active={true}>
          <Input.IconInput>
            <Input placeholder="Message..."/>
            <IconSearch/>
          </Input.IconInput>
        </Navbar.Item>
        <Navbar.Item>
          <Dropdown title={<Button style={{marginLeft: '2rem'}}
                                   color="purple">Dropdown</Button>}>
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}
```
[Navbar7_END_zh_CN]

[Navbar7_BEGIN_en_US]
[Navbar7_END_en_US]
----------------------------------

[Navbar8_BEGIN_zh_CN]
### 示例8 自定义背景色
<DemoDesc title="提示">
  Navbar支持定义背景色，您可以通过<Code>extraClassName</Code>属性给Navbar添加额外的样式去覆盖默认的背景色即可。
  默认提供的背景色样式可以参阅此处。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Navbar, Toggle} from 'react-windy-ui';

export default function Navbar8() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);
  const [box, setBox] = useState(true);

  const colorClassNames = [
    'bg-color-green', 'bg-color-brown', 'bg-color-black',
    'bg-color-red', 'bg-color-teal'];
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={box}
                content={{on: 'Box Shadow', off: 'Box Shadow'}}
                onChange={(val) => setBox(val)}/>
      </div>
    </div>

    {
      colorClassNames.map((item, i) =>
          <Navbar key={i} type="primary" hasBorder={false} hasBox={box}
                  extraClassName={item} style={{marginBottom: '1rem'}}>
            <Navbar.Title>
              Navbar
            </Navbar.Title>
            <Navbar.List>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                User
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Role
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Privileges
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Security
              </Navbar.Item>
            </Navbar.List>
          </Navbar>,
      )
    }

  </>;
}
```
[Navbar8_END_zh_CN]

[Navbar8_BEGIN_en_US]
[Navbar8_END_en_US]
----------------------------------

[Navbar9_BEGIN_zh_CN]
### 示例9 固定位置显示
<DemoDesc title="提示">
  Navbar提供了一个<Code>fixed</Code>属性用于将Navbar固定显示。当<Code>fixed='top'</Code>时，将固定在顶部显示；
  当<Code>fixed='bottom'</Code>时，将固定在底部显示。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Navbar, Toggle} from 'react-windy-ui';

export default function Navbar9() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);
  const [box, setBox] = useState(true);

  const colorClassNames = [
    'bg-color-green', 'bg-color-brown', 'bg-color-black',
    'bg-color-red', 'bg-color-teal'];
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={box}
                content={{on: 'Box Shadow', off: 'Box Shadow'}}
                onChange={(val) => setBox(val)}/>
      </div>
    </div>

    {
      colorClassNames.map((item, i) =>
          <Navbar key={i} type="primary" hasBorder={false} hasBox={box}
                  extraClassName={item} style={{marginBottom: '1rem'}}>
            <Navbar.Title>
              Navbar
            </Navbar.Title>
            <Navbar.List>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                User
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Role
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Privileges
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Security
              </Navbar.Item>
            </Navbar.List>
          </Navbar>,
      )
    }

  </>;
}
```
[Navbar9_END_zh_CN]

[Navbar9_BEGIN_en_US]
[Navbar9_END_en_US]
----------------------------------