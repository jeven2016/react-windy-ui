import React from 'react';
import {Tabs} from 'react-windy-ui';

export default function Tabs1() {
  return <>
    <Tabs onChange={(item) => console.log(item)}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          Item2
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue="Item1">
          <div>The panel for Item1</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue="Item2">
          <div>The panel for Item2</div>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
}