----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 单选 Radio   
在一个表单里，单选框也是最常使用的组件。Radio组件常用来在一组选项中勾选一个， 如果只需要多选则可使用Checkbox组件。   
<br/>

Radio单选组件, 从可配置项上来说与Checkbox有相似之处，其主要的功能主要有：   

- 显示一个可供选择的组件，并且可以添加文字进行标示
- 可以组合使用预定义的颜色样式， 修改Radio的颜色，进行定制显示
- 可使用键盘的Tab键进行切换，并可相应键盘Enter键事件，选中该组件
- 提供了一个Radio Group组件，用于在一组状态中切换

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Radio的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | radio |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| checked | 是否勾选状态 | boolean | false |  |
| defaultChecked | 初始勾选状态 | boolean | false |  |
| onChange | 状态变化触发的回调 | function | - |  |
| label | 显示的提示信息 | string | - |  |
| children | 子节点对象 | react node | - |  |
| checkedColor | 对应选中时的颜色 | string | - | 可选的颜色参见颜色列表定义 |
| uncheckedColor | 对应去选中时的颜色 | string | - | 可选的颜色参见颜色列表定义 |
| checkedIcon | 对应去选中时的图标 | string | - |  |
| uncheckedIcon | 对应去选中时的图标 | string | - |  |

<br/>
RadioGroup的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | radio |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| defaultValue | 初始选中的Radio对应的值 | string |  |  |
| value | 初始勾选状态 | boolean | false |  |
| onChange | 状态变化触发的回调 | function | - |  |
| children | 子节点对象 | react node | - |  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Radio1_BEGIN_zh_CN]
### 示例1: 普通的Radio
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Radio中要在右侧显示提示文字，可以设置label属性值或添加children子节点。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio1() {

  return <>
    <Radio onChange={(checked) => console.log(checked)} label="Radio"/>
    <Radio value="2"
           onChange={(value) => console.log('value should be 2 ' + value)}>
      Value2
    </Radio>
  </>;
}
```

[Radio1_END_zh_CN]

[Radio1_BEGIN_en_US]
[Radio1_END_en_US]
----------------------------------

[Radio2_BEGIN_zh_CN]
### 示例2: 设置不同的颜色
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   需要更改勾选状态下的颜色时，可以设置checkedColor属性；需要更改去勾选状态下的颜色时，可以设置uncheckedColor属性。
   另外，如果需要更改对应的图标时，可以相应地设置checkedIcon和uncheckedIcon属性。具体checkedColor和uncheckedColor的属性可配置哪些属性值，
   请参阅API文档部分。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio2() {

  return <>
    <Radio onChange={(checked) => console.log(checked)} label="Radio"/>
    <Radio value="2"
           onChange={(value) => console.log('value should be 2 ' + value)}>
      Value2
    </Radio>
  </>;
}
```

[Radio2_END_zh_CN]

[Radio2_BEGIN_en_US]
[Radio2_END_en_US]
----------------------------------

[Radio3_BEGIN_zh_CN]
### 示例3: 禁用Radio
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   将disabled设置为true后，将禁用对应的Radio.
  </div>
</fieldset>

```jsx
import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio3() {

  return <>
    <Radio defaultChecked disabled checkedColor="purple"
           uncheckedColor="red">
      purple
    </Radio>

    <Radio disabled checkedColor="green"
           uncheckedColor="brown">
      green
    </Radio>

    <Radio disabled>
      red
    </Radio>

  </>;
}
```
[Radio3_END_zh_CN]

[Radio3_BEGIN_en_US]
[Radio3_END_en_US]
----------------------------------


[Radio4_BEGIN_zh_CN]
### 示例4: 设置label所在的位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  设置alignLabel属性，可以将Label放置在上下左右四个方位。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio4() {
  return <>
    <div className="doc doc-row">
      <Radio defaultChecked>
        Right
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="right">
        Right
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="left">
        Left
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="left">
        Left
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="top">
        Top
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="top">
        Top
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="bottom">
        Bottom
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="bottom">
        Bottom
      </Radio>
    </div>
  </>;
}
```
[Radio4_END_zh_CN]

[Radio4_BEGIN_en_US]
[Radio4_END_en_US]

------------------------------------

[Radio5_BEGIN_zh_CN]
### 示例5: Radio Group
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  要使用RadioGroup，需要在children节点中添加Radio组件，同时给每个Radio设置对应的value。
  RadioGroup会根据value值进行切换，另外设置defaultValue属性，可以让对应的Radio从一开始就变成选中状态。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio5() {
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <RadioGroup onChange={(val) => console.log(val)}>
          <Radio value="purple" checkedColor="purple"
                 uncheckedColor="red">
            purple
          </Radio>

          <Radio value="green" checkedColor="green"
                 uncheckedColor="brown">
            green
          </Radio>

          <Radio value="blue">
            blue
          </Radio>
        </RadioGroup>
      </div>

      <div className="doc doc-row">
        <RadioGroup defaultValue="two" onChange={(val) => console.log(val)}>
          <Radio value="one" checkedColor="purple"
                 uncheckedColor="red">
            one
          </Radio>

          <Radio value="two" checkedColor="green"
                 uncheckedColor="brown">
            two
          </Radio>

          <Radio value="three">
            three
          </Radio>
        </RadioGroup>
      </div>
    </div>
  </>;
}
```
[Radio5_END_zh_CN]

[Radio5_BEGIN_en_US]
[Radio5_END_en_US]

----------------------------------
[Radio6_BEGIN_zh_CN]
### 示例6: 使用value和onChange方法自定义实现状态的切换
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  与defaultValue不同，一旦设置了value属性后，点击Radio时，RadioGroup将不会自动切换。您需要实现onChange回调，并自行更改
  当前选中的Radio值，以便进行状态的切换。
  </div>
</fieldset>

```jsx 
import React, {useState} from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio6() {
  const [value, setValue] = useState("one");
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <RadioGroup value={value} onChange={(val) => setValue(val)}>
          <Radio value="one">
            one
          </Radio>

          <Radio value="two">
            two
          </Radio>

          <Radio value="three">
            three
          </Radio>
        </RadioGroup>
      </div>
    </div>
  </>;
}
```
[Radio6_END_zh_CN]
[Radio6_BEGIN_en_US]
[Radio6_END_en_US]
----------------------------------

[Radio7_BEGIN_zh_CN]
### 示例7: 禁用RadioGroup
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  将disabled设置为true后，将禁用对应的RadioGroup.
  </div>
</fieldset>

```jsx 
import React from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio7() {
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <RadioGroup defaultValue="one" disabled
                    onChange={(val) => console.log(val)}>
          <Radio value="one">
            one
          </Radio>

          <Radio value="two">
            two
          </Radio>

          <Radio value="three">
            three
          </Radio>
        </RadioGroup>
      </div>
    </div>
  </>;
}
```
[Radio7_END_zh_CN]

[Radio7_BEGIN_en_US]
[Radio7_END_en_US]
----------------------------------