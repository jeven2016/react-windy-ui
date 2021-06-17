import React, {useState} from 'react';
import {DatePicker} from 'react-windy-ui';

export default function DatePicker2() {
  const [value, setValue] = useState('2012-01-10');
  return <>
    <DatePicker value={value} onChange={(textFormat, date) => {
      setValue(textFormat);
    }}/>

  </>;
}