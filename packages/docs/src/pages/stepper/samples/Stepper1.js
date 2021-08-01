import React from 'react';
import {Stepper} from "react-windy-ui";

export default function Stepper1() {
  return <>
    <div className="doc doc-row">
      <Stepper activeStep={2} showIcon={false}>
        <Stepper.Step title="Step One"/>
        <Stepper.Step title="Step Two"/>
        <Stepper.Step title="Step Three"/>
      </Stepper>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={2}>
        <Stepper.Step title="Step One"/>
        <Stepper.Step title="Step Two"/>
        <Stepper.Step title="Step Three"/>
      </Stepper>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={1}>
        <Stepper.Step title="Step One">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two">Step two description</Stepper.Step>
        <Stepper.Step title="Step Three">Step three description</Stepper.Step>
      </Stepper>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={1}>
        <Stepper.Step title="Step One" subtitle="Subtitle">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two" subtitle="Subtitle">Step two description</Stepper.Step>
        <Stepper.Step title="Step Three" subtitle="Subtitle">Step three description</Stepper.Step>
      </Stepper>
    </div>
  </>
};