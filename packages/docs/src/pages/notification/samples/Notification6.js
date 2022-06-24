import React, { useRef, useState } from 'react';
import { Button, Notification, Toggle, Select } from 'react-windy-ui';

export default function Notification6() {
  const [position, setPosition] = useState('topRight');

  //a reference to previous global config
  const defaultConfigRef = useRef({ ...Notification.getConfig() });

  const updateGlobalConf = () => {
    Notification.config({
      rect: {
        top: '5rem',
        left: '2rem',
        bottom: '5rem',
        right: '2rem'
      }
    });
  };

  const revert = () => {
    Notification.config(defaultConfigRef.current);
  };

  const toggle = (active) => {
    if (active) {
      updateGlobalConf();
    } else {
      revert();
    }
  };

  const sendMessage = () => {
    Notification.simple({ body: 'Hello folks', position: position });
  };
  return (
    <>
      <div className="doc doc-row space">
        <span style={{ marginRight: '1rem', fontWeight: '600' }}>Position:</span>
        <Select value={position} onSelect={(value) => setPosition(value)}>
          <Select.Option value="topLeft">topLeft</Select.Option>
          <Select.Option value="topCenter">topCenter</Select.Option>
          <Select.Option value="topRight">topRight</Select.Option>
          <Select.Option value="bottomLeft">bottomLeft</Select.Option>
          <Select.Option value="bottomRight">bottomRight</Select.Option>
        </Select>
      </div>
      <div className="doc doc-row">
        <Toggle
          defaultActive={false}
          onChange={(active) => toggle(active)}
          label="Update the global Configuration"
        />
      </div>
      <Button type="primary" onClick={() => sendMessage()}>
        Message
      </Button>
    </>
  );
}
