import React from 'react';
import DocPage from '../../utils/DocPage';
import Radio1 from './samples/Radio1';
import Radio2 from './samples/Radio2';
import Radio3 from './samples/Radio3';
import Radio4 from './samples/Radio4';
import Radio5 from './samples/Radio5';
import Radio6 from './samples/Radio6';
import Radio7 from './samples/Radio7';

const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Radio1: 'Radio1',
  Radio2: 'Radio2',
  Radio3: 'Radio3',
  Radio4: 'Radio4',
  Radio5: 'Radio5',
  Radio6: 'Radio6',
  Radio7: 'Radio7',
};

const componentMapping = {
  Radio1: <Radio1/>,
  Radio2: <Radio2/>,
  Radio3: <Radio3/>,
  Radio4: <Radio4/>,
  Radio5: <Radio5/>,
  Radio6: <Radio6/>,
  Radio7: <Radio7/>,
};

export default function RadioIndex() {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}