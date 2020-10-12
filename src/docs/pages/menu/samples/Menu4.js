import React, {useState} from 'react';
import {Menu, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu4() {
  const [justify, setJustify] = useState(null);
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={justify}
                  onChange={(val) => setJustify(val)}>
        <Radio value="start"> start</Radio>
        <Radio value="end"> end</Radio>
        <Radio value="center">center </Radio>
        <Radio value="around">around </Radio>
        <Radio value="between">between </Radio>
        <Radio value="evenly">evenly </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal"
            justify={justify}>
        <Menu.Item id="item1">Menu Item1</Menu.Item>
        <Menu.Item id="item2">Menu Item2</Menu.Item>
        <Menu.Item id="item3">Menu Item3</Menu.Item>
      </Menu>
    </div>
  </>;

}