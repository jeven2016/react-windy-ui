import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import MenuHeader from './MenuHeader';
import {Action, MenuDirection} from './MenuUtils';
import MenuList from './MenuList';
import useMultipleRefs from '../common/UseMultipleRefs';
import {MenuContext} from '../common/Context';
import {execute, includes, isNil, preventEvent} from '../Utils';
import PropTypes from 'prop-types';
import useEventCallback from '../common/useEventCallback';

/**
 * SubMenu Component
 */
const BaseMenu = React.forwardRef((props, ref) => {
  const {
    id,
    extraClassName,
    className,
    children,
    icon,
    popupSubMenu = false,
    popupSubMenuPosition = 'right',
    blockList = false,
    rootMenu = false,
    hasBottomBar = false,
    level,
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const {attach, detach, getState} = ctx.store;

  //only works for non popup submenu and the id is not specified
  const [collapse, setCollapse] = useState(null);

  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);
  const [internalOpen, setOpen] = useState(includes(ctx.openList, id));

  const isOpen = useMemo(() => {
    if (ctx.customOpen) {
      return includes(ctx.openList, id)
    }
    return internalOpen
  }, [ctx.customOpen, ctx.openList, internalOpen, id]);

  //handle collapsable submenu
  const collapseHandler = useEventCallback((e) => {
    if (isNil(id)) {
      setCollapse(pre => {
        setCollapse(!pre);
      });
      return;
    }

    if (popupSubMenu && internalRef.current.contains(e.target)) {
      preventEvent(e);//do not fire the document's event listener
      return;
    }

    //the id should exists in the list ,and then it can be removed that means to collapse the panel
    const toCollapse = ctx.customOpen ? ctx.openList.includes(id)
      : getState().openList.includes(id);

    const activeType = toCollapse ? Action.closeMenu : Action.openMenu;
    ctx.dispatch({type: activeType, id, e, directChild: ctx.directChild});
  });

  //handle popup submenu
  useEffect(() => {
    if (rootMenu || isNil(id) || ctx.customOpen) {
      return;
    }
    const listener = ({openList}) => {
      const nextOpen = includes(openList, id);
      //to open
      if (nextOpen && !isOpen) {
        setOpen(true);
      }

      //to close
      if (!nextOpen && isOpen) {
        setOpen(false);
      }
    };
    attach(listener);
    return () => {
      detach(listener);
    };
  }, [id, setOpen, rootMenu, attach, detach, ctx.customOpen, isOpen]);

  const timeoutRef = useRef(null);
  const mouseEnterHandler = useEventCallback((e) => {
    if (!popupSubMenu) {
      return;
    }
    const closeTimeout = timeoutRef.current;
    if (!isNil(closeTimeout)) {
      timeoutRef.current = null;
      clearTimeout(closeTimeout);
    }
    ctx.dispatch({type: Action.openMenu, id, e, directChild: ctx.directChild});
  });

  const mouseLeaveHandler = useEventCallback((e) => {
    if (!popupSubMenu) {
      return;
    }

    //delay some mill-seconds to let mouse enter handler be invoked first
    timeoutRef.current = execute(function () {
      ctx.dispatch({type: Action.closeMenu, id, e});
    }, 50);

  });

  const directionCls = MenuDirection.isVertical(ctx.direction)
    ? MenuDirection.vertical.className
    : MenuDirection.horizontal.className;

  const clsName = clsx(extraClassName, className, directionCls, {
    compact: ctx.canCompact && ctx.compact,
    'non-compact': ctx.canCompact && !ctx.compact,
    'global-with-box': ctx.hasBox,
    'with-border-radius': ctx.hasBorderRadius,
    [ctx.type]: ctx.type,
  });

  return <>
    <div ref={multiRef}
         className={clsName} {...otherProps}>
      {ctx.hasHeader && <MenuHeader icon={icon}
                                    level={level}
                                    handleCollapse={collapseHandler}
                                    onMouseEnter={mouseEnterHandler}
                                    onMouseLeave={mouseLeaveHandler}
                                    menuVisible={isOpen}
                                    hasBottomBar={hasBottomBar}
                                    collapse={isNil(collapse)
                                      ? !isOpen
                                      : collapse}/>}

      <MenuList
        popupSubMenu={popupSubMenu}
        popupSubMenuPosition={popupSubMenuPosition}
        collapse={isNil(collapse) ? !isOpen : collapse}
        content={children}
        handleMouseEnter={mouseEnterHandler}
        handleMouseLeave={mouseLeaveHandler}
        show={isOpen}
        blockList={blockList}
      />

    </div>
  </>;
});

BaseMenu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  icon: PropTypes.node,
  popupSubMenu: PropTypes.bool,
  popupSubMenuPosition: PropTypes.oneOf(['left', 'right', 'bottom']),
  blockList: PropTypes.bool,
  rootMenu: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  level: PropTypes.number,
};

export default BaseMenu;