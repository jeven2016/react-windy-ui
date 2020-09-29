import React from "react";
import {animated, useTransition} from "react-spring";

const FormMessage = React.forwardRef((props, ref) => {
  const {
    error,
    validationType,
    type = 'error', //ok, error, warning,success, comment
    message,
    children,
  } = props;
  const transition = useTransition(error?.type === validationType, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  return transition.map(({item, key, props: tranProps}) => {
    return item && <animated.h5 key={key} style={tranProps}
                                className={`form-msg text ${type}`}>{message}{children}</animated.h5>;
  });
});

export default FormMessage;