import React from 'react';
import {Button, ButtonGroup, IconList} from 'react-windy-ui';

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
    <br/><br/>
    <ButtonGroup>
      <Button color="green" leftIcon={<IconList/>}/>
      <Button color="blue">This is my list</Button>
    </ButtonGroup>
  </>;
};

export default SampleBtn11;