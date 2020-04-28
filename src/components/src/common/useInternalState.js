import React, {useState} from 'react';
import {isNil} from '../Utils';

/**
 * Use internal state state
 * 1. the defaultState is set, the component
 *     will initially display defaultState state but can internally change to other state
 * 2. the state is set,
 *     the state state cannot be changed automatically usually because it is controlled by outside.
 * 3. if both the defaultState and state are not set, the backupState will be the the candidate.
 */
const useInternalState = (
    isExternalControl, defaultState, state, backupState) => {
  let initState = isExternalControl ? state : defaultState;
  if (isNil(initState)) {
    initState = backupState;
  }
  const [internalState, setInternalState] = useState(initState);
  return {
    state: isExternalControl ? state : internalState,
    setState: setInternalState,
  };
};

export default useInternalState;