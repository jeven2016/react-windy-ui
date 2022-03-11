import React, { useMemo } from 'react';
import { PopupCtrlType, PositionClass } from '../common/Constants';
import clsx from 'clsx';
import Popup from '../popup/Popup';
import * as PropTypes from 'prop-types';
import { isColorValue, nonNil } from '../Utils';

const Tooltip = React.forwardRef((props, ref) => {
  const {
    className = 'tooltip',
    extraClassName,
    position = 'top',
    body,
    zIndex = 2000,
    offset = 5,
    hasArrow = true,
    background,
    tooltipStyle,
    children,
    popupInstanceRef,
    popupBodyStyle,
    ...otherProps
  } = props;

  const isColorString = isColorValue(background);
  const bgClsName = nonNil(background) && !isColorString ? `bg-color-${background}` : null;

  let clsName = clsx(extraClassName, className, bgClsName);

  const positionClsName = PositionClass[position];
  let arrowClsName = clsx(positionClsName, 'tooltip-arrow', bgClsName);

  const realStyleBg = useMemo(() => {
    const styleBg = tooltipStyle?.background;
    if (nonNil(styleBg)) {
      return { background: styleBg };
    }
    if (isColorString) {
      return { background: background };
    }
    return null;
  }, [background, isColorString, tooltipStyle]);

  const popupBody = (
    <div className={clsName} ref={ref} style={realStyleBg}>
      {hasArrow && <div className={arrowClsName} style={realStyleBg} />}
      {body}
    </div>
  );

  const animationFunc = (activeState) => {
    return {
      from: {
        transform: activeState ? 'scale(1)' : 'scale(0.9)',
        opacity: activeState ? 1 : 0,
        disp: activeState ? 1 : 0
      },
      to: {
        transform: activeState ? 'scale(1)' : 'scale(0.9)',
        opacity: activeState ? 1 : 0,
        disp: activeState ? 1 : 0
      }
    };
  };

  return (
    <Popup
      ref={popupInstanceRef}
      {...otherProps}
      animationFunc={animationFunc}
      offset={offset}
      activeBy={PopupCtrlType.hover}
      position={position}
      autoClose={false}
      ctrlNode={children}
      body={popupBody}
      hasBorder={false}
      popupBodyStyle={{ ...popupBodyStyle, background: 'transparent' }}
      hasBox={false}
      zIndex={zIndex}
    />
  );
});

Tooltip.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.node,
  hasArrow: PropTypes.bool,
  zIndex: PropTypes.number,
  offset: PropTypes.number,
  background: PropTypes.string,
  tooltipStyle: PropTypes.object,
  popupBodyStyle: PropTypes.object
};

export default Tooltip;
