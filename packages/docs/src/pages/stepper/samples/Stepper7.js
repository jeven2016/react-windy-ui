import React, { useState } from 'react';
import { Radio, RadioGroup, Stepper } from 'react-windy-ui';

export default function Stepper7() {
  const [errorType, setErrorType] = useState('error');

  return (
    <>
      <div className="doc doc-row space">
        <RadioGroup value={errorType} button={true} onChange={(val) => setErrorType(val)}>
          <Radio value="error">error</Radio>
          <Radio value="warning">warning</Radio>
        </RadioGroup>
      </div>
      <div className="doc doc-row">
        <Stepper activeStep={2} errorType={errorType} stepDirection="vertical">
          <Stepper.Step title="Step One">Step one description</Stepper.Step>
          <Stepper.Step title="Step Two">Step two description</Stepper.Step>
          <Stepper.Step title="Step Three">Step three description</Stepper.Step>
        </Stepper>
      </div>

      <div className="doc doc-row">
        <Stepper
          activeStep={1}
          errorType={errorType}
          dotIcon={true}
          stepDirection="vertical"
          solidDot={true}
        >
          <Stepper.Step title="Step One">Step one description</Stepper.Step>
          <Stepper.Step title="Step Two">Step two description</Stepper.Step>
          <Stepper.Step title="Step Three">Step three description</Stepper.Step>
        </Stepper>
      </div>
    </>
  );
}
