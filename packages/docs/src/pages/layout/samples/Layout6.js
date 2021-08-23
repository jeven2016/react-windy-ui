import React, {useState} from 'react';
import {Breadcrumb, Button, IconHome, IconList, Layout, Menu,} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

function getMenu(collapse) {
  return <Menu defaultOpenedMenus={['sub1', 'sub3']}
               hasBox={false}
               compact={collapse}
               type="dark">
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

const collapseAttribute = {
  attr: 'marginLeft',
  minValue: '0px',
  maxValue: '240px',
};

export default function Layout6() {
  const [collapse, setCollapse] = useState(false);

  return <>
    <DocFrame width="100%" height='330px'>
      <div>
        <Layout.Split>
          <Layout.Slider
            minWidth="0px"
            collapse={collapse}
            style={{
              position: 'fixed',
              height: '100%',
              overflowY: 'auto',
              left: 0,
              top: 0,
            }}>
            <h2 style={{
              textAlign: 'center',
              color: 'white',
              padding: '1rem 0',
            }}>Web Title</h2>
            {getMenu(collapse)}
          </Layout.Slider>

          <Layout collapseAttribute={collapseAttribute} collapse={!collapse}
                  style={{padding: '0 2rem', overflowY: 'auto'}}>
            <Breadcrumb style={{margin: '0.5rem 0'}}>
              <Breadcrumb.Item>
                <Button size="small" hasBorder={false} hasBox={false}
                        onClick={() => setCollapse(pre => !pre)}>
                  <IconList/>
                </Button>
              </Breadcrumb.Item>
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
              minHeight: '15rem',
              padding: '1rem',
            }}>
              Your Content
            </Layout.Content>
            <Layout.Footer style={{textAlign: 'center'}}>
              <span>react-windy-ui ©2020 All rights reserved</span>
            </Layout.Footer>
          </Layout>
        </Layout.Split>

      </div>
    </DocFrame>
  </>;
}