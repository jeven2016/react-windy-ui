import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Spring, animated } from 'react-spring';
import { barAnimationConfig, handleProps, reversePosition, TabsContext } from './TabsCommon';
import useEventCallback from '../common/useEventCallback';
import PropTypes from 'prop-types';

const CardBorderType = {
  none: 'none',
  one: 'one',
  full: 'full'
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

  const barClsName = clsx(`tab-bar`, barPos, {
    'with-border': hasBorder || cardBorder === CardBorderType.full,
    'one-border': cardBorder === CardBorderType.one,
    horizontal: isHorizontal,
    vertical: isVertical,
    'tab-card': isTabCard
  });

  const move = useEventCallback(() => {
    const parentNode = parentRef.current;
    const activeItemNode = parentNode.getElementsByClassName('tab-item active');

    if (activeItemNode.length > 0) {
      // debugger
      const tabRect = parentNode.getBoundingClientRect();
      const itemRect = activeItemNode[0].getBoundingClientRect();

      const newConfig = barAnimationConfig(config, isTabCard, itemRect, tabRect, barPosition);
      setConfig(newConfig);
    }
  });

  useEffect(() => {
    move();
  }, [
    active,
    barPosition,
    scrollable,
    tabType,
    position,
    context.removable,
    context.tabItemsCount,
    move
  ]);

  return (
    <Spring from={config.from} to={config.to}>
      {(springProps) => (
        <animated.div
          className={barClsName}
          ref={tabBarRef}
          {...otherProps}
          style={handleProps(isTabCard, barPosition, springProps)}
        />
      )}
    </Spring>
  );
});

TabBar.propTypes = {
  hasBorder: PropTypes.bool,
  isTabCard: PropTypes.bool,
  position: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isVertical: PropTypes.bool,
  tabType: PropTypes.string,
  active: PropTypes.any,
  cardBorder: PropTypes.string,
  scrollable: PropTypes.bool
};

export default TabBar;
