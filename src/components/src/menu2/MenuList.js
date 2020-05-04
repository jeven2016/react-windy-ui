import React, {useCallback, useMemo, useRef} from 'react';
import Collapse from '../collapse/Collapse';
import clsx from 'clsx';
import {animated, useSpring} from 'react-spring';
import {SubMenuDirection} from './MenuUtils';

export default function MenuList(props) {
  const {
    popupSubMenu = false,
    popupSubMenuPostion,
    collapsable,
    collapse,
    content,
    innerPanelStyle,
    startOffset = 20,
    show = false,// pop the submenu
    handleMouseEnter,
    handleMouseLeave,
    menuType,
  } = props;
  const listRef = useRef(null);

  const itemListClsName = clsx('item-list', {
    'popup-list': popupSubMenu,
    [popupSubMenuPostion]: popupSubMenu && popupSubMenuPostion,
    [menuType]: popupSubMenu && menuType,
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

  const preUpdate = useCallback(() => change(show, 'flex'), [change, show]);
  const postUpdate = useCallback(() => change(!show, 'none'), [change, show]);

  //this animation is only applied for popup submenu
  const springProps = useSpring({
    from: {offset: startOffset, opacity: 0},
    to: {
      offset: show ? 0 : startOffset,
      opacity: show || !popupSubMenu ? 1 : 0,
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

  return useMemo(
      () => {
        if (collapsable) {
          return <Collapse.Panel collapse={collapse}
                                 innerStyle={innerPanelStyle}>
            {content}
          </Collapse.Panel>;
        }

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
        return content;
      },
      [collapse, collapsable, innerPanelStyle, content, itemListClsName]);
}