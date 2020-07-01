import React from 'react';
import {
  PopupCtrlType,
  PositionClass,
  TooltipTransformOrigin,
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
    offset = 10,
    children,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);
  let positionClassName = `${PositionClass[position]} tooltip-arrow`;

  const popupBody = <div className={clsName} ref={ref}>
    <div className={positionClassName}/>
    {body}
  </div>;

  const animationFunc = (activeState) => {
    return {
      from: {
        transform: 'scale(0.9)',
        opacity: 0,
        transformOrigin: TooltipTransformOrigin[position],
      },
      to: {
        transform: activeState ? 'scale(1)' : 'scale(0.9)',
        opacity: activeState ? 1 : 0,
      },
    };
  };

  return <Popup
      {...otherProps}
      animationFunc={animationFunc}
      offset={offset}
      activeBy={PopupCtrlType.hover}
      position={position}
      autoClose={false}
      ctrlNode={children}
      body={popupBody}
      hasBorder={false}
      hasBox={true}
      zIndex={zIndex}
  />;

});

Tooltip.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.node,
  zIndex: PropTypes.number,
  offset: PropTypes.number,
};

export default Tooltip;
