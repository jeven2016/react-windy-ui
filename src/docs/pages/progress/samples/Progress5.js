import React, {useState} from 'react';

import {Button, ButtonGroup, Progress, Card} from 'react-windy-ui';
import {IconError, IconOk, IconWarning} from '../../../../components/src';

export default function Progress5() {
  const [value, setValue] = useState(5);
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


    <Progress percentValue={value}
              hasAnimation={true}
              hasStripe={true}
              hasContent={true}
              config={[
                {
                  percentValue: 30,
                  type: 'error',
                  content: (p) => <IconError/>,
                },
                {
                  percentValue: 50,
                  type: 'warning',
                  content: (p) => <IconWarning/>,
                },
                {percentValue: 80, type: 'ok', content: (p) => <IconOk/>},
                {percentValue: 99, type: 'info', content: (p) => 'OK'},
                {percentValue: 100, type: 'ok', content: (p) => 'Completed!'},
              ]}/>
  </>;

}