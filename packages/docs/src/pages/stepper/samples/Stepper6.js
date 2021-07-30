import React from 'react';
import {Stepper} from "react-windy-ui";

export default function Stepper6() {
  return <>
    <div className="doc doc-row">
      <Stepper activeStep={2} stepDirection="vertical">
        <Stepper.Step title="Step One">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two">Step two description</Stepper.Step>
        <Stepper.Step title="Step Three">Step three description</Stepper.Step>
        <Stepper.Step title="Step Four">Step four description</Stepper.Step>
      </Stepper>
    </div>

    <div className="doc doc-row">
      <Stepper activeStep={1} dotIcon={true} stepDirection="vertical">
        <Stepper.Step title="Step One">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two">Step two description</Stepper.Step>
        <Stepper.Step title="Step Three">Step three description</Stepper.Step>
        <Stepper.Step title="Step Four">Step four description</Stepper.Step>
      </Stepper>
    </div>
  </>
};