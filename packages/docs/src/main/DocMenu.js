import React, {useCallback, useState} from 'react';
import {Menu} from 'react-windy-ui';
import MenuConfig from "../common/MenuConfig";
import {isString} from "lodash/lang";
import intl from 'react-intl-universal';

export default function DocMenu(props) {
  const {hasBox = false, onSelectMenuItem} = props;
  const [overflow, setOverflow] = useState('hidden');
  // const {url} = useRouteMatch();

  const handleOverflow = useCallback((value, e) => {
    setOverflow(value);
    e.preventDefault();
  }, [setOverflow]);

  const menuCotent = Object.entries(MenuConfig).map(([key, value]) => {
    if (!value) {
      return null;
    }

    if (isString(value)) {
      return <Menu.Item id={key} key={key}>{intl.get(`doc.menu.${key}`)}</Menu.Item>
    }

    return <Menu.SubMenu header={intl.get(value.label)} id={value.id} key={value.id}>
      {
        Object.entries(value.items).map(([k, v]) => <Menu.Item key={k} id={k}>
          {intl.get(v)}
        </Menu.Item>)
      }
    </Menu.SubMenu>
  });

  return <Menu type="primary"
               hasBox={hasBox}
               hasRipple={false}
               defaultActiveItems={['start']}
               onSelect={onSelectMenuItem}
               defaultOpenedMenus={['basicIndex']}
               onTouchStart={(e) => {
                 handleOverflow('auto', e);
               }}
               onMouseEnter={(e) => {
                 handleOverflow('auto', e);
               }}
               onMouseLeave={(e) => {
                 handleOverflow('hidden', e);
               }}
               style={{
                 maxHeight: 'calc(100vh - 80px)',
                 overflow: overflow,
                 background: '#fff',
               }}>
    {menuCotent}
  </Menu>;
}