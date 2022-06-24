import React from 'react';
import { Checkbox } from 'react-windy-ui';

export default function Checkbox4() {
  return (
    <>
      <Checkbox defaultChecked disabled checkedColor="purple" uncheckedColor="red">
        purple
      </Checkbox>

      <Checkbox defaultChecked disabled checkedColor="green" uncheckedColor="brown">
        green
      </Checkbox>

      <Checkbox disabled>red</Checkbox>
    </>
  );
}
