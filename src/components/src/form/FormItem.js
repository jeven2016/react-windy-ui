import React, {useCallback, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {isBlank, isNil, nonNil, validate} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {Controller, useFormContext} from 'react-hook-form';
import Widget from './Widget';
import Select from '../select';
import RootItem from './RootItem';
import {createErrorMessages, filterLabel, useLabel} from './FormUtils';
import {FormItemContext} from '../common/Context';

const cloneElement = (elem, props, control) => {
  let newProps;
  let originExCls = elem.props.extraClassName;

  //for Controller, the pureRules is used by controller and the ref should be excluded in this case
  const {pureRules, ref, ...restProps} = props;

  let extraCls;
  switch (elem.type) {
    case Select :
      originExCls = elem.props.inputProps?.extraClassName;
      extraCls = clsx(originExCls, 'form-control');
      newProps = {
        ...elem.props,
        ...restProps,
        inputProps: {
          ...elem.props.inputProps,
          extraClassName: extraCls,
        },
      };
      //while the Controller is used, the rules should be moved from ref and
      //set via rules property of controller
      return <Controller as={Select}
                         rules={pureRules}
                         control={control} {...newProps}/>;

    default:
      extraCls = clsx(originExCls, 'form-control');
      newProps = {
        ref: ref,
        ...elem.props,
        ...restProps,
        extraClassName: extraCls,
      };
      return React.cloneElement(elem, newProps);
  }

};

const cloneWidget = (widget, props, control) => {
  const formCtrlNode = widget.props.children;

  validate(React.Children.count(formCtrlNode) === 1,
      'There should only be one child in "Form.Widget"');

  return React.cloneElement(widget, {
    children: cloneElement(formCtrlNode, props, control),
  });
};

//An alternative is using lodash get & set functions to update the widget by
// path
const mapWidget = (chdArray, props, control) => {
  let found = false;
  return React.Children.map(chdArray, chd => {
    if (chd.type === Widget) {
      found = true;
      return cloneWidget(chd, props, control);
    }

    if (found) {
      return chd;
    }
    const count = React.Children.count(chd.props?.children);
    if (count <= 0) {
      return chd;
    }

    return React.cloneElement(chd,
        {children: mapWidget(chd.props.children, props, control)});
  });
};

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
    children,
    simple,
    ...otherProps
  } = props;
  const ctx = useFormContext();
  const rootItemCtx = useContext(FormItemContext);
  if (nonNil(rules)) {
    validate(nonNil(name),
        'The name is required while the rules is configured');
  }

  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;
  const hasErrors = !isNil(name) && ctx.errors && ctx.errors[name];
  const formControlled = !isBlank(name) || nonNil(rules);
  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'non-compact': !compact && !hasErrors,
    'row': isHorizontal,

  });

  const getPureRules = useCallback(() => {
    if (!formControlled || isNil(rules)) {
      return null;
    }
    const {message, ...restRules} = rules;
    return restRules;
  }, [formControlled, rules]);

  const getCloneProps = useCallback(() => ({
    ref: ctx.register(getPureRules()),
    name: name,
    errorType: hasErrors ? 'error' : null,
    pureRules: getPureRules(),
  }), [ctx, getPureRules, name, hasErrors]);

  const updateWidget = useCallback((chdArray) => {
    if (!formControlled || chdArray.length <= 0) {
      return chdArray;
    }
    let finalChd;
    if (chdArray.length === 1) {
      finalChd = chdArray[0].type === Widget ? cloneWidget(chdArray[0],
          getCloneProps()) : cloneElement(chdArray[0], getCloneProps(),
          ctx.control);
    } else {
      finalChd = mapWidget(children, getCloneProps(), ctx.control);
    }
    return finalChd;
  }, [formControlled, getCloneProps, ctx.control, children]);

  const msg = useMemo(() => {
    if (!hasErrors || isNil(rules)) {
      return null;
    }
    return <div className="message-row">
      {createErrorMessages(ctx, name, rules)}
    </div>;
  }, [ctx, hasErrors, name, rules]);

  const labelComp = useLabel(props);

  let chd = useMemo(() => {
    const chdArray = React.Children.toArray(children);
    const finalChd = updateWidget(chdArray);
    //if this item is within a root item, just render the origin children
    if (rootItemCtx.rootItemControl) {
      return finalChd;
    }
    if (!isHorizontal) {
      return nonNil(label)
          ? <>{labelComp}{finalChd}{msg} </>
          : <>{finalChd}{msg}</>;
    }

    let errorRow = hasErrors &&
        <Row>
          <Col extraClassName="item-label" {...itemLabelCol}> </Col>
          <Col {...itemControlCol}>{msg}</Col>
        </Row>;

    const labelJustifyCls = JustifyContentType[justifyLabel];
    const labelCls = clsx('item-label', labelJustifyCls);

    let realLabel = labelComp;
    if (isNil(realLabel)) {
      realLabel = filterLabel(chdArray);
    }
    if (isNil(realLabel)) {
      return <>
        {finalChd}
        {hasErrors && <Row><Col>{msg}</Col></Row>}
      </>;
    } else {

      return <><Row>
        <Col extraClassName={labelCls} {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{finalChd}</Col>
      </Row>
        {hasErrors && <Row>
          <Col extraClassName="item-label" {...itemLabelCol}> </Col>
          <Col {...itemControlCol}>{msg}</Col>
        </Row>}
      </>;
    }

  }, [
    rootItemCtx.rootItemControl,
    children,
    isHorizontal,
    labelComp,
    updateWidget,
    hasErrors,
    itemLabelCol,
    itemControlCol,
    msg,
    justifyLabel,
    label]);

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