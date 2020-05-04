import React, {useState} from 'react';
import {Collapse, Button, Toggle, IconSearch, IconList} from 'react-windy-ui';

export default function Collapse7() {
  const [disabled, setDisabled] = useState(false);
  const comp = <>
    <div className="doc doc-row">
      <Toggle onChange={val => setDisabled(val)}
              content={{on: 'Disabled', off: 'Enabled'}}/>
    </div>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     disabled={disabled}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2} disabled={disabled}
                     moreItems={[
                       <span>Add</span>,
                       <span>Update</span>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3} disabled={disabled}
                     moreItems={[
                       <Button size="small" outline type="primary"
                               disabled={disabled}>Add</Button>,
                       <Button size="small" outline color="red"
                               disabled={disabled}>Delete</Button>,
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