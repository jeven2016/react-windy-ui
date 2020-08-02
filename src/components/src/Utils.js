import React from 'react';
import {
  inRange,
  isBoolean,
  isFunction,
  isInteger,
  isObject,
  isString,
  random,
  slice,
  without,
} from 'lodash';
import {PopupPosition} from './common/Constants';

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

/**
 * Deprecated
 * @param type
 * @returns {null}
 */
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

  let posLeft = Math.floor(pos.left);
  let left = 0, top = 0;
  if (type === PopupPosition.bottom) {
    left = scrollLeft + (posLeft
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    top = (pos.bottom + offset) + scrollTop + 'px';
  }

  if (type === PopupPosition.top) {
    left = scrollLeft + (posLeft
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    top = (pos.top - dest.offsetHeight
        - offset)
        + scrollTop + 'px';
  }

  if (type === PopupPosition.left) {
    left = scrollLeft + posLeft - dest.offsetWidth
        - offset + 'px';
    top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === PopupPosition.leftTop) {
    left = scrollLeft + posLeft - dest.offsetWidth
        - offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === PopupPosition.leftBottom) {
    left = scrollLeft + posLeft - dest.offsetWidth
        - offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === PopupPosition.right) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === PopupPosition.rightTop) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === PopupPosition.rightBottom) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === PopupPosition.topLeft) {
    left = scrollLeft + posLeft + 'px';
    top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === PopupPosition.topRight) {
    left = scrollLeft + pos.right
        - dest.offsetWidth + 'px';
    top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === PopupPosition.bottomLeft) {
    left = scrollLeft + posLeft + 'px';
    top = pos.bottom + offset
        + scrollTop
        + 'px';
  }

  if (type === PopupPosition.bottomRight) {
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

export const getLeftIfCentered = (dest, ctrl) => {
  var ctrlPos = ctrl.getBoundingClientRect();
  var destPos = dest.getBoundingClientRect();
  let destAvaliableWidth = Math.max(destPos.width,
      dest.offsetWidth);
  return Math.floor((ctrlPos.width - destAvaliableWidth) / 2) + 'px';
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
    id = `windy-${random(100, 10000)}`;
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

/**
 * Check whether the comparedValue includes value
 * @param value
 * @param comparedValue
 * @returns {boolean}
 */
export const containsIgnoreCase = (value, comparedValue) => {
  if (isNil(value) || isNil(comparedValue)) {
    return false;
  }
  return comparedValue.toLowerCase().includes(value.toLowerCase());
};

export const contains = (value, comparedValue) => {
  if (isNil(value) || isNil(comparedValue)) {
    return false;
  }
  return comparedValue.includes(value);
};

export const isNumber = (value) => {
  return !isNil(value) && /^\d+$/.test(value);
};