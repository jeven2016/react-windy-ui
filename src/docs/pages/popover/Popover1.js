import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Popover1() {
  return <>
    <Popover body={<span>This is a sample</span>}
             hasBorder={true}
             hasBox={false}>
      <Button outline={true} color="blue"
              onClick={() => console.log('click button')}>Top Left</Button>
    </Popover>

    <Popover activeBy="hover" position="top" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue"
              style={{marginLeft: '1rem'}}>Top</Button>
    </Popover>
  </>;

}