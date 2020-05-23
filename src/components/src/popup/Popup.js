import React, {useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import ReactDOM from 'react-dom';
import useContainer from '../common/UseContainer';
import {ContainerId, EventListener, PopupPosition} from '../common/Constants';
import {animated, useSpring} from 'react-spring';
import {execute, isNil, isString, place, setDisplay} from '../Utils';
import {setDirectRef} from '../common/UseMultipleRefs';
import useResizeObserver from '../common/UseResizeObserver';
import useEvent from '../common/UseEvent';
import useInternalState from '../common/useInternalState';
import clsx from 'clsx';

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
    hasBox = false,
    hasBorderRadius = true,
    hasBorder = false,
    popupStyle,
    extraClassName,
    className = 'popup',
    offset = 8,
    ctrlNode,
    body,
    ctrlRef,
    activeBy = 'click',
    defaultActive = false,
    active,
    disabled = false,
    delayClose = 100,
    animationFunc,
    position = PopupPosition.bottom,
    autoClose = true, //auto close while clicking the body of the popup
    ...otherProps
  } = props;
  const rootElem = useContainer(ContainerId.popup);
  const isHover = activeBy === 'hover';

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
  const popupRef = useRef(null);

  //ctrl node ref
  const realCtrlRef = useRef(null);
  const setCtrlRef = (ctrlDomNode) => {
    setDirectRef(realCtrlRef, ctrlDomNode);
    setDirectRef(ctrlRef, ctrlDomNode);
  };

  useImperativeHandle(ref, () => ({
    isActive: activePopup,
  }), [activePopup]);

  //-------------update the popup's position------------------
  const updatePosition = useCallback(() => {
    //cannot directly access the state in this method
    const ctrlDom = realCtrlRef.current;
    const popupDom = popupRef.current;
    if (ctrlDom && popupDom && popupDom.style.display !== 'none') {
      place(popupDom, ctrlDom, position, offset);
      popupDom.getElementsByClassName('popup-mask').forEach(popupMask => {
        popupMask.style.top = -(offset + 3) + 'px';
      });
    }
  }, [realCtrlRef, popupRef, offset]);

  useResizeObserver(() => realCtrlRef.current,
      updatePosition
      , true, () => true);

  useResizeObserver(document.body,
      updatePosition, true, () => true);

  //----------------------------------------------

  const preUpdate = useCallback(() => {
        setDisplay(activePopup, 'flex', popupRef);
        updatePosition();
      },
      [activePopup, updatePosition, popupRef]);

  const postUpdate = useCallback(
      () => setDisplay(!activePopup, 'none', popupRef),
      [activePopup, popupRef]);

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
  const popup = <animated.div ref={popupRef} style={springProps}
                              className={popupClsName} {...otherProps}>
    <div className="popup-content" style={popupStyle}>
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

  const handleHover = (e, nextActive, eventType, forceUpdate = false) => {
    if (disabled || !isHover) {
      return;
    }
    console.log('forceUpdate=' + forceUpdate);
    if (!forceUpdate) {
      //the hover event should only be fired by controller or popup
      //the menu items or popover-arrow cannot trigger closing the popup
      //the relatedTarget == fromElement, but firefox doesn't support this parameter,
      //so using relatedTarget instead.
      const isValidOver = eventType === EventListener.mouseEnter &&
          !popupRef.current.contains(e.relatedTarget) &&
          popupRef.current.contains(e.target);
      if (!isValidOver) {
        console.log(e);
      }

      const isValidOut = eventType === EventListener.mouseEnter &&
          popupRef.current.contains(e.relatedTarget) &&
          !popupRef.current.contains(e.target);

      if (!isValidOver && !isValidOut) {
        return;
      }
    }

    if (!nextActive) {
      if (!isNil(preCloseRef.current)) {
        return;
      }
      preCloseRef.current = execute(() => {
        setActive(nextActive);
      }, delayClose);
      return;
    }

    if (nextActive) {
      clearCloseTimer();
      setActive(nextActive);
    }
  };

  const handleBackgroundClick = useCallback((e) => {
    if (!activePopup || realCtrlRef.current.contains(e.target)) {
      return;
    }

    //for autoClose is false, the popup cannot be closed while clicking the body of the popup
    if (!autoClose && popupRef.current.contains(e.target)) {
      return;
    }

    setActive(false);
  }, [activePopup, setActive, realCtrlRef]);

  const handleClick = useCallback((e, nextActive) => {
    if (disabled) {
      return;
    }
    if (activePopup === nextActive) {
      return;
    }
    setActive(nextActive);
  }, [disabled, activePopup, setActive]);

  const handleKeyDown = useCallback((e) => {
    if (disabled) {
      return;
    }
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      //press the enter key
      handleClick(e, true);
    }
    if (e.keyCode === 27) {
      //press the esc key
      setActive(false);
    }
  }, [disabled, handleClick, setActive]);

  // close the popup while clicking the window (listens on window object instead of document)
  useEvent(EventListener.click, (e) => handleBackgroundClick(e),
      true, window);

  useEvent(EventListener.mouseEnter,
      (e) => handleHover(e, true, EventListener.mouseEnter, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.mouseLeave,
      (e) => handleHover(e, false, EventListener.mouseEnter, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.focus,
      (e) => handleHover(e, true, EventListener.mouseEnter, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.blur,
      (e) => handleHover(e, false, EventListener.mouseEnter, true),
      isHover,
      realCtrlRef);

  useEvent(EventListener.click,
      (e) => handleClick(e, true),
      !isHover,
      realCtrlRef);

  useEvent(EventListener.keyDown,
      (e) => handleKeyDown(e),
      !isHover,
      realCtrlRef);

  useEvent(EventListener.mouseEnter,
      (e) => handleHover(e, true, EventListener.mouseEnter),
      isHover,
      popupRef);

  useEvent(EventListener.mouseLeave,
      (e) => handleHover(e, false, EventListener.mouseEnter),
      isHover,
      popupRef);

  const portal = ReactDOM.createPortal(popup, rootElem);

  return <>
    {ctrl}
    {portal}
  </>;
});

export default Popup;