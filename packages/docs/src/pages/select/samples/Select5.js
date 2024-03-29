import React, { useState } from 'react';
import { Button, IconHome, Input, InputGroup, Select, Tooltip } from 'react-windy-ui';

const rootStyle = {
  display: 'flex',
  flex: '1 1 200px'
};

const iconColumn = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 2rem',
  color: '#f2791a',
  marginRight: '1rem'
};

const infoColumn = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column'
};

const titleStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem'
};

const descStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem',
  color: '#818a91',
  fontSize: '.8rem'
};

const Template = ({ title, desc }) => {
  return (
    <div style={rootStyle}>
      <div style={iconColumn}>
        <IconHome size="large" />
      </div>
      <div style={infoColumn}>
        <div style={titleStyle}>{title}</div>
        <div style={descStyle}>{desc}</div>
      </div>
    </div>
  );
};

export default function Select5() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const changValue = (e) => {
    setValue(e.target.value);
  };

  const create = (e) => {
    if (value && !/^\s*$/.test(value)) {
      setList(list.concat(value));
    }
  };

  return (
    <div className="doc doc-row space">
      <Select
        defaultValue="shanghai"
        position="bottomLeft"
        autoWidth={false}
        active={active}
        onActiveChange={(next) => setActive(next)}
      >
        <Select.Option value="park" text="New York" style={{ borderBottom: '1px solid #ccc' }}>
          <Template
            title="Central Park"
            desc=" 5 Ave to Central Park W, 59 St To 110 St, New York, NY 10019"
          />
        </Select.Option>

        <Select.Option value="nanjing" text="Nanjing" style={{ borderBottom: '1px solid #ccc' }}>
          <Template
            title="Nanjing Presidential Palace Park"
            desc="No. 292, Changjiang Road, Xuanwu District"
          />
        </Select.Option>

        <Select.Option value="shanghai" text="Shanghai" style={{ borderBottom: '1px solid #ccc' }}>
          <Template title="Shanghai Museum" desc="No.201 Renmin Avenue, Shanghai, Shang..." />
        </Select.Option>

        <Select.Option value="hk" text="Hong Kong" style={{ borderBottom: '1px solid #ccc' }}>
          <Template title="Victoria Peak" desc="33 Garden Road, Central, Hong Kong Isla..." />
        </Select.Option>

        {list.map((title, index) => {
          return (
            <Select.Option
              key={title + index}
              value={title}
              text={title}
              style={{ borderBottom: '1px solid #ccc' }}
            >
              <Template title={title} desc={`The description for ${title}`} />
            </Select.Option>
          );
        })}

        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
          onClick={(e) => setActive(true)}
        >
          <InputGroup style={{ width: '13rem' }}>
            <Input placeholder="Creat New" value={value} onChange={changValue} />
            <InputGroup.Item autoScale={false}>
              <Tooltip body="Try to create one" position="bottom">
                <Button
                  onClick={(e) => {
                    create(e);
                  }}
                >
                  +
                </Button>
              </Tooltip>
            </InputGroup.Item>
          </InputGroup>
        </div>
      </Select>
    </div>
  );
}
