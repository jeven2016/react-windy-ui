import React from 'react';
import {DatePicker, Notification} from 'react-windy-ui';

export default function DatePicker1() {
  const change = (textFormat, date) => {
    Notification.info(
        `textFormat=${textFormat}, date=${date}`);
  };

  return <>
    <div className="doc doc-row">
      <DatePicker onChange={change}/>
    </div>
    <div className="doc doc-row">
      <DatePicker defaultValue="2018-10-11" hasTitle={true} direction="vertical"
                  onChange={change}/>
    </div>
  </>;
}