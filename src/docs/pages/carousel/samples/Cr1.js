import React, {useState} from 'react';
import {Carousel} from 'react-windy-ui';

import pic1 from '../../../style/imgs/1.jpg';
import pic2 from '../../../style/imgs/2.jpg';
import pic3 from '../../../style/imgs/3.jpg';
import pic4 from '../../../style/imgs/4.jpg';

const ItemStyle = {
  background: 'green',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '3rem',
  fontWeight: '500',
  overflow: 'hidden',
};
export default function Cr1() {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (index) => {
    setIndex(index);
  };

  return <>
    <div style={{width: '50%'}}>
    <Carousel active={index}
              axis='x'
              hasIndicators={true}
              position="right"
              indicatorType='bar'
              onChange={onChangeIndex}>
      <div style={ItemStyle}>
        <div><img src={pic3}/></div>
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bottom: '1rem',
          fontSize: '1rem',
          fontWeight: '700',
        }}>
          <p>Title 1</p>
        </div>
      </div>
      <div style={ItemStyle}>
        <img src={pic1}/>
      </div>
      <div style={ItemStyle}>
        <img src={pic2}/>
      </div>
      <div style={ItemStyle}>
        <img src={pic3}/>
      </div>
      <div style={ItemStyle}>
        <img src={pic4}/>
      </div>
    </Carousel>
    </div>
  </>;
}