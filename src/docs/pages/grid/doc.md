----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 删格 Grid  
Grid系统在响应式布局中占有不可或缺的地位，Windy-UI遵循了12列的定义，将页面均等分为12个区域用于布局。凭借flex-box强大的布局功能，
我们可以将页面元素有序地归类，并在不同宽度的窗口下展现不同的部分。如果需要划分更小的列，例如24列，则需要修改Wui的变量去重新生成一份新的样式文件(css)。
    
Grid主要有以下功能：  

- 使用Row和Col进行布局，row表示水平方向的整行，Col表示每个Row可以拆分的列  
- 支持某列固定宽度其他列均分剩余空间
- 支持响应式布局，在窗口不同宽度下更改列的宽度    
- 基于Flex 布局，列中的子元素可以指定水平对齐方式：居左、居中、居右等
- 支持列中的子元素顶部对齐、垂直居中、底部对齐的方式

对于屏幕宽度的划分，请参见API部分。
     
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API

- 依据Bootstrap的Grid设计，窗口从宽度上分为以下几例  

|  | Extra small | Small | Medium | Large | Extra large |  
| --- | --- | --- | --- | --- | --- |  
| 窗口宽度 | <576px | ≥576px | ≥768px  | ≥992px | ≥1200px  |
| 值的范围 | [0, 576) | [576, 768) |  [768,992) | [992,1200) | [1200, ..] |
| 对应样式 | <Code>.col-xs</Code> | <Code>.col-sm</Code> | <Code>.col-md</Code> | <Code>.col-lg</Code> | <Code>.col-xl</Code> |

- <Code>Row</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | row |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| justify | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align | 指定列在垂直方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code> |

- <Code>Col</Code>的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | - |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| col | 固定宽度下占据的列数 | number | - |  |
| xs | xs尺寸下占据的列数 | number | - |  |
| sm | sm尺寸下占据的列数 | number | - |  |
| md | md尺寸下占据的列数 | number | - |  |
| lg | lg尺寸下占据的列数 | number | - |  |
| xl | xl尺寸下占据的列数 | number | - |  |
| xsOffset | xsOffset尺寸下偏移的列数 | number | - |  |
| smOffset | smOffset尺寸下偏移的列数 | number | - |  |
| mdOffset | mdOffset尺寸下偏移的列数 | number | - |  |
| lgOffset | lgOffset尺寸下偏移的列数 | number | - |  |
| xlOffset | xlOffset尺寸下偏移的列数 | number | - |  |
| order | 顺序 | number | - | 值越小排列越靠前 |



[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Grid1_BEGIN_zh_CN]
### 示例1 固定宽度
<DemoDesc title="提示">
   设置<Code>col</Code>属性，将其设置为一个在1到12范围内的一个整数值后，该列将以固定宽度展示。
   列的宽度不会因为窗口宽度变化而变化。
</DemoDesc>

```jsx
import React from 'react';
import {Row, Col} from 'react-windy-ui';

export default function Grid1() {
  return <>
    <div className="doc sample-grid">
      <Row>
        <Col col={12}>col-12</Col>
      </Row>
      <Row>
        <Col col={6}>col-6</Col>
        <Col col={6}>col-6</Col>
      </Row>
      <Row>
        <Col col={4}>col-4</Col>
        <Col col={4}>col-4</Col>
        <Col col={4}>col-4</Col>
      </Row>
      <Row>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
      </Row>
    </div>
  </>;
}
```
[Grid1_END_zh_CN]

[Grid1_BEGIN_en_US]
[Grid1_END_en_US]
----------------------------------
[Grid2_BEGIN_zh_CN]
### 示例2 固定宽度
<DemoDesc title="提示">
   设置<Code>offset</Code>属性可以将列向右侧偏移。对于xs宽度布局，设置<Code>xsOffset={4}</Code> 则会将该列向右侧偏移 4 个列的宽度。
</DemoDesc>

```jsx
import React from 'react';
import {Row, Col} from 'react-windy-ui';

export default function Grid2() {
  return <>
    <div className="doc sample-grid">
      <Row>
        <Col xs={4}>col-4</Col>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
      <Row>
        <Col xs={3} xsOffset={3}>col-3</Col>
        <Col xs={3} xsOffset={3}>col-3</Col>
      </Row>
      <Row>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
    </div>
  </>;
}
```
[Grid2_END_zh_CN]

[Grid2_BEGIN_en_US]
[Grid2_END_en_US]
----------------------------------
[Grid3_BEGIN_zh_CN]
### 示例3 水平排列
<DemoDesc title="提示">
    通过<Code>Row</Code>的<Code>justify</Code>属性可以指定列在水平方向的排列方式，可以将其设置为：<Code>start</Code>、<Code>center</Code>、
    <Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code>。
</DemoDesc>

```jsx
import React from 'react';
import {Row, Col, Tooltip} from 'react-windy-ui';

export default function Grid3() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">
        <h5 className="text comment">justify="start"</h5>
        <Tooltip body='justify="start"'>
          <Row justify="start">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>

        <h5 className="text comment">justify="center"</h5>
        <Tooltip body='justify="center"'>
          <Row justify="center">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>

        <h5 className="text comment">justify="end"</h5>
        <Tooltip body='justify="end"'>
          <Row justify="end">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>

        <h5 className="text comment">justify="around"</h5>
        <Tooltip body='justify="around"'>
          <Row justify="around">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>
        <h5 className="text comment">justify="between"</h5>
        <Tooltip body='justify="between"'>
          <Row justify="between">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>

        <h5 className="text comment">justify="evenly"</h5>
        <Tooltip body='justify="evenly"'>
          <Row justify="evenly">
            <Col xs={5}>col-5</Col>
            <Col xs={5}>col-5</Col>
          </Row>
        </Tooltip>
      </div>
    </div>
  </>;
}
```
[Grid3_END_zh_CN]

[Grid3_BEGIN_en_US]
[Grid3_END_en_US]
----------------------------------
[Grid4_BEGIN_zh_CN]
### 示例4 垂直排列
<DemoDesc title="提示">
    通过<Code>Row</Code>的<Code>align</Code>属性可以指定列在垂直方向的排列方式，可以将其设置为：<Code>start</Code>、<Code>center</Code>、
    <Code>end</Code>。
</DemoDesc>

```jsx
import React from 'react';
import {Row, Col, Tooltip} from 'react-windy-ui';

export default function Grid4() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">

        <Tooltip body="justify='around' align='start'">
          <Row justify="around" align="start" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>

        <Tooltip body="justify='around' align='center'">
          <Row justify="around" align="center" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>
        <Tooltip body="justify='around' align='end'">
          <Row justify="around" align="end" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>

      </div>
    </div>
  </>;
}
```
[Grid4_END_zh_CN]

[Grid4_BEGIN_en_US]
[Grid4_END_en_US]
----------------------------------
[Grid5_BEGIN_zh_CN]
### 示例5 排序
<DemoDesc title="提示">
    通过<Code>order</Code>属性可以指定列的顺序，值越小排列越靠前。
</DemoDesc>

```jsx
import React from 'react';
import {Row, Col, Tooltip} from 'react-windy-ui';

export default function Grid5() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">
        <Row justify="around">
          <Tooltip body="order=3">
            <Col xs={3} order={3}>First</Col>
          </Tooltip>
          <Tooltip body="order=1">
            <Col xs={3} order={1}>Second</Col>
          </Tooltip>
          <Tooltip body="order=2">
            <Col xs={3} order={2}>Last</Col>
          </Tooltip>
        </Row>
      </div>
    </div>
  </>;
}
```
[Grid5_END_zh_CN]

[Grid5_BEGIN_en_US]
[Grid5_END_en_US]
----------------------------------
[Grid6_BEGIN_zh_CN]
### 示例6 响应式布局
<DemoDesc title="提示">
    针对响应式布局，提供了几种尺寸的属性可供使用： <Code>xs</Code>、<Code>sm</Code>、
    <Code>md</Code>、<Code>lg</Code>、<Code>xg</Code>。
    例如<Code>&lt;Col xs={12} sm={4}>sm-4&lt;/Col&gt;</Code>, 设定了当屏幕尺寸为<Code>xs</Code>
    时占据全部的12列宽度，当尺寸是<Code>sm</Code>时，只占据4列。
</DemoDesc>

```jsx
import React from 'react';
import {Col, Row, Tooltip} from 'react-windy-ui';

export default function Grid6() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">
        <Tooltip body="xs=12 sm=4">
          <Row>
            <Col xs={12} sm={4}>sm-4</Col>
            <Col xs={12} sm={4}>sm-4</Col>
            <Col xs={12} sm={4}>sm-4</Col>
          </Row>
        </Tooltip>

        <Row>
          <Col md={4}>md-4</Col>
          <Col md={4} mdOffset={4}>md-4</Col>
        </Row>

        <Row>
          <Col sm={4} smOffset={4}>sm-4</Col>
        </Row>

        <Tooltip
            body="xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={3} lgOffset={1}">
          <Row>
            <Col xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={6}
                 lgOffset={3}>
              Col
            </Col>
          </Row>
        </Tooltip>

      </div>
    </div>
  </>;
}
```
[Grid6_END_zh_CN]

[Grid6_BEGIN_en_US]
[Grid6_END_en_US]
----------------------------------

[Grid7_BEGIN_zh_CN]
### 示例7 等宽和固定某列固定一列宽度
<DemoDesc title="提示">
    在这个例子中：  
     当三个列同时使用<Code>&lt;Col/&gt;</Code>时，表示这三个列宽度相等; 
     当中间一列指定<Code>col={5}</Code>属性时，表示这列固定宽度为5列的宽度值，另外两个列等比例分配剩余空间;
     当中间一列指定<Code>col={10}</Code>属性时，表示这列固定宽度为10列的宽度值，另外两个列等比例分配剩余空间。
</DemoDesc>

```jsx
import React from 'react';
import {Col, Row} from 'react-windy-ui';

export default function Grid7() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">
        <Row>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Row>

        <Row>
          <Col>col</Col>
          <Col col={5}>col-5</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col>col</Col>
          <Col col={10}>col-10</Col>
          <Col>col</Col>
        </Row>
      </div>
    </div>
  </>;
}
```
[Grid7_END_zh_CN]

[Grid7_BEGIN_en_US]
[Grid7_END_en_US]
----------------------------------