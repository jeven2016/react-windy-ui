import React from "react";
import {useForm} from 'react-hook-form';

const useCustomForm = (props) => {
  const formParms = useForm(props);

  return {
    form: formParms,
    ...formParms
  }
}

export default useCustomForm;