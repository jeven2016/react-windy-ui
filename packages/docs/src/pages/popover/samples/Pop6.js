import React, {useState} from 'react';
import {Button, Popover, Toggle} from 'react-windy-ui';

export default function Pop6() {
  const [autoWidth, setAutoWidth] = useState(false);

  const body = <div>
    This is a sample
  </div>;

  return <>
    <div className="doc doc-row">
      <Toggle active={autoWidth}
              label='Auto Width'
              onChange={(val) => setAutoWidth(val)}/>
    </div>

    <Popover body={body} autoWidth={autoWidth}>
      <Button outline={true} color="blue">Popover</Button>
    </Popover>
  </>;

}