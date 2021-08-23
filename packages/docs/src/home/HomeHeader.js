import React, {useCallback, useContext, useState} from 'react';
import {Affix, Dropdown, IconList, Navbar, Popover, StoreContext} from 'react-windy-ui';
import {Link} from 'react-router-dom';
import intl from 'react-intl-universal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faLaptopHouse, faLightbulb, faSignLanguage, faThList} from "@fortawesome/free-solid-svg-icons";
import Contributors from "./Contributors";
import {DocThemeContext} from "../common/DocConstants";

export default function HomeHeader({transparent = false}) {
  const [barExtraCls, setBarExtraCls] = useState(null);
  const {supportLocals, locale, changeLocale} = useContext(StoreContext);
  const {theme, setTheme} = useContext(DocThemeContext);

  const setLocale = useCallback((id) => {
    id !== locale && changeLocale(id);
  }, [changeLocale, locale]);

  const changeTheme = useCallback((themeId) => setTheme(themeId), [setTheme]);

  return <>
    <Affix block top={0} onChange={affixed => {
      setBarExtraCls(affixed ? 'affix-fixed' : '');
    }}>
      <div className={`doc home-header ${theme} ${transparent ? 'transparent' : ''}`}>
        <Navbar extraClassName={barExtraCls} type="primary" id="header"
                hasBox={false} hasBorder={false}>

          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <Link to="/">{intl.get('global.home.title')}</Link>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBar>
              <FontAwesomeIcon icon={faBook} style={{marginRight: '.5rem'}}/>
              <Link to={`/docs/${theme}`}>{intl.get(
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
              <Popover body={<Contributors/>} activeBy="click"
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
            <Navbar.Item>
              <FontAwesomeIcon icon={faThList}
                               style={{marginRight: '.5rem'}}/>
              <Dropdown activeBy="hover"
                        title={<span>{intl.get(
                          'global.home.link.theme')}</span>}
                        onSelect={changeTheme}>
                <Dropdown.Menu>
                  <Dropdown.Item id="normal">{intl.get("doc.themes.default")}</Dropdown.Item>
                  <Dropdown.Item id="dark">{intl.get("doc.themes.dark")}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>
    </Affix>
  </>;
}