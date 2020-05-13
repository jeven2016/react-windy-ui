import React, {useState} from 'react';
import {IconList, Menu, Radio, RadioGroup, Toggle} from 'react-windy-ui';
import {IconInfo, IconQuestion} from '../../../../components/src';

export default function Menu_open() {
  const [type, setType] = useState('normal');
  const [compact, setCompact] = useState(false);
  const [openedMenus, setOpenedMenus] = useState([]);
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
    <div className="doc doc-row">
      <Toggle active={compact} onChange={active => setCompact(active)}
              content={{on: 'Compact', off: 'Compact'}}/>
    </div>
    <div className="doc doc-row" style={{width: '20rem'}}>
      <Menu compact={compact}
            openedMenus={openedMenus}
            onOpenedMenu={(ids) => {
              console.log(ids)
              setOpenedMenus(ids.filter(id => id !== 'sub4'))
            }}
            type={type}>
        <Menu.Item id="item45" icon={<IconQuestion/>}>
          Menu item45
        </Menu.Item>
        <Menu.Item id="item46" icon={<IconInfo/>}>
          Menu item46
        </Menu.Item>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}>
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
        <Menu.SubMenu header="SubMenu 3" id="sub3" icon={<IconList/>}>
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
        <Menu.SubMenu header="SubMenu 4" id="sub4" icon={<IconList/>}
                      style={{opacity: 0.3}}>
          <Menu.Item id="item17">
            Disabled Menu
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}