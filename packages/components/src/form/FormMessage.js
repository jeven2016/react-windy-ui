import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { nonNil } from '../Utils';

const FormMessage = React.forwardRef((props, ref) => {
  const {
    errors,
    name,

    errorType = 'error', //ok, error, warning,success, comment
    message,
    children
  } = props;

  //render static message
  if (nonNil(message)) {
    return (
      <div className={`form-msg text ${errorType}`}>
        {message}
        {children}
      </div>
    );
  }

  //render react-hook-form message
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message, messages }) => {
        if (nonNil(message)) {
          return <div className={`form-msg text ${errorType}`}>{message}</div>;
        }

        if (nonNil(messages)) {
          return Object.entries(messages).map(([type, msg]) => (
            <div key={type} className={`form-msg text ${errorType}`}>
              {msg}
            </div>
          ));
        }
        return null;
      }}
    />
  );
  /*if (nonNil(validationType) && error?.type !== validationType) {
    return null;
  }

  return <div className={`form-msg text ${type}`}>{message}{children}</div>*/
});

export default FormMessage;
