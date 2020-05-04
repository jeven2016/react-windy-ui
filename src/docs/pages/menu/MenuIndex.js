import React from 'react';
import DocPage from '../../utils/DocPage';
import Menu1 from './samples/Menu1';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Menu1: 'Menu1',
  Menu2: 'Menu2',
};

const componentMapping = {
  Menu1: <Menu1/>,
};

export default function MenuIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}