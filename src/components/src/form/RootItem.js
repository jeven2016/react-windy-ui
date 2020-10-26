import React, {useMemo} from 'react';
import clsx from 'clsx';
import {isNil, nonNil} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import {createFormMessages, filterLabel, useLabel} from './FormUtils';
import {FormItemContext} from '../common/Context';

const RootItem = React.forwardRef((props, ref) => {
  const {
    children,
    rootItem,
    direction,
    justify = JustifyContentType.start,
    justifyLabel = JustifyContentType.start,
    labelCol,
    controlCol,
    simple,
    extraClassName,
    className = 'form-item',
    compact = false,
    ...rest
  } = props;
  const ctx = useFormContext();
  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const isHorizontal = itemDirection === FormDirection.horizontal;

  const errorMessages = useMemo(() => {
    const messages = [];
    createFormMessages(ctx, children, messages);
    return messages;
  }, [children, ctx]);

  const labelComp = useLabel(props);
  const labelJustifyCls = JustifyContentType[justifyLabel];
  const labelCls = clsx('item-label', labelJustifyCls);
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;

  let chd = useMemo(() => {
    let realLabel = labelComp;
    let chdArray = React.Children.toArray(children);
    if (isNil(realLabel)) {
      realLabel = filterLabel(chdArray);
    }

    if (!isHorizontal) {
      return <>{labelComp}{chdArray}{errorMessages} </>;
    } else {
      return <><Row>
        <Col extraClassName={labelCls} {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{chdArray}</Col>
      </Row>
        {errorMessages.map(
            (err, index) => <Row key={`e-${index}-${err.props.validationType}`}>
              <Col extraClassName="item-label" {...itemLabelCol}> </Col>
              <Col {...itemControlCol}>{err}</Col>
            </Row>,
        )}
      </>;
    }
  }, [
    labelComp,
    isHorizontal,
    children,
    errorMessages,
    labelCls,
    itemLabelCol,
    itemControlCol]);

  const hasErrors = nonNil(ctx.errors) && Object.keys(ctx.errors).length > 0;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'non-compact': !compact && !hasErrors,
    'row': isHorizontal,

  });
  return <FormItemContext.Provider value={{rootItemControl: true}}>
    {simple ? chd : <div ref={ref} className={clsName} {...rest}>
      {chd}
    </div>}
  </FormItemContext.Provider>;
});

export default RootItem;