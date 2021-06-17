----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 面包屑Breadcrumb 
Breadcrumb组件常用来显示当前页面所处的层级位置，允许用户切换导航地址。

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API

- <Code>Breadcrumb</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - |  |
| className | 样式名称 | string | breadcrumb |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| hasBackground | 是否有背景 | boolean | false |  |
| separator | 分隔符 | react node | - |  |

- <Code>Item</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - |  |
| className | 样式名称 | string | breadcrumb |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| active | 是否显示激活状态 | boolean | false |  |



[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Bc1_BEGIN_zh_CN]
### 示例1 简单示例

<DemoDesc title="提示">
 面包屑组件由<Code>Breadcrumb</Code>与<Code>Breadcrumb.Item</Code>两部分组成，
 通常将最后一个Item的<Code>active</Code>属性设置为<Code>true</Code>后，显示选中后的状态。
</DemoDesc>

```jsx
import React from 'react';
import {Breadcrumb, IconHome} from 'react-windy-ui';

export default function Bc1() {
  return <>
    <Breadcrumb>
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}
```

[Bc1_END_zh_CN]

[Bc1_BEGIN_en_US]
[Bc1_END_en_US]
----------------------------------
[Bc2_BEGIN_zh_CN]
### 示例2 背景色

<DemoDesc title="提示">
    将<Code>hasBackground</Code>设置为true后，会显示一个灰色背景。
</DemoDesc>

```jsx
import React from 'react';
import {Breadcrumb, IconHome} from 'react-windy-ui';

export default function Bc2() {
  return <>
    <Breadcrumb hasBackground>
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}
```

[Bc2_END_zh_CN]

[Bc2_BEGIN_en_US]
[Bc2_END_en_US]
----------------------------------
[Bc3_BEGIN_zh_CN]
### 示例3 使用不同的分隔符

<DemoDesc title="提示">
    如果需要使用不同的分隔符，可以设置将<Code>separator</Code>属性。
</DemoDesc>

```jsx
import React from 'react';
import {Breadcrumb, IconHome} from 'react-windy-ui';

export default function Bc3() {
  return <>
    <Breadcrumb hasBackground separator=">">
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb hasBackground separator=":">
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}
```

[Bc3_END_zh_CN]

[Bc3_BEGIN_en_US]
[Bc3_END_en_US]
----------------------------------
[Bc4_BEGIN_zh_CN]
### 示例4 结合其他组件使用

<DemoDesc title="提示">
    Breadcrumb的<Code>Item</Code>可以与其他组件一起搭配使用，比如这里的例子就在Item中结合使用了
    <Code>Tooltip</Code>和<Code>Dropdown</Code>组件。
</DemoDesc>

```jsx
import React from 'react';
import {Breadcrumb, Dropdown, IconHome,Tooltip} from 'react-windy-ui';

export default function Bc4() {
  return <>
    <Breadcrumb separator="/">
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Tooltip body="menu description">Main</Tooltip>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Dropdown title={'Application'} activeBy="hover">
          <Dropdown.Menu>
            <Dropdown.Item>Menu Item1</Dropdown.Item>
            <Dropdown.Item>Menu Item2</Dropdown.Item>
            <Dropdown.Item>Menu Item3</Dropdown.Item>
            <Dropdown.Item>Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}
```

[Bc4_END_zh_CN]

[Bc4_BEGIN_en_US]
[Bc4_END_en_US]
----------------------------------