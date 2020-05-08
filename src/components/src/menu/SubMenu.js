import React, {useContext, useMemo} from 'react';
import BaseMenu from './BaseMenu';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {isNil} from '../Utils';
import {MenuDirection, SubMenuDirection} from './MenuUtils';

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
    // throw new Error('The header is required for SubMenu.');
  }

  const ctx = useContext(MenuContext);
  const clsName = clsx(extraClassName, className, {
    'popup-menu': ctx.popupSubMenu,
  });

  const isCollapsable = useMemo(() => ctx.popupSubMenu ? false : collapsable,
      [ctx, collapsable]);

  const hasBox = useMemo(() => ctx.popupSubMenu, [ctx.popupSubMenu]);

  const subCtx = {...ctx, direction: MenuDirection.vertical.key};

  //the direct child of menu should align the botom of the menu, others should  align right
  const popupSubMenuPostion = useMemo(() => {
    if (!ctx.popupSubMenu) {
      return null;
    }

    //for horizontal, the direct child should display under the header
    if (!MenuDirection.isVertical(ctx.direction)
        && directChild) {
      return SubMenuDirection.bottom.key;
    }
    return SubMenuDirection.right.key;
  }, [ctx, directChild]);

  //if it is a direct child the width should be set to 'block' otherwise just ignore it
  const blockList = SubMenuDirection.isBottom(popupSubMenuPostion);

  return <MenuContext.Provider value={subCtx}>
    <BaseMenu className={clsName}
              ref={ref}
              hasHeader={true}
              hasBox={hasBox && !ctx.popupSubMenu}
              direction="vertical"
              collapsable={isCollapsable}
              popupSubMenu={ctx.popupSubMenu} //the submenu can pops the items list
              popupSubMenuPostion={popupSubMenuPostion}
              hasArrow={ctx.hasArrow}
              canCompact={directChild}
              compact={ctx.compact}
              type={ctx.type}
              header={header}
              blockList={blockList}
              {...otherProps} />
  </MenuContext.Provider>;
});

export default SubMenu;