import React, { useState } from 'react';
import { Collapse, Toggle } from 'react-windy-ui';

export default function Collapse7() {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <div className="doc doc-row">
        <Toggle onChange={(val) => setDisabled(val)} label={{ on: 'Disabled', off: 'Enabled' }} />
      </div>
      <Collapse accordion={true} disabled={disabled} iconPosition="left">
        <Collapse.Item header="Disabled Header1" value={1} disabled={disabled}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Collapse.Item header="Disabled Header2" value={2}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Collapse.Item header="Enabled Header3" value={3} disabled={false}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
      </Collapse>
    </>
  );
}
