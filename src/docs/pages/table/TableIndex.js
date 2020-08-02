import React from 'react';
import DocPage from '../../utils/DocPage';
import Table1 from './samples/Table1';
import Table2 from './samples/Table2';
import Table3 from './samples/Table3';

const componentMapping = {
  Table1: <Table1/>,
  Table2: <Table2/>,
  Table3: <Table3/>,
};

export default function TableIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}