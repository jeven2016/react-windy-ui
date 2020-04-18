import React, {useState} from 'react';
import {isNil} from '../Utils';

/**
 * Use internal active state
 * 1. the defaultActive is set, the component
 *     will initially display defaultActive state but can internally change to other state
 * 2. the active is set,
 *     the active state cannot be changed automatically usually because it is controlled by outside.
 * 3. if both the defaultActive and active are not set, the backupActive will be the the candidate.
 */
const useInternalActive = (
    isExternalControl, defaultActive, active, backupActive) => {
  let initActive = isExternalControl ? active : defaultActive;
  if (isNil(initActive)) {
    initActive = backupActive;
  }
  const [internalActive, setInternalActive] = useState(initActive);
  return {
    currentActive: isExternalControl ? active : internalActive,
    setActive: setInternalActive,
  };
};

export default useInternalActive;