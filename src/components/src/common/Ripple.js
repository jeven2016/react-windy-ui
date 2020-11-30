import React, {useRef, useState} from 'react';
import {animated, useTransition, config} from 'react-spring';

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
    color = '#fff',
  } = props;
  const rippleRef = React.useRef(null);

  const [rippleArray, setRippleArray] = useState([]);
  const nextKey = useRef(0);

  const stop = (e) => {
    if (e.type === 'touchend') {
      e.persist();
    }
    if (rippleArray && rippleArray.length) {
      // remove the a ripple
      setRippleArray(pre => pre.slice(1));
    }
  };

  const createRipple = (params) => {
    const {rippleX, rippleY, rippleSize} = params;
    nextKey.current = nextKey.current + 1;
    setRippleArray([
      ...rippleArray,
      {
        key: nextKey.current,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
      },
    ]);
  };

  const start = (e) => {
    const element = rippleRef.current;
    const rect = element ? element.getBoundingClientRect() : defaultRect;

    let rippleX, rippleY, rippleSize;
    if (center || (e.clientX === 0 && e.clientY === 0) ||
        (!e.clientX && !e.touches)) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt(
          (2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
    } else {
      const sizeX = Math.max(
          Math.abs(element.clientWidth - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs(element.clientHeight - rippleY),
          rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }
    createRipple({rippleX, rippleY, rippleSize});
  };

  const transitions = useTransition(rippleArray, null, {
    from: {opacity: 0.1, transform: 'scale(0)'},
    enter: {opacity: 0.4, transform: 'scale(1)'},
    leave: {opacity: 0},
    config: config.gentle,
  });

  return <div className='ripple' ref={rippleRef}
              onMouseDown={start}
              onMouseUp={stop}
              onMouseLeave={stop}
              onTouchStart={start}
              onTouchEnd={stop}
              onTouchMove={stop}>
    {
      transitions.map(({item, props: styleProps}) => {
        const {
          rippleX,
          key,
          rippleY,
          rippleSize,
        } = item;

        return <animated.span
            className="content"
            key={key}
            style={{
              ...styleProps,
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
export default Ripple;