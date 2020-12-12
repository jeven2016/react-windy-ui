import React, {useContext, useMemo, useState} from 'react';
import Navbar from './Navbar';
import Switch from './Switch';
import Element from '../common/Element';
import {NavbarListAlign} from '../common/Constants';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {NavbarContext} from '../common/Context';
import {useTransition} from 'react-spring';

const Title = React.forwardRef((props, ref) => {
  const {className = 'title', nativeType = 'li', ...otherProps} = props;
  return <div className="left-bar">
    <Element className={className}
             nativeType={nativeType} {...otherProps}
             ref={ref}/></div>;
});

const List = React.forwardRef((props, ref) => {
  const {
    className = 'list',
    nativeType = 'ul',
    extraClassName,
    align = 'left',
    style,
    ...otherProps
  } = props;
  const {expandList, smallWindow} = useContext(NavbarContext);
  let alignClsName = NavbarListAlign[align];

  let clsName = clsx(extraClassName, className, {
    [alignClsName]: alignClsName,
    'small-window': smallWindow,
  });

  const newStyle = {
    ...style,
    display: (expandList && smallWindow) || !smallWindow ? 'flex' : 'none',
  };

  return <Element nativeType={nativeType} className={clsName} ref={ref}
                  style={newStyle}
                  {...otherProps}/>;
});

const Item = React.forwardRef((props, ref) => {
  const {
    className = 'navbar-item',
    extraClassName,
    nativeType = 'li',
    hasBackground = false,
    hasBar = false,
    active = false,
    alignRight,
    ...otherProps
  } = props;

  let extraClass = clsx(extraClassName, {
    'with-bg': hasBackground,
    'with-bar': hasBar,
    active: active,
    'pull-right': alignRight,
  });

  return <Element className={className} extraClassName={extraClass} ref={ref}
                  nativeType={nativeType} {...otherProps}/>;
});

Title.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  nativeType: PropTypes.string,
};

List.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  nativeType: PropTypes.string,
  alignRight: PropTypes.bool,
};

Item.propTypes = {
  block: PropTypes.bool,
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  nativeType: PropTypes.string,
  hasBackground: PropTypes.bool,
  hasBar: PropTypes.bool,
  active: PropTypes.bool,
  alignRight: PropTypes.bool,
};

Navbar.List = List;
Navbar.Item = Item;
Navbar.Title = Title;
Navbar.Switch = Switch;

export default Navbar;