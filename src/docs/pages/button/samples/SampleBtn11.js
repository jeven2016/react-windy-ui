import React from 'react';
import {Button, ButtonGroup} from 'react-windy-ui';

const SampleBtn11 = () => {
  return <>
    <ButtonGroup>
      <Button color="brown">brown</Button>
      <Button color="pink">pink</Button>
      <Button color="purple">purple</Button>
      <Button color="violet">violet</Button>
    </ButtonGroup>
    <br/><br/>
    <ButtonGroup block>
      <Button outline color="blue">blue</Button>
      <Button outline color="green">green</Button>
      <Button outline color="orange">orange</Button>
    </ButtonGroup>
  </>;
};

export default SampleBtn11;