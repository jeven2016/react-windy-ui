import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {NavbarFixedTypes} from '../common/Constants';
import clsx from 'clsx';
import {NavbarContext} from '../common/Context';
import useInternalState from '../common/useInternalState';

const Navbar = React.forwardRef((props, ref) => {
  const {
    children,
    type = 'normal',
    className = 'navbar',
    fixed,
    hasBox = true,
    hasBorder = false,
    extraClassName,
    expand,
    defaultExpand = false,
    onExpand,
    autoHide = true,
    ...otherProps
  } = props;

  const {
    state: expandList,
    setState: setExpand,
    customized,
  } = useInternalState({
    props,
    stateName: 'expand',
    defaultState: defaultExpand,
    state: expand,
  });

  const toggleList = useCallback(() => {
    if (!customized) {
      setExpand(pre => !pre);
    }
    onExpand && onExpand(!expandList);
  }, [customized, expandList, onExpand, setExpand]);

  let fixedType = useMemo(() => NavbarFixedTypes.find(f => f === fixed),
      [fixed]);

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [`fixed ${fixedType}`]: fixedType,
    'with-box': hasBox,
    'with-border': hasBorder,
    'auto-hide': autoHide,
    expand: expandList,
  });

  return (
      <NavbarContext.Provider
          value={{
            toggleList: toggleList,
            type: type,
          }}>
        <ul className={clsName} {...otherProps} ref={ref}>
          {children}
        </ul>
      </NavbarContext.Provider>
  );
});

Navbar.propTypes = {
  type: PropTypes.oneOf(['primary', 'normal']),   //it can only be blank or 'button' and it has nothing to do with native html type
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  fixed: PropTypes.string, //fixed top or bottom
  hasBox: PropTypes.bool, //fixed top or bottom
  hasBorder: PropTypes.bool, //fixed top or bottom
  expand: PropTypes.bool, //fixed top or bottom
  defaultExpand: PropTypes.bool, //fixed top or bottom
  onExpand: PropTypes.func, //fixed top or bottom
  autoHide: PropTypes.bool, //fixed top or bottom
};

export default Navbar;