import React, { useState } from 'react';
import { Collapse, Divider, Toggle, Checkbox } from 'react-windy-ui';

export default function Collapse5() {
  const [leftIcon, setLeftIcon] = useState('left');

  return (
    <>
      <div className="doc doc-row">
        <Toggle
          onChange={(active) => setLeftIcon(active ? 'right' : 'left')}
          content={{ on: 'Right Icon', off: 'Left Icon' }}
        />
      </div>

      <Collapse hasBox={false} hasBorder={false} accordion={true} iconPosition={leftIcon}>
        <Divider />
        {/* stop Propagation while clicking the checkbox and then the item header won't expand & collapse in this case*/}
        <Collapse.Item
          header={
            <Checkbox
              defaultChecked
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onChange={(value, e) => e.stopPropagation()}
            >
              I accept all following items
            </Checkbox>
          }
          value={1}
        >
          <div style={{ padding: '1rem' }}>
            Terms
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Divider />
        <Collapse.Item header="Header2" value={2}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Divider />
        <Collapse.Item header="Header3" value={3}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Divider />
      </Collapse>
    </>
  );
}
