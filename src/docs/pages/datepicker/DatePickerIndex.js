import React from 'react';
import DocPage from '../../utils/DocPage';
import DatePicker1 from './samples/DatePicker1';

const componentMapping = {
  DatePicker1: <DatePicker1/>,
};

export default function DatePickerIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}