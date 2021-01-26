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

  const hasErrors = useMemo(() => {
    let existsErr = false;
    for (let err of errorMessages) {
      const currentErr = ctx.errors[err.props.name];
      if (nonNil(currentErr)) {
        existsErr = true;
        break;
      }
    }
    return existsErr;
  }, [ctx.errors, errorMessages]);

  let chd = useMemo(() => {
    let realLabel = labelComp;
    let chdArray = React.Children.toArray(children);
    if (isNil(realLabel)) {
      realLabel = filterLabel(chdArray);
    }

    if (!isHorizontal) {
      return <>{labelComp}{chdArray}{errorMessages} </>;
    } else {
      return <><Row align='center'>
        <Col extraClassName={labelCls} {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{chdArray}</Col>
      </Row>
        {
          !hasErrors && !compact && <div className="message-row"/>
        }
        {errorMessages.map(
          (err, index) => <Row align='center' key={`e-${index}-${err.props.validationType}`}>
            <Col extraClassName="item-label" {...itemLabelCol}> </Col>
            <Col {...itemControlCol}>{err}</Col>
          </Row>,
        )}
      </>;
    }
  }, [
    labelComp,
    children,
    isHorizontal,
    errorMessages,
    labelCls,
    itemLabelCol,
    itemControlCol,
    hasErrors,
    compact]);

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls);
  return <FormItemContext.Provider value={{rootItemControl: true}}>
    {simple ? chd : <div ref={ref} className={clsName} {...rest}>
      {chd}
    </div>}
  </FormItemContext.Provider>;
});

export default RootItem;