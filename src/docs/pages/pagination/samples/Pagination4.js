import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination4() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={10}
                  buttonProps={{
                    circle: true,
                  }}
                  leftItems={[
                    "1 - 10 Items",
                  ]}
                  rightItems={[
                    <span style={{color: '#333'}}>Total: 100条，50页</span>,
                  ]}/>
    </div>
  </>;
}