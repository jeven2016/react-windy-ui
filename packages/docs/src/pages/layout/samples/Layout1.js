import React from 'react';
import {Breadcrumb, IconHome, IconList, Layout, Navbar} from 'react-windy-ui';

export default function Layout1() {
  return <>
    <Layout style={{background: '#f5f6f7'}}>
      <Layout.Header>
        <Navbar type="primary"
                hasBorder={false}>
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
        <Layout.Content
            style={{
              background: '#fff',
              minHeight: '15rem',
              padding: '1rem',
              marginBottom: '1rem',
            }}>
          Your Content
        </Layout.Content>
      </Layout>
    </Layout>
  </>;
}