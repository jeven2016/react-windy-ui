import React, {useCallback, useState} from 'react';
import {isNil} from '../Utils';

/**
 * Use internal state state
 * 1. the defaultState is set, the component
 *     will initially display defaultState state but can internally change to other state
 * 2. the state is set,
 *     the state state cannot be changed automatically usually because it is controlled by outside.
 * 3. if both the defaultState and state are not set, the backupState will be the the candidate.
 */
const useInternalState = ({
                            props,
                            stateName,
                            checkCustomized,
                            defaultState,
                            state,
                            backupState,
                          }) => {
  const customized = checkCustomized
    ? checkCustomized()
    : props.hasOwnProperty(stateName);

  let initState = customized ? state : defaultState;
  if (isNil(initState)) {
    initState = backupState;
  }

  const [internalState, setInternalState] = useOptionalState(customized, initState);

  const set = useCallback((value) => !customized && setInternalState(value), [customized, setInternalState]);

  return [
    internalState,
    set,
    customized,
  ];
}

/**
 * For handling the state in this case : if customized then return initState else return a internal state
 * @param customized
 * @param initState
 * @returns [realState, setter]
 */
export const useOptionalState = (customized, initState) => {
  const [internalState, setInternalState] = useState(initState);

  return [customized ? initState : internalState, setInternalState];
}

export default useInternalState;