import React from 'react';
import {Table} from 'react-windy-ui';

const data = [
  {
    key: 1,
    name: 'Name1',
    city: 'Nanjing',
    building: 'Building 1',
    door: 'Door 1',
    desc: 'Description',
    actions: 'Delete',
  },
  {
    key: 2,
    name: 'Name2',
    city: 'Nanjing',
    building: 'Building 2',
    door: 'Door 2',
    desc: 'Description',
    actions: 'Delete',
  },
  {
    key: 3,
    name: 'Name3',
    city: 'Beijing',
    building: 'Building 3',
    door: 'Door 3',
    desc: 'Description',
    actions: 'Delete',
  },
  {
    key: 4,
    name: 'Name4',
    city: 'Beijing',
    building: 'Building 4',
    door: 'Door 4',
    desc: 'Description',
    actions: 'Delete',
  },
  {
    key: 5,
    name: 'Name5',
    city: 'Beijing',
    building: 'Building 5',
    door: 'Door 5',
    desc: 'Description',
    actions: 'Delete',
  },
  {
    key: 6,
    name: 'Name6',
    city: 'Beijing',
    building: 'Building 6',
    door: 'Door 6',
    desc: 'Description',
    actions: 'Delete',
  },
];

const cells = [
  {
    key: 'ID',
    head: 'ID',
    paramName: 'key',
    sortable: true,
    fixed: 'left',
    width: '90',
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
    },
  },
  {
    key: 'details',
    head: 'Details',
    children: [
      {
        key: 'name',
        head: 'Name',
        paramName: 'name',
        sortable: true,
        width: '100',
      },
      {
        key: 'Address',
        head: 'Address',
        children: [
          {
            key: 'City',
            head: 'City',
            paramName: 'city',
            sortable: true,
            width: '100',
          },
          {
            key: 'block',
            head: 'Block',
            children: [
              {
                key: 'building',
                head: 'Building',
                paramName: 'building',
                sortable: true,
                width: '120',
              },
              {
                key: 'door',
                head: 'Door',
                paramName: 'door',
                width: '120',
              },
            ],
          },

        ],

      },
    ],
  },

  {
    key: 'desc',
    head: 'Description',
    paramName: 'desc',
  },

  {
    head: 'Action',
    paramName: 'actions',
    width: '150px',
    fixed: 'right',
  },
];

export default function Table10() {
  return <Table loadData={data}
                cells={cells}
                hover={true}
                scrollY={true}
                scrollX={true}
                bodyWidth={1200}/>;
}