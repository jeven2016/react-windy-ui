import React, {useState} from 'react';
import {Alert, Checkbox} from 'react-windy-ui';

export default function Alert6() {
  const [active, setActive] = useState(true);
  const [activeAuto, setActiveAuto] = useState(true);
  return <>
    <div className="doc doc-row">
      <Checkbox label="Active" checked={active}
                onChange={(enable) => {
                  setActive(enable);
                  setActiveAuto(enable);
                }}/>
    </div>
    <Alert type="info" body="info alert" active={active}
           onClose={() => setActive(false)}/>

    <Alert type="ok" body="close in 3 seconds" active={activeAuto} autoClose={true}
           duration={3000} onClose={() => setActiveAuto(false)}/>

  </>;
}