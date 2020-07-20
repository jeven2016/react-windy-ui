import React from 'react';
import DocPage from '../../utils/DocPage';
import Tree1 from './samples/Tree1';
import Tree2 from './samples/Tree2';
import Tree3 from './samples/Tree3';
import Tree4 from './samples/Tree4';
import Tree5 from './samples/Tree5';
import Tree6 from './samples/Tree6';
import Tree7 from './samples/Tree7';
import Tree8 from './samples/Tree8';
import Tree9 from './samples/Tree9';

const componentMapping = {
  Tree1: <Tree1/>,
  Tree2: <Tree2/>,
  Tree3: <Tree3/>,
  Tree4: <Tree4/>,
  Tree5: <Tree5/>,
  Tree6: <Tree6/>,
  Tree7: <Tree7/>,
  Tree8: <Tree8/>,
  Tree9: <Tree9/>,
};

export default function TreeIndex() {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}