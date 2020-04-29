----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 开关 Toggle
Toggle组件常用来进行启用、禁用的状态切换，与checkbox相比，具有更好的显示效果。

Toggle组件主要提供以下功能：   

- 提供了三种开关样式以供选择
- 开关内部可添加图标或文字描述
[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Toggle1_BEGIN_zh_CN]
### 示例1: 三种类型的开关
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    默认提供了normal、primary、secondary三种类型的开关，您可以通过type属性设置。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Toggle} from 'react-windy-ui';

export default function Toggle1() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary"/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary"/>
    </div>
  </>;
}
```
[Toggle1_END_zh_CN]

[Toggle1_BEGIN_en_US]
[Toggle1_END_en_US]
----------------------------------
[Toggle2_BEGIN_zh_CN]
### 示例2: 设置Toggle的宽度

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    要更改Toggle组件的宽度，你可以设置style属性，将width设置一个具体的值。你也可以只设置一个block属性
    让控件占据整行显示。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Toggle} from 'react-windy-ui';

export default function Toggle2() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive style={{width: '5rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '8rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary" style={{width: '10rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" block/>
    </div>
  </>;
}
```
[Toggle2_END_zh_CN]

[Toggle2_BEGIN_en_US]
[Toggle2_END_en_US]
----------------------------------
[Toggle3_BEGIN_zh_CN]
### 示例2: 在Toggle中显示图标或文字描述
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    
  </div>
</fieldset>

```jsx
import React from 'react';
import {
  Toggle,
  IconArrowLeft,
  IconArrowRight,
  IconClear,
  IconChecked2,
} from 'react-windy-ui';

export default function Toggle3() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive content={{on: 'ON', off: 'CLOSE'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '5rem'}}
              content={{
                on: <IconChecked2/>,
                off: <IconClear/>,
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '4rem'}}
              content={{
                on: 'ON',
                off: 'OFF',
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary" style={{width: '4rem'}}
              content={{
                on: <IconArrowRight/>,
                off: <IconArrowLeft/>,
              }}/>
    </div>
  </>;
}
```

[Toggle3_END_zh_CN]

[Toggle3_BEGIN_en_US]
[Toggle3_END_en_US]
----------------------------------