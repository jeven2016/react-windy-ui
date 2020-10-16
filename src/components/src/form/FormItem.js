import React, {useMemo} from 'react';
import clsx from 'clsx';
import {isNil} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import FormLabel from './FormLabel';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from "react-hook-form";

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
    name,
    renderMessage,
    children,
    ...otherProps
  } = props;
  const ctx = useFormContext();
  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;
  const hasErrors = !isNil(name) && ctx.form && ctx.form.errors
      && ctx.form.errors[name];
  console.log(ctx.register)
  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'non-compact': !compact && !hasErrors,
    'row': isHorizontal,

  });

  let chd = useMemo(() => {
    if (!isHorizontal || React.Children.count(children) === 0) {
      return children;
    }

    const chdArray = React.Children.toArray(children);
    const labeIndex = chdArray.findIndex(elem => elem.type === FormLabel);
    if (labeIndex > -1) {
      const labelChd = chdArray.splice(labeIndex, 1);
      return <Row>
        <Col extraClassName="item-label" {...itemLabelCol}>{labelChd}</Col>
        <Col {...itemControlCol}>{chdArray}</Col>
      </Row>;
    }

    return null;
  }, [children, isHorizontal, itemControlCol, itemLabelCol]);

  return <div ref={ref} className={clsName} {...otherProps}>
    {chd}
  </div>;
});

export default FormItem;