import React, {useState} from 'react';
import {Button, Drawer} from 'react-windy-ui';

export default function Drawer4() {
  const [active, setActive] = useState(false);

  return <>
    <Button type="primary" onClick={() => setActive(true)}>Drawer</Button>
    <Drawer active={active} header={'Header'}
            footer={<div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button type="primary"
                      onClick={() => setActive(false)}>OK</Button>
            </div>}
            style={{width: '40%'}}
            onChange={(e, show) => setActive(show)}>
    </Drawer>
  </>;
}