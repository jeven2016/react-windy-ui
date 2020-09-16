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
    elem = window) => {
  //a mutable callback variable pointing to the latest interval callback
  //instead of recreating one all the time
  const handlerRef = useRef(null);

  /*
   * You can specify a dependency array as a second argument,
   * and React will only re-run the effect if something in that array changes
   */
  useEffect(() => {
    if (!listenable) {
      return;
    }
    handlerRef.current = handler;
  }, [handler, listenable]);

  useEffect(() => {
    if (!listenable) {
      return;
    }

    let elemNode = elem;
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
    // console.log('add a event listener: ' + name);
    const listener = event => handlerRef.current(event);
    elemNode.addEventListener(name, listener);
    return () => {
      // console.log('remove a event listener: ' + name);
      elemNode.removeEventListener(name, listener);
    };
  }, [name, elem, listenable]);
};

export default useEvent;