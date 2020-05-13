import React, {useContext} from 'react';
import {isNil} from '../Utils';

/**
 * A internal store implementation that make the child node be able to notify other child nodes
 * to check or update its state not through the parent node. And the parent node
 */
export const StoreContext = React.createContext(null);
export const Provider = StoreContext.Provider;

export const initStore = (initState = {}) => {
  let internalState = initState;
  const callbacks = [];

  const setState = (nextState) => {
    internalState = {...internalState, ...nextState};
    callbacks.forEach(c => {
      c(internalState)});
  };

  const getState = () => {
    return internalState;
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
    attach,
    detach,
    callbacks,
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
