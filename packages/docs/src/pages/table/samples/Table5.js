import React, { useState } from 'react';
import { Loader, Table } from 'react-windy-ui';

const cellsData = [
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
    sortable: true
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

export default function Table5() {
  const [data, setData] = useState(cellsData);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const sort = (cell) => {
    if (cell.paramName === 'key') {
      const nextOrder = order ? (order.order === 'asc' ? 'desc' : 'asc') : 'desc';

      const sortFunc = nextOrder === 'asc' ? (a, b) => a.key - b.key : (a, b) => b.key - a.key;

      setLoading(true);

      setTimeout(() => {
        var sortedData = data.sort(sortFunc);
        setData([...sortedData]);
        setOrder({ key: cell.key, order: nextOrder });
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <>
      <Loader type="primary" darkMask={false} active={loading}>
        <Table
          onSort={sort}
          sortOrder={order}
          loadData={data}
          cells={cells}
          hover={true}
          hasBorder={true}
        />
      </Loader>
    </>
  );
}
