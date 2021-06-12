import React, {useState} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal8() {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type="primary" onCancel={close} size="large"
           autoOverflow={true} style={{width: '80%'}}>
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>

        {[...Array(30).keys()].map(
          (value, index) => <span key={index}>Modal Content....<br/></span>)}

      </Modal.Body>
      <Modal.Footer align="center">
        <Button hasMinWidth={true} type="primary" onClick={close}>OK</Button>
        <Button hasMinWidth={true} onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}