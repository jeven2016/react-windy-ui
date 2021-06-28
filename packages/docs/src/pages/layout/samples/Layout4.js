import React, {useState} from 'react';
import {
  Breadcrumb,
  IconHome,
  IconList,
  Layout,
  Menu,
  Navbar,
  Toggle,
} from 'react-windy-ui';

function getMenu(position, collapse) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
               defaultOpenedMenus={['sub1', 'sub3']}
               compact={collapse}
               primaryBarPosition={position ? 'right' : 'left'}
               type="dark">
    <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconHome/>}>
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
    <Menu.SubMenu header="SubMenu 3" id="sub3" icon={<IconList/>}>
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

export default function Layout4() {
  const [collapse, setCollapse] = useState(false);
  const [leftPosition, setPosition] = useState(true);

  const flexDirection = leftPosition ? 'row' : 'row-reverse';

  return <>
    <div className="doc doc-row">
      <Toggle active={leftPosition} onChange={val => setPosition(val)}
              label={{on: 'Left', off: 'Right'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={collapse} onChange={val => setCollapse(val)}
              label={{on: 'Collapse', off: 'Collapse'}}/>
    </div>

    <div style={{background: '#f5f6f7'}}>
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

      <Layout.Split style={{flexDirection: flexDirection}}>
        <Layout.Slider style={{background: '#000'}} collapse={collapse} autoHide={false}>
          {getMenu(leftPosition, collapse)}
        </Layout.Slider>

        <Layout style={{padding: '0 2rem'}}>
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

          <Layout.Content style={{
            background: '#fff',
            minHeight: '15rem',
            padding: '1rem',
          }}>
            Your Content
          </Layout.Content>
        </Layout>
      </Layout.Split>
      <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
        <span>react-windy-ui ©2020 All rights reserved</span>
      </Layout.Footer>
    </div>
  </>;
}