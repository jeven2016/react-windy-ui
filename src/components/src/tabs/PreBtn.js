import React, {useContext} from 'react';
import {IconArrowLeft, IconArrowUp} from '../Icons';
import clsx from 'clsx';
import {TabsContext} from './TabsCommon';

const PreBtn = React.forwardRef((props, ref) => {
  const {
    className = 'tab-pre',
    isVertical,
    direction,
    disabled,
  } = props;
  const context = useContext(TabsContext);

  const clsName = clsx(className, direction, {disabled: disabled});
  return context.visiblePre && <div className={clsName} onClick={context.clickPre}>
    {isVertical ? <IconArrowUp/> : <IconArrowLeft/>}
  </div>;
});

export default PreBtn;