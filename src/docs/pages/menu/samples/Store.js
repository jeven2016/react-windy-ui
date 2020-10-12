import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Button} from 'react-windy-ui';
import {
  initStore,
  Provider,
  StoreContext,
} from '../../../../components/src/common/Store';

export default function Store() {
  const store = useMemo(() => initStore({
    msg: 'NULL',
  }), []);
  return <Provider value={{...store}}>
    <Child id="1"/>
    <Child id="2"/>
  </Provider>;
}

export  function Store2() {
  const store = useMemo(() => initStore({
    msg: 'NULL',
  }), []);
  return <Provider value={{...store}}>
    <Child id="3"/>
    <Child id="4"/>
  </Provider>;
}

function Child({id}) {
  const [active, setActive] = useState();
  const {setState, attach, detach} = useContext(StoreContext);
  console.log(`${id}-> updated.`);

  useEffect(() => {
    const listener = (state) => {
      console.log(`${id} is notified`)
      const isActive = state.id === id;
      if (isActive) {
        setActive(true);
      }
    };
    attach(listener);
    return () => detach(listener);
  }, []);

  return <div>{active ? id + ' Activated' : null} -- <Button
      onClick={() => {setState({id});}}>button - {id}</Button></div>;

}