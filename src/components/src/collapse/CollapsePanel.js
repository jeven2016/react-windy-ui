import React, {useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {animated, useSpring} from 'react-spring';

import useResizeObserver from '../common/UseResizeObserver';
import {isNil, nonNil} from '../Utils';
import PropTypes from 'prop-types';
import usePrevious from "../common/UsePrevious";

const CollapsePanel = React.forwardRef((props, ref) => {
  const {
    className = 'collapse-panel',
    extraClassName,
    collapse = true,
    children,
    style,
    innerStyle,
    height: initHeight,
    heightIncrement = 0,
    autoScaleHeight = true,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  const panelRef = useRef(null);

  //the init height
  const startHeight = useMemo(() => {
    if (!autoScaleHeight && nonNil(initHeight)) {
      return initHeight;
    }
    return 0;
  }, [autoScaleHeight, initHeight]);

  //the panel height
  const [panelHeight, setPanelHeight] = useState(startHeight);

  //updated while the panel changed
  useResizeObserver(panelRef, rect => setPanelHeight(rect.height),
    autoScaleHeight);

  const toHeight = useMemo(() => {
    if (collapse) {
      return 0;
    }
    return autoScaleHeight ? panelHeight + heightIncrement : panelHeight;

  }, [collapse, autoScaleHeight, panelHeight, heightIncrement]);

  //the spring animation has valid height calculated, but the height would be changed in newStyle while only the child panel changed
  const {height, opacity, maxHeight} = useSpring({
    from: {opacity: 0, height: 0},
    to: {opacity: collapse ? 0 : 1, height: toHeight,},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  //set the height to 'auto' if the children panel instead of itself changed
  const preCollapse = usePrevious(collapse);
  const isSubPanelChanged = !collapse && !preCollapse;

  const newStyle = {
    ...style,
    height: isSubPanelChanged ? 'auto' : height,
    opacity: opacity,
    maxHeight: maxHeight,
  };

  return <animated.div className={clsName}
                       ref={ref}
                       style={newStyle} {...otherProps}>
    <div className="inner-container" ref={panelRef} style={innerStyle}>
      {children}
    </div>
  </animated.div>;
});

CollapsePanel.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  collapse: PropTypes.bool,
  style: PropTypes.object,
  innerStyle: PropTypes.object,
  height: PropTypes.number,
  heightIncrement: PropTypes.number,
  autoScaleHeight: PropTypes.bool,
};

export default CollapsePanel;