import React from 'react';
import { Button, Popover } from 'react-windy-ui';

export default function Pop2() {
  const body = (
    <>
      <div>This is a sample</div>
      <div>This is a sample</div>
    </>
  );
  return (
    <>
      <Popover body={body} activeBy="click">
        <Button outline={true} color="blue">
          Click
        </Button>
      </Popover>

      <Popover header="Hover" body={body} activeBy="hover">
        Hover
      </Popover>
    </>
  );
}
