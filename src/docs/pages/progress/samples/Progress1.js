import React, {useState} from 'react';

import {ButtonGroup, Button, Progress, Card} from 'react-windy-ui';

export default function Progress1() {
  const [value, setValue] = useState(30);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </div>

    <Card>
      <Card.Body>
        <Progress percentValue={value} type="info"/>
        <Progress percentValue={value} type="ok"/>
        <Progress percentValue={value} type="warning"/>
        <Progress percentValue={value} type="error"/>
      </Card.Body>
    </Card>
  </>;

}