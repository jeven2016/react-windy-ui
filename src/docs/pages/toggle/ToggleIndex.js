import React from 'react';
import DocPage from '../../utils/DocPage';
import Toggle1 from './samples/Toggle1';
import Toggle2 from './samples/Toggle2';
import Toggle3 from './samples/Toggle3';
import Toggle4 from './samples/Toggle4';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Toggle1: 'Toggle1',
  Toggle2: 'Toggle2',
  Toggle3: 'Toggle3',
  Toggle4: 'Toggle4',
};

const componentMapping = {
  Toggle1: <Toggle1/>,
  Toggle2: <Toggle2/>,
  Toggle3: <Toggle3/>,
  Toggle4: <Toggle4/>,
};

export default function ToggleIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}