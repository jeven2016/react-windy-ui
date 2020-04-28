----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 多选框 Checkbox
Checkbo组件常用来勾选多个选项， 如果只需要单选则可使用Radio组件。    
<br/>

Checkbox组件主要提供以下功能：   

- 显示一个可供选择的组件，并且可以添加文字进行标示
- 可以组合使用预定义的颜色样式， 修改Checkbox的颜色，进行定制显示
- 可使用键盘的Tab键进行切换，并可相应键盘Enter键事件，选中该组件
[TITLE_END_zh_CN]

[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API    

Checkbox的属性如下所示    


| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| className | 样式名称 | string | checkbox |  |
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
| showIndeterminateState | 是否显示成中间状态 | boolean | - |  |
| iconIndeterminate | 中间状态时显示的图标 | node | - |  |
| iconIndeterminateStyle | 中间状态时添加的样式 | object | - |  |

[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Checkbox1_BEGIN_zh_CN]
### 示例1: 普通的Checkbox
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    Checkbox中要在右侧显示提示文字，可以设置label属性值或添加children子节点。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Checkbox} from 'react-windy-ui';

export default function Checkbox1() {
  return <>
    <Checkbox label="Label"/>
    <Checkbox onChange={(val) => console.log(val)}>Bus</Checkbox>
    <Checkbox defaultChecked onChange={(val) => console.log(val)}>Car</Checkbox>
  </>;
}
```
[Checkbox1_END_zh_CN]

[Checkbox1_BEGIN_en_US]
[Checkbox1_END_en_US]
----------------------------------

[Checkbox2_BEGIN_zh_CN]
### 示例2: 默认选中
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    设置defaultChecked属性值为true后，控件初始状态下显示选中状态。但不影响后续的勾选、去勾选。defaultChecked
    属性设置的是初始状态，可以后续被改变。但active属性与之则不同，当设置active属性后，控件将不能被自动勾选、去勾选，
    此时会触发onChange调用，您需要在onChange中决定是否切换选中状态。另外，checked与onChange方法需要同时提供，以便一起完成状态的切换过程。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {Checkbox} from 'react-windy-ui';

export default function Checkbox2() {
  const [checked, setChecked] = useState(false);

  return <>
    <Checkbox defaultChecked onChange={(value) => console.log(value)}>Default
      Checked
    </Checkbox>

    <Checkbox checked={checked}
              onChange={(value) => setChecked(value)}>Checked</Checkbox>
  </>;
}
```
[Checkbox2_END_zh_CN]

[Checkbox2_BEGIN_en_US]
[Checkbox2_END_en_US]
----------------------------------

[Checkbox3_BEGIN_zh_CN]
### 示例3: 设置不同的颜色
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
import {Checkbox, IconHome} from 'react-windy-ui';
import {IconSearch} from '../../../../components/src';

export default function Checkbox3() {

  return <>
    <Checkbox defaultChecked checkedColor="purple" uncheckedColor="red">
      purple
    </Checkbox>

    <Checkbox defaultChecked checkedColor="green" uncheckedColor="brown">
      green
    </Checkbox>

    <Checkbox defaultChecked checkedColor="red" uncheckedColor="yellow">
      red
    </Checkbox>

    <Checkbox defaultChecked checkedIcon={<IconHome/>}
              uncheckedIcon={<IconHome/>}>
      Home
    </Checkbox>

    <Checkbox defaultChecked checkedIcon={<IconSearch/>}
              uncheckedIcon={<IconSearch/>}>
      Search
    </Checkbox>
  </>;
}
```
[Checkbox3_END_zh_CN]

[Checkbox3_BEGIN_en_US]
[Checkbox3_END_en_US]

----------------------------------

[Checkbox4_BEGIN_zh_CN]
### 示例4: 禁用Checkbox
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   将disabled设置为true后，将禁用对应的Checkbox.
  </div>
</fieldset>

```jsx
import React from 'react';
import {Checkbox} from 'react-windy-ui';

export default function Checkbox4() {

  return <>
    <Checkbox defaultChecked disabled checkedColor="purple"
              uncheckedColor="red">
      purple
    </Checkbox>

    <Checkbox defaultChecked disabled checkedColor="green"
              uncheckedColor="brown">
      green
    </Checkbox>

    <Checkbox disabled>
      red
    </Checkbox>

  </>;
}
```
[Checkbox4_END_zh_CN]

[Checkbox4_BEGIN_en_US]
[Checkbox4_END_en_US]

----------------------------------


[Checkbox5_BEGIN_zh_CN]
### 示例5: Checkbox的中间状态
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   Checkbox除了勾选、去勾选两种状态外，还有一种状态称为中间状态。设置showIndeterminateState属性后，即可将控件转换成此状态。
   同时通过设置iconIndeterminateStyle样式，进行颜色的更改。
   需要注意的是，当控件处于这种状态时，不会自动切换其他状态。如果需要从中间状态切换成其他状态时，需要将showIndeterminateState
   设置成false，同时结合checked和onChange方法更改状态。
   比如在Tree控件中，如果子节点未全部勾选，则父节点会使用这个中间状态进行显示。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Checkbox, Tree} from 'react-windy-ui';

export default function Checkbox5() {
  return <>
    <div className="doc doc-row">
      <Checkbox showIndeterminateState={true}
                iconIndeterminateStyle={{color: '#9935c8'}}>
        Indeterminate State
      </Checkbox>
    </div>

    <div className="doc doc-row">
      <Tree defaultExpandedItems={['Tree', 'Child-1-5']}
            highlightLine
            checkable>
        <Tree.TreeItem id="Tree" label="Tree">
          <Tree.TreeItem id="Child-1-1" label="Child-1-1"/>
          <Tree.TreeItem id="Child-1-2" label="Child-1-2"/>
          <Tree.TreeItem id="Child-1-3" label="Child-1-3"/>
          <Tree.TreeItem id="Child-1-4" label="Child-1-4"/>
          <Tree.TreeItem id="Child-1-5" label="Child-1-5">
            <Tree.TreeItem id="Child-1-5-1" label="Child-1-5-1"/>
            <Tree.TreeItem id="Child-1-5-2" label="Child-1-5-2"/>
            <Tree.TreeItem id="Child-1-5-3" label="Child-1-5-3"/>
            <Tree.TreeItem id="Child-1-5-4" label="Child-1-5-4"/>
          </Tree.TreeItem>
        </Tree.TreeItem>
      </Tree>
    </div>
  </>;
}
```
[Checkbox5_END_zh_CN]

[Checkbox5_BEGIN_en_US]
[Checkbox5_END_en_US]


----------------------------------


[Checkbox6_BEGIN_zh_CN]
### 示例6: 设置label所在的位置
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
  设置alignLabel属性，可以将Label放置在上下左右四个方位。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Checkbox} from 'react-windy-ui';

export default function Checkbox6() {
  return <>
    <div className="doc doc-row">
      <Checkbox defaultChecked>
        Right
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="right">
        Right
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="left">
        Left
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="left">
        Left
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="top">
        Top
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="top">
        Top
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="bottom">
        Bottom
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="bottom">
        Bottom
      </Checkbox>
    </div>
  </>;
}
```
[Checkbox6_END_zh_CN]

[Checkbox6_BEGIN_en_US]
[Checkbox6_END_en_US]
