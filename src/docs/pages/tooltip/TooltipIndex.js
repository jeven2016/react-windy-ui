import React from 'react';
import DocPage from '../../utils/DocPage';
import Tooltip1 from './Tooltip1';
import Tooltip2 from './Tooltip2';
import Tooltip3 from './Tooltip3';


const componentMapping = {
  Tooltip1: <Tooltip1/>,
  Tooltip2: <Tooltip2/>,
  Tooltip3: <Tooltip3/>,
};

export default function TooltipIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}