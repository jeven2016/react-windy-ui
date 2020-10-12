import React from 'react';
import {Toggle} from 'react-windy-ui';

export default function Toggle2() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive style={{width: '5rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" style={{width: '8rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary" style={{width: '10rem'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary" block/>
    </div>
  </>;
}