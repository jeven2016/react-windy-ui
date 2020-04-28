import React from 'react';
import {Menu} from 'react-windy-ui';
import {Link, useRouteMatch} from 'react-router-dom';

export default function DocMenu(props) {
  const {url} = useRouteMatch();

  return <Menu hasBox={true} type="primary" block>
    <Menu.List>
      <Menu.Item id="install">快速安装</Menu.Item>
      <Menu.SubMenu>
        <Menu.Header id="bacicCmp">基础组件</Menu.Header>
        <Menu.List>
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
        </Menu.List>
      </Menu.SubMenu>
      <Menu.SubMenu>
        <Menu.Header>布局组件</Menu.Header>
        <Menu.List>
          <Menu.Item id="item4_1" disabled={false}>
            卡片 Card
          </Menu.Item>
          <Menu.Item id="item4_2" disabled={false}>
            Not disabled</Menu.Item>
        </Menu.List>
      </Menu.SubMenu>
    </Menu.List>
  </Menu>;
}