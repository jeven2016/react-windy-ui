import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination1() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={3} hasPageLimits={false}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={50} defaultPage={49}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={50} defaultPage={49} siblingCount={1}/>
    </div>
  </>;
}