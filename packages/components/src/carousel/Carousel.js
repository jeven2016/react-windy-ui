import React from 'react';
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import useInternalState from "../common/useInternalState";
import useEventCallback from "../common/useEventCallback";
import * as ProperTypes from "prop-types";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const IndicatorPosition = {
  left: "left",
  top: "top",
  right: "right",
  bottom: "bottom"
};

const IndicatorType = {
  circle: 'circle',
  bar: 'bar'
};


const Carousel = React.forwardRef((props, ref) => {
  const {
    defaultActive = 0,
    active,
    extraClassName,
    className = 'carousel',
    position = IndicatorPosition.bottom,
    hasIndicators = true,
    indicatorType = IndicatorType.bar, //'circle', 'bar'
    axis = 'x', //'x','y', 'x-reverse', 'y-reserve'
    onChange,
    children,
    style,
    interval = 3000,
    disabled = false,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);

  const [currentActive, setActive] = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
  });

  const change = useEventCallback(index => {
    setActive(index);
    onChange && onChange(index);
  });

  return <div className={clsName} style={style}>
    <ul className={`indicators ${position}`}>
      {hasIndicators && React.Children.map(children, (chd, i) =>
        <li className={`${indicatorType} ${i === currentActive
          ? 'active'
          : ''}`}
            onClick={(e) => change(i, e)}/>)}
    </ul>
    <AutoPlaySwipeableViews index={currentActive}
                            enableMouseEvents
                            animateTransitions={true}
                            axis={axis}
                            disabled={disabled}
                            ignoreNativeScroll={true}
                            onChangeIndex={(i) => change(i)}
                            interval={interval}
                            resistance
                            {...otherProps}>
      {children}
    </AutoPlaySwipeableViews>
  </div>;
});

Carousel.propTypes = {
  defaultActive: ProperTypes.number,
  active: ProperTypes.number,
  extraClassName: ProperTypes.string,
  className: ProperTypes.string,
  position: ProperTypes.oneOf(Object.keys(IndicatorPosition)),
  hasIndicators: ProperTypes.bool,
  indicatorType: Object.keys(IndicatorType), //'circle', 'bar'
  axis: ProperTypes.oneOf(['x', 'x-reverse']), //'x','y', 'x-reverse', 'y-reserve'
  onChange: ProperTypes.func,
  interval: ProperTypes.number,
  disabled: ProperTypes.bool,
}

export default Carousel;