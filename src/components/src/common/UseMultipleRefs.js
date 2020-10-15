import React, {useCallback} from 'react';
import {isFunction, isNil} from '../Utils';

export const setDirectRef = (ref, elem) => {
  if (isNil(ref)) {
    return;
  }

  if (isFunction(ref)) {
    ref(elem);
  } else {
    ref.current = elem;
  }
};

const useMultipleRefs = (...refs) => {
  //refer to: https://github.com/facebook/react/issues/4533
  return useCallback((refElem) => {
    refs.forEach(ref => setDirectRef(ref, refElem))
  }, []);
};

export default useMultipleRefs;