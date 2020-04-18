import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavBarFixedTypes} from '../common/Constants';
import {isNil} from '../Utils';
import clsx from 'clsx';
import {NavbarContext} from './NavBarCommon';

const NavBar = React.forwardRef((props, ref) => {
  const {
    children,
    type,
    className = 'navbar',
    fixed,
    extraClassName,
    expand,
    ...otherProps
  } = props;

  const [expandList, setExpandList] = useState(null);

  const computeFixedType = (fixed) => {
    const fixedType = NavBarFixedTypes.filter(type => type === fixed);
    return isNil(fixedType) || fixedType.length === 0 ? '' : 'fixed '
        + fixedType[0];
  };

  const toggleList = () => {
    let current = expandList;
    setExpandList(isNil(current) ? !expand : !current);
  };

  let fixedType = computeFixedType(fixed);
  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [fixedType]: fixedType,
    expand: isNil(expandList) ? expand : expandList,
  });

  return (
      <NavbarContext.Provider
          value={{
            toggleList: toggleList,
            type: type,
          }}>
        <ul className={clsName} {...otherProps}>
          {children}
        </ul>
      </NavbarContext.Provider>
  );
});

NavBar.propTypes = {
  type: PropTypes.oneOf(['primary', '']),   //it can only be blank or 'button' and it has nothing to do with native html type
  className: PropTypes.string, //the class name of button
  fixed: PropTypes.string, //fixed top or bottom
};

export default NavBar;