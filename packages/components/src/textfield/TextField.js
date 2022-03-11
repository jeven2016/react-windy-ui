import React, { useCallback, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import useMultipleRefs from '../common/UseMultipleRefs';
import useEvent from '../common/UseEvent';
import { EventListener } from '../common/Constants';
import useEventCallback from '../common/useEventCallback';
import { animated, useSpring } from 'react-spring';
import { convertToArray, isBlank, isNil, nonNil, validate } from '../Utils';
import { IconPwdInvisible, IconPwdVisible } from '../icon';
import Select from '../select';
import PropTypes from 'prop-types';
import Element from '../common/Element';

const Shape = {
  outline: 'outline',
  underline: 'underline'
};

const Animation = {
  outline: {
    labelFixed: { labelTop: '0%', labelTransform: 'translate3d(0.75rem, -50%, 0)' },
    labelMove: {
      labelTop: { moveTo: '0%', revertTo: '50%' },
      labelTransform: { to: 'translate3d(0.75rem, -50%, 0)', revert: 'translate3d(1rem, -50%, 0)' }
    }
  },
  underline: {
    labelFixed: { labelTop: '0%', labelTransform: 'translate3d(0, -0.25rem, 0)' },
    labelMove: {
      labelTop: { moveTo: '0%', revertTo: '50%' },
      labelTransform: { to: 'translate3d(0, 0, 0)', revert: 'translate3d(0, -0.25rem, 0)' }
    }
  }
};

function getAnimation(type) {
  const animation = Animation[type];
  validate(!isNil(animation), 'Invalid type:' + type);
  return animation;
}

const TextField = React.forwardRef((props, ref) => {
  const {
    rootRef,
    shape = Shape.outline,
    required = false,
    className = 'text-field',
    extraClassName,
    label,
    labelFixed = false,
    placeholder,
    disabled = false,
    nativeType = 'text',
    hasBottomBar = true,
    hasToggleIcon = true,
    toggleIcons = [<IconPwdVisible />, <IconPwdInvisible />],
    leftItems,
    rightItems,
    block = false,
    select = false,
    children, //only works for select
    selectProps = {},
    size = 'medium',
    errorType,
    hasBox = true,
    ...rest
  } = props;
  const isOutline = shape === Shape.outline;
  const inputRef = useRef(null);
  const multiInputRef = useMultipleRefs(ref, inputRef);
  const intRootRef = useRef(null);
  const realRootRef = useMultipleRefs(rootRef, intRootRef);

  const [moveLabel, setMove] = useState(false);
  const [inputFocused, setFocused] = useState(false);

  const shouldLabelFixed = moveLabel || labelFixed || nonNil(props.value) || select;

  const rightElems = convertToArray(rightItems);
  const leftElems = convertToArray(leftItems);

  const changeLabel = useEventCallback(() => {
    setMove(true);
    setFocused(true);
  });

  const revertLabel = useEventCallback((e) => {
    setMove(!isBlank(e?.target?.value));
    setFocused(false);
  });

  const getInput = useEventCallback(() => (select ? intRootRef.current : inputRef.current));

  useEvent(EventListener.click, changeLabel, !disabled, getInput);
  useEvent(EventListener.blur, revertLabel, !disabled, getInput);

  const errorCls = isNil(errorType) ? null : clsx('error-info', errorType);

  const clsName = clsx(extraClassName, className, shape, size, errorCls, {
    block,
    show: shouldLabelFixed,
    focused: inputFocused,
    'with-bottom-bar': !isOutline && hasBottomBar,
    'with-box': hasBox
  });

  const labelMovement = useMemo(() => {
    const animation = getAnimation(shape);

    if (shouldLabelFixed) {
      return animation.labelFixed;
    }

    return {
      labelTop: moveLabel
        ? animation.labelMove.labelTop.moveTo
        : animation.labelMove.labelTop.revertTo,
      labelTransform: moveLabel
        ? animation.labelMove.labelTransform.to
        : animation.labelMove.labelTransform.revert
    };
  }, [moveLabel, shape, shouldLabelFixed]);

  const { labelTop, labelTransform } = useSpring({
    // from: labelMovement,
    to: labelMovement,
    config: { duration: 150 }
  });

  const createSelect = useCallback(() => {
    const optionType = (<option />).type;
    const { onActiveChange } = selectProps;

    const activeHandler = (nextActive, e) => {
      //if select menu is closed by selecting one of its items
      if (!nextActive && !intRootRef.current.contains(e.target)) {
        setFocused(false);
      }
      onActiveChange && onActiveChange(nextActive, e);
    };
    const newProps = { ...rest, ...selectProps, onActiveChange: activeHandler };
    return (
      <Select
        ref={intRootRef}
        placeholder={placeholder}
        disabled={disabled}
        block={block}
        size={size}
        {...newProps}>
        {React.Children.map(children, (chd, i) => {
          if (chd.type === optionType) {
            return <Select.Option {...chd.props} key={`opt-${i}`} />;
          }
          if (chd.type === Select.Option) {
            return chd;
          }
          return null;
        })}
      </Select>
    );
  }, [block, children, disabled, placeholder, rest, selectProps, size]);

  const inputElem = useMemo(() => {
    let input = select ? (
      createSelect()
    ) : (
      <input
        type={nativeType}
        ref={multiInputRef}
        className="tf-input"
        disabled={disabled}
        placeholder={shouldLabelFixed ? placeholder : null}
        {...rest}
      />
    );

    if (rightElems.length === 0 && leftElems.length === 0) {
      return input;
    }

    return (
      <div className="tf-input-wrapper">
        {leftElems.map((elem, i) => (
          <div className="tf-col left" key={`left-${i}`}>
            {elem}
          </div>
        ))}
        {input}
        {rightElems.map((elem, i) => (
          <div className="tf-col right" key={`right-${i}`}>
            {elem}
          </div>
        ))}
      </div>
    );
  }, [
    createSelect,
    disabled,
    leftElems,
    multiInputRef,
    nativeType,
    placeholder,
    rest,
    rightElems,
    select,
    shouldLabelFixed
  ]);

  return (
    <>
      <div className={clsName} ref={realRootRef}>
        {label && (
          <animated.span className="tf-label" style={{ top: labelTop, transform: labelTransform }}>
            <span> {label}</span>
            {required && <span className="tf-required">*</span>}
          </animated.span>
        )}
        {inputElem}
      </div>
    </>
  );
});

TextField.propTypes = {
  rootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  shape: PropTypes.oneOf(Object.keys(Shape)),
  required: PropTypes.bool,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  label: PropTypes.node,
  labelFixed: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  nativeType: PropTypes.string,
  hasBottomBar: PropTypes.bool,
  hasToggleIcon: PropTypes.bool,
  toggleIcons: PropTypes.any,
  leftItems: PropTypes.any,
  rightItems: PropTypes.any,
  block: PropTypes.bool,
  select: PropTypes.bool,
  selectProps: PropTypes.object,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
  hasBox: PropTypes.bool
};

export default TextField;
