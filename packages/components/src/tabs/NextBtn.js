import React, { useContext } from 'react';
import { IconArrowDown, IconArrowRight } from '../icon';
import clsx from 'clsx';
import { TabsContext } from './TabsCommon';
import PropTypes from 'prop-types';

const NextBtn = React.forwardRef((props, ref) => {
  const { extraClassName, className = 'tab-next', disabled = false, isVertical, direction } = props;
  const context = useContext(TabsContext);

  const clsName = clsx(extraClassName, className, direction, { disabled: disabled });
  return (
    context.visibleNext && (
      <div className={clsName} onClick={context.clickNext} ref={ref}>
        {isVertical ? <IconArrowDown /> : <IconArrowRight />}
      </div>
    )
  );
});

NextBtn.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  direction: PropTypes.string
};

export default NextBtn;
