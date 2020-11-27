import React, {useState} from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Pop4() {
  const [active, setActive] = useState(false);

  const change = (nextState) => {
    if (!active && nextState) {
      setActive(nextState);
    }
  };

  const close = () => setActive(false);

  const body = <>
    <div>......</div>
    <div>......</div>
    <div>......</div>
    <div style={{textAlign: 'center'}}>
      <Button color="blue" size="small" onClick={close}>Close</Button></div>
  </>;
  return <>
    <Popover body={body} activeBy="hover" header="Are you sure to close?"
             active={active}
             onChange={change}>
      <Button outline={true} color="blue">Hover</Button>
    </Popover>
  </>;

}