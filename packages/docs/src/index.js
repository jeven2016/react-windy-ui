import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import 'react-windy-ui/dist/wui.css';
import './style/doc.scss';
import DocHome from './DocHome';
import { HashRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CssThemeProvider } from 'react-windy-ui';

library.add();

const themeMap = {
  default: `wui.css`,
  dark: `wui-dark.css`
};

//{<!-- https://reactjs.org/docs/strict-mode.html -->}
//When we use useState, component 2 time render.
//That’s what Strict Mode does. It calls render phase code twice in development so that you can notice if it performs unexpected side effects. In production, there would be only one call.
// https://github.com/facebook/react/issues/18422
// https://reactjs.org/docs/strict-mode.html
ReactDOM.render(
  // <React.StrictMode>
  <CssThemeProvider defaultTheme="default" themeMap={themeMap}>
    <Router>
      <DocHome />
    </Router>
  </CssThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
