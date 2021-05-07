import React from 'react';
import {Affix, Button} from 'react-windy-ui';

export default function Affix1() {

  return <>
    <Affix top={80}>
      <Button color="green">Top 140px</Button>
    </Affix>
  </>;
}