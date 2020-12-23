import React, {useState} from 'react';
import {Button, Modal, Select} from 'react-windy-ui';

export default function Modal4() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState('simple');
  const [bg, setBg] = useState('bg-color-pink');

  const close = () => setActive(false);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>

    <Button type="primary" onClick={() => setActive(true)}>Open</Button>

    <Modal active={active} type={type} onCancel={close}
           extraClassName={`${bg} text color-white`}
           size="large">
      <Modal.Header>
        Modal Header
      </Modal.Header>
      <Modal.Body>
        <div style={{height: '5rem'}}>
          <div className="doc doc-row">
            <span style={{
              marginRight: '1rem',
              fontWeight: '600',
            }}>Background:</span>

            <Select value={bg} onSelect={value => setBg(value)}
                    popupStyle={{height: '20rem', overflow: 'auto'}}>
              <Select.Option value="bg-color-pink">pink</Select.Option>
              <Select.Option value="bg-color-blue">blue</Select.Option>
              <Select.Option value="bg-color-brown">brown</Select.Option>
              <Select.Option value="bg-color-black">black</Select.Option>
              <Select.Option value="bg-color-cyan">cyan</Select.Option>
              <Select.Option value="bg-color-dark">dark</Select.Option>
              <Select.Option value="bg-color-green">green</Select.Option>
              <Select.Option value="bg-color-gray">gray</Select.Option>
              <Select.Option
                  value="bg-color-gray-darker">gray-darker</Select.Option>
              <Select.Option value="bg-color-light">light</Select.Option>
              <Select.Option value="bg-color-orange">orange</Select.Option>
              <Select.Option value="bg-color-purple">purple</Select.Option>
              <Select.Option value="bg-color-red">red</Select.Option>
              <Select.Option value="bg-color-yellow">yellow</Select.Option>
              <Select.Option value="bg-color-teal">teal</Select.Option>
              <Select.Option value="bg-color-violet">violet</Select.Option>
              <Select.Option value="bg-color-white">white</Select.Option>
            </Select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button hasMinWidth={true} color="green" onClick={close}>OK</Button>
        <Button hasMinWidth={true} color="red" onClick={close}>Cancel</Button>
      </Modal.Footer>
    </Modal>

  </>;
}