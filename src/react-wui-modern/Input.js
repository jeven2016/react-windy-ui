import React, {useImperativeHandle, useRef} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputBorderType} from './common/Constants';
import Element from './common/Element';

const IconInput = React.forwardRef((props, ref) => {
  const {
    borderType, children, leftIcon, className = 'icon-input',
    inputRef,
    extraClassName,
    size = 'medium', block, ...otherProps
  } = props;
  let borderTypeCls = InputBorderType[borderType];
  let clsName = clsx(extraClassName, className, {
    'left-icon': leftIcon,
    [size]: size,
    block: block,
    [borderTypeCls]: borderTypeCls,
  });

  let newChildren = children;
  if (inputRef) {
    newChildren = React.Children.map(children, chd => {
      if (chd.type === Input) {
        return React.cloneElement(chd, {ref: inputRef});
      }
      return chd;
    });
  }

  return <span className={clsName} {...otherProps} ref={ref}>
    {newChildren}
  </span>;
});

IconInput.propTypes = {
  extraClassName: PropTypes.string, //the customized class need to add
  leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  block: PropTypes.bool,
};

const Input = React.forwardRef((props, ref) => {
  const {
    borderType,
    size = 'medium',
    type = 'text',
    block,
    className = 'input',
    extraClassName,
    disabled,
    ...otherProps
  } = props;

  let borderTypeCls = InputBorderType[borderType];

  let clsName = clsx(extraClassName, className, {
    [size]: size,
    block: block,
    [borderTypeCls]: borderTypeCls,
  });

  if (type.toLowerCase() === 'textarea') {
    return <Element nativeType="textarea" className={clsName} {...otherProps}
                    disabled={disabled}/>;
  }
  const newProps = {type: type, ...otherProps};
  return (
      <Element nativeType="input" ref={ref} className={clsName}
               disabled={disabled}
               {...newProps}
      />
  );

});

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,//"text", "textarea", "password", "file", etc.
  block: PropTypes.bool,
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
};
Input.IconInput = IconInput;

export default Input;