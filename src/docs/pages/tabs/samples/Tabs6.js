import React, {useState} from 'react';
import {Tabs, Select, Toggle} from 'react-windy-ui';

const contentStyle = {
  minHeight: '200px',
  background: '#fff',
  padding: '1rem .5rem',
  borderRadius: '.25rem',
};

const containerStyle = {
  background: '#f7f5f5',
  padding: '1rem',
  borderRadius: '.25rem',
};

export default function Tabs6() {
  const [cardBorder, setCardBorder] = useState('none');
  const [tabBorder, setTabBorder] = useState(false);
  const [position, setPosition] = useState('top');

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Card Border:</span>
      <Select value={cardBorder} onSelect={value => setCardBorder(value)}>
        <Select.Option value="none">none</Select.Option>
        <Select.Option value="one">one</Select.Option>
        <Select.Option value="full">full</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row">
      <Toggle active={tabBorder} onChange={val => setTabBorder(val)}
              content={{on: 'Tabs Border', off: 'Tabs Border'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position} onSelect={value => setPosition(value)}>
        <Select.Option value="top">top</Select.Option>
        <Select.Option value="bottom">bottom</Select.Option>
        <Select.Option value="left">left</Select.Option>
        <Select.Option value="right">right</Select.Option>
      </Select>
    </div>

    <div style={containerStyle}>
      <Tabs position={position}
            equalWidth
            type="card"
            hasBorder={tabBorder}
            cardBorder={cardBorder}
            style={{margin: '0'}}>
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
            <div style={contentStyle}>The panel for Item1</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue="Item2">
            <div style={contentStyle}>The panel for Item2</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue="Item3">
            <div style={contentStyle}>The panel for Item3</div>
          </Tabs.TabPanel>
        </Tabs.Panels>
      </Tabs>
    </div>
  </>;
}