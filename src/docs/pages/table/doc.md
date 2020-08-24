----------- Title ------------
[TITLE_BEGIN_zh_CN]
## 表格 Table
Table常用来展示多行多列的数据，在企业应用中广泛被使用。

Tabs提供的功能主要有：  

- 提供多种类型的Table可供切换
- 支持表格的排序、过滤、单选、多选等功能
- 支持固定表头、固定列的滚动展示
- 基于JSON数据生成完整的表格

[TITLE_END_zh_CN]


[TITLE_BEGIN_en_US]
[TITLE_END_en_US]

------------- Footer ---------------------
[FOOTER_BEGIN_zh_CN]
[FOOTER_END_zh_CN]

[FOOTER_BEGIN_en_US]
[FOOTER_END_en_US]

------------- Samples ---------------------
[Table1_BEGIN_zh_CN]
### 示例1: 简单示例
<DemoDesc title="提示">
 一个Table通常由<Code>thead</Code>和<Code>tbody</Code>组成，这里使用了原生的<Code>thead</Code>和<Code>tbody</Code>去渲染一个table。
 您还可以切换不同的Table类型：<Code>normal</Code>、<Code>striped</Code>、<Code>simple</Code>。
 此外还可进一步设置table是否有边框，是否有边缘阴影以及鼠标移到表格行上时是否有黑色背影。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Select, Table, Toggle} from 'react-windy-ui';

export default function Table1() {
  const [type, setType] = useState('normal');
  const [hover, setHover] = useState(false);
  const [hasBorder, setBorder] = useState(true);
  const [hasBox, setBox] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={val => setBox(val)}
              content={{on: 'Box Shadown', off: 'Box Shadown'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hover} onChange={val => setHover(val)}
              content={{on: 'Hover', off: 'Hover'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBorder} onChange={val => setBorder(val)}
              content={{on: 'Border', off: 'Border'}}/>
    </div>

    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="striped">striped</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>

    <Table type={type} hover={hover} hasBorder={hasBorder} hasBox={hasBox}>
      <thead>
      <tr>
        <th>NO.</th>
        <th>Name</th>
        <th>Age</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Joe</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Joe2</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Joe3</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Joe4</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      </tbody>
    </Table>

  </>;
}
```
[Table1_END_zh_CN]

[Table1_BEGIN_en_US]
[Table1_END_en_US]
----------------------------------
[Table2_BEGIN_zh_CN]
### 示例2: 使用JSON数据生成Table
<DemoDesc title="提示">
 虽然在示例1中我们可以使用原生的html元素去构建一个Table，但这里还是建议优先选择JSON数据生成Table的方式，因为当有特定需求的时您可以自行调整更多参数设定。
 <Code>cells</Code>是一个数组属性主要用来定义一系列的表格列，数组中的cell格式为<Code>{head，showParam，format}</Code>。其中，<Code>head<、Code>表示表格的head列对应显示的内容，
 <Code>showParam</Code>表示这一列需要显示数据对象的某个字段，<Code>format</Code>则不是必须的，如果您需要根据值去显示不一样的内容，可以考虑提供此实现。loadData主要用来提供表格
 行数据，这里可以提供一个数组，也可以是一个返回数组对象的方法。但需要注意的是，您需要额外指定一个<Code>key</Code>属性，这个可以通常对应数据库中的ID，因为在渲染表格行时，
 react需要给数组的渲染对象指定一个key。
</DemoDesc>

```jsx
import React from 'react';
import {Table} from 'react-windy-ui';

const loadData = () => {
  return [
    {
      key: '1',
      name: 'Joe1',
      age: 22,
      address: 'address1',
    },
    {
      key: '2',
      name: 'Joe2',
      age: 22,
      address: 'address1',
    },
  ];
};

const cells = [
  {
    head: 'ID',
    showParam: 'key',
  },
  {
    head: 'Name',
    showParam: 'name',
  },
  {
    head: 'Age',
    showParam: 'age',
  },
  {
    head: 'Address',
    showParam: 'address',

    format: (addressText) => {
      return <Tooltip body={`The address is ${addressText}`}>
          {addressText}
      </Tooltip>;
    },
  },
];

export default function Table2() {

  return <>

    <Table loadData={loadData} cells={cells} hover={true}
           hasBorder={true}/>

  </>;
}
```
[Table2_END_zh_CN]

[Table2_BEGIN_en_US]
[Table2_END_en_US]
----------------------------------
[Table3_BEGIN_zh_CN]
### 示例3: 单选/多选表格行
<DemoDesc title="提示">
    将<Code>checkable</Code>设置为<Code>true</Code>后，表格会增加一列显示勾选组件。设置<Code>checkType</Code>属性，可以启用checkbox或是radio组件。当点击后会触发<Code>onCheckAll</Code>、<Code>onCheckChange</Code>回调。
    如果需要一开始就选中某些行，则可以指定<Code>defaultCheckedRows</Code>属性。如果需要自行控制选中哪些行，就可以只使用<Code>CheckedRows</Code>（非<Code>defaultCheckedRows</Code>）配合<Code>onCheckAll</Code>、<Code>onCheckChange</Code>方法，
    去控制选中的行。
</DemoDesc>

```jsx


const loadData = () => {
  return [
    {
      key: '1',
      name: 'Joe1',
      age: 22,
      address: 'address1',
    },
    {
      key: '2',
      name: 'Joe2',
      age: 22,
      address: 'address1',
    },
  ];
};

const cells = [
  {
    head: 'ID',
    showParam: 'key',
  },
  {
    head: 'Name',
    showParam: 'name',
  },
  {
    head: 'Age',
    showParam: 'age',
  },
  {
    head: 'Address',
    showParam: 'address',
  },
];

export default function Table3() {
  const [checkType, setCheckType] = useState('checkbox');
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={checkType} onSelect={value => setCheckType(value)}>
        <Select.Option value="radio">radio</Select.Option>
        <Select.Option value="checkbox">checkbox</Select.Option>
      </Select>
    </div>
    <Table type="simple"
           hover={true}

           loadData={loadData}
           cells={cells}
           checkable={true}
           checkType={checkType}
           onCheckAll={(next) => console.log('check all: ' + next)}
           onCheckChange={(jsonData, next) => console.log(
               'check one: ' + jsonData + next)}
           defaultCheckedRows={'2'}/>
  </>;
}
```
[Table3_END_zh_CN]

[Table3_BEGIN_en_US]
[Table3_END_en_US]
----------------------------------
[Table4_BEGIN_zh_CN]
### 示例4: 排序
<DemoDesc title="提示">
   要使某列可以排序时，可以在<Code>cells</Code>数组中针对某一列设置<Code>sortable</Code>属性。当值设置为<Code>true</Code>后，该列就支持排序功能。
   将<Code>defaultSortOrder</Code>设置为<Code>asc</Code>或<Code>desc</Code>时，可以指定默认首次排序时是升序还是降序。
   如果需要自行决定排序规则，则可以提供一个<Code>sortComparator</Code>方法，每次在触发排序时被调用。
</DemoDesc>

```jsx
import React from 'react';
import {Table} from 'react-windy-ui';

const loadData = [
  {
    key: '1',
    name: 'Joe1',
    age: 12,
    address: 'address1',
  },
  {
    key: '2',
    name: 'Joe2',
    age: 22,
    address: 'address2',
  },
  {
    key: '3',
    name: 'Joe3',
    age: 12,
    address: 'address3',
  },
];

const cells = [
  {
    head: 'ID',
    showParam: 'key',
    sortable: true,
    sortComparator: (a, b, order) => order === 'asc' ? a - b : b - a,
    defaultSortOrder: 'asc',
  },
  {
    head: 'Name',
    showParam: 'name',
    sortable: true,
    defaultSortOrder: 'asc',
  },
  {
    head: 'Age',
    showParam: 'age',
    sortable: true,
  },
  {
    head: 'Address',
    showParam: 'address',
    sortable: true,
    defaultSortOrder: 'desc',
  },
];

export default function Table4() {

  return <>

    <Table loadData={loadData} cells={cells} hover={true}
           hasBorder={true}/>

  </>;
}
```
[Table4_END_zh_CN]

[Table4_BEGIN_en_US]
[Table4_END_en_US]
----------------------------------
[Table5_BEGIN_zh_CN]
### 示例5: 异步排序以及显示加载中状态
<DemoDesc title="提示">
   使用了<Code>sortOder</Code>属性即意味着您需要自行控制排序逻辑，此时需要提供一个<Code>onSort</Code>方法去更新排序结果，而且Table内部将不再自动切换排序规则。
   在Table之上包裹一层<Code>Loader</Code>，则可以显示加载中的状态。
</DemoDesc>

```jsx
import React, {useState} from 'react';
import {Loader, Table} from 'react-windy-ui';

const cellsData = [
  {
    key: '1',
    name: 'Joe1',
    age: 12,
    address: 'address1',
  },
  {
    key: '2',
    name: 'Joe2',
    age: 22,
    address: 'address2',
  },
  {
    key: '3',
    name: 'Joe3',
    age: 12,
    address: 'address3',
  },
];

const cells = [
  {
    head: 'ID',
    showParam: 'key',
    sortable: true,
  },
  {
    head: 'Name',
    showParam: 'name',
  },
  {
    head: 'Age',
    showParam: 'age',
  },
  {
    head: 'Address',
    showParam: 'address',
  },
];

export default function Table5() {
  const [data, setData] = useState(cellsData);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const sort = (cell) => {
    if (cell.showParam === 'key') {
      const nextOrder = order ? order.order === 'asc' ? 'desc' : 'asc'
          : 'desc';

      const sortFunc = nextOrder === 'asc' ?
          (a, b) => a.key - b.key :
          (a, b) => b.key - a.key;

      setLoading(true);

      setTimeout(() => {
        var sortedData = data.sort(sortFunc);
        setData([...sortedData]);
        setOrder({key: cell.key, order: nextOrder});
        setLoading(false);
      }, 2000);

    }
  };
  return <>
    <Loader type="primary"
            darkMask={false}
            active={loading}>
      <Table onSort={sort} sortOrder={order} loadData={data} cells={cells}
             hover={true}
             hasBorder={true}/>
    </Loader>
  </>;
}
```
[Table5_END_zh_CN]

[Table5_BEGIN_en_US]
[Table5_END_en_US]
----------------------------------
[Table6_BEGIN_zh_CN]
### 示例6: 过滤表格行
<DemoDesc title="提示">
   要使表格列支持过滤功能，需要将<Code>filterable</Code>属性设置为<Code>true</Code>,同时需要提供一个<Code>filterConfig</Code>对象。
   其中<Code>filterItems</Code>属性提供可供过滤的选项，而<Code>onFilter</Code>
   用来判断选中值是否符合标准。另外过滤弹出框提供了<Code>reset</Code>和<Code>ok</Code>按钮，您可以设置对应的显示文字。
</DemoDesc>

```jsx
import React from 'react';
import {Table} from 'react-windy-ui';

const loadData = () => {
  return [
    {
      key: '1',
      name: 'Nanjing',
      place: 'Zhonghua Gate',
    },
    {
      key: '2',
      name: 'Nanjing',
      place: 'Qinhuai River',
    },
    {
      key: '3',
      name: 'Shanghai',
      place: 'The Bund Shanghai',
    },
    {
      key: '4',
      name: 'Shanghai',
      place: 'Jade Buddha Temple',
    },
    {
      key: '5',
      name: 'Beijing',
      place: 'Forbidden City',
    },
    {
      key: '6',
      name: 'Beijing',
      place: 'Badaling Great Wall',
    },
  ];
};

const cells = [
  {
    head: 'ID',
    showParam: 'key',
    sortable: true,
  },
  {
    head: 'City',
    showParam: 'name',
    filterable: true,
    filterConfig: {
      filterItems: [
        {
          text: '南京',
          value: 'Nanjing',
        },
        {
          text: '北京',
          value: 'Beijing',
        },
        {
          text: '上海',
          value: 'Shanghai',
        }],
      resetText: '重 置',
      okText: '确 定',
      onFilter: (filterValues, rowData) => {
        for (let value of filterValues) {
          if (rowData.name.includes(value)) {
            return true;
          }
        }
        return false;
      },
    },
  },
  {
    head: 'Place',
    showParam: 'place',
    filterable: true,
    filterConfig: {
      filterItems: [
        {
          text: '秦淮河',
          value: 'Qinhuai',
        },
        {
          text: '故宫',
          value: 'Forbidden',
        },
        {
          text: '外滩',
          value: 'Bund',
        }],
    },
  },
];

export default function Table6() {

  return <>

    <Table loadData={loadData} cells={cells}
           hover={true}
           hasBorder={true}/>

  </>;
}
```
[Table6_END_zh_CN]

[Table6_BEGIN_en_US]
[Table6_END_en_US]
----------------------------------
[Table7_BEGIN_zh_CN]
### 示例7: 在表格列中添加自定义的元素
<DemoDesc title="提示">
   Table中某列允许过滤时，会在表头对应的列上显示一个过滤的图标。如果还需要实现其他的功能，比如需要点击后弹出搜索框的功能，则可以参照此例
   添加一个elements数组属性。
</DemoDesc>

```jsx
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  IconSearch,
  Input,
  Row,
  Table,
} from 'react-windy-ui';

const tableData = [
  {
    key: '1',
    name: 'Nanjing',
    place: 'Zhonghua Gate',
  },
  {
    key: '2',
    name: 'Nanjing',
    place: 'Qinhuai River',
  },
  {
    key: '3',
    name: 'Shanghai',
    place: 'The Bund Shanghai',
  },
  {
    key: '4',
    name: 'Shanghai',
    place: 'Jade Buddha Temple',
  },
  {
    key: '5',
    name: 'Beijing',
    place: 'Forbidden City',
  },
  {
    key: '6',
    name: 'Beijing',
    place: 'Badaling Great Wall',
  },
];

const Element = ({onSearch, tableProps}) => {
//todo: the value always be cleared
  const [value, setValue] = useState('');
  return <Card hasBox={false} block>
    <Card.Header><h5>Enter the value to search:</h5></Card.Header>
    <Card.Row>
      <Input placeholder="Search Value" value={value}
             onChange={e => {
               setValue(e.target.value);
             }}/>
    </Card.Row>
    <Card.Row>
      <Row>
        <Col xs={6} justify="center">
          <Button block onClick={(e) => setValue('')}>Reset</Button>
        </Col>
        <Col xs={6} justify="center">
          <Button type="primary" block onClick={() => {
            //to close the popup
            document.body.click();
            onSearch(value);
          }}>
            <IconSearch/><span>Search</span>
          </Button>
        </Col>
      </Row>
    </Card.Row>

  </Card>;
};

export default function Table7() {
  const [data, setData] = useState(tableData);
  const instanceRef = useRef(null);

  const onSearch = useCallback((value) => {
    var newData = tableData.filter(d => d.name.includes(value));
    setData(newData);
  });

  const cells = useMemo(() => [
    {
      head: 'ID',
      showParam: 'key',
      sortable: true,
    },
    {
      head: 'City',
      showParam: 'name',
      filterable: true,
      filterConfig: {
        filterItems: [
          {
            text: '南京',
            value: 'Nanjing',
          },
          {
            text: '北京',
            value: 'Beijing',
          },
          {
            text: '上海',
            value: 'Shanghai',
          }],
      },
      elements: [
        {
          key: 'search',
          head: <IconSearch/>,
          body: ({tableProps}) => <Element tableProps={tableProps}
                                           onSearch={onSearch}/>,
        },
      ],
    },
    {
      head: 'Place',
      showParam: 'place',
      filterable: true,
      filterConfig: {
        filterItems: [
          {
            text: '秦淮河',
            value: 'Qinhuai',
          },
          {
            text: '故宫',
            value: 'Forbidden',
          },
          {
            text: '外滩',
            value: 'Bund',
          }],
      },
    },
  ], [onSearch]);

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button onClick={() => instanceRef.current.clearSort()}>
          Clear Sort
        </Button>
        <Button onClick={() => instanceRef.current.clearFilter()}>
          Clear Filter
        </Button>
        <Button onClick={() => instanceRef.current.clearAll()}>
          Clear All
        </Button>
      </ButtonGroup>
    </div>
    <Table instanceRef={instanceRef}
           loadData={data} cells={cells}
           hover={true}
           hasBorder={true}/>

  </>;
}
```
[Table7_END_zh_CN]

[Table7_BEGIN_en_US]
[Table7_END_en_US]
----------------------------------