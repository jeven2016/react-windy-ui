import React, { useContext, useMemo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { TabsContext } from './TabsCommon';
import { isNil } from '../Utils';

const Panels = (props) => {
  const { children } = props;

  //map-key: value
  //map-value: index
  const mappingMap = useMemo(() => {
    const map = {};
    React.Children.forEach(children, (child, index) => {
      const itemValue = child.props.itemValue;
      if (itemValue) {
        map[itemValue] = index; // value - index
        map[`__${index}`] = itemValue; // index - value
      }
    });
    return map;
  }, [children]);

  const context = useContext(TabsContext);
  const activeIndex = mappingMap[context.active];
  const realIndex = isNil(activeIndex) ? 0 : activeIndex;

  const onChangeIndex = (index) => {
    const change = context.change;
    change(mappingMap[`__${index}`]);
  };

  return (
    <SwipeableViews
      enableMouseEvents
      style={{ flex: '1' }}
      index={realIndex}
      disabled={!context.autoChange}
      onChangeIndex={onChangeIndex}
      animateHeight
      resistance
    >
      {children}
    </SwipeableViews>
  );
};

export default Panels;
