import React from 'react';
import {Loader} from 'react-windy-ui';

export default function Loader2() {

  return <>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Loader active type="primary" size="small" text="Loading"
              style={{marginRight: '1rem'}}/>
      <Loader active type="secondary" size="medium" text="Loading"
              style={{marginRight: '1rem'}}/>
      <Loader active type="third" size="large" text="Loading"
              style={{marginRight: '1rem'}}/>
    </div>
  </>;
}