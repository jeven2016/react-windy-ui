import React from 'react';
import { Button, Form, IconAccount, Input } from 'react-windy-ui';

export default function Form5() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const { form } = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log(er, e);

  return (
    <>
      <div className="doc doc-row space">
        <Form form={form} onSubmit={onSubmit} onError={onError}>
          <Form.Item
            name="name"
            label="Name:"
            rules={{
              required: {
                value: true,
                message: 'The name is required'
              }
            }}
          >
            <h5 className="text comment">please enter your name here</h5>
            <div>
              <div>
                <Form.Widget>
                  <Input block icon={<IconAccount />} />
                </Form.Widget>
              </div>
            </div>
            <h5 className="text comment">Need Help ?</h5>
          </Form.Item>
          <Form.Item direction="horizontal" compact={true}>
            <Button nativeType="submit" block color="blue">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
