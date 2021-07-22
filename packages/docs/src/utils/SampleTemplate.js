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
    
    &.space{
      max-width: 250px;
    }
  }
  
  &.doc-col {
    display: inline-flex;
    margin-right: 1rem;
  }
  
  &.inverted-row {
    padding: 1rem;
    background: #423e3e;

    > .button {
      margin: 0.5rem 0.5rem 0.5rem 0;
    }
  }
  
} 

.extra-tab {
  border-radius: .5rem .5rem 0 0;
  color: rgba(255, 255, 255, .6);
  background: rgb(10, 137, 219);
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);

  .tab-item {
    &:hover {
      color: #fff !important;
    }

    &.active {
      color: #fff !important;
      background: rgba(12, 160, 255, 5);
    }
  }

  .tab-bar {
    border-bottom: 4px solid rgb(255, 0, 0) !important;
  }
} 
  
  `;
};

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
          'react-windy-ui': '^0.6.1',
          'react': 'latest',
          'react-dom': 'latest',
          "@fortawesome/fontawesome-svg-core": "^1.2.28",
          "@fortawesome/free-brands-svg-icons": "^5.13.0",
          "@fortawesome/free-regular-svg-icons": "^5.13.0",
          "@fortawesome/free-solid-svg-icons": "^5.13.0",
          "@fortawesome/react-fontawesome": "^0.1.9",
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