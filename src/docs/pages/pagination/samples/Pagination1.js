import React from 'react';
import {Pagination, Responsive, useMediaQuery} from 'react-windy-ui';

export default function Pagination1() {

  const {matches: smallWindow} = useMediaQuery(Responsive.sm.max);

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={3} hasPageRange={false}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={50} defaultPage={5} hasPageRange={false}
                  siblingCount={smallWindow ? 1 : 2}/>
    </div>
    <div className="doc doc-row" style={{marginTop: smallWindow ? '4rem' : 0}}>
      <Pagination pageCount={50} defaultPage={49} siblingCount={1}/>
    </div>
  </>;
}