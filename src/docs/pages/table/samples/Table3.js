import React from 'react';
import {Table, Tooltip, Badge} from 'react-windy-ui';

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
    key: 'key',
  },
  {
    head: 'Name',
    showParam: 'name',
    key: 'name',
  },
  {
    head: 'Age',
    showParam: 'age',
    key: 'age',
  },
  {
    head: 'Address',
    showParam: 'address',
    key: 'address',

    format: (addressText) => {
      return <Tooltip body={`The address is ${addressText}`}>
        {addressText}
      </Tooltip>;
    },
  },
];

export default function Table3() {
  return <>
    <Table type="simple"
           hover={true}

           loadData={loadData}
           cells={cells}
           checkable={true}
           checkType="checkbox"
           onCheckAll={(next) => console.log('check all: ' + next)}
           onCheckChange={(jsonData, next) => console.log(
               'check one: ' + jsonData + next)}
           defaultCheckedRows={['2']}/>
  </>;
}