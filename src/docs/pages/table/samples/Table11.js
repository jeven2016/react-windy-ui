import React from 'react';
import {Table, Tooltip} from 'react-windy-ui';

const loadData = () => {
  return [
    {
      key: '1',
      name: 'Joe1',
      age: 12,
      address: 'address1 address1 address1 address1 address1',
    },
    {
      key: '2',
      name: 'Joe2',
      age: 22,
      address: 'address2 address2 address2 address2 address2 ',
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
    autoEllipsis: true,
  },
];

export default function Table11() {

  return <>

    <Table loadData={loadData} cells={cells} hover={true}
           hasBorder={true}/>

  </>;
}