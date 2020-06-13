import React from 'react';
import CollapsePanel from './CollapsePanel';
import Item from './Item';
import clsx from 'clsx';
import useInternalActive from '../common/useInternalActive';
import {convertToArray, isNil} from '../Utils';
import {CollapseContext} from '../common/Context';
import useInternalState from '../common/useInternalState';
import PropTypes from 'prop-types';

const Collapse = React.forwardRef((props, ref) => {
  const {
    defaultActive,//Array or single value
    onChange,
    active, //Array or single value
    accordion = false,
    hasBorder = true,
    hasBox = true,
    hasCollapseIcon = true,
    collapseIcon,
    extraClassName,
    children,
    iconPosition = 'left',
    className = 'collapse',
    ...otherProps
  } = props;
  useInternalActive();
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

  const itemClickHandler = (value, isCollapsed) => {
    if (!customized) {
      if (isNil(currentActive)) {
        if (!isCollapsed) {
          setActive([value]);
          return;
        }
      }

      if (isCollapsed && currentActive.includes(value)) {
        //collapse the item corresponding to this value
        setActive(pre => currentActive.filter(v => v !== value));
      }
      if (!isCollapsed) {
        if (accordion) {
          setActive([value]);
        } else if (!currentActive.includes(value)) {
          setActive(pre => [...pre, value]);
        }
      }
    }
    onChange && onChange(value, isCollapsed);
  };

  const ctx = {
    accordion,
    customized,
    hasBorder,
    hasCollapseIcon,
    collapseIcon: null,
    currentActive,
    iconPosition,
    clickItem: itemClickHandler,
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
  defaultActive: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  onChange: PropTypes.func,
  active: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  accordion: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasCollapseIcon: PropTypes.bool,
  collapseIcon: PropTypes.node,

  children: PropTypes.node,
  iconPosition: PropTypes.string,

};

Collapse.Panel = CollapsePanel;
Collapse.Item = Item;

export default Collapse;