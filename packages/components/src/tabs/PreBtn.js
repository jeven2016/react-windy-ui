import React, { useContext } from 'react';
import { IconArrowLeft, IconArrowUp } from '../Icons';
import clsx from 'clsx';
import { TabsContext } from './TabsCommon';
import PropTypes from 'prop-types';

const PreBtn = React.forwardRef((props, ref) => {
  const { className = 'tab-pre', isVertical, direction, disabled } = props;
  const context = useContext(TabsContext);

  const clsName = clsx(className, direction, { disabled: disabled });
  return (
    context.visiblePre && (
      <div className={clsName} onClick={context.clickPre}>
        {isVertical ? <IconArrowUp /> : <IconArrowLeft />}
      </div>
    )
  );
});

PreBtn.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  direction: PropTypes.string
};

export default PreBtn;
