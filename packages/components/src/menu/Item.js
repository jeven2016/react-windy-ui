import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {includes, invoke, isNil, nonNil, preventEvent} from '../Utils';
import {Action, getPaddingStyle} from './MenuUtils';
import PropTypes from 'prop-types';
import {animated, useSpring} from 'react-spring';
import Tooltip from '../Tooltip';
import {MenuType} from '../common/Constants';
import Ripple from '../common/Ripple';
import useEventCallback from '../common/useEventCallback';

const Item = React.forwardRef((props, ref) => {
  const ctx = useContext(MenuContext);
  const rippleRef = useRef(null);

  //bind ripple related event listeners
  const updatedProps = Ripple.useRippleEvent({
    rippleRef,
    rootProps: props,
    hasRipple: ctx.hasRipple,
  });

  const {
    className = 'menu-item',
    extraClassName,
    children,
    customizedChildren = false, //whether to show the customized children and ignore the children parameter
    disabled,
    id,
    equitable = false,
    align,
    hasBackground,
    hasBottomBar,
    icon,
    directChild = false,
    onClick,
    level,
    style,
    ...otherProps
  } = updatedProps;
  const {attach, detach} = ctx.store;

  //if the defaultActiveItems defined, ensure the initial active is correct
  const [active, setActive] = useState(includes(ctx.activeItems, id));

  const isActive = useMemo(() => {
    if (ctx.customActive) {
      return includes(ctx.activeItems, id)
    }
    return active
  }, [ctx.customActive, ctx.activeItems, active, id]);

  const isDisabled = nonNil(disabled) ? disabled : ctx.disabled;

  const show = !ctx.compact;
  const springConfig = useMemo(() => ({
    to: {opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0)'},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [show]);
  const innerProps = useSpring(springConfig);

  useEffect(() => {
    if (isNil(id)) {
      return;
    }

    //only register this listener for non-controlled items
    const listener = ({activeItemsList}) => {
      if (!isDisabled && nonNil(id)) {
        const nextActive = includes(activeItemsList, id);
        if (nextActive && !isActive) {
          setActive(true);
        }

        if (!nextActive && isActive) {
          setActive(false);
        }
      }
    };

    !ctx.customActive && attach(listener);
    return () => detach(listener);
  }, [ctx.customActive, isActive, id, setActive, detach, attach, isDisabled]);

  const clickHandler = useEventCallback((e) => {
    if (isDisabled) {
      preventEvent(e);
      return;
    }

    if (!isNil(id) && ctx.selectable) {
      ctx.dispatch({type: Action.clickHeader, id, e});
    }

    invoke(onClick, e);
    invoke(ctx.onClickItem, id, e);
  });

  const clsName = clsx(extraClassName, className, {
    [ctx.type]: ctx.type,
    equitable: equitable,
    [align]: align,
    disabled: isDisabled,
    active: isActive,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
    'left-bar': ctx.type === MenuType.primary && ctx.primaryBarPosition ===
      'left',
    'right-bar': ctx.type === MenuType.primary && ctx.primaryBarPosition ===
      'right',
  });

  const content = useMemo(() => {
    if (customizedChildren) {
      return children;
    }

    const iconCnt = icon ? <div className="item-icon">{icon}</div> : null;
    if (!directChild) {
      return <>
        {iconCnt}
        <div className="item-info">{children}</div>
      </>;
    }
    return !show ? iconCnt : <>
      {iconCnt}

      <animated.div className="item-info"
                    style={innerProps}>{children}</animated.div>
    </>;
  }, [customizedChildren, icon, directChild, show, innerProps, children]);

  const paddingStyle = useMemo(() => ctx.autoIndent ?
    getPaddingStyle({
      ignored: ctx.popupSubMenu,
      indentUnit: ctx.indentUnit,
      indentation: ctx.indentation,
      initIndent: ctx.initIndent,
      level: level,
    }) : null,
    [
      ctx.autoIndent,
      ctx.indentUnit,
      ctx.indentation,
      ctx.initIndent,
      ctx.popupSubMenu,
      level]);

  const renderCnt = <div ref={ref} className={clsName} {...otherProps}
                         onClick={clickHandler}
                         style={{...paddingStyle, ...style}}>
    {content}
    {
      ctx.hasRipple && !isDisabled &&
      <Ripple ref={rippleRef} color={ctx.rippleColor}/>
    }
  </div>;

  if (!show && directChild) {
    return <Tooltip body={children} position="right">
      {renderCnt}
    </Tooltip>;
  }

  return renderCnt;
});

Item.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  equitable: PropTypes.bool,
  align: PropTypes.string,
  hasBackground: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  icon: PropTypes.node,
  directChild: PropTypes.bool,
  onClick: PropTypes.func,
  customizedChildren: PropTypes.bool, //whether to show the customized children and ignore the children parameter
  level: PropTypes.number,
};

export default Item;