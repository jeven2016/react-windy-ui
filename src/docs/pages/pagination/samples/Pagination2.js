import React from 'react';
import {Pagination, Notification} from 'react-windy-ui';

export default function Pagination2() {

  const changePage = (pageNumber, pageRows, e) => {
    Notification.mini(
        {
          body: `Page=${pageNumber}, rows per page=${pageRows}`,
          position: 'topCenter',
        });
  };

  const changeRowsLimit = (pageRows, e) => {
    Notification.mini(
        {
          body: `Rows per page=${pageRows}`,
          position: 'topCenter',
        });
  };

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={50} hasGo onChange={changePage}
                  onChangeRows={changeRowsLimit}/>
    </div>
  </>;
}