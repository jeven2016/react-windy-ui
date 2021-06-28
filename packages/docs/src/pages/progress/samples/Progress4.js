import React from 'react';

import {Button, ButtonGroup, Progress} from 'react-windy-ui';

export default function Progress4() {

  const showTop = () => {
    Progress.showTop({
      style: {marginTop: '0px'},
      type: 'info',

      //optional parameters
      // barStyle: {background: 'red'},
      showLoading: false,
      initPercentValue: 5,
      incrementStart: 2,
      incrementEnd: 4,
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