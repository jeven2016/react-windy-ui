import {useLayoutEffect, useState, useRef} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {isFunction, isNil} from '../Utils';

const defaultRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

/**
 * if onResize is passed into this hook, it means you want to handle the rect in your callback
 * instead of the returned rect object.
 * if no onResize is passed into this hook, it means you want the hook to return the rect object and
 * don't need to call the callback even though the onResize is passed.
 *
 * note: you cannot get the latest state in ResizeObserver' callback that stored by useState hook,
 *       a alternative is to access the state using Ref
 * @param ref  Ref or function
 * @param onResize
 * @param enabled whether to enable resize observer
 * @returns {{top: number, left: number, bottom: number, x: number, width: number, y: number, right: number, height: number}}
 */
export default function useResizeObserver(ref, onResize, enabled = true) {
  const [rect, setRect] = useState(defaultRect);
  const preRectRef = useRef(defaultRect);// a reference to previous rect data

  useLayoutEffect(() => {
    const node = isFunction(ref) ? ref() : ref.current;
    if (isNil(node) || !enabled) {
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

        if (Math.floor(preRect.width) !== Math.floor(currentRect.width) ||
            Math.floor(preRect.height) !==
            Math.floor(currentRect.height)) {
          preRectRef.current = currentRect;
          if (onResize) {
            onResize(currentRect);
          } else {
            setRect(currentRect);
          }
        }
      });
    });
    ro.observe(node);

    return () => {
      if (enabled) {
        window.cancelAnimationFrame(id);
        ro.disconnect();
      }
    };
  }, []);

  return rect;
}