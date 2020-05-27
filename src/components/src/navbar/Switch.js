import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../button';
import {NavbarContext} from './NavBarCommon';

const Switch = React.forwardRef((props, ref) => {
  const {
    className = 'button navbar-switch bg-transparent',
    onClick,
    type,
    extraClassName,
    ...otherProps
  } = props;
  const context = useContext(NavbarContext);

  let clsName = clsx(extraClassName, className,
      {'text color-white-hover': type === 'primary'});

  const click = useCallback((e) => {
    if (onClick) {
      onClick(e);
    } else {
      context.toggleList(e);
    }
  }, [onClick, context]);

  return <Button className={clsName}
                 ref={ref}
                 onClick={click}
                 {...otherProps}/>;
});

Switch.propTypes = {
  type: PropTypes.oneOf(['primary', '']),   //it can only be blank or 'button' and it has nothing to do with native html type
  className: PropTypes.string, //the class name of button
};

export default Switch;