import React from 'react';
import DocPage from '../../utils/DocPage';
import Bq1 from './samples/Bq1';
import Bq2 from './samples/Bq2';
import Bq4 from './samples/Bq4';
import Bq3 from './samples/Bq3';
import Bq5 from './samples/Bq5';

const componentMapping = {
  Bq1: <Bq1/>,
  Bq2: <Bq2/>,
  Bq3: <Bq3/>,
  Bq4: <Bq4/>,
  Bq5: <Bq5/>,
};

export default function BqIndex(props) {
  return <>
    <DocPage
        importFunc={() => import('./doc.md')}
        componentMapping={componentMapping}
    />
  </>;
}