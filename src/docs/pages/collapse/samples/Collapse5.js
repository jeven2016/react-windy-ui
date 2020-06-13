import React, {useState} from 'react';
import {Collapse, Divider, Toggle} from 'react-windy-ui';

export default function Collapse5() {
  const [leftIcon, setLeftIcon] = useState('left');

  return <>
    <div className="doc doc-row">
      <Toggle onChange={active => setLeftIcon(active ? 'right' : 'left')}
              content={{on: 'Right Icon', off: 'Left Icon'}}/>
    </div>

    <Collapse hasBox={false} hasBorder={false} accordion={true}
              iconPosition={leftIcon}>
      <Divider/>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
    </Collapse>
  </>;
}