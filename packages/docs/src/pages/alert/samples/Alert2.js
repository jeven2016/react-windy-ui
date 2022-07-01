import React, { useState } from 'react';
import { Alert, IconHome, Toggle } from 'react-windy-ui';

export default function Alert2() {
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

      <Alert hasLeftBorder={active} filled={filled} title="OK" type="ok" body="ok alert" />
      <Alert hasLeftBorder={active} filled={filled} title="INFO" type="info" body="info alert" />
      <Alert
        hasLeftBorder={active}
        filled={filled}
        title="WARNING"
        type="warning"
        body="warning alert"
      />
      <Alert hasLeftBorder={active} filled={filled} title="ERROR" type="error" body="error alert" />
      <Alert
        hasLeftBorder={active}
        filled={filled}
        title="Customized"
        type="ok"
        body="a customized alert"
        icon={<IconHome />}
      />
    </>
  );
}
