import React from 'react';
import { Button, Modal } from 'react-windy-ui';

export default function Modal9() {
  const open = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(
        () =>
          Modal.info({
            header: 'Info' + i,
            hasIcon: false,
            type: 'primary',
            body: (
              <Button color="red" onClick={() => Modal.closeAll()}>
                Close All
              </Button>
            ),
            okText: 'OK'
          }),
        i * 500
      );
    }
  };

  return (
    <>
      <Button type="primary" onClick={open}>
        Open
      </Button>
    </>
  );
}
