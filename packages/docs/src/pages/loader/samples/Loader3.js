import React from 'react';
import { Button, Loader } from 'react-windy-ui';

export default function Loader3() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button type="primary" shape="round" loading={true}>
          Save
        </Button>
        <Button color="purple" shape="round" loading={true} leftLoader={false}>
          Save
        </Button>
        <Button
          color="green"
          loading={true}
          loader={<Loader type="secondary" color="white" active={true} size="small" />}
        >
          Save
        </Button>
      </div>
    </>
  );
}
