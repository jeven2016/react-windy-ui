import React, { useRef } from 'react';
import useInternalState from '../common/useInternalState';
import Mask from '../mask';
import clsx from 'clsx';
import useEventCallback from '../common/useEventCallback';
import useMultipleRefs from '../common/UseMultipleRefs';
import useEvent from '../common/UseEvent';
import { EventListener } from '../common/Constants';
import PropTypes from 'prop-types';

const TriggerType = {
  hover: 'hover',
  click: 'click'
};

const Curtain = React.forwardRef((props, ref) => {
  const {
    disabled = false,
    triggerBy = TriggerType.hover,
    extraClassName,
    className = 'card-curtain',
    clickMaskToChange = false, // whether to change automaticly
    defaultClose = false,
    close,
    onChange,
    closeContent,
    children,
    darkMask = true,
    ...rest
  } = props;

  const [currentClose, setClose] = useInternalState({
    props,
    stateName: 'close',
    defaultState: defaultClose,
    state: close
  });
  const isHover = triggerBy === TriggerType.hover;

  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);
  const maskRef = useRef(null);

  const changeState = useEventCallback((value, e) => {
    if (currentClose === value) {
      return;
    }
    setClose(value);
    onChange && onChange(value, e);
  });

  //open the curtain
  const openCurtain = useEventCallback((e) => {
    const curNode = internalRef.current;

    //a click handler to ensure the curtain is opened after mouseleave/click event fired,
    //somehow the mouseleave event may not be fired in mobile browser so this handler is useful
    if (curNode && currentClose) {
      if (e.target !== curNode) {
        if (
          !clickMaskToChange &&
          (maskRef.current.contains(e.target) || internalRef.current.contains(e.target))
        ) {
          //don't change while clicking the mask
          return;
        }
        changeState(false, e);
      }
    }
  });
  useEvent(EventListener.click, openCurtain, true, window);

  const handleHover = useEventCallback((e) => {
    if (!isHover || disabled) {
      return;
    }
    e.type === EventListener.mouseEnter && changeState(true, e);
    e.type === EventListener.mouseLeave && changeState(false, e);
  });
  useEvent(EventListener.mouseEnter, handleHover, isHover, internalRef);
  useEvent(EventListener.mouseLeave, handleHover, isHover, internalRef);

  const click = useEventCallback((e) => {
    if (!isHover && !disabled && !currentClose) {
      changeState(true, e);
    }
  });

  const clsName = clsx(extraClassName, className, { close: currentClose });
  return (
    <div className={clsName} ref={multiRef} onClick={click} {...rest}>
      {children}
      <Mask ref={maskRef} active={currentClose} dark={darkMask} className="curtain-mask">
        {closeContent}
      </Mask>
    </div>
  );
});

Curtain.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  triggerBy: PropTypes.oneOf(Object.keys(TriggerType)),
  clickMaskToChange: PropTypes.bool,
  defaultClose: PropTypes.bool,
  close: PropTypes.bool,
  onChange: PropTypes.func,
  closeContent: PropTypes.node,
  darkMask: PropTypes.bool
};

export default Curtain;
