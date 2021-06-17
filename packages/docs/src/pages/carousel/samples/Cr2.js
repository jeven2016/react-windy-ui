import React, {useState} from 'react';
import {Carousel, Responsive} from 'react-windy-ui';

import pic1 from '../../../style/imgs/pic_p1.jpg';
import pic2 from '../../../style/imgs/pic_p2.jpg';
import pic3 from '../../../style/imgs/pic_p3.jpg';
import pic4 from '../../../style/imgs/pic_p4.jpg';
import pic5 from '../../../style/imgs/pic_p5.jpg';
import {useMediaQuery} from "react-windy-ui";

export default function Cr2() {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (index) => {
    setIndex(index);
  };

  const {matches: smallWindow} = useMediaQuery(Responsive.sm.max);
  const width = smallWindow ? '100%' : '640px';
  const height = '427px';

  return <>
    <div className="doc doc-row">
      <Carousel active={index} style={{width: width, height: height}}
                onChange={onChangeIndex}>
        <img src={pic1} alt="pic1"/>
        <img src={pic2} alt="pic2"/>
        <img src={pic3} alt="pic3"/>
        <img src={pic4} alt="pic4"/>
        <img src={pic5} alt="pic5"/>
      </Carousel>
    </div>
  </>;
}