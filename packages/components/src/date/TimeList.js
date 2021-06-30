import React, {useMemo, useRef} from "react";
import {animated, useSpring} from "react-spring";
import {createTimeItems} from "./DateUtils";
import {useDrag} from "react-use-gesture";
import useMultipleRefs from "../common/UseMultipleRefs";
import useEventCallback from "../common/useEventCallback";
import {execute, preventEvent} from "../Utils";
import dayjs from "dayjs";

const TimeList = React.forwardRef((props, ref) => {
  const {
    changeTime,
    maxValue,
    timeType,
    time,
    itemHeight = 40,
    count = 5,
  } = props;
  const listRef = useRef(null);
  const multiRef = useMultipleRefs(listRef, ref);

  //get the position of indicator(it aligns to the middle item of the list)
  const middleItemIndex = Math.floor(count / 2);
  const indicatorStart = middleItemIndex * itemHeight;
  const indicatorEnd = indicatorStart + itemHeight;

  const currentTime = useMemo(() => time || dayjs(), [time]);
  const currentItemY = useMemo(() => {
    //indicatorStart - index * itemHeight = my
    const value = currentTime[timeType]();//value is the index
    return indicatorStart - value * itemHeight;

  }, [currentTime, indicatorStart, itemHeight, timeType]);


  const [{y}, api] = useSpring(() => ({y: currentItemY}));
  const bind = useDrag(({down, movement: [, my], tap}) => {
    //ignore the tap event
    if (!tap) {
      api.start({y: my});
    }

    //if mouse is not pressed down
    if (!down && !tap) {
      //present the nearest item
      const startIndex = Math.floor(Math.abs(my) / itemHeight);
      //todo
      const itemIndex = startIndex > middleItemIndex ? startIndex + middleItemIndex : startIndex;
      // api.start({y: indicatorStart - itemIndex * itemHeight});

      //indicatorStart - index * itemHeight = my
      // execute(() => changeTime(timeType, itemIndex));
    }
  }, {
    initial: () => [0, y.get()],
    axis: 'y',
    bounds: {bottom: indicatorStart, top: -(maxValue - middleItemIndex) * itemHeight},
    rubberband: true,
    filterTaps: true
  })

  const clickItem = useEventCallback((index, e) => {
    const nextY = indicatorStart - index * itemHeight;
    api.start({y: nextY});
    execute(() => changeTime(timeType, index));
  });

  const hourItems = useMemo(() => createTimeItems({max: maxValue, onClick: clickItem}),
    [clickItem, maxValue]);

  return <div className="tp-wrapper" {...bind()}>
    <animated.div className="tp-list" style={{y}} ref={multiRef}>
      {hourItems}
    </animated.div>
  </div>;
});

export default TimeList;