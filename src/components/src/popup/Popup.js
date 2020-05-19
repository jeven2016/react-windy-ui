import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import ReactDOM from 'react-dom';
import useContainer from '../common/UseContainer';
import {ContainerId, EventListener} from '../common/Constants';
import {animated, useSpring} from 'react-spring';
import {execute, isNil, isString, place, setDisplay} from '../Utils';
import useMultipleRefs, {setDirectRef} from '../common/UseMultipleRefs';
import useResizeObserver from '../common/UseResizeObserver';
import useEvent from '../common/UseEvent';
import useInternalState from '../common/useInternalState';
import clsx from 'clsx';
import {preventEvent} from '../event';

const Popup = React.forwardRef((props, ref) => {
  const {
    hasBox = false,
    hasBorderRadius = true,
    hasBorder = true,
    extraClassName,
    className = 'popup',
    startOffset = 5,
    ctrlNode,
    body,

    ctrlRef,

    activeBy = 'click',
    defaultActive = false,
    active,

    disabled = false,
    delayClose = 100,

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
  console.log(`state change....${activePopup}`);

  //popup ref
  const popupRef = useRef(null);
  const multiRef = useMultipleRefs(ref, popupRef);

  //ctrl node ref
  const realCtrlRef = useRef(null);
  const setCtrlRef = (ctrlDomNode) => {
    setDirectRef(realCtrlRef, ctrlDomNode);
    setDirectRef(ctrlRef, ctrlDomNode);
  };

  //-------------update the popup's position------------------
  const updatePosition = useCallback(() => {
    //cannot directly access the state in this method
    const ctrlDom = realCtrlRef.current;
    const popupDom = popupRef.current;
    if (ctrlDom && popupDom && popupDom.style.display !== 'none') {
      place(popupDom, ctrlDom, 'bottom', startOffset);
      popupDom.getElementsByClassName('popup-mask').forEach(popupMask => {
        popupMask.style.top = -(startOffset + 3) + 'px';
      });
    }
  }, [realCtrlRef, popupRef, startOffset]);

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
    const position = 'bottom';
    const transOffset = startOffset + 20;
    switch (position) {
      case 'bottom':
        return {
          transform: activePopup
              ? 'translate3d(0px, 0px, 0px)'
              : `translate3d(0px, ${transOffset}px, 0px)`,
        };
    }
  }, [activePopup]);

  const springProps = useSpring({
    from: {transform: 'translate3d(0px, 0px, 0px)', opacity: 0},
    to: {
      transform: transform.transform,
      opacity: activePopup ? 1 : 0,
    },
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
  const popup = <animated.div ref={multiRef} style={springProps}
                              className={popupClsName}>
    {/*<div className="popup-mask"/>*/}
    <div className="popup-content">
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

  //todo
  const handleHover = (e, nextActive, eventType) => {
    if (disabled || !isHover) {
      return;
    }
    console.log(e);

    /**
     * 当触发onmouseover事件时，判断鼠标离开的元素是否是当前元素的内部元素，如果是，忽略此事件；
     ○ 当触发onmouseout事件时，判断鼠标进入的元素是否是当前元素的内部元素，如果是，忽略此事件；
     */
    if (eventType === EventListener.mouseEnter) {
      if (popupRef.current.contains(e.fromElement)) {
        return;
      }
    }

    if (eventType === EventListener.mouseLeave) {
      if (popupRef.current.contains(e.toElement) && popupRef.current !==
          e.toElement) {
        return;
      }
    }

    //the hover event should only be fired by controller or popup
    //the menu items or popover-arrow cannot trigger closing the popup
    const stopPop = e && realCtrlRef.current !== e.target &&
        popupRef.current !== e.target;

    if (stopPop) {
      // return;
    }

    if (activePopup === nextActive && nextActive) {
      clearCloseTimer();
    }

    if (!nextActive) {
      if (!isNil(preCloseRef.current)) {
        return;
      }
      console.log('closing...');
      preCloseRef.current = execute(() => {
        setActive(nextActive);
      }, delayClose);
      return;
    }

    if (nextActive) {
      console.log('open...');
      clearCloseTimer();
      setActive(nextActive);
    }
  };

  const handleDocumentClick = (e) => {
    if (!activePopup || realCtrlRef.current.contains(e.target)) {
      return;
    }
    setActive(false);
  };

  const handleClick = (e, nextActive) => {
    if (disabled) {
      return;
    }
    if (activePopup === nextActive) {
      return;
    }
    setActive(nextActive);
  };

  const handleKeyDown = (e) => {
    console.log('keydown');
    if (disabled) {
      return;
    }
    if (e.keyCode === 13) {
      //press the enter key
      handleClick(e, true);
    }
    if (e.keyCode === 27) {
      //press the esc key
      setActive(false);
    }
  };

  //close the popup while clicking the document
  useEvent(EventListener.click, (e) => handleDocumentClick(e),
      true, window.document);

  useEvent(EventListener.mouseEnter,
      (e) => handleHover(e, true, EventListener.mouseEnter),
      isHover,
      realCtrlRef);

  useEvent(EventListener.mouseLeave,
      (e) => handleHover(e, false, EventListener.mouseEnter),
      isHover,
      realCtrlRef);

  useEvent(EventListener.focus,
      (e) => handleHover(e, true, EventListener.mouseEnter),
      isHover,
      realCtrlRef);

  useEvent(EventListener.blur,
      (e) => handleHover(e, false, EventListener.mouseEnter),
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

  useEvent(EventListener.click,
      (e) => handleClick(e, false),
      true,
      popupRef);

  const portal = ReactDOM.createPortal(popup, rootElem);

  return <>
    {ctrl}
    {portal}
  </>;
});

export default Popup;