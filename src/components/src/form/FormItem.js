import React, {useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {get, isNil, nonNil, validate} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import FormLabel from './FormLabel';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import FormMessage from "./FormMessage";
import Widget from "./Widget";

const cloneWidget = (widget, props) => {
  const formCtrlNode = widget.props.children;

  validate(React.Children.count(formCtrlNode) === 1,
      'There should only be one child in "Form.Widget"');

  return React.cloneElement(widget, {
    children: React.cloneElement(formCtrlNode, props)
  });
}

const mapWidget = (chdArray, props) => {
  return React.Children.map(chdArray, chd => {
    if (chd.type === Widget) {
      return cloneWidget(chd, props);
    }

    const count = React.Children.count(chd.children);
    if (count <= 0) {
      return chd;
    }

    return mapWidget(chd.children, props);
  });
}

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
        "The name is required while the rules is configured");
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
  }, []);

  const getCloneProps = useCallback(() => ({
    ref: ctx.register(getPureRules()),
    name: name,
    errorType: hasErrors ? 'error' : null
  }), [name, getPureRules, hasErrors, ctx.register]);

  const updateWidget = useCallback((chdArray) => {
    if (!formControlled || chdArray.length <= 0) {
      return chdArray;
    }
    let finalChd;
    if (chdArray.length === 1) {
      finalChd = chdArray[0].type === Widget ? cloneWidget(chdArray[0],
          getCloneProps()) : React.cloneElement(chdArray[0], getCloneProps());
    } else {
      finalChd = mapWidget(children, getCloneProps());
    }
    return finalChd;
  }, [formControlled, getCloneProps, children]);

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
          ? <>{lableComp}{updatedChd} </>
          : updatedChd;
    }

    let realLabel = lableComp;
    if (isNil(realLabel)) {
      const labelIndex = chdArray.findIndex(elem => elem.type === FormLabel);
      if (labelIndex > -1) {
        realLabel = chdArray.splice(labelIndex, 1);
      }
    }

    if (nonNil(realLabel)) {
      return <Row>
        <Col extraClassName="item-label" {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{updateWidget(chdArray)}</Col>
      </Row>;
    }

    return children;
  }, [
    children,
    hasRequiredIcon,
    iconPosition,
    isHorizontal,
    itemControlCol,
    itemLabelCol,
    label,
    required,
    getCloneProps,
    updateWidget]);

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
                                                message={errorMsg}/>
      })
    }
    </>;
  }, [ctx.errors, hasErrors, name, rules]);

  return <div ref={ref} className={clsName} {...otherProps}>
    {chd}
    {msg}
  </div>;
});

export default FormItem;