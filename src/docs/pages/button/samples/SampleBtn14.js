import React, {useEffect, useRef} from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn14 = () => {
  const ctrlRef = useRef(null);
  useEffect(() => {
    //focus on the button while this component is mounted
    ctrlRef.current.focus();
  }, []);

  const click = () => ctrlRef.current.focus();
  return <>
    <Button type="info" onClick={click}>Click</Button>
    <Button type="red" ref={ctrlRef}>Focus on me</Button>
  </>;
};

export default SampleBtn14;