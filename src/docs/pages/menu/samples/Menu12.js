import React, {useState} from 'react';
import {
  Button,
  IconHome,
  Menu,
  Radio,
  RadioGroup,
  Toggle,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';

export default function Menu12() {
  const [hasArrow, setHasArrow] = useState(true);
  const [hasBox, setHasBox] = useState(true);
  const [horizontal, setHorizontal] = useState(false);
  const [type, setType] = useState('normal');
  const [popupSubMenu, setPopupSubMenu] = useState(false);
  const [compact, setCompact] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasArrow} onChange={active => setHasArrow(active)}
              content={{on: 'Arrow', off: 'Arrow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={horizontal} onChange={active => setHorizontal(active)}
              content={{on: 'Horizontal', off: 'Horizontal'}}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem'}}>type:</span>
      <RadioGroup defaultValue={type}
                  onChange={(val) => setType(val)}>
        <Radio value="primary"> primary</Radio>
        <Radio value="dark"> dark</Radio>
        <Radio value="normal">normal </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Toggle active={popupSubMenu} onChange={active => setPopupSubMenu(active)}
              content={{on: 'Popup SubMenu', off: 'Popup SubMenu'}}/>
    </div>
    <div className="doc doc-row">
      <Button style={{marginLeft: '1rem'}}
              onClick={() => setCompact(pre => !pre)}>
        Change
      </Button>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={active => setHasBox(active)}
              content={{on: 'Box Shadow', off: 'Box Shadow'}}/>
    </div>

    <div className="doc doc-row">
      <Menu direction={horizontal ? 'horizontal' : 'vertical'}
            compact={compact}
            popupSubMenu={popupSubMenu}
            type={type}
            hasArrow={hasArrow} icon={<IconHome/>}>
        <Menu.Group header={'Group'}>
          <Menu.Item id="item3">
            Item3
          </Menu.Item>
          <Menu.Item id="item4">
            Item4
          </Menu.Item>
        </Menu.Group>
        <Menu.Item id="item44">
          Item44
        </Menu.Item>
        <Menu.Item>
          Item5
        </Menu.Item>
        <Menu.SubMenu header="SubMenu" id="sub1">
          <Menu.Item id="item6">
            Item6
          </Menu.Item>
          <Menu.Item id="item7">
            Item7
          </Menu.Item>
          <Menu.SubMenu header="SubMenu" id="sub2">
            <Menu.Item id="item8">
              Item8
            </Menu.Item>
            <Menu.Item id="item9">
              Item9
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu header="SubMenu3" id="sub3">
            <Menu.Group header={'Group'}>
              <Menu.Item id="item10">
                Item10
              </Menu.Item>
              <Menu.Item id="item11">
                Item11
              </Menu.Item>
            </Menu.Group>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">
      {/*for compact the width should set in parent node */}
      <div>
        <Menu direction={horizontal ? 'horizontal' : 'vertical'}
              compact={compact}
              popupSubMenu={popupSubMenu}
              type={type}
              hasBox={hasBox}
              onOpenedMenu={(data) => console.log(`==${data}`)}
              hasArrow={hasArrow} icon={<IconHome/>}>
          <Menu.SubMenu header="Navigation One" id="sub1"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item id="item1">
              Item1
            </Menu.Item>
            <Menu.Item id="item2">
              Item2
            </Menu.Item>
            <Menu.Item id="item3">
              Item3
            </Menu.Item>
            <Menu.Item id="item4">
              Item4
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu header="Navigation Two" id="sub2"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item id="item5">
              Item5
            </Menu.Item>
            <Menu.Item id="item6">
              Item6
            </Menu.Item>
            <Menu.Item id="item7">
              Item7
            </Menu.Item>
            <Menu.Item id="item8">
              Item8
            </Menu.Item>
          </Menu.SubMenu>
          {/*<Menu.SubMenu header="Navigation Three"*/}
          {/*              icon={<FontAwesomeIcon icon={faLaptop}/>}>*/}
          {/*  <Menu.Item>*/}
          {/*    Item9*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item>*/}
          {/*    Item10*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item>*/}
          {/*    Item11*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item>*/}
          {/*    Item12*/}
          {/*  </Menu.Item>*/}
          {/*</Menu.SubMenu>*/}
        </Menu>
      </div>
    </div>
  </>;
}