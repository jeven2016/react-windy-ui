import React, {useContext, useReducer} from 'react';
import {Button} from 'react-windy-ui';

const AppCtx = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {data: action.payload};

    default:
      return state;
  }
};

export default function TestReducer() {
  const [state, dispatch] = useReducer(reducer, {data: 'NULL'});
  console.log("TestReducer changed")
  return <AppCtx.Provider value={{state, dispatch}}>
    {/*<div style={{color: 'red'}}>{state.data}</div>*/}
    <Child/>
  </AppCtx.Provider>;
}

function Child() {
  console.log("Child changed")
  const ctx = useContext(AppCtx);
  return <div>{ctx.state.data} -- <Button onClick={() => ctx.dispatch(
      {type: 'add', payload: 'hello'})}>button</Button></div>;

}