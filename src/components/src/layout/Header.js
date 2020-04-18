import React from 'react';
import clsx from 'clsx';
import {FixedTypes} from '../common/Constants';
import {isNil} from '../Utils';

const Header = React.forwardRef((props, ref) => {
  const {
    className = 'layout-header',
    extraClassName,
    fixed,
    ...otherProps
  } = props;

  const computeFixedType = (fixed) => {
    const type = FixedTypes.filter(type => type === fixed);
    return isNil(type) || type.length === 0 ? '' : 'fixed '
        + type[0];
  };

  const fixedType = computeFixedType(fixed);
  let clsName = clsx(extraClassName, className, {
    [fixedType]: fixedType,
  });

  return <div className={clsName} {...otherProps}/>;
});

export default Header;