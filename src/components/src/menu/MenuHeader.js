import React, {useCallback, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {useSpring, animated, useTransition} from 'react-spring';
import {MenuContext} from '../common/Context';

const MenuHeader = React.forwardRef((props, ref) => {
  const {
    className = 'menu-header',
    handleCollapse,
    hasArrow,
    collapse,
    header,
    headerType = 'normal',
    icon,//left icon
    arrowIcon = <IconArrowLeft/>,
    popArrowIcon = <IconArrowRight/>,
    handleMouseEnter,
    handleMouseLeave,
    menuVisible,
    canCompact,
    compact,
  } = props;

  //the popupSubMenu is retrieved from parent that because Menu won't pop the items
  // and it directly passes false for header
  const {type, popupSubMenu} = useContext(MenuContext);
  const headerClsName = clsx(className, {
    [type]: type,
    compact: canCompact && compact,
    'non-compact': canCompact && !compact,
    'with-arrow': hasArrow,
    'no-arrow': !hasArrow,
    'active': menuVisible,
    [headerType]: headerType,  //it should be normal / dark(color is white)
  });

  const springSetting = useMemo(() => ({
    from: {rotation: 0},
    to: {rotation: collapse ? 0 : -90},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [collapse]);

  const springProps = useSpring(springSetting);

  const realIcon = useMemo(() => {
    if (!hasArrow) {
      return null;
    }
    if (popupSubMenu) {
      return <div className="header-icon">{popArrowIcon}</div>;
    }
    return <animated.div className="header-icon"
                         style={{
                           transform: springProps.rotation.interpolate(
                               r => `rotate(${r}deg)`),
                         }}>
      {arrowIcon}
    </animated.div>;
  }, [hasArrow, popupSubMenu, popArrowIcon, springProps, arrowIcon]);

  const show = !compact && canCompact;
  const springConfig = useMemo(() => ({
    from: {opacity: 0, transform: 'scale(0)'},
    to: {opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0)'},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [show]);

  const innerProps = useSpring(springConfig);

  const cnt = () => {
    if (!canCompact) {
      return <>
        <div className='header-info'>
          {header}
        </div>
        {realIcon}
      </>;
    }

    return !show ? null : <>
      <animated.div className='header-info'
                    style={innerProps}>  {header}</animated.div>
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

export default MenuHeader;