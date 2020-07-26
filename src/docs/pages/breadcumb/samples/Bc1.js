import React from 'react';
import {Breadcrumb, IconHome} from 'react-windy-ui';

export default function Bc1() {
  return <>
    <Breadcrumb>
      <Breadcrumb.Item>
        <IconHome/> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;
}