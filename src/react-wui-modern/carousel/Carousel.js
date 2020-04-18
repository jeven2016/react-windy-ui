import React from 'react';
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import useInternalActive from '../common/useInternalActive';

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
  const isExternalControl = props.hasOwnProperty('active');
  const {currentActive, setActive} = useInternalActive(isExternalControl,
      defaultActive, active);
  const change = (index) => {
    if (isExternalControl) {
      onChange && onChange(index);
      return;
    }
    setActive(index);
  };

  const comp = <div className={clsName}>
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
                            onChangeIndex={onChange}
                            resistance
                            {...otherProps}>
      {children}
    </AutoPlaySwipeableViews>
  </div>;
  return comp;
});

export default Carousel;