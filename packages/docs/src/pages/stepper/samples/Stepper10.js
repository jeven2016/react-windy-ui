import React, {useState} from 'react';
import {Stepper} from "react-windy-ui";

export default function Stepper10() {
  const [activeStep, setStep] = useState(-1);

  return <>
    <div className="doc doc-row">
      <Stepper activeStep={activeStep} onClick={(step) => setStep(step)}>
        <Stepper.Step title="Step One" status="processing" disabled>Step one description</Stepper.Step>
        <Stepper.Step title="Step Two" status="processing" disabled>Step two description</Stepper.Step>
        <Stepper.Step title="Current Step" status="processing">Current Step</Stepper.Step>
      </Stepper>
    </div>
  </>
};