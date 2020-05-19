import React from 'react';
import Dropdown from '../../../components/src/dropdown';
import {Button} from '../../../components/src';

export default function Dp1() {

  return <>
    <Dropdown title="dropdown">
  </Dropdown>

    <Dropdown activeBy="hover" title={<Button color="primary">Button</Button> }>
    </Dropdown>
    <br/>
    <Button>Button</Button>
    </>

}