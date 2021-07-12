import React, {useCallback, useEffect, useMemo, useRef} from "react";
import {animated, useSpring} from "react-spring";
import {createTimeItems} from "./DateUtils";
import {useGesture} from "react-use-gesture";
import useMultipleRefs from "../common/UseMultipleRefs";
import useEventCallback from "../common/useEventCallback";
import {execute, isNil, round} from "../Utils";

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

  const currentItemY = useMemo(() => {
    //indicatorStart - index * itemHeight = my
    const value = isNil(time) ? 0 : time[timeType]();//value is the index
    return indicatorStart - value * itemHeight;
  }, [time, indicatorStart, itemHeight, timeType]);

  const [{y}, api] = useSpring(() => ({
    y: currentItemY,
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }));

  useEffect(() => {
    //ensure the correct time is selected while clearing the data of DateInput
    api.start({y: currentItemY});
  }, [api, currentItemY, time, timeType]);

  const move = useCallback(({my, event}) => {
    //if the mouse is not pressed down that means the drag action is finished
    //present the nearest item
    if (my >= middleItemIndex * itemHeight) {
      //near to '00' item, the time won't change but the position should be updated while the list is dragged out
      //of the range
      api.start({y: middleItemIndex * itemHeight});
      execute(() => changeTime(timeType, 0, event));
    } else if (Math.abs(my) > (maxValue * itemHeight - (middleItemIndex + 1) * itemHeight)) {
      //bottom item
      api.start({y: -maxValue * itemHeight + (middleItemIndex + 1) * itemHeight});
      execute(() => changeTime(timeType, maxValue - 1, event));
    } else {
      //for switching from one item to another, the time always changed and the api.start will be triggered in
      //useEffect, so we don't have to call api.start().
      let itemIndex = round(Math.abs(my - indicatorStart) / itemHeight);
      //indicatorStart - index * itemHeight = my
      execute(() => changeTime(timeType, itemIndex, event));
    }
  }, [api, changeTime, indicatorStart, itemHeight, maxValue, middleItemIndex, timeType]);

  const bind = useGesture({
    onDrag: ({event, down, movement: [, my], tap}) => {
      //ignore the tap event
      if (tap) {
        return;
      }
      if (down) {
        api.start({y: my});
      } else {
        move({event, my});
      }
    }
  }, {
    drag: {
      initial: () => [0, y.get()],
      axis: 'y',
      bounds: {bottom: indicatorStart, top: -(maxValue - middleItemIndex) * itemHeight},
      rubberband: true,
      filterTaps: true,
      useTouch: true,
      swipeDistance: [100, 100]
    }
  })

  const clickItem = useEventCallback((index, e) => {
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