import React, {useState} from 'react';
import {Button, IconArrowLeft, IconArrowRight, List, Progress} from "react-windy-ui";

export default function Stepper10() {
  const [activeStep, setStep] = useState(25);

  const next = () => {
    if (activeStep >= 100) {
      return;
    }
    setStep(activeStep + 25);
  }

  const pre = () => {
    if (activeStep <= 0) {
      return;
    }
    setStep(activeStep - 25);
  }

  return <>
    <div className="doc doc-row">
      <List>
        <List.Item
          type="simple"
          icon={<Button inverted hasBox={false} leftIcon={<IconArrowLeft/>} onClick={pre}>Previous</Button>}
          title={<Progress percentValue={activeStep}
                           hasContent={false}
                           hasStripe
                           hasAnimation
                           style={{height: '.25rem', padding: '0 .5rem'}}/>}
          actions={<Button inverted hasBox={false} rightIcon={<IconArrowRight/>} onClick={next}>Next</Button>}
        />
      </List>
    </div>

  </>
};