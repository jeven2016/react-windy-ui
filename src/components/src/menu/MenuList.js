import React, {useContext, useRef} from 'react';
import Collapse from '../collapse/Collapse';
import clsx from 'clsx';
import {animated, useSpring} from 'react-spring';
import {SubMenuDirection} from './MenuUtils';
import {MenuContext} from '../common/Context';
import usePrevious from '../common/UsePrevious';
import PropTypes from 'prop-types';

export default function MenuList(props) {
  const {
    popupSubMenu = false,
    popupSubMenuPosition,
    collapse,
    content,
    startOffset = 20,
    show = false,// pop the submenu
    handleMouseEnter,
    handleMouseLeave,
    blockList = false,
  } = props;
  const ctx = useContext(MenuContext);
  const listRef = useRef(null);

  const itemListClsName = clsx('item-list', {
    'popup-list': popupSubMenu,
    [popupSubMenuPosition]: popupSubMenu && popupSubMenuPosition,
    [ctx.type]: popupSubMenu && ctx.type,
    block: blockList,
  });

  const isBottomPos = SubMenuDirection.bottom.key === popupSubMenuPosition;

  //the criteria:
  // 1. when the menu is compact:
  //    not the first time switched from normal menu to compact menu
  // 2. when is for pop submenu
  //    just use show variable to represent
  const preCompact = usePrevious(ctx.compact);
  const isInitialCompact = preCompact !== ctx.compact && ctx.compact;
  // const showPopup = ctx.compact ? show && !isInitialCompact : show;
  const showPopup = popupSubMenu ? show : ctx.compact && show &&
    !isInitialCompact;

  //this animation is only applied for popup submenu
  const springProps = useSpring({
    from: {offset: startOffset, opacity: 0, disp: 0},
    to: {
      offset: showPopup ? 0 : startOffset,
      opacity: showPopup ? 1 : 0,
      disp: showPopup ? 1 : 0,
    },
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  const interpolateOffset = (offset) => {
    return isBottomPos
      ? `translate3d(0, ${offset}px, 0)`
      : `translate3d(${offset}px, 0, 0)`;
  };

  if (popupSubMenu) {
    return <animated.div ref={listRef} className={itemListClsName}
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         style={{
                           transform: springProps.offset.interpolate(
                             interpolateOffset),
                           opacity: springProps.opacity,
                           display: springProps.disp.interpolate(disp => disp === 0 ? 'none' : 'flex')
                         }}>{content}</animated.div>;
  }

  if (ctx.header && ctx.collapsable) {
    return <Collapse.Panel collapse={collapse}>
      {content}
    </Collapse.Panel>;
  }

  return content;
}

MenuList.propTypes = {
  popupSubMenu: PropTypes.bool,
  popupSubMenuPosition: PropTypes.string,
  collapse: PropTypes.bool,
  content: PropTypes.node,
  startOffset: PropTypes.number,
  show: PropTypes.bool,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  blockList: PropTypes.bool,
};
