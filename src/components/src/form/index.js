import Form from "./Form";
import FormItemHoc from "./FormItem";
import FormLabel from "./FormLabel";
import FormMessage from "./FormMessage";
import useCustomForm from "./UseCustomForm";
import Widget from "./Widget";

Form.Item = FormItemHoc;
Form.Label = FormLabel;
Form.Message = FormMessage;
Form.useForm = useCustomForm;
Form.Widget = Widget;

export default Form;