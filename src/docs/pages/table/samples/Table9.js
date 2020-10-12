import React from 'react';
import {Table} from 'react-windy-ui';

const data = [
  {
    key: '1',
    name: 'Nanjing',
    place: 'Zhonghua Gate',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
  {
    key: '2',
    name: 'Nanjing',
    place: 'Qinhuai River',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
  {
    key: '3',
    name: 'Shanghai',
    place: 'The Bund Shanghai',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
  {
    key: '4',
    name: 'Shanghai',
    place: 'Jade Buddha Temple',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
  {
    key: '5',
    name: 'Beijing',
    place: 'Forbidden City',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
  {
    key: '6',
    name: 'Beijing',
    place: 'Badaling Great Wall',
    desc: 'Description',
    actions: <div style={{color: '#0ca0ff'}}>Delete</div>,
  },
];

const cells = [
  {
    key: 'ID',
    head: 'ID',
    showParam: 'key',
    sortable: true,
    fixed: 'left',
    width: '90px',
  },
  {
    key: 'City',
    head: 'City',
    showParam: 'name',
    sortable: true,
    fixed: 'left',
    width: '110px',
  },
  {
    key: 'Place',
    head: 'Place',
    showParam: 'place',
    sortable: true,
    width: '170px',
  },
  {
    key: 'desc',
    head: 'Description',
    showParam: 'desc',
    width: '150px',
  },
  {
    key: 'Column1',
    head: 'Column1',
    showParam: 'desc',
    width: '150px',
  },
  {
    key: 'Column2',
    head: 'Column2',
    showParam: 'desc',
    width: '150px',
  },
  {
    key: 'Column3',
    head: 'Column3',
    showParam: 'desc',
    width: '150px',
  },
  {
    key: 'Column4',
    head: 'Column4',
    showParam: 'desc',
    width: '150px',
  },
  {
    key: 'Column5',
    head: 'Column5',
    showParam: 'desc',
    width: '150px',
  },
  {
    head: 'Column6',
    width: '150px',
    showParam: 'desc',  //don't supple the width for the last td in order to make this td occupy the rest space
  },
  {
    head: 'Action',
    showParam: 'actions',
    fixed: 'right',
  },
];

export default function Table9() {
  return <Table loadData={data}
                cells={cells}
                hover={true}
                type="striped"
                scrollY={true}
                scrollX={true}
                bodyWidth={1500}/>;
}