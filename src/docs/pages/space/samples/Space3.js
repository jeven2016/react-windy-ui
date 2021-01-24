import React from "react";
import {Button, Space} from 'react-windy-ui';

export default function Space3() {

  return <Space gutter={{x: 8, y: 16}}
                style={{background: 'black', padding: '8px'}}
                wrap={true}>
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
  </Space>;
}