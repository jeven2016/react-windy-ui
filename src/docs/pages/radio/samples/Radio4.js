import React from 'react';
import {Radio} from 'react-windy-ui';

export default function Radio4() {
  return <>
    <div className="doc doc-row">
      <Radio defaultChecked>
        Right
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="right">
        Right
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="left">
        Left
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="left">
        Left
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="top">
        Top
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="top">
        Top
      </Radio>
    </div>
    <div className="doc doc-row">
      <Radio defaultChecked alignLabel="bottom">
        Bottom
      </Radio>
      <Radio defaultChecked color="primary" alignLabel="bottom">
        Bottom
      </Radio>
    </div>
  </>;
}