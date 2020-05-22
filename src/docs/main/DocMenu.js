import React from 'react';
import {Menu} from 'react-windy-ui';
import {Link, useRouteMatch} from 'react-router-dom';

export default function DocMenu(props) {
  const {url} = useRouteMatch();
  return <Menu type="primary">
    <Menu.SubMenu header="基础组件" id="basic">
      <Menu.Item id="btn">
        <Link to={`${url}/button`}>
          按钮 Button
        </Link>
      </Menu.Item>
      <Menu.Item id="input">
        <Link to={`${url}/input`}>
          输入框 Input
        </Link>
      </Menu.Item>
      <Menu.Item id="radio">
        <Link to={`${url}/radio`}>
          单选 Radio
        </Link>
      </Menu.Item>
      <Menu.Item id="chk">
        <Link to={`${url}/checkbox`}>
          多选 Checkbox
        </Link>
      </Menu.Item>
      <Menu.Item id="toggle">
        <Link to={`${url}/toggle`}>
          开关 Toggle
        </Link>
      </Menu.Item>
      <Menu.Item id="collapse">
        <Link to={`${url}/collapse`}>
          折叠框 Collapse
        </Link>
      </Menu.Item>
      <Menu.Item id="menu">
        <Link to={`${url}/menu`}>
          菜单 Menu
        </Link>
      </Menu.Item>

    </Menu.SubMenu>
    <Menu.SubMenu header="弹出框" id="pop">
      <Menu.Item id="dropdown">
        <Link to={`${url}/dropdown`}>
          下拉框 Dropdown
        </Link>
      </Menu.Item>
      <Menu.Item id="popover">
        <Link to={`${url}/popover`}>
          弹出框 Popover
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>;
}