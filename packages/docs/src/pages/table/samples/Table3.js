import React, { useState } from 'react';
import { Select, Table } from 'react-windy-ui';

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
    paramName: 'address'
  }
];

export default function Table3() {
  const [checkType, setCheckType] = useState('checkbox');
  return (
    <>
      <div className="doc doc-row space">
        <span style={{ fontWeight: '600' }}>Type:</span>
        <Select value={checkType} onSelect={(value) => setCheckType(value)}>
          <Select.Option value="radio">radio</Select.Option>
          <Select.Option value="checkbox">checkbox</Select.Option>
        </Select>
      </div>
      <Table
        type="simple"
        hover={true}
        loadData={loadData}
        cells={cells}
        checkable={true}
        checkType={checkType}
        onCheckAll={(next) => console.log('check all: ' + next)}
        onCheckChange={(jsonData, next) => console.log('check one: ' + jsonData + next)}
        defaultCheckedRows={'2'}
      />
    </>
  );
}
