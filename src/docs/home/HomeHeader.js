import React, {useState} from 'react';
import {Affix, IconList, NavBar} from 'react-windy-ui';
import HomeIcon from './HomeIcon';
import {Link} from 'react-router-dom';

export default function HomeHeader({transparent = false}) {
  const [barExtraCls, setBarExtraCls] = useState(null);

  return <>
    <Affix block top={0} onChange={affixed => {
      setBarExtraCls(affixed ? 'affix-fixed' : null);
    }}>
      <div className={`doc home-header ${transparent ? 'transparent' : null}`}>
        <NavBar extraClassName={barExtraCls} type="primary">

          <NavBar.Title>
            <NavBar.Switch>
              <IconList/>
            </NavBar.Switch>
            <HomeIcon style={{
              fontSize: '1rem',
              marginRight: '1rem',
            }}/>
            <Link to="/">Windy UI</Link>
          </NavBar.Title>
          <NavBar.List align='right'>
            <NavBar.Item hasBar>
              <Link to="/docs">Documentation</Link>
            </NavBar.Item>
            <NavBar.Item hasBar>
              Templates
            </NavBar.Item>
            <NavBar.Item hasBar>
              Contribute
            </NavBar.Item>
            <NavBar.Item hasBar>
              {/*<Dropdown selectable disabled>*/}
              {/*  <Dropdown.Title>disabled</Dropdown.Title>*/}
              {/*  <Menu>*/}
              {/*    <Menu.List>*/}
              {/*      <Menu.Item id={1} value={1} text="English"/>*/}
              {/*      <Menu.Item id={2} value={2} text="中文简体"/>*/}
              {/*    </Menu.List>*/}
              {/*  </Menu>*/}
              {/*</Dropdown>*/}
            </NavBar.Item>
          </NavBar.List>
        </NavBar>
      </div>
    </Affix>
  </>;
}