import React, {useState} from 'react';
import {DatePicker, Notification, Toggle} from 'react-windy-ui';

export default function DatePicker5() {
  const [hasTitle, set] = useState(false);
  const [hasFooter, enableFooter] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const change = (textFormat, date) => {
    Notification.info(
      `textFormat=${textFormat}, date=${date}`);
  };

  return <>
    <div className="doc doc-row">
      <Toggle active={hasTitle} onChange={val => set(val)}
              label='With title'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasFooter} onChange={val => enableFooter(val)}
              label='With footer'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={disabled} onChange={val => setDisabled(val)}
              label='Disabled'/>
    </div>
    <div className="doc doc-row space">
      <DatePicker onChange={change} type="date" hasTitle={hasTitle}
                  hasFooter={hasFooter} disabled={disabled}/>
    </div>
  </>;
}