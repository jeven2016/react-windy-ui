import React, {useContext, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {execute, isNil, place} from '../Utils';
import {JustifyContentType} from '../common/Constants';
import {MenuContext} from './MenuUtils';
import useMultipleRefs from '../common/UseMultipleRefs';

/**
 * Menu List
 */
const List = React.forwardRef((props, ref) => {
  const {className, extraClassName, children, justify, adjustPosition = false, adjustDelay = 500, ...otherProps} = props;
  let clsName = clsx(extraClassName, className);
  let listRef = useRef(null);
  var multiRefs = useMultipleRefs(ref, listRef);
  const menuCtx = useContext(MenuContext);

  useEffect(() => {
    const current = listRef.current;
    if (adjustPosition) {
      if (current) {
        const subMenuNode = current.parentNode;
        if (subMenuNode) {
          current.style.position = 'fixed';
          current.style.padding = '1px 0';
          execute(() => place(current, subMenuNode, 'rightBottom', 8),
              adjustDelay);
        }
      }
    } else {
      //for non-direct submenu, if its height exceeds the window's innerHeight,
      //the top position needs to adjust
      //todo
      const listRect = current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const y = listRect.top + listRect.height;
      if (y > windowHeight) {

      }
    }
  });

  if (!isNil(justify)) {
    clsName = clsx(clsName, JustifyContentType[justify]);
  }

  return <ul className={clsName} ref={multiRefs} {...otherProps}>
    {children}
  </ul>;
});

List.defaultProps = {
  className: 'menu-list',
};
export default List;