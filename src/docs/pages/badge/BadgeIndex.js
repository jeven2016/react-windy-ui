import React from 'react';
import DocPage from '../../utils/DocPage';
import Badge1 from './Badge1';
import Badge2 from './Badge2';
import Badge3 from './Badge3';
import Badge4 from './Badge4';
import Badge5 from './Badge5';
import Badge6 from './Badge6';
import Badge7 from './Badge7';
import Badge8 from './Badge8';


const componentMapping = {
  Badge1: <Badge1/>,
  Badge2: <Badge2/>,
  Badge3: <Badge3/>,
  Badge4: <Badge4/>,
  Badge5: <Badge5/>,
  Badge6: <Badge6/>,
  Badge7: <Badge7/>,
  Badge8: <Badge8/>,
};

export default function BadgeIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}