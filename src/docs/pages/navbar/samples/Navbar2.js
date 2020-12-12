import React, {useState} from 'react';
import {Dropdown, Navbar, Toggle} from 'react-windy-ui';
import {Button, IconList, Tooltip} from '../../../../components/src';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {IconArrowDropDown} from '../../../../components/src/Icons';

export default function Navbar2() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} label='Background'
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                label='Bottom Bar'
                onChange={(val) => setBottomBar(val)}/>
      </div>
    </div>

    <Navbar type="primary" hasBorder={false}>
      <Navbar.Title>
        <Navbar.Switch>
          <IconList/>
        </Navbar.Switch>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          <Dropdown activeBy="hover" title={<div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            Profile<IconArrowDropDown/>
          </div>} position="bottomRight">
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
        <Navbar.Item hasBackground={false} hasBar={false} alignRight={true}>
          <Tooltip body="Twitter">
            <Button size="large" circle>
              <FontAwesomeIcon icon={faTwitter}/>
            </Button>
          </Tooltip>
          <Tooltip body="Github">
            <Button size="large" circle>
              <FontAwesomeIcon icon={faGithub}/>
            </Button>
          </Tooltip>
          <Dropdown title={<Button>Dropdown</Button>}>
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}