import React from 'react';
import {IconHome, Radio, IconSearch} from 'react-windy-ui';

export default function Radio2() {

  return <>
    <Radio checkedColor="purple" uncheckedColor="red">
      purple
    </Radio>

    <Radio checkedColor="green" uncheckedColor="brown">
      green
    </Radio>

    <Radio checkedColor="red" uncheckedColor="yellow">
      red
    </Radio>

    <Radio checkedIcon={<IconHome/>}
           uncheckedIcon={<IconHome/>}>
      Home
    </Radio>

    <Radio checkedIcon={<IconSearch/>}
           uncheckedIcon={<IconSearch/>}>
      Search
    </Radio>
  </>;
}