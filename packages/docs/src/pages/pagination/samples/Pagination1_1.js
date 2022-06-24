import React from 'react';
import { Pagination } from 'react-windy-ui';

export default function Pagination1_1() {
  return (
    <>
      <div className="doc doc-row">
        <Pagination
          pageCount={50}
          defaultPage={5}
          hasPageRange={true}
          pageRanges={[10, 20, 50, 100]}
          defaultPageRange={20}
          onChangeRange={(nextPageRange) => {
            console.log(`current page range is ${nextPageRange}`);
          }}
          hasGo
          onChange={(nextPage, pageRange) => {
            console.log(`current page is ${nextPage}, page range is ${pageRange}`);
          }}
        />
      </div>
    </>
  );
}
