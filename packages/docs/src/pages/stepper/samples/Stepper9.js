import React, {useState} from 'react';
import {Button, Stepper} from "react-windy-ui";

export default function Stepper9() {
  const [activeStep, setStep] = useState(-1);

  return <>
    <div className="doc doc-row">
      <Stepper activeStep={activeStep} stepDirection="vertical" onClick={(step) => setStep(step)}>
        <Stepper.Step title="Step One" status="processing">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two" status="processing">Step two description</Stepper.Step>
        <Stepper.Step title="Current Step" status="processing">Current Step</Stepper.Step>
      </Stepper>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={activeStep} stepDirection="vertical" onClick={(step) => setStep(step)}>
        <Stepper.Step title="Step One" status="todo" disabled={false}>Step one description</Stepper.Step>
        <Stepper.Step title="Step Two" status="todo" disabled={false}>Step two description</Stepper.Step>
        <Stepper.Step title="Current Step" status="todo" disabled={false}>Current Step</Stepper.Step>
      </Stepper>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={activeStep} stepDirection="vertical" onClick={(step) => setStep(step)}>
        <Stepper.Step title="Step One" status="finished" disabled={false}>Step one description</Stepper.Step>
        <Stepper.Step title="Step Two" status="finished" disabled={false}>Step two description</Stepper.Step>
        <Stepper.Step title="Current Step" status="finished" disabled={false}>Current Step</Stepper.Step>
      </Stepper>
    </div>

    <div className="doc doc-row">
      <Button type="primary" onClick={() => {
        const next = activeStep + 1;
        setStep(next > 2 ? -1 : next);
      }}>Change</Button>
    </div>

  </>
};