import React from 'react';
import NavBar from './NavBar';
import Switch from './Switch';
import Element from '../common/Element';
import {NavBarListAlign} from '../common/Constants';
import clsx from 'clsx';

const Title = React.forwardRef((props, ref) => {
  const {className = 'title', nativeType = 'li', ...otherProps} = props;
  return <Element className={className} nativeType={nativeType} {...otherProps}
                  ref={ref}/>;
});

const List = React.forwardRef((props, ref) => {
  const {
    className = 'list',
    nativeType = 'ul',
    extraClassName,
    align = 'left',
    block,
    ...otherProps
  } = props;
  let alignClsName = NavBarListAlign[align];

  let clsName = clsx(extraClassName, className,
      {[alignClsName]: alignClsName, block});

  return <Element nativeType={nativeType} className={clsName}
                  {...otherProps}/>;
});

const Item = React.forwardRef((props, ref) => {
  const {
    block,
    className = 'item',
    nativeType = 'li',
    hasBackground,
    hasBar,
    active,
    alignRight,
    ...otherProps
  } = props;

  let extraClass = clsx({
    'with-bg': hasBackground,
    block,
    'with-bar': hasBar,
    active: active,
    'pull-right': alignRight,
  });

  return <Element className={className} extraClassName={extraClass} ref={ref}
                  nativeType={nativeType} {...otherProps}/>;
});

NavBar.List = List;
NavBar.Item = Item;
NavBar.Title = Title;
NavBar.Switch = Switch;

export default NavBar;