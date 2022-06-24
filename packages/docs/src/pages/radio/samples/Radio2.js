import React from 'react';
import { IconHome, Radio, IconSearch } from 'react-windy-ui';

export default function Radio2() {
  return (
    <>
      <Radio checkedColor="purple" uncheckedColor="red">
        purple
      </Radio>

      <Radio checkedColor="#49b847" uncheckedColor="#af3ce5">
        green
      </Radio>

      <Radio checkedColor="red" uncheckedColor="yellow">
        red
      </Radio>

      <Radio checkedIcon={<IconHome />} uncheckedIcon={<IconSearch />}>
        Search
      </Radio>
    </>
  );
}
