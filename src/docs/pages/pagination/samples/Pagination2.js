import React, {useState} from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination2() {
  const totalRecords = 1000;
  const [pageRange, setPageRange] = useState(20);
  const [page, setPage] = useState(5);
  const [pageCount, setPageCount] = useState(totalRecords / pageRange);

  const handlePageChange = (nextPage, pageRange, e) => {
    setPage(nextPage);
  }

  const handleRangeChange = (nextPageRange) => {
    setPageRange(nextPageRange);
    setPageCount(totalRecords / nextPageRange);
  }

  return <>
    <div className="doc doc-row">
      <Pagination
          pageCount={pageCount}
          page={page}
          pageRanges={[10, 20, 50, 100]}
          pageRange={pageRange}
          onChangeRange={handleRangeChange}
          hasGo
          onChange={handlePageChange}/>
    </div>
  </>;
}