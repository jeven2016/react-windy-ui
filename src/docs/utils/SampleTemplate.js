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

export const getIndexContent = () => {
  return `
import React from 'react';
import ReactDom from 'react-dom';
import default as Sample from './Sample';

ReactDom.render(<Sample/>, document.getElementById('root'));
  
  `;
};