import React, {useState} from 'react';
import {Button, Drawer, Responsive, useMediaQuery} from 'react-windy-ui';

export default function Drawer4() {
  const [active, setActive] = useState(false);

  //detect if the window is small
  const {matches} = useMediaQuery(Responsive.sm.max);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Drawer</Button>
    <Drawer active={active} header={'Header'}
            footer={<div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button type="primary"
                      onClick={() => setActive(false)}>OK</Button>
            </div>}
            style={{width: matches ? '90%' : '40%'}}
            onChange={(show) => setActive(show)}>
    </Drawer>
  </>;
}