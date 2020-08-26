import React from 'react';
import DocPage from '../../utils/DocPage';
import Pagination1 from "./samples/Pagination1";

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Pagination1: <Pagination1/>
};

export default function PaginationIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}