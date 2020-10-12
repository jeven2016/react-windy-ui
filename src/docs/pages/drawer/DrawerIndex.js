import React from 'react';
import DocPage from '../../utils/DocPage';
import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';
import Drawer3 from './Drawer3';
import Drawer4 from './Drawer4';


const componentMapping = {
  Drawer1: <Drawer1/>,
  Drawer2: <Drawer2/>,
  Drawer3: <Drawer3/>,
  Drawer4: <Drawer4/>,
};

export default function DrawerIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}