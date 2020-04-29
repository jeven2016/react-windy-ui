import React from 'react';
import {
  Toggle,
  IconArrowLeft,
  IconArrowRight,
  IconClear,
  IconChecked2,
} from 'react-windy-ui';

export default function Toggle3() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive content={{on: 'ON', off: 'CLOSE'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '5rem'}}
              content={{
                on: <IconChecked2/>,
                off: <IconClear/>,
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '4rem'}}
              content={{
                on: 'ON',
                off: 'OFF',
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary" style={{width: '4rem'}}
              content={{
                on: <IconArrowRight/>,
                off: <IconArrowLeft/>,
              }}/>
    </div>
  </>;
}