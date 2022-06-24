import React, { useState } from 'react';
import { IconList, Menu, Radio, RadioGroup, Toggle } from 'react-windy-ui';

export default function Menu13() {
  const [type, setType] = useState('normal');
  const [hasBox, setHasBox] = useState(true);
  const [hasArrow, setHasArrow] = useState(true);
  const [bottomBar, setBottomBar] = useState(true);
  const [ripple, setRipple] = useState(true);
  const [indent, setIndent] = useState(true);
  return (
    <>
      <div className="doc doc-row">
        <span style={{ marginRight: '1rem', fontWeight: '600' }}>Type:</span>
        <RadioGroup defaultValue={type} onChange={(val) => setType(val)}>
          <Radio value="primary"> primary</Radio>
          <Radio value="dark"> dark</Radio>
          <Radio value="normal">normal </Radio>
        </RadioGroup>
      </div>
      <div className="doc doc-row">
        <Toggle active={hasArrow} onChange={(active) => setHasArrow(active)} label="Arrow" />
      </div>
      <div className="doc doc-row">
        <Toggle active={hasBox} onChange={(active) => setHasBox(active)} label="Box Shadow" />
      </div>

      <div className="doc doc-row">
        <Toggle active={bottomBar} onChange={(active) => setBottomBar(active)} label="Bottom Bar" />
      </div>
      <div className="doc doc-row">
        <Toggle active={ripple} onChange={(active) => setRipple(active)} label="Ripple" />
      </div>
      <div className="doc doc-row">
        <Toggle active={indent} onChange={(active) => setIndent(active)} label="Auto Indent" />
      </div>
      <div className="doc doc-row space">
        <Menu
          hasBox={hasBox}
          hasArrow={hasArrow}
          hasRipple={ripple}
          autoIndent={indent}
          type={type}
        >
          <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList />} hasBottomBar={bottomBar}>
            <Menu.Item id="item3" hasBottomBar={bottomBar}>
              Menu item3
            </Menu.Item>
            <Menu.Item id="item4" hasBottomBar={bottomBar}>
              Menu item4
            </Menu.Item>
            <Menu.Item id="item5" hasBottomBar={bottomBar}>
              Menu item5
            </Menu.Item>
            <Menu.Item id="item6" hasBottomBar={bottomBar}>
              Menu item6
            </Menu.Item>
            <Menu.Item id="item7" hasBottomBar={bottomBar}>
              Menu item7
            </Menu.Item>
            <Menu.Item id="item8" hasBottomBar={bottomBar}>
              Menu item8
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu header="SubMenu 2" id="sub2" hasBottomBar={bottomBar}>
            <Menu.Item id="item9" hasBottomBar={bottomBar}>
              Menu item9
            </Menu.Item>
            <Menu.Item id="item10" hasBottomBar={bottomBar}>
              Menu item10
            </Menu.Item>
            <Menu.Item id="item11" hasBottomBar={bottomBar}>
              Menu item11
            </Menu.Item>
            <Menu.Item id="item12" hasBottomBar={bottomBar}>
              Menu item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </>
  );
}
