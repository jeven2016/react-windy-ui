import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Element from '../common/Element';
import useMultipleRefs from '../common/UseMultipleRefs';

const Button = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    nativeType,
    type,
    block,
    color,
    directRef,
    active = false,
    size,
    outline,
    circle,
    hasMinWidth,
    onClick,
    disabled = false,
    extraClassName,
    elementType: ElementType,
    ...otherProps
  } = props;

  const btnRef = ref ? ref : useRef(null);
  const multipleRefs = useMultipleRefs(btnRef, directRef);

  useEffect(() => {
    // focus && btnRef.current.focus();
  });

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [size]: size,
    [color]: color,
    block: block,
    disabled: disabled,
    active: active,
    outline: outline,
    circle: circle,
    'min-width': hasMinWidth,
  });

  return (
      <Element className={clsName} onClick={onClick} disabled={disabled}
               nativeType={nativeType ? nativeType : 'button'}
               {...otherProps}
               ref={multipleRefs}>
        {children}
      </Element>
  );
});

Button.defaultProps = {
  elementType: 'button',
  disabled: false,
  className: 'button',
  hasMinWidth: false,
};

Button.propTypes = {
  elementType: PropTypes.oneOf(['a', 'button']), // 'a' or 'button'
  type: PropTypes.string,   //it can only be blank or 'button' and it has nothing to do with native html type
  nativeType: PropTypes.oneOf(['button', 'reset', 'submit', 'a']), //the native html type, like 'button', 'reset' or 'submit'
  block: PropTypes.bool, //whether the button's width is '100%' and it occupies the whole row
  color: PropTypes.string, //the color, like "primary", "red"
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool, //disable this button
  active: PropTypes.bool, // active this button
  onClick: PropTypes.func, //the click callback provided
  size: PropTypes.oneOf(['large', 'medium', 'small', '']), //the size of the button
  outline: PropTypes.bool, //whether to display as outlined button
  circle: PropTypes.bool, //whether to display as a Circular button
  hasMinWidth: PropTypes.bool, // whether to set min width of the button
};

export default Button;
