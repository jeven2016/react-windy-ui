import React from 'react';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconList,
  Navbar
} from 'react-windy-ui';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SampleBtn13 = () => {
  return (
    <>
      <div style={{ color: '#0ca0ff' }}>
        <Button inverted hasRipple>
          Default
        </Button>
        <Button inverted type="info" hasRipple>
          OK
        </Button>
        <Button inverted type="success" hasRipple circle>
          NO
        </Button>
      </div>

      <Navbar type="primary" style={{ marginTop: '2rem', background: '#000', color: '#fff' }}>
        <Navbar.Title>My Site</Navbar.Title>
        <Navbar.List>
          <Navbar.Item>
            <Button inverted circle color="green" hasBox={false} leftIcon={<IconArrowLeft />} />
          </Navbar.Item>
          <Navbar.Item>
            <Button inverted circle color="blue" hasBox={false} leftIcon={<IconList />} />
          </Navbar.Item>
          <Navbar.Item>
            <Button inverted circle color="red" hasBox={false} leftIcon={<IconArrowRight />} />
          </Navbar.Item>
          <Navbar.Item>
            <Button
              inverted
              circle
              color="blue"
              hasBox={false}
              leftIcon={<FontAwesomeIcon icon={faPhone} />}
            />
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </>
  );
};

export default SampleBtn13;
