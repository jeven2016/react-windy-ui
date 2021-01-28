import React from 'react';
import {nonNil, validate} from '../Utils';
import FormLabel from './FormLabel';
import FormItem from './FormItemHoc';
import FormMessage from './FormMessage';
import Select from '../select';
import clsx from 'clsx';
import {Controller} from 'react-hook-form';
import Checkbox from '../Checkbox';
import Radio, {RadioGroup} from '../Radio';
import Widget from './Widget';

export const useLabel = (props) => {
  const {
    label,
    required,
    hasRequiredIcon,
    iconPosition,
  } = props;

  return nonNil(label) ? <FormLabel required={required}
                                    hasRequiredIcon={hasRequiredIcon}
                                    iconPosition={iconPosition}>
    {label}
  </FormLabel> : null;
};

/**
 * filter label and modify the origin array
 * @param chdArray
 */
export const filterLabel = (chdArray) => {
  const labelIndex = chdArray.findIndex(elem => elem.type === FormLabel);
  if (labelIndex > -1) {
    return chdArray.splice(labelIndex, 1);
  }
  return null;
};

export const createErrorMessages = (ctx, name, rules) => {
  if (nonNil(rules)) {
    return <FormMessage name={name} errors={ctx.errors}/>;
  }
  return null;
};

export const createFormMessages = (ctx, children, messages = []) => {
  React.Children.forEach(children, chd => {
    validate(!chd.props?.rootItem,
      'Root item cannot be embedded in other root item.');

    if (chd.type === FormItem && nonNil(chd.props.name)) {
      const rules = chd.props.rules;
      if (nonNil(rules)) {
        const itemErrMsg = createErrorMessages(ctx, chd.props.name,
          rules);

        nonNil(itemErrMsg) && messages.push(itemErrMsg);
      }
    }

    if (React.Children.count(chd.props?.children) > 0) {
      createFormMessages(ctx, chd.props.children, messages);
    }
  });

  return messages;
};

export const cloneElement = (elem, props, control) => {
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
                         defaultValue=""
                         rules={pureRules}
                         control={control} {...newProps}/>;

    case Checkbox:
    case Radio:
    case RadioGroup:
      const ctlProps = {
        ...elem.props, ...restProps,
        extraClassName: clsx(originExCls, 'form-control'),
      };
      return <Controller as={elem.type}
                         rules={pureRules}
                         control={control} {...ctlProps}/>;

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

export const cloneWidget = (widget, props, control) => {
  const formCtrlNode = widget.props.children;

  validate(React.Children.count(formCtrlNode) === 1,
    'There should only be one child in "Form.Widget"');

  return React.cloneElement(widget, {
    children: cloneElement(formCtrlNode, props, control),
  });
};

//An alternative is using lodash get & set functions to update the widget by
// path
export const mapWidget = (chdArray, props, control) => {
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
