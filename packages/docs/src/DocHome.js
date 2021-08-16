import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {initStore, RouteLoader, StoreContext} from 'react-windy-ui';
import intl from 'react-intl-universal';
import {defaultTheme, DocThemeContext} from "./common/DocConstants";

// locale data
const locales = {
  'zh_CN': require('./common/doc_zh_CN.json'),
  'en_US': require('./common/doc_en_US.json'),
};

//Async modules to import
const Home = React.lazy(() => import(`./home/Home`));
const DocCenter = React.lazy(() => import('./main/DocCenter'));

const progressStyle = {
  top: '0', height: '3px', zIndex: '1000',
};

const barStyle = {
  background: '#27AE60',
};

const Loading = () => {
  return 'Loading the page...';
};

export default function DocHome() {
  const [lang, setLang] = useState({initDone: false, currentLocale: 'zh_CN'});
  const [store] = useState(() =>
    initStore('init'),
  );

  const switchLocale = useCallback((lc) => {
    return intl.init({
      locales,
      currentLocale: lc,
    });
  }, []);

  useEffect(() => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    switchLocale(lang.currentLocale);
  }, [lang.currentLocale, switchLocale]);

  const changeLocale = useCallback((nextLang) => {
    switchLocale(nextLang).then(() => setLang(pre => ({...pre, currentLocale: nextLang})));
  }, [switchLocale]);

  const theme = useMemo(() => defaultTheme, []);
  return <>
    <React.Suspense fallback={<Loading/>}>
      <DocThemeContext.Provider value={{theme}}>
        <StoreContext.Provider
          value={{
            supportLocals: Object.keys(locales),
            locale: lang.currentLocale,
            changeLocale,
            store,
          }}>
          <Switch>
            <RouteLoader
              route={Route}
              path={`/docs/:theme`}
              render={() => <DocCenter/>}
              progressStyle={progressStyle}
              barStyle={barStyle}>
            </RouteLoader>
            <RouteLoader
              exact
              route={Route}
              path={`/:theme`}
              render={() => <Home/>}
              progressStyle={progressStyle}
              barStyle={barStyle}>
            </RouteLoader>
            <Redirect from="/" to={`/${theme}`}/>
            <RouteLoader route={Route} render={() => <div>404, 页面不存在~~</div>}>

            </RouteLoader>
          </Switch>
        </StoreContext.Provider>
      </DocThemeContext.Provider>
    </React.Suspense>
  </>;
}