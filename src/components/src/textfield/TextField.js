import React, {useMemo, useRef, useState} from "react";
import clsx from "clsx";
import useMultipleRefs from "../common/UseMultipleRefs";
import useEvent from "../common/UseEvent";
import {EventListener} from "../common/Constants";
import useEventCallback from "../common/useEventCallback";
import usePrevious from "../common/UsePrevious";
import {animated, useSpring} from "react-spring";
import {isBlank} from "../Utils";

const Type = {
  outline: 'outline',
  underline: 'underline'
}

const TextField = React.forwardRef((props, ref) => {
  const {
    required = false,
    className = "text-field",
    extraClassName,
    type = Type.outline,
    label,
    labelFixed = false,
    placeholder,
    disabled = false,
    nativeType = "text",
    ...rest
  } = props;
  const inputRef = useRef(null);
  const multiInputRef = useMultipleRefs(ref, inputRef);

  const [moveLabel, setMove] = useState(false);
  const [inputFocused, setFocused] = useState(false);

  const changeLabel = useEventCallback(() => {
    if (disabled) {
      return;
    }
    setMove(true);
    setFocused(true);
  });

  const revertLabel = useEventCallback((e) => {
    if (disabled) {
      return;
    }
    setMove(!isBlank(e.target.value));
    setFocused(false);
  });

  const getInput = useEventCallback(() => inputRef.current);

  const preHandler = usePrevious(changeLabel);

  console.log(`handler=${changeLabel === preHandler}`);

  useEvent(EventListener.click, changeLabel, !disabled, getInput);
  useEvent(EventListener.blur, revertLabel, !disabled, getInput);

  const clsName = clsx(extraClassName, className, type, {
    "show": moveLabel || labelFixed,
    "focused": inputFocused
  })


  const labelMovement = useMemo(() => {
    if (labelFixed) {
      return {labelTop: "0%", labelTransform: 'translate3d(0.75rem, -50%, 0)'}
    }

    return {
      labelTop: moveLabel ? '0%' : '50%',
      labelTransform: moveLabel ? 'translate3d(0.75rem, -50%, 0)' : 'translate3d(1rem, -50%, 0)'
    }
  }, [labelFixed, moveLabel])

  const {labelTop, labelTransform} = useSpring({
    from: labelMovement,
    to: labelMovement,
    config: {duration: 120},
  });

  return <>
    <div className={clsName}>
      {
        label && type === Type.outline &&
        <animated.span className="tf-label" style={{top: labelTop, transform: labelTransform}}>
          <span> {label}</span>
          {required && <span className="tf-required">*</span>}
        </animated.span>
      }
      <input type={nativeType} ref={multiInputRef} className="tf-input"
             placeholder={moveLabel || labelFixed ? placeholder : null} {...rest}/>
    </div>
  </>
});

export default TextField;