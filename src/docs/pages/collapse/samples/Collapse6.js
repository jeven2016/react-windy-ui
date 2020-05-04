import React from 'react';
import {Button, Collapse, IconList, IconSearch} from 'react-windy-ui';

export default function Collapse6() {

  const comp = <>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2}
                     moreItems={[
                       <span onClick={(e) => {
                         alert('Add');
                         e.stopPropagation();
                       }}>Add</span>,
                       <span>Update</span>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3}
                     moreItems={[
                       <Button size="small" outline type="primary">Add</Button>,
                       <Button size="small" outline color="red">Delete</Button>,
                     ]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return comp;
}