import React, {useContext, useMemo} from 'react';
import BaseMenu from './BaseMenu';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {MenuDirection, SubMenuDirection} from './MenuUtils';
import PropTypes from 'prop-types';

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {
    id,
    hasBottomBar,
    className = 'base-menu',
    header,
    extraClassName,
    directChild = false, //is this submenu the child of Menu
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const clsName = clsx(extraClassName, className, {
    'popup-menu': ctx.popupSubMenu,
  });

  const isCollapsable = useMemo(
      () => ctx.popupSubMenu ? false : ctx.collapsable,
      [ctx]);

  const subCtx = {
    ...ctx,
    directChild,
    header: header,
    hasBox: ctx.popupSubMenu && !ctx.popupSubMenu,
    canCompact: directChild,
    collapsable: isCollapsable,
    direction: MenuDirection.vertical.key,
    hasHeader: true,
  };

  //the direct child of menu should align the botom of the menu, others should  align right
  const popupSubMenuPosition = useMemo(() => {
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
  const blockList = SubMenuDirection.isBottom(popupSubMenuPosition);

  return <MenuContext.Provider value={subCtx}>
    <BaseMenu className={clsName}
              hasBottomBar={hasBottomBar}
              ref={ref}
              id={id}
              rootMenu={false}
              popupSubMenu={ctx.popupSubMenu} //the submenu can pops the items list
              popupSubMenuPosition={popupSubMenuPosition}
              blockList={blockList}
              {...otherProps} />
  </MenuContext.Provider>;
});

SubMenu.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  icon: PropTypes.node,
  popupSubMenu: PropTypes.bool,
  popupSubMenuPosition: PropTypes.string,
  blockList: PropTypes.bool,
  rootMenu: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
};

export default SubMenu;