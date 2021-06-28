import React from 'react';
import {Checkbox} from 'react-windy-ui';

export default function Checkbox6() {
  return <>
    <div className="doc doc-row">
      <Checkbox defaultChecked>
        Right
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="right">
        Right
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="left">
        Left
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="left">
        Left
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="top">
        Top
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="top">
        Top
      </Checkbox>
    </div>
    <div className="doc doc-row">
      <Checkbox defaultChecked alignLabel="bottom">
        Bottom
      </Checkbox>
      <Checkbox defaultChecked color="primary" alignLabel="bottom">
        Bottom
      </Checkbox>
    </div>
  </>;
}