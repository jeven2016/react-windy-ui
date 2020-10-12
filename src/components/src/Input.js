import React, {useContext, useRef, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {EventListener, InputBorderType} from './common/Constants';
import Element from './common/Element';
import {InputGroupContext} from './common/Context';
import {isNil} from './Utils';
import useMultipleRefs from './common/UseMultipleRefs';
import {useEvent} from './index';
import useErrorStyle from './common/useErrorStyle';

const IconInput = React.forwardRef((props, ref) => {
  const {
    className = 'icon-input',
    size = 'medium',
    block = false,
    leftIcon = false,
    icon,//todo
    inputProps,//todo
    iconProps,//todo
    placeholder,//todo
    errorType, //todo
    disabled = false,
    children,
    inputRef,
    extraClassName,
    ...otherProps
  } = props;
  const [active, setActive] = useState(false);
  const interInputRef = useRef(null);
  const multiInputRef = useMultipleRefs(inputRef, interInputRef);

  const ctx = useContext(InputGroupContext);
  const inputDisabled = isNil(ctx.disabled) ? disabled : ctx.disabled;
  let clsName = clsx(extraClassName, className, useErrorStyle(errorType), {
    'left-icon': leftIcon,
    [size]: size,
    block: block,
    disabled: inputDisabled,
    active: active,
  });

  useEvent(EventListener.focus, function() {
    !active && setActive(true);
  }, true, () => interInputRef.current);

  useEvent(EventListener.blur, function() {
    active && setActive(false);
  }, true, () => interInputRef.current);

  return <span className={clsName} {...otherProps} ref={ref}>
    <Input ref={multiInputRef} canFocus={false} placeholder={placeholder}
           disabled={inputDisabled} {...inputProps}/>
   <span className="icon-column" {...iconProps}>{icon}</span>
  </span>;
});

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
    canFocus = true,//todo
    errorType,//todo
    ...otherProps
  } = props;
  const ctx = useContext(InputGroupContext);
  let borderTypeCls = InputBorderType[borderType];
  const inputSize = isNil(ctx.size) ? size : ctx.size;

  let clsName = clsx(extraClassName, className, inputSize, useErrorStyle(errorType),
      {
        'read-only': readOnly,
        'textarea': type === 'textarea',
        block: block,
        'within-group': ctx.withinGroup,
        [borderTypeCls]: borderTypeCls,
        'with-focus': canFocus,
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

IconInput.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  block: PropTypes.bool,
  errorType: PropTypes.oneOf([null, '', 'ok', 'warning', 'error']),
  disabled: PropTypes.bool,
};

Input.propTypes = {
  errorType: PropTypes.oneOf([null, '', 'ok', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the input
  type: PropTypes.string,//"text", "textarea", "password", "file", etc.
  block: PropTypes.bool, //whether the input's width is '100%' and it occupies the whole row
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
};
Input.IconInput = IconInput;

export default Input;