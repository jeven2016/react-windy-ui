import React from 'react';
import {Menu} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAudible} from '@fortawesome/free-brands-svg-icons';

export default function Menu11() {

  return <div className="doc doc-row space">
    <div>
      <Menu type="primary" header="Menu" defaultOpenedMenus="sub1">
        <Menu.SubMenu id="sub1" header="System Menu"
                      icon={<FontAwesomeIcon icon={faAudible}/>}>
          <Menu.Group header="Setting">
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
      </Menu>
    </div>
  </div>;
}