import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import {NavbarContext} from '../common/Context';
import useEventCallback from '../common/useEventCallback';

const Switch = React.forwardRef((props, ref) => {
  const {
    className = 'button navbar-switch',
    extraClassName,
    onClick,
    circle = true,
    style = {},
    rippleColor = '#fff',
    autoSwitch = true,
    ...otherProps
  } = props;
  const context = useContext(NavbarContext);

  const click = useEventCallback((e) => {
    if (autoSwitch) {
      context.toggleList && context.toggleList(e);
    }
    onClick && onClick(e);
  });

  const {color, ...otherStyles} = style;
  const others = {style: {...otherStyles}, ...otherProps};
  return <Button inverted
                 className={className}
                 extraClassName={extraClassName}
                 hasBox={false}
                 hasBorder={false}
                 rippleColor={rippleColor}
                 size="large"
                 circle={circle}
                 ref={ref}
                 onClick={click}
                 {...others} />;
});

Switch.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool,
  rippleColor: PropTypes.string,
  autoSwitch: PropTypes.bool,
};

export default Switch;