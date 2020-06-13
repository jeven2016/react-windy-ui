import React from 'react';
import HomeHeader from '../home/HomeHeader';
import {Affix, Card, Col, RouteLoader, Row} from 'react-windy-ui';
import DocMenu from './DocMenu';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import InstallIndex from '../pages/install/InstallIndex';
import ButtonIndex from '../pages/button/ButtonIndex';
import InputIndex from '../pages/input/InputIndex';
import CheckboxIndex from '../pages/checkbox/CheckboxIndex';
import RadioIndex from '../pages/radio/RadioIndex';
import ToggleIndex from '../pages/toggle/ToggleIndex';
import CollapseIndex from '../pages/collapse/CollapseIndex';
import MenuIndex from '../pages/menu/MenuIndex';
import PopoverIndex from '../pages/popover/PopoverIndex';
import TooltipIndex from '../pages/tooltip/TooltipIndex';
import SelectIndex from '../pages/select/SelectIndex';
import DpIndex from '../pages/dropdown/DpIndex';

function DocCenter(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {url} = useRouteMatch();

  return <>

    <HomeHeader/>
    <Row style={{padding: '1rem 0 0 0'}}>
      <Col mdOffset={1} md={2}>
        <Affix top={90}>
          <DocMenu/>
        </Affix>
      </Col>
      <Col md={7}>
        <Card block>
          <Card.Row extraClassName="doc page-container">
            <Switch>
              <RouteLoader route={Route} path={`${url}/button`}>
                <ButtonIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/input`}>
                <InputIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/radio`}>
                <RadioIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/checkbox`}>
                <CheckboxIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/toggle`}>
                <ToggleIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/collapse`}>
                <CollapseIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/menu`}>
                <MenuIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/dropdown`}>
                <DpIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/popover`}>
                <PopoverIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/tooltip`}>
                <TooltipIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/select`}>
                <SelectIndex/>
              </RouteLoader>
              <RouteLoader route={Route} path={`${url}/`}>
                <InstallIndex/>
              </RouteLoader>
              <RouteLoader route={Route}>
                <div>
                  404, 页面不存在！
                </div>
              </RouteLoader>
            </Switch>
          </Card.Row>
        </Card>
      </Col>
      <Col md={2}>
        <Affix top={70}>
          <div>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
            <p>示例1: 普通的按钮</p>
          </div>
        </Affix>
      </Col>
    </Row>

  </>;

}

export default DocCenter;