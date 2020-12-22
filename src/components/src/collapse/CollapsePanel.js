import React, {useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {animated, useSpring} from 'react-spring';

import useResizeObserver from '../common/UseResizeObserver';
import {isNil} from '../Utils';
import PropTypes from 'prop-types';

const CollapsePanel = React.forwardRef((props, ref) => {
  const {
    className = 'collapse-panel',
    extraClassName,
    collapse = true,
    children,
    style,
    innerStyle,
    height: panelHeight,
    heightIncrement = 0,
    autoScaleHeight = true,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  const panelRef = useRef(null);

  const initHeight = useMemo(() => {
    if (!autoScaleHeight) {
      if (!isNil(panelHeight)) {
        return panelHeight;
      }
    }
    return 0;
  }, [autoScaleHeight, panelHeight]);

  const [panelRect, setPanelRect] = useState({height: initHeight});

  useResizeObserver(panelRef, rect => setPanelRect({height: rect.height}),
      autoScaleHeight);

  const toHeight = useMemo(() => {
    if (collapse) {
      return 0;
    }
    return autoScaleHeight ? panelRect.height + heightIncrement : panelHeight;

  }, [collapse, autoScaleHeight, panelHeight, panelRect, heightIncrement]);

  const {height, opacity, maxHeight} = useSpring({
    from: {
      opacity: 0,
      height: 0,
      maxHeight: 0,
    },
    to: {
      opacity: collapse ? 0 : 1,
      height: toHeight,
      maxHeight: toHeight,
    }, config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  const newStyle = {
    ...style,
    height: height,
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