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
      <Toggle defaultActive label={{on: 'ON', off: 'CLOSE'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive label="Toggle"/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary"
              label={{
                on: <IconChecked2/>,
                off: <IconClear/>,
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary"
              label={{
                on: 'ON',
                off: 'OFF',
                showInBar: true,
              }}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary"
              onChange={(v) => console.log(v)}
              label={{
                on: <IconArrowRight/>,
                off: <IconArrowLeft/>,
              }}/>
    </div>
  </>;
}