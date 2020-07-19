import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import {isNil} from './Utils';
import * as PropTypes from 'prop-types';
import {animated, useSpring} from 'react-spring';

const BadgeType = {
  normal: 'normal', dot: 'dot', tag: 'tag',
};

const Color = {
  info: 'info',
  ok: 'ok',
  gray: 'gray',
  warning: 'warning',
  error: 'error',
  dark: 'dark',
};

const Badge = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'badge',
    type = BadgeType.normal,
    children,
    body,
    color = Color.error,
    active = true,
    shake = false,
    shakeDuration = 1000,
    ...otherProps
  } = props;
  const [internalShake, setShake] = useState(true);

  const colorType = Color[color];
  let contentBackground = useMemo(() => {
    if (isNil(colorType) && !isNil(color)) {
      return {background: color};
    }
    return {};
  }, [colorType, color]);

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [colorType]: colorType,
  });

  let badgeContent = body;
  let chd = children;
  if (type === BadgeType.tag) {
    badgeContent = <>{body}{chd}</>;
    chd = null;
  }
  const {x} = useSpring({
    from: {x: 0},
    x: internalShake ? 1 : 0,
    config: {duration: shakeDuration},
  });

  useEffect(() => {
    let timer = null;
    if (shake && active) {
      timer = setInterval(() => {
        setShake(prev => !prev);
      }, shakeDuration * 2);
    }

    return () => {
      if (!isNil(timer)) {
        clearInterval(timer);
      }
    };
  }, [shake, active, shakeDuration]);

  return (
      <div className={clsName} {...otherProps}>
        <animated.div className="content" style={{
          // opacity: x.interpolate({range: [0, 1], output: [0.5, 1]}),
          transform: x.interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.3, 0.9, 1.3, 1.03, 1],
          }).interpolate(val => type === BadgeType.tag
              ? `scale(${val})`
              : `translate(80%, -50%) scale(${val})`),
          display: active ? 'inline-flex' : 'none', ...contentBackground,
        }}>
          {badgeContent}
        </animated.div>
        {chd}
      </div>
  );
});

Badge.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  body: PropTypes.node,
  color: PropTypes.string,
  active: PropTypes.bool,
  shake: PropTypes.bool,
  shakeDuration: PropTypes.number,
};

export default Badge;