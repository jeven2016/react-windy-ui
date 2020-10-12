import React from 'react';
import DocPage from '../../utils/DocPage';
import Bc1 from './samples/Bc1';
import Bc2 from './samples/Bc2';
import Bc3 from './samples/Bc3';
import Bc4 from './samples/Bc4';

const componentMapping = {
  Bc1: <Bc1/>,
  Bc2: <Bc2/>,
  Bc3: <Bc3/>,
  Bc4: <Bc4/>
};

export default function BcIndex(props) {
  return <>
    <DocPage
        importFunc={() => import('./doc.md')}
        componentMapping={componentMapping}
    />
  </>;
}