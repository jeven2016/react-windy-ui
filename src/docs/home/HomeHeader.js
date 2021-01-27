import React, {useCallback, useContext, useState} from 'react';
import {Affix, Dropdown, IconList, Navbar, Popover} from 'react-windy-ui';
import {Link} from 'react-router-dom';
import {StoreContext} from '../../components/src';
import intl from 'react-intl-universal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBook,
  faLaptopHouse,
  faLightbulb,
  faSignLanguage
} from "@fortawesome/free-solid-svg-icons";

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
        <Navbar extraClassName={barExtraCls} type="primary" id="header"
                hasBox={false} hasBorder={false}>

          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            {/*   <HomeIcon style={{
              fontSize: '1rem',
              marginRight: '1rem',
            }}/>*/}
            <Link to="/">{intl.get('global.home.title')}</Link>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBar>
              <FontAwesomeIcon icon={faBook} style={{marginRight: '.5rem'}}/>
              <Link to="/docs">{intl.get(
                  'global.home.link.documentation')}</Link>
            </Navbar.Item>
            <Navbar.Item hasBar>
              <FontAwesomeIcon icon={faLaptopHouse}
                               style={{marginRight: '.5rem'}}/>
              {intl.get('global.home.link.template')}
            </Navbar.Item>
            <Navbar.Item>
              <FontAwesomeIcon icon={faLightbulb}
                               style={{marginRight: '.5rem'}}/>
              <Popover body="current Contributor" activeBy="hover"
                       position="bottomRight">
                <span style={{color: '#fff'}}>{intl.get(
                    'global.home.link.contribute')}</span>
              </Popover>
            </Navbar.Item>
            <Navbar.Item>
              <FontAwesomeIcon icon={faSignLanguage}
                               style={{marginRight: '.5rem'}}/>
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