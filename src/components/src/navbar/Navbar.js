import React, {useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {EventListener, NavbarFixedTypes} from '../common/Constants';
import clsx from 'clsx';
import {NavbarContext} from '../common/Context';
import useInternalState from '../common/useInternalState';
import useMediaQuery, {Responsive} from '../media_query/UseMediaQuery';
import useEventCallback from '../common/useEventCallback';
import useMultipleRefs from '../common/UseMultipleRefs';
import useEvent from '../common/UseEvent';
import {getScrollTop, isNil} from '../Utils';
import {animated, useSpring} from 'react-spring';

const Navbar = React.forwardRef((props, ref) => {
  const {
    children,
    className = 'navbar',
    extraClassName,
    type = 'normal',
    fixed = false,
    hideOnScroll = false,
    hasBox = true,
    hasBorder = false,
    hasBar = false,
    autoHideList = true,
    defaultExpand = false,
    expand,
    onExpand,
    hasItemBackground = false,
    style,
    mediaQuery = Responsive.sm.max,
    mediaQueryWindow = window,
    ...otherProps
  } = props;
  const navRef = useRef();
  const multiRef = useMultipleRefs(ref, navRef);
  const preScrollTop = useRef(null);
  const [hide, setHide] = useState(false);//whether to hide while scrolling the window

  const {matches: smallWindow} = useMediaQuery(mediaQuery, mediaQueryWindow);

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

  const toggleList = useEventCallback((e) => {
    const next = !expandList;
    if (!customized) {
      setExpand(next);
    }
    onExpand && onExpand(next, e);
  });

  //hide the navbar while scrolling window
  const handleScroll = useEventCallback((e) => {
    if (!hideOnScroll) {
      return;
    }
    const nav = navRef.current;
    if (nav) {
      const rect = nav.getBoundingClientRect();
      const scrollTop = getScrollTop(mediaQueryWindow);

      //detect if the window is scrolling to bottom
      const scrollToBottom = isNil(preScrollTop.current) ||
        (scrollTop > preScrollTop.current);

      //hide the navbar if the window scrolled to bottom for a distance
      if (scrollToBottom && scrollTop > rect.height + 10) {
        //hide the navbar
        !hide && setHide(true);
      }

      //if show the navbar if the window is scrolling to top
      if (!scrollToBottom && hide) {
        setHide(false);
      }
      preScrollTop.current = scrollTop;
    }
  });

  //add event listener to window for window scrolling
  useEvent(EventListener.scroll, handleScroll, hideOnScroll, mediaQueryWindow);

  let fixedType = useMemo(() => NavbarFixedTypes.find(f => f === fixed),
    [fixed]);

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [`fixed ${fixedType}`]: fixedType,
    'global-with-box': hasBox,
    'with-border': hasBorder,
    'auto-hide': autoHideList,
    expand: expandList,
    'small-window': smallWindow,
  });

  const springConfig = useMemo(() => ({
    from: {transform: hide ? 'translateY(-130%)' : 'translateY( 0%)'},
    to: {transform: hide ? 'translateY(-130%)' : 'translateY(0%)'},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [hide]);
  const sprProps = useSpring(springConfig);

  return (
    <NavbarContext.Provider
      value={{
        smallWindow,
        expandList: expandList,
        toggleList: toggleList,
        type: type,
        hasItemBackground,
        hasBar,
      }}>
      <animated.ul className={clsName} style={{
        ...style,
        ...sprProps,
      }} ref={multiRef}{...otherProps}>
        {children}
      </animated.ul>
    </NavbarContext.Provider>
  );
});

Navbar.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  type: PropTypes.oneOf(['primary', 'normal']),   //it can only be blank or 'button' and it has nothing to do with native html type
  fixed: PropTypes.oneOf(['top', 'bottom']), //fixed top or bottom
  hideOnScroll: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBar: PropTypes.bool,
  autoHideList: PropTypes.bool,
  defaultExpand: PropTypes.bool,
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
  hasItemBackground: PropTypes.bool,
  mediaQuery: PropTypes.string,
  mediaQueryWindow: PropTypes.object,
};

export default Navbar;