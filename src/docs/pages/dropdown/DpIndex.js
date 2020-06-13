import React from 'react';
import DocPage from '../../utils/DocPage';
import Dp1 from './Dp1';
import Dp2 from './Dp2';
import Dp3 from './Dp3';
import Dp4 from './Dp4';
import Dp5 from './Dp5';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Dp1: 'Dp1',
  Dp2: 'Dp2',
  Dp3: 'Dp3',
  Dp4: 'Dp4',
  Dp5: 'Dp5',
};

const componentMapping = {
  Dp1: <Dp1/>,
  Dp2: <Dp2/>,
  Dp3: <Dp3/>,
  Dp4: <Dp4/>,
  Dp5: <Dp5/>,
};

export default function DpIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}