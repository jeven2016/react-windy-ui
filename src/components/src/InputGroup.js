import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const InputGroup = React.forwardRef((props, ref) => {
  const {block, className = 'input-group', extraClassName, ...otherProps} = props;

  let clsName = clsx(extraClassName, className, {block: block});

  return (
      <span ref={ref} className={clsName} {...otherProps}/>
  );
});

const Label = React.forwardRef((props, ref) => {
  const {className = 'label', extraClassName, ...otherProps} = props;
  let clsName = clsx(extraClassName, className);

  return <div ref={ref} className={clsName} {...otherProps}/>;
});

InputGroup.Label = Label;

InputGroup.propTypes = {
  block: PropTypes.bool, //whether to occupy the whole row
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
};
export default InputGroup;