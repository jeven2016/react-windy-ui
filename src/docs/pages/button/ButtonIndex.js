import React from 'react';
import SampleBtn1 from './samples/SampleBtn1';
import SampleBtn2 from './samples/SampleBtn2';
import SampleBtn3 from './samples/SampleBtn3';
import SampleBtn4 from './samples/SampleBtn4';
import SampleBtn5 from './samples/SampleBtn5';
import SampleBtn6 from './samples/SampleBtn6';
import SampleBtn7 from './samples/SampleBtn7';
import SampleBtn8 from './samples/SampleBtn8';
import SampleBtn9 from './samples/SampleBtn9';
import SampleBtn10 from './samples/SampleBtn10';
import SampleBtn11 from './samples/SampleBtn11';
import SampleBtn12 from './samples/SampleBtn12';
import SampleBtn13 from './samples/SampleBtn13';
import DocPage from '../../utils/DocPage';
import SampleBtn14 from './samples/SampleBtn14';

const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  SampleBtn1: 'SampleBtn1',
  SampleBtn2: 'SampleBtn2',
  SampleBtn3: 'SampleBtn3',
  SampleBtn4: 'SampleBtn4',
  SampleBtn5: 'SampleBtn5',
  SampleBtn6: 'SampleBtn6',
  SampleBtn7: 'SampleBtn7',
  SampleBtn8: 'SampleBtn8',
  SampleBtn9: 'SampleBtn9',
  SampleBtn10: 'SampleBtn10',
  SampleBtn11: 'SampleBtn11',
  SampleBtn12: 'SampleBtn12',
  SampleBtn13: 'SampleBtn13',
  SampleBtn14: 'SampleBtn14',
};

const componentMapping = {
  SampleBtn1: <SampleBtn1/>,
  SampleBtn2: <SampleBtn2/>,
  SampleBtn3: <SampleBtn3/>,
  SampleBtn4: <SampleBtn4/>,
  SampleBtn5: <SampleBtn5/>,
  SampleBtn6: <SampleBtn6/>,
  SampleBtn7: <SampleBtn7/>,
  SampleBtn8: <SampleBtn8/>,
  SampleBtn9: <SampleBtn9/>,
  SampleBtn10: <SampleBtn10/>,
  SampleBtn11: <SampleBtn11/>,
  SampleBtn12: <SampleBtn12/>,
  SampleBtn13: <SampleBtn13/>,
  SampleBtn14: <SampleBtn14/>,
};

export default function ButtonIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}