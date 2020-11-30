import React, {useRef, useState} from 'react';
import {animated, useTransition,config} from 'react-spring';

const defaultRect = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
};

const Ripple = React.forwardRef((props, ref) => {
  const {
    center,
    timeout,
    color = '#fff',
    nextRippleKey = 0,
  } = props;
  const rippleRef = React.useRef(null);

  const [rippleArray, setRippleArray] = useState([]);
  const [nextKey, setNextKey] = useState(0);
  const ignoringMousedown = useRef(false);

  const stop = (e) => {
    // clearTimeout(this.startTimeout);

    // if (e.type === 'touchend' && this.startWrapper) {
    if (e.type === 'touchend') {
      // when touchend was triggerd
      // before `createRipple` was fired
      // so we invoke createRipple immediately
      // and schedule for the stop event
      e.persist();
      /*  this.startWrapper();
        this.startWrapper = null;
        this.startTimeout = setTimeout(() => {
          this.stop(e);
        }, 0);
        return;*/
    }

    // this.startWrapper = null;

    if (rippleArray && rippleArray.length) {
      // remove the first ripple
      setRippleArray(pre => pre.slice(1));
    }
  };

  const createRipple = (params) => {
    const {rippleX, rippleY, rippleSize} = params;

    setRippleArray([
      ...rippleArray,
      {
        color: color,
        key: nextRippleKey,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      }
    ]);

    setNextKey(pre => pre + 1);
  };

  const start = (e) => {
    if (e.type === 'mousedown' && ignoringMousedown.current) {
      ignoringMousedown.current = false;
      return;
    }
    if (e.type === 'touchstart') {
      ignoringMousedown.current = true;
    }

    const element = rippleRef.current;
    const rect = element ? element.getBoundingClientRect() : defaultRect;

    let rippleX, rippleY, rippleSize;
    // calculate coordinates of the ripple
    if (center || (e.clientX === 0 && e.clientY === 0) ||
        (!e.clientX && !e.touches)) {
      // place the ripple in the center of the rect
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    // calculate the size of the ripple
    if (center) {
      rippleSize = Math.sqrt(
          (2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
    } else {
      const sizeX = Math.max(
          Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) *
          2 + 2;
      const sizeY = Math.max(
          Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) *
          2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }

    // Execute
    if (e.touches) {
      // delay the ripple effect for touch devices
      // because touchend event always triggers fast enough
      // without the user even noticed the ripple effect

      // the timeout can not be too long as it will become laggy
      const startTimeout = setTimeout(() => {
        createRipple({rippleX, rippleY, rippleSize});
        // this.startWrapper = null;
      }, 80);
    } else {
      createRipple({rippleX, rippleY, rippleSize});
    }
  };

  const transitions = useTransition(rippleArray, null, {
    from: {opacity: 0.1, transform: 'scale(0)'},
    enter: {opacity: 0.4, transform: 'scale(1)'},
    leave: {opacity: 0},
    config: config.gentle
  })

  console.log(rippleArray)
  const AnimatedCr = animated(CircleRipple);
  return <div className='ripple' ref={rippleRef}
              onMouseDown={start}
      onMouseUp={stop}
              onMouseLeave={stop}
              onTouchStart={start}
              onTouchEnd={stop}
              onTouchMove={stop}>
    {
      transitions.map(({item, props}) => {
        const {
          color,
          rippleX,
          key,
          rippleY,
          rippleSize,
        } = item;

        // return <AnimatedCr key={key} {...item} style={props}/>
        return <animated.span
            className="content"
            key={key}
            style={{
              ...props,
              background: color,
              left: rippleX - rippleSize / 2,
              top: rippleY - rippleSize / 2,
              width: rippleSize,
              height: rippleSize,
            }}/>;
      })

    }
  </div>;
});

const CircleRipple = React.forwardRef((props, ref) => {
  const {
    color,
    rippleX,
    style,
    rippleKey,
    rippleY,
    rippleSize,
  } = props;

  console.log(style);
  return <span
      className="content"
      style={{
        ...style,
        background: color,
        left: rippleX - rippleSize / 2,
        top: rippleY - rippleSize / 2,
        width: rippleSize,
        height: rippleSize,
      }}/>;
});

export default Ripple;