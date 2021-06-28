import React, {useState} from 'react';
import {DatePicker, Notification, TimePicker, Toggle} from 'react-windy-ui';

export default function DatePicker5() {
  const [hasTitle, set] = useState(false);
  const [autoClose, setAutoClose] = useState(false);

  const change = (textFormat, date) => {
    Notification.info(
      `textFormat=${textFormat}, date=${date}`);
  };

  return <>
    <div className="doc doc-row">
      <Toggle active={hasTitle} onChange={val => set(val)}
              label={{on: 'With title', off: 'Without title'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={autoClose} onChange={val => setAutoClose(val)}
              label='Auto Close'/>
    </div>
    <div className="doc doc-row space">
      <DatePicker onChange={change} type="date" hasTitle={hasTitle} autoClose={autoClose}/>
    </div>

    {/*<TimePicker/>*/}

  </>;
}