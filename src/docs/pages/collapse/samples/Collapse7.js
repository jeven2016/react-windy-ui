import React, {useState} from 'react';
import {Collapse, Button, Toggle, IconSearch, IconList} from 'react-windy-ui';

export default function Collapse7() {
  const [disabled, setDisabled] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle onChange={val => setDisabled(val)}
              content={{on: 'Disabled', off: 'Enabled'}}/>
    </div>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     disabled={disabled}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2} disabled={disabled}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3} disabled={disabled}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}