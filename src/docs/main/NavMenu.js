import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Affix, Menu, StoreContext} from 'react-windy-ui';
import scrollToElement from 'scroll-to-element';
// import {useHistory} from 'react-router-dom';

export default function NavMenu() {
  // const history = useHistory();
  const [items, setItems] = useState([]);

  const ctx = useContext(StoreContext);
  const {store} = ctx;

  const findlinks = useCallback(() => {
    setTimeout(() => {
      const h3List = document.querySelectorAll('h3');
      let pureList = [];
      if (h3List && h3List.length !== 0) {
        //StaticNodeList doesn't support map function
        pureList = [...h3List].map(
            elem => ({id: elem.id, text: elem.innerText})).
            filter(elem => elem.id !== null);

      }
      setItems(pureList);
    }, 1000);
  }, [setItems]);

  useEffect(() => {
    const listener = (value) => {
      findlinks();
    };
    store.attach(listener);

    return () => store.detach(listener);

    //listen on the history changes
    /*history.listen((v) => {
      }
    });*/
  }, [ctx, findlinks, setItems, store]);

  return <>
    <Menu hasBox={false} extraClassName="doc nav-menu" onSelect={(ids) => {
      const elem = document.getElementById(`${ids[0]}`);
      if (elem) {
        scrollToElement(elem, {offset: -100});
      }
    }}>
      {
        items.map(item => <Menu.Item key={item.id}
                                     id={item.id}>{item.text}</Menu.Item>)
      }
    </Menu>
  </>;
}