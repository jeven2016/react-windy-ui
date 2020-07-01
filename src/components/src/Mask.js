import React, {useRef} from 'react';
import clsx from 'clsx';
import useMultipleRefs from './common/UseMultipleRefs';
import * as PropTypes from 'prop-types';
import {animated, useTransition} from 'react-spring';

const Mask = React.forwardRef((props, ref) => {
  const {
    className = 'mask',
    extraClassName,
    active,
    onClick,
    ...otherProps
  } = props;
  let drawerRef = useRef();
  const multiRef = useMultipleRefs(drawerRef, ref);

  let clsName = clsx(extraClassName, className);

  //Transition used for mount/unount components, that means the dom node will be
  //removed & recreated
  const transition = useTransition(active, null, {
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
    from: {display: 'none', opacity: 0},
    enter: item => async next => {
      await next({display: ''});
      await next({opacity: 1});
    },
    leave: item => async next => {
      await next({opacity: 0});
      await next({display: 'none'});
    },
  });

  return <>
    {
      transition.map(tranProps => {
        return tranProps.item &&
            <animated.div ref={multiRef} className={clsName} key={tranProps.key}
                          style={tranProps.props}
                          onClick={onClick} {...otherProps}/>;
      })
    }
  </>;
});

Mask.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Mask;