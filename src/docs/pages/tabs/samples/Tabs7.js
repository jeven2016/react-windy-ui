import React, {useState} from 'react';
import {Select, Tabs, Toggle} from 'react-windy-ui';
import {faFax, faHeart, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Tabs7() {
  const [type, setType] = useState('normal');
  const [equalWidth, setEqualWidth] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={equalWidth} onChange={val => setEqualWidth(val)}
              label={{on: 'Equal-width', off: 'Equal-width'}}/>
    </div>
    <div className="doc doc-row space">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="card">card</Select.Option>
        <Select.Option value="secondaryCard">secondaryCard</Select.Option>
      </Select>
    </div>

    <Tabs type={type} equalWidth={equalWidth} style={{
      color: '#acaaaa',
      borderRadius: '.25rem',
      background: '#f5f5f5',
    }}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faFax} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            FAVOURITE
          </Tabs.ItemContent>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faPhone} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            PHONE
          </Tabs.ItemContent>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faHeart} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            GIFT
          </Tabs.ItemContent>
        </Tabs.TabItem>
      </Tabs.Items>
    </Tabs>
  </>;
}