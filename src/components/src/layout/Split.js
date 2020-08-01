import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Split = React.forwardRef((props, ref) => {
  const {
    className = 'layout-split',
    extraClassName,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);

  return <div ref={ref} className={clsName} {...otherProps}/>;
});

Split.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

export default Split;