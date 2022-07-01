import React, { useState } from 'react';
import { Button, Toggle, Tooltip } from 'react-windy-ui';

export default function Tooltip3() {
  const [active, setActive] = useState(true);
  const [locked, setLocked] = useState(true);

  return (
    <>
      <div className="doc doc-row">
        <Toggle
          active={locked}
          onChange={(val) => {
            setActive(true);
            setLocked(val);
          }}
          label="Lock"
        />
      </div>
      <div className="doc doc-row">
        <Tooltip defaultActive={true} body={<span>This is a tooltip</span>}>
          <Button outline={true} color="blue" style={{ marginLeft: '1rem' }}>
            Default Active
          </Button>
        </Tooltip>

        <Tooltip
          active={active}
          onChange={(val) => {
            !locked && setActive(val);
          }}
          body={<span>A tooltip</span>}
        >
          <Button outline={true} color="purple" style={{ marginLeft: '1rem' }}>
            Active
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
