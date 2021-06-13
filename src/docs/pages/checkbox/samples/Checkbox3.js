import React from 'react';
import {Checkbox, IconHome} from 'react-windy-ui';
import {IconSearch} from 'react-windy-ui';

export default function Checkbox3() {

  return <>
    <Checkbox defaultChecked checkedColor="purple" uncheckedColor="red">
      purple
    </Checkbox>

    <Checkbox defaultChecked checkedColor="green" uncheckedColor="brown">
      green
    </Checkbox>

    <Checkbox defaultChecked checkedColor="red" uncheckedColor="yellow">
      red
    </Checkbox>

    <Checkbox defaultChecked checkedIcon={<IconHome/>}
              uncheckedIcon={<IconHome/>}>
      Home
    </Checkbox>

    <Checkbox defaultChecked checkedIcon={<IconSearch/>}
              uncheckedIcon={<IconSearch/>}>
      Search
    </Checkbox>
  </>;
}