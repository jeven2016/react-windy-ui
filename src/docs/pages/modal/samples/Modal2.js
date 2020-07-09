import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal2() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>
    <Modal active={active} type="primary" onCancel={close}
           alignCenter={false}
           style={{top: '7rem'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '10rem'}}>
          Modal Content....
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}