import React, {useState} from 'react';
import {Menu, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu8() {
  const [type, setType] = useState('normal');
  return <>
    Bug: 第一次点击无法展开
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            type={type}
            style={{width: '250px'}}>
        <Menu.Item id="item1">
          Menu item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu item2
        </Menu.Item>
        <Menu.Item id="item3">
          Menu item3
        </Menu.Item>
        <Menu.Item id="item4">
          Menu item4
        </Menu.Item>
        <Menu.SubMenu header="SubMenu 1" id="sub1">
          <Menu.Item id="item5">
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6">
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7">
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8">
            Menu item8
          </Menu.Item>
          <Menu.SubMenu header="SubMenu 2" id="sub2">
            <Menu.Item id="item9">
              Menu item9
            </Menu.Item>
            <Menu.Item id="item10">
              Menu item10
            </Menu.Item>
            <Menu.Item id="item11">
              Menu item11
            </Menu.Item>
            <Menu.Item id="item12">
              Menu item12
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 3" id="sub3">
          <Menu.Item id="item13">
            Menu item13
          </Menu.Item>
          <Menu.Item id="item14">
            Menu item14
          </Menu.Item>
          <Menu.Item id="item15">
            Menu item15
          </Menu.Item>
          <Menu.Item id="item16">
            Menu item16
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}