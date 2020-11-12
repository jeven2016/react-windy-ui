import React from 'react';
import DocPage from '../../utils/DocPage';
import UseMediaQuery from './UseMediaQuery';

const componentMapping = {
  UseMediaQuery: <UseMediaQuery/>,
};

export default function HooksIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}