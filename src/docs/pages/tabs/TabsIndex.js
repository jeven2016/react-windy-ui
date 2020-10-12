import React from 'react';
import DocPage from '../../utils/DocPage';
import Tabs1 from './samples/Tabs1';
import Tabs2 from './samples/Tabs2';
import Tabs3 from './samples/Tabs3';
import Tabs4 from './samples/Tabs4';
import Tabs5 from './samples/Tabs5';
import Tabs6 from './samples/Tabs6';

const componentMapping = {
  Tabs1: <Tabs1/>,
  Tabs2: <Tabs2/>,
  Tabs3: <Tabs3/>,
  Tabs4: <Tabs4/>,
  Tabs5: <Tabs5/>,
  Tabs6: <Tabs6/>,
};

export default function TabsIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}