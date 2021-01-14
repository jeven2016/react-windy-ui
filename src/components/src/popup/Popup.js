import React, {useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import ReactDOM from 'react-dom';
import useContainer from '../common/UseContainer';
import {
  ContainerId,
  EventListener,
  PopupCtrlType,
  PopupPosition,
} from '../common/Constants';
import {animated, useSpring} from 'react-spring';
import {execute, isNil, isString, place} from '../Utils';
import useMultipleRefs from '../common/UseMultipleRefs';
import useResizeObserver from '../common/UseResizeObserver';
import useEvent from '../common/UseEvent';
import useInternalState from '../common/useInternalState';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useEventCallback from '../common/useEventCallback';
import {getRefConfig} from './PopupUtils';

function getTranslate(position, activePopup, startOffset) {
  const transOffset = startOffset + 5;

  let x = 0, y = 0;
  if (position.startsWith('top')) {
    y = -transOffset;
  }
  if (position.startsWith('bottom')) {
    y = transOffset;
  }
  if (position.startsWith('left')) {
    x = -transOffset;
  }
  if (position.startsWith('right')) {
    x = transOffset;
  }
  return {
    transform: activePopup
        ? 'translate3d(0px, 0px, 0px)'
        : `translate3d(${x}px, ${y}px, 0px)`,
  };
}

/**
 * Popup
 *
 * @param ref  used to reference the Popup instance
 */
const Popup = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'popup',
    zIndex = 1200,
    hasBox = false,
    hasBorderRadius = true,
    hasBorder = false,
    popupExtraClassName,
    popupStyle,
    popupBodyStyle,
    offset = 8,
    ctrlNode,
    body,
    ctrlRef,
    popupRef,
    activeBy = 'click',
    defaultActive = false,
    active, //whether to show the popup
    onChange, //for changing active state
    disabled = false,
    hidePopup = false, //whether to hide the popup menu
    delayClose = 100,
    animationFunc,
    position = PopupPosition.bottom,
    autoClose = true, //auto close while clicking the body of the popup
    ...otherProps
  } = props;

  const rootElem = useContainer(ContainerId.popup);
  const isHover = activeBy === PopupCtrlType.hover;

  const {state: isActive, setState: setActive, customized: customActive}
      = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
  });
  const activePopup = isActive && !hidePopup;
  const preActiveRef = useRef(null);
  preActiveRef.current = activePopup;

  //popup ref
  const realPopupRef = useRef(null);
  const multiPopupRef = useMultipleRefs(realPopupRef, popupRef);

  //ctrl node ref
  const realCtrlRef = useRef(null);
  const multiCtrlRef = useMultipleRefs(realCtrlRef, ctrlRef);

  /**
   * Active the popup menu
   */
  const changeActive = useEventCallback((state, e) => {
    if (!customActive) {
      setActive(state);
    }
    onChange && onChange(state, e);
  });

  useImperativeHandle(ref, () => ({
    isActive: activePopup,
    changeActive: changeActive,
  }), [activePopup, changeActive]);

  //-------------update the popup's position------------------
  const updatePosition = useEventCallback(() => {
    //cannot directly access the state in this method
    const ctrlDom = realCtrlRef.current;
    const popupDom = realPopupRef.current;
    if (ctrlDom && popupDom && popupDom.style.display !== 'none') {
      place(popupDom, ctrlDom, position, offset);
      popupDom.getElementsByClassName('popup-mask').forEach(popupMask => {
        popupMask.style.top = -(offset + 3) + 'px';
      });
    }
  });

  useResizeObserver(() => realCtrlRef.current,
      updatePosition
      , true, () => true);

  useResizeObserver(document.body,
      updatePosition, true, () => true);

  useEvent(EventListener.scroll, updatePosition);

  //----------------------------------------------

  const transform = useMemo(() => {
    return getTranslate(position, activePopup, offset);
  }, [position, activePopup, offset]);

  const animationSetting = useMemo(
      () => animationFunc ? animationFunc(activePopup) : {
        from: {transform: 'translate3d(0px, 0px, 0px)', opacity: 0, disp: 0},
        to: {
          transform: transform.transform,
          opacity: activePopup ? 1 : 0,
          disp: activePopup ? 1 : 0,
        },
      }, [activePopup, animationFunc, transform.transform]);

  const springProps = useSpring({
    from: animationSetting.from,
    to: animationSetting.to,
    config: animationSetting.config ? animationSetting.config : {
      clamp: true,
      mass: 1,
      tesion: 100,
      friction: 15,
    },
  });

  //get the controller node
  const ctrl = useMemo(() => {
    const disabledStyle = {
      cursor: 'not-allowed',
      opacity: 0.7,
    };
    if (isString(ctrlNode)) {
      return <div className='popup-title'
                  style={disabled ? disabledStyle : null}
                  ref={multiCtrlRef}>{ctrlNode}</div>;
    }

    //for normal components we only set the ref property, but for IconInput
    //we have to set via rootRef
    let elemProps = getRefConfig(ctrlNode, multiCtrlRef);
    let finalProps = {...ctrlNode.props, ...elemProps};
    if (disabled) {
      finalProps.disabled = true;
      finalProps.style = finalProps.style
          ? {...finalProps.style, ...disabledStyle}
          : disabledStyle;
    }

    return React.cloneElement(ctrlNode, finalProps);
  }, [ctrlNode, multiCtrlRef, disabled]);

  //get the popup node
  const popupClsName = clsx(extraClassName, className, {
    'global-with-box': hasBox,
    'with-border-radius': hasBorderRadius,
    'global-with-border': hasBorder,
  });

  const popupCntClsName = clsx(popupExtraClassName, 'popup-content');

  const mergedProps = {
    ...popupStyle, ...otherProps, ...springProps,
    display: springProps.disp.interpolate(disp => disp === 0 ? 'none' : 'flex'),
    zIndex: zIndex,
  };

  const popup = <animated.div ref={multiPopupRef}
                              className={popupClsName} style={mergedProps}>
    <div className={popupCntClsName} style={popupBodyStyle}>
      {body}
    </div>
  </animated.div>;

  //previous closing timer
  const preCloseRef = useRef(null);
  const clearCloseTimer = useEventCallback(() => {
    const preTimeout = preCloseRef.current;
    if (!isNil(preTimeout)) {
      preCloseRef.current = null;
      clearTimeout(preTimeout);
    }
  });

  const handleHover = useEventCallback(
      (e, nextActive, eventType, forceUpdate = false) => {
        if (hidePopup || disabled || !isHover) {
          return;
        }
        if (!forceUpdate) {
          //the hover event should only be fired by controller or popup.
          //the menu items or popover-arrow cannot trigger closing the popup.
          //
          // but firefox doesn't support fromElement/toElement, so using relatedTarget instead.
          //for mouseEnter : relatedTarget == fromElement
          //for mouseEnter : relatedTarget == toElement
          const isValidOver = eventType === EventListener.mouseEnter &&
              !realPopupRef.current.contains(e.relatedTarget) &&
              realPopupRef.current.contains(e.target);

          //for mouse leave, the mouse should move from popup to outside
          const isValidOut = eventType === EventListener.mouseLeave &&
              realPopupRef.current.contains(e.target) &&
              !realPopupRef.current.contains(e.relatedTarget);

          if (!isValidOver && !isValidOut) {
            return;
          }
        }

        if (!nextActive) {
          //if the popup is already closed or there's a closing timer running at this time
          if (!isNil(preCloseRef.current) || !activePopup) {
            return;
          }
          preCloseRef.current = execute(() => {
            changeActive(nextActive, e);
          }, delayClose);
          return;
        }

        if (nextActive) {
          clearCloseTimer();
          if (activePopup) {
            return;
          }
          changeActive(nextActive, e);
        }
      });

  const handleBackgroundClick = useEventCallback((e) => {
    if (!activePopup || realCtrlRef.current.contains(e.target)) {
      return;
    }

    //for autoClose is false, the popup cannot be closed while clicking the popup
    if (!autoClose && realPopupRef.current.contains(e.target)) {
      return;
    }

    changeActive(false, e);
  });

  const handleClick = useEventCallback((e, nextActive) => {
    if (disabled || hidePopup) {
      return;
    }
    if (activePopup === nextActive) {
      return;
    }

    changeActive(true, e);
  });

  const handleKeyDown = useEventCallback((e) => {
    if (disabled || hidePopup) {
      return;
    }

    if (e.keyCode === 40) {
      //press down
    }

    if (e.keyCode === 38) {
      //press up
    }

    if (e.keyCode === 13) {
      //press the enter key
      handleClick(e, true);
    }
    if (e.keyCode === 27) {
      //press the esc key
      changeActive(false, e);
    }
  });

  // close the popup while clicking the window (listens on window instead of document)
  //this works better for DateTimePicker while clicking the date button
  useEvent('mouseup', (e) => handleBackgroundClick(e),
      true, window);

  useEvent(EventListener.mouseEnter,
      (e) => handleHover(e, true, EventListener.mouseEnter, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.mouseLeave,
      (e) => handleHover(e, false, EventListener.mouseLeave, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.focus,
      (e) => handleHover(e, true, EventListener.focus, true),
      isHover,
      realCtrlRef);

  /*useEvent(EventListener.blur,
      (e) => handleHover(e, false, EventListener.blur, true),
      isHover,
      realCtrlRef);*/

  useEvent(EventListener.click,
      useCallback((e) => handleClick(e), [handleClick]),
      !isHover,
      realCtrlRef,
      false);

  useEvent(EventListener.keyDown,
      (e) => handleKeyDown(e),
      true,
      realCtrlRef);

  useEvent(EventListener.mouseEnter,
      (e) => {
        handleHover(e, true, EventListener.mouseEnter);
      },
      isHover,
      realPopupRef);

  useEvent(EventListener.mouseLeave,
      (e) => {
        handleHover(e, false, EventListener.mouseLeave);
      },
      isHover,
      realPopupRef);

  const portal = ReactDOM.createPortal(popup, rootElem);

  return <>
    {ctrl}
    {portal}
  </>;
});

Popup.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  zIndex: PropTypes.number,
  hasBox: PropTypes.bool,
  hasBorderRadius: PropTypes.bool,
  hasBorder: PropTypes.bool,
  popupExtraClassName: PropTypes.string,
  popupStyle: PropTypes.object,
  popupBodyStyle: PropTypes.object,
  offset: PropTypes.number,
  ctrlNode: PropTypes.node,
  body: PropTypes.node,
  ctrlRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
  popupRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
  activeBy: PropTypes.string,
  defaultActive: PropTypes.bool,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  hidePopup: PropTypes.bool,
  delayClose: PropTypes.number,
  animationFunc: PropTypes.func, /*the returned object should have 'disp' property*/
  position: PropTypes.string,
  autoClose: PropTypes.bool,
};

export default Popup;