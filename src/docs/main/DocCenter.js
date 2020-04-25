import React from 'react';
import HomeHeader from '../home/HomeHeader';
import {Col, Row, Card, Button, RouteLoader, Affix} from 'react-windy-ui';
import DocMenu from './DocMenu';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import InstallIndex from '../pages/install/InstallIndex';
import ButtonIndex from '../pages/button/ButtonIndex';
import InputIndex from '../pages/input/InputIndex';

function DocCenter(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {url} = useRouteMatch();

  return <>

    <HomeHeader/>
    <Row style={{padding: '2rem 0 0'}}>
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
              <RouteLoader exact route={Route} path={`${url}/`}>
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