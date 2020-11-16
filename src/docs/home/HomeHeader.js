import React, {useState} from 'react';
import {Affix, Button, Dropdown, IconList, Navbar} from 'react-windy-ui';
import {Link} from 'react-router-dom';

export default function HomeHeader({transparent = false}) {
  const [barExtraCls, setBarExtraCls] = useState(null);

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
            <Link to="/">Windy UI</Link>
          </Navbar.Title>
          <Navbar.List align='right'>
            <Navbar.Item hasBar>
              <Link to="/docs">Documentation</Link>
            </Navbar.Item>
            <Navbar.Item hasBar>
              Templates
            </Navbar.Item>
            <Navbar.Item hasBar>
              Contribute
            </Navbar.Item>
            <Navbar.Item>
              <Dropdown activeBy="hover" title={<span>Language</span>}>
                <Dropdown.Menu>
                  <Dropdown.Item id="English">English</Dropdown.Item>
                  <Dropdown.Item id="chinese">中文简体</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>
    </Affix>
  </>;
}