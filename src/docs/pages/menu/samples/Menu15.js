import React, {useState} from 'react';
import {Menu, Radio, RadioGroup} from 'react-windy-ui';
import {faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAndroid, faBuysellads} from '@fortawesome/free-brands-svg-icons';

export default function Menu15() {
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
      <Menu.Item id="item1">
        <Menu.Item.Left><FontAwesomeIcon icon={faAndroid}/></Menu.Item.Left>
        <Menu.Item.Center>Android Mobile Phone</Menu.Item.Center>
        <Menu.Item.Right><FontAwesomeIcon
            icon={faBuysellads}/></Menu.Item.Right>
      </Menu.Item>

    </Menu>
  </>;

}