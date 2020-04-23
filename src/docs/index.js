import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style/wui-modern-0.5.1.min.css';
import './style/doc.scss';
import DocHome from './DocHome';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';


library.add();

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <DocHome/>
      </Router>
      /</React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
