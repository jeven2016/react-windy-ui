import React from 'react';
import DocPage from '../../utils/DocPage';
import Select1 from './Select1';
import Select3 from './Select3';
import Select2 from './Select2';
import Select4 from './Select4';
import Select5 from './Select5';
import Select7 from './Select7';
import Select6 from './Select6';


const componentMapping = {
  Select1: <Select1/>,
  Select2: <Select2/>,
  Select3: <Select3/>,
  Select4: <Select4/>,
  Select5: <Select5/>,
  Select6: <Select6/>,
  Select7: <Select7/>,
};

export default function SelectIndex() {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}