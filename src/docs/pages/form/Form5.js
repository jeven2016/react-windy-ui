import React from 'react';
import {Card, Form, Input} from 'react-windy-ui';

export default function Form4() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const {form} = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log(er, e);

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} onError={onError}>
          <Form.Item
              name="name"
              label="Name"
              rules={[{
                required: true,
                message: 'The username is required'
              }]}>
            Input:
            <Form.Widget>
              <Input/>
            </Form.Widget>
            Need Help?

          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}