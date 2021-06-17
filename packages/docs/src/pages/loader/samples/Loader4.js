import React, {useState} from 'react';
import {Button, Loader, Toggle} from 'react-windy-ui';

export default function Loader4() {
  const [active, setActive] = useState(false);
  const [hasMask, setMask] = useState(true);
  const [hasBg, setBg] = useState(true);

  const loaderColor = !hasBg && hasMask ? 'white' : 'blue';

  const delayClose = () => {
    const timeout = setTimeout(() => {
      setActive(false);
      clearTimeout(timeout);
    }, 3000);
  };

  return <>
    <div className="doc doc-row">
      <Toggle active={hasMask} onChange={val => setMask(val)}
              label='Mask'/>
    </div>

    <div className="doc doc-row">
      <Toggle active={hasBg} onChange={val => setBg(val)}
              label='Background'/>
    </div>

    <Button type="primary" onClick={() => {
      setActive(true);
      delayClose();
    }}>Active</Button>

    <Loader type="third"
            global={true}
            color={loaderColor}
            active={active}
            hasMask={hasMask}
            hasBackground={hasBg}
            onMaskClick={() => setActive(false)}
            text="Will close in 3 seconds">
    </Loader>
  </>;
}