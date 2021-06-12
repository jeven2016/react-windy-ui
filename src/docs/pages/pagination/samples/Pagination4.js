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
                    "Details",
                  ]}
                  rightItems={[
                    <span style={{color: '#333', padding: '0 .5rem'}}>Total: 100 Rows</span>,
                  ]}/>
    </div>
  </>;
}