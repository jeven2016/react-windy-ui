import React from 'react';
import DocPage from '../../utils/DocPage';
import Table1 from './samples/Table1';
import Table2 from './samples/Table2';
import Table3 from './samples/Table3';
import Table4 from './samples/Table4';
import Table5 from './samples/Table5';
import Table6 from './samples/Table6';
import Table7 from './samples/Table7';

const componentMapping = {
  Table1: <Table1/>,
  Table2: <Table2/>,
  Table3: <Table3/>,
  Table4: <Table4/>,
  Table5: <Table5/>,
  Table6: <Table6/>,
  Table7: <Table7/>,
};

export default function TableIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}