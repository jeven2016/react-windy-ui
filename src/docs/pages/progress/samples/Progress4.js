import React from 'react';

import {Button, ButtonGroup, Progress} from 'react-windy-ui';

export default function Progress4() {

  const showTop = () => {
    Progress.showTop({
      progressStyle: {marginTop: '0px'},
      barStyle: {background: 'red'},
    });
  };

  const closeTop = () => {
    Progress.closeTop();
  };

  return <>
    <ButtonGroup>
      <Button onClick={showTop}>
        Show
      </Button>
      <Button onClick={closeTop}>
        Close
      </Button>
    </ButtonGroup>
  </>;

}