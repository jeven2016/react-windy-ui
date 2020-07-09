import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal3() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState('simple');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="primary">primary</Select.Option>
        <Select.Option value="secondary">secondary</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type={type} onCancel={close}
           size="large"
           alignCenter={false}
           style={{top: '7rem'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '5rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} color="green" onClick={close}>OK</Button>
        <Button hasMinWidth={true} color="red" onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}