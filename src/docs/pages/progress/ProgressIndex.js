import React from 'react';
import DocPage from '../../utils/DocPage';
import Progress1 from './samples/Progress1';
import Progress2 from './samples/Progress2';
import Progress3 from './samples/Progress3';
import Progress4 from './samples/Progress4';

const componentMapping = {
  Progress1: <Progress1/>,
  Progress2: <Progress2/>,
  Progress3: <Progress3/>,
  Progress4: <Progress4/>,
};

export default function ProgressIndex() {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}