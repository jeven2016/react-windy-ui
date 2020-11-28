import React, {useContext, useEffect, useState} from 'react';
import {Menu} from 'react-windy-ui';
import scrollToElement from 'scroll-to-element';
import {QuickManuContext} from '../utils/DocUtils';
// import {useHistory} from 'react-router-dom';

export default function QuickManu() {
  // const history = useHistory();
  const [items, setItems] = useState([]);

  const ctx = useContext(QuickManuContext);
  const {quickManuStore} = ctx;

  useEffect(() => {
    const listener = ({list}) => {
      setItems(list);
    };
    quickManuStore.attach(listener);

    return () => quickManuStore.detach(listener);
  }, [ctx, setItems, quickManuStore]);

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