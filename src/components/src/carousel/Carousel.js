import React from 'react';
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import useInternalState from "../common/useInternalState";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = React.forwardRef((props, ref) => {
  const {
    defaultActive = 0,
    active,
    extraClassName,
    className = 'carousel',
    position = 'bottom',
    hasIndicators = true,
    indicatorType = 'bar', //'circle', 'ball'
    axis = 'x', //'x','y', 'x-reverse', 'y-reserve'
    onChange,
    children,
    ...otherProps
  } = props;
  const count = React.Children.count(children);
  const clsName = clsx(extraClassName, className);

  const {
    state: currentActive,
    setState: setActive,
    customized: isExternalControl,
  } = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
  });

  const change = (index) => {
    if (isExternalControl) {
      onChange && onChange(index);
      return;
    }
    setActive(index);
  };

  return <div className={clsName}>
    <ul className={`indicators ${position}`}>
      {hasIndicators && React.Children.map(children, (chd, i) =>
        <li className={`${indicatorType} ${i === currentActive
          ? 'active'
          : ''}`}
            onClick={change.bind(null, i)}/>)}
    </ul>
    <AutoPlaySwipeableViews index={currentActive}
                            enableMouseEvents
                            animateTransitions={true}
                            axis={axis}
                            ignoreNativeScroll={true}
                            onChangeIndex={onChange}
                            resistance
                            {...otherProps}>
      {children}
    </AutoPlaySwipeableViews>
  </div>;
});

export default Carousel;