import React from 'react';
import {DatePicker, Notification} from 'react-windy-ui';

export default function DatePicker3() {
  const change = (textFormat, date) => {
    Notification.info(
        `textFormat=${textFormat}, date=${date}`);
  };

  return <>
    <div className="doc doc-row">
      <DatePicker onChange={change} type="year"/>
    </div>
    <div className="doc doc-row">
      <DatePicker onChange={change} type="month"/>
    </div>
  </>;
}