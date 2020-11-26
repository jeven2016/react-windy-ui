----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 卡片 Card
通常可在Card中放置文字、图片等内容，是应用最广泛的容器类组件之一。

- Card由Header, Body, Row, Footer四个组件组成，可按需组合
- 可利用Card去布局，将页面大段的内容归到Card中展示
- 可制作图片墙、名片等组件

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API

- 下列对象存在相同的属性定义：    
 <Code>Header</Code>, <Code>Body</Code>, <Code>Row</Code>, <Code>Footer</Code>, <Code>OverlayTitle</Code>,
 <Code>CardImage</Code>。



| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string |  |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| justify | 指定列在水平方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code>、<Code>around</Code>、<Code>between</Code>、<Code>evenly</Code> |
| align | 指定列在垂直方向的排列方式 | string | start | 值可以是: <Code>start</Code>、<Code>center</Code>、<Code>end</Code> |


- <Code>Image</Code>的属性定义：    
   Image对应于html中的<img/>对象，所有可配置的属性都可应用在Image对象中

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | img |  |
| extraClassName | 额外添加的样式名称 | string | - |  |

- <Code>Card</Code>的属性定义：    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | img |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| block |  | boolean | false |  |
| autoScale | 是否可以自动缩放 | boolean | false |  |
| hasBorder | 是否有边框 | boolean | false |  |
| hasBox | 是否显示阴影 | boolean | true |  |



[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Card1_BEGIN_zh_CN]
### 示例1 背景和边框  

<DemoDesc title="提示">
    将<Code>hasBorder</Code>属性设置为<Code>true</Code>后，将显示边框；<Code>hasBox</Code>
    设置为<Code>true</Code>后，将会提供一个灰色投影。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Card, Toggle} from 'react-windy-ui';

export default function Card1() {
  const [hasBorder, enableBorder] = useState(false);
  const [hasBox, enableBox] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasBorder} onChange={val => enableBorder(val)}
              content={{on: 'Border', off: 'Border'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={val => enableBox(val)}
              content={{on: 'Box shadow', off: 'Box shadow'}}/>
    </div>

    <Card hasBox={hasBox} hasBorder={hasBorder}>
      <Card.Header>
        Header
      </Card.Header>
      <Card.Body>
        Body
      </Card.Body>
      <Card.Row>
        Row
      </Card.Row>
      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  </>;
}
```
[Card1_END_zh_CN]

[Card1_BEGIN_en_US]
[Card1_END_en_US]
----------------------------------
[Card2_BEGIN_zh_CN]
### 示例2 Header的背景色  

<DemoDesc title="提示">
    将<Code>Header</Code>的<Code>hasBackground</Code>属性设置为<Code>true</Code>后, 将会显示灰色
    的背景。
</DemoDesc>

```jsx
import React from 'react';
import {Card} from 'react-windy-ui';
 
 export default function Card2() {
   return <>
     <Card>
       <Card.Header hasBackground>
         Header
       </Card.Header>
       <Card.Body>
         Body
       </Card.Body>
       <Card.Row>
         Row
       </Card.Row>
       <Card.Footer>
         Footer
       </Card.Footer>
     </Card>
   </>;
 }
```
[Card2_END_zh_CN]

[Card2_BEGIN_en_US]
[Card2_END_en_US]
----------------------------------
[Card3_BEGIN_zh_CN]
### 示例3 分隔条

<DemoDesc title="提示">
    各个内容区域之间如果需要添加分隔条，则可以在中间放置<Code>Divider</Code>组件，这样会展示一个水平横条。
</DemoDesc>

```jsx
import React from 'react';
import {Card, Divider} from 'react-windy-ui';

export default function Card3() {
  return <>
    <Card>
      <Card.Header>
        Header
      </Card.Header>
      <Divider/>
      <Card.Body>
        Body
      </Card.Body>
      <Divider/>
      <Card.Row>
        Row
      </Card.Row>
      <Divider/>
      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  </>;
}
```
[Card3_END_zh_CN]

[Card3_BEGIN_en_US]
[Card3_END_en_US]
----------------------------------
[Card4_BEGIN_zh_CN]
### 示例4 卡片

<DemoDesc title="提示">
    一个卡片的示例，通常你可以使用Header, Body, Footer三个组件即可。
</DemoDesc>

```jsx
import React from 'react';
import {Button, ButtonGroup, Card} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMailBulk,
  faPhone,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';

export default function Card4() {
  return <>
    <Card>
      <Card.Header>
        <h2 className="text color-dark">
          <FontAwesomeIcon icon={faUmbrella} style={{marginRight: '0.5rem'}}/>
          <span>Tomato</span>
        </h2>
        <h5 className="text comment">This article is about the plant and the
          fruit.</h5>
      </Card.Header>
      <Card.Body extraClassName="text color-dark">
        The tomato is the edible, often red, berry of the plant Solanum
        lycopersicum, commonly known as a tomato plant.
      </Card.Body>
      <Card.Footer>
        <ButtonGroup block>
          <Button style={{width: '50%'}} color="green">
            <FontAwesomeIcon icon={faPhone} style={{marginRight: '0.5rem'}}/>
            Phone
          </Button>
          <Button style={{width: '50%'}} color="blue">
            <FontAwesomeIcon icon={faMailBulk}
                             style={{marginRight: '0.5rem'}}/>
            Mail
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  </>;
}
```
[Card4_END_zh_CN]

[Card4_BEGIN_en_US]
[Card4_END_en_US]
----------------------------------
[Card5_BEGIN_zh_CN]
### 示例5 在卡片Footer中放置其他组件

<DemoDesc title="提示">
    一个卡片的示例，您还可以在Footer放置其他组件。
</DemoDesc>

```jsx
import React from 'react';
import {Button, Card, Dropdown} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUmbrella} from '@fortawesome/free-solid-svg-icons';

export default function Card5() {
  return <>
    <Card>
      <Card.Row>
        <h2 className="text color-blue">
          <FontAwesomeIcon icon={faUmbrella} style={{marginRight: '0.5rem'}}/>
          <span>Tomato</span>
        </h2>
        <h5 className="text comment">This article is about the plant and the
          fruit.</h5>
      </Card.Row>
      <Card.Body>
        The tomato is the edible, often red, berry of the plant Solanum
        lycopersicum, commonly known as a tomato plant.
      </Card.Body>
      <Card.Footer>
        <Dropdown position="rightBottom" title={<Button outline color="dark"
                                                        extraClassName="clear-border">
          Phone
        </Button>}>
          <Dropdown.Menu>
            <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
            <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
            <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
            <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button outline color="blue" style={{marginLeft: '1rem'}}
                extraClassName="clear-border">
          Action
        </Button>

      </Card.Footer>
    </Card>
  </>;
}
```
[Card5_END_zh_CN]

[Card5_BEGIN_en_US]
[Card5_END_en_US]
----------------------------------
[Card6_BEGIN_zh_CN]
### 示例6 图片卡片

<DemoDesc title="提示">
    在卡片中可以只放置一个图片，添加一个<Code>Card.Image</Code>并指定<Code>src</Code>为某个图片即可。
</DemoDesc>

```jsx
import React from 'react';
import {Card, Tooltip} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card6() {
  return <>
    <Tooltip body="一个最简单的,只有图片的卡片">
      <Card style={{width: "15rem"}}>
        <Card.CardImage>
          <Card.Image src={pic}/>
        </Card.CardImage>
      </Card>
    </Tooltip>
  </>;
}
```
[Card6_END_zh_CN]

[Card6_BEGIN_en_US]
[Card6_END_en_US]
----------------------------------
[Card7_BEGIN_zh_CN]
### 示例7 图片卡片

<DemoDesc title="提示">
    通常还需要给图片添加一段标题和文字描述，此时可以添加一个<Code>Card.OverlayTitle</Code>。
</DemoDesc>

```jsx
import React from 'react';
import {Card} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card7() {
  return <>
    <Card style={{width: "15rem"}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h4>A Picture</h4>
          <h5>The description for this picture</h5>
        </Card.OverlayTitle>
      </Card.CardImage>
    </Card>
  </>;
}
```
[Card7_END_zh_CN]

[Card7_BEGIN_en_US]
[Card7_END_en_US]
----------------------------------
[Card8_BEGIN_zh_CN]
### 示例8 图片卡片

<DemoDesc title="提示">
    您还可以将<Code>Header</Code>, <Code>CardImage</Code>, <Code>OverlayTitle</Code>结合起来使用。另外您还可以将<Code>Row</Code>, <Code>Col</Code>引入
    用于布局，在这个例子中Header就使用了这两个组件去布局。
</DemoDesc>

```jsx
import React from 'react';
import {Button, Card, Col, Dropdown, Row} from 'react-windy-ui';
import pic from './girl1.jpg';
import {faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Card8() {
  return <>
    <Card style={{width: '15rem'}}>
      <Card.Header>
        <Row>
          <Col xs={9}><h4 className="text color-primary">Star</h4></Col>
          <Col justify="end">
            <Dropdown position="bottomRight" title={<Button size="small" outline color="blue"
                                                            extraClassName="clear-border">
              <FontAwesomeIcon icon={faListUl}/>
            </Button>}>
              <Dropdown.Menu>
                <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
                <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
                <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
                <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

      </Card.Header>
      <Card.CardImage autoScale={true}>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Footer>
        <h4>Picture from pixabay.com </h4>
        <h5 className="text comment">
          Need more information......
        </h5>
      </Card.Footer>
    </Card>
  </>;
}
```
[Card8_END_zh_CN]

[Card8_BEGIN_en_US]
[Card8_END_en_US]
----------------------------------
[Card9_BEGIN_zh_CN]
### 示例9 卡片背景色

<DemoDesc title="提示">
    您可以使用提供的背景色样式去设置Card的背景，只需要给Card设置extraClassName属性即可。当然也可以通过
    Card的style去设置背景色。
    
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Button, Card, Col, Dropdown, Row, Select} from 'react-windy-ui';
import pic from './girl1.jpg';
import {faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Card9() {
  const [bg, setBg] = useState('bg-color-pink');
  return <>
    <div className="doc doc-row">
      <Select value={bg} onSelect={value => setBg(value)}
              popupStyle={{height: '20rem', overflow: 'auto'}}>
        <Select.Option value="bg-color-pink">pink</Select.Option>
        <Select.Option value="bg-color-blue">blue</Select.Option>
        <Select.Option value="bg-color-brown">brown</Select.Option>
        <Select.Option value="bg-color-black">black</Select.Option>
        <Select.Option value="bg-color-cyan">cyan</Select.Option>
        <Select.Option value="bg-color-dark">dark</Select.Option>
      </Select>
    </div>

    <Card style={{width: '15rem'}}
          extraClassName={`${bg} text color-white`}>
      <Card.Header>
        <Row>
          <Col xs={9}><h4>Star</h4></Col>
          <Col justify="end">
            <Dropdown position="bottomRight"
                      title={<Button size="small" outline color="red"
                                     extraClassName="text color-white clear-border">
                        <FontAwesomeIcon icon={faListUl}/>
                      </Button>}>
              <Dropdown.Menu>
                <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
                <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
                <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
                <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

      </Card.Header>
      <Card.CardImage>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Footer>
        <Button outline color="blue" style={{marginRight: '1rem'}}
                extraClassName="clear-border text color-white">
          Action1
        </Button>
        <Button outline color="blue"
                extraClassName="clear-border text color-white">
          Action2
        </Button>
      </Card.Footer>
    </Card>
  </>;
}
```
[Card9_END_zh_CN]

[Card9_BEGIN_en_US]
[Card9_END_en_US]
----------------------------------
[Card10_BEGIN_zh_CN]
### 示例10 使用Grid布局

<DemoDesc title="提示">
    您可以使用Grid中的组件去布局，<Code>Row</Code>和<Code>Col</Code>非常适用于有左右之分的布局场景。
</DemoDesc>

```jsx
import React from 'react';
import {Button, Card, Col, Divider, Row} from 'react-windy-ui';
import pic from './m.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBusAlt,
  faMailBulk,
  faPhone,
  faPlane,
  faWineGlassAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Card10() {
  return <>
    <Card style={{width: '15rem'}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Star</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Row>
        <Row align="center" justify="center" style={{margin: '.5rem 0'}}>
          <Col
              extraClassName="flex-adjust align-center justify-center text color-blue">
            <FontAwesomeIcon icon={faWineGlassAlt}/>
          </Col>

          <Col xs={10}>
            <div>Who's she?</div>
            <h5 className="text comment">The description ........</h5>
          </Col>
        </Row>

        <Row align="center" justify="center" style={{margin: '.5rem 0'}}>
          <Col
              extraClassName="flex-adjust align-center justify-center text color-blue">
            <FontAwesomeIcon icon={faBusAlt}/></Col>
          <Col xs={10}>
            <div>How to get to there?</div>
            <h5 className="text comment">The description ........</h5>
          </Col>
        </Row>
      </Card.Row>

      <Divider/>

      <Card.Footer>
        <Row>
          <Col justify="center">
            <Button circle outline color="blue"
                    extraClassName="clear-border">
              <FontAwesomeIcon icon={faPhone}/>
            </Button>
          </Col>
          <Col justify="center">
            <Button circle outline color="blue"
                    extraClassName="clear-border">
              <FontAwesomeIcon icon={faMailBulk}/>
            </Button>
          </Col>
          <Col justify="center">
            <Button circle outline color="blue"
                    extraClassName="clear-border">
              <FontAwesomeIcon icon={faPlane}/>
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  </>;
}
```
[Card10_END_zh_CN]

[Card10_BEGIN_en_US]
[Card10_END_en_US]
----------------------------------
[Card11_BEGIN_zh_CN]
### 示例11 图片墙

<DemoDesc title="提示">
    您可以使用Grid将一组Card放置在一起排列，达成图片墙的效果。这里每个<Code>Col</Code>都尝试平均分配空间，当窗口宽度发生变化，例如宽度变小并达到xs列宽度
    时每个Card就会占据整行显示。
</DemoDesc>

```jsx
import React from 'react';
import {Card, Col, Row} from 'react-windy-ui';
import pic from './girl1.jpg';

const ColStyle = {
  minWidth: '10rem',
  maxWidth: '10rem',
  margin: ' .5rem',
};

const MyCard = function() {
  return <>
    <Card block autoScale={true}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
    </Card>
  </>;
};

export default function Card11() {
  return <>
    <Row>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
    </Row>
  </>;
}
```
[Card11_END_zh_CN]

[Card11_BEGIN_en_US]
[Card11_END_en_US]
----------------------------------
[Card12_BEGIN_zh_CN]
### 示例11 缩放效果

<DemoDesc title="提示">
    对于<Code>Card</Code>、<Code>CardImage</Code>，其都有<Code>autoScale</Code>属性。
    将该属性设置为<Code>true</Code>后，当捕捉到鼠标移入、移出时，展现缩放效果。
</DemoDesc>

```jsx
import React from 'react';
import {Card} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card12() {
  return <>
    <Card block autoScale style={{width: '15rem'}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
    </Card>
  </>;
}
```
[Card12_END_zh_CN]

[Card12_BEGIN_en_US]
[Card12_END_en_US]
----------------------------------
[Card13_BEGIN_zh_CN]
### 示例13 显示加载状态

<DemoDesc title="提示">
    当<Code>Card</Code>的中的内容需要异步加载并在加载完成之前显示等待状态时，可以使用一个<Code>Loader</Code>将该Card包裹起来。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Card, Loader, Toggle} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card13() {
  const [showMask, enableMask] = useState(true);
  const [active, setActive] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={showMask} onChange={val => enableMask(val)}
              content={{on: 'Dark Mask', off: 'Dark Mask'}}/>
    </div>
    <div style={{width: '15rem'}}>
      <Loader type="primary" color="blue"
              darkMask={showMask}
              active={active}
              block>
        <Card block>
          <Card.CardImage autoScale>
            <Card.Image src={pic}>
            </Card.Image>
            <Card.OverlayTitle>
              <h2>A Picture</h2>
              <h6>The description for this picture</h6>
              <h6>The description for this picture</h6>
            </Card.OverlayTitle>
          </Card.CardImage>
        </Card>
      </Loader>
    </div>
  </>;
}
```
[Card13_END_zh_CN]

[Card13_BEGIN_en_US]
[Card13_END_en_US]
----------------------------------