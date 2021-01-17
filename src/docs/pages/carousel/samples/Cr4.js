import React, {useState} from 'react';
import {Carousel, Responsive} from 'react-windy-ui';

import pic1 from '../../../style/imgs/pic_p1.jpg';
import pic2 from '../../../style/imgs/pic_p2.jpg';
import pic3 from '../../../style/imgs/pic_p3.jpg';
import pic4 from '../../../style/imgs/pic_p4.jpg';
import pic5 from '../../../style/imgs/pic_p5.jpg';
import useMediaQuery from "../../../../components/src/media_query/UseMediaQuery";


const Introduction = ({index}) => {
  return <div style={{
    position: 'absolute',
    bottom: '4rem',
    color: 'white',
    width: '100%',
  }}>
    <div style={{fontSize: '2rem', textAlign: 'center'}}>{`Picture Title${index}`}</div>
    <div style={{textAlign: 'center'}}>Picture description, your can type something here.</div>
  </div>
}

export default function Cr4() {
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
        <div>
          <img src={pic1} alt="pic1"/>
          <Introduction index={1}/>
        </div>
        <div>
          <img src={pic2} alt="pic2"/>
          <Introduction index={2}/>
        </div>
        <div>
          <img src={pic3} alt="pic3"/>
          <Introduction index={3}/>
        </div>
        <div>
          <img src={pic4} alt="pic4"/>
          <Introduction index={4}/>
        </div>
        <div>
          <img src={pic5} alt="pic5"/>
          <Introduction index={5}/>
        </div>
      </Carousel>
    </div>
  </>;
}