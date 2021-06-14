import React from 'react';
import {DatePicker, Notification} from 'react-windy-ui';

export default function DatePicker1() {
  const change = (textFormat, date) => {
    Notification.info(
        `textFormat=${textFormat}, date=${date}`);
  };

  return <>
    <div className="doc doc-row space">
      <DatePicker onChange={change}/>
    </div>
    <div className="doc doc-row space">
      <DatePicker defaultValue="2018-10-11" onChange={change}/>
    </div>
  </>;
}