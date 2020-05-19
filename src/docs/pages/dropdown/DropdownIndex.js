import React from 'react';
import DocPage from '../../utils/DocPage';
import TransitionTest from './TransitionTest';
import Dp1 from './Dp1';

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
};

export default function DropdownIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}