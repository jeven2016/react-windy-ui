import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop1() {
  const body = <>
    <div>This is a sample</div>
    <div>This is a sample</div>
  </>;
  return <>
    <Popover body={body}>
      <Button outline={true} color="blue">Popover</Button>
    </Popover>

    <Popover header="Header" body={body}>
      Popover
    </Popover>
  </>;

}