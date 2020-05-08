import React, {useState} from 'react';
import {
  Menu,
  Toggle,
  IconHome,
  RadioGroup,
  Radio,
  Button,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMailchimp,
  faNapster,
  faSellcast,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFolder,
  faFolderMinus,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

export default function Menu12() {
  const [hasArrow, setHasArrow] = useState(true);
  const [horizontal, setHorizontal] = useState(false);
  const [block, setBlock] = useState(false);
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
      <Toggle active={block} onChange={active => setBlock(active)}
              content={{on: 'Block', off: 'Block'}}/>
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

    {/*<div className="doc doc-row">*/}
    {/*  <Menu direction={horizontal ? 'horizontal' : 'vertical'}*/}
    {/*        popupSubMenu={popupSubMenu}*/}
    {/*        type={type}*/}
    {/*        block={block}*/}
    {/*        hasArrow={hasArrow} icon={<IconHome/>}>*/}
    {/*    <Menu.Group header={'Group'}>*/}
    {/*      <Menu.Item>*/}
    {/*        Item3*/}
    {/*      </Menu.Item>*/}
    {/*      <Menu.Item>*/}
    {/*        Item4*/}
    {/*      </Menu.Item>*/}
    {/*    </Menu.Group>*/}
    {/*    <Menu.Item>*/}
    {/*      Item4*/}
    {/*    </Menu.Item>*/}
    {/*    <Menu.Item>*/}
    {/*      Item5*/}
    {/*    </Menu.Item>*/}
    {/*    <Menu.SubMenu header="SubMenu">*/}
    {/*      <Menu.Item>*/}
    {/*        Item4*/}
    {/*      </Menu.Item>*/}
    {/*      <Menu.Item>*/}
    {/*        Item5s*/}
    {/*      </Menu.Item>*/}
    {/*      <Menu.SubMenu header="SubMenu">*/}
    {/*        <Menu.Item>*/}
    {/*          Item4*/}
    {/*        </Menu.Item>*/}
    {/*        <Menu.Item>*/}
    {/*          Item5s*/}
    {/*        </Menu.Item>*/}
    {/*      </Menu.SubMenu>*/}
    {/*      <Menu.SubMenu header="SubMenu3">*/}
    {/*        <Menu.Group header={'Group'}>*/}
    {/*          <Menu.Item>*/}
    {/*            Item3*/}
    {/*          </Menu.Item>*/}
    {/*          <Menu.Item>*/}
    {/*            Item4*/}
    {/*          </Menu.Item>*/}
    {/*        </Menu.Group>*/}
    {/*      </Menu.SubMenu>*/}
    {/*    </Menu.SubMenu>*/}
    {/*  </Menu>*/}
    {/*</div>*/}

    <div className="doc doc-row">
      {/*for compact the width should set in parent node */}
      <div style={{width: '250px'}}>
        <Menu direction={horizontal ? 'horizontal' : 'vertical'}
              compact={compact}
              popupSubMenu={popupSubMenu}
              type={type}
              block={block}

              hasArrow={hasArrow} icon={<IconHome/>}>
          <Menu.SubMenu header="Navigation One"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item>
              Item1
            </Menu.Item>
            <Menu.Item>
              Item2
            </Menu.Item>
            <Menu.Item>
              Item3
            </Menu.Item>
            <Menu.Item>
              Item4
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu header="Navigation Two"
                        icon={<FontAwesomeIcon icon={faLaptop}/>}>
            <Menu.Item>
              Item5
            </Menu.Item>
            <Menu.Item>
              Item6
            </Menu.Item>
            <Menu.Item>
              Item7
            </Menu.Item>
            <Menu.Item>
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