import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Table,
  Row,
  Button,
  Input,
  Col,
  Card,
  IconSearch,
  ButtonGroup,
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
    <Table instanceRef={instanceRef}
           loadData={data} cells={cells}
           hover={true}
           hasBorder={true}/>

  </>;
}