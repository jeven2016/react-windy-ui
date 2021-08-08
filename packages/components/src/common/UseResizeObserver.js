import {useRef, useState, useEffect} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {isFunction, isNil, nonNil} from '../Utils';

export const defaultRect = {
  x: 0,  //padding-left
  y: 0, //padding-top
  width: 0,
  height: 0,
  top: 0, //padding-top
  right: 0,
  bottom: 0,
  left: 0, //padding-left
};

export const defaultComparator = (preRect, currentRect) => {
  return Math.floor(preRect.width) !== Math.floor(currentRect.width) ||
    Math.floor(preRect.height) !== Math.floor(currentRect.height);
};

/**
 * if onResize is passed into this hook, it means you want to handle the rect in your callback
 * instead of returning a rect object.
 * if no onResize is passed into this hook, it means you want the hook to return the rect object and
 * don't need to call the callback even though the onResize is passed in.
 *
 * note: you cannot get the latest state in ResizeObserver' callback that stored by useState hook,
 *       a alternative is to access the state using Ref
 *
 *       2. that seems not working for <span/>, need more test
 * @param ref  Ref or function
 * @param onResize
 * @param enabled whether to enable resize observer
 * @param comparator if no comparator provided, it always to update the latest changes
 * @returns {{top: number, left: number, bottom: number, x: number, width: number, y: number, right: number, height: number}}
 */
export default function useResizeObserver(
  ref, onResize, enabled = true, comparator = defaultComparator) {
  const [rect, setRect] = useState(defaultRect);
  const preRectRef = useRef(defaultRect);// a reference to previous rect data

  useEffect(() => {
    if (!enabled) {
      return;
    }
    let node = ref;
    if (isFunction(ref)) {
      node = ref();
    } else if (nonNil(ref.current)) {
      node = ref.current;
    }
    if (isNil(node)) {
      return;
    }

    let id = null;
    const ro = new ResizeObserver(([entry]) => {
      //similar to setTimeout
      id = window.requestAnimationFrame(() => {
        //note: you cannot get the latest state stored with useState hook at this place,
        //a alternative is to get the state by Ref
        const currentRect = entry.contentRect;
        const preRect = preRectRef.current;

        if (comparator(preRect, currentRect)) {
          preRectRef.current = currentRect;
          if (onResize) {
            onResize(currentRect);
          } else {
            setRect(currentRect);
          }
        }
      });
    });
    try {
      nonNil(node) && ro.observe(node);
    } catch (e) {
      console && console.log(node);
    }


    return () => {
      if (enabled) {
        window.cancelAnimationFrame(id);
        ro.disconnect();
      }
    };
  }, [comparator, enabled, onResize, ref]);

  //todo: the returned rect not working
  return rect;
}