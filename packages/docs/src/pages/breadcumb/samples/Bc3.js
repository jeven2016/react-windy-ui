import React, { useCallback } from 'react';
import { Breadcrumb, Button, Dropdown, IconArrowRight, IconHome } from 'react-windy-ui';

export default function Bc3() {
  const createSeparator = useCallback((itemIndex, { value } /*item props*/) => {
    //you can return a Dropdown by checking the index or value property
    console.log(`the value is ${value}`);

    if (itemIndex === 1) {
      return (
        <Dropdown
          title={
            <Button circle size="small" hasRipple={false}>
              <IconArrowRight />
            </Button>
          }
          position="rightBottom"
        >
          <Dropdown.Menu>
            <Dropdown.Item id="item1">Main</Dropdown.Item>
            <Dropdown.Item id="item2">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    if (itemIndex === 2) {
      return (
        <Dropdown
          title={
            <Button circle size="small" hasRipple={false}>
              <IconArrowRight />
            </Button>
          }
          position="rightBottom"
        >
          <Dropdown.Menu>
            <Dropdown.Item id="item1">Application</Dropdown.Item>
            <Dropdown.Item id="item2">Maps</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  }, []);

  return (
    <>
      <Breadcrumb hasBackground separator=">">
        <Breadcrumb.Item>
          <IconHome /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
        <Breadcrumb.Item active>Application</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb hasBackground separator=":">
        <Breadcrumb.Item>
          <IconHome /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
        <Breadcrumb.Item active>Application</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb hasBackground separator={createSeparator}>
        <Breadcrumb.Item value="home">
          <IconHome /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item value="main">Main</Breadcrumb.Item>
        <Breadcrumb.Item active value="app">
          Application
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
