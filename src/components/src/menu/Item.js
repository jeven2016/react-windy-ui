import React, {useContext, useMemo} from 'react';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {isNil} from '../Utils';
import {MenuConst} from './MenuUtils';
import PropTypes from 'prop-types';

const Item = React.forwardRef((props, ref) => {
  const {
    className = 'menu-item',
    extraClassName,
    children,
    disabled,
    id,
    equitable = false,
    align,
    hasBackground,
    hasBottomBar,
      icon,
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const activeItemsList = !isNil(ctx.activeItemsList)
      ? ctx.activeItemsList
      : [];

  const isActive = useMemo(() => {
    if (disabled) {
      return false;
    }

    if (!isNil(id)) {
      if (activeItemsList.includes(id) ||
          activeItemsList.includes(MenuConst.all)) {
        return true;
      }
    }
    return false;
  }, [disabled, activeItemsList, id]);

  const clickHandler = (evt) => {
    if (disabled) {
      return;
    }
    const itemInfo = {
      id: id,
      props: props,
    };

    if (!ctx.clickItem) {
      return;
    }
    let closeMenu = ctx.clickItem(itemInfo, evt);

    //whether close the menu
  };

  const clsName = clsx(extraClassName, className, {
    [ctx.type]: ctx.type,
    equitable: equitable,
    [align]: align,
    disabled: disabled,
    active: isActive,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
  });

  return <div className={clsName} {...otherProps} onClick={clickHandler}>
    {icon}{children}
  </div>;
});

Item.propTypes = {
  equitable: PropTypes.bool,
  hasBackground: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  align: PropTypes.string,
};

export default Item;