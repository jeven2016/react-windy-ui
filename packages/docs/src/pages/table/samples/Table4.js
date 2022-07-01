import React from 'react';
import { Table } from 'react-windy-ui';

const loadData = [
  {
    key: '1',
    name: 'Joe1',
    age: 12,
    address: 'address1'
  },
  {
    key: '2',
    name: 'Joe2',
    age: 22,
    address: 'address2'
  },
  {
    key: '3',
    name: 'Joe3',
    age: 12,
    address: 'address3'
  }
];

const cells = [
  {
    head: 'ID',
    paramName: 'key',
    sortable: true,
    sortComparator: (a, b, order) => (order === 'asc' ? a - b : b - a),
    defaultSortOrder: 'asc'
  },
  {
    head: 'Name',
    paramName: 'name',
    sortable: true,
    defaultSortOrder: 'asc'
  },
  {
    head: 'Age',
    paramName: 'age',
    sortable: true
  },
  {
    head: 'Address',
    paramName: 'address',
    sortable: true,
    defaultSortOrder: 'desc'
  }
];

export default function Table4() {
  return (
    <>
      <Table loadData={loadData} cells={cells} hover={true} hasBorder={true} />
    </>
  );
}
