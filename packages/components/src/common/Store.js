import React, { useContext } from 'react';
import { isNil, random } from '../Utils';

/**
 * A internal store implementation that makes the child node be able to notify other child nodes
 * to check or update its state not through the parent node.
 *
 * The advantage of using store:
 * 1. you don't have to updating the child components by changing the parent's state.
 *    this is a performance improvement.
 * 2. if the data is externally controlled by customer/ user, for example, the menu could accept
 *    activeItems from caller and the store will be updated while the user clicking the item.
 *    A problem would happen when the callback is notified by onSelect() function that the internal state is changed, and the activeItems
 *    is updated then. This cause the new activeItems is different with the data stored in store. So
 *    we need to sync the store and the activeItems by connect() function.
 *
 * Note: Current the store just applies for the data won't exposed for outside caller.
 */
export const StoreContext = React.createContext(null);
export const Provider = StoreContext.Provider;
export const Consumer = StoreContext.Consumer;

export const initStore = (initState = {}) => {
  let id = random(1000, 9000);
  let internalState = initState;
  const callbacks = [];

  /**
   * Only update the state and not to notify any listeners
   * @param nextState
   */
  const updateState = (nextState) => {
    internalState = { ...internalState, ...nextState };
  };

  const notifyChanges = () => {
    callbacks.forEach((c) => {
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
    id
  };
};

/**
 * Connect the store data with props
 * @param mapStateToProps
 */
export const connect = (mapStateToProps) => {
  return function (Comp) {
    return function (props) {
      const { store } = useContext(StoreContext);
      const stateToProps = mapStateToProps(store.getState());
      // const dispatchToProps = mapDispatchToProps(dispatch);
      const newProps = { ...props, ...stateToProps };
      return <Comp {...newProps} />;
    };
  };
};
