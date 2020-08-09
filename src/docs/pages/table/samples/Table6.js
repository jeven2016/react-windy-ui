import React from 'react';
import {Table, Tooltip} from 'react-windy-ui';

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
    key: 'key',
    sortable: true,
  },
  {
    head: 'Name',
    showParam: 'name',
    key: 'name',
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
    },

  },
  {
    head: 'Place',
    showParam: 'place',
    key: 'place',
  },
];

export default function Table6() {

  return <>

    <Table loadData={loadData} cells={cells} hover={true}
           hasBorder={true}/>

  </>;
}