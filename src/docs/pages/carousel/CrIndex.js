import React from 'react';
import DocPage from '../../utils/DocPage';
import Cr1 from './samples/Cr1';

const componentMapping = {
  Cr1: <Cr1/>
};

export default function CrIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}