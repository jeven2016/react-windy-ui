import React, {useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {get, isNil, nonNil, validate} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import FormLabel from './FormLabel';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import FormMessage from './FormMessage';
import Widget from './Widget';
import Select from '../select';

const cloneElement = (elem, props) => {
  let newProps;
  let originExCls = elem.props.extraClassName;
  if (elem.type === Select) {
    originExCls = elem.props.inputProps?.extraClassName;
    const extraCls = clsx(originExCls, 'form-control');
    newProps = {
      ...props,
      inputProps: {
        ...elem.props.inputProps,
        extraClassName: extraCls,
      },
    };
  } else {
    const extraCls = clsx(originExCls, 'form-control');
    newProps = {
      ...props,
      extraClassName: extraCls,
    };
  }
  return React.cloneElement(elem, newProps);
};

const cloneWidget = (widget, props) => {
  const formCtrlNode = widget.props.children;

  validate(React.Children.count(formCtrlNode) === 1,
      'There should only be one child in "Form.Widget"');

  return React.cloneElement(widget, {
    children: cloneElement(formCtrlNode, props),
  });
};

//An alternative is using lodash get & set functions to update the widget by
// path
const mapWidget = (chdArray, props) => {
  let found = false;
  return React.Children.map(chdArray, chd => {
    if (chd.type === Widget) {
      found = true;
      return cloneWidget(chd, props);
    }

    if (found) {
      return chd;
    }
    const count = React.Children.count(chd.props?.children);
    if (count <= 0) {
      return chd;
    }

    return React.cloneElement(chd,
        {children: mapWidget(chd.props.children, props)});
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
    ...otherProps
  } = props;
  const ctx = useFormContext();
  if (nonNil(rules)) {
    validate(nonNil(name),
        'The name is required while the rules is configured');
  }

  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;
  const hasErrors = !isNil(name) && ctx.errors && ctx.errors[name];
  const formControlled = nonNil(name) || nonNil(rules);
  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'non-compact': !compact && !hasErrors,
    'row': isHorizontal,

  });

  const getPureRules = useCallback(() => {
    if (!formControlled) {
      return null;
    }
    const {message, ...restRules} = rules;
    return restRules;
  }, [formControlled, rules]);

  const getCloneProps = useCallback(() => ({
    ref: ctx.register(getPureRules()),
    name: name,
    errorType: hasErrors ? 'error' : null,
  }), [ctx, getPureRules, name, hasErrors]);

  const updateWidget = useCallback((chdArray) => {
    if (!formControlled || chdArray.length <= 0) {
      return chdArray;
    }
    let finalChd;
    if (chdArray.length === 1) {
      finalChd = chdArray[0].type === Widget ? cloneWidget(chdArray[0],
          getCloneProps()) : cloneElement(chdArray[0], getCloneProps());
    } else {
      finalChd = mapWidget(children, getCloneProps());
    }
    return finalChd;
  }, [formControlled, getCloneProps, children]);

  const msg = useMemo(() => {
    if (!hasErrors || isNil(rules)) {
      return null;
    }
    const globalMsg = rules.message;
    return <> {
      Object.entries(rules).map(([key, value]) => {
        const msg = get(value, 'message');
        const hasMsg = !isNil(msg);
        const errorMsg = hasMsg ? msg : globalMsg;

        return nonNil(errorMsg) && <FormMessage key={`m-${key}`}
                                                error={ctx.errors[name]}
                                                validationType={key}
                                                message={errorMsg}/>;
      })
    }
    </>;
  }, [ctx.errors, hasErrors, name, rules]);

  let chd = useMemo(() => {
    const lableComp = nonNil(label) ? <FormLabel required={required}
                                                 hasRequiredIcon={hasRequiredIcon}
                                                 iconPosition={iconPosition}>
      {label}
    </FormLabel> : null;

    const chdArray = React.Children.toArray(children);
    if (!isHorizontal) {
      const updatedChd = updateWidget(chdArray);
      return nonNil(label)
          ? <>{lableComp}{updatedChd}{msg} </>
          : <>{updatedChd}{msg}</>;
    }

    let realLabel = lableComp;
    if (isNil(realLabel)) {
      const labelIndex = chdArray.findIndex(elem => elem.type === FormLabel);
      if (labelIndex > -1) {
        realLabel = chdArray.splice(labelIndex, 1);
      }
    }

    if (nonNil(realLabel)) {
      const labelJustifyCls = JustifyContentType[justifyLabel];
      const labelCls = clsx('item-label', labelJustifyCls);
      return <><Row>
        <Col extraClassName={labelCls} {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{updateWidget(chdArray)}</Col>
      </Row>
        {hasErrors &&
        <Row>
          <Col extraClassName="item-label" {...itemLabelCol}> </Col>
          <Col {...itemControlCol}>{msg}</Col>
        </Row>
        }
      </>;
    }

    return children;
  }, [
    label,
    required,
    hasRequiredIcon,
    iconPosition,
    children,
    isHorizontal,
    updateWidget,
    msg,
    justifyLabel,
    itemLabelCol,
    itemControlCol,
    hasErrors]);

  return <div ref={ref} className={clsName} {...otherProps}>
    {chd}
  </div>;
});

export default FormItem;