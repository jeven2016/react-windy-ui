import React from 'react';
import {Pagination} from 'react-windy-ui';

export default function Pagination5() {

  return <>
    <div className="doc doc-row space" style={{width: '400px'}}>
      <Pagination pageCount={10} simple/>
    </div>

    <div className="doc doc-row space" style={{width: '400px'}}>
      <Pagination pageCount={10} simple compact={true} hasGo={true}
                  onChange={(page) => console.log(page)}/>
    </div>

    <div className="doc doc-row space"
         style={{
           background: '#E3E3E5',
           padding: '1rem',
         }}>

      <div style={{
        padding: '.5rem 0.5rem',
        background: 'white'
      }}>
        <Pagination pageCount={10} simple compact={true}
                    buttonProps={{
                      inverted: true,
                      outline: false,
                      initOutlineColor: false,

                      style: {
                        borderColor: 'transparent',
                        margin: '0 .25rem',
                      },
                    }}
                    renderPre={() => <span style={{margin: '.25rem .5rem'}}>Previous</span>}
                    renderNext={() => <span style={{margin: '.25rem .5rem'}}>Next</span>}/>
      </div>
    </div>
  </>;
}