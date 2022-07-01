import React from 'react';
import { Button, Modal, Notification } from 'react-windy-ui';

export default function Modal7() {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.compact({
            title: 'Information',
            body: 'The data is changed successfully.',
            okText: 'Close',
            cancelText: 'Cancel',
            onOk: () => {
              Notification.info('OK');
            },
            onCancel: () => {
              Notification.info('Cancel');
            }
          });
        }}
      >
        Confirm
      </Button>

      <Button
        type="primary"
        onClick={() => {
          Modal.compact({
            title: 'Information',
            hasIcon: false,
            body: 'The data is changed successfully.',
            okText: 'Gotcha',
            onOk: () => {
              Notification.info('OK');
            }
          });
        }}
      >
        Information
      </Button>

      <Button
        type="primary"
        onClick={() => {
          Modal.compact({
            title: 'Delete Account?',
            hasIcon: false,
            body: 'Are you sure you want to delete this account？',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => {
              Notification.info('Account deleted');
            },
            okButtonProps: {
              color: 'red',
              inverted: false
            },
            cancelButtonProps: {
              color: 'teal',
              inverted: false
            }
          });
        }}
      >
        Delete
      </Button>
    </>
  );
}
