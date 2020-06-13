----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 选择 Select
Select与Dropdown组件有相似之处，不同之处就在于，Dropdown只能单击某个选项而且不会高亮显示，但Select却可以。

Select主要有以下功能
- 单选Select
- 多选Select
- 支持关键字搜索
- Select的菜单也可以在十二个方位显示

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Select1_BEGIN_zh_CN]
### 示例1: 最简单的Popover
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    一个最简单的Select示例，需要给每个Option设置一个value属性，另外还可设置一个defaultValue去初始选中某个选项。Select的Option组件实际
    是一个Menu的Item组件，Item上可用的属性同样也适用于Option组件。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Select} from 'react-windy-ui';

export default function Select1() {
  return <>
    <Select defaultValue="beijing"
            onSelect={(value) => console.log(value)}>
      <Select.Option value="bj">
        Beijing
      </Select.Option>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Select.Option value="sz">Suzhou</Select.Option>
    </Select>

  </>;

}
```

[Select1_END_zh_CN]

[Select1_BEGIN_en_US]
[Select1_END_en_US]
----------------------------------
[Select2_BEGIN_zh_CN]
### 示例2: 可以搜索的Select
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当searchable设置为true时，Select可以根据输入的值进行过滤显示。需要注意的是默认的匹配规则是，用输入的值与Option的文本而不是value值进行比较。
    如果Option的text与输入值匹配，列表中将只显示包含输入值的Option。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select2() {
  return <>
    <Select defaultValue="sh"
            searchable
            onSelect={(value) => console.log(`${value}`)}>
      <Select.Option value="bj">
        Beijing
      </Select.Option>
      <Divider/>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Divider/>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Divider/>
      <Select.Option value="xa">XiAn</Select.Option>
      <Divider/>
      <Select.Option value="ny">纽约</Select.Option>
      <Divider/>
      <Select.Option value="hk">香港</Select.Option>
    </Select>
  </>;

}
```

[Select2_END_zh_CN]

[Select2_BEGIN_en_US]
[Select2_END_en_US]
----------------------------------
[Select3_BEGIN_zh_CN]
### 示例3: 显示搜索中状态
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
   设置showLoader为true后，将显示一个加载中的状态。
  </div>
</fieldset>

```jsx
import React from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select3() {
  return <>
    <Select defaultValue="sh"
            showLoader={true}
            onSelect={(value) => console.log(`${value}`)}>
      <Select.Option value="bj">
        Beijing
      </Select.Option>
      <Divider/>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Divider/>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Divider/>
      <Select.Option value="xa">XiAn</Select.Option>
      <Divider/>
      <Select.Option value="ny">纽约</Select.Option>
      <Divider/>
      <Select.Option value="hk">香港</Select.Option>
    </Select>
  </>;

}
```

[Select3_END_zh_CN]

[Select3_BEGIN_en_US]
[Select3_END_en_US]
----------------------------------
[Select4_BEGIN_zh_CN]
### 示例4: 自定义搜索逻辑的Select
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    当searchable设置为true时，Select可以根据输入的值进行过滤显示。但如果需要自行实现search的逻辑时，你可以提供一个onSearch方法。
    当有搜索值时Select会调用onSelect方法，让用户自行决定如何搜索并更新列表。
  </div>
</fieldset>

```jsx
import React, {useMemo, useState} from 'react';
import {Select} from 'react-windy-ui';

export default function Select4() {
  //the items count
  const count = 15;

  //generate the items for selection
  const items = useMemo(() => {
    return [...Array(count).keys()].map((key, index) =>
        <Select.Option key={key} value={key}>{`Option ${key}`}</Select.Option>,
    );
  }, [count]);

  const [itemList, setItemList] = useState(items);

  const search = (value) => {
    console.log('search ' + value);
    let list;
    //if the value is blank, show the original items
    if (value == null || /^\s*$/.test(value)) {
      list = items;
    } else {
      //filter a list of items and ecch item's text should contain the searched value
      list = items.filter(
          item => {
            return item.props.children.toLowerCase().
                includes(value.toLowerCase());

          });
    }
    setItemList(list);
  };

  return <>
    <Select popupStyle={{height: '20rem', overflow: 'auto'}}
            activeBy="hover"
            defaultValue={0}
            searchable
            onSearch={search}
            onSelect={(val) => console.log(`You just selected ${val}`)}>
      {itemList}
    </Select>
  </>;

}
```

[Select4_END_zh_CN]

[Select4_BEGIN_en_US]
[Select4_END_en_US]
----------------------------------
[Select5_BEGIN_zh_CN]
### 示例5: 构建复杂的Select
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在这个示例中，我们构建了一个更复杂的Select组件。Select的Option内部使用一个自定义的Template去展示更丰富的内容，同时您还可以动态地新增一个Option。
    另外需要说明的是，你需要给Option指定一个value和text属性。Option的text属性是指当该选项选中时会在Select上显示的文字内容，
    当一个复杂的Option选中后，你需要在Select显示的是一个简短的内容而不是Option的子节点。
  </div>
</fieldset>

```jsx
import React, {useState} from 'react';
import {
  Button,
  IconHome,
  Input,
  InputGroup,
  Select,
  Tooltip,
} from 'react-windy-ui';

const rootStyle = {
  display: 'flex',
  flex: '1 1 200px',
};

const iconColumn = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 2rem',
  color: '#f2791a',
  marginRight: '1rem',
};

const infoColumn = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
};

const titleStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem',
};

const descStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem',
  color: '#818a91',
  fontSize: '.8rem',
};

const Template = ({title, desc}) => {
  return <div style={rootStyle}>
    <div style={iconColumn}>
      <IconHome style={{fontSize: '2rem'}}/>
    </div>
    <div style={infoColumn}>
      <div style={titleStyle}>
        {title}
      </div>
      <div style={descStyle}>
        {desc}
      </div>
    </div>
  </div>;

};

export default function Select5() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const changValue = (e) => {
    setValue(e.target.value);
  };

  const create = (e) => {
    if (value && !/^\s*$/.test(value)) {
      setList(list.concat(value));
    }
  };

  return <>
    <Select style={{width: '10rem'}}
            defaultValue="shanghai"
            position="bottomLeft"
            autoWidth={false}
            onChange={(item) => console.log(item)}>
      <Select.Option value="park" text="Central Park"
                     style={{borderBottom: '1px solid #ccc'}}>
        <Template title="Central Park"
                  desc=" 5 Ave to Central Park W, 59 St To 110 St, New York, NY 10019"/>
      </Select.Option>
      <Select.Option value="nanjing" text="Nanjing"
                     style={{borderBottom: '1px solid #ccc'}}>
        <Template title="Nanjing Presidential Palace Park"
                  desc="No. 292, Changjiang Road, Xuanwu District"/>
      </Select.Option>
      <Select.Option value="shanghai" text="Shanghai"
                     style={{borderBottom: '1px solid #ccc'}}>
        <Template title="Shanghai Museum"
                  desc="No.201 Renmin Avenue, Shanghai, Shang..."/>
      </Select.Option>
      <Select.Option value="hk" text="HongKong"
                     style={{borderBottom: '1px solid #ccc'}}>
        <Template title="Victoria Peak"
                  desc="33 Garden Road, Central, Hong Kong Isla..."/>
      </Select.Option>
      {
        list.map((title, index) => {
          return <Select.Option key={title + index} value={title} text={title}
                                style={{borderBottom: '1px solid #ccc'}}>
            <Template title={title}
                      desc={`The description for ${title}`}/>
          </Select.Option>;
        })
      }
      <div style={{display: 'flex', justifyContent: 'center', padding: '1rem'}}
           onClick={(e) => e.stopPropagation()}>
        <InputGroup>
          <Input placeholder="Creat New" value={value} onChange={changValue}/>
          <Tooltip body="Try to create one" position="right">
            <Button onClick={(e) => {create(e);}}>+</Button>
          </Tooltip>
        </InputGroup>
      </div>
    </Select>
  </>;

}
```

[Select5_END_zh_CN]

[Select5_BEGIN_en_US]
[Select5_END_en_US]
----------------------------------

[Select6_BEGIN_zh_CN]
### 示例6: 控制弹出菜单的关闭
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在这个示例中，利用active和onChange来控制弹出菜单的显示。当active为true时，菜单会弹出显示，并切会调用onChange控制打开或关闭，你可以
    在onChange回调函数中自行决定。另外需要注意的是，当点击的是背景而非弹出菜单且需要关闭这个菜单时，此时需要在useEffect或者onComponentDidMout
    中添加对window的click事件的监听，对于点击弹出菜单外部的情况需要将状态设置为关闭即可。
  </div>
</fieldset>

```jsx
import React, {useEffect, useRef, useState} from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select6() {
  const [active, setActive] = useState(false);
  const currentValue = useRef(1);
  const popupRef = useRef(null); //a reference to popup dom node
  const inputRef = useRef(null);//a reference to input dom node

  const change = (next) => {
    console.log('changed to: ' + next);
    if (!next && currentValue.current !== 1) {
      return;
    }
    setActive(next);
  };

  const select = (value) => {
    currentValue.current = value;
  };

  //add an event listener to window to close the popup
  useEffect(() => {
    const hanlder = (e) => {
      const isInputClicked = inputRef.current.contains(e.target);
      const isPopupClicked = popupRef.current.contains(e.target);

      if (isInputClicked) {
        //show the popup if clicking the input
        setActive(true);
      } else if (!isPopupClicked) {
        //close the popup if neither the input nor the popup body is clicked
        setActive(false);
      }
    };
    window.addEventListener('click', hanlder);

    return () => window.removeEventListener('click', hanlder);
  }, []);

  return <>
    <Select activeBy="hover"
            popupRef={popupRef}
            ctrlRef={inputRef}
            defaultValue={currentValue.current}
            active={active}
            onChange={change}
            onSelect={select}>
      <Select.Option value={0}>Won't close1</Select.Option>
      <Divider/>
      <Select.Option value={1}>Close</Select.Option>
      <Divider/>
      <Select.Option value={2}>Won't close2</Select.Option>
      <Divider/>
      <Select.Option value={3}>Won't close3</Select.Option>
      <Divider/>
      <Select.Option value={4}>Won't close4</Select.Option>
    </Select>
  </>;

}
```

[Select6_END_zh_CN]

[Select6_BEGIN_en_US]
[Select6_END_en_US]
----------------------------------
[Select7_BEGIN_zh_CN]
### 示例7: 多选Select
<fieldset class="doc desc">
  <legend>提示</legend>
  <div class="doc desc-area">
    在这个示例中，利用active和onChange来控制弹出菜单的显示。当active为true时，菜单会弹出显示，并切会调用onChange控制打开或关闭，你可以
    在onChange回调函数中自行决定。另外需要注意的是，当点击的是背景而非弹出菜单且需要关闭这个菜单时，此时需要在useEffect或者onComponentDidMout
    中添加对window的click事件的监听，对于点击弹出菜单外部的情况需要将状态设置为关闭即可。
  </div>
</fieldset>

```jsx
import React, {useEffect, useRef, useState} from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select7() {
  const [active, setActive] = useState(true);
  const currentValue = useRef(1);
  const popupRef = useRef(null); //a reference to popup dom node

  const change = (next) => {
    console.log('changed to: ' + next);
    if (!next && currentValue.current !== 1) {
      return;
    }
    setActive(next);
  };

  const select = (value) => {
    currentValue.current = value;
  };

  //add an event listener to window to close the popup
  useEffect(() => {
    const hanlder = (e) => {
      //close the popup while not clicking the body of the popup
      if (!popupRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    window.addEventListener('click', hanlder);

    return () => window.removeEventListener('click', hanlder);
  }, []);

  return <>
    <Select activeBy="hover"
            popupRef={popupRef}
            defaultValue={currentValue.current}
            active={active}
            onChange={change}
            onSelect={select}>
      <Select.Option value={0}>Won't close1</Select.Option>
      <Divider/>
      <Select.Option value={1}>Close</Select.Option>
      <Divider/>
      <Select.Option value={2}>Won't close2</Select.Option>
      <Divider/>
      <Select.Option value={3}>Won't close3</Select.Option>
      <Divider/>
      <Select.Option value={4}>Won't close4</Select.Option>
    </Select>
  </>;

}
```

[Select7_END_zh_CN]

[Select7_BEGIN_en_US]
[Select7_END_en_US]
----------------------------------