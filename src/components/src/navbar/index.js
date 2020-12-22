import React, {useContext} from 'react';
import Navbar from './Navbar';
import Switch from './Switch';
import Element from '../common/Element';
import {JustifyContentType} from '../common/Constants';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {NavbarContext} from '../common/Context';
import {nonNil} from '../Utils';

/**
 * Title Component
 */
const Title = React.forwardRef((props, ref) => {
  const {
    className = 'title',
    children,
    ...otherProps
  } = props;

  const newChd = React.Children.map(children, chd => {
    if (chd.type === Switch) {
      return chd;
    }
    return <div className="title-info">{chd}</div>;
  });

  return <div className="left-bar">
    <div className={className}
         {...otherProps}
         ref={ref}>
      {newChd}
    </div>
  </div>;
});

/**
 * List Component
 */
const List = React.forwardRef((props, ref) => {
  const {
    className = 'list',
    nativeType = 'ul',
    extraClassName,
    justify = 'end',
    style,
    ...otherProps
  } = props;
  const {expandList, smallWindow} = useContext(NavbarContext);
  let justifyCls = JustifyContentType[justify];

  let clsName = clsx(extraClassName, className, {
    [justifyCls]: justifyCls,
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

/**
 * Item Component
 */
const Item = React.forwardRef((props, ref) => {
  const {
    className = 'navbar-item',
    extraClassName,
    nativeType = 'li',
    hasBackground,
    hasBar,
    active = false,
    compact = false,
    ...otherProps
  } = props;
  
  const {hasItemBackground: menuHasBg, menuHasBar} = useContext(NavbarContext);
  let extraClass = clsx(extraClassName, {
    'with-bg': nonNil(hasBackground) ? hasBackground : menuHasBg,
    'with-bar': nonNil(hasBar) ? hasBar : menuHasBar,
    active: active,
    compact,
  });

  return <Element className={className} extraClassName={extraClass} ref={ref}
                  nativeType={nativeType} {...otherProps}/>;
});

Title.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
};

List.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  nativeType: PropTypes.string,
  justify: PropTypes.string,
};

Item.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  nativeType: PropTypes.string,
  hasBackground: PropTypes.bool,
  hasBar: PropTypes.bool,
  active: PropTypes.bool,
  compact: PropTypes.bool,
};

Navbar.List = List;
Navbar.Item = Item;
Navbar.Title = Title;
Navbar.Switch = Switch;

export default Navbar;