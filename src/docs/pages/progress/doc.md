----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 进度 Progress   
Progress组件通常在界面加载或分步配置中使用，可以提示用户当前进度或者提醒用户在请求返回前需要等待一段时间。
<br/>
<br/>

Progress组件, 其主要的功能主要有：   

- 显示一个进度条，并且显示当前进度
- 可在页面顶部显示全局进度条，可用于界面加载时的显示
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Progress的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | progress |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| active | 是否激活显示 | boolean | false |  |
| percentValue | 当前百分百进度值 | number | 0 | 值的范围是\[0, 100\]  |
| type | 类型 | string | info | 可以设置为: info、warning、ok、error  |
| hasStripe | 是否显示条纹效果 | boolean | false |  |
| hasAnimation | 是否显示动画效果 | boolean | false |  |
| top | 是否居顶显示 | boolean | false |  |
| hasContent | 是否在右侧显示进度值 | boolean | false |  |
| showLoading | 是否在进度条下方显示Loader | boolean | false |  |
| loaderType | Loader的类型 | string | secondary |  |
| loaderSize | Loader的大小 | string | small |  |
| style | progress的样式 | object | - |  |
| barStyle | progress当前进度横条的样式 | object | - |  |
| config | 对应不同进度下的显示配置 | Array({...}) | - | 格式如：<br/>\[{percentValue: 30, type: 'error', content: (p) => 'OK'}\] |

<br/>
<br/>

Progress全局方法：

| 方法 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| showTop | 显示Progress | object | - | 参数格式：{style, type, showLoading,...} ,其他参数可参见Progress的API |
| closeTop | 关闭Progress | - | - |  |


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Progress1_BEGIN_zh_CN]
### 示例1: 普通的Progress
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    有四种类型的Progress可供使用，对应的type可以设置为： info、ok、warning、error。当percentValue设置不同的
    整数值后，Progress的进度将以百分百值显示当前进度。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';

import {ButtonGroup, Button, Progress, Card} from 'react-windy-ui';

export default function Progress1() {
  const [value, setValue] = useState(30);
  const increment = 10;

  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </div>

    <Card>
      <Card.Body>
        <Progress percentValue={value} type="info"/>
        <Progress percentValue={value} type="ok"/>
        <Progress percentValue={value} type="warning"/>
        <Progress percentValue={value} type="error"/>
      </Card.Body>
    </Card>
  </>;

}
```

[Progress1_END_zh_CN]

[Progress1_BEGIN_en_US]
[Progress1_END_en_US]
----------------------------------
[Progress2_BEGIN_zh_CN]
### 示例2: 显示条纹和动画效果
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    为了更好的显示效果，您可以设置hasAnimation属性去展示动画效果。设置hasStripe属性可以在进度条上显示条纹效果。
    如果需要在右侧显示进度百分比，可以设置hasContent属性。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';

import {ButtonGroup, Button, Progress, Card, Checkbox} from 'react-windy-ui';

export default function Progress2() {
  const [value, setValue] = useState(30);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showStrip, setShowStrip] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </div>

    <div className="doc doc-row">
      <Checkbox onChange={val => setShowAnimation(val)}>Animation</Checkbox>
      <Checkbox onChange={val => setShowStrip(val)}>Striped</Checkbox>
      <Checkbox onChange={val => setShowContent(val)}>Content</Checkbox>
    </div>

    <Card>
      <Card.Row>
        <Progress percentValue={value} hasContent={showContent}
                  hasStripe={showStrip}
                  hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="info" hasContent={showContent}
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="ok" hasContent={showContent}
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="warning" hasContent={showContent}
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="error" hasContent={showContent}
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
      </Card.Row>
    </Card>

  </>;

}
```

[Progress2_END_zh_CN]

[Progress2_BEGIN_en_US]
[Progress2_END_en_US]
----------------------------------
[Progress3_BEGIN_zh_CN]
### 示例3: 全局显示的进度条
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    如果需要类似在页面顶部显示的全局进度条，可以将top属性设置为true。而且要在style中指定top值，以便进度条在
    顶部某处显示。另外当属性showLoading为true时，将会在进度条下面显示一个Loader。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';

import {Button, ButtonGroup, Progress, Toggle} from 'react-windy-ui';

export default function Progress3() {
  const [value, setValue] = useState(30);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={active} content={{on: 'Active', off: 'Active'}}
                onChange={(val) => setActive(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={loading} content={{on: 'Loading', off: 'Loading'}}
                onChange={(val) => setLoading(val)}/>
      </div>
    </div>
    <ButtonGroup>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </ButtonGroup>

    <Progress top
              active={active}
              percentValue={value}
              showLoading={loading}
              type="ok"
              style={{top: '0px'}}/>
  </>;

}
```

[Progress3_END_zh_CN]

[Progress3_BEGIN_en_US]
[Progress3_END_en_US]
----------------------------------
[Progress4_BEGIN_zh_CN]
### 示例4: Progress快捷使用
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Progress还提供了两个方法以程序调用方式去控制显示和关闭，这两个方法是: showTop()、closeTop()。
    当调用showTop后，进度条在页面顶端显示，并定时更新进度。当closeTop被调用时，进度条随后显示进度完成并从界面隐藏。
    initPercentValue指定了进度条初始百分百值，每次更新时进度值会在incrementStart和incrementEnd之间随机
    生成并递增一个新的进度值用于进度条的更新。
  </div>
</fieldset>


```jsx
import React from 'react';

import {Button, ButtonGroup, Progress} from 'react-windy-ui';

export default function Progress4() {

  const showTop = () => {
    Progress.showTop({
      progressStyle: {marginTop: '0px'},
      type: 'warning',

      //optional parameters
      // barStyle: {background: 'red'},
      showLoading: false,
      initPercentValue: 5,
      incrementStart: 2,
      incrementEnd: 4,
    });
  };

  const closeTop = () => {
    Progress.closeTop();
  };

  return <>
    <ButtonGroup>
      <Button onClick={showTop}>
        Show
      </Button>
      <Button onClick={closeTop}>
        Close
      </Button>
    </ButtonGroup>
  </>;

}
```

[Progress4_END_zh_CN]

[Progress4_BEGIN_en_US]
[Progress4_END_en_US]
----------------------------------
[Progress5_BEGIN_zh_CN]
### 示例5: 分段显示
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Progress可以在不同进度显示不同的颜色、文字。您可以在config数组中添加对应不同百分值下的配置信息。
  </div>
</fieldset>


```jsx
import React, {useState} from 'react';

import {Button, ButtonGroup, Progress, Card} from 'react-windy-ui';
import {IconError, IconOk, IconWarning} from '../../../../components/src';

export default function Progress5() {
  const [value, setValue] = useState(5);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </div>


    <Progress percentValue={value}
              hasAnimation={true}
              hasStripe={true}
              hasContent={true}
              config={[
                {
                  percentValue: 30,
                  type: 'error',
                  content: (p) => <IconError/>,
                },
                {
                  percentValue: 50,
                  type: 'warning',
                  content: (p) => <IconWarning/>,
                },
                {percentValue: 80, type: 'ok', content: (p) => <IconOk/>},
                {percentValue: 99, type: 'info', content: (p) => 'OK'},
                {percentValue: 100, type: 'ok', content: (p) => 'Completed!'},
              ]}/>
  </>;

}
```

[Progress5_END_zh_CN]

[Progress5_BEGIN_en_US]
[Progress5_END_en_US]
----------------------------------