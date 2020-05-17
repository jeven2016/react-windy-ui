import React, {useCallback, useContext, useRef} from 'react';
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
    popupSubMenuPostion,
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
    [popupSubMenuPostion]: popupSubMenu && popupSubMenuPostion,
    [ctx.type]: popupSubMenu && ctx.type,
    block: blockList,
  });

  const isBottomPos = SubMenuDirection.bottom.key === popupSubMenuPostion;

  const change = useCallback((condition, value) => {
    if (condition) {
      const div = listRef.current;
      if (div) {
        div.style.display = value;
      }
    }
  }, [listRef]);

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

  const preUpdate = useCallback(() => change(showPopup, 'flex'),
      [change, showPopup]);
  const postUpdate = useCallback(() => change(!showPopup, 'none'),
      [change, showPopup]);

  //this animation is only applied for popup submenu
  const springProps = useSpring({
    from: {offset: startOffset, opacity: 0},
    to: {
      offset: showPopup ? 0 : startOffset,
      opacity: showPopup ? 1 : 0,
    },
    onStart: preUpdate,
    onRest: postUpdate,
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
  popupSubMenuPostion: PropTypes.string,
  collapse: PropTypes.bool,
  content: PropTypes.node,
  startOffset: PropTypes.number,
  show: PropTypes.bool,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  blockList: PropTypes.bool,
};
