import React, { useState } from 'react';
import { Alert, Toggle } from 'react-windy-ui';

export default function Alert1() {
  const [active, setActive] = useState(true);
  const [filled, setFilled] = useState(false);

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={active} label="Left Border" onChange={(val) => setActive(val)} />
      </div>
      <div className="doc doc-row">
        <Toggle active={filled} label="Filled" onChange={(val) => setFilled(val)} />
      </div>

      <Alert hasLeftBorder={active} filled={filled} type="info" body="Info alert" />
      <Alert hasLeftBorder={active} filled={filled} type="ok" body="Ok alert" />
      <Alert hasLeftBorder={active} filled={filled} type="warning" body="Warning alert" />
      <Alert hasLeftBorder={active} filled={filled} type="error" body="Error alert" />

      <Alert hasLeftBorder={active} type="mini" body="Mini alert" />
      <Alert hasLeftBorder={active} type="simple" title="Simple Title" body="Simple alert" />
    </>
  );
}
