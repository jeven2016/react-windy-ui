import React, {useRef} from 'react';
import {Table, ButtonGroup, Button} from 'react-windy-ui';

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
    },
    headElements: {
      key: 'search',
      body: (props)=>{
        return <div>
          <Button/>
        </div>
      }
    }
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

export default function Table7() {
  const instanceRef = useRef(null);

  return <>
    <div className="doc doc-row">
      <Button onClick={() => instanceRef.current.clearAll()}>
        Clear All
      </Button>
    </div>
    <Table instanceRef={instanceRef} loadData={loadData} cells={cells}
           hover={true}
           hasBorder={true}/>

  </>;
}