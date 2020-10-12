import React, {useState} from 'react';
import intl from 'react-intl-universal';
import {Button, Badge} from 'react-windy-ui';
import HomeHeader from './HomeHeader';
import HomeIcon from './HomeIcon';
import {useSpring, animated, useTransition} from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1];
const trans = (
    x, y,
    s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function HomeContent() {
  const [props, set] = useSpring(
      () => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40}}));
  const [items] = useState('Windy UI');

  const transitions = useTransition(items, item => item, {
    from: {transform: 'translate3d(0,-80px,0)', opacity: 0},
    enter: {transform: 'translate3d(0,0px,0)', opacity: 1},
    leave: {transform: 'translate3d(0,-80px,0)', opacity: 0},
  });

  return <>
    <div className="doc home">
      <div className="banner-container">
        <HomeHeader transparent/>
        <div className="banner"
        >
          <div className="title text color-white">

            <animated.div onMouseMove={({clientX: x, clientY: y}) => set(
                {xys: calc(x, y)})}
                          onMouseLeave={() => set({xys: [0, 0, 1]})}
                          style={{transform: props.xys.interpolate(trans)}}>
              <HomeIcon style={{
                fontSize: '4rem',
                marginRight: '1rem',
              }}/>
              {
                transitions.map(({item, props, key}) =>
                    <animated.div key={key}
                                  style={{display: 'inline-block', ...props}}>{item}</animated.div>,
                )
              }
            </animated.div>
          </div>
          <div className="content">
            A responsive design system built with React, Wui.
          </div>

          <div className="line">
            <Button type="green" hasMinWidth>Download</Button>
            <Button type="purple" hasMinWidth>Github</Button>
          </div>
          <div className="line">
            <span>Current release</span>
            <Badge type="tag" color="error" style={{marginLeft: '1rem'}}>
              v0.5.0
            </Badge>
          </div>
          <div className="line">&nbsp;</div>
        </div>
      </div>
    </div>

  </>;

}