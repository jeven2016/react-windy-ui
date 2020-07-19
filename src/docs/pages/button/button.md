## 按钮 Button  

按钮，作为网页上最常使用的控件，Windy UI提供了如下几种按钮

- 默认的灰色按钮
- 主色调的按钮
- 次色调的按钮
- 只显示边框的按钮

从色调上区分，提供了如下几种
- Primary
- Secondary
- Info
- Warning
- Error
- Red/Blue/Green......等各类颜色

另外提供了大、中、小三种尺寸以供使用。

<SampleBtn1/>

<div style="color: red">
## 按钮 Button  
</div>

<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    常规使用的话，除了默认按钮以外，还提供了"primary"、 <Badge type="tag" color="blue">"secondary"</Badge>两种类型的按钮。
  </div>
</fieldset>


```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn1 = () => {
  return <>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </>;
};

export default SampleBtn1;
```




     
    
     

