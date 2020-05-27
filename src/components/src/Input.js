import React, {useContext} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputBorderType} from './common/Constants';
import Element from './common/Element';
import {InputGroupContext} from './common/Context';
import {isNil} from './Utils';

const IconInput = React.forwardRef((props, ref) => {
  const {
    className = 'icon-input',
    size = 'medium',
    block = false,
    leftIcon = false,
    disabled = false,
    borderType,
    children,
    inputRef,
    extraClassName,
    ...otherProps
  } = props;
  const ctx = useContext(InputGroupContext);
  const inputDisabled = isNil(ctx.disabled) ? disabled : ctx.disabled;
  let borderTypeCls = InputBorderType[borderType];
  let clsName = clsx(extraClassName, className, {
    'left-icon': leftIcon,
    [size]: size,
    block: block,
    disabled: inputDisabled,
    [borderTypeCls]: borderTypeCls,
  });

  let newChildren = children;
  if (newChildren) {
    newChildren = React.Children.map(children, chd => {
      if (chd.type === Input) {
        return React.cloneElement(chd,
            {ref: inputRef, disabled: inputDisabled});
      }
      return chd;
    });
  }

  return <span className={clsName} {...otherProps} ref={ref}>
    {newChildren}
  </span>;
});

IconInput.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  block: PropTypes.bool,
  borderType: PropTypes.oneOf(['ok', 'warning', 'error']),
  disabled: PropTypes.bool,
};

const Input = React.forwardRef((props, ref) => {
  const {
    className = 'input',
    size = 'medium',
    type = 'text',
    disabled = false,
    block = false,
    borderType,
    extraClassName,
    readOnly = false,
    ...otherProps
  } = props;
  const ctx = useContext(InputGroupContext);
  let borderTypeCls = InputBorderType[borderType];
  const inputSize = isNil(ctx.size) ? size : ctx.size;

  let clsName = clsx(extraClassName, className, inputSize, {
    'read-only': readOnly,
    'textarea': type === 'textarea',
    block: block,
    'within-group': ctx.withinGroup,
    [borderTypeCls]: borderTypeCls,
  });

  if (type.toLowerCase() === 'textarea') {
    return <Element nativeType="textarea"
                    className={clsName}
                    setDisabledAttr={true}
                    disabled={disabled}
                    readOnly={readOnly}
                    {...otherProps}/>;
  }
  const newProps = {type: type, ...otherProps};
  return (
      <Element nativeType="input" ref={ref} className={clsName}
               type="text"
               setDisabledAttr={true}
               readOnly={readOnly}
               disabled={disabled}
               {...newProps}
      />
  );

});

Input.propTypes = {
  borderType: PropTypes.oneOf(['ok', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the input
  type: PropTypes.string,//"text", "textarea", "password", "file", etc.
  block: PropTypes.bool, //whether the input's width is '100%' and it occupies the whole row
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
};
Input.IconInput = IconInput;

export default Input;