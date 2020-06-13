import React from 'react';
import DocPage from '../../utils/DocPage';
import Pop1 from './Pop1';
import Pop3 from './Pop3';
import Pop2 from './Pop2';
import Pop4 from './Pop4';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Pop1: 'Pop1',
  Pop2: 'Pop2',
  Pop3: 'Pop3',
  Pop4: 'Pop4',
};

const componentMapping = {
  Pop1: <Pop1/>,
  Pop2: <Pop2/>,
  Pop3: <Pop3/>,
  Pop4: <Pop4/>,
};

export default function PopoverIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}