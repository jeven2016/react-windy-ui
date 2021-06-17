import React, {useCallback} from 'react';
import clsx from 'clsx';
import {FixedTypes} from '../common/Constants';
import {isNil} from '../Utils';
import PropTypes from 'prop-types';

const Header = React.forwardRef((props, ref) => {
  const {
    className = 'layout-header',
    extraClassName,
    fixed,
    ...otherProps
  } = props;

  const computeFixedType = useCallback((fixedValue) => {
    const type = FixedTypes.filter(t => t === fixedValue);
    return isNil(type) || type.length === 0 ? '' : 'fixed '
        + type[0];
  }, []);

  const fixedType = computeFixedType(fixed);
  let clsName = clsx(extraClassName, className, {
    [fixedType]: fixedType,
  });

  return <div ref={ref} className={clsName} {...otherProps}/>;
});

Header.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  fixed: PropTypes.oneOf(['top', 'bottom']),
};

export default Header;