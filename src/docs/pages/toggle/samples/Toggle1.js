import React from 'react';
import {Toggle} from 'react-windy-ui';

export default function Toggle1() {
  return <>
    <div className="doc doc-row">
      <Toggle defaultActive={false}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="primary"/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive type="secondary"/>
    </div>
  </>;
}