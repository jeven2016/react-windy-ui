import React, {useContext, useMemo} from 'react';
import clsx from 'clsx';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {animated, useSpring} from 'react-spring';
import {MenuContext} from '../common/Context';
import {MenuDirection} from './MenuUtils';
import PropTypes from 'prop-types';

const MenuHeader = React.forwardRef((props, ref) => {
  const {
    className = 'menu-header',
    handleCollapse,
    collapse,
    headerType = 'normal',
    icon,//left icon
    arrowIcon = <IconArrowLeft/>,
    popArrowIcon = <IconArrowRight/>,
    handleMouseEnter,
    handleMouseLeave,
    menuVisible,
    hasBottomBar,
  } = props;
  const ctx = useContext(MenuContext);
  const {type, popupSubMenu} = useContext(MenuContext);

  const headerClsName = clsx(className, {
    [type]: type,
    compact: ctx.canCompact && ctx.compact,
    'non-compact': ctx.canCompact && !ctx.compact,
    'with-arrow': ctx.hasArrow,
    'with-bottom-bar': hasBottomBar,
    'active-bar': menuVisible,
    'no-arrow': !ctx.hasArrow,
    'active': menuVisible && popupSubMenu,
    [headerType]: headerType,  //it should be normal / dark(color is white)
  });

  const show = !ctx.compact && ctx.canCompact;

  const springSetting = useMemo(() => ({
    from: {rotation: 0},
    to: {rotation: collapse ? 0 : -90},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [collapse]);

  const springProps = useSpring(springSetting);

  const realIcon = useMemo(() => {
    if (!ctx.hasArrow) {
      return null;
    }
    if (popupSubMenu && MenuDirection.isVertical(ctx.direction)) {
      return <div className="header-icon">{popArrowIcon}</div>;
    }
    return <animated.div className="header-icon"
                         style={{
                           transform: springProps.rotation.interpolate(
                               r => `rotate(${r}deg)`),
                         }}>
      {arrowIcon}
    </animated.div>;
  }, [
    ctx.hasArrow,
    popupSubMenu,
    popArrowIcon,
    springProps,
    arrowIcon,
    ctx.direction]);

  const springConfig = useMemo(() => ({
    from: {opacity: 0, transform: 'scale(0)'},
    to: {opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0)'},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [show]);

  const innerProps = useSpring(springConfig);

  const cnt = () => {
    if (!ctx.canCompact) {
      return <>
        <div className='header-info'>
          {ctx.header ? ctx.header : ' '}
        </div>
        {realIcon}
      </>;
    }

    return !show ? null : <>
      <animated.div className='header-info'
                    style={innerProps}>  {ctx.header}</animated.div>
      {realIcon}</>;
  };

  return <div className={headerClsName}
              onClick={handleCollapse}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
    {
      icon && <div className="header-icon">
        {icon}
      </div>
    }

    {
      cnt()
    }
  </div>;
});

MenuHeader.propTypes = {
  className: PropTypes.string,
  handleCollapse: PropTypes.func,
  collapse: PropTypes.bool,
  headerType: PropTypes.string,
  icon: PropTypes.node,
  arrowIcon: PropTypes.node,
  popArrowIcon: PropTypes.node,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  menuVisible: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
};

export default MenuHeader;