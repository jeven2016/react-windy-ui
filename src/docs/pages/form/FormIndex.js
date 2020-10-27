import React from 'react';
import DocPage from '../../utils/DocPage';
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from './Form4';
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form16 from "./Form16";
import Form7 from './Form7';
import Form8 from './Form8';

const componentMapping = {
  Form1: <Form1/>,
  Form2: <Form2/>,
  Form3: <Form3/>,
  Form4: <Form4/>,
  Form5: <Form5/>,
  Form6: <Form6/>,
  Form7: <Form7/>,
  Form8: <Form8/>,
  Form16: <Form16/>,
};

export default function FormIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}