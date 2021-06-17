import React from 'react';
import {Button, PopConfirm} from 'react-windy-ui';

export default function Pc6() {

  return <>
    <PopConfirm body="Are you sure to delete?"

                // Popover's props
                position="right"
                offset={6}
                hasBorder={true}
                hasArrow={false}
                hasBox={false}

                // Button's props
                okButtonProps={{
                  outline: true,
                  color: 'purple',
                }}
                cancelButtonProps={{
                  outline: true,
                  color: 'teal',
                }}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>;
}