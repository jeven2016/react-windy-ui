import React from 'react';
import DocPage from '../../utils/DocPage';
import Dp1 from './Dp1';
import Dp2 from './Dp2';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',
};

const componentMapping = {
  // TransitionTest: <TransitionTest/>,
  Dp1: <Dp1/>,
  Dp2: <Dp2/>,
};

export default function DropdownIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}