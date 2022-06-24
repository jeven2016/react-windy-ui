import React, { useState } from 'react';
import { Select, Tabs } from 'react-windy-ui';

export default function Tabs4() {
  const [type, setType] = useState('normal');
  const [position, setPosition] = useState('top');

  const tabs = [...Array(30).keys()].map((i) => ({
    key: i,
    value: i,
    title: `Item-${i}`,
    content: `Content-${i}`
  }));

  return (
    <>
      <div className="doc doc-row space">
        <span style={{ fontWeight: '600' }}>Type:</span>
        <Select value={type} onSelect={(value) => setType(value)}>
          <Select.Option value="normal">normal</Select.Option>
          <Select.Option value="card">card</Select.Option>
          <Select.Option value="secondaryCard">secondaryCard</Select.Option>
        </Select>
      </div>
      <div className="doc doc-row space">
        <span style={{ fontWeight: '600' }}>Position:</span>
        <Select value={position} onSelect={(value) => setPosition(value)}>
          <Select.Option value="top">top</Select.Option>
          <Select.Option value="bottom">bottom</Select.Option>
          <Select.Option value="left">left</Select.Option>
          <Select.Option value="right">right</Select.Option>
        </Select>
      </div>

      <Tabs type={type} position={position} scrollable={true} style={{ maxHeight: '350px' }}>
        <Tabs.Items>
          {tabs.map((tabSetting) => (
            <Tabs.TabItem value={tabSetting.value} key={tabSetting.key}>
              <span>{tabSetting.title}</span>
            </Tabs.TabItem>
          ))}
        </Tabs.Items>
        <Tabs.Panels>
          {tabs.map((tabSetting) => (
            <Tabs.TabPanel itemValue={tabSetting.value} key={`panel-${tabSetting.value}`}>
              <div
                style={{
                  padding: '1rem',
                  minHeight: '10rem'
                }}
              >
                {tabSetting.content}
              </div>
            </Tabs.TabPanel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </>
  );
}
