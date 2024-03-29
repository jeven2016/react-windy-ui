import React, { useCallback, useImperativeHandle, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import useEventCallback from './useEventCallback';
import { random } from '../Utils';

const defaultRect = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0
};

/**
 * Ripple component
 */
const Ripple = React.forwardRef((props, ref) => {
  const { center, color = '#fff' } = props;
  const rippleRef = React.useRef(null);
  const [rippleArray, setRippleArray] = useState([]);

  useImperativeHandle(ref, () => ({
    start: start,
    stop: stop
  }));

  const stop = useCallback(
    (e) => {
      if (e.type === 'touchend') {
        e.persist();
      }
      setTimeout(() => {
        if (rippleRef.current && rippleArray && rippleArray.length > 0) {
          // remove the a ripple
          setRippleArray((pre) => pre.slice(1));
        }
      }, 100);
    },
    [rippleArray]
  );

  const createRipple = useCallback(
    (params) => {
      const { rippleX, rippleY, rippleSize } = params;
      setRippleArray([
        ...rippleArray,
        {
          key: random(100, 10000000),
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        }
      ]);
    },
    [rippleArray]
  );

  const start = useCallback(
    (e) => {
      const element = rippleRef.current;
      const rect = element ? element.getBoundingClientRect() : defaultRect;

      let rippleX, rippleY, rippleSize;
      if (center || (e.clientX === 0 && e.clientY === 0) || (!e.clientX && !e.touches)) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
        const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
      } else {
        const sizeX = Math.max(Math.abs(element.clientWidth - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs(element.clientHeight - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      }
      createRipple({ rippleX, rippleY, rippleSize });
    },
    [center, createRipple]
  );

  const transitions = useTransition(rippleArray, {
    keys: (item) => item.key,
    from: { opacity: 0.1, transform: 'scale(0)' },
    enter: { opacity: 0.3, transform: 'scale(1)' },
    leave: { opacity: 0 },
    config: { duration: 200 }
  });

  return (
    <div className="ripple" ref={rippleRef}>
      {transitions((style, item) => {
        const { rippleX, key, rippleY, rippleSize } = item;
        return (
          <animated.span
            className="content"
            key={key}
            style={{
              ...style,
              background: color,
              left: rippleX - rippleSize / 2,
              top: rippleY - rippleSize / 2,
              width: rippleSize,
              height: rippleSize
            }}
          />
        );
      })}
    </div>
  );
});

const useRippleCallback = (hasRipple, rippleRef, rippleMethod, callback) => {
  return useEventCallback((e) => {
    if (callback) {
      callback(e);
      e.preventDefault();
    }

    if (hasRipple && rippleRef.current) {
      rippleRef.current[rippleMethod](e);
    }
  });
};

/**
 * update ripple related event listeners
 * @param rippleRef Ripple instance ref
 * @param rootProps the parent node of ripple
 * @param hasRipple whether the ripple is enabled
 * @returns props
 */
const useRippleEvent = ({ rippleRef, rootProps = {}, hasRipple = true }) => {
  const { onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd, onTouchMove, ...others } =
    rootProps;
  const startMethod = 'start',
    stopMethod = 'stop';
  const mouseDownCb = useRippleCallback(hasRipple, rippleRef, startMethod, onMouseDown);

  //todo: mouseUpCb works on mobile browser
  const mouseUpCb = useRippleCallback(hasRipple, rippleRef, stopMethod, onMouseUp);

  const mouseLeaveCb = useRippleCallback(hasRipple, rippleRef, stopMethod, onMouseLeave);

  // const touchStartCb = useRippleCallback(hasRipple, rippleRef, startMethod,
  //   onTouchStart);
  //
  // const touchEndCb = useRippleCallback(hasRipple, rippleRef, stopMethod,
  //   onTouchEnd);
  //
  // const touchMoveCb = useRippleCallback(hasRipple, rippleRef, stopMethod,
  //   onTouchMove);

  return {
    onMouseDown: mouseDownCb,
    onMouseUp: mouseUpCb,
    onMouseLeave: mouseLeaveCb,
    // onTouchStart: touchStartCb,
    // onTouchEnd: touchEndCb,
    // onTouchMove: touchMoveCb,
    ...others
  };
};

Ripple.useRippleEvent = useRippleEvent;
export default Ripple;
