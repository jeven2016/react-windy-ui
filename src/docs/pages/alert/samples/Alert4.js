import React, {useState} from 'react';
import {Alert, Toggle} from 'react-windy-ui';

export default function Alert4() {
  const [closeIcon, setCloseIcon] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={closeIcon} onChange={val => setCloseIcon(val)}
              content={{on: 'Close Icon', off: 'Close Icon'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={showIcon} onChange={val => setShowIcon(val)}
              content={{on: 'Icon', off: 'Icon'}}/>
    </div>
    <Alert type="info" body="A info alert" hasCloseIcon={closeIcon}
           hasIcon={showIcon}/>
  </>;
}