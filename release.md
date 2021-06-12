### 0.4.6
* Tree: fix the tree items unable to check
* Tree: async loading of tree items
* refactor useInternalState hook

### 0.4.5
* Toggle: support form's defaultValue, other components need to double check as well
* Ripple: fix a ripple issue of setTimeout
* Affix: unable to fix bottom
* Affix: unable to automatically adjust the Affix's width

### 0.4.4
* Col:  update the align-self of Col itself to stretch
* Toggle: add type button to avoid submitting form automatically
* Toggle: integrate with form
* upgrade react-hook-form to the latest stable version

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