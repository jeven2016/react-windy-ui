import React, { useRef } from 'react';
import clsx from 'clsx';
import useMultipleRefs from '../common/UseMultipleRefs';
import * as PropTypes from 'prop-types';
import { animated, config, useTransition } from 'react-spring';

const Mask = React.forwardRef((props, ref) => {
  const {
    className = 'mask',
    extraClassName,
    active,
    onClick,
    dark = true,
    children,
    ...otherProps
  } = props;
  let drawerRef = useRef();
  const multiRef = useMultipleRefs(drawerRef, ref);

  let clsName = clsx(extraClassName, className, { dark });

  //Transition used for mount/unmount components, that means the dom node will be
  //removed & recreated
  const transitions = useTransition(active, {
    key: active,
    config: config.friction,
    from: { display: 'none', opacity: 0 },
    enter: (item) => async (next) => {
      await next({ display: '' });
      await next({ opacity: 1 });
    },
    leave: (item) => async (next) => {
      await next({ opacity: 0 });
      await next({ display: 'none' });
    }
  });

  return (
    <>
      {transitions((tranStyles, item) => {
        return (
          item && (
            <animated.div
              ref={multiRef}
              className={clsName}
              style={tranStyles}
              onClick={onClick}
              {...otherProps}>
              {children}
            </animated.div>
          )
        );
      })}
    </>
  );
});

Mask.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default Mask;
