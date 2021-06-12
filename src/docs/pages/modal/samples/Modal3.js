import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal3() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState('fullWindow');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row space">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="primary">primary</Select.Option>
        <Select.Option value="secondary">secondary</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
        <Select.Option value="fullWindow">fullWindow</Select.Option>
      </Select>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type={type} onCancel={close}
           size="large">
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body style={{border: 'none'}}>
        Modal Content....<br/>
        Modal Content....<br/>
        Modal Content....<br/>
      </Modal.Body>
    </Modal>

  </>;
}