import React from 'react';
import DocPage from '../../utils/DocPage';
import Collapse1 from './samples/Collapse1';
import Collapse2 from './samples/Collapse2';
import Collapse3 from './samples/Collapse3';
import Collapse4 from './samples/Collapse4';
import Collapse5 from './samples/Collapse5';
import Collapse6 from './samples/Collapse6';
import Collapse7 from './samples/Collapse7';


const componentMapping = {
  Collapse1: <Collapse1/>,
  Collapse2: <Collapse2/>,
  Collapse3: <Collapse3/>,
  Collapse4: <Collapse4/>,
  Collapse5: <Collapse5/>,
  Collapse6: <Collapse6/>,
  Collapse7: <Collapse7/>,
};

export default function CollapseIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}