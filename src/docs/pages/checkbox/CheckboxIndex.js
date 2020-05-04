import React from 'react';
import DocPage from '../../utils/DocPage';
import Checkbox1 from './samples/Checkbox1';
import Checkbox2 from './samples/Checkbox2';
import Checkbox3 from './samples/Checkbox3';
import Checkbox4 from './samples/Checkbox4';
import Checkbox5 from './samples/Checkbox5';
import Checkbox6 from './samples/Checkbox6';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Checkbox1: 'Checkbox1',
  Checkbox2: 'Checkbox2',
  Checkbox3: 'Checkbox3',
  Checkbox4: 'Checkbox4',
  Checkbox5: 'Checkbox5',
  Checkbox6: 'Checkbox6',
};

const componentMapping = {
  Checkbox1: <Checkbox1/>,
  Checkbox2: <Checkbox2/>,
  Checkbox3: <Checkbox3/>,
  Checkbox4: <Checkbox4/>,
  Checkbox5: <Checkbox5/>,
  Checkbox6: <Checkbox6/>,
};

export default function CheckboxIndex(props) {
  return <DocPage
      importFunc={() => import('./checkbox.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}