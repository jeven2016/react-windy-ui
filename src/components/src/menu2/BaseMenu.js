import React, {useCallback, useMemo, useState} from 'react';
import clsx from 'clsx';
import Collapse from '../collapse/Collapse';
import MenuHeader from './MenuHeader';
import {MenuDirection} from './MenuUtils';
import MenuList from './MenuList';

/**
 * SubMenu Component
 */
const BaseMenu = React.forwardRef((props, ref) => {
  const {
    className,
    header,
    block = false,
    hasBox = true,
    hasBorderRadius = true,
    hasMinWidth = true,
    hasArrow = true,
    direction = 'vertical',//vertical or horizontal
    children,
    type,
    innerPanelStyle,
    icon,
    collapsable = true,// is this menu collapsable
    popupSubMenu = false,
    popupSubMenuPostion = 'right',
    ...otherProps
  } = props;
  const isCollapsed = false;
  const [collapse, setCollapse] = useState(isCollapsed);
  const [visible, setVisible] = useState(false);

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
    'global-with-box': hasBox,
    'with-border-radius': hasBorderRadius,
    'with-min-width': hasMinWidth,
    [type]: type,
  });

  return <>
    <div className={clsName} {...otherProps}>
      {header &&
      <MenuHeader icon={icon}
                  handleCollapse={collapseHandler}
                  handleMouseEnter={mouseEnterHandler}
                  handleMouseLeave={mouseLeaveHandler}
                  hasArrow={hasArrow}
                  menuVisible={visible}
                  collapse={collapse} header={header}
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
          menuType={type}
          innerPanelStyle={innerPanelStyle}
      />

    </div>
  </>;
});

export default BaseMenu;