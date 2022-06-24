# 0.7.1

- Issues fixed

  - todo: Row: cannot make Col be stretch while flex-start is set by default
  - Navbar: position 'right' is not working anymore
  - Header: components have Header element should be limited with line-height property
  - box-shadow: need update
  - Card: Header is too high
  - Row & Col: gutter property doesn't work

- Enhancement
  - New Box component provided (Document needs update)

# 0.6.7 (In progress)

- Big change - release info:
  - Refactor with Typescript and generate a series of definition files (d.ts)
  - Refactor to support modular components
  - Enhancement for gracefully importing the existing sass module files
  - Documentation in english
  - Responsive features for all components

# 0.6.6

- Fix 0.6.5 issues: deploy a invalid package.json into dist directory

# 0.6.5

- New dark theme and corresponding component
- Change the initial position (left and top) of Popup

### 0.6.4

- correct release version

### 0.6.3

- Ripple: made a improvement for mobile browser
- Form: correct the color of error message
- Col: the content cannot align center

### 0.6.2

- new Components: List, Container, Typography, Stepper
- fix packages issue: all components cannot be imported from 'react-windy-ui'
- some changes to package structure

### 0.6.1

- AvatarGroup: fix a issue relates Popover
- New component: List
- Tooltip supports: selectable TextField(fixed), DatePicker, TimePicker, Dropdown(fixed), Select --- TODO

### 0.6.0

- react-hook-form: upgrade to v7
- Notification: adapt the body's width

### 0.5.1 - 0.5.8

fix bugs for new project structure

- Avatar: fix a issue of group that the margin-left doesn't take effect
- DatePicker: remove the store implementation
- Card: bug fix of 'rise' animation
- Icons: remove the width and height properties of svg
- Function validation: log the error via console.error() method instead of throwing an error
- Modal: update the top property for simple modal
- DatePicker: remove the animation of head and body
- react-spring: upgrade from v8 to v9
- Toggle: remove box-shadow property
- Grid Col: support flex
- IconInput: fix disabled issue
- TimePicker: finished

### 0.5.0

- Toggle: support form's defaultValue, other components need to double check as well
- Ripple: fix a ripple issue of setTimeout
- Affix: unable to fix bottom
- Affix: unable to automatically adjust the Affix's width

### 0.4.6

- Tree: fix the tree items unable to check
- Tree: async loading of tree items
- refactor useInternalState hook

### 0.4.5

- Toggle: support form's defaultValue, other components need to double check as well
- Ripple: fix a ripple issue of setTimeout
- Affix: unable to fix bottom
- Affix: unable to automatically adjust the Affix's width

### 0.4.4

- Col: update the align-self of Col itself to stretch
- Toggle: add type button to avoid submitting form automatically
- Toggle: integrate with form
- upgrade react-hook-form to the latest stable version

### 0.4.3

Fixed the following bugs

- Hot fix: Affix, object is not extensible
- Space: support block and blockItem property

### 0.4.2

Fixed the following bugs

- Divider: cannot inject style object
- Affix: apply style to affix node instead of the container node
- Space: support justify property
- Grid: the Col doesn't support justifyContent and alignItems since it cannot set as flexbox container
- Refactor the justifyContent and alignItems implementation with new function adjustItems
- Alert: revert adapter-width to set the width of container to 22.5rem
