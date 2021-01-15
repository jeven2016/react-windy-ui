import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination3() {

  return <>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}/>
    </div>
    <div className="doc doc-row">
      {/*the button is outlined by default*/}
      <Pagination pageCount={10} hasGo={false} hasPageRange={false}
                  buttonProps={{
                    color: 'blue',
                    outline: false,
                    hasBorder: false,
                    inverted: true,
                    hasBox: false,
                    style: {
                      fontWeight: '500',
                    },
                  }}/>
    </div>
    <div className="doc doc-row">
      <Pagination pageCount={10} hasGo={false}
                  hasPageRange={true}
                  pageRanges={[10, 20, 30, 100]}
                  renderPageRanges={(pageRange) => `${pageRange}条/页`}
                  renderPre={() => <span style={{padding: '0 .5rem'}}>上一页</span>}
                  renderNext={() => <span style={{padding: '0 .5rem'}}>下一页</span>}
                  buttonProps={{
                    type: 'purple',
                    hasOutlineBackground: true,
                    hasBox: false,
                    hasBorder: false,
                  }}/>
    </div>
  </>;
}