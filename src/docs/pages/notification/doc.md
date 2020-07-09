import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';

----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 通知 Notification
Notification组件结合使用了Alert组件，以便展示一系列的全局消息。

* 默认情况下可以在TopLeft、TopRight、BottomLeft、BottomRight自个方位展示
* 消息框中的Alert可以定时关闭，也可手动关闭

另外，需要提醒的是，以下示例中有些涉及到更改全局配置的，会对其他的示例有影响。如果需要恢复默认效果，请重新刷新下页面。
   
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Notification的全局配置属性如下所示    

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| hasCloseIcon | 是否显示关闭消息的Icon | boolean | true |  |
| onClose | 关闭某个消息的回调 | function | - | 当消息被关闭时触发，同时会将消息对应的配置传入该方法。 |
| rect | 上下左右四个方位的距离 | object | 所有默认值全部为1.5rem |  当topLeft时，可只设置rect中的top、left属性。当topRight时，可只设置rect中的top、right属性。当bottomLeft时，可只设置rect中的bottom、left属性。当bottomRight时，可只设置rect中的bottom、right属性。|

您可以使用调用Notification的config方法去设置: Notification.config({...})。

<br/>
每个消息可自定义设置的属性有  

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| position | 显示位置 | string | topRight | 当需要获取到根节点的dom对象时可设置此属性 |
| duration | 消息持续显示的时间 | number | 5000ms |  |
| title | Alert消息标题 | react node | - |  |
| body | Alert消息内容 | react node | - | |
| icon | Alert显示的图标 | react node | - |  |
| onClose | 关闭消息的回调 | function | - | 当消息被关闭时触发 |
| alertProps | Alert消息的配置对象 | object | - | 对应Alert组件的API属性，可参阅Alert的API |
上面这些参数在显示各个消息时设置，比如Notification.info({duration: 3000, title: 'title' .....})。


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Notification1_BEGIN_zh_CN]
### 示例1: 普通的Notification
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    通过调用Notification的info、ok、warning、error、simple方法，可在Notification框体中显示对应的
    Alert。要显示一个Alert, 您可以简单地传入一个消息字符串，也可以传入一个具体的config对像。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification1() {
  return <>
    <Button onClick={() =>
        Notification.info('Hello, this is a message.')}>
      info
    </Button>

    <Button onClick={() =>
        Notification.warning({
          body: 'Hello, this is a message.',
        })}>
      warning
    </Button>

    <Button onClick={() =>
        Notification.error({
          title: 'Message',
          body: 'Hello, this is a message.',
        })}>
      error
    </Button>
  </>;

}
```
[Notification1_END_zh_CN]

[Notification1_BEGIN_en_US]
[Notification1_END_en_US]
----------------------------------

[Notification2_BEGIN_zh_CN]
### 示例2: Notification的类型
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Notification与Alert类型一致，主要提供了info、ok、warning、error、simple这几种类型。
  </div>
</fieldset>

```jsx
import React from 'react';
import {
  Button,
  IconError,
  IconInfo,
  IconOk,
  IconWarning,
  Notification,
} from 'react-windy-ui';

export default function Notification2() {
  return <>
    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>info</Button>

    <Button onClick={() => Notification.ok({
      title: 'Simple Message',
      body: 'This is a info message.'
    })}>ok</Button>

    <Button onClick={() => Notification.warning({
      title: 'Simple Message',
      body: 'This is a ok message.'
    })}>warning</Button>

    <Button onClick={() => Notification.error({
      title: 'Simple Message',
      body: 'This is a warning message.'
    })}>error</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a error message.',
      icon: <IconError style={{color: '#d82b3a'}}/>,
    })}>simple</Button>
  </>;

}
```
[Notification2_END_zh_CN]

[Notification2_BEGIN_en_US]
[Notification2_END_en_US]
----------------------------------

[Notification3_BEGIN_zh_CN]
### 示例3: 显示位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    可以设置为四个位置： topLeft、topRight、bottomLeft、bottomRight。您可以给每一个消息指定对应的Position,
    也可以通过全局Config对象给所有的消息指定显示位置。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification3() {
  return <>
    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topLeft',
    })}>topLeft</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topRight',
    })}>topRight</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topCenter',
    })}>topCenter</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'bottomLeft',
    })}>bottomLeft</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'bottomRight',
    })}>bottomRight</Button>
  </>;

}
```
[Notification3_END_zh_CN]

[Notification3_BEGIN_en_US]
[Notification3_END_en_US]
----------------------------------

[Notification4_BEGIN_zh_CN]
### 示例4: 全局设置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当一系列显示消息要遵循统一的规则去展示时，您可以使用Notification.config()方法去配置一个全局的config对象。
    Notification中的消息队列将在每个消息体上应用配置的全局设定。需要注意的是，修改后，这个全局对象对这个页面的其他示例也有影响。
    在这个示例中一旦修改了hasCloseIcon、duration、position属性，会在useEffect中调用Notification.config()方法去配置一个全局的对象。
    而且这个方法会将传入的参数与已有的全局对象里面的参数进行合并操作。也就是说如果只修改了position属性，您可以只设置一个
    {position: 'topCenter'}对象，在Notification内部会负责与其他参数的合并组装，您无需担心其他属性是否会被丢弃掉的问题。
    这个示例展示了您可以告诉Notification是否要显示关闭的Icon, 消息持续显示多久以及显示的位置。
  </div>
</fieldset>

```jsx
import React, {useEffect, useState} from 'react';
import {Button, Input, Notification, Toggle, Select} from 'react-windy-ui';

export default function Notification4() {
  const [duration, setDuration] = useState(5000);
  const [hasCloseIcon, setCloseIcon] = useState(true);
  const [position, setPosition] = useState('topRight');

  useEffect(() => {
    //update the global configuration of Notification
    //while the dependencies updated
    Notification.config({
      hasCloseIcon,
      duration,
      position,
    });
  }, [hasCloseIcon, duration, position]);

  const changeCloseIcon = (val) => {
    setCloseIcon(val);
  };

  const changeDuration = (e) => {
    setDuration(parseInt(e.target.value));
  };

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Duration:</span>
     
      <Input value={duration}
             onChange={val => changeDuration(val)}/> &nbsp;ms
    </div>
    <div className="doc doc-row">
      <Toggle active={hasCloseIcon} onChange={val => changeCloseIcon(val)}
              content={{on: 'Close icon', off: 'Close icon'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position} onSelect={value => setPosition(value)}>
        <Select.Option value="topLeft">topLeft</Select.Option>
        <Select.Option value="topCenter">topCenter</Select.Option>
        <Select.Option value="topRight">topRight</Select.Option>
        <Select.Option value="bottomLeft">bottomLeft</Select.Option>
        <Select.Option value="bottomRight">bottomRight</Select.Option>
      </Select>
    </div>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>info</Button>

    <Button onClick={() => Notification.mini(
        'This is a message.',
    )}>mini</Button>
  </>;

}
```
[Notification4_END_zh_CN]

[Notification4_BEGIN_en_US]
[Notification4_END_en_US]
----------------------------------

[Notification5_BEGIN_zh_CN]
### 示例5: 自定义消息
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    除了全局的config配置外，您还可以给每个消息添加自定义属性。比如设置duration、position后，可以让单条消息以
    在指定的位置显示，并且持续显示多久。由于Notification内部依靠Alert组件实现的，如果需要更改每个消息的属性，
    可以在alertProps中配置。具体的可配置项可以参阅Alert的API。这个例子中，会在右上角位置显示一条白字黑底的消息
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification5() {

  const sendMessage = () => {
    Notification.info({
      title: 'Simple Message',
      body: 'Will close in 2 seconds.',

      duration: 3000,
      position: 'topRight',

      alertProps: {
        hasIcon: true,
        hasCloseIcon: false,
        iconStyle: {
          color: 'white',
        },
        style: {
          background: 'black',
          color: 'white',
          border: 'none',
        },
        closeStyle: {},
      },
    });
  };

  return <>
    <Button color="black" onClick={() => sendMessage()}>Message</Button>
  </>;
}
```
[Notification5_END_zh_CN]

[Notification5_BEGIN_en_US]
[Notification5_END_en_US]
----------------------------------

[Notification6_BEGIN_zh_CN]
### 示例6: 更改间距
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认情况下，页面上存放消息的容器会在四个角落以一定的间隔显示。比如对于leftRight位置，会在当前窗口top距离为'1.5rem',
    right距离为'1.5rem'的地方排列显示消息。如果需要更改这个间距，则可以修改全局配置，设置对应的rect属性。
    <ul>
    <li>当topLeft时，可只设置rect中的top、left属性</li>
    <li>当topRight时，可只设置rect中的top、right属性</li>
    <li>当bottomLeft时，可只设置rect中的bottom、left属性</li>
    <li>当bottomRight时，可只设置rect中的bottom、right属性</li>
    <li>当topCenter时，可只设置rect中的top属性, 因为在水平方向上始终是居中显示的</li>
    </ul>
    
    在这个示例中选择一个方位后，点击“Update the global Configuration”，并点击Message按钮，可以查看到消息在垂直方向
    上5rem、水平方向上2rem的位置显示。
    
  </div>
</fieldset>

```jsx
import React, {useRef, useState} from 'react';
import {Button, Notification, Toggle, Select} from 'react-windy-ui';

export default function Notification6() {
  const [position, setPosition] = useState('topRight');

  //a reference to previous global config
  const defaultConfigRef = useRef({...Notification.getConfig()});

  const updateGlobalConf = () => {
    Notification.config({
      rect: {
        top: '5rem',
        left: '2rem',
        bottom: '5rem',
        right: '2rem',
      },
    });
  };

  const revert = () => {
    Notification.config(defaultConfigRef.current);
  };

  const toggle = (active) => {
    if (active) {
      updateGlobalConf();
    } else {
      revert();
    }
  };

  const sendMessage = () => {
    Notification.simple({body: 'Hello folks', position: position});
  };
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position} onSelect={value => setPosition(value)}>
        <Select.Option value="topLeft">topLeft</Select.Option>
        <Select.Option value="topCenter">topCenter</Select.Option>
        <Select.Option value="topRight">topRight</Select.Option>
        <Select.Option value="bottomLeft">bottomLeft</Select.Option>
        <Select.Option value="bottomRight">bottomRight</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive={false} onChange={active => toggle(active)}
              content={{
                on: 'Update the global Configuration',
                off: 'Update the global Configuration',
              }}/>
    </div>
    <Button type="primary" onClick={() => sendMessage()}>Message</Button>
  </>;
}
```
[Notification6_END_zh_CN]

[Notification6_BEGIN_en_US]
[Notification6_END_en_US]
----------------------------------

[Notification7_BEGIN_zh_CN]
### 示例7: 取消延时关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   默认情况下，消息会在显示的5秒后自行关闭。这个时间可以通过duration指定，如果只需要手动关闭，则可以将duration
   设置为0或负数值。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Button, Notification, Toggle} from 'react-windy-ui';

export default function Notification7() {

  const toggle = (active) => {
    if (active) {
      Notification.config({duration: 5000});
    } else {
      Notification.config({duration: 0});//0 or negative number
    }
  };

  const sendMessage = () => {
    Notification.simple('This is a message.');
  };

  return <>
    <div className="doc doc-row">
      <Toggle defaultActive={true} onChange={active => toggle(active)}
              content={{
                on: 'Auto close',
                off: 'Auto close',
              }}/>
    </div>
    <Button type="primary" onClick={() => sendMessage()}>Message</Button>
  </>;
}
```
[Notification7_END_zh_CN]

[Notification7_BEGIN_en_US]
[Notification7_END_en_US]
----------------------------------


[Notification8_BEGIN_zh_CN]
### 示例8: 简洁类型的消息
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   对于info、ok、warning、error这类的消息，会有独特的样式。如果需要简洁点的消息，可以考虑mini或simple类型。
   这里演示了如果使用simple类型的消息，去构造对应info、ok、warning、error这样的消息。
  </div>
</fieldset>

```jsx
import React from 'react';
import {
  Button, Notification, IconError,
  IconInfo,
  IconOk,
  IconWarning,
} from 'react-windy-ui';

export default function Notification8() {
  Notification.config({
    position: 'topRight',
  });
  return <>
    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>Simple</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a info message.',
      icon: <IconInfo/>,
    })}>Info</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a ok message.',
      icon: <IconOk style={{color: '#49b847'}}/>,
    })}>OK</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a warning message.',
      icon: <IconWarning style={{color: '#c88f3f'}}/>,
    })}>Warning</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a error message.',
      icon: <IconError style={{color: '#d82b3a'}}/>,
    })}>Error</Button>
  </>;

}
```
[Notification8_END_zh_CN]

[Notification8_BEGIN_en_US]
[Notification8_END_en_US]
----------------------------------