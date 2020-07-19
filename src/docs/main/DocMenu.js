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
      <Menu.Item id="navbar">
        <Link to={`${url}/navbar`}>
          导航条 Navbar
        </Link>
      </Menu.Item>

    </Menu.SubMenu>
    <Menu.SubMenu header="弹出框" id="pop">
      <Menu.Item id="dropdown">
        <Link to={`${url}/dropdown`}>
          下拉菜单 Dropdown
        </Link>
      </Menu.Item>
      <Menu.Item id="popover">
        <Link to={`${url}/popover`}>
          弹出框 Popover
        </Link>
      </Menu.Item>
      <Menu.Item id="tooltip">
        <Link to={`${url}/tooltip`}>
          提示 Tooltip
        </Link>
      </Menu.Item>
      <Menu.Item id="select">
        <Link to={`${url}/select`}>
          选择 Select
        </Link>
      </Menu.Item>
      <Menu.Item id="modal">
        <Link to={`${url}/modal`}>
          对话框 Modal
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="提示信息" id="info">
      <Menu.Item id="badge">
        <Link to={`${url}/badge`}>
          标记 Badge
        </Link>
      </Menu.Item>
      <Menu.Item id="drawer">
        <Link to={`${url}/drawer`}>
          抽屉 Drawer
        </Link>
      </Menu.Item>
      <Menu.Item id="alert">
        <Link to={`${url}/alert`}>
          警告 Alert
        </Link>
      </Menu.Item>
      <Menu.Item id="notification">
        <Link to={`${url}/notification`}>
          通知 Notification
        </Link>
      </Menu.Item>
      <Menu.Item id="loader">
        <Link to={`${url}/loader`}>
          加载 Loader
        </Link>
      </Menu.Item>
      <Menu.Item id="progress">
        <Link to={`${url}/progress`}>
          进度 Progress
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="数据" id="data">
      <Menu.Item id="tree">
        <Link to={`${url}/tree`}>
          树控件 Tree
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>;
}