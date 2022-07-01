import React from 'react';
import { Tree } from 'react-windy-ui';

export default function Tree5() {
  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        children: [
          {
            id: 'Child-1-1-1',
            label: 'Child-1-1-1'
          }
        ]
      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1'
          }
        ]
      }
    ]
  };

  return (
    <>
      <Tree jsonData={jsonData} />
    </>
  );
}
