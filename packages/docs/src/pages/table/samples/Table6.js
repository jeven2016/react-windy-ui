import React, { useRef } from 'react';
import { Button, Table } from 'react-windy-ui';

const loadData = () => {
  return [
    {
      key: '1',
      name: 'Nanjing',
      place: 'Zhonghua Gate'
    },
    {
      key: '2',
      name: 'Nanjing',
      place: 'Qinhuai River'
    },
    {
      key: '3',
      name: 'Shanghai',
      place: 'The Bund Shanghai'
    },
    {
      key: '4',
      name: 'Shanghai',
      place: 'Jade Buddha Temple'
    },
    {
      key: '5',
      name: 'Beijing',
      place: 'Forbidden City'
    },
    {
      key: '6',
      name: 'Beijing',
      place: 'Badaling Great Wall'
    }
  ];
};

const cells = [
  {
    head: 'ID',
    paramName: 'key',
    sortable: true
  },
  {
    head: 'City',
    paramName: 'name',
    filterable: true,
    filterConfig: {
      filterItems: [
        {
          text: '南京',
          value: 'Nanjing'
        },
        {
          text: '北京',
          value: 'Beijing'
        },
        {
          text: '上海',
          value: 'Shanghai'
        }
      ],
      resetText: '重 置',
      okText: '确 定',
      onFilter: (filterValues, rowData) => {
        for (let value of filterValues) {
          if (rowData.name.includes(value)) {
            return true;
          }
        }
        return false;
      }
    }
  },
  {
    head: 'Place',
    paramName: 'place',
    filterable: true,
    filterConfig: {
      filterItems: [
        {
          text: '秦淮河',
          value: 'Qinhuai'
        },
        {
          text: '故宫',
          value: 'Forbidden'
        },
        {
          text: '外滩',
          value: 'Bund'
        }
      ]
    }
  }
];

export default function Table6() {
  const instanceRef = useRef(null);

  return (
    <>
      <Button onClick={() => instanceRef.current.clearSort()}>Clear Sort</Button>
      <Button onClick={() => instanceRef.current.clearFilter()}>Clear Filter</Button>
      <Button onClick={() => instanceRef.current.clearAll()}>Clear All</Button>
      <Table
        instanceRef={instanceRef}
        loadData={loadData}
        cells={cells}
        hover={true}
        hasBorder={true}
      />
    </>
  );
}
