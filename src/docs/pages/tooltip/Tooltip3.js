import React, {useState} from 'react';
import {Tooltip, Button, Toggle} from 'react-windy-ui';

export default function Tooltip3() {
  const [active, setActive] = useState(true);
  const [locked, setLocked] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={locked} onChange={val => {
        setActive(true);
        setLocked(val);
      }} content={{on: 'Lock', off: 'Lock'}}/>

      <Tooltip position="top" header="Header" defaultActive={true}
               body={<span>This is a tooltip</span>}>
        <Button outline={true} color="blue"
                style={{marginLeft: '1rem'}}>Default Active</Button>
      </Tooltip>

      <Tooltip position="top" header="Header"
               active={active}
               onChange={(val) => {
                 console.log(`Please change active state to ${val}`);
                 !locked && setActive(val);
               }}
               body={<span>A tooltip</span>}>
        <span style={{
          textDecoration: 'underline',
          marginLeft: '2rem',
        }}>
          Info
        </span>
      </Tooltip>
    </div>
  </>;
}