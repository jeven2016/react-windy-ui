import React, {useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {get, isNil, nonNil, set} from '../Utils';
import {FormDirection, JustifyContentType} from '../common/Constants';
import FormLabel from './FormLabel';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {useFormContext} from 'react-hook-form';
import FormMessage from "./FormMessage";
import Widget from "./Widget";

const findWidget = (children, path = []) => {
  const found = React.Children.toArray(children).find((chd, index) => {
    path.push(index + '');
    if (chd.type === Widget) {
      return chd;
    } else {
      findWidget(chd.children);
    }
  });

  return {found: found, path: nonNil(found) ? path : []};
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
  const itemDirection = isNil(direction) ? ctx.direction : direction;
  const itemLabelCol = isNil(labelCol) ? ctx.labelCol : labelCol;
  const itemControlCol = isNil(controlCol) ? ctx.controlCol : controlCol;
  const hasErrors = !isNil(name) && ctx.errors && ctx.errors[name];

  const isHorizontal = itemDirection === FormDirection.horizontal;

  let justifyCls = JustifyContentType[justify];
  let clsName = clsx(extraClassName, className, itemDirection, justifyCls, {
    'with-msg': !compact,
    'non-compact': !compact && !hasErrors,
    'row': isHorizontal,

  });

  //todo
  const updateWidgetRef = useCallback((chdArray) => {
    if (nonNil(name)) {
      if (chdArray.length === 0) {
        set(chdArray, ['0'], React.cloneElement(chdArray[0], {
          // ref:null
          name: 'hello'
        }));
      } else {
        const {found, path} = findWidget(children);
        const formComp = React.Children.only(found.children);
        set(chdArray, path, React.cloneElement(found, {
          name: 'hello'
          // ref:null
        }));
      }
    }
    return chdArray;
  }, []);

  let chd = useMemo(() => {
    const lableComp = nonNil(label) ? <FormLabel required={required}
                                                 hasRequiredIcon={hasRequiredIcon}
                                                 iconPosition={iconPosition}>
      {label}
    </FormLabel> : null;

    if (!isHorizontal) {
      return nonNil(label)
          ? <>lableComp{children} </>
          : children;
    }

    let realLabel = lableComp;
    let chdArray = children;
    if (isNil(realLabel)) {
      chdArray = React.Children.toArray(children);
      const labeIndex = chdArray.findIndex(elem => elem.type === FormLabel);
      if (labeIndex > -1) {
        realLabel = chdArray.splice(labeIndex, 1);
      }
    }

    if (nonNil(realLabel)) {
      return <Row>
        <Col extraClassName="item-label" {...itemLabelCol}>{realLabel}</Col>
        <Col {...itemControlCol}>{chdArray}</Col>
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
    required]);

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