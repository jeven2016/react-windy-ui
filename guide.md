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
 
 ensure all changes to be committed before changing version 
 
 lenar version newVersion
 
 yarn run build:cmp
 
 npm login
 
 yarn run publish
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


## Others
```js
//remove dependency
yarn workspace react-windy-ui remove react-use-gesture
yarn workspace react-windy-ui add react-use-gesture

```