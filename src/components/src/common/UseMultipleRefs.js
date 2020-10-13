import React, {useCallback} from 'react';
import {isFunction, isNil} from '../Utils';

export const setDirectRef = (directRef, assignedRef) => {
  if (isNil(directRef)) {
    return;
  }

  if (isFunction(directRef)) {
    directRef(assignedRef);
  } else {
    directRef.current = assignedRef;
  }
};

const useMultipleRefs = (forwardedRef, directRef) => {
  //refer to: https://github.com/facebook/react/issues/4533
  return useCallback((refElem) => {
    setDirectRef(forwardedRef, refElem);
    setDirectRef(directRef, refElem);
  },[]);
};

export default useMultipleRefs;