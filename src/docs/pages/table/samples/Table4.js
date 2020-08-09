import React from 'react';
import {Table, Tooltip} from 'react-windy-ui';

const loadData = () => {
  return [
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
};

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

    format: (addressText) => {
      return <Tooltip body={`The address is ${addressText}`}>
        {addressText}
      </Tooltip>;
    },
  },
];

export default function Table4() {

  return <>

    <Table loadData={loadData} cells={cells} hover={true}
           hasBorder={true}/>

  </>;
}