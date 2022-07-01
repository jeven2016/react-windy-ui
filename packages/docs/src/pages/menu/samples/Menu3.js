import React, { useState } from 'react';
import { Menu, Toggle } from 'react-windy-ui';

export default function Menu3() {
  const [vertical, setVertical] = useState(false);
  return (
    <>
      <div className="doc doc-row">
        <Toggle
          active={vertical}
          onChange={(active) => setVertical(active)}
          label={{ on: 'Vertical', off: 'Horizontal' }}
        />
      </div>
      <div className="doc doc-row">
        <Menu defaultActiveItems={['item1']} direction={vertical ? 'vertical' : 'horizontal'}>
          <Menu.Item id="item1">Menu Item1</Menu.Item>
          <Menu.Item id="item2">Menu Item2</Menu.Item>
          <Menu.Item id="item3">Menu Item3</Menu.Item>
        </Menu>
      </div>
    </>
  );
}
