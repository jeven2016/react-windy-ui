import React from 'react';
import {IconAccount, Loader, Stepper} from "react-windy-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAudible} from "@fortawesome/free-brands-svg-icons";
import {faBusAlt} from "@fortawesome/free-solid-svg-icons";

export default function Stepper2() {
  return <>
    <div className="doc doc-row">
      <Stepper activeStep={1} borderedIcon={false}>
        <Stepper.Step title="Step One" icon={<IconAccount/>}/>
        <Stepper.Step title="Step Two" icon={<Loader size="small" type="primary" active={true}/>}/>
        <Stepper.Step title="Step Three" icon={<FontAwesomeIcon icon={faAudible}/>}/>
        <Stepper.Step title="Step Four" icon={<FontAwesomeIcon icon={faBusAlt}/>}/>
      </Stepper>
    </div>
  </>
};