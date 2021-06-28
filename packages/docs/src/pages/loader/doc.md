----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 加载 Loader
Loader常用于页面加载，也可在处理耗时较长的请求时，提示用户等待。

Loader主要提供了以下功能：
- 全局显示加载中状态
- 可嵌入Button或Input中
- 可包裹Card，Alert等组件，可用于在加载过程中缓冲显示


[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API
Loader的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | loader |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| text | 描述内容 | react node | - | 描述内容 |
| block | 是否占据整行显示 | boolean | false |  |
| color | 颜色 | string | blue | 当前可设置为: white, blue |
| active | 是否激活显示Loader | boolean | false | |
| type | 类型 | string | info | 值可以是：primary，secondary，third |
| size | Loader的大小 | string | medium | 值可以是：small，medium，large |
| hasMask | 是否有背景层 | boolean | true | |
| darkMask | 是否显示黑色的背景层 | boolean | true | |
| hasBackground | 是否有背景色 | boolean | true | |
| direction | Loader内容区域的排列方向 | string | vertical | 值可以设置为: horizontal, vertical |
| modalStyle | Loader对话框的样式对象 | object | - |  |
| global | 是否全局显示一个Loader  | boolean | - |  |
| onMaskClick | 点击背景层的回调  | function | - |  |
| hasDefaultWidth | Loader是否设置默认宽度  | boolean | true |  |
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Loader1_BEGIN_zh_CN]
### 示例1: Loader简单示例
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Loader简单示例，有三种类型的Loader可供使用, 可以将type属性设置为： primary、secondary、 third。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Loader, Toggle, Tooltip} from 'react-windy-ui';

export default function Loader1() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Tooltip body="primary">
        <Loader type="primary" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
      <Tooltip body="secondary">
        <Loader type="secondary" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
      <Tooltip body="third">
        <Loader type="third" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
    </div>
  </>;
}
```
[Loader1_END_zh_CN]

[Loader1_BEGIN_en_US]
[Loader1_END_en_US]
----------------------------------
[Loader2_BEGIN_zh_CN]
### 示例2: Loader的大小
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    有三种大小的Loader可供使用, 可以将size属性设置为： small、medium、 large。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Loader} from 'react-windy-ui';

export default function Loader2() {

  return <>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Loader active type="primary" size="small" text="Loading"
              style={{marginRight: '1rem'}}/>
      <Loader active type="secondary" size="medium" text="Loading"
              style={{marginRight: '1rem'}}/>
      <Loader active type="third" size="large" text="Loading"
              style={{marginRight: '1rem'}}/>
    </div>
  </>;
}
```
[Loader2_END_zh_CN]

[Loader2_BEGIN_en_US]
[Loader2_END_en_US]
----------------------------------
[Loader3_BEGIN_zh_CN]
### 示例3: Loader的大小
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在Button中显示Loader。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Loader, Button, Toggle} from 'react-windy-ui';

export default function Loader3() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>

      <div className="doc doc-col">
        <Button color="black">
          <Loader active={active} size="small"/>
          <span>Saving</span>
        </Button>
      </div>

      <div className="doc doc-col">
        <Button color="green" disabled>
          <span>Saving</span>
          <Loader type="secondary" active={active} size="small" color="white"/>
        </Button>
      </div>

      <div className="doc doc-col">
        <Button color="brown">
          <span>Loading</span>
          <Loader type="third" active={active} size="small" color="white"/>
        </Button>
      </div>
    </div>
  </>;
}
```
[Loader3_END_zh_CN]

[Loader3_BEGIN_en_US]
[Loader3_END_en_US]
----------------------------------

[Loader4_BEGIN_zh_CN]
### 示例4: 全局显示的Loader
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Loader可以跟Modal相似，全局弹出显示。此时你需要将global属性设置为true,同时将hasMask设置为true可以显示黑色背景。
    如果Loader需要设置一个背景色，可以将hasBackground设置为true。点击黑色背景需要关闭Loader时，需要提供onMaskClick
    回调。另外Loader的颜色，当前可以设置成white或blue两张颜色，需要其他颜色时可以自行覆盖对应的样式class。
  </div>
</fieldset>

```jsx
import React, {useCallback, useState} from 'react';
import {Button, Loader, Toggle} from 'react-windy-ui';

export default function Loader4() {
  const [active, setActive] = useState(false);
  const [hasMask, setMask] = useState(true);
  const [hasBg, setBg] = useState(true);

  const loaderColor = !hasBg && hasMask ? 'white' : 'blue';

  const delayClose = useCallback(() => {
    const timeout = setTimeout(() => {
      // setActive(false);
      clearTimeout(timeout);
    }, 3000);
  }, []);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasMask} onChange={val => setMask(val)}
              content={{on: 'Mask', off: 'Mask'}}/>
    </div>

    <div className="doc doc-row">
      <Toggle active={hasBg} onChange={val => setBg(val)}
              content={{on: 'Background', off: 'Background'}}/>
    </div>

    <Button type="primary" onClick={() => {
      setActive(true);
      delayClose();
    }}>Active</Button>

    <Loader type="third"
            global={true}
            color={loaderColor}
            active={active}
            hasMask={hasMask}
            hasBackground={hasBg}
            onMaskClick={() => setActive(false)}
            text="Will close in 3 seconds">
    </Loader>
  </>;
}
```
[Loader4_END_zh_CN]

[Loader4_BEGIN_en_US]
[Loader4_END_en_US]
----------------------------------
[Loader5_BEGIN_zh_CN]
### 示例5: 自适应宽度
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下全局显示的Loader会有一个默认的宽度，如果需要Loader的宽度以内容区域的宽度为准，则可以设置hasDefaultWidth
    属性为false。同时可以通过modalStyle属性去修改Loader使用的Modal样式，比如这个例子，就将背景色设置为黑色。
  </div>
</fieldset>

```jsx
import React, {useCallback, useState} from 'react';
import {Button, Loader} from 'react-windy-ui';

export default function Loader5() {
  const [active, setActive] = useState(false);

  const delayClose = useCallback(() => {
    const timeout = setTimeout(() => {
      setActive(false);
      clearTimeout(timeout);
    }, 3000);
  }, []);

  return <>

    <Button type="primary" onClick={() => {
      setActive(true);
      delayClose();
    }}>Active</Button>

    <Loader type="third"
            global
            color="white"
            hasMask={true}
            hasDefaultWidth={false}
            modalStyle={{background: '#000'}}
            active={active}
            onMaskClick={() => setActive(false)}
            text="Loading...">
    </Loader>
  </>;
}
```
[Loader5_END_zh_CN]

[Loader5_BEGIN_en_US]
[Loader5_END_en_US]
----------------------------------
[Loader6_BEGIN_zh_CN]
### 示例6: Loader水平展示内容区域
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下，Loader图标和文字会在垂直方向上展示，如需要水平展示可以将direction设置为horizontal。
  </div>
</fieldset>

```jsx
import React, {useCallback, useState} from 'react';
import {Button, Loader} from 'react-windy-ui';

export default function Loader6() {
  const [active, setActive] = useState(false);

  const delayClose = useCallback(() => {
    const timeout = setTimeout(() => {
      setActive(false);
      clearTimeout(timeout);
    }, 3000);
  }, []);

  return <>

    <Button type="primary" onClick={() => {
      setActive(true);
      delayClose();
    }}>Active</Button>

    <Loader type="primary"
            global
            size="small"
            color="white"
            hasDefaultWidth={false}
            modalStyle={{background: '#000'}}
            direction="horizontal"
            active={active}
            onMaskClick={() => setActive(false)}
            text="Loading the data">
    </Loader>
  </>;
}
```
[Loader6_END_zh_CN]

[Loader6_BEGIN_en_US]
[Loader6_END_en_US]
----------------------------------
[Loader7_BEGIN_zh_CN]
### 示例7: 使用Loader包裹其他容器
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    可以直接把内容或其他容器嵌入到Loader中，激活Loader后可以呈现加载状态。比如可以将Card,Alert等组件嵌入到Loader中。
    另外如果需要Loader占据整行，则需要将block属性设置为true。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Card, Loader, Alert, Toggle} from 'react-windy-ui';

export default function Loader7() {
  const [active, setActive] = useState(true);

  const body = 'Bread is a staple food prepared from a dough of flour and water,\n' +
      '          usually by baking. Throughout recorded history it has been a prominent\n' +
      '          food in large parts of the world; it is one of the oldest man-made\n' +
      '          foods, having been of significant importance since the …';

  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>

    <Loader type="primary" color="white" text="Loading......"
            active={active}
            block>
      <Card block>
        <Card.Header>
          Header
        </Card.Header>
        <Card.Body>
          {body}
        </Card.Body>
        <Card.Footer>
          Footer
        </Card.Footer>
      </Card>
    </Loader>

    <Loader type="third" color="white" style={{marginTop: '1rem'}}
            active={active}
            block>
      <Alert title="Customized"
             type="ok"
             body={body}/>

    </Loader>
  </>;
}
```
[Loader7_END_zh_CN]

[Loader7_BEGIN_en_US]
[Loader7_END_en_US]
----------------------------------
[Loader8_BEGIN_zh_CN]
### 示例8: 不使用黑色背景去遮罩内容区域
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置darkMask为false后，将使用50%透明度的背景层展示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Alert, Loader, Toggle} from 'react-windy-ui';

export default function Loader8() {
  const [active, setActive] = useState(true);

  const body = 'Bread is a staple food prepared from a dough of flour and water,\n' +
      '          usually by baking. Throughout recorded history it has been a prominent\n' +
      '          food in large parts of the world; it is one of the oldest man-made\n' +
      '          foods, having been of significant importance since the …';
  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>

    <Loader type="third" color="blue"
            darkMask={false}
            active={active}
            block>
      <Alert title="Customized"
             type="ok"
             body={body}/>

    </Loader>
  </>;
}
```
[Loader8_END_zh_CN]

[Loader8_BEGIN_en_US]
[Loader8_END_en_US]
----------------------------------