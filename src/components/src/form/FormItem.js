import React from "react";
import clsx from "clsx";
import {isNil, validate} from "../Utils";
import Widget from "./Widget";

const findWidget = (children) => {
  const found = React.Children.toArray(children).find(chd => {
    if (chd.type === Widget) {
      return chd;
    } else {
      findWidget(chd.children);
    }
  });

  return found;
}

const FormItem = React.forwardRef((props, ref) => {
  const {
    className = 'form-item',
    compact = false,//todo
    extraClassName,
    inline = false,

    name, //if name is set, the item is not customized form item
    errorType = 'error',
    rules,
    widget,

    children,
    ...otherProps
  } = props;

  !isNil(rules) && validate(!isNil(name),
      "The name is required while the rules is configured");

  let clsName = clsx(extraClassName, className, {
    inline,
    'with-msg': !compact,
    'normal': compact,
  });

  const customized = isNil(name);

  console.log(`size=${React.Children.count(children)}`)
  let validWidget = children;
  //need to generate a serials of components
  //traverse the children nodes and find the <Widget/>
  if (!customized) {
    validWidget = isNil(widget) ? findWidget(children) : widget
  }

  !customized && validate(!isNil(validWidget),
      `The widget (name=${name}) for this form item is invalid`);

  console.log(validWidget);
  return <div ref={ref} className={clsName} {...otherProps}>
    {children}
  </div>;
});

export default FormItem;