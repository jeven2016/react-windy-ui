import React from 'react';
import SampleInput1 from './samples/SampleInput1';
import DocPage from '../../utils/DocPage';
import SampleInput2 from './samples/SampleInput2';
import SampleInput3 from './samples/SampleInput3';
import SampleInput4 from './samples/SampleInput4';
import SampleInput5 from './samples/SampleInput5';
import SampleInput6 from './samples/SampleInput6';

const mapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  SampleInput1: 'SampleInput1',
  SampleInput2: 'SampleInput2',
  SampleInput3: 'SampleInput3',
  SampleInput4: 'SampleInput4',
  SampleInput5: 'SampleInput5',
  SampleInput6: 'SampleInput6',
};

const componentMapping = {
  SampleInput1: <SampleInput1/>,
  SampleInput2: <SampleInput2/>,
  SampleInput3: <SampleInput3/>,
  SampleInput4: <SampleInput4/>,
  SampleInput5: <SampleInput5/>,
  SampleInput6: <SampleInput6/>,
};

export default function InputIndex(props) {
  return <DocPage
      importFunc={() => import('./input.md')}
      componentMapping={componentMapping}
      mapping={mapping}
  />;
}