import React, {useState} from 'react';
import {DatePicker, Notification, Toggle} from 'react-windy-ui';

export default function DatePicker5() {
  const [hasTitle, set] = useState(false);
  const [hasFooter, enableFooter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [chinese, setChinese] = useState(true);
  const [readonly, setReadonly] = useState(true);

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
    <div className="doc doc-row">
      <Toggle active={readonly} onChange={val => setReadonly(val)}
              label='Readonly'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={chinese} onChange={val => setChinese(val)}
              label={{on: 'Chinese', off: 'English'}}/>
    </div>
    <div className="doc doc-row space">
      <DatePicker readOnly={readonly} onChange={change} type="date" hasTitle={hasTitle}
                  locale={chinese ? 'zh_CN' : 'en_US'}
                  hasFooter={hasFooter} disabled={disabled}/>
    </div>
  </>;
}