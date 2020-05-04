import React, {useContext, useMemo} from 'react';
import BaseMenu from './BaseMenu';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {isNil} from '../Utils';
import {MenuDirection} from './MenuUtils';

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {
    className = 'base-menu',
    header,
    extraClassName,
    collapsable = true,
    directChild = false, //is this submenu the child of Menu
    ...otherProps
  } = props;
  if (isNil(header)) {
    throw new Error('The header is required for SubMenu.');
  }

  const ctx = useContext(MenuContext);
  const clsName = clsx(extraClassName, className, {
    'popup-menu': ctx.popupSubMenu,
  });

  //the submenu should always represent as vertical menu
  const innerCollapsePanelStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  }), []);

  const isCollapsable = useMemo(() => ctx.popupSubMenu ? false : collapsable,
      [ctx, collapsable]);

  const hasBox = useMemo(() => ctx.popupSubMenu, [ctx.popupSubmenu]);

  const subCtx = {...ctx, direction: MenuDirection.vertical.key};

  //the direct child of menu should align the botom of the menu, others should  align right
  const popupSubMenuPostion = ctx.popupSubMenu && directChild
      ? 'bottom'
      : 'right';

  return <MenuContext.Provider value={subCtx}>
    <BaseMenu className={clsName}
              ref={ref}
              hasBox={hasBox && !ctx.popupSubMenu}
              direction="vertical"
              innerPanelStyle={innerCollapsePanelStyle}
              collapsable={isCollapsable}
              popupSubMenu={ctx.popupSubMenu}
              type={ctx.type}
              header={header}
              popupSubMenuPostion={popupSubMenuPostion}
              {...otherProps} />
  </MenuContext.Provider>;
});

export default SubMenu;