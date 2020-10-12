import React from 'react';
import {Breadcrumb, IconHome, IconList, Layout, Navbar} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

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