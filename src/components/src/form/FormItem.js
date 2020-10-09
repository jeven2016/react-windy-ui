import React, {useContext, useMemo} from "react";
import clsx from "clsx";
import {isNil} from "../Utils";
import {FormDirection, JustifyContentType} from "../common/Constants";
import {FormContext} from "../common/Context";
import FormLabel from "./FormLabel";

/*const findWidget = (children) => {
  const found = React.Children.toArray(children).find(chd => {
    if (chd.type === Widget) {
      return chd;
    } else {
      findWidget(chd.children);
    }
  });

  return found;
}*/

const FormItem = React.forwardRef((props, ref) => {
  const {
    className = 'form-item',
    compact = false,//todo
    extraClassName,
    direction,
    justify = JustifyContentType.start,
    labelCol,
    controlCol,

    children,
    ...otherProps
  } = props;

  const ctx = useContext(FormContext);
  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;

  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'normal': compact,
    'row': isHorizontal
  });

  let chd = useMemo(() => {
    if (!isHorizontal) {
      return children;
    }
    //update labelCol and others todo
    const updatedChd = React.Children.map(children, (child => {
      if (child.type === FormLabel) {
        return React.cloneElement(child, {...itemLabelCol});
      }
      return child;
    }));
  }, [children]);

  return <div ref={ref} className={clsName} {...otherProps}>

  </div>;
});

export default FormItem;