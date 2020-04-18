import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import useMounted from '../common/UseMounted';
import {animated, config, useSpring, useTransition} from 'react-spring';

import useResizeObserver from '../common/UseResizeObserver';
import usePrevious from '../common/UsePrevious';

function initAnimation(collapse, height) {
  const from = {
    overflow: 'hidden',
    visibility: 'hidden',
    opacity: 0,
    height: 0,
    transform: 'translate3d(0px, 0px, 0px)',
  };
  const to = {
    opacity: collapse ? 0 : 1,
    height: collapse ? 0 : height,
    visibility: collapse ? 'hidden' : 'visible',
  };
  return {from, to};
}

const CollapsePanel = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    collapse = true,
    className = 'collapse-panel',
    children,
    value,
    style,
    ...otherProps
  } = props;
  const mountRef = useMounted();
  const showAnimation = mountRef.current && !collapse;

  const clsName = clsx(extraClassName, className);
  const panelRef = useRef(null);
  const [panelRect, setPanelRect] = useState({height: 0});

  useResizeObserver(panelRef, rect => setPanelRect({height: rect.height}));

  const tran = useTransition(showAnimation, null, {
    from: {opacity: 0, height: 0,
      // transform: 'translate3d(10px, 0px, 0px)'
    },
    enter: {
      opacity: 1,
      height: panelRef.height,
      // transform: 'translate3d(0px, 0px, 0px)',
    },
    leave: (item) => async (next, cancel) => {
      await next(
          {opacity: 0, height: 0,
            // transform: 'translate3d(10px, 0px, 0px)'
          });
      // await next({visibility: 'hidden', overflow: 'hidden'});
    },
    config: {
      tension: 180,
      friction: 26,
    },
  });

  return tran.map((item, springProps) => {
        let divStyle = {...style, ...springProps};
        return !collapse && <animated.div className={clsName}
                                          ref={ref}
                                          style={divStyle}
                                          {...otherProps}>
          <div ref={panelRef}>
            {children}
          </div>
        </animated.div>;
      },
  );
});

export default CollapsePanel;