import React from 'react';
import DocPage from '../../utils/DocPage';
import Popover1 from './Popover1';
import Popover_all from './Popover_all';

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
  Popover_all: <Popover_all/>,
};

export default function PopoverIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}