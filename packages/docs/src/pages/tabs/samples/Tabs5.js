import React, { useState } from 'react';
import { Tabs, Toggle } from 'react-windy-ui';

const tabs = [...Array(10).keys()].map((i) => ({
  key: i,
  value: i,
  title: `Item-${i}`,
  content: `Content-${i}`
}));

export default function Tabs5() {
  const [removable, setRemovable] = useState(true);

  const [tabConfig, setTabConfig] = useState({
    tabArray: tabs,
    active: 1
  });

  const removeItem = (value) => {
    let nextActive = value === tabConfig.active ? value - 1 : tabConfig.active;

    setTabConfig((pre) => ({
      tabArray: pre.tabArray.filter((s) => s.value !== value),
      active: nextActive
    }));
  };

  const changeTab = (tabValue) => {
    setTabConfig((pre) => ({ tabArray: pre.tabArray, active: tabValue }));
  };

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={removable} onChange={(val) => setRemovable(val)} label="Removable" />
      </div>

      <Tabs
        type="secondaryCard"
        position="top"
        active={tabConfig.active}
        onChange={changeTab}
        scrollable={true}
        removable={removable}
        onRemove={removeItem}
        style={{ maxHeight: '350px' }}
      >
        <Tabs.Items>
          {tabConfig.tabArray.map((tabSetting) => (
            <Tabs.TabItem value={tabSetting.value} key={tabSetting.key}>
              <span>{tabSetting.title}</span>
            </Tabs.TabItem>
          ))}
          <Tabs.TabItem value="add" removable={false}>
            +
          </Tabs.TabItem>
        </Tabs.Items>
        <Tabs.Panels>
          {tabConfig.tabArray.map((tabSetting) => (
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
