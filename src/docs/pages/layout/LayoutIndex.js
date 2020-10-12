import React from 'react';
import DocPage from '../../utils/DocPage';
import Layout1 from './samples/Layout1';
import Layout2 from './samples/Layout2';
import Layout3 from './samples/Layout3';
import Layout4 from './samples/Layout4';
import Layout5 from './samples/Layout5';
import Layout6 from './samples/Layout6';

const componentMapping = {
  Layout1: <Layout1/>,
  Layout2: <Layout2/>,
  Layout3: <Layout3/>,
  Layout4: <Layout4/>,
  Layout5: <Layout5/>,
  Layout6: <Layout6/>,
};

export default function LayoutIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}