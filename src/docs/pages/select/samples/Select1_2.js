import React from 'react';
import {Select} from 'react-windy-ui';
import {faCar, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Select1_2() {
  return <>
    <div className="doc doc-row space">
      <Select style={{width: '15rem'}}
              placeholder="Select"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a" icon={<FontAwesomeIcon icon={faPhone}/>}>My Phone</Select.Option>
        <Select.Option value="b" icon={<FontAwesomeIcon icon={faCar}/>}>My Car</Select.Option>
      </Select>
    </div>
  </>;

}