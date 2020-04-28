import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio3() {

  return <>
    <Radio defaultChecked disabled checkedColor="purple"
           uncheckedColor="red">
      purple
    </Radio>

    <Radio disabled checkedColor="green"
           uncheckedColor="brown">
      green
    </Radio>

    <Radio disabled>
      red
    </Radio>

  </>;
}