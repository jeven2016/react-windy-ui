import React from 'react';
import DocPage from '../../utils/DocPage';
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const componentMapping = {
  Form1: <Form1/>,
  Form2: <Form2/>,
  Form3: <Form3/>
};

export default function DpIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}