import React, {useCallback, useContext, useState} from 'react';
import {Affix, Dropdown, IconList, Navbar} from 'react-windy-ui';
import {Link} from 'react-router-dom';
import {StoreContext} from '../../components/src';
import intl from 'react-intl-universal';

export default function HomeHeader({transparent = false}) {
  const [barExtraCls, setBarExtraCls] = useState(null);
  const {supportLocals, locale, changeLocale} = useContext(StoreContext);

  const setLocale = useCallback((id) => {
    id !== locale && changeLocale(id);
  }, [changeLocale, locale]);

  return <>
    <Affix block top={0} onChange={affixed => {
      setBarExtraCls(affixed ? 'affix-fixed' : '');
    }}>
      <div className={`doc home-header ${transparent ? 'transparent' : ''}`}>
        <Navbar extraClassName={barExtraCls} type="primary"
                hasBox={false} hasBorder={false}>

          <Navbar.Title>
            <Navbar.Switch simplified>
              <IconList/>
            </Navbar.Switch>
            {/*   <HomeIcon style={{
              fontSize: '1rem',
              marginRight: '1rem',
            }}/>*/}
            <Link to="/">{intl.get('global.home.title')}</Link>
          </Navbar.Title>
          <Navbar.List align='right'>
            <Navbar.Item hasBar>
              <Link to="/docs">{intl.get(
                  'global.home.link.documentation')}</Link>
            </Navbar.Item>
            <Navbar.Item hasBar>
              {intl.get('global.home.link.template')}
            </Navbar.Item>
            <Navbar.Item hasBar>
              {intl.get('global.home.link.contribute')}
            </Navbar.Item>
            <Navbar.Item>
              <Dropdown activeBy="hover"
                        title={<span>{intl.get(
                            'global.home.link.language')}</span>}
                        onSelect={setLocale}>
                <Dropdown.Menu>
                  {
                    supportLocals.map(
                        sl => <Dropdown.Item id={sl} key={sl}
                                             extraClassName={sl === locale
                                                 ? 'doc selected-item'
                                                 : null}>
                          {intl.get(`locale.${sl}`)}
                        </Dropdown.Item>)
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>
    </Affix>
  </>;
}