import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination3() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageLimits={false}
                  buttonProps={{
                    circle: true,
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageLimits={false}
                  buttonProps={{
                    type: 'purple',
                    circle: true,
                    outline: true,
                    hasOutlineBackground: true,
                    hasBox: false,
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageLimits={false}
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
      <Pagination pageCount={10} hasGo={false} hasPageLimits={true}
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