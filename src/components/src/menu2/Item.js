import React, {useContext} from 'react';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';

const Item = React.forwardRef((props, ref) => {
  const {
    children,
    disabled,
  } = props;
  const ctx = useContext(MenuContext);
  const clsName = clsx('menu-item', {
    [ctx.type]: ctx.type,
    disabled: disabled,
  });

  return <div className={clsName}>
    {children}
  </div>;
});

export default Item;