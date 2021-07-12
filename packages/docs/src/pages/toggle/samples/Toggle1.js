import React from 'react';
import {Toggle} from 'react-windy-ui';

export default function Toggle1() {
  return <>
    <div className="doc doc-row">
      <Toggle/>
    </div>
    <div className="doc doc-row">
      <Toggle type="normal"/>
    </div>
    <div className="doc doc-row">
      <Toggle type="primary"/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary"/>
    </div>
  </>;
}