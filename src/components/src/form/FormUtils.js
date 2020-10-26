import React from 'react';
import {get, isNil, nonNil, validate} from '../Utils';
import FormLabel from './FormLabel';
import FormItem from './FormItem';
import FormMessage from './FormMessage';

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
 * @param children
 * @returns {null|*}
 */
export const filterLabel = (chdArray) => {
  const labelIndex = chdArray.findIndex(elem => elem.type === FormLabel);
  if (labelIndex > -1) {
    return chdArray.splice(labelIndex, 1);
  }
  return null;
};

export const createErrorMessages = (ctx, name, globalMsg, rules) => {
  return Object.entries(rules).map(([key, value]) => {
    if (key === 'message') {
      return null;
    }
    const msg = get(value, 'message');
    const hasMsg = !isNil(msg);
    const errorMsg = hasMsg ? msg : globalMsg;

    return nonNil(errorMsg) && <FormMessage key={`m-${key}`}
                                            error={ctx.errors[name]}
                                            validationType={key}
                                            message={errorMsg}/>;
  });
};

export const createFormMessages = (ctx, children, messages = []) => {

  React.Children.forEach(children, chd => {
    validate(!chd.props?.rootItem,
        'Root item cannot be embeded in other root item.');

    if (chd.type === FormItem && nonNil(chd.props.name)) {
      const rules = chd.props.rules;
      if (nonNil(rules)) {
        const itemErrMsgs = createErrorMessages(ctx, chd.props.name,
            rules.message,
            rules);

        itemErrMsgs.filter(err => nonNil(err)).
            forEach(err => messages.push(err));
      }

    }

    if (React.Children.count(chd.props?.children) > 0) {
      createFormMessages(ctx, chd.props.children, messages);
    }
  });

  return messages;
};