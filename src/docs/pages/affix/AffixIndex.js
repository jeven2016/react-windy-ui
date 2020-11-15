import React from 'react';
import DocPage from '../../utils/DocPage';
import Affix1 from './Affix1';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Affix1: <Affix1/>,
};

export default function AffixIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}