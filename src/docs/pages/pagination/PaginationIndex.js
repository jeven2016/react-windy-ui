import React from 'react';
import DocPage from '../../utils/DocPage';
import Pagination1 from './samples/Pagination1';
import Pagination2 from './samples/Pagination2';
import Pagination3 from './samples/Pagination3';
import Pagination4 from './samples/Pagination4';
import Pagination5 from './samples/Pagination5';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Pagination1: <Pagination1/>,
  Pagination2: <Pagination2/>,
  Pagination3: <Pagination3/>,
  Pagination4: <Pagination4/>,
  Pagination5: <Pagination5/>,
};

export default function PaginationIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}