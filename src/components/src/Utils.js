import React from 'react';
import {
  inRange,
  isBoolean,
  isInteger,
  isFunction,
  isObject,
  isString,
  random,
  slice,
  without,
} from 'lodash';

export {
  isObject,
  inRange,
  isInteger,
  isFunction,
  isString,
  isBoolean,
  random,
  slice,
  without,
};

export const isNil = (value) => value == null;

export const isArray = (value) => {
  // return Object.prototype.toString.call(value) === "[object Array]";
  return Array.isArray(value);
};

export const isBlank = (value) => {
  return isNil(value) || /^\s*$/.test(value);
};

export const startsWith = (first, next) => first.slice(0, next.length) === next;

/**
 * Set padding property for a child node instead of setting margin property
 * @param destComponent
 * @param ctrl
 * @param type
 * @param padding
 */
export const placePadding = (
    destComponent, ctrl, type, padding = '0px', margin = 0) => {
  place(destComponent, ctrl, type, margin);
};

//todo: transform : left , right not working
export const setTransformOrigin = (destComponent, type) => {
  const origin = getTransformOrigin(type);
  destComponent.style.transformOrigin = origin;
};

export const getPaddingAttribute = (type) => {
  let paddingAttr = null;
  switch (type) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      paddingAttr = 'paddingTop';
      break;
    case 'top':
    case 'topLeft':
    case 'topRight':
      paddingAttr = 'paddingBottom';
      break;
    case 'left':
    case 'leftTop':
    case 'leftBottom':
      paddingAttr = 'paddingRight';
      break;
    case 'right':
    case 'rightTop':
    case 'rightBottom':
      paddingAttr = 'paddingLeft';
      break;
  }
  return paddingAttr;
};

export const getTransformOrigin = (type) => {
  let origin = 'center';
  switch (type) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      origin = 'top';
      break;
    case 'top':
    case 'topLeft':
    case 'topRight':
      origin = 'bottom';
      break;
    case 'left':
      origin = 'right center';
      break;
    case 'leftTop':
      origin = 'right bottom';
      break;
    case 'leftBottom':
      origin = 'right top';
      break;
    case 'right':
      origin = 'left center';
      break;
    case 'rightTop':
      origin = 'left bottom';
      break;
    case 'rightBottom':
      origin = 'left top';
      break;
  }
  return origin;
};

/**
 * place a component to somewhere
 */
export const place = (dest, ctrl, type, offset = 0) => {
  let scrollTop = 0;
  let scrollLeft = 0;
  let pos = ctrl.getBoundingClientRect();

  const destPosition = dest.style.position;
  if (isNil(destPosition) || destPosition !== 'fixed') {
    scrollTop = document.documentElement.scrollTop || window.pageYOffset
        || document.body.scrollTop;
    scrollLeft = document.documentElement.scrollLeft || window.pageXOffset
        || document.body.scrollLeft;
  }

  let left = 0, top = 0;
  if (type === 'bottom') {
    left = scrollLeft + (pos.left
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    top = (pos.bottom + offset) + scrollTop + 'px';
  }

  if (type === 'top') {
    left = scrollLeft + (pos.left
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    top = (pos.top - dest.offsetHeight
        - offset)
        + scrollTop + 'px';
  }

  if (type === 'left') {
    left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'leftTop') {
    left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === 'leftBottom') {
    left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === 'right') {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'rightTop') {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === 'rightBottom') {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === 'topLeft') {
    left = scrollLeft + pos.left + 'px';
    top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === 'topRight') {
    left = scrollLeft + pos.right
        - dest.offsetWidth + 'px';
    top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomLeft') {
    left = scrollLeft + pos.left + 'px';
    top = pos.bottom + offset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomRight') {
    left = scrollLeft + pos.right
        - dest.offsetWidth + 'px';
    top = pos.bottom + offset
        + scrollTop
        + 'px';
  }
  dest.style.left = left;
  dest.style.top = top;

  return {
    ctrlRect: pos,
  };
};

export const placeCenter = (dest, ctrl) => {
  dest.style.left = getLeftIfCentered(dest, ctrl);
  dest.style.top = getTopIfCentered(dest, ctrl);
};

export const placeVerticalCenter = (dest, ctrl) => {
  const y = getTopIfCentered(dest, ctrl);
  dest.style.transform = `translateY(${y})`;
};

export const getLeftIfCentered = (dest, ctrl) => {
  var ctrlPos = ctrl.getBoundingClientRect();
  var destPos = dest.getBoundingClientRect();
  let destAvaliableWidth = Math.max(destPos.width,
      dest.offsetWidth);
  let x = Math.floor((ctrlPos.width - destAvaliableWidth) / 2) + 'px';
  return x;
};

export const getTopIfCentered = (dest, ctrl) => {
  var ctrlPos = ctrl.getBoundingClientRect();
  var destPos = dest.getBoundingClientRect();

  let destAvaliableHeight = Math.max(destPos.height,
      dest.offsetHeight);

  let y = Math.floor(
      (ctrlPos.height - destAvaliableHeight) / 2) + 'px';
  return y;
};

export const validate = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

export const getContainer = (id) => {
  let root = document.querySelector(`#${id}`);
  return root;
};

/**
 * @Derepaced
 * @param id
 * @returns {{container: Element, id: string, remove: remove}}
 */
export const createContainer = (id) => {
  if (isNil(id)) {
    id = `wui-container-${random(100, 10000)}`;
  }
  let root = document.querySelector(`#${id}`);

  if (!root) {
    root = document.createElement('div');
    root.id = id;
    document.body.insertBefore(root, document.body.lastElementChild);
  }

  const remove = () => {
    root.remove();
  };

  return {
    container: root,
    id: id,
    remove: remove,
  };
};

export const execute = (handler, timeout) => {
  const timer = setTimeout(() => {
    handler();
    clearTimeout(timer);
  }, timeout);
  return timer;
};

export const invoke = (callback, ...args) => {
  return !isNil(callback) && (callback)(...args);
};

export const getRect = (domNode) => {
  return domNode ? domNode.getBoundingClientRect() : null;
};

export const convertToArray = (elems) => {
  if (isNil(elems)) {
    return [];
  }
  let itemArray = elems;
  if (isFunction(itemArray)) {
    itemArray = invoke(itemArray);
  }

  if (Array.isArray(itemArray)) {
    return itemArray;
  } else {
    return [itemArray];
  }
};

/**
 * Check whether a specific parameter is set that means the user
 * has explicitly set the parameter.
 * @param props
 * @param name
 * @returns {boolean}
 */
export const isCustomized = (props, name) => {
  return props.hasOwnProperty(name);
};

/**
 * Retrieve a defaultValue or value array from props
 * @param props
 * @param name
 * @param defaultValue
 * @param value
 * @returns {[]|[*]}
 */
export const retrieveArray = (props, name, defaultValue, value) => {
  const customized = isCustomized(props, name);
  return customized ? convertToArray(value) : convertToArray(defaultValue);
};

export const includes = (array, value) => {
  return array && array.includes(value);
};

/**
 * set dom node's style attribute
 * @param condition
 * @param value
 * @param ref
 */
export const setDisplay = (condition, value, ref) => {
  if (condition) {
    const div = ref.current;
    if (div) {
      div.style.display = value;
    }
  }
};