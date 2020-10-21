import React, {useCallback, useContext, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {EventListener, InputBorderType} from './common/Constants';
import Element from './common/Element';
import {InputGroupContext} from './common/Context';
import {isNil, nonNil, validate} from './Utils';
import useMultipleRefs from './common/UseMultipleRefs';
import {useEvent} from './index';
import useErrorStyle from './common/useErrorStyle';
import {IconPwdInvisible, IconPwdVisible} from "./Icons";

//todo: update doc
const IconInput = React.forwardRef((props, ref) => {
  const {
    className = 'icon-input',
    size = 'medium',
    block = false,
    leftIcon = false,
    rightIcons = [],//format: [<Icon/>]
    icon,//todo
    // inputProps,//todo
    rootProps,//todo
    rootRef,
    iconProps,//todo
    placeholder,//todo
    errorType, //todo
    disabled = false,
    extraClassName,
    ...otherProps
  } = props;
  const [active, setActive] = useState(false);
  const interInputRef = useRef(null);
  const multiInputRef = useMultipleRefs(ref, interInputRef);

  const ctx = useContext(InputGroupContext);
  const inputDisabled = isNil(ctx.disabled) ? disabled : ctx.disabled;
  let clsName = clsx(extraClassName, className, useErrorStyle(errorType), {
    'left-icon': leftIcon,
    [size]: size,
    block: block,
    disabled: inputDisabled,
    active: active,
  });

  useEvent(EventListener.focus, function () {
    !active && setActive(true);
  }, true, () => interInputRef.current);

  useEvent(EventListener.blur, function () {
    active && setActive(false);
  }, true, () => interInputRef.current);

  const restIcons = useCallback(() => {
    return React.Children.map(rightIcons,
        node => <span className="icon-column right">{node}</span>);
  }, [rightIcons]);

  return <span className={clsName} {...rootProps} ref={rootRef}>
    {leftIcon && restIcons()}
    <Input ref={multiInputRef} canFocus={false} placeholder={placeholder}
           size={size}
           disabled={inputDisabled} {...otherProps}/>
   <span className="icon-column" {...iconProps}>{icon}</span>
    {!leftIcon && restIcons()}
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

  let clsName = clsx(extraClassName, className, inputSize,
      useErrorStyle(errorType),
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

//todo
const Password = React.forwardRef((props, ref) => {
  const {
    rootRef,
    hasToggleIcon = true,
    toggleIcons = [<IconPwdVisible/>, <IconPwdInvisible/>],
    type = 'password',
    leftIcon,
    ...otherProps
  } = props;
  validate(type === 'password', 'The type can only be password');

  validate(toggleIcons.length === 2, "There should be two icons for switching.")
  const [visible, setVisible] = useState(false);

  const change = useCallback((e) => {
    setVisible(pre => !pre);
  }, [setVisible]);

  const validIcon = useMemo(() => {
    const rightIcon = visible ? toggleIcons[0] : toggleIcons[1];
    return React.cloneElement(rightIcon, {
      onClick: change
    })
  }, [visible, toggleIcons, change]);

  const inputType = visible ? 'text' : type;
  if (nonNil(props.icon)) {
    const rightIcons = hasToggleIcon ? [validIcon] : [];
    return <IconInput leftIcon={leftIcon} rootRef={rootRef} ref={ref}
                      type={inputType}
                      rightIcons={rightIcons}  {...otherProps}/>;
  }
  return <Input ref={ref} type={inputType} {...otherProps}/>
});

const InputHoc = React.forwardRef((props, ref) => {
  const {rootRef, type, icon, ...otherProps} = props;
  const isPwd = nonNil(type) && type.toLowerCase() === 'password';
  if (nonNil(icon) || isPwd) {
    let TagName = isPwd ? Password : IconInput;
    return <TagName type={type} rootRef={rootRef} icon={icon}
                    ref={ref}  {...otherProps}/>;
  }
  return <Input type={type} ref={ref} {...otherProps}/>
})

InputHoc.isIconInput = (comp) => {
  return nonNil(comp) && nonNil(comp.props.icon);
}

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
InputHoc.IconInput = IconInput;

export default InputHoc;