import React, {useState} from 'react';
import {Breadcrumb, IconHome, IconList, Layout, Menu, Navbar, Toggle,} from 'react-windy-ui';

function getMenu(position) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
               primaryBarPosition={position ? 'right' : 'left'}
               type="primary">
    <Menu.Item id="item1">
      Menu item1
    </Menu.Item>
    <Menu.Item id="item2">
      Menu item2
    </Menu.Item>
    <Menu.SubMenu header="SubMenu 1" id="sub1">
      <Menu.Item id="item5">
        Menu item5
      </Menu.Item>
      <Menu.Item id="item6">
        Menu item6
      </Menu.Item>
      <Menu.Item id="item7">
        Menu item7
      </Menu.Item>
      <Menu.Item id="item8">
        Menu item8
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu header="SubMenu 3" id="sub3">
      <Menu.Item id="item13">
        Menu item13
      </Menu.Item>
      <Menu.Item id="item14">
        Menu item14
      </Menu.Item>
      <Menu.Item id="item15">
        Menu item15
      </Menu.Item>
      <Menu.Item id="item16">
        Menu item16
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>;
}

export default function Layout3() {
  const [leftPosition, setPosition] = useState(true);
  const flexDirection = leftPosition ? 'row' : 'row-reverse';

  const borderStyle = leftPosition ? {borderRight: '1px solid #f0f0f0'}
    : {borderLeft: '1px solid #f0f0f0'};

  return <>
    <div className="doc doc-row">
      <Toggle active={leftPosition} onChange={val => setPosition(val)}
              label={{on: 'Left', off: 'Right'}}/>
    </div>

    <div>
      <Layout.Header>
        <Navbar type="primary"
                hasBox={false}
                hasBorder={false}
                extraClassName="clear-radius">
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span>Navbar</span>
          </Navbar.Title>
          <Navbar.List>
            <Navbar.Item hasBackground>
              User
            </Navbar.Item>
            <Navbar.Item active={true} hasBackground>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Privileges
            </Navbar.Item>
            <Navbar.Item hasBackground>
              Security
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
      </Layout.Header>

      <Layout style={{padding: '0 1rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Split style={{flexDirection: flexDirection}}>
          <Layout.Slider style={{
            ...borderStyle,
          }}>
            {getMenu(leftPosition)}
          </Layout.Slider>
          <Layout.Content style={{
            minHeight: '15rem',
            padding: '1rem',
          }}>
            Your Content
          </Layout.Content>
        </Layout.Split>
      </Layout>

      <Layout.Footer style={{textAlign: 'center'}}>
        <span>react-windy-ui ©2020 All rights reserved</span>
      </Layout.Footer>
    </div>
  </>;
}