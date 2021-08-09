## Clone this project
```js
git clone projectURL

switch to correct branch

//checkout submodule
git submodule init
git submodule update
  
switch to correct branch
    
yarn install

```


## Start Documentation
```
 yarn start
```

## Publish a new version to NPM
```
 create branch in wui and root directory 
 
 # ensure the branches create have been push before changing version 
 
 lenar version newVersion
 
 # change "main": "dist/index.js" in component/package.json
 
 yarn run build:cmp
 
 npm login
 
 yarn run publish
 
 finally, revert component/package.json
```

## Build a css theme file
```js
yarn run build:theme 

```

## For development
* start the docs project as above step mentioned
* start the watch task of Wui to build and copy a css file into components/dist directory while any changes made in scss file
```js
yarn run watch:wui
```

## Develop a theme
* modify the packages.json in root directory  

Change the following line:
```javascript
"build:wui": "lerna --scope wui run buildRwui && cp packages/Wui/dist/wui-dark.min.css packages/components/wui.css",
```
ensure it is replaced by this line:
```javascript
"build:wui": "lerna --scope wui run buildRwuiThemes && cp packages/Wui/dist/wui-dark.min.css packages/components/wui.css",
```

* update the watch task  
Ensure the theme paramter is specified with your new theme name
```javascript
  "watch:wui": "lerna --scope wui run watch-copy-default  -- --theme=dark --copyTo=/home/jujucom/Desktop/workspace/projects/react-windy-ui/packages/components/dist/",
```


## Others
```js
//remove dependency
yarn workspace react-windy-ui remove react-use-gesture
yarn workspace react-windy-ui add react-use-gesture

```