import React from 'react';
import {isNil, isFunction} from '../Utils';

const setDirectRef = (directRef, assignedRef) => {
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
  return (refElem) => {
    setDirectRef(directRef, refElem);
    if (!isNil(forwardedRef)) {
      forwardedRef.current = refElem;
    }
  };
};

export default useMultipleRefs;