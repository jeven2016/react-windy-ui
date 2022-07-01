import React from 'react';
import { Table, Tooltip } from 'react-windy-ui';

const loadData = () => {
  return [
    {
      key: '1',
      name: 'Joe1',
      age: 22,
      address: 'address1'
    },
    {
      key: '2',
      name: 'Joe2',
      age: 22,
      address: 'address1'
    }
  ];
};

const cells = [
  {
    head: 'ID',
    paramName: 'key'
  },
  {
    head: 'Name',
    paramName: 'name'
  },
  {
    head: 'Age',
    paramName: 'age'
  },
  {
    head: 'Address',
    paramName: 'address',

    format: (addressText) => {
      return <Tooltip body={`The address is ${addressText}`}>{addressText}</Tooltip>;
    }
  }
];

export default function Table2() {
  return (
    <>
      <Table loadData={loadData} cells={cells} hover={true} hasBorder={true} />
    </>
  );
}
