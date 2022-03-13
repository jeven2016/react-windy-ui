import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const TabPanel = React.forwardRef((props, ref) => {
  const { className = 'tab-panel', extraClassName, children, itemValue, ...otherProps } = props;
  const clsName = clsx(extraClassName, className);
  return (
    <div ref={ref} className={clsName} {...otherProps}>
      {children}
    </div>
  );
});

TabPanel.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  itemValue: PropTypes.any
};
export default TabPanel;
