import React, {useState} from 'react';

import {Button, ButtonGroup, Progress, Toggle} from 'react-windy-ui';

export default function Progress3() {
  const [value, setValue] = useState(30);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={active} content={{on: 'Active', off: 'Active'}}
                onChange={(val) => setActive(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={loading} content={{on: 'Loading', off: 'Loading'}}
                onChange={(val) => setLoading(val)}/>
      </div>
    </div>
    <ButtonGroup>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </ButtonGroup>

    <Progress top
              active={active}
              percentValue={value}
              showLoading={loading}
              type="ok"
              style={{top: '0px'}}/>
  </>;

}