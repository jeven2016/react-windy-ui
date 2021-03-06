----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 对话框 Modal
Modal也即模态对话框。在当前页面额外弹出一个框体，比如确认对话框、提示对话框等。

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API
Modal的属性如下所示：

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Modal Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | dialog |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | info | 值可以是：primary，secondary，simple |
| hasMask | 是否显示黑色遮罩层 | boolean | true |  |
| onCancel | 关闭时的回调函数 | function | - | 点击右上角的关闭图标或黑色遮罩层时会在内部自动调用  |
| active | 激活显示 | boolean | - |  |
| autoClose | 是否允许自动关闭 | boolean | - | 点击右上角的关闭图标或黑色遮罩层时是否自动关闭  |
| alignCenter | 是否居中显示 | boolean | true | 如果设置成false时，会在距离顶部某处显示，此时需要通过style设置对应的top值  |
| autoOverflow | 是否允许内容区域垂直滚动 | boolean | true | 如果设置为true时，请给Modal窗体设置一个高度，这样Body区域超出会自动滚动显示 |
| hasDefaultWidth | 是否设置一个默认的宽度 | boolean | true | 如果设置为true时，Modal的宽度默认为90%；为false时，不设置宽度，宽度以内容的实际宽度为准。 |

Mode.method()对应的方法如下所示：   

| 方法名 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| info | 显示info类型的Modal | object | modal | config: {type, header, title, body, okText, cancelText, onOk, onCancel}  |
| warning | 显示warning类型的Modal | object | modal | config: 同上  |
| error | 显示error类型的Modal | object | modal | config: 同上  |
| success | 显示success类型的Modal | object | modal | config: 同上  |
| confirm | 显示confirm类型的Modal | object | modal | config: 同上  |
| closeAll | 关闭所有的Modal | - | - |  |

通过上面Modal.method()方法返回的modal对象，其提供的方法如下所示：

| 方法名 | 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- | --- |
| close |  关闭当前的Modal   |  -   | -  |   |
| update |  更新Modal的内容   | object | - | 可更新的内容：{header，title，body，okText，cancelText}  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Modal1_BEGIN_zh_CN]
### 示例1: 一个简单的Modal
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个简单的Modal示例。在这个示例中，通过active属性去控制Modal的开关，实现onClose回调以便当点击黑色
    背景或关闭按钮时关闭Modal。同时自定义了两个按钮。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal1() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type="primary" onCancel={close}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '10rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```


[Modal1_END_zh_CN]

[Modal1_BEGIN_en_US]
[Modal1_END_en_US]
----------------------------------

[Modal2_BEGIN_zh_CN]
### 示例2: 在窗口顶部显示的Modal
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下，Modal会在屏幕居中显示。如果需要在顶部一定距离显示，可以指定alignCenter为false,同时在style
    中设置top属性值， 这样Modal就会在top距离位置开始显示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal2() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>
    <Modal active={active} type="primary" onCancel={close}
           alignCenter={false}
           style={{top: '7rem'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '10rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```


[Modal2_END_zh_CN]

[Modal2_BEGIN_en_US]
[Modal2_END_en_US]
----------------------------------

[Modal3_BEGIN_zh_CN]
### 示例3: Modal类型
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Modal有三种类型可供选择： primary, secondary, simple。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal3() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState('simple');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="primary">primary</Select.Option>
        <Select.Option value="secondary">secondary</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type={type} onCancel={close}
           size="large"
           alignCenter={false}
           style={{top: '7rem'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '5rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} color="green" onClick={close}>OK</Button>
        <Button hasMinWidth={true} color="red" onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```


[Modal3_END_zh_CN]

[Modal3_BEGIN_en_US]
[Modal3_END_en_US]
----------------------------------

[Modal4_BEGIN_zh_CN]
### 示例4: Modal的背景颜色
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    要想切换不同的背景色，可以结合使用框架提供的几个样式。其中'text color-white'指定了文字为白色；
    'bg-color-pink'或其他以’bg-color'开头的class，用来指定背景色。有关背景色和文字颜色的具体可使用的参数值，
    您可以参阅文字和颜色章节。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal4() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState('simple');
  const [bg, setBg] = useState('bg-color-pink');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>

    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type={type} onCancel={close}
           extraClassName={`${bg} text color-white`}
           size="large"
           alignCenter={false}
           style={{top: '7rem'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '5rem'}}>
          <div className="doc doc-row">
            <span style={{
              marginRight: '1rem',
              fontWeight: '600',
            }}>Background:</span>

            <Select value={bg} onSelect={value => setBg(value)}
                    popupStyle={{height: '20rem', overflow: 'auto'}}>
              <Select.Option value="bg-color-pink">pink</Select.Option>
              <Select.Option value="bg-color-blue">blue</Select.Option>
              <Select.Option value="bg-color-brown">brown</Select.Option>
              <Select.Option value="bg-color-black">black</Select.Option>
              <Select.Option value="bg-color-cyan">cyan</Select.Option>
              <Select.Option value="bg-color-dark">dark</Select.Option>
              <Select.Option value="bg-color-green">green</Select.Option>
              <Select.Option value="bg-color-gray">gray</Select.Option>
              <Select.Option
                  value="bg-color-gray-darker">gray-darker</Select.Option>
              <Select.Option value="bg-color-light">light</Select.Option>
              <Select.Option value="bg-color-orange">orange</Select.Option>
              <Select.Option value="bg-color-purple">purple</Select.Option>
              <Select.Option value="bg-color-red">red</Select.Option>
              <Select.Option value="bg-color-yellow">yellow</Select.Option>
              <Select.Option value="bg-color-teal">teal</Select.Option>
              <Select.Option value="bg-color-violet">violet</Select.Option>
              <Select.Option value="bg-color-white">white</Select.Option>
            </Select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} color="green" onClick={close}>OK</Button>
        <Button hasMinWidth={true} color="red" onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```


[Modal4_END_zh_CN]

[Modal4_BEGIN_en_US]
[Modal4_END_en_US]
----------------------------------

[Modal5_BEGIN_zh_CN]
### 示例5: Modal的大小
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Modal可以指定四种大小： small、medium、large、xLarge。当屏幕宽度达到一定尺寸后，Modal会以一定的宽度显示。
    如果屏幕尺寸不满足时，将自动切换为默认宽度，即当前窗口90%的宽度。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal5() {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState('medium');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Size:</span>
      <Select value={size} onSelect={value => setSize(value)}>
        <Select.Option value="small">small</Select.Option>
        <Select.Option value="medium">medium</Select.Option>
        <Select.Option value="large">large</Select.Option>
        <Select.Option value="xLarge">xLarge</Select.Option>
      </Select>
    </div>

    <Button type="primary" onClick={() => setActive(true)}>Simple</Button>

    <Modal active={active} size={size} onCancel={close}
           alignCenter={true}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '5rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} color="green" onClick={close}>OK</Button>
        <Button hasMinWidth={true} color="red" onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```
[Modal5_END_zh_CN]

[Modal5_BEGIN_en_US]
[Modal5_END_en_US]
----------------------------------

[Modal6_BEGIN_zh_CN]
### 示例6: 按钮居中显示
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   Modal的Footer可以指定一侧排列，可以指定靠左、居中、靠右排列。对应地将Footer的align属性设置为：
   left、center、right。这里将align设置为center后，Modal中的按钮将居中显示。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal6() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type="primary" onCancel={close}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '10rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer align="center">
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```
[Modal6_END_zh_CN]

[Modal6_BEGIN_en_US]
[Modal6_END_en_US]
----------------------------------

[Modal7_BEGIN_zh_CN]
### 示例7: Modal快捷使用
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   在上面例子中，显示一个Modal您需要在组件中添加&lt;Modal .../&gt;的组件，同时控制Modal的显示与关闭。
   如果需要快捷地弹出一个对话框进行提示、告警之类的，可以考虑使用这个快捷的调用方式（通过调用Modal.method方法调用）。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Modal, Notification, Tooltip} from 'react-windy-ui';

export default function Modal7() {
  return <>
    <Button type="primary" onClick={() => {
      Modal.info({
        type: 'primary',
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
        onOk: () => {Notification.info('OK');},
        onCancel: () => {Notification.info('Cancel');},
      });
    }}>
      Info
    </Button>

    <Button type="primary" onClick={(e) => {
      Modal.warning({
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      warning
    </Button>

    <Tooltip body="no header">
      <Button type="primary" onClick={(e) => {
        Modal.error({
          title: '系统无法删除此数据。',
          body: '请稍候在系统管理界面上查看该结果，谢谢',
          okText: '确定',
        });
      }}>
        error
      </Button>
    </Tooltip>

    <Button type="primary" onClick={(e) => {
      Modal.success({
        type: 'primary',
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      success
    </Button>

    <Button type="primary" onClick={(e) => {
      Modal.confirm({
        type: 'primary',
        header: '确认删除',
        title: '您确认要删除此记录吗？',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          console.log('ok');
        },
        onCancel: () => {
          console.log('cancelled');
        },
      });
    }}>
      confirm
    </Button>
  </>;
}
```
[Modal7_END_zh_CN]

[Modal7_BEGIN_en_US]
[Modal7_END_en_US]
----------------------------------

[Modal8_BEGIN_zh_CN]
### 示例8: Body内容超出自动滚动显示
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
     当Body内容过多后，Modal内部会出现滚动条，将内容滚动显示。此时您需要将autoOverflow设置为true,
     并同时给Modal设置一个整体的高度，而且Body会默认占据尽可能多的空间。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal8() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type="primary" onCancel={close}
           autoOverflow={true} style={{height: '80%'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>

        {[...Array(30).keys()].map(
            (value, index) => <span key={index}>Modal Content....<br/></span>)}

      </Modal.Body>
      <Modal.Footer align="center">
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}
```
[Modal8_END_zh_CN]

[Modal8_BEGIN_en_US]
[Modal8_END_en_US]
----------------------------------

[Modal9_BEGIN_zh_CN]
### 示例9: 弹出多个Modal
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
     弹出多个Modal示例，点击Close All按钮后将调用Modal.closeAll()方法将所有Modal关闭。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal9() {
  const open = () => {

    for (let i = 0; i < 5; i++) {
      setTimeout(() => Modal.info({
        header: 'Info' + i,
        type: 'primary',
        body: <Button color="red" onClick={() => Modal.closeAll()}>
          Close All
        </Button>,
        okText: 'OK',
      }), i * 500);
    }

  };

  return <>
    <Button type="primary" onClick={open}>Open</Button>

  </>;
}
```
[Modal9_END_zh_CN]

[Modal9_BEGIN_en_US]
[Modal9_END_en_US]
----------------------------------

[Modal10_BEGIN_zh_CN]

### 示例10: 关闭单个Modal以及更新Modal的内容
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
     对于通过Modal.info()这类方式打开的Modal，会返回一个对象，你可以调用其提供的close和update方法。
     close可以关闭该Modal，update则用来更新Modal的header、title、body、ok按钮文字以及cancel按钮文字。
  </div>
</fieldset>

```jsx
import React, {useRef} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal10() {
  const timerRef = useRef(null);
  const open = () => {
    const modal = Modal.info({
      header: 'Info',
      type: 'primary',
      body: 'Modal Content...',
      okText: 'OK',
      onOk: () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
      },
    });

    let i = 0;
    const seconds = 5;
    timerRef.current = setInterval(() => {
      if (i++ > seconds) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        modal.close();
        return;
      }

      //update the modal
      modal.update({
        header: `Waiting for ${seconds} seconds`,
        title: 'A timer is running',
        body: `There are ${seconds - i + 1} second(s) left.`,
        okText: `${seconds - i + 1} second(s)`,
      });
    }, 1000);

  };

  return <>
    <Button type="primary" onClick={open}>Open</Button>

  </>;
}
```
[Modal10_END_zh_CN]
[Modal10_BEGIN_en_US]
[Modal10_END_en_US]
----------------------------------