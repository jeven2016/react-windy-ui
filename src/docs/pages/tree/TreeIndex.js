import React from 'react';
import DocPage from '../../utils/DocPage';
import Tree1 from './samples/Tree1';
import Tree2 from './samples/Tree2';
import Tree3 from './samples/Tree3';
import Tree4 from './samples/Tree4';
import Tree5 from './samples/Tree5';
import Tree6 from './samples/Tree6';
import Tree7 from './samples/Tree7';

const componentMapping = {
  Tree1: <Tree1/>,
  Tree2: <Tree2/>,
  Tree3: <Tree3/>,
  Tree4: <Tree4/>,
  Tree5: <Tree5/>,
  Tree6: <Tree6/>,
  Tree7: <Tree7/>,
};

export default function TreeIndex() {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}