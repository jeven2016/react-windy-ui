import React from 'react';
import {Table} from 'react-windy-ui';

const data = [
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

const cells = [
  {
    head: 'ID',
    paramName: 'key',
    sortable: true,
  },
  {
    head: 'City',
    paramName: 'name',
    sortable: true,
  },
  {
    head: 'Place',
    paramName: 'place',
    sortable: true,
  },
];

export default function Table8() {
  return <>

    <Table loadData={data}
           cells={cells}
           hover={true}
           checkable={true}
           scrollY={true}
           bodyHeight={160}
    />
  </>;
}