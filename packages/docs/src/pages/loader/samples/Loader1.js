import React, { useState } from 'react';
import { Loader, Toggle } from 'react-windy-ui';

export default function Loader1() {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={active} onChange={(val) => setActive(val)} label="Active" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Loader type="primary" active={active} style={{ marginRight: '1rem' }} />
        <Loader type="secondary" active={active} style={{ marginRight: '1rem' }} />
        <Loader type="third" active={active} style={{ marginRight: '1rem' }} />
      </div>
    </>
  );
}
