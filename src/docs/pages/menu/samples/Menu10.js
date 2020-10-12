import React, {useState} from 'react';
import {IconHome, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';

export default function Menu10() {
  const [horizontal, setHorizontal] = useState(false);
  const [type, setType] = useState('normal');
  const [popupSubMenu, setPopupSubMenu] = useState(false);

  return <div style={{width: horizontal ? '100%' : '50%'}}>
    <div className="doc doc-row">
      <Toggle active={horizontal} onChange={active => setHorizontal(active)}
              content={{on: 'Horizontal', off: 'Horizontal'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem'}}>type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={popupSubMenu} onChange={active => setPopupSubMenu(active)}
              content={{on: 'Popup SubMenu', off: 'Popup SubMenu'}}/>
    </div>

    <div className="doc doc-row">
      <div>
        <Menu direction={horizontal ? 'horizontal' : 'vertical'}
              popupSubMenu={popupSubMenu}
              type={type}
              onOpenedMenu={(data) => console.log(`==${data}`)}
              icon={<IconHome/>}>
          <Menu.SubMenu header="Navigation One" id="sub1"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Group header="Group1">
              <Menu.Item id="item1">
                Item1
              </Menu.Item>
              <Menu.Item id="item2">
                Item2
              </Menu.Item>
            </Menu.Group>
            <Menu.Group header="Group2">
              <Menu.Item id="item3">
                Item3
              </Menu.Item>
              <Menu.Item id="item4">
                Item4
              </Menu.Item>
            </Menu.Group>
          </Menu.SubMenu>
          <Menu.SubMenu header="Navigation Two" id="sub2"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item id="item5">
              Item5
            </Menu.Item>
            <Menu.Item id="item6">
              Item6
            </Menu.Item>
            <Menu.Item id="item7">
              Item7
            </Menu.Item>
            <Menu.Item id="item8">
              Item8
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  </div>;
}