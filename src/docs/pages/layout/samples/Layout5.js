import React, {useState} from 'react';
import {
  Breadcrumb,
  IconHome,
  IconList,
  Layout,
  Menu,
  Navbar,
  Toggle,
  Button,
} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

function getMenu(position, collapse) {
  return <Menu defaultActiveItems={['item2']}
               hasBox={false}
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

export default function Layout5() {
  return <>
    <DocFrame width="100%" height='350px'>
      <Layout>
        <Layout.Header fixed="top">

          <Navbar type="primary"
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
        <Layout
            style={{
              marginTop: '4rem',
              background: '#f8f9fa',
              padding: '0 2rem',
            }}>
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
          <Layout.Content
              style={{
                background: '#fff',
                padding: '0 1rem',
                marginBottom: '1rem',
              }}>
            <div style={{height: '500px'}}>
              Your Content<br/>
            </div>
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
          <span>react-windy-ui ©2020 All rights reserved</span>
        </Layout.Footer>
      </Layout>

    </DocFrame>
  </>;
}