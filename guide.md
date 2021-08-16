## Clone this project
```js
git clone projectURL

//switch to correct branch
react-windy-ui> git checkout x.x.x

//checkout submodule
react-windy-ui> git submodule init
react-windy-ui> git submodule update
  
//switch to correct branch for Wui 
react-windy-ui/packages/Wui> git checkout x.x.x

//install in root directory
react-windy-ui> yarn install

```


## Start Documentation
```
 yarn start
```

## Publish a new version to NPM

* create a new branch   

1. create branches for wui and root projects  
2. ensure the branches create have been push before changing version: git push origin x.x.x  
3. set the version by lerna
```javascript
lenar version x.x.x
```
4. change the packages.json of component project
```javascript
react-windy-ui/packages/component> package.json

change the main part to :
  "main": "dist/index.js",
```

5. build the component project  
```javascript
 yarn run build:cmp
```

* Npm login and then publish 
```javascript
 npm login
 
 yarn run publish
```
4. revert the packages.json of component project
```javascript
react-windy-ui/packages/component> package.json

change the main part to :
  "main": "src/index.js",
```

## Build a css theme file
```js
yarn run build:theme 

```

## For development
* start the docs project as above step mentioned   
Note: a background task is running to watch the changes of scss files and it will build and copy a css file into components/dist directory.
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
then any changes detected in scss files will rebuild and override the old wui.css file with the theme file(wui-dark.min.css).



## Others
```js
//remove dependency
yarn workspace react-windy-ui remove react-use-gesture
yarn workspace react-windy-ui add react-use-gesture

```