import React, { useState } from 'react';
import { Button, Modal, Select } from 'react-windy-ui';

export default function Modal5() {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState('medium');

  const close = () => setActive(false);

  return (
    <>
      <div className="doc doc-row space">
        <span style={{ marginRight: '1rem', fontWeight: '600' }}>Size:</span>
        <Select value={size} onSelect={(value) => setSize(value)}>
          <Select.Option value="small">small</Select.Option>
          <Select.Option value="medium">medium</Select.Option>
          <Select.Option value="large">large</Select.Option>
          <Select.Option value="xLarge">xLarge</Select.Option>
        </Select>
      </div>

      <Button type="primary" onClick={() => setActive(true)}>
        Simple
      </Button>

      <Modal active={active} size={size} onCancel={close}>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>
          <div style={{ height: '5rem' }}>Modal Content....</div>
        </Modal.Body>
        <Modal.Footer>
          <Button hasMinWidth={true} color="green" onClick={close}>
            OK
          </Button>
          <Button hasMinWidth={true} color="red" onClick={close}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
