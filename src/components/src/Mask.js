import React, {useRef} from 'react';
import clsx from 'clsx';
import useMultipleRefs from './common/UseMultipleRefs';
import * as PropTypes from 'prop-types';
import {animated, config, useTransition} from 'react-spring';

const Mask = React.forwardRef((props, ref) => {
  const {
    className = 'mask',
    extraClassName,
    active,
    onClick,
    dark = true,
    ...otherProps
  } = props;
  let drawerRef = useRef();
  const multiRef = useMultipleRefs(drawerRef, ref);

  let clsName = clsx(extraClassName, className, {dark});

  //Transition used for mount/unount components, that means the dom node will be
  //removed & recreated
  const transition = useTransition(active, null, {
    config: config.friction,
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