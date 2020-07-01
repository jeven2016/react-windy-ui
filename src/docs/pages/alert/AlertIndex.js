import React from 'react';
import DocPage from '../../utils/DocPage';
import Alert1 from './samples/Alert1';
import Alert2 from './samples/Alert2';
import Alert3 from './samples/Alert3';
import Alert4 from './samples/Alert4';
import Alert5 from './samples/Alert5';
import Alert6 from './samples/Alert6';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Alert1: <Alert1/>,
  Alert2: <Alert2/>,
  Alert3: <Alert3/>,
  Alert4: <Alert4/>,
  Alert5: <Alert5/>,
  Alert6: <Alert6/>,
};

export default function AlertIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}