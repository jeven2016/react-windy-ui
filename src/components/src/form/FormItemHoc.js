import React, {useCallback, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {isBlank, isNil, nonNil, validate} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import Widget from './Widget';
import RootItem from './RootItem';
import {cloneElement, cloneWidget, createErrorMessages, filterLabel, mapWidget, useLabel,} from './FormUtils';
import {FormItemContext} from '../common/Context';
import FormLabel from './FormLabel';

const FormItem = React.forwardRef((props, ref) => {
  const {
    className = 'form-item',
    compact = false,//todo
    extraClassName,
    direction,
    justify = JustifyContentType.start,
    justifyLabel = JustifyContentType.start,
    labelCol,
    controlCol,
    name,
    label,
    rules,
    required = false,
    hasRequiredIcon,
    iconPosition,
    renderMessage,
    equalWidth,
    children,
    simple,
    ...otherProps
  } = props;
  const ctx = useFormContext();
  const rootItemCtx = useContext(FormItemContext);
  if (nonNil(rules)) {
    validate(nonNil(name),
      'The name is required while the rules is configured in Form.Item');
  }

  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;
  const hasErrors = !isNil(name) && ctx.errors && ctx.errors[name];
  const formControlled = !isBlank(name) || nonNil(rules);
  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls);

  const getCloneProps = useCallback(() => ({
    ref: ctx.register(rules),
    name: name,
    errorType: hasErrors ? 'error' : null,
    pureRules: rules,
  }), [ctx, rules, name, hasErrors]);

  const updateWidget = useCallback((chdArray) => {
    if (!formControlled || chdArray.length <= 0) {
      return chdArray;
    }
    let finalChd;
    if (chdArray.length === 1) {
      //only one child found
      finalChd = chdArray[0].type === Widget ? cloneWidget(chdArray[0],
        getCloneProps()) : cloneElement(chdArray[0], getCloneProps(),
        ctx.control);
    } else {
      //deep find the widget
      finalChd = mapWidget(children, getCloneProps(), ctx.control);
    }
    return finalChd;
  }, [formControlled, getCloneProps, ctx.control, children]);

  const msg = useMemo(() => {
    if (!hasErrors || isNil(rules)) {
      return null;
    }
    return createErrorMessages(ctx, name, rules);
  }, [ctx, hasErrors, name, rules]);

  const getSimpleMsgRow = useCallback(() => {
    //no extra message row inserted while no errors appear and the item is compact or inline
    if (!hasErrors && (compact || itemDirection === FormDirection.inline)) {
      return null;
    }

    return <div className="message-row">{hasErrors && msg}</div>;
  }, [compact, hasErrors, itemDirection, msg]);

  const getOneMsgRow = useCallback(() => {
    if (!hasErrors && compact) {
      return null;
    }

    return <Row extraClassName="message-row">
      <Col>
        {hasErrors && msg}
      </Col>
    </Row>;
  }, [compact, hasErrors, msg]);

  const getGridMsgRow = useCallback(() => {
    if (!hasErrors && compact) {
      return null;
    }

    return <Row extraClassName="message-row">
      <Col extraClassName="item-label msg-row-control" {...itemLabelCol}> </Col>
      <Col {...itemControlCol}>{hasErrors && msg}</Col>
    </Row>;
  }, [compact, hasErrors, itemControlCol, itemLabelCol, msg]);

  const labelComp = useLabel(props);

  let chd = useMemo(() => {
    const chdArray = React.Children.toArray(children);
    let finalChd = updateWidget(chdArray);
    //if this item is within a root item, just render the origin children
    if (rootItemCtx.rootItemControl) {
      return finalChd;
    }

    let realLabel = labelComp;
    if (isNil(realLabel)) {
      realLabel = filterLabel(chdArray);
    }

    if (finalChd?.length > 1) {
      //the label should be excluded since the realLabel is the final label to render
      finalChd = finalChd.filter(f => f?.type !== FormLabel);
    }

    if (!isHorizontal) {
      return <>{realLabel}
        <div>{finalChd}{getSimpleMsgRow()}</div>
      </>;
    }

    const labelJustifyCls = JustifyContentType[justifyLabel];
    const labelCls = clsx('item-label', labelJustifyCls);

    if (isNil(realLabel)) {
      return <>
        {finalChd}
        {getOneMsgRow()}
      </>;
    } else {

      return <><Row align="center">
        <Col extraClassName={labelCls} {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{finalChd}</Col>
      </Row>
        {getGridMsgRow()}
      </>;
    }

  }, [
    children,
    updateWidget,
    rootItemCtx.rootItemControl,
    labelComp,
    isHorizontal,
    justifyLabel,
    getSimpleMsgRow,
    getOneMsgRow,
    itemLabelCol,
    itemControlCol,
    getGridMsgRow]);

  return simple ? chd : <div ref={ref} className={clsName} {...otherProps}>
    {chd}
  </div>;
});

const FormItemHoc = React.forwardRef((props, ref) => {
  const {
    rootItem = false,
    ...rest
  } = props;

  if (rootItem) {
    return <RootItem {...rest}/>;
  }

  return <FormItem {...rest}/>;
});

export default FormItemHoc;