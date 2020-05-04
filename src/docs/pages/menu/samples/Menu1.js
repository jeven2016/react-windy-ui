import React, {useState} from 'react';
import {Menu2, Toggle, IconHome, RadioGroup, Radio} from 'react-windy-ui';

export default function Menu1() {
  const [hasArrow, setHasArrow] = useState(true);
  const [horizontal, setHorizontal] = useState(false);
  const [block, setBlock] = useState(false);
  const [type, setType] = useState('normal');
  const [popupSubMenu, setPopupSubMenu] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle onChange={active => setHasArrow(active)}
              content={{on: 'Arrow', off: 'Arrow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setHorizontal(active)}
              content={{on: 'Horizontal', off: 'Horizontal'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setBlock(active)}
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
      <Toggle onChange={active => setPopupSubMenu(active)}
              content={{on: 'Popup SubMenu', off: 'Popup SubMenu'}}/>
    </div>

   {/* <div className="doc doc-row">
      <Menu2 direction={horizontal ? 'horizontal' : 'vertical'}
             type={type}
             block={block}
             hasArrow={hasArrow} icon={<IconHome/>}>
        <Menu2.Item>
          Item1
        </Menu2.Item>
        <Menu2.Item>
          Item2
        </Menu2.Item>
        <Menu2.Item>
          Item2
        </Menu2.Item>
        <Menu2.SubMenu header="SubMenu">
          <Menu2.Item>
            Item4
          </Menu2.Item>
          <Menu2.Item>
            Item5
          </Menu2.Item>
          <Menu2.Group header={'Group'}>
            <Menu2.Item>
              Item3
            </Menu2.Item>
            <Menu2.Item>
              Item4
            </Menu2.Item>
          </Menu2.Group>
        </Menu2.SubMenu>
      </Menu2>
    </div>*/}

    <div className="doc doc-row">
      <Menu2 direction={horizontal ? 'horizontal' : 'vertical'}
             popupSubMenu={popupSubMenu}
             type={type}
             block={block}
             hasArrow={hasArrow} icon={<IconHome/>}>
        <Menu2.SubMenu header="SubMenu">
          <Menu2.Item>
            Item4
          </Menu2.Item>
          <Menu2.Item>
            Item5
          </Menu2.Item>
          <Menu2.Group header={'Group'}>
            <Menu2.Item>
              Item3
            </Menu2.Item>
            <Menu2.Item>
              Item4
            </Menu2.Item>
          </Menu2.Group>
          <Menu2.SubMenu header="SubMenu">
            <Menu2.Item>
              Item4
            </Menu2.Item>
            <Menu2.Item disabled>
              Item5
            </Menu2.Item>
            <Menu2.Group header={'Group'}>
              <Menu2.Item>
                Item3
              </Menu2.Item>
              <Menu2.Item>
                Item4
              </Menu2.Item>
            </Menu2.Group>
          </Menu2.SubMenu>

        </Menu2.SubMenu>
      </Menu2>
    </div>
  </>;
}