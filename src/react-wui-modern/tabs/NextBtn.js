import React, {useContext} from 'react';
import {IconArrowDown, IconArrowRight} from '../Icons';
import clsx from 'clsx';
import {TabsContext} from './TabsCommon';

const NextBtn = React.forwardRef((props, ref) => {
  const {
    className = 'tab-next',
    disabled,
    isVertical,
    direction,
  } = props;
  const context = useContext(TabsContext);

  const clsName = clsx(className, direction, {disabled: disabled});
  return context.visibleNext &&
      <div className={clsName} onClick={context.clickNext} ref={ref}>
        {isVertical ? <IconArrowDown/> : <IconArrowRight/>}
      </div>;
});

export default NextBtn;