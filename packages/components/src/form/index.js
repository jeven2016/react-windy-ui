import Form from './Form';
import FormItemHoc from './FormItemHoc';
import FormLabel from './FormLabel';
import FormMessage from './FormMessage';
import Widget from './Widget';
import {useForm} from 'react-hook-form';

const useHooForm = (props) => {
  const formParms = useForm(props);

  return {
    form: formParms,
    ...formParms,
  };
};

Form.Item = FormItemHoc;
Form.Label = FormLabel;
Form.Message = FormMessage;
Form.useForm = useHooForm;
Form.Widget = Widget;

export default Form;