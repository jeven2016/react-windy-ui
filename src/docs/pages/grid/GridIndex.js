import React from 'react';
import DocPage from '../../utils/DocPage';
import Grid1 from './samples/Grid1';
import Grid2 from './samples/Grid2';
import Grid3 from './samples/Grid3';
import Grid4 from './samples/Grid4';
import Grid5 from './samples/Grid5';
import Grid6 from './samples/Grid6';
import Grid7 from './samples/Grid7';

const componentMapping = {
  Grid1: <Grid1/>,
  Grid2: <Grid2/>,
  Grid3: <Grid3/>,
  Grid4: <Grid4/>,
  Grid5: <Grid5/>,
  Grid6: <Grid6/>,
  Grid7: <Grid7/>,
};

export default function GridIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}