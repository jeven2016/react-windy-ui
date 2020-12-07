import React from 'react';
import CollapsePanel from './CollapsePanel';
import Item from './Item';
import clsx from 'clsx';
import {convertToArray, DefaultColor, isNil} from '../Utils';
import {CollapseContext} from '../common/Context';
import useInternalState from '../common/useInternalState';
import PropTypes from 'prop-types';

const Collapse = React.forwardRef((props, ref) => {
  const {
    className = 'collapse',
    extraClassName,
    defaultActive,//Array or single value
    active, //Array or single value
    accordion = false,
    hasBorder = true,
    hasBox = true,
    hasCollapseIcon = true,
    collapseIcon,
    iconPosition = 'left',
    hasRipple = true,
    rippleColor = DefaultColor.ripple.gray,
    onChange,
    children,
    disabled = false,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className, {
    'with-border': hasBorder,
    'global-with-box': hasBox,
  });

  const {
    state: currentActive,
    setState: setActive,
    customized,
  } = useInternalState({
    props,
    stateName: 'active',
    defaultState: convertToArray(defaultActive),
    state: convertToArray(active),
  });

  const clickItem = (value, isCollapsed, e) => {
    if (!customized) {
      if (isNil(currentActive)) {
        if (!isCollapsed) {
          setActive([value]);
          return;
        }
      }

      if (isCollapsed && currentActive.includes(value)) {
        //collapse the item corresponding to this value
        setActive(currentActive.filter(v => v !== value));
      }
      if (!isCollapsed) {
        if (accordion) {
          setActive([value]);
        } else if (!currentActive.includes(value)) {
          setActive(pre => [...pre, value]);
        }
      }
    }
    onChange && onChange(value, isCollapsed, e);
  };

  const ctx = {
    accordion,
    customized,
    hasBorder,
    hasCollapseIcon,
    collapseIcon: null,
    currentActive,
    iconPosition,
    hasRipple,
    rippleColor,
    clickItem: clickItem,
    disabled
  };

  return <div className={clsName} {...otherProps}>
    <CollapseContext.Provider
        value={ctx}>
      {children}
    </CollapseContext.Provider>
  </div>;
});

Collapse.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  defaultActive: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)]),
  accordion: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasCollapseIcon: PropTypes.bool,
  collapseIcon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  hasRipple: PropTypes.bool,
  disabled: PropTypes.bool,
};

Collapse.Panel = CollapsePanel;
Collapse.Item = Item;

export default Collapse;