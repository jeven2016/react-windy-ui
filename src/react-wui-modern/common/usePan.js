import React, {useEffect, useRef} from 'react';
import {isNil} from '../Utils';
import Hammer from 'hammerjs';

/**
 * Return a default handler for using pan
 * @param targetRef removable target object
 * @param contentRef the content whose border should be highlighted
 * @returns {handler}
 */
const useMove = (targetRef, contentRef = targetRef) => {
  const previousRef = useRef({
    lastX: 0,
    lastY: 0,
    dragging: false,
  });
  const handler = (ev) => {
    const target = targetRef.current;
    const cnt = contentRef.current;

    const cntPos = target.getBoundingClientRect();
    if (!previousRef.current.dragging) {
      previousRef.current = {
        lastX: cntPos.left,
        lastY: cntPos.top,
        dragging: true,
      };
      cnt.style.border = ' 0.1875rem dashed #fbbe11';
      cnt.style.opacity = '0.8';
    }

    let posX = ev.deltaX + previousRef.current.lastX;
    let posY = ev.deltaY + previousRef.current.lastY;

    target.style.transform = `translate(${posX}px,${posY}px)`;
    if (ev.isFinal) {
      previousRef.current = {
        ...previousRef.current,
        dragging: false,
      };
      cnt.style.border = 'none';
      cnt.style.opacity = '1';
    }
  };

  return handler;
};

const usePan = (draggerRef, onMove) => {
  useEffect(() => {
    if (isNil(onMove)) {
      return;
    }
    const mc = new Hammer(draggerRef.current);//this ref should reference to header
    mc.get('pan').set({direction: Hammer.DIRECTION_ALL});
    mc.on('pan', (ev) => {
      onMove(ev);
    });

    return () => {
      mc.stop();
      mc.destroy();
    };
  }, []);
};
export {useMove};
export default usePan;