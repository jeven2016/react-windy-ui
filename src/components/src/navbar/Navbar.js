import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {NavbarFixedTypes} from '../common/Constants';
import clsx from 'clsx';
import {NavbarContext} from '../common/Context';
import useInternalState from '../common/useInternalState';
import useMediaQuery, {Responsive} from '../media_query/UseMediaQuery';
import useEventCallback from '../common/useEventCallback';

const Navbar = React.forwardRef((props, ref) => {
  const {
    id,
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
    mediaQuery = Responsive.sm.max,
    mediaQueryWindow = window,
    autoHide = true,
    ...otherProps
  } = props;
  const {matches: smallWindow} = useMediaQuery(mediaQuery, mediaQueryWindow);

  console.log(`${id}-${smallWindow}`);
  const {
    state: expandList,
    setState: setExpand,
    customized,
  } = useInternalState({
    props,
    stateName: 'expand',
    defaultState: defaultExpand || !smallWindow,
    state: expand,
  });

  const toggleList = useEventCallback(() => {
    const next = !expandList;
    if (!customized) {
      setExpand(next);
    }
    onExpand && onExpand(next);
  });

  let fixedType = useMemo(() => NavbarFixedTypes.find(f => f === fixed),
      [fixed]);

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [`fixed ${fixedType}`]: fixedType,
    'global-with-box': hasBox,
    'with-border': hasBorder,
    'auto-hide': autoHide,
    expand: expandList,
    'small-window': smallWindow,
  });

  return (
      <NavbarContext.Provider
          value={{
            smallWindow,
            expandList: expandList,
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
  mediaQueryWindow: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default Navbar;