import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn17 = () => {
  return <>
    <div style={{padding: '1rem', background: 'black', color: 'white'}}>
      <div className="doc doc-row">
        <Button color="gray" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>gray</Button>
        <Button color="black" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>black</Button>
        <Button color="brown" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>brown</Button>
        <Button color="pink" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>pink</Button>
        <Button color="purple" hasOutlineBackground={false} outline
                invertedOutline hasMinWidth>purple</Button>
        <Button color="violet" hasOutlineBackground={false} outline
                invertedOutline hasMinWidth>violet</Button>
      </div>
      <div className="doc doc-row">
        <Button color="blue" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>blue</Button>
        <Button color="teal" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>teal</Button>
        <Button color="green" hasOutlineBackground={false} outline
                invertedOutline
                hasMinWidth>green</Button>
        <Button color="yellow" hasOutlineBackground={false} outline
                invertedOutline hasMinWidth>yellow</Button>
        <Button color="orange" hasOutlineBackground={false} outline
                invertedOutline hasMinWidth>orange</Button>
        <Button color="red" hasOutlineBackground={false} outline invertedOutline
                hasMinWidth>red</Button>
      </div>
    </div>
  </>;
};

export default SampleBtn17;