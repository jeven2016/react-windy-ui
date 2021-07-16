import React, {useState} from "react";
import {Notification, TimePicker, Toggle} from "react-windy-ui";

export default function TP3() {
  const [disabled, setDisabled] = useState(false);
  const [chinese, setChinese] = useState(true);
  const [readonly, setReadonly] = useState(true);

  const change = (textFormat, date) => {
    Notification.info(
      `textFormat=${textFormat}, date=${date}`);
  };

  return <>
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
      <TimePicker readOnly={readonly} onChange={change}
                  locale={chinese ? 'zh_CN' : 'en_US'} disabled={disabled}/>
    </div>
  </>;
};