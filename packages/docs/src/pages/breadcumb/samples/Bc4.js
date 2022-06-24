import React from 'react';
import { Breadcrumb, Dropdown, IconHome, Tooltip } from 'react-windy-ui';

export default function Bc4() {
  return (
    <>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <IconHome /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Tooltip body="menu description">Main</Tooltip>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Dropdown title={'Application'} activeBy="hover">
            <Dropdown.Menu>
              <Dropdown.Item>Menu Item1</Dropdown.Item>
              <Dropdown.Item>Menu Item2</Dropdown.Item>
              <Dropdown.Item>Menu Item3</Dropdown.Item>
              <Dropdown.Item>Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
