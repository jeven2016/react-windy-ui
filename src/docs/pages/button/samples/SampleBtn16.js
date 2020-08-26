import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn16 = () => {
  return <>
    <Button hasOutlineBackground={false} outline color="purple"
            initOutlineColor hasMinWidth>purple</Button>

    <Button hasOutlineBackground={true} outline color="purple"
            hasMinWidth>purple</Button>

    <Button hasOutlineBackground={true} initOutlineColor outline color="purple"
            hasMinWidth>purple</Button>
  </>;
};

export default SampleBtn16;