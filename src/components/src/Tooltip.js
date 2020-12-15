import React from 'react';
import {
  PopupCtrlType,
  PositionClass,
} from './common/Constants';
import clsx from 'clsx';
import Popup from './popup/Popup';
import * as PropTypes from 'prop-types';

const Tooltip = React.forwardRef((props, ref) => {
  const {
    className = 'tooltip',
    extraClassName,
    position = 'top',
    body,
    zIndex = 2000,
    offset = 8,
    hasArrow = true,
    children,
    popupInstanceRef,
    popupBodyStyle,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);
  let positionClassName = `${PositionClass[position]} tooltip-arrow`;

  const popupBody = <div className={clsName} ref={ref}>
    {hasArrow && <div className={positionClassName}/>}
    {body}
  </div>;

  const animationFunc = (activeState) => {
    return {
      from: {
        // transform: activeState ? 'scaleY(1)' : 'scaleY(0.9)',
        opacity: activeState ? 1 : 0,
      },
      to: {
        // transform: activeState ? 'scaleY(1)' : 'scaleY(0.9)',
        opacity: activeState ? 1 : 0,
      },
    };
  };

  return <Popup
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
      popupBodyStyle={{...popupBodyStyle, background: 'transparent'}}
      hasBox={false}
      zIndex={zIndex}
  />;

});

Tooltip.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.node,
  hasArrow: PropTypes.bool,
  zIndex: PropTypes.number,
  offset: PropTypes.number,
};

export default Tooltip;
