import React, {useState} from 'react';

import {ButtonGroup, Button, Progress, Card, Checkbox} from 'react-windy-ui';

export default function Progress2() {
  const [value, setValue] = useState(30);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showStrip, setShowStrip] = useState(false);
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

    <div className="doc doc-row">
      <Checkbox onChange={val => setShowAnimation(val)}>Animation</Checkbox>
      <Checkbox onChange={val => setShowStrip(val)}>Striped</Checkbox>
    </div>

    <Card>
      <Card.Row>
        <Progress percentValue={value} showDetail hasStripe={showStrip}
                  hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="info" showDetail
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="ok" showDetail
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="warning" showDetail
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
        <Progress percentValue={value} type="error" showDetail
                  hasStripe={showStrip} hasAnimation={showAnimation}/>
      </Card.Row>
    </Card>

  </>;

}