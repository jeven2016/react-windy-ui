import React, {useContext, useMemo} from 'react';
import clsx from 'clsx';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {useSpring, animated} from 'react-spring';
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
  } = props;

  const {type, popupSubMenu} = useContext(MenuContext);
  const headerClsName = clsx(className, {
    [type]: type,
    'with-arrow': hasArrow,
    'no-arrow': !hasArrow,
    'active': menuVisible,
    [headerType]: headerType,  //it should be normal / dark(color is white)
  });

  const rotation = useMemo(() => {
    return collapse ? 0 : -90;
  }, [collapse]);

  const springSetting = hasArrow && !popupSubMenu ? {
    from: {rotation: 0},
    to: {rotation},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  } : {};

  const springProps = useSpring(springSetting);

  const realIcon = useMemo(() => {
    if (!hasArrow) {
      return null;
    }
    if (popupSubMenu) {
      return popArrowIcon;
    }
    return <animated.div className="header-icon"
                         style={{
                           transform: springProps.rotation.interpolate(
                               r => `rotate(${r}deg)`),
                         }}>
      {arrowIcon}
    </animated.div>;
  }, [hasArrow, popupSubMenu, popArrowIcon, springProps, arrowIcon]);

  return <div className={headerClsName}
              onClick={handleCollapse}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
  >
    {
      icon && <div className="header-icon">
        {icon}
      </div>
    }
    <div className='header-info'>
      {header}
    </div>
    {realIcon}
  </div>;

});

export default MenuHeader;