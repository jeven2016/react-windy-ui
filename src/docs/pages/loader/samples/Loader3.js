import React, {useState} from 'react';
import {Button, Loader, Toggle} from 'react-windy-ui';

export default function Loader3() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>

      <div className="doc doc-col">
        <Button color="black">
          <Loader active={active} size="small"/>
          <span>Saving</span>
        </Button>
      </div>

      <div className="doc doc-col">
        <Button color="green" disabled>
          <span>Saving</span>
          <Loader type="secondary" active={active} size="small" color="white"/>
        </Button>
      </div>

      <div className="doc doc-col">
        <Button color="brown">
          <span>Loading</span>
          <Loader type="third" active={active} size="small" color="white"/>
        </Button>
      </div>
    </div>
  </>;
}