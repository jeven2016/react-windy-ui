import React from 'react';
import {
  Toggle,
  IconArrowLeft,
  IconArrowRight,
  IconClear,
  IconChecked2,
} from 'react-windy-ui';

export default function Toggle4() {
  return <>
    <div className="doc doc-row">
      <Toggle disabled defaultActive content={{on: 'ON', off: 'CLOSE'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle disabled type="primary" style={{width: '5rem'}}
              content={{
                on: <IconChecked2/>,
                off: <IconClear/>,
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle disabled defaultActive type="secondary" style={{width: '4rem'}}
              onChange={(v) => console.log(v)}
              content={{
                on: <IconArrowRight/>,
                off: <IconArrowLeft/>,
              }}/>
    </div>
  </>;
}