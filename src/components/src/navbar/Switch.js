import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../button';
import {NavbarContext} from '../common/Context';

const Switch = React.forwardRef((props, ref) => {
  const {
    className = 'button navbar-switch bg-transparent',
    extraClassName,
    onClick,
    type = 'normal',
    circle = true,
    ...otherProps
  } = props;
  const context = useContext(NavbarContext);

  let clsName = clsx(extraClassName, className, {
    'text color-white-hover': type === 'primary',
  });

  const click = useCallback((e) => {
    context.toggleList && context.toggleList(e);
    onClick && onClick(e);
  }, [onClick, context]);

  return <Button className={clsName}
                 size="small"
                 circle={circle}
                 ref={ref}
                 onClick={click}
                 {...otherProps}/>;
});

Switch.propTypes = {
  type: PropTypes.oneOf(['primary', 'normal']),   //it can only be blank or 'button' and it has nothing to do with native html type
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  onClick: PropTypes.func,
  circle: PropTypes.bool,
};

export default Switch;