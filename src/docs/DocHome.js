import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {RouteLoader} from 'react-windy-ui';
import {LanguageContext} from './utils/Context';

//Async modules to import
const Home = React.lazy(() => import(`./home/Home`));
const DocCenter = React.lazy(() => import('./main/DocCenter'));
const Loading = () => null;//no need this feature

const progressStyle = {
  top: '0', height: '3px', zIndex: '1000',
};

const barStyle = {
  background: '#27AE60',
};

export default function DocHome() {
  const [language, setLanguage] = useState('zh_CN');
  const {Provider} = LanguageContext;

  return <>
    <React.Suspense fallback={<Loading/>}>
      <Provider value={{language}}>
        <Switch>
          <RouteLoader
              route={Route}
              path="/docs"
              render={() => <DocCenter/>}
              progressStyle={progressStyle}
              barStyle={barStyle}>
          </RouteLoader>
          <RouteLoader
              exact
              route={Route}
              path="/"
              render={() => <Home/>}
              progressStyle={progressStyle}
              barStyle={barStyle}>
            <Home/>
          </RouteLoader>

          <RouteLoader route={Route} render={() => <div>404, 页面不存在~~</div>}>

          </RouteLoader>
        </Switch>
      </Provider>
    </React.Suspense>
  </>;
}