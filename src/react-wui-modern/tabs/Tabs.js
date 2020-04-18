import React, {useCallback, useEffect, useRef, useState} from 'react';
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
  TabsContext,
} from './TabsCommon';
import useInternalActive from '../common/useInternalActive';
import {Direction, EventListener} from '../common/Constants';
import {getRect, isNil} from '../Utils';
import TabBar from './TabBar';
import {Spring} from 'react-spring/renderprops';
import NextBtn from './NextBtn';
import PreBtn from './PreBtn';
import {useEvent} from '../index';

const defaultConfig = {
  visiblePre: true,
  visibleNext: true,
  from: {transform: 'translate3d(0px, 0px, 0px)'},
  to: {transform: 'translate3d(0px, 0px, 0px)'},
};

const Tabs = React.forwardRef((props, ref) => {
  const {
    defaultActive,
    active,
    onChange,
    onRemove,
    removable,
    className = 'tab',
    extraClassName,
    position = 'top', //top, bottom, left, right
    hasBorder = true,
    cardBorder = 'full', //none, one, full

    type = 'normal', //card, secondary-card, normal
    scrollable = false,
    children,
    ...otherProps
  } = props;
  const direction = position === 'top' || position === 'bottom'
      ? Direction.horizontal
      : Direction.vertical;
  const tabRef = ref ? ref : useRef(null);
  const scrollRef = useRef(null);
  const tabCntRef = useRef(null);
  const nextRef = useRef(null);

  const isHorizontal = direction === Direction.horizontal;
  const isVertical = direction === Direction.vertical;
  const isSecondaryCard = type === 'secondaryCard';
  const isTabCard = type === 'card';

  const [scrlSpringConfig, setScrlSpringConfig] = useState(defaultConfig);
  const childArray = children ? React.Children.toArray(children) : [];
  const tabItems = childArray.filter(chd => chd.type === Items);
  const tabPanels = childArray.filter(chd => chd.type === Panels);
  const tabItemsCount = tabItems ? tabItems[0].props.children.length : 0;

  const clsName = clsx(extraClassName, className, direction,
      position, {
        'tab-card': isTabCard,
        'tab-card secondary-card': isSecondaryCard,
        'with-btn': scrlSpringConfig.visiblePre || scrlSpringConfig.visibleNext,
        'with-border': hasBorder,
        scrollable,
      });

  const getFirstValue = useCallback(() => {
    React.Children.forEach(children, child => {
      if (child.type === Items) {
        const itemsArray = React.Children.toArray(child.props.children);
        if (itemsArray.length > 0 && itemsArray[0].type === TabItem) {
          return itemsArray[0].props.value;
        }
      }
    });
  }, [tabItemsCount]);

  const backupActive = isNil(defaultActive) && isNil(active)
      ? getFirstValue()
      : null;
  const isExternalControl = props.hasOwnProperty('active');
  const {currentActive, setActive} = useInternalActive(isExternalControl,
      defaultActive, active, backupActive);

  const change = (value) => {
    if (!isExternalControl) {
      setActive(value);
    }
    onChange && onChange(value);
  };

  const scrollTo = () => {
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
    const activeItems = scrollRef.current.getElementsByClassName(
        'tab-item active');
    if (activeItems.length > 0) {
      const item = activeItems[0];
      const itemRect = getRect(item);

      const {to: toStyleValue} = getTranslateValue(isHorizontal, scrlRect,
          tabCntRect, itemRect);
      activeConfig = {from: defaultConfig.from, to: {transform: toStyleValue}};
    }
    setScrlSpringConfig({...scrlSpringConfig, ...newState, ...activeConfig});
  };

  useEffect(() => {
    console.log('update....'+tabItemsCount);
    scrollTo();
  }, [direction, position, removable, tabItemsCount]);

  useEvent(EventListener.resize, scrollTo);

  const clickNext = () => {
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
        axis: 'y',
      });
      translateTo = {transform: `translate3d(0px, ${result.to}px, 0px)`};
    } else {
      result = nextPosition({
        tabCntRect,
        scrlRect,
        against: 'width',
        orientation: 'right',
        axis: 'x',
      });
      translateTo = {transform: `translate3d(${result.to}px, 0px, 0px)`};
    }

    setScrlSpringConfig(
        {
          ...scrlSpringConfig,
          to: translateTo,
        });
  };

  const clickPre = () => {
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
        axis: 'y',
      });
      translateTo = {transform: `translate3d(0px, ${result.to}px, 0px)`};
    } else {
      result = prePosition({
        tabCntRect,
        scrlRect,
        against: 'width',
        axis: 'x',
      });
      translateTo = {transform: `translate3d(${result.to}px, 0px, 0px)`};
    }
    setScrlSpringConfig({...scrlSpringConfig, to: translateTo});
  };

  const tabBarContent = !isSecondaryCard && <TabBar
      tabType={type}
      scrollable={scrollable}
      hasBorder={hasBorder}
      cardBorder={cardBorder}
      isTabCard={isTabCard}
      position={position}
      isHorizontal={isHorizontal}
      isVertical={isVertical}
      parentRef={scrollRef}
      active={currentActive}/>;

  const scrollContent = scrollable ? <Spring
          from={scrlSpringConfig.from}
          to={scrlSpringConfig.to}>
        {
          sp =>
              <div className={`tab-scroll ${direction}`} ref={scrollRef}
                   style={filterProps(sp, isHorizontal)}>
                {tabItems}
                {tabBarContent}
              </div>
        }
      </Spring>
      : <div className={`tab-scroll ${direction}`} ref={scrollRef}>
        {tabItems}
        {tabBarContent}
      </div>;

  const tabContClsName = clsx('tab-container', position, {
    'scrollable': scrollable &&
        (scrlSpringConfig.visiblePre || scrlSpringConfig.visibleNext),
  });

  return <>
    <TabsContext.Provider value={{
      removable,
      tabItemsCount,
      onRemove,
      active: currentActive,
      change,
      autoChange: !isExternalControl,
      clickNext: clickNext,
      clickPre: clickPre,
      visiblePre: scrlSpringConfig.visiblePre,
      visibleNext: scrlSpringConfig.visibleNext,
    }}>
      <div className={`tabs ${position}`}>
        <div className={clsName} {...otherProps} ref={tabRef}>
          {
            scrollable && <PreBtn disabled={scrlSpringConfig.disablePre}
                                  scrollRef={scrollRef}
                                  tabCntRef={tabCntRef}
                                  scrlSpringConfig={scrlSpringConfig}
                                  isVertical={isVertical}
                                  direction={direction}
                                  setScrlSpringConfig={setScrlSpringConfig}/>
          }
          {
            scrollable && <NextBtn disabled={scrlSpringConfig.disableNext}
                                   ref={nextRef}
                                   scrollRef={scrollRef}
                                   tabCntRef={tabCntRef}
                                   scrlSpringConfig={scrlSpringConfig}
                                   isVertical={isVertical}
                                   direction={direction}
                                   setScrlSpringConfig={setScrlSpringConfig}/>
          }
          <div className={tabContClsName} ref={tabCntRef}>
            {scrollContent}
          </div>
        </div>
        {tabPanels}
      </div>
    </TabsContext.Provider>
  </>;
});

Tabs.Items = Items;
Tabs.Panels = Panels;
Tabs.TabItem = TabItem;
Tabs.TabPanel = TabPanel;

export default Tabs;