import React from "react";
import {Pagination} from 'react-windy-ui';

export default function Pagination1() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={3}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10}/>
    </div>

    <div className="doc doc-row">
      <Pagination pageCount={20} defaultPage={9}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={50} defaultPage={25}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={50} defaultPage={49}/>
    </div>
  </>;
}