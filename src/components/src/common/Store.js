import React from 'react';
import {isNil, random} from '../Utils';

/**
 * A internal store implementation that make the child node be able to notify other child nodes
 * to check or update its state not through the parent node. And the parent node
 *
 * The advantage of using store:
 * 1. you don't have to updating the child components by changing the parent's state.
 *    this is a performance improvement.
 */
export const StoreContext = React.createContext(null);
export const Provider = StoreContext.Provider;

export const initStore = (initState = {}) => {
  console.log('init store....')
  let id = random(1000, 9000);
  let internalState = initState;
  const callbacks = [];

  /**
   * Only update the state and not to notify any listeners
   * @param nextState
   */
  const updateState = (nextState) => {
    internalState = {...internalState, ...nextState};
  };

  const notifyChanges = () => {
    callbacks.forEach(c => {
      c(internalState);
    });
  };

  const getState = () => {
    return internalState;
  };

  const setState = (nextState) => {
    updateState(nextState);
    notifyChanges();
  };

  const attach = (listener) => {
    if (isNil(listener)) {
      return;
    }
    callbacks.push(listener);
  };

  const detach = (listener) => {
    if (isNil(listener)) {
      return;
    }
    const index = callbacks.indexOf(listener);
    if (index > -1) {
      callbacks.splice(index, 1);
    }
  };

  return {
    getState,
    setState,
    updateState,
    attach,
    detach,
    callbacks,
    notifyChanges,
    id,
  };
};

/*
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return function(Component) {
    return function(props) {
      const {state, dispatch} = useContext(StoreContext);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const nextProps = {...props, ...stateToProps, ...dispatchToProps};
      return (
          <Component {...nextProps} />
      );
    };
  };
};*/
