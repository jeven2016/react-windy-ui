import React from 'react';
import {
  Button,
  Collapse,
  Dropdown,
  IconList,
  IconSearch,
} from 'react-windy-ui';

export default function Collapse6() {

  return <>
    <Collapse
        hasRipple={false}
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          content<br/>
          ......<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3}
                     moreItems={[
                       <Dropdown
                           onSelect={(value, e) => e.stopPropagation()}
                           title={<Button size="small" inverted
                                          onClick={(e) => e.stopPropagation()}
                                          type="primary">Action</Button>}>
                         <Dropdown.Menu>
                           <Dropdown.Item id="item1">Action
                             Item1</Dropdown.Item>
                           <Dropdown.Item id="item2">Action
                             Item2</Dropdown.Item>
                         </Dropdown.Menu>
                       </Dropdown>,
                     ]}>
        <div style={{padding: '1rem'}}>
          content<br/>
          ......<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
}