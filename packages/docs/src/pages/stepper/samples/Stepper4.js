import React from 'react';
import { Stepper } from 'react-windy-ui';

export default function Stepper4() {
  const desc = `Step description`;
  return (
    <>
      <div className="doc doc-row">
        <Stepper activeStep={1} dotIcon={true}>
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

      <div className="doc doc-row">
        <Stepper activeStep={1} dotIcon={true} direction="vertical">
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
