import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination5() {

  return <>
    <div className="doc doc-row" style={{width: '400px'}}>
      <Pagination pageCount={10} simple/>
    </div>

    <div className="doc doc-row" style={{width: '400px'}}>
      <Pagination pageCount={10} simple compact={false} hasGo={true}
                  onChange={(page) => console.log(page)}/>
    </div>

    <div className="doc doc-row" style={{width: '400px'}}>
      <Pagination pageCount={10} simple compact={false}/>
    </div>

    <div className="doc doc-row"
         style={{
           width: '400px',
           background: '#E3E3E5',
           padding: '1rem',
           borderRadius: '.25rem',
         }}>
      <Pagination pageCount={10} simple compact={false}
                  buttonProps={{
                    inverted: true,
                    outline: false,
                    initOutlineColor: false,

                    style: {
                      borderColor: 'transparent',
                      padding: '0 .25rem',
                    },
                  }}
                  renderPre={() => '上一页'}
                  renderNext={() => '下一页'}
                  style={{background: 'white', borderRadius: '.25rem'}}/>
    </div>
  </>;
}