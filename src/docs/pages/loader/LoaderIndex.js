import React from 'react';
import DocPage from '../../utils/DocPage';
import Loader1 from './samples/Loader1';
import Loader2 from './samples/Loader2';
import Loader3 from './samples/Loader3';
import Loader4 from './samples/Loader4';
import Loader5 from './samples/Loader5';
import Loader6 from './samples/Loader6';
import Loader7 from './samples/Loader7';
import Loader8 from './samples/Loader8';

const componentMapping = {
  Loader1: <Loader1/>,
  Loader2: <Loader2/>,
  Loader3: <Loader3/>,
  Loader4: <Loader4/>,
  Loader5: <Loader5/>,
  Loader6: <Loader6/>,
  Loader7: <Loader7/>,
  Loader8: <Loader8/>,
};

export default function LoaderIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}