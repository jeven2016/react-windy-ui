import React from 'react';
import DocPage from '../../utils/DocPage';
import Popover1 from './Popover1';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',
};

const componentMapping = {
  // TransitionTest: <TransitionTest/>,
  Popover1: <Popover1/>,
};

export default function PopoverIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}