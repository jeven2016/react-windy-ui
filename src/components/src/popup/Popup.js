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
import {execute, isNil, isString, place, setDisplay} from '../Utils';
import {setDirectRef} from '../common/UseMultipleRefs';
import useResizeObserver from '../common/UseResizeObserver';
import useEvent from '../common/UseEvent';
import useInternalState from '../common/useInternalState';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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
    zIndex = 200,
    hasBox = false,
    hasBorderRadius = true,
    hasBorder = false,
    popupExtraClassName,
    popupStyle,
    popupBodyStyle,
    extraClassName,
    className = 'popup',
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
  const activePopup = isActive;
  const preActiveRef = useRef(null);
  preActiveRef.current = activePopup;

  //popup ref
  const realPopupRef = useRef(null);
  const setPopupRef = (domNode) => {
    setDirectRef(realPopupRef, domNode);
    setDirectRef(popupRef, domNode);
  };

  //ctrl node ref
  const realCtrlRef = useRef(null);
  const setCtrlRef = (ctrlDomNode) => {
    setDirectRef(realCtrlRef, ctrlDomNode);
    setDirectRef(ctrlRef, ctrlDomNode);
  };

  useImperativeHandle(ref, () => ({
    isActive: activePopup,
    changeActive: changeActive,
  }), [activePopup, changeActive]);

  //-------------update the popup's position------------------
  const updatePosition = useCallback(() => {
    //cannot directly access the state in this method
    const ctrlDom = realCtrlRef.current;
    const popupDom = realPopupRef.current;
    if (ctrlDom && popupDom && popupDom.style.display !== 'none') {
      place(popupDom, ctrlDom, position, offset);
      popupDom.getElementsByClassName('popup-mask').forEach(popupMask => {
        popupMask.style.top = -(offset + 3) + 'px';
      });
    }
  }, [position, realCtrlRef, realPopupRef, offset]);

  useResizeObserver(() => realCtrlRef.current,
      updatePosition
      , true, () => true);

  useResizeObserver(document.body,
      updatePosition, true, () => true);

  useEvent(EventListener.scroll, updatePosition);

  //----------------------------------------------

  const preUpdate = useCallback(() => {
        setDisplay(activePopup, 'block', realPopupRef);
        updatePosition();
      },
      [activePopup, updatePosition, realPopupRef]);

  const postUpdate = useCallback(
      () => setDisplay(!activePopup, 'none', realPopupRef),
      [activePopup, realPopupRef]);

  const transform = useMemo(() => {
    return getTranslate(position, activePopup, offset);
  }, [position, activePopup, offset]);

  const animationSetting = animationFunc ? animationFunc(activePopup) : {
    from: {transform: 'translate3d(0px, 0px, 0px)', opacity: 0},
    to: {
      transform: transform.transform,
      opacity: activePopup ? 1 : 0,
    },
  };

  const springProps = useSpring({
    from: animationSetting.from,
    to: animationSetting.to,
    onStart: preUpdate,
    onRest: postUpdate,
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  //get the controller node
  const ctrl = isString(ctrlNode) ? <div className="popup-title"
                                         ref={setCtrlRef}>{ctrlNode}</div>
      : React.cloneElement(ctrlNode, {
        ref: setCtrlRef,
      });

  //get the popup node
  const popupClsName = clsx(extraClassName, className, {
    'global-with-box': hasBox,
    'with-border-radius': hasBorderRadius,
    'global-with-border': hasBorder,
  });

  const popupCntClsName = clsx(popupExtraClassName, 'popup-content');

  const mergedProps = {
    ...popupStyle, ...otherProps, ...springProps,
    zIndex: zIndex,
  };
  const popup = <animated.div ref={setPopupRef}
                              className={popupClsName} style={mergedProps}>
    <div className={popupCntClsName} style={popupBodyStyle}>
      {body}
    </div>
  </animated.div>;

  //previous closing timer
  const preCloseRef = useRef(null);
  const clearCloseTimer = useCallback(() => {
    const preTimeout = preCloseRef.current;
    if (!isNil(preTimeout)) {
      preCloseRef.current = null;
      clearTimeout(preTimeout);
    }
  }, [preCloseRef]);

  const changeActive = useCallback((state) => {
    if (!customActive) {
      setActive(state);
    }
    onChange && onChange(state);
  }, [customActive, setActive, onChange]);

  const handleHover = (e, nextActive, eventType, forceUpdate = false) => {
    if (disabled || !isHover) {
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
        changeActive(nextActive);
      }, delayClose);
      return;
    }

    if (nextActive) {
      clearCloseTimer();
      if (activePopup) {
        return;
      }
      changeActive(nextActive);
    }
  };

  const handleBackgroundClick = useCallback((e) => {
    if (!activePopup || realCtrlRef.current.contains(e.target)) {
      return;
    }

    //for autoClose is false, the popup cannot be closed while clicking the popup
    if (!autoClose && realPopupRef.current.contains(e.target)) {
      return;
    }

    changeActive(false);
  }, [activePopup, realCtrlRef, autoClose, realPopupRef, changeActive]);

  const handleClick = useCallback((e, nextActive) => {
    if (disabled) {
      return;
    }
    if (activePopup === nextActive) {
      return;
    }

    changeActive(true);
  }, [disabled, activePopup, changeActive]);

  const handleKeyDown = useCallback((e) => {
    if (disabled) {
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
      changeActive(false);
    }
  }, [disabled, handleClick, changeActive]);

  // close the popup while clicking the window (listens on window object instead of document)
  useEvent(EventListener.click, (e) => handleBackgroundClick(e),
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
      (e) => handleClick(e),
      !isHover,
      realCtrlRef);

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
  zIndex: PropTypes.number,
  hasBox: PropTypes.bool,
  hasBorderRadius: PropTypes.bool,
  hasBorder: PropTypes.bool,
  popupExtraClassName: PropTypes.string,
  popupStyle: PropTypes.object,
  popupBodyStyle: PropTypes.object,
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  offset: PropTypes.number,
  ctrlNode: PropTypes.node,
  body: PropTypes.node,
  activeBy: PropTypes.string,
  defaultActive: PropTypes.bool,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  delayClose: PropTypes.number,
  animationFunc: PropTypes.func,
  position: PropTypes.string,
  autoClose: PropTypes.bool,
};

export default Popup;