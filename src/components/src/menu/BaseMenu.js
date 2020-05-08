import React, {useCallback, useRef, useState} from 'react';
import clsx from 'clsx';
import MenuHeader from './MenuHeader';
import {MenuDirection} from './MenuUtils';
import MenuList from './MenuList';
import useMultipleRefs from '../common/UseMultipleRefs';

/**
 * SubMenu Component
 */
const BaseMenu = React.forwardRef((props, ref) => {
  const {
    className,
    header,
    block = true,
    hasBox = true,
    hasBorderRadius = true,
    hasArrow = true,
    direction = 'vertical',//vertical or horizontal
    children,
    type,
    icon,
    collapsable = true,// is this menu collapsable
    popupSubMenu = false,
    popupSubMenuPostion = 'right',
    hasHeader,
    blockList = false,
    canCompact = false,
    compact,
    animateCompact = false,
    rootMenu = false,
    ...otherProps
  } = props;
  const isCollapsed = true;
  const [collapse, setCollapse] = useState(isCollapsed);//only works for non popup submenu
  const [visible, setVisible] = useState(false);
  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);

  const collapseHandler = useCallback(() => {
    setCollapse(pre => { setCollapse(!pre); });
  }, []);

  const mouseEnterHandler = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const mouseLeaveHandler = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const directionCls = MenuDirection.isVertical(direction)
      ? MenuDirection.vertical.className
      : MenuDirection.horizontal.className;

  const clsName = clsx(className, directionCls, {
    block,
    compact: canCompact && compact,
    'non-compact': canCompact && !compact,
    'global-with-box': hasBox,
    'with-border-radius': hasBorderRadius,
    [type]: type,
  });

  return <>
    <div ref={multiRef}
         className={clsName} {...otherProps}>
      {hasHeader && <MenuHeader icon={icon}
                                handleCollapse={collapseHandler}
                                handleMouseEnter={mouseEnterHandler}
                                handleMouseLeave={mouseLeaveHandler}
                                hasArrow={hasArrow}
                                menuVisible={visible}
                                canCompact={canCompact}
                                compact={compact}
                                collapse={collapse}
                                header={header}
                                headerType="normal"/>}

      <MenuList
          popupSubMenu={popupSubMenu}
          popupSubMenuPostion={popupSubMenuPostion}
          collapsable={header && collapsable}
          collapse={collapse}
          content={children}
          handleMouseEnter={mouseEnterHandler}
          handleMouseLeave={mouseLeaveHandler}
          show={visible}
          blockList={blockList}
          menuType={type}
      />

    </div>
  </>;
});

export default BaseMenu;