import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination3() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}
                  buttonProps={{
                    circle: true,
                  }}/>
    </div>
    <div className="doc doc-row">
      {/*the button is outlined by default*/}
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}
                  buttonProps={{
                    color: 'blue',
                    outline: false,
                    hasBorder: false,
                    inverted: true,
                    hasBox: false
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}
                  buttonProps={{
                    color: 'purple',
                    outline: false,
                    circle: true,
                    hasBorder: false,
                    inverted: true,
                    hasBox: false
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}
                  buttonProps={{
                    type: 'purple',
                    circle: true,
                    outline: true,
                    hasOutlineBackground: true,
                    hasBox: true,
                    hasBorder: false,
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageRange={true}
                  selectProps={{
                    size: 'medium'
                  }}
                  buttonProps={{
                    type: 'red',
                    inverted: true,
                    circle: true,
                    hasBorder: false,
                    style: {
                      fontWeight: '500',
                    },
                  }}/>
    </div>

  </>;
}