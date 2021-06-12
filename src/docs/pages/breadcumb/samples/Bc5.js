import React from 'react';
import {Breadcrumb, Dropdown, IconHome, Tooltip} from 'react-windy-ui';

/*

.custom-bd {
  &.breadcrumb {
    > .item.active,
    > .item:hover {
      color: #fff !important;
    }
  }
}

 */
export default function Bc5() {
  return <>
    <Breadcrumb separator="/" extraClassName="custom-bd" style={{
      color: '#fff',
      background: '#0ca0ff',
      padding: '.5rem 0',
      fontSize: '1.25rem'
    }}>
      <Breadcrumb.Item>
        <IconHome/>Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Tooltip body="Item description"><span style={{color: '#fff'}}>Main</span></Tooltip>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Dropdown title={<span style={{color: '#fff'}}>Application</span>} activeBy="hover">
          <Dropdown.Menu>
            <Dropdown.Item>Menu Item1</Dropdown.Item>
            <Dropdown.Item>Menu Item2</Dropdown.Item>
            <Dropdown.Item>Menu Item3</Dropdown.Item>
            <Dropdown.Item>Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}