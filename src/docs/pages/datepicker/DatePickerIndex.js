import React from 'react';
import DatePicker1 from './samples/DatePicker1';
import DatePicker3 from './samples/DatePicker3';

const componentMapping = {
  DatePicker1: <DatePicker1/>,
  // DatePicker2: <DatePicker2/>,
  DatePicker3: <DatePicker3/>,
};

export default function DatePickerIndex(props) {
  return null;
  /*return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;*/
}