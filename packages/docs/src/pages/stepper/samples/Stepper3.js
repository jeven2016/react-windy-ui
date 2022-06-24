import React from 'react';
import { Stepper } from 'react-windy-ui';

export default function Stepper3() {
  const desc = `Step description, step description Step description Step description Step description Step description
  Step description Step description Step description Step description Step description Step description Step description
  `;
  return (
    <>
      <div className="doc doc-row">
        <Stepper activeStep={2} direction="vertical">
          <Stepper.Step title="Step One" subtitle="Subtitle">
            {desc}
          </Stepper.Step>
          <Stepper.Step title="Step Two" subtitle="Subtitle">
            {desc}
          </Stepper.Step>
          <Stepper.Step title="Step Three" subtitle="Subtitle">
            {desc}
          </Stepper.Step>
        </Stepper>
      </div>
    </>
  );
}
