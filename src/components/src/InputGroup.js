import React, {useContext, useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputGroupContext} from './common/Context';

const InputGroup = React.forwardRef((props, ref) => {
  const {block, size, className = 'input-group', extraClassName, ...otherProps} = props;

  let clsName = clsx(extraClassName, className, {block: block});
  const ctx = useMemo(() => ({size, withinGroup: true}), [size]);

  return <InputGroupContext.Provider value={ctx}>
    <span ref={ref} className={clsName} {...otherProps}/>
  </InputGroupContext.Provider>;
});

const Label = React.forwardRef((props, ref) => {
  const {className = 'label', extraClassName, ...otherProps} = props;
  const ctx = useContext(InputGroupContext);
  let clsName = clsx(extraClassName, className);

  return <div ref={ref} className={`${clsName} ${ctx.size}`} {...otherProps}/>;
});

InputGroup.Label = Label;

InputGroup.defaultProps = {
  size: 'medium',
};

InputGroup.propTypes = {
  block: PropTypes.bool, //whether to occupy the whole row
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
};
export default InputGroup;