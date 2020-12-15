import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop5() {
  const body = <>
    <div>This is a sample</div>
    <div>......</div>
  </>;
  return <>
    <Popover body={body} disabled>
      <Button outline={true} color="blue">Popover</Button>
    </Popover>
  </>;

}