import React, {useState} from 'react';
import {Select, Tabs, Toggle} from 'react-windy-ui';

export default function Tabs3() {
  const [type, setType] = useState('normal');
  const [equalWidth, setEqualWidth] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={equalWidth} onChange={val => setEqualWidth(val)}
              content={{on: 'Equal-width', off: 'Equal-width'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="card">card</Select.Option>
        <Select.Option value="secondaryCard">secondaryCard</Select.Option>
      </Select>
    </div>

    <Tabs type={type} equalWidth={equalWidth}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          Item3
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item3">
          <div>The panel for Item3</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}