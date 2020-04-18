import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {RouteLoader, AsyncComponent} from 'react-windy-ui';

const aaa = () => import('./test/TestMain');
const progressStyle = {
  top: '4rem', height: '3px', zIndex: '1000',
};

const barStyle = {
  background: '#27AE60',
};

export default function DocHome() {

  const fun = () => 'TestHome';
  const url = fun();
  return <>
    <Router>
      <RouteLoader
          exact
          route={Route}
          path={`/docs`}
          component={AsyncComponent(() => import('./test/TestMain'))}
          progressStyle={progressStyle}
          barStyle={barStyle}/>

      <RouteLoader
          exact
          route={Route}
          path={`/`}
          component={AsyncComponent(() => import('./test/' + url))}
          progressStyle={progressStyle}
          barStyle={barStyle}>
      </RouteLoader>



    </Router>
  </>;
}