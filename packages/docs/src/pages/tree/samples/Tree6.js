import React from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree6() {
  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        //it should not be represented as leaf node
        //that means the the sub nodes would be asynchronously loaded  by calling loadJsonData() method
        isLeaf: false,
      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
            isLeaf: true,
          },
        ],

      },
    ],
  };

  const loadData = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: id + '-1',
            label: id + '-1',
            isLeaf: false,
          },
          {
            id: id + '-2',
            label: id + '-2',
            isLeaf: true,
          },
          {
            id: id + '-3',
            label: id + '-3',
            isLeaf: true,
          },
          {
            id: id + '-4',
            label: id + '-4',
            isLeaf: true,
          }
        ]);
      }, 1000);
    });
  };

  return <>
    <Tree jsonData={jsonData}
          loadJsonData={loadData}
          checkable={true}>
    </Tree>
  </>;
}