import React from 'react';

export const getHtml = () => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="React Windy UI"
    />
    <title>React Windy UI</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root" class="root"></div>
  </body>
</html>
  `;
};

export const getScss = () => {
  return `
.doc{

  &.doc-row {
    margin-bottom: 1rem;
  }
  
  &.doc-col {
    display: inline-flex;
    margin-right: 1rem;
  }
}  
  
  `;
}

export const getIndexContent = () => {
  return `
import React from 'react';
import ReactDom from 'react-dom';
import 'react-windy-ui/dist/wui.css';
import './sample.scss';
import {default as Sample} from './Sample';

ReactDom.render(<div style={{margin: '1rem'}}><Sample/></div>, document.getElementById('root'));
  `;
};

export const getPackage = () => {
  return {
    'package.json': {
      content: {
        title: 'react-windy-ui',
        description: 'demo for react-windy-ui ',
        dependencies: {
          'react-windy-ui': '0.2.3',
          'react': 'latest',
          'react-dom': 'latest',
        },
        devDependencies: {
          'react-scripts': 'latest',
        },
        main: 'index.js',
        scripts: 'react start',
      },
    },
  };
};