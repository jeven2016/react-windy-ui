import React, { useState } from 'react';
import { Button, Card, Select } from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card9() {
  const [bg, setBg] = useState('bg-color-black');
  return (
    <>
      <div className="doc doc-row space">
        <Select value={bg} onSelect={(value) => setBg(value)}>
          <Select.Option value="bg-color-pink">pink</Select.Option>
          <Select.Option value="bg-color-blue">blue</Select.Option>
          <Select.Option value="bg-color-brown">brown</Select.Option>
          <Select.Option value="bg-color-black">black</Select.Option>
          <Select.Option value="bg-color-cyan">cyan</Select.Option>
          <Select.Option value="bg-color-dark">dark</Select.Option>
        </Select>
      </div>

      <Card style={{ width: '15rem' }} extraClassName={`${bg} text color-white`}>
        <Card.Header>
          <h4>A Movie Star</h4>
        </Card.Header>
        <Card.CardImage>
          <Card.Image src={pic}></Card.Image>
          <Card.OverlayTitle>
            <h2>A Picture</h2>
            <h6>The description for this picture</h6>
          </Card.OverlayTitle>
        </Card.CardImage>
        <Card.Footer>
          <div className="flex-adjust justify-center">
            <Button color="green" hasOutlineBackground={false} outline invertedOutline hasMinWidth>
              Action
            </Button>
            <Button color="green" hasOutlineBackground outline invertedOutline hasMinWidth>
              Action2
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
