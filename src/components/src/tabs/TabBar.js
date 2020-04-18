import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import {
  barAnimationConfig,
  handleProps,
  reversePosition,
  TabsContext,
} from './TabsCommon';

const CardBorderType = {
  none: 'none',
  one: 'one',
  full: 'full',
};

const TabBar = React.forwardRef((props, ref) => {
  const {
    hasBorder,
    isTabCard,
    position,
    isHorizontal,
    isVertical,
    parentRef,
    tabType,
    active,
    cardBorder,
    scrollable,
    ...otherProps
  } = props;

  const context = useContext(TabsContext);
  const tabBarRef = ref;
  const [config, setConfig] = useState({});
  const barPosition = useMemo(() => reversePosition(position), [position]);
  let barPos = isTabCard ? position : barPosition;

  const barClsName = clsx(`tab-bar`,
      barPos,
      {
        'with-border': hasBorder || cardBorder === CardBorderType.full,
        'one-border': cardBorder === CardBorderType.one,
        horizontal: isHorizontal,
        vertical: isVertical,
        'tab-card': isTabCard,
      });

  const move = () => {
    const parentNode = parentRef.current;
    const activeItemNode = parentNode.getElementsByClassName('tab-item active');

    if (activeItemNode.length > 0) {
      // debugger
      const tabRect = parentNode.getBoundingClientRect();
      const itemRect = activeItemNode[0].getBoundingClientRect();

      const newConfig = barAnimationConfig(config, isTabCard,
          itemRect, tabRect,
          barPosition);
      setConfig(newConfig);
    }
  };

  useEffect(() => {
    move();
  }, [
    active,
    barPosition,
    scrollable,
    tabType,
    position,
    context.removable,
    context.tabItemsCount]);

  return <Spring from={config.from} to={config.to}>
    {springProps =>
        <div className={barClsName} ref={tabBarRef} {...otherProps}
             style={handleProps(isTabCard, barPosition,
                 springProps)}/>
    }
  </Spring>;
});

export default TabBar;