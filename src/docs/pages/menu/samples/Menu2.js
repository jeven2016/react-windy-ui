import React, {useState} from 'react';
import {Menu, Radio, RadioGroup} from 'react-windy-ui';

export default function Menu2() {
  const [type, setType] = useState('normal');
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <Menu type={type}
          style={{width: '20rem'}}
          defaultActiveItems={['item1']}
          onSelect={(itemId, e) => {
            console.log(itemId);
          }}>
      <Menu.Item id="item1">Menu Item1</Menu.Item>
      <Menu.Item id="item2">Menu Item2</Menu.Item>
      <Menu.Item id="item3">Menu Item3</Menu.Item>
      <Menu.Item id="item4">Menu Item4</Menu.Item>
    </Menu>
  </>;

}