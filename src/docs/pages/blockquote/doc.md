----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 引用 Blockquote
Blockquote常用来标记一段文字的引用出处，可以一段说明性的文字或摘录自某处的名人名言。

* 提供了三种类型的Blockquote
* 可设置是否有边框、背景色、阴影

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API   
   
* <Code type="normal">Blockquote</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | blockquote |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| type | 类型 | string | normal | 值可以是：<Code>normal</Code>、<Code>primary</Code>、 <Code>secondary</Code> |
| hasBox | 是否显示阴影 | bool | false |  |
| hasBorder | 是否有边框 | bool | false |  |
| hasBackground | 是否有背景色 | bool | false |  |
   
* <Code type="normal">Header</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | blockquote |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
   
* <Code type="normal">Footer</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | blockquote |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| justify | 额外添加的样式名称 | string | - |  |
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Bq1_BEGIN_zh_CN]
### 示例1 简单示例
<DemoDesc title="提示">
    有三种类型的Blockquote可供选用，可以将type设置为
    <Code>空值</Code>、<Code>primary</Code>、<Code>secondary</Code>。
</DemoDesc>

```jsx
import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq1() {
  return <>
    <Blockquote>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="primary">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="secondary">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>
  </>;
}
```
[Bq1_END_zh_CN]

[Bq1_BEGIN_en_US]
[Bq1_END_en_US]
----------------------------------
[Bq2_BEGIN_zh_CN]
### 示例2 背景和边框  

<DemoDesc title="提示">
    将<Code>hasBorder</Code>属性设置为<Code>true</Code>后，将显示边框；<Code>hasBackground</Code>
    设置为<Code>true</Code>后，将会提供一个默认的背景色。
</DemoDesc>

```jsx
import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq2() {
  return <>
    <Blockquote hasBorder hasBackground>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="primary" hasBorder hasBackground>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="secondary" hasBorder hasBackground>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>
  </>;
}
```
[Bq2_END_zh_CN]

[Bq2_BEGIN_en_US]
[Bq2_END_en_US]
----------------------------------
[Bq3_BEGIN_zh_CN]
### 示例3 阴影 

<DemoDesc title="提示">
    将<Code>hasBox</Code>属性设置为<Code>true</Code>后，将显示边缘阴影；
</DemoDesc>

```jsx
import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq3() {
  return <>
    <Blockquote hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="primary" hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>

    <Blockquote type="secondary" hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquote>
  </>;
}
```
[Bq3_END_zh_CN]

[Bq3_BEGIN_en_US]
[Bq3_END_en_US]
----------------------------------
[Bq4_BEGIN_zh_CN]
### 示例4 显示头部和尾部内容

<DemoDesc title="提示">
    可以在Blockquote组件中添加<Code>&lt;Blockquote.Header/&gt;</Code>和<Code>&lt;Blockquote.Footer/&gt;</Code>,
    这样就会显示头部和尾部的内容区域。对于<Code>Footer</Code>你可以设置<Code>justify</Code>属性，指定水平方向上的分布规则。
    居左时的值为<Code>start</Code>, 居中时的值为<Code>center</Code>, 居右时的值是<Code>right</Code>。其他更多的参数值请参阅API。 
</DemoDesc>

```jsx
import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq4() {
  return <>
    <Blockquote hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="end">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="primary" hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="end">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="secondary" hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="end">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>
  </>;
}
```
[Bq4_END_zh_CN]

[Bq4_BEGIN_en_US]
[Bq4_END_en_US]
----------------------------------
[Bq5_BEGIN_zh_CN]
### 示例5 自定义文字即背景色

<DemoDesc title="提示">
   通过<Code>extraClassName</Code>属性，您可以给Blockquote添加额外的样式去覆盖文字颜色及背景色。 
</DemoDesc>

```jsx
import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq5() {
  return <>
    <Blockquote hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer align="end">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="primary" hasBackground hasBox
                extraClassName="text color-white bg-color-purple">
      <Blockquote.Header extraClassName="bold text color-white">Blockquote
        Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer align="end" extraClassName="bold text color-white">-Blockquote
        Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="secondary" hasBackground hasBox
                extraClassName="text color-white bg-color-black">
      <Blockquote.Header extraClassName="bold text color-white">Blockquote
        Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer align="end" extraClassName="bold text color-white">-Blockquote
        Footer</Blockquote.Footer>
    </Blockquote>
  </>;
}
```
[Bq5_END_zh_CN]

[Bq5_BEGIN_en_US]
[Bq5_END_en_US]
----------------------------------