import React from 'react';
import {Stepper} from "react-windy-ui";

export default function Stepper1() {
  return <>
    <Stepper activeStep={2}>
      <Stepper.Step header="Step One">Step one description</Stepper.Step>
      <Stepper.Step header="Step Two">Step two description</Stepper.Step>
      <Stepper.Step header="Step Three">Step three description</Stepper.Step>
      <Stepper.Step header="Step Four">Step four description</Stepper.Step>
    </Stepper>
  </>
};