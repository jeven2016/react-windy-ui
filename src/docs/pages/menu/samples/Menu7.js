import React from 'react';
import {Menu} from 'react-windy-ui';

const ItemStyle = {
  lineHeight: '3.2rem',
};

export default function Menu7() {
  return <div className="doc doc-row space">
    <Menu type="dark"
          direction="horizontal">
      <Menu.Item id="item1" style={ItemStyle}>
        Menu Item1
      </Menu.Item>
      <Menu.Item id="item2" style={ItemStyle}>
        Menu Item2
      </Menu.Item>
      <Menu.Item id="item3" style={ItemStyle}>
        Menu Item3
      </Menu.Item>
    </Menu>
  </div>;

}