import React, { useState } from 'react';
import { Button, Drawer } from 'react-windy-ui';

export default function Drawer1() {
  const [active, setActive] = useState(false);
  const [drawer2Active, setDrawer2Active] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setActive(true)}>
        Drawer
      </Button>
      <Button type="primary" onClick={() => setDrawer2Active(true)}>
        Drawer2
      </Button>

      <Drawer
        active={active}
        style={{ width: '40%' }}
        onChange={(show) => setActive(show)}
      ></Drawer>

      <Drawer
        active={drawer2Active}
        hasMask={false}
        style={{ width: '40%' }}
        onChange={(show) => setDrawer2Active(show)}
      ></Drawer>
    </>
  );
}
