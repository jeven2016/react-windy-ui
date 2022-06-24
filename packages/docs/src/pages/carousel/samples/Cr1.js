import React from 'react';
import { Carousel } from 'react-windy-ui';

const ItemStyle = {
  background: '#0ca0ff',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '4rem'
};
export default function Cr1() {
  const onChangeIndex = (index) => {
    console.log(index);
  };

  return (
    <>
      <div className="doc doc-row">
        <Carousel defaultActive={0} onChange={onChangeIndex}>
          <div style={ItemStyle}>1</div>
          <div style={ItemStyle}>2</div>
          <div style={ItemStyle}>3</div>
          <div style={ItemStyle}>4</div>
        </Carousel>
      </div>
    </>
  );
}
