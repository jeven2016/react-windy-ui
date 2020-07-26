import React from 'react';
import {Card, Tooltip} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card6() {
  return <>
    <Tooltip body="一个最简单的,只有图片的卡片">
      <Card style={{width: "15rem"}}>
        <Card.CardImage>
          <Card.Image src={pic}/>
        </Card.CardImage>
      </Card>
    </Tooltip>
  </>;
}