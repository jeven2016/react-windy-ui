import {useEffect, useRef} from 'react';
import {isFunction} from '../Utils';

//Tipcally the handler combined with useCallback would be better

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

    if (isFunction(elem)) {
      elem = elem();
    } else if (elem.current) {
      elem = elem.current;
    }

    //only support IE >=11 and other modern browsers
    const isSupportedBrowser = elem && elem.addEventListener;
    if (!isSupportedBrowser) {
      return;
    }
    // console.log('add a event listener: ' + name);
    const listener = event => handlerRef.current(event);
    elem.addEventListener(name, listener);
    return () => {
      // console.log('remove a event listener: ' + name);
      elem.removeEventListener(name, listener);
    };
  }, [name, elem, listenable]);
};

export default useEvent;