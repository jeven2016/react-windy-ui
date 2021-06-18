#A UI framework built with Wui sass project and React.

## Documentation
For documentation, please refer to this link:  ```http://super666.cn```



## How to install
You can install by npm or yarn:
```js
npm install react-windy-ui
or
yarn add react-windy-ui
```

## Create a sample project
* create a project 'my-app' by create-react-app tool
```js
yarn create react-app my-app
# or
npx create-react-app my-app
```
* install react-windy-ui
```js
npm install
npm install react-windy-ui
```

* modify the App.js
```js
import React from 'react';
import { Button } from 'react-windy-ui';
import 'react-windy-ui/dist/wui.css'; #import the default theme file
const App = () => {
  return <Button type="primary">Hello</Button>
};
export default App;
```
* run this project and there should be a button on the page
