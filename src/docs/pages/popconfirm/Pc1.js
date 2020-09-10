import React from "react";
import {Button, PopConfirm} from 'react-windy-ui';

export default function Pc1() {
  return <PopConfirm body="Are you sure to delete?">
    <Button>Button</Button>
  </PopConfirm>
}