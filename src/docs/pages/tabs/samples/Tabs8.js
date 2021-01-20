import React, {useState} from 'react';
import {Select, Tabs, Toggle} from 'react-windy-ui';
import {faFax, faHeart, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = (props) => {
  return <div style={{
    flex: '1 1 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.5rem 0',
  }} {...props}/>
}

export default function Tabs8() {
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
      borderRadius: '.25rem',
      color: '#fff',
      background: '#0ca0ff',
      boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.18), 0px 8px 10px 1px rgba(0, 0, 0, 0.12), 0px 3px 12px 2px rgba(0, 0, 0, 0.12)'
    }}>
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          <Wrapper>
            <FontAwesomeIcon icon={faFax} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            FAVOURITE
          </Wrapper>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          <Wrapper>
            <FontAwesomeIcon icon={faPhone} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            PHONE
          </Wrapper>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          <Wrapper>
            <FontAwesomeIcon icon={faHeart} style={{
              marginBottom: '.5rem',
              fontSize: '1.5rem'
            }}/>
            GIFT
          </Wrapper>
        </Tabs.TabItem>
      </Tabs.Items>
    </Tabs>
  </>
      ;
}