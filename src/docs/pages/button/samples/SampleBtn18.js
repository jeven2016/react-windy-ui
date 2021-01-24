import React from 'react';
import {Button, Space} from 'react-windy-ui';

const SampleBtn18 = () => {
  return <>
    <Space gutter={{x: 8, y: 16}} wrap={true} style={{background: '#423e3e', padding: '8px'}}>
      <Button color="gray" hasOutlineBackground outline invertedOutline
              hasMinWidth>gray</Button>
      <Button color="black" hasOutlineBackground outline invertedOutline
              hasMinWidth>black</Button>
      <Button color="brown" hasOutlineBackground outline invertedOutline
              hasMinWidth>brown</Button>
      <Button color="pink" hasOutlineBackground outline invertedOutline
              hasMinWidth>pink</Button>
      <Button color="purple" hasOutlineBackground outline
              invertedOutline hasMinWidth>purple</Button>
      <Button color="violet" hasOutlineBackground outline
              invertedOutline hasMinWidth>violet</Button>
      <br/>
      <Button color="blue" hasOutlineBackground outline invertedOutline
              hasMinWidth>blue</Button>
      <Button color="teal" hasOutlineBackground outline invertedOutline
              hasMinWidth>teal</Button>
      <Button color="green" hasOutlineBackground outline invertedOutline
              hasMinWidth>green</Button>
      <Button color="yellow" hasOutlineBackground outline
              invertedOutline hasMinWidth>yellow</Button>
      <Button color="orange" hasOutlineBackground outline
              invertedOutline hasMinWidth>orange</Button>
      <Button color="red" hasOutlineBackground outline invertedOutline
              hasMinWidth>red</Button>
    </Space>
  </>;
};

export default SampleBtn18;