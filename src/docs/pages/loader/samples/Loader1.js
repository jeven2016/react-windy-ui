import React, {useState} from 'react';
import {Loader, Toggle, Tooltip} from 'react-windy-ui';

export default function Loader1() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Tooltip body="primary">
        <Loader type="primary" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
      <Tooltip body="secondary">
        <Loader type="secondary" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
      <Tooltip body="third">
        <Loader type="third" active={active} style={{marginRight: '1rem'}}/>
      </Tooltip>
    </div>
  </>;
}