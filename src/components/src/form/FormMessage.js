import React from "react";
import {useTransition} from "react-spring";

const FormMessage = React.forwardRef((props, ref) => {
  const {
    error,
    validationType,
    type = 'error', //ok, error, warning,success, comment
    message,
    children,
  } = props;
/*  const transition = useTransition(error?.type === validationType, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });*/

  //get some flashing or flickering where the margin-bottom get involved
  /* return transition.map(({item, key, props: tranProps}) => {
     return item && <animated.div key={key} style={tranProps}
                                  className={`form-msg text ${type}`}>{message}{children}</animated.div>;
   });*/

  return error?.type === validationType
      && <div className={`form-msg text ${type}`}>{message}{children}</div>
});

export default FormMessage;