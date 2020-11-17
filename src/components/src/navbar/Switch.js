import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../button';
import {NavbarContext} from '../common/Context';
import {nonNil} from "../Utils";

const Switch = React.forwardRef((props, ref) => {
  const {
    className = 'button switch-btn',
    extraClassName,
    onClick,
    type = 'normal',
    circle = true,
    style = {},
    buttonColor = 'color',
    simplified = false,//todo
    ...otherProps
  } = props;
  const context = useContext(NavbarContext);

  let clsName = clsx(extraClassName, className, {
    'text color-white-hover': type === 'primary',
  });

  const click = useCallback((e) => {
    if (simplified) {
      return;
    }
    context.toggleList && context.toggleList(e);
    onClick && onClick(e);
  }, [simplified, context, onClick]);

  const {color, ...otherStyles} = style;
  const others = {style: {...otherStyles}, ...otherProps};
  return <span style={nonNil(color) ? {color} : null}>
    <Button inverted
            color={buttonColor}
            size="small"
            circle={circle}
            ref={ref}
            onClick={click}
            {...others} />
  </span>;
});

Switch.propTypes = {
  type: PropTypes.oneOf(['primary', 'normal']),   //it can only be blank or 'button' and it has nothing to do with native html type
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  onClick: PropTypes.func,
  circle: PropTypes.bool,
  simplified: PropTypes.bool,
  buttonColor: PropTypes.string,
};

export default Switch;