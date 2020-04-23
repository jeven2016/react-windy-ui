import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import Element from '../common/Element';

const Button = React.forwardRef((props, ref) => {
  const {
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
    ...otherProps
  } = props;

  let clsName = useMemo(() => ({
    [type]: type,
    [size]: size,
    [color]: color,
    block: block,
    active: active,
    outline: outline,
    circle: circle,
    'min-width': hasMinWidth,
  }), [type, size, color, block, active, outline, circle]);

  let nativeTypeDef = useMemo(() => {
    const nativeElemType = nativeType === 'a' ? 'a' : 'button';
    const nativeBtnType = nativeType !== 'a' && nativeType !== 'button' ? {
      type: nativeType,
    } : {};
    return {nativeElemType, nativeBtnType};
  }, [nativeType]);

  return (
      <Element
          moreClassSuffix={clsName}
          onClick={onClick}
          disabled={disabled}
          setDisabledAttr={true}
          nativeType={nativeTypeDef.nativeElemType}
          {...nativeTypeDef.nativeBtnType}
          {...otherProps}
          ref={ref}/>
  );
});

Button.defaultProps = {
  nativeType: 'button',
  disabled: false,
  className: 'button',
  hasMinWidth: false,
};

Button.propTypes = {
  type: PropTypes.string,   //it can only be 'primary', 'secondary', 'info', 'warning', 'error', etc.
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
