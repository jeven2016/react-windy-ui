----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 树控件 Tree
树控件常用来展示具有层级关系的内容，例如文件夹、部门关系、区域等。同时可以折叠、展开一个树节点。

* 可单选或多选树的节点
* 支持读取JSON数据并渲染成一棵树

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
## API   
   
* <Code type="normal">Tree</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tree |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| showLoading | 是否显示加载中状态 | boolean | true |  |
| loader | 默认的Loader组件 | react node | Loader |  |
| loadJsonData | 加载JSON数据的方法 | function | - |  |
| jsonData | 用于生成Tree的JSON数据 | object | - |  |
| autoCheckLeafs | 勾选父节点是否自动将所有子节点勾选 | boolean | true |  |
| multiSelect | 是否可以选中多个TreeItem | boolean | false |  |
| onlySelectLeaf | 是否只可以选中叶子节点 | boolean | true | 当true时，点击父节点只控制树的展开/折叠 |
| checkable | 是否可以勾选节点 | boolean | false |  |
| defaultExpandedItems | 默认展开的节点 | Array(string) | [] |  |
| expandedItems | 当前展开的节点 | Array(string) | - | 一旦设置必须通过onExpand方法去自行控制数组中的值 |
| defaultSelectedItems | 默认选中的节点 | Array(string) | [] |  |
| selectedItems | 当前选中的节点 | Array(string) | - | 一旦设置必须通过onSelect方法去自行控制数组中的值 |
| defaultCheckedItems | 默认勾选的节点 | Array(string) | [] |  |
| checkedItems | 当前勾选的节点 | Array(string) | - | 一旦设置必须通过onCheck方法去自行控制数组中的值 |
| highlightLine | 是否高亮显示整个TreeItem所在的行 | boolean | false |  |
| onSelect | 当点击选中某个TreeItem触发的回调函数 | function | - |  |
| onCheck | 当勾选中某个TreeItem触发的回调函数 | function | - |  |
| onExpand | 当展开某个TreeItem触发的回调函数 | function | - |  |

   
* <Code type="normal">TreeItem</Code>的属性如下所示:

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | Input Dom对象的引用 | function \| ref | - | 当需要获取dom对象时可设置此属性 |
| className | 样式名称 | string | tree-item |  |
| extraClassName | 额外添加的样式名称 | string | - |  |
| label | TreeItem中显示的内容 | react node | - |  |
| icon | TreeItem中左侧显示的Icon | react node | - |  |
| moreElements | TreeItem中在右侧显示的Icon | Array(react node) | - |  |


[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Tree1_BEGIN_zh_CN]
### 示例1 简单示例
<DemoDesc title="提示">
    一个简单的Tree示例，定义<Code>Tree</Code>为根节点，并且由一系列具有层级关系的<Code>Item</Code>组成。
    默认情况下，只允许选中一个叶子节点，您可以实现<Code>onSelect</Code>回调函数去处理选中事件。需要提醒的是，
    您需要给每个<Code>TreeItem</Code>指定一个<Code>id</Code>， 并且这个<Code>id</Code>在整个Tree中保证唯一。
</DemoDesc>

```jsx
import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree1() {
  return <>
    <Tree onSelect={(ids, e) => console.log(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree1_END_zh_CN]
[Tree1_BEGIN_en_US]
[Tree1_END_en_US]
----------------------------------
[Tree2_BEGIN_zh_CN]
### 示例2 Tree的其他设置
<DemoDesc title="提示">
    默认情况下，只有叶子节点可以点击，目录节点点击后只会触发子树的折叠和展示。如果需要目录节点也能点击，可以将<Code>onlySelectLeaf</Code>
    设置为<Code>false</Code>。当点击叶子节点后，只会在文字处显示背景色。如果需要整行显示选中的背景色，可以将<Code>highlightLine</Code>
    设置为<Code>true</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Tree, Toggle} from 'react-windy-ui';

export default function Tree2() {
  const [onlySelectLeaf, setOnlySelectLeaf] = useState(false);
  const [highlightLine, setHighlightLine] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle active={onlySelectLeaf}
              content={{on: 'Only Select Leaf', off: 'Only Select Leaf'}}
              onChange={(val) => setOnlySelectLeaf(val)}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={highlightLine}
              content={{on: 'Highlight Line', off: 'Highlight Line'}}
              onChange={(val) => setHighlightLine(val)}/>
    </div>

    <Tree onlySelectLeaf={onlySelectLeaf}
          highlightLine={highlightLine}
          onSelect={(ids, e) => console.log(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree2_END_zh_CN]
[Tree2_BEGIN_en_US]
[Tree2_END_en_US]
----------------------------------

[Tree3_BEGIN_zh_CN]
### 示例3 可选中的Tree
<DemoDesc title="提示">
    当将<Code>checkable</Code>设置为<Code>true</Code>后， 可以选中Tree的节点。并在<Code>onCheck</Code>回调函数中处理
    选中的<Code>TreeItem</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Tree, Toggle} from 'react-windy-ui';

export default function Tree3() {
  const [checkable, setCheckable] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle active={checkable}
              content={{on: 'Checkable', off: 'Checkable'}}
              onChange={(val) => setCheckable(val)}/>
    </div>

    <Tree checkable={checkable}
          onCheck={(ids) => console.log(ids)}
          onSelect={(ids, e) => console.log(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree3_END_zh_CN]
[Tree3_BEGIN_en_US]
[Tree3_END_en_US]
----------------------------------

[Tree4_BEGIN_zh_CN]
### 示例4 Tree的多选
<DemoDesc title="提示">
    当将<Code>multiSelect</Code>设置为<Code>true</Code>后， 可以点击并选中多个<Code>TreeItem</Code>。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Toggle, Tree} from 'react-windy-ui';

export default function Tree4() {
  const [multipleSelect, setMultipleSelect] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={multipleSelect}
              content={{on: 'Multi-Select', off: 'Multi-Select'}}
              onChange={(val) => setMultipleSelect(val)}/>
    </div>

    <Tree multiSelect={multipleSelect}
          onSelect={(ids, e) => console.log(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree4_END_zh_CN]
[Tree4_BEGIN_en_US]
[Tree4_END_en_US]
----------------------------------

[Tree5_BEGIN_zh_CN]
### 示例5 使用JSON数据生成Tree
<DemoDesc title="提示">
    可以通过<Code>jsonData</Code>属性，使用JSON数据生成一颗完整的树。
</DemoDesc>

```jsx
import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree5() {
  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        children: [
          {
            id: 'Child-1-1-1',
            label: 'Child-1-1-1',
          },
        ],

      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
          },
        ],
      },
    ],

  };

  return <>
    <Tree jsonData={jsonData}/>
  </>;
}
```
[Tree5_END_zh_CN]
[Tree5_BEGIN_en_US]
[Tree5_END_en_US]
----------------------------------

[Tree6_BEGIN_zh_CN]
### 示例6 异步读取JSON数据生成Tree
<DemoDesc title="提示">
    可以通过<Code>jsonData</Code>属性，使用JSON数据生成一颗完整的树。如果需要异步读取这段JSON数据，则可以提供一个<Code>loadJsonData</Code>
    方法，然后从远程读取数据，并返回一个Promise对象。 这里需要注意的是，需要在<Code>TreeItem</Code>的JSON数据中设置一个<Code>isLeaf</Code>属性。
    如果<Code>isLeaf</Code>为<Code>false</Code>时，点击该节点会继续触发异步加载。
</DemoDesc>

```jsx
import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree6() {
  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        //it should not be represented as leaf node
        //that means the the sub nodes would be asynchronously loaded  by calling loadJsonData() method
        isLeaf: false,
      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
            isLeaf: true,
          },
        ],

      },
    ],
  };

  const loadData = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: id + '-1',
            label: id + '-1',
            isLeaf: false,
          },
          {
            id: id + '-2',
            label: id + '-2',
            isLeaf: true,
          }]);
      }, 1000);
    });
  };

  return <>
    <Tree jsonData={jsonData}
          loadJsonData={loadData}
          checkable={true}>
    </Tree>
  </>;
}
```
[Tree6_END_zh_CN]
[Tree6_BEGIN_en_US]
[Tree6_END_en_US]
----------------------------------

[Tree7_BEGIN_zh_CN]
### 示例7 添加Icon图标
<DemoDesc title="提示">
    如果需要在<Code>TreeItem</Code>左侧添加Icon，可以设置<Code>icon</Code>属性。如果需要在右侧添加多个Icon，则可以
    设置<Code>moreItems</Code>属性，在其中添加多个Icon图标即可。
</DemoDesc>

```jsx
import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree7() {
  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        //it should not be represented as leaf node
        //that means the the sub nodes would be asynchronously loaded  by calling loadJsonData() method
        isLeaf: false,
      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
            isLeaf: true,
          },
        ],

      },
    ],
  };

  const loadData = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: id + '-1',
            label: id + '-1',
            isLeaf: false,
          },
          {
            id: id + '-2',
            label: id + '-2',
            isLeaf: true,
          }]);
      }, 1000);
    });
  };

  return <>
    <Tree jsonData={jsonData}
          loadJsonData={loadData}
          checkable={true}>
    </Tree>
  </>;
}
```
[Tree7_END_zh_CN]
[Tree7_BEGIN_en_US]
[Tree7_END_en_US]
----------------------------------

[Tree8_BEGIN_zh_CN]
### 示例8 默认展开节点
<DemoDesc title="提示">
    在<Code>defaultExpandedItems</Code>数组中添加需要展开的节点id, 可以在首次加载后展开对应的节点。
    这个属性只控制初始显示，即第一次显示时使用，当后续在界面点击时可再次展开或折叠对应的子树。
</DemoDesc>

```jsx
import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree8() {
  return <>
    <Tree defaultExpandedItems={['Parent-1', 'Child-1-5']}
          onExpand={(ids) => console.log(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree8_END_zh_CN]
[Tree8_BEGIN_en_US]
[Tree8_END_en_US]
----------------------------------

[Tree9_BEGIN_zh_CN]
### 示例9 自行控制展开
<DemoDesc title="提示">
     对于<Code>defaultExpandedItems</Code>属性，其只控制初始显示，即第一次显示时使用，当后续在界面点击时可再次展开或折叠对应的子树。
     而<Code>expandedItems</Code>则有些特殊，一旦设置该属性后，控件内部无法自行展开或折叠。要想切换状态必须提供一个<Code>onExpand</Code>
     回调函数，并自行控制需要展开的<Code>TreeItem</Code>。  
        
     <Blockquota hasBackground >
     另外以下这些属性也有与expand相似的行为：      
     <ul>
        <li><Code>defaultSelectedItems</Code>、<Code>selectedItems</Code>、<Code>onSelect</Code></li>
        <li><Code>defaultCheckedItems</Code>、<Code>checkedItems</Code>、<Code>onCheck</Code></li>
    </ul> 
    </Blockquota>
    
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree9() {
  const [expandedItems, setItems] = useState(['Parent-1', 'Child-1-5']);

  const expand = (id, isExpend, e) => {
    if (isExpend) {
      setItems(pre => [...pre, id]);
    } else {
      setItems(pre => pre.filter(itemId => id !== itemId));
    }
  };

  return <>
    <Tree expandedItems={expandedItems}
          onExpand={expand}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
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
  </>;
}
```
[Tree9_END_zh_CN]
[Tree9_BEGIN_en_US]
[Tree9_END_en_US]
----------------------------------