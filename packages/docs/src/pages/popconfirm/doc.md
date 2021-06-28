----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 确认 PopConfirm  
弹出确认弹出框，在当前页面额外弹出一个小框体，提示用户确认操作。  

- 与Modal相比，在页面占用更小的空间
- 提供了一个快捷的确认弹出框
- 不打断用户的关注焦点，从而提供更好的操作体验

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]   
  
## API   

- <Code>PopConfirm</Code>属性定义:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| body | 描述内容 | react node | - |  |
| okText | OK按钮上的文字 | string | Ok |  |
| cancelText | No按钮上的文字 | string | No |  |
| okButtonProps | OK按钮的属性 | object |   |  |
| cancelButtonProps | cancel按钮的属性 | object |   |  |
| onOk | 点击OK按钮后的回调 | function |   |  |
| onCancel | 点击No按钮后的回调 | function |   |  |
| icon | 图标 | react node |  IconWarning2 |  |
| justifyFooter | 按钮的排列方式 | string |   |  |
| position | 弹出框的位置 | string | 参见下面详细描述  |  |

<Blockquote>
    
对于<Code>justifyFooter</Code>属性，可以配置以下值： 
          
<Hcode>start, end, center, around, between, evenly</Hcode>  

对于<Code>position</Code>属性，可以配置以下值：     
      
<Hcode>top, topLeft, topRight, bottom, bottomLeft, bottomRight,
left, leftTop, leftBottom, right, rightTop, rightBottom</Hcode>  
   
</Blockquote>

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Pc1_BEGIN_zh_CN]
### 示例1 简单示例
<DemoDesc title="提示">
   将支持点击的控件放置在<Code>PopConfirm</Code>中，点击后将会出现确认弹出框。
</DemoDesc>


```jsx
import React from "react";
import {Button, PopConfirm} from 'react-windy-ui';

export default function Pc1() {
  return <PopConfirm body="Are you sure to delete?">
    <Button outline color="green">Confirm</Button>
  </PopConfirm>
}
```
[Pc1_END_zh_CN]

[Pc1_BEGIN_en_US]
[Pc1_END_en_US]
----------------------------------
[Pc2_BEGIN_zh_CN]
### 示例2 按钮点击处理
<DemoDesc title="提示">
   提供onOk、onCancel回调函数，点击确认框按钮后处理对应的事件。
</DemoDesc>


```jsx
import React from "react";
import {Button, Notification, PopConfirm} from 'react-windy-ui';

export default function Pc2() {
  const onOk = () => {
    Notification.mini({body: "You clicked 'OK' button.", position: 'topCenter'})
  }

  const onCancel = () => {
    Notification.mini({body: "You clicked 'No' button.", position: 'topCenter'})
  }

  return <PopConfirm body="Are you sure to delete?" onOk={onOk}
                     onCancel={onCancel}>
    <Button color="red">Delete</Button>
  </PopConfirm>
}
```
[Pc2_END_zh_CN]

[Pc2_BEGIN_en_US]
[Pc2_END_en_US]
----------------------------------
[Pc3_BEGIN_zh_CN]
### 示例3 自定义按钮文字及图标
<DemoDesc title="提示">
   设置<Code>okText</Code>、<Code>cancelText</Code>属性，将在对按钮上显示对应的文字。如果需要更改图标，则可以设置<Code>icon</Code>属性。
</DemoDesc>


```jsx
import React from "react";
import {Button, IconCalendar, Notification, PopConfirm} from 'react-windy-ui';

export default function Pc3() {
  const onOk = () => {
    Notification.mini({body: "You clicked 'OK' button.", position: 'topCenter'})
  }

  const onCancel = () => {
    Notification.mini({body: "You clicked 'No' button.", position: 'topCenter'})
  }

  return <PopConfirm body="Are you sure to delete?" onOk={onOk}
                     icon={<IconCalendar style={{color: 'red'}}/>}
                     onCancel={onCancel} okText="确 定" cancelText="取 消">
    <Button color="red">Delete</Button>
  </PopConfirm>
}
```
[Pc3_END_zh_CN]

[Pc3_BEGIN_en_US]
[Pc3_END_en_US]
----------------------------------
[Pc4_BEGIN_zh_CN]
### 示例4 设置按钮的对齐方式
<DemoDesc title="提示">
   设置<Code>justifyFooter</Code>属性，则可控制按钮在水平方向的排列方式。默认情况下，按钮靠右排列。这里只示例了左中右三个方向，
   具体可设置的值请参阅API。
</DemoDesc>


```jsx
import React, {useState} from "react";
import {Button, PopConfirm, Select} from 'react-windy-ui';

export default function Pc4() {
  const [justifyFooter, setJustify] = useState("end");

  return <>
    <div className="doc doc-row">
      <span style={{
        marginRight: '1rem',
        fontWeight: '600'
      }}>Justify Footer:</span>

      <Select defaultValue="end"
              onSelect={(value) => setJustify(value)}>
        <Select.Option value="start">start</Select.Option>
        <Select.Option value="center">center</Select.Option>
        <Select.Option value="end">end</Select.Option>
      </Select>
    </div>

    <PopConfirm body="Are you sure to delete?" justifyFooter={justifyFooter}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>
}
```
[Pc4_END_zh_CN]

[Pc4_BEGIN_en_US]
[Pc4_END_en_US]
----------------------------------
[Pc5_BEGIN_zh_CN]
### 示例5 设置弹出框的位置
<DemoDesc title="提示">
   设置<Code>position</Code>属性，则可控制弹出框显示的位置。position属性可设置的值，请参阅<Code>Popover</Code>的API。
</DemoDesc>


```jsx
import React, {useState} from "react";
import {Button, PopConfirm, Select} from 'react-windy-ui';

export default function Pc5() {
  const [position, setPosition] = useState("topRight");

  return <>
    <div className="doc doc-row">
      <span style={{
        marginRight: '1rem',
        fontWeight: '600'
      }}>Position:</span>

      <Select defaultValue="topRight"
              onSelect={(value) => setPosition(value)}>
        <Select.Option value="topRight">TopRight</Select.Option>
        <Select.Option value="topLeft">TopLeft</Select.Option>
        <Select.Option value="top">Top</Select.Option>
        <Select.Option value="right">Right</Select.Option>
      </Select>
    </div>

    <PopConfirm body="Are you sure to delete?" position={position}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>;
}
```
[Pc5_END_zh_CN]

[Pc5_BEGIN_en_US]
[Pc5_END_en_US]
----------------------------------
[Pc6_BEGIN_zh_CN]
### 示例6 自定义弹出框、按钮的props属性
<DemoDesc title="提示">
    由于<Code>PopConfirm</Code>内部使用了<Code>Popover</Code>组件，你可以直接将<Code>Popover</Code>的<Code>props</Code>属性直接设置在<Code>PopConfirm上</Code>。比如这里的
    <Code>position</Code>、<Code>offset</Code>、<Code>hasBorder</Code>、<Code>hasArrow</Code>、<Code>hasBox</Code>都是<Code>Popover</Code>上的属性。如果需要设置两个按钮的<Code>props</Code>属性，
    则可以配置<Code>okButtonProps</Code>、<Code>cancelButtonProps</Code>。
</DemoDesc>


```jsx
import React from 'react';
import {Button, PopConfirm} from 'react-windy-ui';

export default function Pc6() {

  return <>
    <PopConfirm body="Are you sure to delete?"

                // Popover's props
                position="right"
                offset={6}
                hasBorder={true}
                hasArrow={false}
                hasBox={false}

                // Button's props
                okButtonProps={{
                  outline: true,
                  color: 'purple',
                }}
                cancelButtonProps={{
                  outline: true,
                  color: 'teal',
                }}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>;
}
```
[Pc6_END_zh_CN]

[Pc6_BEGIN_en_US]
[Pc6_END_en_US]
----------------------------------