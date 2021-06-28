import React from 'react';
import {Collapse} from 'react-windy-ui';

export default function Collapse2() {
  return <>
    <Collapse defaultActive={1}>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          content<br/>
          ......<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          content<br/>
          ......<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          content<br/>
          ......<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}