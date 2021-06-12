import React, {useState} from 'react';
import {Carousel, Responsive, Select, Toggle} from 'react-windy-ui';

import pic1 from '../../../style/imgs/pic_p1.jpg';
import pic2 from '../../../style/imgs/pic_p2.jpg';
import pic3 from '../../../style/imgs/pic_p3.jpg';
import pic4 from '../../../style/imgs/pic_p4.jpg';
import pic5 from '../../../style/imgs/pic_p5.jpg';
import useMediaQuery from "../../../../components/src/media_query/UseMediaQuery";

export default function Cr3() {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (index) => {
    setIndex(index);
  };

  const [indicatorType, setIndicatorType] = useState('circle');
  const [position, setPosition] = useState('bottom');

  const {matches: smallWindow} = useMediaQuery(Responsive.sm.max);
  const width = smallWindow ? '100%' : '640px';
  const height = '427px';

  return <>
    <div className="doc doc-row space">
      <Toggle active={indicatorType === 'circle'} label={{on: 'circle', off: 'bar'}}
              onChange={on => setIndicatorType(on ? 'circle' : 'bar')}/>
    </div>

    <div className="doc doc-row space">
      <Select value={position} onChange={val => setPosition(val)}>
        <Select.Option value="bottom">Position: bottom</Select.Option>
        <Select.Option value="top">Position: top</Select.Option>
        <Select.Option value="left">Position: left</Select.Option>
        <Select.Option value="right">Position: right</Select.Option>
      </Select>
    </div>

    <div className="doc doc-row">
      <Carousel active={index} style={{width: width, height: height}}
                onChange={onChangeIndex}
                position={position}
                indicatorType={indicatorType}>
        <img src={pic1} alt="pic1"/>
        <img src={pic2} alt="pic2"/>
        <img src={pic3} alt="pic3"/>
        <img src={pic4} alt="pic4"/>
        <img src={pic5} alt="pic5"/>
      </Carousel>
    </div>
  </>;
}