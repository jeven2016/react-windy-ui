import React from 'react';
import DocPage from '../../utils/DocPage';
import DatePicker1 from './samples/DatePicker1';
import DatePicker2 from './samples/DatePicker2';
import DatePicker3 from './samples/DatePicker3';

const componentMapping = {
  // DatePicker1: <DatePicker1/>,
  // DatePicker2: <DatePicker2/>,
  DatePicker3: <DatePicker3/>,
};

export default function DatePickerIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}