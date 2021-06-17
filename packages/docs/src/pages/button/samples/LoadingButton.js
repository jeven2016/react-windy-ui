import React from 'react';
import {Button, Loader} from 'react-windy-ui';

const LoadingButton = () => {
  return <>
    <div>
      <Button type="primary" shape='round' loading={true}>Save</Button>
      <Button color="purple" shape='round' loading={true} leftLoader={false}>
        Save
      </Button>
      <Button color="green" loading={true} disabled
              loader={<Loader type="secondary" color="white" active={true} size="small"/>}>
        Save
      </Button>
    </div>
    <div>

    </div>
  </>;
};

export default LoadingButton;