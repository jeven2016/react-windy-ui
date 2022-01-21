import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import Items from './Items';
import Panels from './Panels';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import {
  filterProps,
  getTranslateValue,
  nextPosition,
  prePosition,
  TabsContext
} from './TabsCommon';
import { Direction, EventListener } from '../common/Constants';
import { getRect, isNil } from '../Utils';
import TabBar from './TabBar';
import { animated, Spring } from 'react-spring';
import NextBtn from './NextBtn';
import PreBtn from './PreBtn';
import { useEvent } from '../index';
import useInternalState from '../common/useInternalState';
import PropTypes from 'prop-types';
import ItemContent from './ItemContent';
import useEventCallback from '../common/useEventCallback';

const defaultConfig = {
  visiblePre: true,
  visibleNext: true,
  from: { transform: [0, 0, 0] },
  to: { transform: [0, 0, 0] }
};

const Tabs = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'tab',
    hasRipple = true,
    rippleColor = '#ccc',
    defaultActive,
    active,
    onChange,
    onRemove,
    removable,
    equalWidth = false,
    position = 'top', //top, bottom, left, right
    hasBorder = true,
    cardBorder = 'full', //none, one, full
    type = 'normal', //card, secondary-card, normal
    scrollable = true,
    children,
    ...otherProps
  } = props;
  const direction =
    position === 'top' || position === 'bottom' ? Direction.horizontal : Direction.vertical;
  const scrollRef = useRef(null);
  const tabCntRef = useRef(null);
  const nextRef = useRef(null);

  const isHorizontal = direction === Direction.horizontal;
  const isVertical = direction === Direction.vertical;
  const isSecondaryCard = type === 'secondaryCard';
  const isTabCard = type === 'card';

  const [scrlSpringConfig, setScrlSpringConfig] = useState(defaultConfig);

  const childArray = useMemo(() => (children ? React.Children.toArray(children) : []), [children]);
  const tabItems = useMemo(() => childArray.filter((chd) => chd.type === Items), [childArray]);
  const tabPanels = useMemo(() => childArray.filter((chd) => chd.type === Panels), [childArray]);
  const tabItemsCount = useMemo(
    () => (tabItems ? tabItems[0].props.children.length : 0),
    [tabItems]
  );

  const clsName = clsx(extraClassName, className, direction, position, {
    'tab-card': isTabCard,
    'tab-card secondary-card': isSecondaryCard,
    'with-btn': scrlSpringConfig.visiblePre || scrlSpringConfig.visibleNext,
    'with-border': hasBorder,
    scrollable
  });

  const getFirstValue = useCallback(() => {
    let firstItem;
    React.Children.forEach(children, (child) => {
      if (isNil(firstItem) && child.type === Items) {
        const itemsArray = React.Children.toArray(child.props.children);
        if (itemsArray.length > 0 && itemsArray[0].type === TabItem) {
          firstItem = itemsArray[0];
        }
      }
    });

    return isNil(firstItem) ? null : firstItem.props.value;
  }, [children]);

  const [currentActive, setActive, customized] = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
    backupState: getFirstValue()
  });

  const change = (value) => {
    setActive(value);
    onChange && onChange(value);
  };

  const scrollTo = useEventCallback(() => {
    if (!scrollable) {
      return;
    }
    const scrlRect = getRect(scrollRef.current);
    const tabCntRect = getRect(tabCntRef.current);

    let newState = {};
    //update visible properties
    if (isHorizontal) {
      if (scrlRect.width <= tabCntRect.width) {
        newState.visiblePre = newState.visibleNext = false;
      }
    } else {
      if (scrlRect.height <= tabCntRect.height) {
        newState.visiblePre = newState.visibleNext = false;
      }
    }

    //scroll to the active item
    let activeConfig = {};
    const activeItems = scrollRef.current.getElementsByClassName('tab-item active');
    if (activeItems.length > 0) {
      const item = activeItems[0];
      const itemRect = getRect(item);

      const { to: transformTo } = getTranslateValue(isHorizontal, scrlRect, tabCntRect, itemRect);
      activeConfig = { from: defaultConfig.from, to: { transform: transformTo } };
    }
    setScrlSpringConfig({ ...scrlSpringConfig, ...newState, ...activeConfig });
  });

  useEffect(() => {
    scrollTo();
  }, [direction, position, removable, scrollTo, tabItemsCount]);

  useEvent(EventListener.resize, scrollTo);

  const clickNext = useEventCallback(() => {
    if (scrlSpringConfig.disableNext) {
      return;
    }
    const scrlRect = getRect(scrollRef.current);
    const tabCntRect = getRect(tabCntRef.current);

    let translateTo, result;
    if (isVertical) {
      result = nextPosition({
        tabCntRect,
        scrlRect,
        against: 'height',
        orientation: 'bottom',
        axis: 'y'
      });
      translateTo = [0, result.to, 0];
    } else {
      result = nextPosition({
        tabCntRect,
        scrlRect,
        against: 'width',
        orientation: 'right',
        axis: 'x'
      });
      translateTo = [result.to, 0, 0];
    }

    setScrlSpringConfig({
      ...scrlSpringConfig,
      to: { transform: translateTo }
    });
  });

  const clickPre = useEventCallback(() => {
    if (scrlSpringConfig.disablePre) {
      return;
    }
    const scrlRect = scrollRef.current.getBoundingClientRect();
    const tabCntRect = tabCntRef.current.getBoundingClientRect();
    let translateTo, result;
    if (isVertical) {
      result = prePosition({
        tabCntRect,
        scrlRect,
        against: 'height',
        axis: 'y'
      });
      translateTo = [0, result.to, 0];
    } else {
      result = prePosition({
        tabCntRect,
        scrlRect,
        against: 'width',
        axis: 'x'
      });
      translateTo = [result.to, 0, 0];
    }
    setScrlSpringConfig({ ...scrlSpringConfig, to: { transform: translateTo } });
  });

  const tabBarContent = !isSecondaryCard && (
    <TabBar
      tabType={type}
      scrollable={scrollable}
      hasBorder={hasBorder}
      cardBorder={cardBorder}
      isTabCard={isTabCard}
      position={position}
      isHorizontal={isHorizontal}
      isVertical={isVertical}
      parentRef={scrollRef}
      active={currentActive}
    />
  );

  const scrollContent = scrollable ? (
    <Spring from={scrlSpringConfig.from} to={scrlSpringConfig.to}>
      {(sp) => (
        <animated.div
          className={`tab-scroll ${direction} ${equalWidth ? 'equal-width' : ''}`}
          ref={scrollRef}
          style={filterProps(sp, isHorizontal)}
        >
          {tabItems}
          {tabBarContent}
        </animated.div>
      )}
    </Spring>
  ) : (
    <div className={`tab-scroll ${direction} ${equalWidth ? 'equal-width' : ''}`} ref={scrollRef}>
      {tabItems}
      {tabBarContent}
    </div>
  );

  const tabContClsName = clsx('tab-container', position, {
    scrollable: scrollable && (scrlSpringConfig.visiblePre || scrlSpringConfig.visibleNext)
  });

  return (
    <>
      <TabsContext.Provider
        value={{
          hasRipple,
          rippleColor,
          equalWidth,
          removable,
          tabItemsCount,
          onRemove,
          active: currentActive,
          change,
          autoChange: !customized,
          clickNext: clickNext,
          clickPre: clickPre,
          visiblePre: scrlSpringConfig.visiblePre,
          visibleNext: scrlSpringConfig.visibleNext
        }}
      >
        <div className={`tabs ${position}`}>
          <div className={clsName} {...otherProps} ref={ref}>
            {scrollable && (
              <PreBtn
                disabled={scrlSpringConfig.disablePre}
                scrollRef={scrollRef}
                tabCntRef={tabCntRef}
                scrlSpringConfig={scrlSpringConfig}
                isVertical={isVertical}
                direction={direction}
                setScrlSpringConfig={setScrlSpringConfig}
              />
            )}
            {scrollable && (
              <NextBtn
                disabled={scrlSpringConfig.disableNext}
                ref={nextRef}
                scrollRef={scrollRef}
                tabCntRef={tabCntRef}
                scrlSpringConfig={scrlSpringConfig}
                isVertical={isVertical}
                direction={direction}
                setScrlSpringConfig={setScrlSpringConfig}
              />
            )}
            <div className={tabContClsName} ref={tabCntRef}>
              {scrollContent}
            </div>
          </div>
          {tabPanels}
        </div>
      </TabsContext.Provider>
    </>
  );
});

Tabs.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  hasRipple: PropTypes.bool,
  rippleColor: PropTypes.string,
  defaultActive: PropTypes.any,
  active: PropTypes.any,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  equalWidth: PropTypes.bool,
  position: PropTypes.string,
  hasBorder: PropTypes.bool,
  cardBorder: PropTypes.string,
  type: PropTypes.string,
  scrollable: PropTypes.bool
};

Tabs.Items = Items;
Tabs.Panels = Panels;
Tabs.TabItem = TabItem;
Tabs.TabPanel = TabPanel;
Tabs.ItemContent = ItemContent;

export default Tabs;
