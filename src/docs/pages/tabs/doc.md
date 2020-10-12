----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 选项卡 Tabs
Tabs常用来将多块内容区域分割开，按需切换显示，在布局上显得更紧凑、简洁。  

Tabs提供的功能主要有：  

- 提供多种类型的Tabs，并可在上下左右四个方位排队选项卡
- 支持Tab组件滚动切换并显示
- 支持选项卡的添加、删除

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API  

- <Code>Tabs</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tab |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：normal, card, secondaryCard |
| defaultActive | 默认激活选中的Item | string\|number | - | 对应TabItem的value |
| active | 当前激活选中的Item | string\|number | - | 当此属性设置后onChange回调会被调用，以便切换选中的TabItem |
| onChange | 当切换TabItem时的回调 | function | - |   |
| onRemove | 当删除某个TabItem时的回调 | function(value) | - |   |
| removable | 是否允许删除某个Tab | boolean | - |   |
| equalWidth | 是否每个TabItem等宽显示 | boolean | - |   |
| position | TabItem的显示位置 | string | top | 值可以是： top, bottom, left right   |
| hasBorder | 是否有边框 | boolean | true |    |
| cardBorder | TabItem显示为卡片时的边框 | string | 值可以是： none, one, full |    |
| scrollable | 是否允许内容超出时滚动显示 | boolean | true |    |


- <Code>TabItem</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tab-item |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | - |  |
| value | TabItem的值 | string\|number | - |  |
| removable | 是否允许删除 | boolean | - |  |

- <Code>TabPanel</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | - |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| itemValue | 对应的TabItem值 | string | - | 与TabItem的value一一对应 |

- <Code>Tab.Panels</Code>、<Code>Tab.Items</Code>为中间节点对象，不生成对应的DOM节点，因此没有对应的API

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Tabs1_BEGIN_zh_CN]
### 示例1: 简单示例
<DemoDesc title="提示">
 这里<Code>Tabs</Code>组件由三部分组成<Code>Tabs</Code>、<Code>Tabs.Items</Code>、 <Code>Tabs.Panels</Code>。
 您需要给每个TabItem指定一个唯一的值，同时
 添加一个对应的<Code>TabPanel</Code>。并且指定<Code>itemValue</Code>值与<Code>TabItem</Code>的值一致，这样当切换选项卡时，可以确保
 显示对应的<Code>TabPanel</Code>。
</DemoDesc>

```jsx
import React from 'react';
import {Tabs} from 'react-windy-ui';

export default function Tabs1() {
  return <>
    <Tabs onChange={(item)=> console.log(item)}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}

```

[Tabs1_END_zh_CN]

[Tabs1_BEGIN_en_US]
[Tabs1_END_en_US]
----------------------------------
[Tabs2_BEGIN_zh_CN]
### 示例2 等宽的TabItem
<DemoDesc title="提示">
    将<Code>equalWidth</Code>属性设置为<Code>true</Code>, TabItem将会以相同的宽度占据整行。
</DemoDesc>

```jsx
import React from 'react';
import {Tabs} from 'react-windy-ui';

export default function Tabs2() {
  return <>
    <Tabs equalWidth>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          Item3
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item3">
          <div>The panel for Item3</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}
```

[Tabs2_END_zh_CN]

[Tabs2_BEGIN_en_US]
[Tabs2_END_en_US]
----------------------------------
[Tabs3_BEGIN_zh_CN]
### 示例3 三种类型
<DemoDesc title="提示">
    有三种类型的Tabs可供选用，可以将type设置为<Code>normal</Code>、<Code>card</Code>、<Code>secondaryCard</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Select, Tabs, Toggle} from 'react-windy-ui';

export default function Tabs3() {
  const [type, setType] = useState('normal');
  const [equalWidth, setEqualWidth] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={equalWidth} onChange={val => setEqualWidth(val)}
              content={{on: 'Equal-width', off: 'Equal-width'}}/>
    </div>
    <div className="doc doc-row">
        <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
        <Select value={type} onSelect={value => setType(value)}>
          <Select.Option value="normal">normal</Select.Option>
          <Select.Option value="card">card</Select.Option>
          <Select.Option value="secondaryCard">secondaryCard</Select.Option>
        </Select>
    </div>

    <Tabs type={type} equalWidth={equalWidth}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          Item3
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item3">
          <div>The panel for Item3</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}
```

[Tabs3_END_zh_CN]

[Tabs3_BEGIN_en_US]
[Tabs3_END_en_US]
----------------------------------
[Tabs4_BEGIN_zh_CN]
### 示例4 可滚动的Tabs
<DemoDesc title="提示">
    当<Code>Tabs</Code>的内容过多，可在水平、垂直方向上滚动切换，此时只需要确保<Code>scrollable</Code>属性为true即可。
    另外如果要在垂直方向上滚动，您还需要给
    Tabs添加一个高度，以便只滚动显示部分的TabItem。通过<Code>position</Code>可以指定TabItem所在的位置，您可以设置为: <Code>top</Code>、
    <Code>bottom</Code>、<Code>left</Code>、<Code>right</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Select, Tabs, Toggle} from 'react-windy-ui';

export default function Tabs4() {
  const [type, setType] = useState('normal');
  const [equalWidth, setEqualWidth] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={equalWidth} onChange={val => setEqualWidth(val)}
              content={{on: 'Equal-width', off: 'Equal-width'}}/>
    </div>
    <div className="doc doc-row">
        <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
        <Select value={type} onSelect={value => setType(value)}>
          <Select.Option value="normal">normal</Select.Option>
          <Select.Option value="card">card</Select.Option>
          <Select.Option value="secondaryCard">secondaryCard</Select.Option>
        </Select>
    </div>

    <Tabs type={type} equalWidth={equalWidth}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          Item3
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item3">
          <div>The panel for Item3</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}
```

[Tabs4_END_zh_CN]

[Tabs4_BEGIN_en_US]
[Tabs4_END_en_US]
----------------------------------
[Tabs5_BEGIN_zh_CN]
### 示例5 删除TabItem
<DemoDesc title="提示">
    将<Code>removable</Code>属性设置为true后，可以删除对应的Tab。此时您还需要提供一个onRemove的实现，将对应的TabItem删除后，
    将新的TabItem列表数据在Tabs下显示。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Toggle, Tabs} from 'react-windy-ui';

const tabs = [...Array(10).keys()].map(
    i => ({key: i, value: i, title: `Item-${i}`, content: `Content-${i}`}
    ));

export default function Tabs5() {
  const [removable, setRemovable] = useState(true);

  const [tabConfig, setTabConfig] = useState({
    tabArray: tabs,
    active: 1,
  });

  const removeItem = (value) => {
    let nextActive = value === tabConfig.active
        ? value - 1
        : tabConfig.active;

    setTabConfig(
        pre => ({
          tabArray: pre.tabArray.filter(s => s.value !== value),
          active: nextActive,
        }));
  };

  const changeTab = (tabValue) => {
    setTabConfig(pre => ({tabArray: pre.tabArray, active: tabValue}));
  };

  return <>
    <div className="doc doc-row">
      <Toggle active={removable} onChange={val => setRemovable(val)}
              content={{on: 'Removable', off: 'Removable'}}/>
    </div>

    <Tabs
        type="secondaryCard"
        position="top"
        active={tabConfig.active}
        onChange={changeTab}
        scrollable={true}
        removable={removable}
        onRemove={removeItem}
        style={{maxHeight: '350px'}}>

      <Tabs.Items>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabItem value={tabSetting.value} key={tabSetting.key}>
                <span>{tabSetting.title}</span>
              </Tabs.TabItem>,
          )
        }
        <Tabs.TabItem value="add" removable={false}>
          +
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabPanel itemValue={tabSetting.value}
                             key={`panel-${tabSetting.value}`}>
                <div style={{
                  padding: '1rem',
                  minHeight: '10rem',
                }}>
                  {tabSetting.content}
                </div>
              </Tabs.TabPanel>,
          )
        }
      </Tabs.Panels>
    </Tabs>
  </>;
}
```

[Tabs5_END_zh_CN]

[Tabs5_BEGIN_en_US]
[Tabs5_END_en_US]
----------------------------------
[Tabs6_BEGIN_zh_CN]
### 示例6 卡片内嵌方式
<DemoDesc title="提示">
    通常可以将Tabs嵌入一个面板中，作为卡片的方式切换显示，此时则可以结合使用<Code>hasBorder</Code>和<Code>cardBorder</Code>属性。
    有三种类型的<Code>cardBorder</Code>可以使用： <Code>none</Code>, <Code>one</Code>, <Code>full</Code>。当为<Code>none</Code>时，
    TabItem选中时没有边框； 当为<Code>one</Code>时，只显示一条蓝色的边框；当为<Code>full</Code>时，显示所有的边框。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Tabs, Select, Toggle} from 'react-windy-ui';

const contentStyle = {
  minHeight: '200px',
  background: '#fff',
  padding: '1rem .5rem',
  borderRadius: '.25rem',
};

const containerStyle = {
  background: '#f7f5f5',
  padding: '1rem',
  borderRadius: '.25rem',
};

export default function Tabs6() {
  const [cardBorder, setCardBorder] = useState('none');
  const [tabBorder, setTabBorder] = useState(false);
  const [position, setPosition] = useState('top');

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Card Border:</span>
      <Select value={cardBorder} onSelect={value => setCardBorder(value)}>
        <Select.Option value="none">none</Select.Option>
        <Select.Option value="one">one</Select.Option>
        <Select.Option value="full">full</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row">
      <Toggle active={tabBorder} onChange={val => setTabBorder(val)}
              content={{on: 'Tabs Border', off: 'Tabs Border'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position} onSelect={value => setPosition(value)}>
        <Select.Option value="top">top</Select.Option>
        <Select.Option value="bottom">bottom</Select.Option>
        <Select.Option value="left">left</Select.Option>
        <Select.Option value="right">right</Select.Option>
      </Select>
    </div>

    <div style={containerStyle}>
      <Tabs position={position}
            equalWidth
            type="card"
            hasBorder={tabBorder}
            cardBorder={cardBorder}
            style={{margin: '0'}}>
        <Tabs.Items>
          <Tabs.TabItem value="Item1">
            Item1
          </Tabs.TabItem>
          <Tabs.TabItem value="Item2">
            Item2
          </Tabs.TabItem>
          <Tabs.TabItem value="Item3">
            Item3
          </Tabs.TabItem>
        </Tabs.Items>
        <Tabs.Panels>
          <Tabs.TabPanel itemValue="Item1">
            <div style={contentStyle}>The panel for Item1</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue="Item2">
            <div style={contentStyle}>The panel for Item2</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue="Item3">
            <div style={contentStyle}>The panel for Item3</div>
          </Tabs.TabPanel>
        </Tabs.Panels>
      </Tabs>
    </div>
  </>;
}
```

[Tabs6_END_zh_CN]

[Tabs6_BEGIN_en_US]
[Tabs6_END_en_US]
----------------------------------