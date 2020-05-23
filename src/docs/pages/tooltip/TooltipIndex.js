import React from 'react';
import DocPage from '../../utils/DocPage';
import Tooltip1 from './Tooltip1';
import Tooltip_all from './Tooltip_all';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',
};

const componentMapping = {
  Tooltip1: <Tooltip1/>,
  Tooltip_all: <Tooltip_all/>,
};

export default function TooltipIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}