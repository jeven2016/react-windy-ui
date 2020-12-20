import {useEffect, useRef} from 'react';
import {invoke, isFunction} from '../Utils';

//todo: performance test
//Typically the handler combined with useCallback would be better

//refer to https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//using window instead of document to stop propagation
const useEvent = (
    name,
    handler,
    listenable = true,
    elem = window,
    //true - 事件句柄在捕获阶段执行
    // false- false- 默认。事件句柄在冒泡阶段执行
    useCapture = false) => {
  //a mutable callback variable pointing to the latest interval callback
  //instead of recreating one all the time
  const handlerRef = useRef(null);

  /*
   * You can specify a dependency array as a second argument,
   * and React will only re-run the effect if something in that array changes
   */
  useEffect(() => {
    if (!listenable) {
      handlerRef.current = null;
      return;
    }
    handlerRef.current = handler;
  }, [handler, listenable]);

  useEffect(() => {
    let elemNode, listener;
    if (!listenable) {
      if (name && listener && elemNode) {
        elemNode.removeEventListener(name, listener);
        elemNode = null;
      }
      return;
    }

    elemNode = elem;
    if (isFunction(elem)) {
      elemNode = invoke(elem);
    } else if (elem.current) {
      elemNode = elem.current;
    }

    //only support IE >=11 and other modern browsers
    const isSupportedBrowser = elemNode && elemNode.addEventListener;
    if (!isSupportedBrowser) {
      return;
    }
    listener = event => handlerRef.current(event);
    elemNode.addEventListener(name, listener, useCapture);
    return () => {
      elemNode.removeEventListener(name, listener, useCapture);
      elemNode = null;
    };
  }, [name, elem, listenable, useCapture]);
};

export default useEvent;