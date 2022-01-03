import get from 'lodash/get';
import inRange from 'lodash/inRange';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import isInteger from 'lodash/isInteger';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import max from 'lodash/max';
import random from 'lodash/random';
import set from 'lodash/set';
import slice from 'lodash/slice';
import without from 'lodash/without';
import isEqual from 'lodash/isEqual';
import round from 'lodash/round';

import { PopupPosition } from './common/Constants';
import clsx from 'clsx';

export const DefaultColor = {
  ripple: {
    gray: '#9c9c9c'
  }
};

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
  max,
  get,
  set,
  isEqual,
  round
};

export const isNil = (value) => value == null;
export const nonNil = (value) => !isNil(value);

export const isArray = (value) => {
  // return Object.prototype.toString.call(value) === "[object Array]";
  return Array.isArray(value);
};

export const isBlank = (value) => {
  return isNil(value) || /^\s*$/.test(value);
};

export const startsWith = (first, next) => first.slice(0, next.length) === next;

export const getScrollTop = (win) => {
  return win.document.documentElement.scrollTop || win.pageYOffset || win.document.body.scrollTop;
};

export const getScrollLeft = (win) => {
  return win.document.documentElement.scrollLeft || win.pageXOffset || win.document.body.scrollLeft;
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

    default:
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
    scrollTop = getScrollTop(window);
    scrollLeft = getScrollLeft(window);
  }

  let posLeft = Math.floor(pos.left);
  let left = 0,
    top = 0;
  if (type === PopupPosition.bottom) {
    left = scrollLeft + (posLeft - (dest.offsetWidth - ctrl.offsetWidth) / 2) + 'px';
    top = pos.bottom + offset + scrollTop + 'px';
  }

  if (type === PopupPosition.top) {
    left = scrollLeft + (posLeft - (dest.offsetWidth - ctrl.offsetWidth) / 2) + 'px';
    top = pos.top - dest.offsetHeight - offset + scrollTop + 'px';
  }

  if (type === PopupPosition.left) {
    left = scrollLeft + posLeft - dest.offsetWidth - offset + 'px';
    top = pos.top - (dest.offsetHeight - ctrl.offsetHeight) / 2 + scrollTop + 'px';
  }

  if (type === PopupPosition.leftTop) {
    left = scrollLeft + posLeft - dest.offsetWidth - offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight + pos.height + 'px';
  }

  if (type === PopupPosition.leftBottom) {
    left = scrollLeft + posLeft - dest.offsetWidth - offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === PopupPosition.right) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top - (dest.offsetHeight - ctrl.offsetHeight) / 2 + scrollTop + 'px';
  }

  if (type === PopupPosition.rightTop) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop - dest.offsetHeight + pos.height + 'px';
  }

  if (type === PopupPosition.rightBottom) {
    left = scrollLeft + pos.right + offset + 'px';
    top = pos.top + scrollTop + 'px';
  }

  if (type === PopupPosition.topLeft) {
    left = scrollLeft + posLeft + 'px';
    top = pos.top - dest.offsetHeight - offset + scrollTop + 'px';
  }

  if (type === PopupPosition.topRight) {
    left = scrollLeft + pos.right - dest.offsetWidth + 'px';
    top = pos.top - dest.offsetHeight - offset + scrollTop + 'px';
  }

  if (type === PopupPosition.bottomLeft) {
    left = scrollLeft + posLeft + 'px';
    top = pos.bottom + offset + scrollTop + 'px';
  }

  if (type === PopupPosition.bottomRight) {
    left = scrollLeft + pos.right - dest.offsetWidth + 'px';
    top = pos.bottom + offset + scrollTop + 'px';
  }
  dest.style.left = left;
  dest.style.top = top;

  return {
    ctrlRect: pos
  };
};

export const validate = (condition, message, ignore) => {
  if (ignore) {
    return;
  }
  if (!condition) {
    // throw new Error(message);
    console && console.error(message);
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
    remove: remove
  };
};

export const execute = (handler, timeout = 100) => {
  const timer = setTimeout(() => {
    handler();
    clearTimeout(timer);
  }, timeout);
  return timer;
};

export const invoke = (callback, ...args) => {
  return nonNil(callback) && callback(...args);
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

/**
 * Get the width of the scroll bar
 */
let barWidth;

export default function getScrollbarWidth() {
  if (!isNil(barWidth)) {
    return barWidth;
  }

  const outerDiv = document.createElement('div');

  const innerDiv = document.createElement('div');
  innerDiv.style.width = '100%';
  innerDiv.style.height = '200px';

  const oStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200px',
    height: '100px',
    overflow: 'hidden',
    visibility: 'hidden'
  };

  for (let key in oStyle) {
    outerDiv.style[key] = oStyle[key];
  }
  outerDiv.appendChild(innerDiv);

  document.body.appendChild(outerDiv);

  const preInnerWidth = innerDiv.offsetWidth;

  //change to scroll
  outerDiv.style.overflow = 'scroll';

  let currentInnerWidth = innerDiv.offsetWidth;

  if (preInnerWidth === currentInnerWidth) {
    currentInnerWidth = outerDiv.clientWidth;
  }
  barWidth = preInnerWidth - currentInnerWidth;

  document.body.removeChild(outerDiv);
  return barWidth;
}

/**
 * set padding-left for body if the scroll bar exists
 * @param active  the corresponding component appears
 */
export const updateBodyStyle = (active) => {
  let body = document.body;
  if (!active) {
    body.removeAttribute('style');
    return;
  }

  //set padding-left for body if the scroll bar exists
  if (body.scrollHeight > window.innerHeight) {
    body.style.overflow = 'hidden';
    const barWidth = getScrollbarWidth();
    if (barWidth > 0) {
      body.style.paddingRight = `${getScrollbarWidth() + 'px'}`; //避免滚动条造成的页面抖动
    }
  }
};

export function getErrorClsName(errorType) {
  const clsName = `border-info ${errorType}`;
  return clsx({ [clsName]: errorType });
}

export const isColorValue = (val) => {
  return !isNil(val) && (startsWith(val, '#') || startsWith(val, 'rgb'));
};

const checkColor = (checkState, checkedColor) => {
  if (checkState && nonNil(checkedColor)) {
    if (isColorValue(checkedColor)) {
      return { isClass: false, style: { color: checkedColor } };
    } else {
      return { isClass: true, className: 'text color-' + checkedColor };
    }
  }
  return null;
};

export function createColorClsName({ checkState, checkedColor, uncheckedColor }) {
  let result = checkColor(checkState, checkedColor);
  if (isNil(result)) {
    result = checkColor(!checkState, uncheckedColor);
  }
  return result;
}

export const preventEvent = (evt) => {
  if (!evt) {
    return;
  }
  evt.preventDefault();
  evt.stopPropagation();
};
