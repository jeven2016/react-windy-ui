----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 布局 Layout
常用于网站的整体布局, 可以将页面分区域划分常见的上中下、左右等结构。

布局主要由以下几类组件搭配组合而成：  

- Layout: 容器区域，通常标记一块大的显示区域, 可以嵌套组合  
- Header: 头部区域  
- Split:  可分割的内容区域，内部由Slider和Content组成  
- Slider: 侧边栏区域，中间区域划分为两列、三列时居边排列的区域  
- Content: 内容显示区域，通常与Layout一起在Slider中显示  
- Footer： 尾部区域，通常显示版权等信息的区域


[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API

- 下列对象存在相同的属性定义：    
 <Code>Header</Code>, <Code>Slider</Code>, <Code>Content</Code>, <Code>Split</Code>, <Code>Footer</Code>。



| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |

- <Code>Header</Code>和<Code>Footer</Code>额外还有相同属性:  

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| fixed | 固定显示的位置 | string | - | 可以设置为: <Code>top</Code>, <Code>bottom</Code> |

- <Code>Slider</Code>额外属性定义:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| hasBox | 是否有阴影 | boolean | - |  |
| collapse | 是否折叠 | boolean |  |  |
| width | 展开时的宽度(px) | string | <Code>240px</Code> |  |
| minWidth | 折叠后显示的最小宽度 | string | <Code>80px</Code>  |  |

- <Code>Layout</Code>额外属性定义:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| collapse | 是否折叠 | boolean |  |  |
| collapseAttribute | 折叠的参数设置 | object |  | 格式如：<Code>{attr, minValue, maxValue}</Code> |  
  
<Blockquote>

对于collapseAttribute属性，例如如下显示一段默认配置：    
  
<Hcode>
collapseAttribute = {
  attr: 'marginLeft',
  minValue: '80px',
  maxValue: '240px',
}
</Hcode>  
这里的参数指定了，当折叠时将<Code>'margin-left'</Code>设置为<Code>'80px'</Code>；当展开时，将<Code>'margin-left'</Code>
设置为<Code>'240px'</Code>。这里的参数值以<Code>‘px’</Code>为单位，请勿设置为其他单位。 

</Blockquote>

    
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Layout1_BEGIN_zh_CN]
### 示例1 上下结构
<DemoDesc title="提示">
  上下、或上中下结构通常用于网页正文区域的结构展示，
  这里使用了如下的Layout结构：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout&gt;
        &lt;Breadcrumb/&gt;
        &lt;Layout.Content/&gt;
    &lt;/Layout&gt;
&lt;/Layout&gt;
</Hcode>
</DemoDesc>


```jsx
import React from 'react';
import {Breadcrumb, IconHome, IconList, Layout, Navbar} from 'react-windy-ui';

export default function Layout1() {
  return <>
    <Layout style={{background: '#f5f6f7'}}>
      <Layout.Header>
        <Navbar type="primary"
                hasBorder={false}
                extraClassName="clear-radius">
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span>Navbar</span>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBackground>
              User
            </Navbar.Item>
            <Navbar.Item active={true} hasBackground>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Privileges
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Security
            </Navbar.Item>
          </Navbar.List>
        </Navbar>

      </Layout.Header>
      <Layout style={{padding: '0 2rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{
              background: '#fff',
              minHeight: '15rem',
              padding: '1rem',
              marginBottom: '1rem',
            }}>
          Your Content
        </Layout.Content>
      </Layout>
    </Layout>
  </>;
}
```



[Layout1_END_zh_CN]

[Layout1_BEGIN_en_US]
[Layout1_END_en_US]
----------------------------------
[Layout2_BEGIN_zh_CN]
### 示例2 上中下结构
<DemoDesc title="提示">
  这里示例如果构建一个上中下布局的页面，同时将中间内容区域分为左右两块。
  Layout结构如下：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout.Split&gt;
        &lt;Layout.Slider/&gt;
        &lt;Layout&gt;
          &lt;Breadcrumb/&gt;
          &lt;Layout.Content/&gt;
        &lt;Layout&gt;
    &lt;/Layout.Split&gt;
    &lt;Layout.Footer/&gt;
&lt;/Layout&gt;
</Hcode>
</DemoDesc>


```jsx
import React, {useState} from 'react';
import {
  Breadcrumb,
  IconHome,
  IconList,
  Layout,
  Menu,
  Navbar,
  Toggle,
} from 'react-windy-ui';

function getMenu(position) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
               primaryBarPosition={position ? 'right' : 'left'}
               type="primary">
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
  </Menu>;
}

export default function Layout2() {
  const [leftPosition, setPosition] = useState(true);

  const flexDirection = leftPosition ? 'row' : 'row-reverse';

  return <>
    <div className="doc doc-row">
      <Toggle active={leftPosition} onChange={val => setPosition(val)}
              content={{on: 'Left', off: 'Left'}}/>
    </div>

    <div style={{background: '#f5f6f7'}}>
      <Layout.Header>
        <Navbar type="primary"
                hasBox={false}
                hasBorder={false}
                extraClassName="clear-radius">
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span>Navbar</span>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBackground>
              User
            </Navbar.Item>
            <Navbar.Item active={true} hasBackground>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Privileges
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Security
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </Layout.Header>

      <Layout.Split style={{flexDirection: flexDirection}}>
        <Layout.Slider style={{background: '#fff'}}>
          {getMenu(leftPosition)}
        </Layout.Slider>

        <Layout style={{padding: '0 2rem'}}>
          <Breadcrumb style={{margin: '0.5rem 0'}}>
            <Breadcrumb.Item>
              <IconHome style={{fontSize: '1.25em'}}/>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Main
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Application
            </Breadcrumb.Item>
          </Breadcrumb>

          <Layout.Content style={{
            background: '#fff',
            minHeight: '15rem',
            padding: '1rem',
          }}>
            Your Content
          </Layout.Content>
        </Layout>
      </Layout.Split>
      <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
        <span>react-windy-ui ©2020 All rights reserved</span>
      </Layout.Footer>
    </div>
  </>;
}
```
[Layout2_END_zh_CN]

[Layout2_BEGIN_en_US]
[Layout2_END_en_US]
----------------------------------
[Layout3_BEGIN_zh_CN]
### 示例3 将Slider与Content衔接在一起
<DemoDesc title="提示">
  在中间内容区域分为左右两块后，可以作为一个整体显示，避免出现视觉上的隔阂。
  Layout结构如下：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout&gt;
        &lt;Breadcrumb/&gt;
        &lt;Layout.Split&gt;
          &lt;Layout.Slider/&gt;
          &lt;Layout.Content/&gt;
        &lt;Layout.Split&gt;
    &lt;/Layout&gt;
    &lt;Layout.Footer/&gt;
&lt;/Layout&gt;
</Hcode>
</DemoDesc>


```jsx
import React, {useState} from 'react';
import {
  Breadcrumb,
  IconHome,
  IconList,
  Layout,
  Menu,
  Navbar,
  Toggle,
} from 'react-windy-ui';

function getMenu(position) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
               primaryBarPosition={position ? 'right' : 'left'}
               type="primary">
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
  </Menu>;
}

export default function Layout3() {
  const [leftPosition, setPosition] = useState(true);

  const flexDirection = leftPosition ? 'row' : 'row-reverse';

  const borderStyle = leftPosition ? {borderRight: '1px solid #f0f0f0'}
      : {borderLeft: '1px solid #f0f0f0'};

  return <>
    <div className="doc doc-row">
      <Toggle active={leftPosition} onChange={val => setPosition(val)}
              content={{on: 'Left', off: 'Left'}}/>
    </div>

    <div style={{background: '#f5f6f7'}}>
      <Layout.Header>
        <Navbar type="primary"
                hasBox={false}
                hasBorder={false}
                extraClassName="clear-radius">
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span>Navbar</span>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBackground>
              User
            </Navbar.Item>
            <Navbar.Item active={true} hasBackground>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Privileges
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Security
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </Layout.Header>

      <Layout style={{background: '#f8f9fa', padding: '0 1rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Split style={{flexDirection: flexDirection}}>
          <Layout.Slider style={{
            background: '#fff',
            ...borderStyle,
          }}>
            {getMenu(leftPosition)}
          </Layout.Slider>
          <Layout.Content style={{
            background: '#fff',
            minHeight: '15rem',
            padding: '1rem',
          }}>
            Your Content
          </Layout.Content>
        </Layout.Split>
      </Layout>

      <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
        <span>react-windy-ui ©2020 All rights reserved</span>
      </Layout.Footer>
    </div>
  </>;
}
```
[Layout3_END_zh_CN]

[Layout3_BEGIN_en_US]
[Layout3_END_en_US]
----------------------------------
[Layout4_BEGIN_zh_CN]
### 示例4 可折叠的Slider
<DemoDesc title="提示">
  将Slider与Menu折叠显示, 您需要相应地设置<Code>Layout.Slider</Code>的<Code>collapse</Code>属性,
  以及<Code>Menu</Code>的<Code>compact</Code>属性。
  Layout结构如下：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout.Split&gt;
        &lt;Layout.Slider/&gt;
        &lt;Layout&gt;
          &lt;Breadcrumb/&gt;
          &lt;Layout.Content/&gt;
        &lt;Layout&gt;
    &lt;/Layout.Split&gt;
    &lt;Layout.Footer/&gt;
&lt;/Layout&gt;
</Hcode>
</DemoDesc>


```jsx
import React, {useState} from 'react';
import {
  Breadcrumb,
  IconHome,
  IconList,
  Layout,
  Menu,
  Navbar,
  Toggle,
} from 'react-windy-ui';

function getMenu(position, collapse) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
               compact={collapse}
               primaryBarPosition={position ? 'right' : 'left'}
               type="dark">
    <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconHome/>}>
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
  </Menu>;
}

export default function Layout4() {
  const [collapse, setCollapse] = useState(false);
  const [leftPosition, setPosition] = useState(true);

  const flexDirection = leftPosition ? 'row' : 'row-reverse';

  return <>
    <div className="doc doc-row">
      <Toggle active={leftPosition} onChange={val => setPosition(val)}
              content={{on: 'Left', off: 'Left'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={collapse} onChange={val => setCollapse(val)}
              content={{on: 'Collapse', off: 'Collapse'}}/>
    </div>

    <div style={{background: '#f5f6f7'}}>
      <Layout.Header>
        <Navbar type="primary"
                hasBox={false}
                hasBorder={false}
                extraClassName="clear-radius">
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span>Navbar</span>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBackground>
              User
            </Navbar.Item>
            <Navbar.Item active={true} hasBackground>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Privileges
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Security
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </Layout.Header>

      <Layout.Split style={{flexDirection: flexDirection}}>
        <Layout.Slider style={{background: '#000'}} collapse={collapse}>
          {getMenu(leftPosition, collapse)}
        </Layout.Slider>

        <Layout style={{padding: '0 2rem'}}>
          <Breadcrumb style={{margin: '0.5rem 0'}}>
            <Breadcrumb.Item>
              <IconHome style={{fontSize: '1.25em'}}/>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Main
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Application
            </Breadcrumb.Item>
          </Breadcrumb>

          <Layout.Content style={{
            background: '#fff',
            minHeight: '15rem',
            padding: '1rem',
          }}>
            Your Content
          </Layout.Content>
        </Layout>
      </Layout.Split>
      <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
        <span>react-windy-ui ©2020 All rights reserved</span>
      </Layout.Footer>
    </div>
  </>;
}
```
[Layout4_END_zh_CN]

[Layout4_BEGIN_en_US]
[Layout4_END_en_US]
----------------------------------
[Layout5_BEGIN_zh_CN]
### 示例5 将Header固定在顶部
<DemoDesc title="提示">
  将<Code>Layout.Header</Code>的属性<Code>fixed</Code>设置为<Code>top</Code>, <Code>Header</Code>就可以固定在顶部显示。
  <Code>fixed</Code>的值可以设置成<Code>top</Code>或<Code>bottom</Code>。
</DemoDesc>


```jsx
import React from 'react';
import {Breadcrumb, IconHome, IconList, Layout, Navbar} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Layout5() {
  return <>
    <DocFrame width="100%" height='350px'>
      <Layout>
        <Layout.Header fixed="top">

          <Navbar type="primary"
                  hasBorder={false}
                  extraClassName="clear-radius">
            <Navbar.Title>
              <Navbar.Switch>
                <IconList/>
              </Navbar.Switch>
              <span>Navbar</span>
            </Navbar.Title>
            <Navbar.List>
              <Navbar.Item hasBackground>
                User
              </Navbar.Item>
              <Navbar.Item active={true} hasBackground>
                Role
              </Navbar.Item>
              <Navbar.Item hasBackground>
                Privileges
              </Navbar.Item>
              <Navbar.Item hasBackground>
                Security
              </Navbar.Item>
            </Navbar.List>
          </Navbar>

        </Layout.Header>
        <Layout
            style={{
              marginTop: '4rem',
              background: '#f8f9fa',
              padding: '0 2rem',
            }}>
          <Breadcrumb style={{margin: '0.5rem 0'}}>
            <Breadcrumb.Item>
              <IconHome style={{fontSize: '1.25em'}}/>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Main
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Application
            </Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content
              style={{
                background: '#fff',
                padding: '0 1rem',
                marginBottom: '1rem',
              }}>
            <div style={{height: '500px'}}>
              Your Content<br/>
            </div>
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
          <span>react-windy-ui ©2020 All rights reserved</span>
        </Layout.Footer>
      </Layout>

    </DocFrame>
  </>;
}
```
[Layout5_END_zh_CN]

[Layout5_BEGIN_en_US]
[Layout5_END_en_US]
----------------------------------
[Layout6_BEGIN_zh_CN]
### 示例6 固定左侧的Slider
<DemoDesc title="提示">
  这里通过设置<Code>Slider</Code>的<Code>style</Code>属性将Slider固定在左边显示，同时与Content区域一样在内容高度超出时，允许各自滚动展示。
  在需要折叠Slider时，可以设置Slider、右侧Layout的<Code>collapse</Code>属性，将其折叠或展开。另外，Slider默认在折叠状态时宽度为<Code>80px</Code>, 如果需要设置为<Code>0</Code>时，
  则需要将Slider的<Code>minWidth</Code>设置为<Code>‘0px'</Code>即可。当Slider展开时，右侧Layout默认<Code>margin-left</Code>的值为<Code>240px</Code>, 
  如果需要修改，则需要提供一个<Code>collapseAttribute</Code>配置对象进行调整。
</DemoDesc>


```jsx
import React, {useState} from 'react';
import {
  Breadcrumb,
  Button,
  IconHome,
  IconList,
  Layout,
  Menu,
} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

function getMenu(collapse) {
  return <Menu defaultOpenedMenus={['sub1', 'sub3']}
               hasBox={false}
               compact={collapse}
               type="dark">
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
  </Menu>;
}

const collapseAttribute = {
  attr: 'marginLeft',
  minValue: '0px',
  maxValue: '240px',
};

export default function Layout6() {
  const [collapse, setCollapse] = useState(false);

  return <>
    <DocFrame width="100%" height='330px'>
      <div style={{background: '#f5f6f7'}}>
        <Layout.Split>
          <Layout.Slider
              minWidth="0px"
              collapse={collapse}
              style={{
                background: '#000',
                position: 'fixed',
                height: '100%',
                overflowY: 'auto',
                left: 0,
                top: 0,
              }}>
            <h2 style={{
              textAlign: 'center',
              color: 'white',
              padding: '1rem 0',
            }}>Web Title</h2>
            {getMenu(collapse)}
          </Layout.Slider>

          <Layout collapseAttribute={collapseAttribute} collapse={!collapse}
                  style={{padding: '0 2rem', overflowY: 'auto'}}>
            <Breadcrumb style={{margin: '0.5rem 0'}}>
              <Breadcrumb.Item>
                <Button size="small" extraClassName="clear-border"
                        onClick={() => setCollapse(pre => !pre)}>
                  <IconList/>
                </Button>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <IconHome style={{fontSize: '1.25em'}}/>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Main
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Application
              </Breadcrumb.Item>
            </Breadcrumb>

            <Layout.Content style={{
              background: '#fff',
              minHeight: '15rem',
              padding: '1rem',
            }}>
              Your Content
            </Layout.Content>
            <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
              <span>react-windy-ui ©2020 All rights reserved</span>
            </Layout.Footer>
          </Layout>
        </Layout.Split>

      </div>
    </DocFrame>
  </>;
}
```
[Layout6_END_zh_CN]

[Layout6_BEGIN_en_US]
[Layout6_END_en_US]
----------------------------------