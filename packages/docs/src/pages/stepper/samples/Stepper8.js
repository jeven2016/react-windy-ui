import React, {useState} from 'react';
import {Button, Radio, RadioGroup, Stepper} from "react-windy-ui";

export default function Stepper8() {
  const [errorType, setErrorType] = useState('error');
  const [activeStep, setStep] = useState(-1);

  return <>
    <div className="doc doc-row space">
      <RadioGroup value={errorType} button={true} onClick={(val) => setErrorType(val)}>
        <Radio value="error">error</Radio>
        <Radio value="warning">warning</Radio>
        <Radio value="normal">normal</Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Stepper activeStep={activeStep} errorType={errorType} stepDirection="vertical">
        <Stepper.Step title="Step One">Step one description</Stepper.Step>
        <Stepper.Step title="Step Two">Step two description</Stepper.Step>
        <Stepper.Step title="Current Step">Current Step</Stepper.Step>
      </Stepper>
    </div>

    <div className="doc doc-row">
      <Stepper activeStep={activeStep} errorType={errorType} stepDirection="vertical" showErrorIcon={true}
               showIcon={false}>
        <Stepper.Step title="Step One" errorType='error'>Step one description</Stepper.Step>
        <Stepper.Step title="Step Two">Step two description</Stepper.Step>
        <Stepper.Step title="Current Step">Current Step</Stepper.Step>
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