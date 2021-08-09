import React, {useContext, useEffect, useState} from 'react';
import {Menu} from 'react-windy-ui';
import scrollToElement from 'scroll-to-element';
import {QuickManuContext} from '../utils/DocUtils';
// import {useHistory} from 'react-router-dom';

export default function QuickManu() {
  // const history = useHistory();
  const ctx = useContext(QuickManuContext);
  const {quickManuStore} = ctx;
  const [items, setItems] = useState([]);
  const realItems = items && items.length > 0 ? items : quickManuStore.getState().list;

  useEffect(() => {
    const listener = ({list, id}) => {
      setItems(list);
    };
    quickManuStore.attach(listener);

    return () => quickManuStore.detach(listener);
  }, [ctx, setItems, quickManuStore]);

  return <>
    <Menu hasBox={false} extraClassName="doc nav-menu" onSelect={(id) => {
      const elem = document.getElementById(id);
      if (elem) {
        scrollToElement(elem, {offset: -100});
      }
    }}>
      {
        realItems.map(item => <Menu.Item key={item.id}
                                         id={item.id}>{item.text}</Menu.Item>)
      }
    </Menu>
  </>;
}