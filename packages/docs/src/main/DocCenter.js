import React, {useCallback, useMemo, useState} from 'react';
import HomeHeader from '../home/HomeHeader';
import {Affix, Card, Col, Drawer, initStore, Responsive, RouteLoader, Row, useMediaQuery,} from 'react-windy-ui';
import DocMenu from './DocMenu';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
// import ButtonIndex from '../pages/button/ButtonIndex';
import QuickManu from './QuickManu';
import {QuickManuContext} from '../utils/DocUtils';
import RouteConfig from "../common/RouteConfig";


function DocCenter(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {url} = useRouteMatch();
  const history = useHistory();
  const responsive = useMemo(() => ({
    xg: Responsive.xg.min,
    lg: Responsive.lg.min,
    sm: Responsive.sm.max,
  }), []);
  const {xg: isMinXg, lg: isMinLg, sm: isMaxSm} = useMediaQuery(responsive);

  let contentProps;
  if (isMinXg) {
    contentProps = {col: 8};
  } else if (isMinLg) {
    contentProps = {col: 10};
  } else {
    contentProps = {col: 12};
  }

  let containerStyle = {padding: '16px 16px'};

  const [store] = useState(() =>
    initStore({list: []}), /**{list:  [{id: xx, text: xxx}]} **/
  );

  const [activeDrawer, setActive] = useState(false);

  const selectMenuItem = useCallback((id) => {
    setActive(false);
    history.push(`${url}/${id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, [history, url]);

  return <QuickManuContext.Provider value={{quickManuStore: store}}>
    <HomeHeader/>
    <div style={containerStyle}>
      {
        !isMinLg &&
        <Drawer active={activeDrawer}
                position="left"
                hasAnchor
                style={{width: isMaxSm ? '80%' : '300px'}}
                onChange={(show) => setActive(show)}>
          <DocMenu hasBox={false}
                   onSelectMenuItem={selectMenuItem}/>
        </Drawer>
      }

      <Row>
        {
          isMinLg &&
          <Col col={2} extraClassName="doc left-col">
            <Affix top={80}>
              <DocMenu hasBox={false}
                       onSelectMenuItem={selectMenuItem}/>
            </Affix>
          </Col>
        }
        <Col {...contentProps} extraClassName="doc content-col">
          <Card block hasBox={false}>
            <Card.Row extraClassName="doc page-container">
              <Switch>
                {
                  Object.entries(RouteConfig).map(([k, v], index) =>
                    <RouteLoader key={k + index} route={Route} path={`${url}/${k}`}
                                 render={() => v}/>
                  )
                }
                <RouteLoader route={Route} path={`${url}/button`} render={() => RouteConfig.button}>
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
        {isMinXg && <Col col={2}>
          <Affix top={80}>
            <QuickManu/>
          </Affix>
        </Col>}
      </Row>
    </div>
  </QuickManuContext.Provider>;

}

export default DocCenter;