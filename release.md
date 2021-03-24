
### 0.4.4
* Col:  update the aligin-self of Col itself to stretch


### 0.4.3
Fixed the following bugs 
* Hot fix: Affix, object is not extensible  
* Space: support block and blockItem property

### 0.4.2
Fixed the following bugs 
* Divider: cannot inject style object
* Affix: apply style to affix node instead of the container node
* Space: support justify property
* Grid: the Col doesn't support justifyContent and alignItems since it cannot set as flexbox container
* Refactor the justifyContent and alignItems implementation with new function adjustItems
* Alert: revert adapter-width to set the width of container to 22.5rem