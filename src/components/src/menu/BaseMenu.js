import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import MenuHeader from './MenuHeader';
import {Action, MenuDirection} from './MenuUtils';
import MenuList from './MenuList';
import useMultipleRefs from '../common/UseMultipleRefs';
import {MenuContext} from '../common/Context';
import {execute, includes, isNil} from '../Utils';
import PropTypes from 'prop-types';

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
    popupSubMenuPostion = 'right',
    blockList = false,
    rootMenu = false,
    hasBottomBar = false,
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const {attach, detach, getState} = ctx.store;

  //only works for non popup submenu and the id is not specified
  const [collapse, setCollapse] = useState(null);

  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);
  const [open, setOpen] = useState(includes(getState().openList, id));

  //handle collapsable submenu
  const collapseHandler = useCallback((e) => {
    if (isNil(id)) {
      setCollapse(pre => { setCollapse(!pre); });
      return;
    }
    //the id should exists in the list ,and then it can be removed that means to collapse the panel
    const toCollapse = getState().openList.includes(id);

    const activeType = toCollapse ? Action.closeMenu : Action.openMenu;
    ctx.dispatch({type: activeType, id, e, directChild: ctx.directChild});
  }, [ctx, id, getState]);

  //handle popup submenu
  useEffect(() => {
    if (rootMenu || isNil(id)) {
      return;
    }
    const listener = ({openList}) => {
      const nextOpen = includes(openList, id);
      //to open
      if (nextOpen && !open) {
        setOpen(true);
      }

      //to close
      if (!nextOpen && open) {
        setOpen(false);
      }
    };
    attach(listener);
    return () => {
      detach(listener);
    };
  }, [id, open, setOpen, rootMenu, attach, detach]);

  const timeoutRef = useRef(null);
  const mouseEnterHandler = useCallback((e) => {
    if (!popupSubMenu) {
      return;
    }
    const closeTimeout = timeoutRef.current;
    if (!isNil(closeTimeout)) {
      timeoutRef.current = null;
      clearTimeout(closeTimeout);
    }
    ctx.dispatch({type: Action.openMenu, id, e, directChild: ctx.directChild});
  }, [ctx, id, popupSubMenu]);

  const mouseLeaveHandler = useCallback((e) => {
    if (!popupSubMenu) {
      return;
    }

    //delay some mill-seconds to let mouse enter handler be invoked first
    timeoutRef.current = execute(function() {
      ctx.dispatch({type: Action.closeMenu, id, e});
    }, 50);

  }, [ctx, id, popupSubMenu]);

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
                                    handleCollapse={collapseHandler}
                                    handleMouseEnter={mouseEnterHandler}
                                    handleMouseLeave={mouseLeaveHandler}
                                    menuVisible={open}
                                    hasBottomBar={hasBottomBar}
                                    collapse={isNil(collapse)
                                        ? !open
                                        : collapse}/>}

      <MenuList
          popupSubMenu={popupSubMenu}
          popupSubMenuPostion={popupSubMenuPostion}
          collapse={isNil(collapse) ? !open : collapse}
          content={children}
          handleMouseEnter={mouseEnterHandler}
          handleMouseLeave={mouseLeaveHandler}
          show={open}
          blockList={blockList}
      />

    </div>
  </>;
});

BaseMenu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  popupSubMenu: PropTypes.bool,
  popupSubMenuPostion: PropTypes.string,
  blockList: PropTypes.bool,
  rootMenu: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
};

export default BaseMenu;