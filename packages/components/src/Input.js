import React, {useCallback, useContext, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {EventListener, InputBorderType} from './common/Constants';
import Element from './common/Element';
import {getErrorClsName, isNil, nonNil, validate} from './Utils';
import useMultipleRefs from './common/UseMultipleRefs';
import {useEvent} from './index';
import {IconPwdInvisible, IconPwdVisible} from './Icons';
import {InputGroupContext} from './common/Context';

/**
 * Input Component
 */
const PureInput = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'input',
    size = 'medium',
    type = 'text',
    disabled = false,
    block = true,
    hasBox = true,
    borderType,
    readOnly = false,
    canFocus = true,
    errorType,
    ...otherProps
  } = props;
  const ctx = useContext(InputGroupContext);
  let borderTypeCls = InputBorderType[borderType];
  const inputSize = isNil(ctx.size) ? size : ctx.size;

  let clsName = clsx(extraClassName, className, inputSize,
    getErrorClsName(errorType),
    {
      'read-only': readOnly,
      'textarea': type === 'textarea',
      block: block,
      'within-group': ctx.withinGroup,
      [borderTypeCls]: borderTypeCls,
      'with-focus': canFocus,
      'with-input-box': hasBox,
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
             autoComplete='off'
             setDisabledAttr={true}
             readOnly={readOnly}
             disabled={disabled}
             {...newProps}
    />
  );

});

/**
 * Icon Input
 */
const IconInput = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'icon-input',
    size = 'medium',
    block = true,
    hasBox = true,
    icon,
    leftIcon = false,
    iconProps,
    rightIcons = [],//format: [<Icon/>]
    rootProps,
    rootRef,
    placeholder,
    errorType,
    disabled = false,
    ...otherProps
  } = props;
  const [active, setActive] = useState(false);
  const interInputRef = useRef(null);
  const multiInputRef = useMultipleRefs(ref, interInputRef);

  let clsName = clsx(extraClassName, className, getErrorClsName(errorType), {
    'left-icon': leftIcon,
    [size]: size,
    block: block,
    disabled: disabled,
    active: active,
    'with-input-box': hasBox,
  });

  useEvent(EventListener.focus, function () {
    !active && setActive(true);
  }, true, () => interInputRef.current);

  useEvent(EventListener.blur, function () {
    active && setActive(false);
  }, true, () => interInputRef.current);

  const restIcons = useCallback(() => {
    return React.Children.map(rightIcons,
      node => <span className="icon-column right" unselectable="on" {...iconProps}>{node}</span>);
  }, [iconProps, rightIcons]);

  return <span className={clsName} {...rootProps} ref={rootRef}>
    {leftIcon && restIcons()}
    <PureInput ref={multiInputRef} canFocus={false} placeholder={placeholder}
               size={size}
               disabled={disabled} {...otherProps}/>
    {icon && <span className="icon-column" unselectable="on" {...iconProps}>{icon}</span>}
    {!leftIcon && restIcons()}
  </span>;
});

/**
 * Password Component
 */
const Password = React.forwardRef((props, ref) => {
  const {
    rootRef,
    hasToggleIcon = true,
    toggleIcons = [<IconPwdVisible/>, <IconPwdInvisible/>],
    type = 'password',
    leftIcon,
    rightIcons = [],
    ...otherProps
  } = props;
  validate(type === 'password', 'The type can only be password');

  validate(toggleIcons.length === 2,
    'There should be two icons for selection.');
  const [visible, setVisible] = useState(false);

  const change = useCallback((e) => {
    setVisible(pre => !pre);
  }, [setVisible]);

  const validIcon = useMemo(() => {
    const finalIcon = visible ? toggleIcons[0] : toggleIcons[1];
    return React.cloneElement(finalIcon, {
      onClick: change,
    });
  }, [visible, toggleIcons, change]);

  const inputType = visible ? 'text' : type;
  const preRightIcons = nonNil(rightIcons) ? rightIcons : [];
  const icons = hasToggleIcon ? [...preRightIcons, validIcon] : [...preRightIcons];
  return <IconInput leftIcon={leftIcon} rootRef={rootRef} ref={ref}
                    type={inputType}
                    rightIcons={icons}  {...otherProps}/>;
});

/**
 * Input Component
 */
const Input = React.forwardRef((props, ref) => {
  const {rootRef, type, icon, rightIcons, ...otherProps} = props;
  const isPwd = nonNil(type) && type.toLowerCase() === 'password';
  if (nonNil(icon) || nonNil(rightIcons) || isPwd) {
    let TagName = isPwd ? Password : IconInput;
    return <TagName type={type} rootRef={rootRef} icon={icon} rightIcons={rightIcons}
                    ref={ref}  {...otherProps}/>;
  }
  return <PureInput type={type} ref={ref} {...otherProps}/>;
});

Input.isIconInput = (comp) => {
  return nonNil(comp) && nonNil(comp.props.icon);
};

IconInput.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  block: PropTypes.bool,
  hasBox: PropTypes.bool,
  icon: PropTypes.node,
  iconProps: PropTypes.object,
  leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
  rightIcons: PropTypes.arrayOf(PropTypes.node),
  rootProps: PropTypes.object,
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
  placeholder: PropTypes.string,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
  disabled: PropTypes.bool,
};

PureInput.propTypes = {
  extraClassName: PropTypes.string, //the customized class need to add
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the input
  type: PropTypes.string,//"text", "textarea", "password", "file", etc.
  disabled: PropTypes.bool,
  block: PropTypes.bool, //whether the input's width is '100%' and it occupies the whole row
  hasBox: PropTypes.bool,
  borderType: PropTypes.oneOf(['ok', 'warning', 'error']),
  readOnly: PropTypes.bool,
  canFocus: PropTypes.bool,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
};

Password.propTypes = {
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  ]),
  hasToggleIcon: PropTypes.bool,
  toggleIcons: PropTypes.arrayOf(PropTypes.node),
  type: PropTypes.string,
  leftIcon: PropTypes.bool,
  rightIcons: PropTypes.arrayOf(PropTypes.node),
};

Input.IconInput = IconInput;

export default Input;