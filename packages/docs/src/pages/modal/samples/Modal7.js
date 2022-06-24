import React from 'react';
import { Button, Modal, Notification, Tooltip } from 'react-windy-ui';

export default function Modal7() {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.info({
            title: 'Information',
            body: 'The data is changed successfully.',
            okText: 'OK',
            onOk: () => {
              Notification.info('OK');
            }
          });
        }}
      >
        Info
      </Button>

      <Button
        type="primary"
        onClick={(e) => {
          Modal.warning({
            title: 'Warning。',
            body: 'The data will be discarded.',
            okText: 'Sure'
          });
        }}
      >
        warning
      </Button>

      <Tooltip body="no header">
        <Button
          type="primary"
          onClick={(e) => {
            Modal.error({
              title: 'Unable to delete this record',
              body: 'Please check your configuration for more details.',
              okText: 'Close'
            });
          }}
        >
          error
        </Button>
      </Tooltip>

      <Button
        type="primary"
        onClick={(e) => {
          Modal.success({
            title: 'The data is changed。',
            body: 'Please double check it again later，thanks.',
            okText: 'OK'
          });
        }}
      >
        success
      </Button>

      <Button
        type="primary"
        onClick={(e) => {
          Modal.confirm({
            title: 'Are you sure you want to delete it？',
            body: "The data won't be restored anymore.",
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => {
              console.log('ok');
            },
            onCancel: () => {
              console.log('cancelled');
            }
          });
        }}
      >
        confirm
      </Button>
    </>
  );
}
