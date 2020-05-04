import React from 'react';
import {Collapse} from 'react-windy-ui';

export default function Collapse3() {
  const comp = <>
    <Collapse accordion={true}>
      <Collapse.Item header="Header1" hasBackground value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return comp;
}