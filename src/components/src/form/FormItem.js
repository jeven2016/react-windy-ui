import React, {useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {get, isNil, nonNil, set, validate} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import FormLabel from './FormLabel';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import FormMessage from "./FormMessage";

const traverse = (node, path) => {
  if (node.type === Widget) {
    return {foundSub: node, subPath: path};
  }
  //todo
}

const findWidget = (children) => {
  let found, path = [];
  const chdArray = React.Children.toArray(children);
  for (let [index, nodde] of chdArray.entries()) {
    const {foundSub, subPath} = traverse(node, [index + '']);
    if (nonNil(foundSub)) {
      found = foundSub;
      path = subPath;
      break;
    }
  }

  /* const found = React.Children.toArray(children).find((chd, index) => {
     path.push(index + '');
     if (chd.type === Widget) {
       return chd;
     } else {
       findWidget(chd.children);
     }
   });
 */
  return {found: found, path: path};
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

  const updateWidget = useCallback((chdArray) => {
    if (!formControlled || chdArray.length <= 0) {
      return chdArray;
    }
    const pureRules = getPureRules();
    const cloneProps = {
      ref: ctx.register(pureRules),
      name: name,
      errorType: hasErrors ? 'error' : null
    };
    if (chdArray.length === 1) {
      set(chdArray, ['0'], React.cloneElement(chdArray[0], cloneProps));
    } else {
      const {found, path} = findWidget(children);
      console.log(path);
      console.log(get(chdArray, path))
      set(chdArray, path, React.cloneElement(found, cloneProps));
    }
    console.log(chdArray)
    return chdArray;
  }, [formControlled, getPureRules, hasErrors]);

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
      const labeIndex = chdArray.findIndex(elem => elem.type === FormLabel);
      if (labeIndex > -1) {
        realLabel = chdArray.splice(labeIndex, 1);
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