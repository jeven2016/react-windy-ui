import React from "react";
import useElement from "../common/useElement";

const ItemContent = React.forwardRef((props, ref) => {
  const {
    className = 'item-cnt',
    ...rest
  } = props;

  return useElement({...rest}, ref, className,
      {});
});

export default ItemContent;