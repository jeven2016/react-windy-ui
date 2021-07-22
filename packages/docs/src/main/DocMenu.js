import React, {useState, useCallback} from 'react';
import {Menu} from 'react-windy-ui';
import {Link, useRouteMatch} from 'react-router-dom';

export default function DocMenu(props) {
  const {hasBox = false, onSelectMenuItem} = props;
  const [overflow, setOverflow] = useState('hidden');
  const {url} = useRouteMatch();

  const handleOverflow = useCallback((value, e) => {
    setOverflow(value);
    e.preventDefault();
  }, [setOverflow]);

  return <Menu type="primary"
               hasBox={hasBox}
               hasRipple={false}
               defaultActiveItems={['start']}
               onSelect={onSelectMenuItem}
               defaultOpenedMenus={['basic']}
               onTouchStart={(e) => {
                 handleOverflow('auto', e);
               }}
               onMouseEnter={(e) => {
                 handleOverflow('auto', e);
               }}
               onMouseLeave={(e) => {
                 handleOverflow('hidden', e);
               }}
               style={{
                 maxHeight: 'calc(100vh - 80px)',
                 overflow: overflow,
                 background: '#fff',
               }}>
    <Menu.Item id="start">
      <Link to={`${url}/start`}>
        快速开始
      </Link>
    </Menu.Item>
    <Menu.SubMenu header="表单" id="basic">
      <Menu.Item id="btn">
        <Link to={`${url}/button`}>
          按钮 Button
        </Link>
      </Menu.Item>
      <Menu.Item id="chk">
        <Link to={`${url}/checkbox`}>
          多选 Checkbox
        </Link>
      </Menu.Item>
      <Menu.Item id="menu">
        <Link to={`${url}/menu`}>
          菜单 Menu
        </Link>
      </Menu.Item>
      <Menu.Item id="input">
        <Link to={`${url}/input`}>
          输入框 Input
        </Link>
      </Menu.Item>
      <Menu.Item id="text-field">
        <Link to={`${url}/text-field`}>
          文本框 Text Field
        </Link>
      </Menu.Item>
      <Menu.Item id="radio">
        <Link to={`${url}/radio`}>
          单选 Radio
        </Link>
      </Menu.Item>
      <Menu.Item id="select">
        <Link to={`${url}/select`}>
          选择 Select
        </Link>
      </Menu.Item>
      <Menu.Item id="toggle">
        <Link to={`${url}/toggle`}>
          开关 Toggle
        </Link>
      </Menu.Item>
      <Menu.Item id="datepicker">
        <Link to={`${url}/datepicker`}>
          日期 DatePicker
        </Link>
      </Menu.Item>
      <Menu.Item id="timepicker">
        <Link to={`${url}/timepicker`}>
          时间 TimePicker
        </Link>
      </Menu.Item>
      <Menu.Item id="form">
        <Link to={`${url}/form`}>
          表单 Form
        </Link>
      </Menu.Item>
      <Menu.Item id="affix">
        <Link to={`${url}/affix`}>
          图钉 Affix
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
      <Menu.Item id="popConfirm">
        <Link to={`${url}/popConfirm`}>
          确认 PopConfirm
        </Link>
      </Menu.Item>
      <Menu.Item id="tooltip">
        <Link to={`${url}/tooltip`}>
          提示 Tooltip
        </Link>
      </Menu.Item>
      <Menu.Item id="modal">
        <Link to={`${url}/modal`}>
          对话框 Modal
        </Link>
      </Menu.Item>
      <Menu.Item id="drawer">
        <Link to={`${url}/drawer`}>
          抽屉 Drawer
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="信息提示" id="info">
      <Menu.Item id="badge">
        <Link to={`${url}/badge`}>
          标记 Badge
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
    <Menu.SubMenu header="数据展示" id="data">
      <Menu.Item id="avatar">
        <Link to={`${url}/avatar`}>
          头像 Avatar
        </Link>
      </Menu.Item>
      <Menu.Item id="list">
        <Link to={`${url}/list`}>
          列表 List
        </Link>
      </Menu.Item>
      <Menu.Item id="navbar">
        <Link to={`${url}/navbar`}>
          导航条 Navbar
        </Link>
      </Menu.Item>
      <Menu.Item id="tree">
        <Link to={`${url}/tree`}>
          树控件 Tree
        </Link>
      </Menu.Item>
      <Menu.Item id="blockquote">
        <Link to={`${url}/blockquote`}>
          引用 Blockquote
        </Link>
      </Menu.Item>
      <Menu.Item id="carousel">
        <Link to={`${url}/carousel`}>
          轮播 Carousel
        </Link>
      </Menu.Item>
      <Menu.Item id="table">
        <Link to={`${url}/table`}>
          表格 Table
        </Link>
      </Menu.Item>
      <Menu.Item id="pagination">
        <Link to={`${url}/pagination`}>
          分页 Pagination
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="布局" id="layoutIndex">
      <Menu.Item id="space">
        <Link to={`${url}/space`}>
          间距 Space
        </Link>
      </Menu.Item>
      <Menu.Item id="collapse">
        <Link to={`${url}/collapse`}>
          折叠框 Collapse
        </Link>
      </Menu.Item>
      <Menu.Item id="grid">
        <Link to={`${url}/grid`}>
          栅格 Grid
        </Link>
      </Menu.Item>
      <Menu.Item id="tab">
        <Link to={`${url}/tabs`}>
          选项卡 Tabs
        </Link>
      </Menu.Item>
      <Menu.Item id="breadcrumb">
        <Link to={`${url}/breadcrumb`}>
          面包屑 Breadcrumb
        </Link>
      </Menu.Item>
      <Menu.Item id="card">
        <Link to={`${url}/card`}>
          卡片 Card
        </Link>
      </Menu.Item>
      <Menu.Item id="layout">
        <Link to={`${url}/layout`}>
          布局 Layout
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="工具" id="utilsIndex">
      <Menu.Item id="useMq">
        <Link to={`${url}/hooks`}>
          Hooks
        </Link>
      </Menu.Item>
      <Menu.Item id="theme">
        皮肤
      </Menu.Item>
      <Menu.Item id="icons">
        图标库
      </Menu.Item>
      <Menu.Item id="classes">
        辅助样式
      </Menu.Item>
      <Menu.Item id="functions">
        函数工具
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>;
}